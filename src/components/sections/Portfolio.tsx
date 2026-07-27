import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { portfolioItems } from "@/data/portfolio";
import { TiltCard } from "@/components/fx/TiltCard";

const filters = ["All", "Web Apps", "AI", "Automation", "SaaS", "Landing Pages"];

export function Portfolio() {
  const [f, setF] = useState("All");
  const shown = portfolioItems.filter((i) => f === "All" || i.category === f);
  return (
    <section className="relative container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading title="Selected work" />
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((label) => (
          <button key={label} onClick={() => setF(label)} className={`rounded-full border px-4 py-2 text-sm transition ${f === label ? "border-brand/40 bg-brand/10 text-brand" : "border-white/10 bg-white/[0.03] text-foreground/70 hover:text-foreground"}`}>{label}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((it) => (
            <motion.div
              key={it.title}
              layout
              initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <TiltCard intensity={7} className="relative rounded-3xl">
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: it.slug }}
                  className="relative block aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 transition duration-500 group-hover:border-orange-500/40 group-hover:shadow-[0_30px_80px_-20px_rgba(255,122,0,0.5)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${it.gradient} opacity-90 transition duration-1000 group-hover:scale-110 group-hover:opacity-100`} />
                  {it.showcase && (
                    <img
                      src={it.showcase}
                      alt={it.title}
                      className="absolute inset-x-0 top-0 h-1/2 w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                      draggable={false}
                    />
                  )}
                  {/* red hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-900/0 opacity-0 transition duration-700 group-hover:from-orange-600/30 group-hover:to-transparent group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  {/* light sweep */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1200ms] group-hover:translate-x-full"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                    <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                      <div className="text-xs uppercase tracking-widest text-white/70">{it.tag}</div>
                      <div className="mt-1 font-display text-2xl text-white">{it.title}</div>
                    </div>
                    <div className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-500 group-hover:border-white/40 group-hover:bg-orange-500/30">
                      <ArrowUpRight className="size-4 text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}