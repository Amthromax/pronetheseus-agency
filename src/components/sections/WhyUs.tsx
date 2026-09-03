import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Zap, RefreshCw, Clock, Star, ArrowRight } from "lucide-react";

const BULLET_POINTS = [
  "Collaborative Approach",
  "Quick turnaround",
  "Clear Communication",
  "Consistent Quality",
  "Reliable Support",
];

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative bg-white py-16 sm:py-24 text-neutral-900 overflow-hidden font-sans">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
          <span className="text-sm font-medium tracking-tight text-neutral-800 font-sans">
            /Why us
          </span>
          <span className="text-sm font-medium text-neutral-400 font-sans">
            (02)
          </span>
        </div>

        {/* Main Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-semibold text-neutral-900 tracking-tight leading-[1.12] max-w-6xl mb-12 sm:mb-16"
        >
          We cut through noise to create works that <br className="hidden sm:block" />
          are thoughtful, timeless, and impactful.
        </motion.h2>

        {/* 4 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* COLUMN 1: Creative Systems + Bullet points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[26px] border border-neutral-200/90 bg-[#f4f3ee] p-2.5 sm:p-3 flex flex-col justify-between h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition duration-300"
          >
            {/* Top Monochrome Building Image Box */}
            <div className="relative rounded-[20px] bg-neutral-950 overflow-hidden p-6 text-white flex flex-col justify-between min-h-[260px] sm:min-h-[290px] shadow-sm">
              {/* Background Monochrome Highrise Skyscraper Graphic */}
              <div className="absolute inset-0 z-0 opacity-60 mix-blend-luminosity pointer-events-none select-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
                  alt="Modern Highrise Architecture"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 z-0" />

              <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Creative Systems <br />
                That Scale With You.
              </h3>

              <div className="relative z-10 flex items-center justify-between pt-6">
                <span className="text-xs font-medium text-neutral-300">© 2026</span>
                <Link to="/book">
                  <button className="rounded-full bg-white text-neutral-950 px-4 py-2 text-xs font-semibold hover:bg-neutral-100 transition shadow-sm cursor-pointer">
                    Get started
                  </button>
                </Link>
              </div>
            </div>

            {/* Bottom Bullet Points Container */}
            <div className="rounded-[20px] bg-white border border-neutral-200/80 p-4 sm:p-5 mt-2.5 flex-1 flex flex-col justify-center space-y-2.5">
              {BULLET_POINTS.map((pt) => (
                <div key={pt} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800 tracking-tight">
                  <span className="size-1.5 rounded-full bg-neutral-900 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Avatar Ratings + Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[26px] border border-neutral-200/90 bg-[#f4f3ee] p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition duration-300"
          >
            {/* Elegant SVG Wave Texture background */}
            <svg
              className="absolute bottom-0 right-0 w-full h-48 opacity-25 pointer-events-none text-neutral-400 z-0"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-50 180 C 100 120, 250 220, 450 140 C 350 80, 200 160, -50 180 Z"
                fill="currentColor"
                opacity="0.15"
              />
              <path
                d="M-50 160 C 120 90, 280 190, 450 110"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <path
                d="M-50 190 C 80 130, 220 210, 450 160"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.2"
              />
            </svg>

            {/* Top Avatars & Rating */}
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {AVATARS.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Happy Client"
                      className="inline-block size-9 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-neutral-800 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-200/80 shadow-2xs">
                  <span>5/5</span>
                  <Star className="size-3 fill-neutral-800 text-neutral-800" />
                </div>
              </div>
              <p className="mt-4 text-xs font-medium text-neutral-600">
                100+ Happy clients worldwide
              </p>
            </div>

            {/* Bottom Testimonial Quote */}
            <div className="relative z-10 mt-10 pt-6 border-t border-neutral-200/80">
              <div className="flex text-neutral-900 gap-0.5 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="size-3.5 fill-neutral-900 text-neutral-900" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                "They work fast, they work well, and they communicate clearly. From a price, quality, and professionalism perspective, Pronetheseus is the choice."
              </p>
              
              <div className="flex items-center gap-3 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Connor Lewis"
                  className="size-9 rounded-full object-cover ring-1 ring-black/10"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">Connor Lewis</h4>
                  <p className="text-[11px] text-neutral-500 font-medium">Founder - Studio Lewis</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: Stacked 3 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3.5 sm:gap-4 h-full"
          >
            {/* 3A: Scale with Demand */}
            <div className="rounded-[22px] border border-neutral-200/90 bg-white p-5 sm:p-6 flex-1 flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-neutral-300 transition duration-300">
              <Zap className="size-5 text-neutral-900" />
              <h4 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight mt-3">
                Scale with Demand
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mt-1">
                Our focused, step-by-step approach saves time and keeps projects moving smoothly.
              </p>
            </div>

            {/* 3B: Volume goes up */}
            <div className="rounded-[22px] border border-neutral-200/90 bg-white p-5 sm:p-6 flex-1 flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-neutral-300 transition duration-300">
              <RefreshCw className="size-5 text-neutral-900" />
              <h4 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight mt-3">
                Volume goes up, we scale with it.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mt-1">
                We create systems that grow with your brand and stay effective over time.
              </p>
            </div>

            {/* 3C: Built for B2B */}
            <div className="rounded-[22px] border border-neutral-200/90 bg-white p-5 sm:p-6 flex-1 flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-neutral-300 transition duration-300">
              <Clock className="size-5 text-neutral-900" />
              <h4 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight mt-3">
                Built for B2B
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mt-1">
                We understand pipeline, conversions, and what makes a VP of Marketing hit approve.
              </p>
            </div>
          </motion.div>

          {/* COLUMN 4: Dark Ribbed Vertical Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-[26px] bg-neutral-950 text-white p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[420px]"
          >
            {/* High-End Dark Ribbed / Fluted Vertical Column Texture */}
            <div
              className="absolute inset-0 opacity-80 pointer-events-none z-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #171717 0px, #171717 14px, #0a0a0a 14px, #0a0a0a 28px)",
              }}
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none z-0" />

            {/* Top Right Brand Title */}
            <div className="relative z-10 self-end">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 font-sans">
                Pronetheseus ®
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-16">
              <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-bold tracking-tight text-white leading-tight">
                Embedded, not outsourced
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-2">
                Built for output. Designed for standards
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
