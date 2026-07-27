import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";
const BOOKING_TZ = "Europe/London";
const RFC3339_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

/** Returns the IANA-zone offset (e.g. "+01:00") for the given wall date in that zone. */
function zoneOffset(dateYMD: string, tz: string): string {
  // Use noon UTC of the same date — safely away from any DST switch window.
  const probe = new Date(`${dateYMD}T12:00:00Z`);
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "longOffset" }).formatToParts(probe);
  const raw = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
  const m = raw.match(/([+-]\d{2}:\d{2})/);
  if (m) return m[1];
  if (/^GMT$/i.test(raw) || /^UTC$/i.test(raw)) return "+00:00";
  throw new Error(`Could not resolve timezone offset for ${tz} on ${dateYMD}.`);
}

/** Formats a wall date/time in `tz` as an RFC3339 string with explicit offset. */
function toRFC3339(dateYMD: string, timeHM: string, tz: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateYMD)) throw new Error(`Invalid date: ${dateYMD}`);
  if (!/^\d{2}:\d{2}$/.test(timeHM)) throw new Error(`Invalid time: ${timeHM}`);
  const offset = zoneOffset(dateYMD, tz);
  const s = `${dateYMD}T${timeHM}:00${offset}`;
  assertRFC3339(s, "datetime");
  return s;
}

/** Throws if the string is not an RFC3339 datetime carrying explicit timezone info. */
function assertRFC3339(value: string, label: string): void {
  if (!RFC3339_RE.test(value)) {
    throw new Error(`${label} must be RFC3339 with timezone offset (got: ${value}).`);
  }
}

function addMinutesRFC3339(dateYMD: string, timeHM: string, tz: string, minutes: number): string {
  const [h, m] = timeHM.split(":").map(Number);
  const total = h * 60 + m + minutes;
  // 30-minute slots inside 09–17 window never cross midnight; guard anyway.
  if (total < 0 || total >= 24 * 60) {
    throw new Error(`Slot end crosses day boundary: ${dateYMD} ${timeHM} +${minutes}m`);
  }
  const pad = (n: number) => String(n).padStart(2, "0");
  const end = `${pad(Math.floor(total / 60))}:${pad(total % 60)}`;
  return toRFC3339(dateYMD, end, tz);
}

const InputSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD"),
  slot: z.string().regex(/^\d{2}:\d{2}$/, "HH:MM"),
  notes: z.string().trim().max(2000).optional(),
});

const BusyInputSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD"),
});

export const getBusySlots = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => BusyInputSchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const connKey = process.env.GOOGLE_CALENDAR_API_KEY;
    if (!lovableKey || !connKey) {
      throw new Error("Google Calendar is not connected on the server.");
    }
    const tz = BOOKING_TZ;
    const timeMin = toRFC3339(data.date, "00:00", tz);
    const timeMax = `${data.date}T23:59:59${zoneOffset(data.date, tz)}`;
    assertRFC3339(timeMin, "timeMin");
    assertRFC3339(timeMax, "timeMax");
    const res = await fetch(`${GATEWAY_URL}/freeBusy`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timeMin,
        timeMax,
        timeZone: tz,
        items: [{ id: "primary" }],
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`Google Calendar freeBusy failed [${res.status}]: ${text}`);
      throw new Error(`Could not read calendar availability (${res.status}).`);
    }
    const json = await res.json() as { calendars?: { primary?: { busy?: Array<{ start: string; end: string }> } } };
    const busy = json.calendars?.primary?.busy ?? [];
    return { busy: busy.map((b) => ({ start: b.start, end: b.end })) };
  });

export const createBookingEvent = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const connKey = process.env.GOOGLE_CALENDAR_API_KEY;
    if (!lovableKey || !connKey) {
      throw new Error("Google Calendar is not connected on the server.");
    }

    const tz = BOOKING_TZ;
    const startDT = toRFC3339(data.date, data.slot, tz);
    const endDT = addMinutesRFC3339(data.date, data.slot, tz, 30);
    const ref = "HEL-" + Math.random().toString(36).slice(2, 8).toUpperCase();

    const body = {
      summary: `Strategy call · ${data.name}`,
      description: [
        `Booked via helleious.com`,
        `Ref: ${ref}`,
        `Guest: ${data.name} <${data.email}>`,
        data.notes ? `Notes: ${data.notes}` : null,
      ].filter(Boolean).join("\n"),
      start: { dateTime: startDT, timeZone: tz },
      end: { dateTime: endDT, timeZone: tz },
      attendees: [{ email: data.email, displayName: data.name }],
      conferenceData: {
        createRequest: {
          requestId: ref,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: { useDefault: true },
    };

    const url = `${GATEWAY_URL}/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Google Calendar insert failed [${res.status}]: ${text}`);
      throw new Error(`Could not create the calendar event (${res.status}).`);
    }

    const event = await res.json() as { id?: string; htmlLink?: string; hangoutLink?: string };
    return {
      ref,
      eventId: event.id ?? null,
      htmlLink: event.htmlLink ?? null,
      meetLink: event.hangoutLink ?? null,
    };
  });

const RescheduleSchema = z.object({
  eventId: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD"),
  slot: z.string().regex(/^\d{2}:\d{2}$/, "HH:MM"),
  refreshMeet: z.boolean().optional(),
});

export const rescheduleBookingEvent = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => RescheduleSchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const connKey = process.env.GOOGLE_CALENDAR_API_KEY;
    if (!lovableKey || !connKey) throw new Error("Google Calendar is not connected on the server.");

    const tz = BOOKING_TZ;
    const startDT = toRFC3339(data.date, data.slot, tz);
    const endDT = addMinutesRFC3339(data.date, data.slot, tz, 30);

    const body: Record<string, unknown> = {
      start: { dateTime: startDT, timeZone: tz },
      end: { dateTime: endDT, timeZone: tz },
    };
    if (data.refreshMeet) {
      body.conferenceData = {
        createRequest: {
          requestId: "HEL-" + Math.random().toString(36).slice(2, 10).toUpperCase(),
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      };
    }

    const url = `${GATEWAY_URL}/calendars/primary/events/${encodeURIComponent(data.eventId)}?conferenceDataVersion=1&sendUpdates=all`;
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(`Google Calendar patch failed [${res.status}]: ${text}`);
      throw new Error(`Could not reschedule the event (${res.status}).`);
    }
    const event = await res.json() as { id?: string; htmlLink?: string; hangoutLink?: string };
    return {
      eventId: event.id ?? data.eventId,
      htmlLink: event.htmlLink ?? null,
      meetLink: event.hangoutLink ?? null,
    };
  });

const CancelSchema = z.object({ eventId: z.string().min(1) });

export const cancelBookingEvent = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CancelSchema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const connKey = process.env.GOOGLE_CALENDAR_API_KEY;
    if (!lovableKey || !connKey) throw new Error("Google Calendar is not connected on the server.");
    const url = `${GATEWAY_URL}/calendars/primary/events/${encodeURIComponent(data.eventId)}?sendUpdates=all`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connKey,
      },
    });
    if (!res.ok && res.status !== 410) {
      const text = await res.text();
      console.error(`Google Calendar delete failed [${res.status}]: ${text}`);
      throw new Error(`Could not cancel the event (${res.status}).`);
    }
    return { ok: true };
  });