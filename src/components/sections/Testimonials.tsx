import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/fx/ScrollReveal";

interface CaseStudyCard {
  client: string;
  industry: string;
  problem: string;
  system: string;
  result: string;
  testimonial: string;
  author: string;
  authorTitle: string;
}

const CASE_STUDIES: CaseStudyCard[] = [
  {
    client: "Apex Plumbing & HVAC",
    industry: "Home Services (12 Techs)",
    problem: "40% of emergency inbound calls after 6 PM went to voicemail, missing lucrative repair contracts.",
    system: "Voice AI Call Assistant & SMS Speed-to-Lead Agent",
    result: "47 hours/month saved • +18 emergency jobs booked/mo",
    testimonial: "We used to lose high-value weekend service calls because no one answered immediately. The AI agent now qualifies and books emergency slots directly into our dispatch calendar in under 45 seconds.",
    author: "Dave Reynolds",
    authorTitle: "Operations Director",
  },
  {
    client: "BrightSmile Dental Studio",
    industry: "Dental Practice (3 Locations)",
    problem: "25% patient appointment no-show rate and staff spent 15+ hours/week making manual phone reminder calls.",
    system: "Automated WhatsApp & SMS Cadence with 2-way Rescheduling",
    result: "32% faster lead response • 94% patient attendance rate",
    testimonial: "Our front desk staff can finally focus on patient care instead of spending hours on the phone chasing confirmations. No-shows dropped almost to zero within 30 days.",
    author: "Dr. Sarah Lin",
    authorTitle: "Managing Partner",
  },
  {
    client: "Vanguard Realty Group",
    industry: "Real Estate Brokerage (18 Agents)",
    problem: "Inbound portal leads sat uncontacted for hours, causing high lead decay and lost property commissions.",
    system: "Sub-minute WhatsApp Qualifying Bot & CRM Auto-Sync Engine",
    result: "3.2× ROI on ad spend • 14 extra buyer tours booked/mo",
    testimonial: "Speed is everything in real estate. Having an autonomous AI SDR qualify buyers on WhatsApp in 30 seconds doubled our agent tour bookings in the first month.",
    author: "Marcus Vance",
    authorTitle: "Principal Broker",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="customer-testimonials" className="relative bg-sandel py-16 sm:py-24 text-neutral-900 overflow-hidden border-y border-sandel-border">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Header Container */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Proven System Results & Case Studies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans max-w-2xl">
              Real problem-to-result breakdowns demonstrating how service businesses eliminate operational drag.
            </p>
          </div>

          {/* Prev / Next Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              aria-label="Previous story"
              className="size-11 rounded-xl border border-sandel-border bg-sandel-card flex items-center justify-center text-neutral-800 shadow-2xs transition-all duration-200 hover:bg-sandel cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              aria-label="Next story"
              className="size-11 rounded-xl border border-sandel-border bg-sandel-card flex items-center justify-center text-neutral-800 shadow-2xs transition-all duration-200 hover:bg-sandel cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </motion.button>
          </div>
        </div>

        {/* Client -> Problem -> System -> Result -> Testimonial Grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory min-w-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CASE_STUDIES.map((item, idx) => (
            <ScrollReveal key={idx} variant="card" staggerIndex={idx} staggerStep={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex min-h-[460px] w-[340px] sm:w-[420px] md:w-[440px] shrink-0 snap-start flex-col justify-between rounded-3xl border border-sandel-border bg-sandel-card p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:shadow-md cursor-pointer"
              >
                <div>
                  {/* Top Client & Industry */}
                  <div className="flex items-center justify-between pb-4 border-b border-sandel-border/60">
                    <div>
                      <h3 className="font-sans text-lg font-bold text-neutral-900 tracking-tight">
                        {item.client}
                      </h3>
                      <span className="text-xs text-neutral-500 font-mono">{item.industry}</span>
                    </div>
                  </div>

                  {/* 4-Step Breakdown Stack */}
                  <div className="mt-5 space-y-3 font-sans text-xs">
                    <div className="p-2.5 rounded-xl bg-red-50/60 border border-red-100">
                      <span className="font-mono font-bold text-red-600 uppercase text-[10px] block mb-0.5">
                        Problem
                      </span>
                      <span className="text-neutral-700 leading-snug block">{item.problem}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100">
                      <span className="font-mono font-bold text-blue-600 uppercase text-[10px] block mb-0.5">
                        Deployed System
                      </span>
                      <span className="text-neutral-800 font-medium leading-snug block">{item.system}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <span className="font-mono font-bold text-emerald-600 uppercase text-[10px] block mb-0.5">
                        Result
                      </span>
                      <span className="text-neutral-900 font-bold leading-snug block">{item.result}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="mt-5 pt-4 border-t border-sandel-border/60">
                    <p className="text-xs sm:text-sm text-neutral-700 font-normal italic leading-relaxed">
                      "{item.testimonial}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-3 border-t border-sandel-border/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block font-sans">
                      {item.author}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-500 block leading-tight">
                      {item.authorTitle}
                    </span>
                  </div>
                  <CheckCircle2 className="size-4 text-emerald-600" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Callout Button */}
        <div className="mt-8 text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-xl bg-[#18181b] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-black hover:scale-[1.01]"
          >
            <span>Get Your Free Automation Audit</span>
            <ArrowRight className="size-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}