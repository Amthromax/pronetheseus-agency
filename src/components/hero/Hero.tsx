import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-neutral-900 min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-center items-center pt-24 sm:pt-32 pb-24 sm:pb-36 border-b border-neutral-200/80">
      {/* Background Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 z-0"
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
          className="w-full h-full object-cover object-left-bottom opacity-90 sm:opacity-95 md:opacity-100 mix-blend-multiply"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* MAIN HERO CONTENT (POSITIONED ON THE RIGHT SIDE) */}
      <div className="relative z-10 container-pad mx-auto max-w-[1400px] w-full flex flex-col lg:flex-row justify-between items-center my-auto pt-6 pb-12 sm:pb-16">
        {/* Left spacing to allow Colosseum illustration to shine on the left */}
        <div className="hidden lg:block lg:w-[40%] xl:w-[45%] shrink-0" />

        {/* Right-aligned text content occupying right side space */}
        <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-6 xl:pl-10">
          {/* Main Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[84px] xl:text-[98px] font-normal tracking-tight text-neutral-900 leading-[1.04]"
          >
            Build lasting <br />
            relationships.
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 max-w-xl text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed font-sans px-5 py-3 rounded-2xl bg-white/85 backdrop-blur-[8px] border border-white/90 shadow-sm"
          >
            Autonomous AI agents, n8n workflow systems, and custom automation infrastructure engineered to scale agency operations 24/7.
          </motion.p>

          {/* Action Button CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
          >
            <Link to="/book">
              <button className="rounded-lg sm:rounded-xl bg-[#18181b] px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                Book A Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}