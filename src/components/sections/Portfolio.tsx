import { RollingText } from "@/components/ui/rolling-text";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { portfolioItems } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Websites", "AI Agents", "Proptech & Real Estate", "Integrations"];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="our-work" className="relative bg-white py-16 sm:py-24 text-neutral-900 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Main Section Title & Subtitle + View All Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-[50px] font-semibold text-neutral-900 tracking-tight leading-[1.1] font-sans"
            >
              Selected projects across AI agents, web apps, and automation engines.
            </motion.h2>

            <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-xl font-sans">
              Production systems built for scale — featuring high-converting platforms, voice agents, and custom workflow integrations.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-[#f4f3ee] px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-200/70 transition shadow-2xs cursor-pointer font-sans"
            >
              <span><RollingText>View all case studies</RollingText></span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                activeCategory === cat
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All 11 Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl bg-[#f1f0ec] border border-black/[0.07] p-2 flex flex-col justify-between shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-black/20 hover:shadow-lg transition duration-300"
            >
              {/* Media Container */}
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] w-full bg-neutral-900 flex items-center justify-center">
                {project.showcase ? (
                  <img
                    src={project.showcase}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-end text-white`}>
                    <span className="text-xs uppercase tracking-widest opacity-80">{project.tag}</span>
                    <span className="font-display text-2xl font-bold mt-1">{project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300" />
              </div>

              {/* Meta details */}
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">{project.year}</span>
                </div>

                <h3 className="mt-2 text-base font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-1 text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                  {project.summary}
                </p>

                {/* Key Outcome Badge */}
                {project.outcomes[0] && (
                  <div className="mt-3 pt-2 border-t border-black/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono text-[11px]">{project.outcomes[0].label}:</span>
                    <span className="font-bold text-neutral-900 font-mono">{project.outcomes[0].value}</span>
                  </div>
                )}
              </div>

              {/* Direct Link to Portfolio Page */}
              <div className="p-2 pt-0">
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  className="w-full inline-flex items-center justify-between rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-neutral-900 border border-neutral-200/80 hover:bg-neutral-900 hover:text-white transition duration-200"
                >
                  <span><RollingText>View Case Breakdown</RollingText></span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}