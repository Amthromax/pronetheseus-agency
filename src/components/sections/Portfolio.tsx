import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { portfolioItems } from "@/data/portfolio";
import { TiltCard } from "@/components/fx/TiltCard";

const filters = ["All", "Websites", "AI Agents", "Real Estate", "Automation"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const shown = portfolioItems.filter((i) => {
    if (activeFilter === "All") return true;
    return i.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(i.category.toLowerCase());
  });

  return (
    <section className="relative container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading
        eyebrow="Selected Work"
        title="Project Works & Case Studies"
        description="Explore production builds shipped across high-converting websites, autonomous AI agents, and specialized real estate systems."
      />

      {/* Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {filters.map((label) => (
          <button
            key={label}
            onClick={() => setActiveFilter(label)}
            className={`rounded-none border px-5 py-2.5 text-sm font-medium transition duration-300 ${
              activeFilter === label
                ? "border-brand/50 bg-gradient-to-r from-orange-500/20 to-rose-500/20 text-brand shadow-[0_0_20px_rgba(255,122,0,0.3)]"
                : "border-white/10 bg-white/[0.03] text-foreground/70 hover:border-white/20 hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((it) => (
            <motion.div
              key={it.title}
              layout
              initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <TiltCard intensity={6} className="relative rounded-none">
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: it.slug }}
                  className="relative block aspect-[4/3] overflow-hidden rounded-none border border-white/10 transition duration-500 group-hover:border-orange-500/50 group-hover:shadow-[0_30px_90px_-20px_rgba(255,122,0,0.45)]"
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
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-950/0 opacity-0 transition duration-700 group-hover:from-orange-600/25 group-hover:to-transparent group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Light Sweep Effect */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[1200ms] group-hover:translate-x-full"
                  />

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                    <div className="translate-y-1 transition duration-500 group-hover:translate-y-0">
                      <div className="flex items-center gap-2">
                        <span className="rounded-none bg-white/15 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-white/90 backdrop-blur-md">
                          {it.category}
                        </span>
                        <span className="text-xs tracking-widest text-white/70">{it.tag}</span>
                      </div>
                      <div className="mt-2 font-display text-2xl font-semibold text-white">{it.title}</div>
                      <p className="mt-1 line-clamp-1 text-xs text-white/70">{it.summary}</p>
                    </div>
                    <div className="grid size-11 shrink-0 place-items-center rounded-none border border-white/20 bg-white/10 backdrop-blur-md transition duration-500 group-hover:border-white/50 group-hover:bg-orange-500/40">
                      <ArrowUpRight className="size-5 text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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