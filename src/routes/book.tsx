import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ArrowLeft, AlertTriangle, CalendarDays, CalendarClock, CheckCircle2, Clock, Mail, RefreshCw, Video, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { createBookingEvent, getBusySlots, rescheduleBookingEvent, cancelBookingEvent } from "@/lib/calendar.functions";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a strategy call — Helleious" },
      { name: "description", content: "Pick a date and time for your free 30-minute strategy call with the Helleious team." },
      { property: "og:title", content: "Book a strategy call — Helleious" },
      { property: "og:description", content: "Free 30-minute call. Concrete plan, no fluff." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const SLOTS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

type Booking = {
  date: Date;
  slot: string;
  ref: string;
  eventId: string | null;
  meetLink: string | null;
  htmlLink: string | null;
};

function fmtDateKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function BookPage() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<Booking | null>(null);
  const bookFn = useServerFn(createBookingEvent);
  const busyFn = useServerFn(getBusySlots);
  const [busy, setBusy] = useState<Array<{ start: string; end: string }>>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [slotsLoaded, setSlotsLoaded] = useState(false);
  const inFlightRef = useRef(false);

  const dateKey = date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
    : null;

  const loadBusy = useCallback(async (key: string, signal?: { cancelled: boolean }) => {
    if (inFlightRef.current) return; // dedupe overlapping requests
    inFlightRef.current = true;
    setLoadingSlots(true);
    setSlotsError(null);
    try {
      const r = await busyFn({ data: { date: key } });
      if (signal?.cancelled) return;
      setBusy(r.busy);
      setSlotsLoaded(true);
    } catch (e) {
      if (signal?.cancelled) return;
      setBusy([]);
      setSlotsLoaded(false);
      setSlotsError(e instanceof Error ? e.message : "Couldn't reach Google Calendar.");
    } finally {
      inFlightRef.current = false;
      if (!signal?.cancelled) setLoadingSlots(false);
    }
  }, [busyFn]);

  useEffect(() => {
    if (!dateKey) {
      setBusy([]); setSlotsError(null); setSlotsLoaded(false); return;
    }
    const signal = { cancelled: false };
    void loadBusy(dateKey, signal);
    return () => { signal.cancelled = true; };
  }, [dateKey, loadBusy]);

  // Auto-refresh when the tab/page becomes visible again (e.g. navigating back).
  useEffect(() => {
    if (!dateKey) return;
    const onVisible = () => {
      if (document.visibilityState === "visible") void loadBusy(dateKey);
    };
    const onFocus = () => { void loadBusy(dateKey); };
    const onPageShow = (e: PageTransitionEvent) => { if (e.persisted) void loadBusy(dateKey); };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onFocus);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [dateKey, loadBusy]);

  const isSlotBusy = (s: string) => {
    if (!date) return false;
    const [h, m] = s.split(":").map(Number);
    const start = new Date(date); start.setHours(h, m, 0, 0);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    return busy.some((b) => {
      const bs = new Date(b.start).getTime();
      const be = new Date(b.end).getTime();
      return bs < end.getTime() && be > start.getTime();
    });
  };

  const availableCount = date && slotsLoaded && !slotsError
    ? SLOTS.filter((s) => !isSlotBusy(s)).length
    : null;

  const confirm = async () => {
    if (!date || !slot) {
      toast.error("Pick a date and time first.");
      return;
    }
    if (!name.trim() || !email.trim()) {
      toast.error("Add your name and email.");
      return;
    }
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    setSubmitting(true);
    try {
      const res = await bookFn({
        data: { name: name.trim(), email: email.trim(), date: `${yyyy}-${mm}-${dd}`, slot, notes: notes.trim() || undefined },
      });
      setConfirmed({ date, slot, ref: res.ref, eventId: res.eventId, meetLink: res.meetLink, htmlLink: res.htmlLink });
      toast.success("Booked — calendar invite is on the way.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not book that slot.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setConfirmed(null);
    setSlot(null);
    setDate(undefined);
    setNotes("");
  };

  if (confirmed) {
    return <Confirmation booking={confirmed} onReset={reset} onUpdate={setConfirmed} />;
  }

  return (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[1400px]">
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Back to contact
        </Link>
        <div className="mt-6">
          <SectionHeading title="Book a strategy call" description="30 minutes. Free. A principal engineer will walk through your stack and give a concrete plan." />
        </div>
      </div>

      <section className="container-pad mx-auto mt-16 max-w-[1400px]">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-white/10 glass p-6 md:p-10">
            <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Clock className="size-4 text-brand" /> 30 minutes</span>
              <span className="inline-flex items-center gap-2"><Video className="size-4 text-brand" /> Google Meet</span>
            </div>
            <div className="grid gap-8 md:grid-cols-[auto_1fr]">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => { setDate(d); setSlot(null); }}
                disabled={(d) => d < today || d.getDay() === 0 || d.getDay() === 6}
                initialFocus
                className="pointer-events-auto rounded-2xl border border-white/10 bg-white/[0.02] p-3"
              />
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-sm text-foreground/80">
                    {date
                      ? loadingSlots
                        ? `Checking availability · ${date.toDateString()}`
                        : slotsError
                          ? `Couldn't sync · ${date.toDateString()}`
                          : availableCount === 0
                            ? `No times left · ${date.toDateString()}`
                            : `Available times · ${date.toDateString()}`
                      : "Select a date to see available times"}
                  </div>
                  {date && (
                    <button
                      onClick={() => dateKey && loadBusy(dateKey)}
                      disabled={loadingSlots}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-white/20 disabled:opacity-50"
                      title="Re-sync from Google Calendar"
                    >
                      <RefreshCw className={`size-3.5 ${loadingSlots ? "animate-spin" : ""}`} />
                      Refresh availability
                    </button>
                  )}
                </div>

                {date && loadingSlots && !slotsLoaded ? (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-busy="true" aria-label="Loading time slots">
                    {SLOTS.map((s) => (
                      <div key={s} className="h-10 animate-pulse rounded-xl border border-white/5 bg-white/[0.03]" />
                    ))}
                  </div>
                ) : date && slotsError ? (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.06] p-4 text-sm">
                    <div className="flex items-start gap-2 text-red-200">
                      <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                      <div>
                        <div className="font-medium">Availability sync failed</div>
                        <div className="mt-1 text-red-200/80">{slotsError}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => dateKey && loadBusy(dateKey)}
                      className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-xs text-foreground hover:bg-white/[0.1]"
                    >
                      <RefreshCw className="size-3.5" /> Try again
                    </button>
                  </div>
                ) : date && slotsLoaded && availableCount === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm text-muted-foreground">
                    <CalendarDays className="mx-auto size-5 text-muted-foreground/70" />
                    <div className="mt-2 text-foreground">Fully booked</div>
                    <div className="mt-1">Every slot on this day is taken. Pick another date.</div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {SLOTS.map((s) => {
                      const active = slot === s;
                      const taken = isSlotBusy(s);
                      return (
                        <button
                          key={s}
                          onClick={() => setSlot(s)}
                          disabled={!date || loadingSlots || taken}
                          title={taken ? "Already booked" : undefined}
                          className={`rounded-xl border px-3 py-2.5 text-sm transition ${
                            active
                              ? "border-brand bg-brand/10 text-brand"
                              : taken
                                ? "border-white/5 bg-white/[0.02] text-muted-foreground line-through opacity-50"
                                : "border-white/10 bg-white/[0.03] hover:border-white/20 disabled:opacity-40"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="font-display text-2xl">Your booking</div>
              <div className="mt-4 space-y-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/50"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/50"
                />
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="What would you like to cover? (optional)"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-brand/50"
                />
              </div>
              <dl className="mt-4 space-y-3 border-t border-white/5 pt-4 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted-foreground">Date</dt>
                  <dd>{date ? date.toDateString() : "—"}</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <dt className="text-muted-foreground">Time</dt>
                  <dd>{slot ?? "—"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd>30 minutes</dd>
                </div>
              </dl>
              <button
                onClick={confirm}
                disabled={submitting}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.01] disabled:opacity-60"
              >
                {submitting ? "Booking…" : "Confirm booking"}
              </button>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-muted-foreground">
              Prefer async? Email <span className="text-foreground">hello@helleious.com</span> and we'll reply within a business day.
            </div>
          </div>
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}

function Confirmation({ booking, onReset, onUpdate }: { booking: Booking; onReset: () => void; onUpdate: (b: Booking | null) => void }) {
  const dateStr = booking.date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const [cancelled, setCancelled] = useState(false);
  const [rescheduling, setRescheduling] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const rescheduleFn = useServerFn(rescheduleBookingEvent);
  const cancelFn = useServerFn(cancelBookingEvent);

  const doCancel = async () => {
    if (!booking.eventId) { toast.error("Missing event reference."); return; }
    if (!window.confirm("Cancel this booking? The attendee will be notified.")) return;
    setCancelling(true);
    try {
      await cancelFn({ data: { eventId: booking.eventId } });
      setCancelled(true);
      toast.success("Booking cancelled.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not cancel.");
    } finally {
      setCancelling(false);
    }
  };

  if (cancelled) return <Cancelled onReset={() => { onUpdate(null); onReset(); }} />;

  return (
    <ConfirmationInner
      booking={booking}
      dateStr={dateStr}
      onReset={onReset}
      onCancel={doCancel}
      cancelling={cancelling}
      rescheduling={rescheduling}
      setRescheduling={setRescheduling}
      onRescheduled={(next) => { onUpdate(next); setRescheduling(false); }}
      rescheduleFn={rescheduleFn}
    />
  );
}

function ConfirmationInner({
  booking, dateStr, onReset, onCancel, cancelling, rescheduling, setRescheduling, onRescheduled, rescheduleFn,
}: {
  booking: Booking;
  dateStr: string;
  onReset: () => void;
  onCancel: () => void;
  cancelling: boolean;
  rescheduling: boolean;
  setRescheduling: (v: boolean) => void;
  onRescheduled: (b: Booking) => void;
  rescheduleFn: (args: { data: { eventId: string; date: string; slot: string; refreshMeet?: boolean } }) => Promise<{ eventId: string; htmlLink: string | null; meetLink: string | null }>;
}) {
  return (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[900px]">
        <div className="rounded-3xl border border-white/10 glass p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[#ff7a00]/25 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
              <CheckCircle2 className="size-8" />
            </div>
            <div className="mt-6 font-display text-4xl md:text-5xl">You're booked in</div>
            <p className="mt-3 max-w-lg text-muted-foreground">
              A confirmation with the Google Meet link is on its way. We'll send a reminder one hour before the call.
            </p>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Ref · {booking.ref}</div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <SummaryTile Icon={CalendarDays} label="Date" value={dateStr} />
            <SummaryTile Icon={Clock} label="Time" value={`${booking.slot} · 30 min`} />
            <SummaryTile Icon={Video} label="Where" value="Google Meet" />
          </div>

          {(booking.meetLink || booking.htmlLink) && (
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              {booking.meetLink && (
                <a href={booking.meetLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 hover:bg-white/[0.06]">
                  <Video className="size-4 text-brand" /> Join Google Meet
                </a>
              )}
              {booking.htmlLink && (
                <a href={booking.htmlLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 hover:bg-white/[0.06]">
                  <CalendarDays className="size-4 text-brand" /> Open in Google Calendar
                </a>
              )}
            </div>
          )}

          {rescheduling && booking.eventId ? (
            <ReschedulePanel
              booking={booking}
              onClose={() => setRescheduling(false)}
              onSaved={onRescheduled}
              rescheduleFn={rescheduleFn}
            />
          ) : (
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <button
                onClick={() => setRescheduling(true)}
                disabled={!booking.eventId || cancelling}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 hover:bg-white/[0.06] disabled:opacity-50"
              >
                <CalendarClock className="size-4 text-brand" /> Reschedule
              </button>
              <button
                onClick={onCancel}
                disabled={!booking.eventId || cancelling}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/[0.06] px-4 py-2 text-red-200 hover:bg-red-500/[0.12] disabled:opacity-50"
              >
                <X className="size-4" /> {cancelling ? "Cancelling…" : "Cancel booking"}
              </button>
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
            <div className="font-medium">What happens next</div>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>· You'll get a calendar invite with the meeting link within a minute.</li>
              <li>· A principal engineer reviews your note before the call.</li>
              <li>· On the call: your stack, the bottleneck, and a concrete plan.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={onReset}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium transition hover:bg-white/[0.06]"
            >
              Book another time
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.01]"
            >
              <Mail className="size-4" /> Send us a note
            </Link>
          </div>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
}

function ReschedulePanel({
  booking, onClose, onSaved, rescheduleFn,
}: {
  booking: Booking;
  onClose: () => void;
  onSaved: (b: Booking) => void;
  rescheduleFn: (args: { data: { eventId: string; date: string; slot: string; refreshMeet?: boolean } }) => Promise<{ eventId: string; htmlLink: string | null; meetLink: string | null }>;
}) {
  const today = useMemo(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; }, []);
  const [newDate, setNewDate] = useState<Date>(booking.date);
  const [newSlot, setNewSlot] = useState<string>(booking.slot);
  const [refreshMeet, setRefreshMeet] = useState(false);
  const [saving, setSaving] = useState(false);
  const busyFn = useServerFn(getBusySlots);
  const [busy, setBusy] = useState<Array<{ start: string; end: string }>>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const dk = fmtDateKey(newDate);

  useEffect(() => {
    let cancelled = false;
    setLoadingSlots(true);
    busyFn({ data: { date: dk } })
      .then((r) => { if (!cancelled) setBusy(r.busy); })
      .catch(() => { if (!cancelled) setBusy([]); })
      .finally(() => { if (!cancelled) setLoadingSlots(false); });
    return () => { cancelled = true; };
  }, [dk, busyFn]);

  const isBusy = (s: string) => {
    // ignore this booking's own current slot so it remains selectable
    if (dk === fmtDateKey(booking.date) && s === booking.slot) return false;
    const [h, m] = s.split(":").map(Number);
    const start = new Date(newDate); start.setHours(h, m, 0, 0);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    return busy.some((b) => {
      const bs = new Date(b.start).getTime();
      const be = new Date(b.end).getTime();
      return bs < end.getTime() && be > start.getTime();
    });
  };

  const save = async () => {
    if (!booking.eventId) return;
    if (dk === fmtDateKey(booking.date) && newSlot === booking.slot && !refreshMeet) {
      toast.error("Pick a different date, time, or refresh the Meet link.");
      return;
    }
    setSaving(true);
    try {
      const res = await rescheduleFn({ data: { eventId: booking.eventId, date: dk, slot: newSlot, refreshMeet } });
      onSaved({
        ...booking,
        date: newDate,
        slot: newSlot,
        eventId: res.eventId,
        htmlLink: res.htmlLink ?? booking.htmlLink,
        meetLink: res.meetLink ?? (refreshMeet ? null : booking.meetLink),
      });
      toast.success(refreshMeet ? "Rescheduled with a new Meet link." : "Rescheduled — invite updated.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not reschedule.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <div className="font-medium">Pick a new time</div>
        <button onClick={onClose} className="text-xs text-muted-foreground hover:text-foreground">Close</button>
      </div>
      <div className="mt-4 grid gap-6 md:grid-cols-[auto_1fr]">
        <Calendar
          mode="single"
          selected={newDate}
          onSelect={(d) => { if (d) setNewDate(d); }}
          disabled={(d) => d < today || d.getDay() === 0 || d.getDay() === 6}
          className="pointer-events-auto rounded-2xl border border-white/10 bg-white/[0.02] p-3"
        />
        <div>
          <div className="mb-3 text-sm text-foreground/80">
            {loadingSlots ? `Checking availability · ${newDate.toDateString()}` : `Available times · ${newDate.toDateString()}`}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {SLOTS.map((s) => {
              const active = newSlot === s;
              const taken = isBusy(s);
              return (
                <button
                  key={s}
                  onClick={() => setNewSlot(s)}
                  disabled={loadingSlots || taken}
                  className={`rounded-xl border px-3 py-2.5 text-sm transition ${
                    active
                      ? "border-brand bg-brand/10 text-brand"
                      : taken
                        ? "border-white/5 bg-white/[0.02] text-muted-foreground line-through opacity-50"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 disabled:opacity-40"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
          <label className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={refreshMeet}
              onChange={(e) => setRefreshMeet(e.target.checked)}
              className="size-3.5 accent-[#ff7a00]"
            />
            <RefreshCw className="size-3.5" /> Generate a new Google Meet link
          </label>
          <div className="mt-4 flex gap-2">
            <button
              onClick={save}
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.01] disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save changes"}
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm hover:bg-white/[0.06]"
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cancelled({ onReset }: { onReset: () => void }) {
  return (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-[720px]">
        <div className="rounded-3xl border border-white/10 glass p-10 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/[0.04] text-muted-foreground ring-1 ring-inset ring-white/10">
            <X className="size-6" />
          </div>
          <div className="mt-6 font-display text-3xl md:text-4xl">Booking cancelled</div>
          <p className="mt-3 text-muted-foreground">The event has been removed from the calendar and the attendee has been notified.</p>
          <button
            onClick={onReset}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.01]"
          >
            Book another time
          </button>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
}

function SummaryTile({ Icon, label, value }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <Icon className="size-3.5 text-brand" /> {label}
      </div>
      <div className="mt-2 text-sm">{value}</div>
    </div>
  );
}