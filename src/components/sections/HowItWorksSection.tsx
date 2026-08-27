import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Search, Compass, Cpu, Rocket, Sliders, ArrowRight, Sparkles } from "lucide-react";

const STEPS = [
  {
    number: "01",
    name: "Audit",
    icon: Search,
    desc: "We identify repetitive and revenue-losing processes across your sales, service, and operations.",
    badge: "Process Mapping"
  },
  {
    number: "02",
    name: "Design",
    icon: Compass,
    desc: "We map the ideal automated workflow, defining trigger logic, AI prompt structures, and CRM schemas.",
    badge: "System Blueprint"
  },
  {
    number: "03",
    name: "Build",
    icon: Cpu,
    desc: "We connect AI, CRM, communication and business systems using enterprise n8n workflows and custom APIs.",
    badge: "Engineering"
  },
  {
    number: "04",
    name: "Deploy",
    icon: Rocket,
    desc: "Your automation goes live with zero downtime to your existing client communications.",
    badge: "Go Live"
  },
  {
    number: "05",
    name: "Optimize",
    icon: Sliders,
    desc: "We monitor, improve and expand the system based on real-time performance analytics.",
    badge: "Continuous ROI"
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-sandel py-16 text-neutral-900 md:py-24">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-mono font-semibold text-[#ff7a00] border border-orange-200/60 uppercase">
            <Sparkles className="size-3.5" />
            From manual work to automated systems
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900">
            How It Works
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-sans max-w-2xl mx-auto">
            A clear, 5-step engineering methodology that eliminates buyer uncertainty and delivers production-ready automation.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-sandel-border bg-sandel-card p-6 shadow-xs transition-all duration-300 hover:border-neutral-400 hover:bg-[#FFFBF5] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-[#ff7a00] tracking-tight">
                      {step.number}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-sandel text-neutral-900 group-hover:bg-[#18181b] group-hover:text-white transition-colors duration-300">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-normal text-neutral-900">
                    {step.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sandel-border/60">
                  <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-500 block">
                    {step.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Footer */}
        <div className="mt-12 text-center">
          <Link to="/book">
            <button className="rounded-xl bg-[#18181b] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-black hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 mx-auto">
              <span>Start Step 01 — Get Free Audit</span>
              <ArrowRight className="size-4 text-white" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
