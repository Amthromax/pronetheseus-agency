import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { motion } from "motion/react";

const METRICS_LIST = [
  {
    value: "300%",
    label: "Client Capacity Boost",
    desc: "Scale active client retainers from 15 to 45 with zero extra operations hires."
  },
  {
    value: "90%",
    label: "Faster Client Onboarding",
    desc: "Client onboarding setup time cut from 14 days down to 15 minutes automatically."
  },
  {
    value: "120+ Hrs",
    label: "Monthly Hours Reclaimed",
    desc: "Reclaim account director & founder hours previously lost to manual reporting."
  },
  {
    value: "40%+",
    label: "Net Margin Expansion",
    desc: "Drastically increase profit margins by eliminating operational labor redundancy."
  }
];

export function ExpectedOutcomes() {
  return (
    <section id="expected-outcomes" className="relative bg-white py-16 text-neutral-900 md:py-24 border-y border-black/[0.05]">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading
          title="What outcome can your agency expect?"
          description="Hard, measurable operational benchmarks delivered directly to your P&L within 30 days of deployment."
        />

        {/* 4 Metrics Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS_LIST.map((m, idx) => (
            <ScrollReveal key={idx} variant="card" staggerIndex={idx} staggerStep={0.09}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-lg border border-neutral-200/90 bg-neutral-50/90 p-6 md:p-8 transition-all duration-300 hover:border-brand/40 hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(255,122,0,0.15)] backdrop-blur-md h-full flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-brand tabular-nums">
                    {m.value}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-neutral-900">{m.label}</h3>
                  <p className="mt-2 text-xs md:text-sm text-neutral-600 leading-relaxed font-normal">{m.desc}</p>
                </div>

                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#ff7a00] to-[#c2410c] transition-all duration-500 group-hover:w-full rounded-full" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
