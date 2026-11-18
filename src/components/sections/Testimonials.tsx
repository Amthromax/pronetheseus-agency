import { RollingText } from "@/components/ui/rolling-text";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Zap, AlertTriangle, Cpu } from "lucide-react";
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
  slug: string;
}

const CASE_STUDIES: CaseStudyCard[] = [
  {
    client: "Apex Plumbing & HVAC",
    industry: "Home Services (12 Techs)",
    problem:
      "40% of emergency inbound calls after 6 PM went to voicemail, missing lucrative repair contracts.",
    system: "Voice AI Call Assistant & SMS Speed-to-Lead Agent",
    result: "47 hours/month saved • +18 emergency jobs booked/mo",
    testimonial:
      "We used to lose high-value weekend service calls because no one answered immediately. The AI agent now qualifies and books emergency slots directly into our dispatch calendar in under 45 seconds.",
    author: "Dave Reynolds",
    authorTitle: "Operations Director",
    slug: "energy-giant-ai-voice",
  },
  {
    client: "BrightSmile Dental Studio",
    industry: "Dental Practice (3 Locations)",
    problem:
      "25% patient appointment no-show rate and staff spent 15+ hours/week making manual phone reminder calls.",
    system: "Automated WhatsApp & SMS Cadence with 2-way Rescheduling",
    result: "32% faster lead response • 94% patient attendance rate",
    testimonial:
      "Our front desk staff can finally focus on patient care instead of spending hours on the phone chasing confirmations. No-shows dropped almost to zero within 30 days.",
    author: "Dr. Sarah Lin",
    authorTitle: "Managing Partner",
    slug: "ecuador-insurer-transformation",
  },
  {
    client: "Vanguard Realty Group",
    industry: "Real Estate Brokerage (18 Agents)",
    problem:
      "Inbound portal leads sat uncontacted for hours, causing high lead decay and lost property commissions.",
    system: "Sub-minute WhatsApp Qualifying Bot & CRM Auto-Sync Engine",
    result: "3.2× ROI on ad spend • 14 extra buyer tours booked/mo",
    testimonial:
      "Speed is everything in real estate. Having an autonomous AI SDR qualify buyers on WhatsApp in 30 seconds doubled our agent tour bookings in the first month.",
    author: "Marcus Vance",
    authorTitle: "Principal Broker",
    slug: "financial-institution-modernization",
  },
];

interface TestimonialsProps {
  className?: string;
  hideBorders?: boolean;
}

export function Testimonials({ className = "", hideBorders = false }: TestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="customer-testimonials"
      className={`relative bg-sandel py-14 sm:py-20 text-neutral-900 overflow-hidden ${hideBorders ? "" : "border-y border-sandel-border"} ${className}`}
    >
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
            Client Success Stories
          </span>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Proven System Results & Case Studies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-sans max-w-2xl leading-relaxed mx-auto">
            Real problem-to-result breakdowns demonstrating how service businesses eliminate
            operational drag.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-10 pt-2"
        >
          {CASE_STUDIES.map((item, idx) => (
            <ScrollReveal key={idx} variant="card" staggerIndex={idx} staggerStep={0.12}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: item.slug }}
                className="block cursor-pointer h-full"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex w-full shrink-0 flex-col rounded-[28px] sm:rounded-[32px] border border-neutral-200/80 bg-[#f4f3ee] shadow-[0_4px_24px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-neutral-300/80 transition-all duration-300 cursor-pointer h-full font-sans overflow-hidden"
                >
                  {/* Top — Client & Industry */}
                  <div className="px-7 pt-7 pb-5 border-b border-neutral-200/60">
                    <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block mb-1.5">
                      {item.industry}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-neutral-900 tracking-tight group-hover:text-neutral-700 transition-colors">
                      {item.client}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col justify-between px-7 py-6">
                    {/* Problem → System → Result pipeline */}
                    <div className="space-y-3">
                      {/* Problem */}
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                          <AlertTriangle className="size-3.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider block mb-0.5">
                            Problem
                          </span>
                          <span className="text-xs text-neutral-600 leading-relaxed block">
                            {item.problem}
                          </span>
                        </div>
                      </div>

                      {/* Deployed System */}
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
                          <Cpu className="size-3.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block mb-0.5">
                            Deployed System
                          </span>
                          <span className="text-xs text-neutral-800 font-semibold leading-relaxed block">
                            {item.system}
                          </span>
                        </div>
                      </div>

                      {/* Result */}
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                          <Zap className="size-3.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-0.5">
                            Result
                          </span>
                          <span className="text-xs text-neutral-900 font-bold leading-relaxed block">
                            {item.result}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="mt-6 pt-5 border-t border-neutral-200/60">
                      <div className="relative">
                        <Quote className="absolute -top-1 -left-1 size-5 text-neutral-300" />
                        <p className="pl-6 text-[13px] text-neutral-600 font-normal italic leading-relaxed">
                          {item.testimonial}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="size-9 rounded-full bg-neutral-900 flex items-center justify-center text-white text-[10px] font-bold tracking-wide">
                            {item.author.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-neutral-900 block font-sans">
                              {item.author}
                            </span>
                            <span className="text-[11px] text-neutral-500 block leading-tight">
                              {item.authorTitle}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                          <span>Read Story</span>
                          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 text-center">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-black hover:scale-[1.01]"
          >
            <span>
              <RollingText>Get Your Free Automation Audit</RollingText>
            </span>
            <ArrowRight className="size-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
