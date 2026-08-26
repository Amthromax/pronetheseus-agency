import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";

interface TestimonialCard {
  company: string;
  quote: string;
  author: string;
  authorTitle: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    company: "Boardwalk REIT",
    quote:
      "At Boardwalk, our commitment has always been to put residents first. Partnering with Pronetheseus amplified our ability to deliver empathetic, timely service at scale. This is more than technology; it's a foundation for a smarter, more connected community experience.",
    author: "Karine Dal Collo",
    authorTitle: "VP, Resident Experience",
  },
  {
    company: "Autodoc",
    quote:
      "We are passionate about using technology to empower our people. That's why we partnered with Pronetheseus to integrate AI into our customer and employee support operations. We have observed 74% first-call resolution and significant savings. Our people are happier. We are excited about the simplicity, potential, and benefits AI for Work bring to the table.",
    author: "Dmitri Rosenberg",
    authorTitle: "Head of Customer Operations",
  },
  {
    company: "AMD",
    quote:
      "We knew this wasn't just about automating tasks — it was about creating a smarter, more intuitive HR experience. By designing with our employees in mind, we've built a solution that's fast, reliable, and ready to evolve with our business.",
    author: "Sarah Lin",
    authorTitle: "Global HR Technology Lead",
  },
  {
    company: "Guidewell",
    quote:
      "This is about raising the bar—not just implementing technology, but evolving how we deliver healthcare support. With Pronetheseus, we've moved from siloed experiences to a true ecosystem that's modern, scalable, and member-centric.",
    author: "Anne Hoverson",
    authorTitle: "VP, Digital Transformation & Strategy",
  },
  {
    company: "Inception",
    quote:
      "Partnering with Pronetheseus aligns perfectly with our mission to develop AI-powered solutions that drive real business value to the customers in UAE and rest of the world.",
    author: "Dr. Tariq Al Mansoori",
    authorTitle: "Chief AI Architect",
  },
  {
    company: "Deutsche Bank",
    quote:
      "I have the privilege of leading Deutsche Bank's AI transformation journey—from initial pilots in one region to cross-border jurisdiction deployments in 2025.",
    author: "Marcus Weber",
    authorTitle: "Global Head of AI Operations",
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
    <section id="customer-testimonials" className="relative bg-[#FAFAFA] py-14 sm:py-20 text-neutral-900 overflow-hidden border-y border-neutral-200/80">
      {/* Header Container */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <ScrollReveal variant="heading">
              <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] leading-tight">
                <SplitText text="Customer testimonials" />
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="text" delay={0.15}>
              <p className="mt-2 text-sm font-normal text-neutral-600 sm:text-base">
                Discover how organizations deliver AI value with Pronetheseus.
              </p>
            </ScrollReveal>
          </div>

          {/* Prev / Next Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="size-11 rounded-md border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 shadow-2xs transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-sm cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => scroll("right")}
              aria-label="Next testimonial"
              className="size-11 rounded-md border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 shadow-2xs transition-all duration-200 hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-sm cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Edge-to-Edge Cards Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory min-w-0 pl-6 sm:pl-10 lg:pl-16 pr-6 sm:pr-10 lg:pr-16"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TESTIMONIALS.map((item, idx) => (
          <ScrollReveal key={idx} variant="card" staggerIndex={idx} staggerStep={0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex min-h-[360px] w-[310px] sm:w-[350px] md:w-[380px] shrink-0 snap-start flex-col justify-between rounded-lg border border-neutral-200 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#ff7a00]/50 hover:shadow-xl cursor-pointer"
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-black">
                  {item.company}
                </h3>
                <p className="mt-6 text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed transition-colors group-hover:text-neutral-800">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5">
                <span className="text-xs font-bold text-neutral-900 block tracking-tight">
                  {item.author}
                </span>
                <span className="text-[11px] font-medium text-neutral-500 block leading-tight mt-0.5">
                  {item.authorTitle}
                </span>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom CTA Button Container */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 mt-6">
        <ScrollReveal variant="button">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.02]"
          >
            <span>MORE CUSTOMER STORIES</span>
            <span className="size-1.5 rounded-full bg-white ml-0.5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}