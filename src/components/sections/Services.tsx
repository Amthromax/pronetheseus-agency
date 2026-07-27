import { services } from "@/data/services";
import { Stagger, staggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/fx/TiltCard";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading
        title="Everything you need to become AI-native"
        description="From single-agent deployments to end-to-end business automation, we ship production-grade systems."
      />
      <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <motion.div key={s.slug} variants={staggerItem} className="group">
            <TiltCard
              intensity={6}
              className="relative h-full rounded-3xl p-[1px]"
            >
              {/* animated gradient border */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, rgba(255,122,0,0) 0deg, rgba(255,122,0,0.7) 90deg, rgba(255,122,0,0) 180deg, rgba(255,122,0,0.7) 270deg, rgba(255,122,0,0) 360deg)",
                  filter: "blur(1px)",
                }}
              />
              <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-500 group-hover:-translate-y-1 group-hover:border-neutral-300 group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <div className="flex items-start justify-between">
                  <div className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-900/5 text-brand ring-1 ring-inset ring-neutral-200">
                    <s.Icon className="size-5" />
                    <span aria-hidden className="absolute -inset-2 rounded-2xl bg-orange-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
                  </div>
                  <ArrowUpRight className="size-5 -translate-x-1 translate-y-1 text-neutral-400 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-neutral-900 group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{s.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-neutral-700">
                      <Check className="size-3.5 text-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}