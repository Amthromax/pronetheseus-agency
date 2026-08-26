import { services } from "@/data/services";
import { TiltCard } from "@/components/fx/TiltCard";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { ParallaxLayer } from "@/components/fx/ParallaxLayer";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative bg-white py-10 md:py-14 text-neutral-900 overflow-hidden border-y border-neutral-200">
      {/* Background Decorative Ambient Flares */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ParallaxLayer speed="slow" className="absolute top-0 right-0 w-96 h-96">
          <div className="h-full w-full rounded-full bg-[#ff7a00]/5 blur-3xl" />
        </ParallaxLayer>
        <ParallaxLayer speed="medium" className="absolute bottom-0 left-0 w-96 h-96">
          <div className="h-full w-full rounded-full bg-[#ff7a00]/5 blur-3xl" />
        </ParallaxLayer>
      </div>

      <div className="relative container-pad mx-auto max-w-[1400px]">
        <SectionHeading
          dark={false}
          title="Core Agency Infrastructure Modules"
          description="Bespoke engineering components built to replace manual operations across your entire client lifecycle."
        />

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <ScrollReveal key={s.slug} variant="card" staggerIndex={idx} staggerStep={0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full"
              >
                <TiltCard intensity={4} className="relative h-full rounded-xl">
                  <div className="relative h-full overflow-hidden rounded-xl border border-neutral-200/90 bg-[#f8f9fa] hover:bg-white p-5 transition duration-300 group-hover:border-neutral-300 shadow-sm hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative grid size-9 place-items-center rounded-lg bg-[#ff7a00]/10 text-[#ff7a00] border border-[#ff7a00]/20 shadow-2xs"
                        >
                          <s.Icon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
                        </motion.div>
                        
                        <ArrowUpRight className="size-4 -translate-x-1 translate-y-1 text-neutral-400 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#ff7a00] group-hover:opacity-100" />
                      </div>

                      <h3 className="mt-3.5 font-display text-base sm:text-lg font-semibold text-neutral-900 tracking-tight group-hover:text-black transition-colors">{s.title}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">{s.desc}</p>
                    </div>

                    <ul className="mt-4 space-y-1.5 text-xs border-t border-neutral-200/80 pt-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-neutral-700 font-normal">
                          <Check className="size-3 shrink-0 text-[#ff7a00]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}