import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Pronetheseus" },
      { name: "description", content: "Pick a date and time for your free 30-minute strategy call with the Pronetheseus team." },
      { property: "og:title", content: "Book a Strategy Call — Pronetheseus" },
      { property: "og:description", content: "Free 30-minute call. Direct Google Calendar scheduling." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const GOOGLE_CALENDAR_BOOKING_URL = "https://calendar.app.google/yJMFo3qDAZfJZoeA7";

function BookPage() {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <div className="pt-36 md:pt-40">
      <div className="container-pad mx-auto max-w-[1400px]">
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
          <ArrowLeft className="size-4" /> Back to contact
        </Link>

        <div className="mt-4">
          <SectionHeading
            title={isBooked ? "Booking Confirmed!" : "Book a strategy call"}
            description={
              isBooked
                ? "Thank you for scheduling a strategy session with Pronetheseus. Here is what happens next."
                : "Pick a date & time that suits you. 30 minutes with a Principal Systems Architect. Zero sales pitch."
            }
          />
        </div>
      </div>

      <section className="container-pad mx-auto mt-10 max-w-[1400px]">
        {isBooked ? (
          /* Thanksgiving Box / Confirmation State */
          <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-neutral-950/90 p-8 md:p-14 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(255,122,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              {/* Glowing Icon Badge */}
              <div className="relative flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 via-orange-950/30 to-brand/10 border border-brand/40 shadow-[0_0_40px_rgba(255,122,0,0.3)]">
                <CheckCircle2 className="size-10 text-brand" />
                <Sparkles className="absolute -top-2 -right-2 size-6 text-orange-200 animate-pulse" />
              </div>

              {/* Thanksgiving Title */}
              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Thank You for Booking!
              </h3>
              <p className="mt-4 text-base text-neutral-300 md:text-lg leading-relaxed max-w-2xl">
                Your 30-minute infrastructure strategy session has been successfully booked in our calendar. A Google Meet invitation and calendar confirmation are on their way to your email inbox.
              </p>

              {/* 3 Next Steps Grid */}
              <div className="mt-10 grid gap-4 text-left sm:grid-cols-3 w-full">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand">
                    <Mail className="size-4" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-semibold text-white">1. Check Your Inbox</h4>
                  <p className="mt-1 text-xs text-neutral-400 leading-normal">
                    Look for your Google Calendar email invite containing the direct Google Meet video room link.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand">
                    <Clock className="size-4" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-semibold text-white">2. Prepare Your Stack</h4>
                  <p className="mt-1 text-xs text-neutral-400 leading-normal">
                    Note down your agency&apos;s key operational bottlenecks (onboarding, client reporting, CRM sync, etc.).
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand">
                    <Video className="size-4" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-semibold text-white">3. Live 1-on-1 Call</h4>
                  <p className="mt-1 text-xs text-neutral-400 leading-normal">
                    Join the Google Meet at your chosen time. We&apos;ll present a concrete infrastructure & automation blueprint.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.6)] transition hover:scale-105"
                >
                  Return to Home
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={() => setIsBooked(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="size-4" />
                  Book Another Appointment
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Google Calendar Embed Booking View */
          <div>
            {/* Top Badges */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-neutral-950/70 p-4 backdrop-blur-2xl">
              <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-neutral-300">
                <span className="inline-flex items-center gap-2 font-medium">
                  <Clock className="size-4 text-brand" /> 30-Minute Free Audit
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Video className="size-4 text-brand" /> Live Google Meet
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck className="size-4 text-brand" /> Instant Calendar Sync
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsBooked(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-orange-200 transition hover:bg-brand/20 hover:text-white"
                >
                  <CheckCircle2 className="size-3.5 text-brand" />
                  I&apos;ve Completed Booking
                </button>

                <a
                  href={GOOGLE_CALENDAR_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-semibold text-orange-200 transition hover:bg-brand/20 hover:text-white"
                >
                  Open in Google Calendar
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Calendar Appointment Schedule */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/12 bg-neutral-950/90 p-2 md:p-3 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <iframe
                src={GOOGLE_CALENDAR_BOOKING_URL}
                className="w-full h-[720px] md:h-[800px] rounded-2xl bg-white border-0"
                style={{ border: 0 }}
                title="Book a strategy call via Google Calendar"
                loading="lazy"
              />
            </div>

            {/* Post-Booking Thanksgiving Bar */}
            <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/15 via-orange-950/20 to-neutral-950/90 p-5 sm:flex-row backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm text-neutral-200">
                <CalendarCheck className="size-5 text-brand shrink-0" />
                <span>Finished picking your time on Google Calendar? View your confirmation & next steps.</span>
              </div>
              <button
                onClick={() => setIsBooked(true)}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_-8px_rgba(255,122,0,0.6)] transition hover:scale-105"
              >
                View Thanksgiving & Confirmation Box
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        )}
      </section>

      <div className="h-20" />
    </div>
  );
}