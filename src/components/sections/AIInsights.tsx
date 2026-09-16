import { RollingText } from "@/components/ui/rolling-text";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";
import { Bot, Zap, Cpu, TrendingUp, ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

interface InsightPost {
  id: string;
  title: string;
  date: string;
  readTime?: string;
  category: string;
  icon: ComponentType<{ className?: string }>;
}

const SIDE_POSTS: InsightPost[] = [
  {
    id: "runtime-agents",
    title: "Can Today's AI Agents Survive Their Own Runtime?",
    date: "MAY 15, 2026",
    category: "Agent Architecture",
    icon: Bot,
  },
  {
    id: "ai-work-productivity",
    title: "What's new in AI for Work: features that drive enterprise productivity",
    date: "FEB 20, 2026",
    readTime: "8 MIN",
    category: "Enterprise AI",
    icon: Zap,
  },
  {
    id: "parallel-agent-processing",
    title: "Parallel Agent Processing",
    date: "JAN 16, 2026",
    readTime: "6 MIN",
    category: "Orchestration",
    icon: Cpu,
  },
  {
    id: "productivity-paradox",
    title: "The AI productivity paradox: why employees are moving faster than enterprises",
    date: "JAN 12, 2026",
    category: "Benchmarks",
    icon: TrendingUp,
  },
];

export function AIInsights() {
  return (
    <section id="insights" className="relative w-full bg-sandel py-10 sm:py-16 text-neutral-900">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-10 font-sans">
          <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            <SplitText text="AI Insights" />
          </h2>
          <button className="group inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-mono font-semibold tracking-wider text-neutral-900 shadow-2xs transition-all duration-300 hover:bg-neutral-900 hover:text-white cursor-pointer">
            <span><RollingText>VIEW ALL</RollingText></span>
            <span className="text-neutral-400 group-hover:text-white">•</span>
          </button>
        </div>

        {/* Insights Grid Container: Apple Design System */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-12 lg:gap-8 lg:pb-0 items-stretch font-sans">
          {/* Main Featured Post - Apple Squircle */}
          <div className="shrink-0 w-[290px] xs:w-[330px] lg:w-auto lg:col-span-7 snap-center flex flex-col">
            <ScrollReveal variant="image" className="h-full w-full">
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[28px] sm:rounded-[34px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 min-h-[340px] sm:min-h-[440px] flex flex-col justify-end p-5 sm:p-7 cursor-pointer h-full"
              >
                {/* Red Hills Landscape Background Art */}
                <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                  <img
                    src="/red-hills-landscape.jpg"
                    alt="Configured, not coded - Surreal landscape"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Apple Frosted Glass Card Box at Bottom */}
                <div className="relative z-10 w-full sm:max-w-xl rounded-[22px] bg-white/85 backdrop-blur-2xl p-5 sm:p-6 border border-white/90 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="font-mono text-[10px] sm:text-xs font-semibold text-neutral-600 uppercase tracking-wider flex items-center gap-1">
                    <span>MAY 15, 2026</span>
                    <span>•</span>
                  </div>
                  <h3 className="mt-1.5 font-sans text-base sm:text-xl font-bold tracking-tight text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
                    Configured, not coded. The engineering discipline gap in agent development
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Side Compact Posts List */}
          <div className="lg:col-span-5 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3 pb-2 lg:flex-col lg:justify-between lg:gap-3.5 lg:pb-0 shrink-0 lg:shrink w-full">
            {SIDE_POSTS.map((post, idx) => {
              const Icon = post.icon;
              return (
                <div key={post.id} className="shrink-0 w-[260px] xs:w-[300px] lg:w-auto snap-center">
                  <ScrollReveal variant="card" staggerIndex={idx} staggerStep={0.08}>
                    <motion.div
                      whileHover={{ scale: 1.01, x: 4 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex items-center justify-between gap-3.5 p-3.5 sm:p-4 rounded-[22px] border border-white/90 bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300 cursor-pointer h-full font-sans"
                    >
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div className="size-9 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#ff7a00] transition-colors duration-300">
                          <Icon className="size-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-600 bg-neutral-200/80 px-2 py-0.5 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-[10px] font-mono font-medium text-neutral-400">
                              {post.date}
                            </span>
                          </div>
                          <h4 className="font-sans text-xs sm:text-sm font-bold tracking-tight text-neutral-900 leading-snug group-hover:text-black transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </div>
                      </div>

                      <div className="shrink-0 size-8 rounded-full border border-neutral-200/80 bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="size-4" />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
