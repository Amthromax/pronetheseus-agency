import { services } from "@/data/services";
import { Stagger, staggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/fx/TiltCard";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative container-pad mx-auto max-w-[1400px] py-14 md:py-20">
      <SectionHeading
        title="Core Agency Infrastructure Modules"
        description="Bespoke engineering components built to replace manual operations across your entire client lifecycle."
      />
      <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <motion.div key={s.slug} variants={staggerItem} className="group">
            <TiltCard
              intensity={6}
              className="relative h-full rounded-3xl p-[1px]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, rgba(255,122,0,0) 0deg, rgba(255,122,0,0.7) 90deg, rgba(255,122,0,0) 180deg, rgba(255,122,0,0.7) 270deg, rgba(255,122,0,0) 360deg)",
                  filter: "blur(1px)",
                }}
              />
              <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/10 bg-neutral-950/80 p-7 backdrop-blur-2xl transition duration-500 group-hover:-translate-y-1 group-hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-start justify-between">
                  <div className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/20 via-orange-950/20 to-brand/5 text-brand ring-1 ring-inset ring-white/10">
                    <s.Icon className="size-5" />
                    <span aria-hidden className="absolute -inset-2 rounded-2xl bg-brand/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
                  </div>
                  <ArrowUpRight className="size-5 -translate-x-1 translate-y-1 text-neutral-500 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2.5 text-sm border-t border-white/5 pt-4">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-neutral-300 font-medium text-xs md:text-sm">
                      <Check className="size-4 shrink-0 text-brand" />
                      <span>{b}</span>
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