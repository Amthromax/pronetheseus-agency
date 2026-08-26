import { motion } from "motion/react";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";

interface InsightPost {
  id: string;
  title: string;
  date: string;
  readTime?: string;
  gradientBg: string;
  graphicSvg: React.ReactNode;
}

const SIDE_POSTS: InsightPost[] = [
  {
    id: "runtime-agents",
    title: "Can Today's AI Agents Survive Their Own Runtime?",
    date: "MAY 15, 2026",
    gradientBg: "bg-gradient-to-tr from-[#FF7E5F] via-[#FEB47B] to-[#6A11CB]",
    graphicSvg: (
      <div className="relative size-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 via-rose-400 to-indigo-600">
        <div className="size-12 sm:size-14 rounded-full bg-white/40 backdrop-blur-md shadow-inner border border-white/60 animate-pulse" />
        <div className="absolute size-8 sm:size-10 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 shadow-md" />
      </div>
    ),
  },
  {
    id: "ai-work-productivity",
    title: "What's new in AI for Work: features that drive enterprise productivity",
    date: "FEBRUARY 20, 2026",
    readTime: "8 MIN",
    gradientBg: "bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700",
    graphicSvg: (
      <div className="relative size-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-teal-600 via-cyan-600 to-blue-800">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:10px_10px]" />
        <div className="w-16 h-8 rounded-full border-2 border-white/60 rotate-45 transform bg-cyan-400/30 backdrop-blur-xs" />
      </div>
    ),
  },
  {
    id: "parallel-agent-processing",
    title: "Parallel Agent Processing",
    date: "JANUARY 16, 2026",
    readTime: "6 MIN",
    gradientBg: "bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500",
    graphicSvg: (
      <div className="relative size-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-200 via-sky-400 to-blue-500">
        <div className="w-20 h-10 rounded-3xl bg-white/50 backdrop-blur-md rotate-[-25deg] shadow-lg border border-white/70" />
      </div>
    ),
  },
  {
    id: "productivity-paradox",
    title: "The AI productivity paradox: why employees are moving faster than enterprises",
    date: "JANUARY 12, 2026",
    gradientBg: "bg-gradient-to-tr from-amber-200 via-orange-300 to-rose-300",
    graphicSvg: (
      <div className="relative size-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-amber-100 via-orange-200 to-rose-300">
        <div className="size-10 sm:size-12 rounded-full border-4 border-white/80 bg-orange-400/20 backdrop-blur-md shadow-md" />
        <div className="absolute size-6 rounded-full bg-white/70" />
      </div>
    ),
  },
];

export function AIInsights() {
  return (
    <section id="insights" className="relative w-full bg-white py-16 sm:py-24 border-t border-neutral-200 text-neutral-900">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            <SplitText text="AI Insights" />
          </h2>
          <button className="group inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-xs font-mono font-semibold tracking-wider text-neutral-900 transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 cursor-pointer">
            <span>VIEW ALL</span>
            <span className="text-neutral-400 group-hover:text-white">•</span>
          </button>
        </div>

        {/* Insights Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Post */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="image" className="h-full">
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-lg border border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-xl min-h-[400px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-8 cursor-pointer h-full"
              >
                {/* 3D Gradient Background Art */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-700 to-indigo-900 overflow-hidden">
                  <div className="absolute -top-20 -left-20 size-[500px] sm:size-[600px] rounded-full bg-gradient-to-tr from-pink-400 via-sky-300 to-emerald-400 opacity-60 blur-3xl animate-orb" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-48 sm:size-64 rounded-full bg-gradient-to-br from-indigo-950 via-slate-800 to-pink-500 shadow-2xl border border-white/20 flex items-center justify-center">
                    <div className="size-24 sm:size-32 rounded-full bg-gradient-to-tr from-rose-400 to-indigo-300 opacity-80 blur-md animate-pulse-glow" />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
                </div>

                {/* Frosted Glass Card Box at Bottom */}
                <div className="relative z-10 w-full sm:max-w-xl rounded-md bg-white/80 backdrop-blur-md p-6 sm:p-7 border border-white/80 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="font-mono text-xs font-semibold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                    <span>MAY 15, 2026</span>
                    <span>•</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug group-hover:text-[#ff7a00] transition-colors">
                    Configured, not coded. The engineering discipline gap in agent development
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Side Compact Posts List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5">
            {SIDE_POSTS.map((post, idx) => (
              <ScrollReveal key={post.id} variant="card" staggerIndex={idx} staggerStep={0.08}>
                <motion.div
                  whileHover={{ scale: 1.015, x: 4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-4 sm:gap-5 p-3 rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50/90 transition-all duration-300 cursor-pointer"
                >
                  <div className="size-20 sm:size-24 rounded-md shrink-0 overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {post.graphicSvg}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm sm:text-base font-semibold tracking-tight text-neutral-900 leading-snug group-hover:text-[#ff7a00] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="mt-2 font-mono text-[11px] font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                      <span>{post.date}</span>
                      <span>•</span>
                      {post.readTime && <span>{post.readTime}</span>}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
