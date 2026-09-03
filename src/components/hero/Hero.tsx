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
import { FlipWords } from "@/components/ui/flip-words";

const HERO_WORDS = ["Agencies.", "Enterprises.", "Businesses.", "Teams.", "Studios."];

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
    <section className="relative overflow-hidden bg-white text-neutral-900 min-h-[88vh] sm:min-h-[92vh] lg:min-h-[95vh] flex flex-col justify-center items-center pt-24 sm:pt-32 pb-20 sm:pb-28">
      {/* Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 sm:opacity-50 z-0"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1.2px, transparent 1.2px)",
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
        <div className="w-full lg:w-[64%] xl:w-[60%] 2xl:w-[56%] flex flex-col items-center lg:items-start text-center lg:text-left ml-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[64px] font-bold tracking-tight text-neutral-900 leading-[1.12]"
          >
            <span className="block">Autonomous AI Infrastructure.</span>
            <span className="block text-neutral-900 mt-1 sm:mt-1.5">
              Built for High-Growth{" "}
              <FlipWords words={HERO_WORDS} className="text-neutral-900 font-bold p-0 px-0.5 inline-block" />
            </span>
          </motion.h1>


          {/* Apple Action Pill Buttons CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto justify-center lg:justify-start"
          >
            <Link to="/book" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-neutral-900 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-black hover:scale-[1.03] active:scale-[0.97] cursor-pointer whitespace-nowrap tracking-wide antialiased">
                Get Your Free Automation Audit
              </button>
            </Link>
            <a href="#services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-full bg-white/80 backdrop-blur-md border border-black/5 hover:bg-white text-neutral-800 hover:border-black/15 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold shadow-xs transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap tracking-wide antialiased">
                <span>See How It Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
              </button>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}