import { motion } from "motion/react";
import { Clock, Zap, CalendarCheck, TrendingUp } from "lucide-react";

const METRICS_LIST = [
  {
    value: "47 hrs/mo",
    label: "Monthly Hours Saved",
    desc: "Reclaim founder and staff time previously lost to manual lead triage & repetitive data entry.",
    icon: Clock,
    badge: "TIME RECLAIMED"
  },
  {
    value: "<60s",
    label: "Speed-to-Lead Response",
    desc: "Sub-60s multi-channel response across web forms, SMS, phone, and WhatsApp.",
    icon: Zap,
    badge: "SPEED TO LEAD"
  },
  {
    value: "+18/mo",
    label: "New Monthly Bookings",
    desc: "Capture after-hours leads and automatically qualify & book them directly onto calendars.",
    icon: CalendarCheck,
    badge: "PIPELINE GROWTH"
  },
  {
    value: "3.2×",
    label: "Measured ROI",
    desc: "Demonstrated return on investment within 90 days of deploying core AI revenue systems.",
    icon: TrendingUp,
    badge: "P&L IMPACT"
  }
];

export function ExpectedOutcomes() {
  return (
    <section id="expected-outcomes" className="relative bg-white py-16 sm:py-24 text-neutral-900 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.12]"
          >
            Measurable Operational Proof
          </motion.h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-xl mx-auto">
            Concrete benchmarks observed across active service business and agency automation deployments.
          </p>
        </div>

        {/* 4 Cards Grid - Direct without outer wrapper box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {METRICS_LIST.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-[22px] bg-[#f4f3ee] border border-neutral-200/90 p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition duration-300"
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex size-8 items-center justify-center rounded-full bg-white border border-neutral-200/80 text-[#C15F3C] shadow-2xs">
                      <Icon className="size-4" />
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider uppercase text-neutral-600 border border-neutral-200/80 shadow-2xs">
                      {m.badge}
                    </span>
                  </div>

                  {/* Value & Labels */}
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 tabular-nums">
                    {m.value}
                  </div>
                  <h3 className="mt-2 text-sm sm:text-base font-bold tracking-tight text-neutral-900">
                    {m.label}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-500 font-normal leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
