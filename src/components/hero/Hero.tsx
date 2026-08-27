import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  UserPlus, 
  Bot, 
  Filter, 
  RefreshCw, 
  Calendar, 
  Database,
  ArrowRight
} from "lucide-react";

const WORKFLOW_STEPS = [
  { label: "LEAD", icon: UserPlus },
  { label: "AI RESPONSE", icon: Bot },
  { label: "QUALIFICATION", icon: Filter },
  { label: "FOLLOW-UP", icon: RefreshCw },
  { label: "APPOINTMENT", icon: Calendar },
  { label: "CRM", icon: Database },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-neutral-900 min-h-[88vh] sm:min-h-[92vh] lg:min-h-[95vh] flex flex-col justify-center items-center pt-24 sm:pt-32 pb-20 sm:pb-28 border-b border-neutral-200/80">
      {/* Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 sm:opacity-60 z-0"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* FULL EXPANDED COLOSSEUM ARCHITECTURAL BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        <img
          src="/colosseum-hero-sketch.png"
          alt="Roman Colosseum Architectural Sketch with Orange Accent"
          className="w-full h-full object-cover object-center lg:object-left-bottom opacity-30 sm:opacity-85 lg:opacity-100 mix-blend-multiply"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1700px] w-full px-4 sm:px-8 lg:px-16 xl:px-20 flex flex-col lg:flex-row justify-end items-center my-auto pt-4 pb-8 sm:pb-12">
        {/* Right-aligned text content occupying right side space */}
        <div className="w-full lg:w-[56%] xl:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left ml-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[70px] font-bold tracking-tight text-neutral-900 leading-[1.1]"
          >
            Automate Your Business. <br className="hidden sm:block" />
            <span className="text-neutral-900">Capture More Customers.</span>
          </motion.h1>

          {/* Subheadline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-6 max-w-xl text-neutral-700 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed font-sans px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl bg-white/90 backdrop-blur-[10px] border border-white shadow-xs"
          >
            We build AI-powered systems that automate lead capture, customer conversations, appointment booking, follow-ups, and repetitive business operations.
          </motion.p>

          {/* Action Buttons CTAs: Reduced size on web and laptop view ONLY, full width on mobile view */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center lg:justify-start"
          >
            <Link to="/book" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-[#18181b] px-5 sm:px-6 py-3 sm:py-3 text-sm sm:text-xs md:text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap">
                Get Your Free Automation Audit
              </button>
            </Link>
            <a href="#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-white/95 backdrop-blur-md border border-neutral-300 text-neutral-800 px-5 sm:px-6 py-3 sm:py-3 text-sm sm:text-xs md:text-sm font-semibold shadow-xs transition-all duration-200 hover:bg-neutral-100 hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap">
                <span>See How It Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
              </button>
            </a>
          </motion.div>

          {/* VISUAL AUTOMATION PROCESS FLOW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 sm:mt-9 w-full max-w-2xl bg-white/90 backdrop-blur-xl border border-neutral-200/90 rounded-2xl p-4 sm:p-5.5 shadow-lg shadow-neutral-900/5"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-200/60">
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-500 uppercase font-sans">
                Automated Customer Engine
              </span>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00] animate-pulse" />
                24/7 Autonomous System
              </div>
            </div>

            {/* Clean Monochrome/Orange Workflow Step Badges */}
            <div className="flex items-center justify-start sm:justify-between gap-1.5 overflow-x-auto py-1 scrollbar-none touch-pan-x">
              {WORKFLOW_STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-1.5 shrink-0">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-neutral-200 bg-[#fafafa] text-neutral-800 text-[11px] sm:text-xs font-semibold tracking-tight shadow-2xs transition-all hover:bg-white hover:border-neutral-300">
                      <IconComponent className="w-3.5 h-3.5 shrink-0 text-[#ff7a00]" />
                      <span className="whitespace-nowrap">{step.label}</span>
                    </div>
                    {idx < WORKFLOW_STEPS.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 mx-0.5 opacity-80" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}