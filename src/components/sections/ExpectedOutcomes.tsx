import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { motion } from "motion/react";
import { Clock, Zap, CalendarCheck, TrendingUp, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

const METRICS_LIST = [
  {
    value: "47 hrs/mo",
    label: "Monthly Hours Saved",
    desc: "Reclaim founder and staff time previously lost to manual lead triage & repetitive data entry.",
    icon: Clock,
    badge: "Time Reclaimed"
  },
  {
    value: "<60s",
    label: "Speed-to-Lead Response",
    desc: "Sub-60s multi-channel response across web forms, SMS, phone, and WhatsApp.",
    icon: Zap,
    badge: "Speed to Lead"
  },
  {
    value: "+18/mo",
    label: "New Monthly Bookings",
    desc: "Capture after-hours leads and automatically qualify & book them directly onto calendars.",
    icon: CalendarCheck,
    badge: "Pipeline Growth"
  },
  {
    value: "3.2×",
    label: "Measured ROI",
    desc: "Demonstrated return on investment within 90 days of deploying core AI revenue systems.",
    icon: TrendingUp,
    badge: "P&L Impact"
  }
];

export function ExpectedOutcomes() {
  return (
    <section id="expected-outcomes" className="relative bg-sandel py-12 text-neutral-900 md:py-16">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading
          title="Measurable Operational Proof"
          description="Concrete benchmarks observed across active service business and agency automation deployments."
        />

        {/* 4 Measurable Proof Metrics Cards: Horizontal Scroll on Mobile ONLY, Grid on Desktop */}
        <div className="mt-8 sm:mt-10 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:pb-0">
          {METRICS_LIST.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="shrink-0 w-[260px] xs:w-[280px] sm:w-auto snap-center flex flex-col">
                <ScrollReveal variant="card" staggerIndex={idx} staggerStep={0.09} className="h-full w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative rounded-2xl border border-sandel-border bg-sandel-card p-5 md:p-6 transition-all duration-300 hover:border-neutral-400 hover:bg-[#FFFBF5] hover:shadow-md h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="size-5 text-[#ff7a00]" />
                        <span className="text-[10px] font-mono font-medium tracking-wide uppercase text-neutral-500">
                          {m.badge}
                        </span>
                      </div>

                      <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 tabular-nums">
                        {m.value}
                      </div>
                      <h3 className="mt-2 font-sans text-sm sm:text-base font-semibold tracking-tight text-neutral-900">
                        {m.label}
                      </h3>
                      <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed font-normal">
                        {m.desc}
                      </p>
                    </div>

                    <div className="mt-4 h-1 w-0 bg-[#ff7a00] transition-all duration-300 group-hover:w-full rounded-full" />
                  </motion.div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
