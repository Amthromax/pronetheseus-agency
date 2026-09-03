import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AutomationAuditSection } from "@/components/sections/AutomationAuditSection";
import {
  ArrowLeft,
  ArrowRight,
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
      { title: "Get Your Free Automation Audit & Book Call — Pronetheseus" },
      { name: "description", content: "Get your free AI automation audit and schedule a 30-minute strategy session." },
      { property: "og:title", content: "Free Automation Audit — Pronetheseus" },
      { property: "og:description", content: "Free AI automation diagnosis and calendar booking." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const GOOGLE_CALENDAR_BOOKING_URL = "https://calendar.app.google/yJMFo3qDAZfJZoeA7";

function BookPage() {
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin.includes("google.com") ||
        event.origin.includes("calendar.app.google") ||
        (typeof event.data === "string" && (event.data.includes("booked") || event.data.includes("scheduled")))
      ) {
        setIsBooked(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="bg-sandel text-neutral-900 min-h-screen pt-28 md:pt-32">
      {/* Interactive Free Automation Audit Section */}
      <AutomationAuditSection />

      <div className="container-pad mx-auto max-w-[1400px] mt-12">
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition">
          <ArrowLeft className="size-4" /> Back to contact
        </Link>

        <div className="mt-4">
          <SectionHeading
            title={isBooked ? "Booking Confirmed!" : "Schedule Your Audit Review Call"}
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
          <div className="relative overflow-hidden rounded-3xl border border-sandel-border bg-sandel-card p-8 md:p-14 shadow-lg">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              {/* Glowing Icon Badge */}
              {/* Glowing Icon Badge */}
              <div className="relative flex size-20 items-center justify-center rounded-2xl bg-neutral-200/80 border border-black/10 shadow-md">
                <CheckCircle2 className="size-10 text-neutral-900" />
                <Sparkles className="absolute -top-2 -right-2 size-6 text-neutral-700 animate-pulse" />
              </div>

              {/* Thanksgiving Title */}
              <h3 className="mt-6 font-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Thank You for Booking!
              </h3>
              <p className="mt-4 text-base text-neutral-600 md:text-lg leading-relaxed max-w-2xl font-sans">
                Your 30-minute infrastructure strategy session has been successfully booked in our calendar. A Google Meet invitation and calendar confirmation are on their way to your email inbox.
              </p>

              {/* 3 Next Steps Grid */}
              <div className="mt-10 grid gap-4 text-left sm:grid-cols-3 w-full">
                <div className="rounded-2xl border border-sandel-border bg-sandel p-5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-200/80 border border-black/10 text-neutral-900">
                    <Mail className="size-4" />
                  </div>
                  <h4 className="mt-3 font-sans text-base font-bold text-neutral-900">1. Check Your Inbox</h4>
                  <p className="mt-1 text-xs text-neutral-600 leading-normal font-sans">
                    Look for your Google Calendar email invite containing the direct Google Meet video room link.
                  </p>
                </div>

                <div className="rounded-2xl border border-sandel-border bg-sandel p-5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-200/80 border border-black/10 text-neutral-900">
                    <Clock className="size-4" />
                  </div>
                  <h4 className="mt-3 font-sans text-base font-bold text-neutral-900">2. Prepare Your Stack</h4>
                  <p className="mt-1 text-xs text-neutral-600 leading-normal font-sans">
                    Note down your agency&apos;s key operational bottlenecks (onboarding, client reporting, CRM sync, etc.).
                  </p>
                </div>

                <div className="rounded-2xl border border-sandel-border bg-sandel p-5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-200/80 border border-black/10 text-neutral-900">
                    <Video className="size-4" />
                  </div>
                  <h4 className="mt-3 font-sans text-base font-bold text-neutral-900">3. Live 1-on-1 Call</h4>
                  <p className="mt-1 text-xs text-neutral-600 leading-normal font-sans">
                    Join the Google Meet at your chosen time. We&apos;ll present a concrete infrastructure & automation blueprint.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#18181b] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-black hover:scale-105 cursor-pointer"
                >
                  <span>Return to Home</span>
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={() => setIsBooked(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-sandel-border bg-sandel px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-white hover:border-neutral-400 cursor-pointer"
                >
                  <RotateCcw className="size-4" />
                  <span>Book Another Appointment</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Active Booking View (Google Calendar Scheduling) */
          <div>
            {/* Top Badges */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200/90 bg-[#f4f3ee] p-4 shadow-xs">
              <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-neutral-800 font-sans font-medium">
                <span className="inline-flex items-center gap-2 font-semibold">
                  <Clock className="size-4 text-neutral-900" /> 30-Minute Free Audit
                </span>
                <span className="inline-flex items-center gap-2 font-semibold">
                  <Video className="size-4 text-neutral-900" /> Live Google Meet
                </span>
                <span className="inline-flex items-center gap-2 font-semibold">
                  <ShieldCheck className="size-4 text-neutral-900" /> Instant Calendar Sync
                </span>
              </div>

              <a
                href={GOOGLE_CALENDAR_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-300 px-4 py-1.5 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-100 hover:border-neutral-400"
              >
                <span>Open in Google Calendar</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>

            {/* Embedded Google Calendar Appointment Schedule */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200/90 bg-[#f4f3ee] p-2 md:p-3 shadow-md">
              <iframe
                src={GOOGLE_CALENDAR_BOOKING_URL}
                className="w-full h-[720px] md:h-[800px] rounded-2xl bg-white border-0"
                style={{ border: 0 }}
                title="Book a strategy call via Google Calendar"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </section>

      <div className="h-20" />
    </div>
  );
}