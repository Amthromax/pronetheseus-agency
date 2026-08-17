import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
  const cases = caseStudies;
  return (
    <section className="relative bg-white text-neutral-900">
      <div className="container-pad mx-auto max-w-[1400px] py-24 md:py-32">
        <SectionHeading
          title="Results our clients can measure"
          description="Real outcomes, verified metrics, and production-grade architectures built for growth-stage teams."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.15)]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#ff7a00]">
                      {c.industry}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-neutral-900 tracking-tight">
                      {c.company}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/80 px-2.5 py-1 text-[11px] font-semibold text-[#ff7a00]">
                    <span className="size-1.5 rounded-full bg-[#ff7a00] animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Key Metrics Chips */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-orange-50/70 border border-orange-100 p-2.5 text-center">
                    <div className="flex items-center justify-center gap-1 text-base font-extrabold text-[#ff7a00]">
                      <Clock className="size-4" />
                      <span>{c.metrics[0]?.v.toLocaleString()} {c.metrics[0]?.s}</span>
                    </div>
                    <div className="text-[10px] font-medium text-neutral-600 mt-0.5">{c.metrics[0]?.l}</div>
                  </div>

                  <div className="rounded-xl bg-neutral-100/80 border border-neutral-200 p-2.5 text-center">
                    <div className="flex items-center justify-center gap-1 text-base font-extrabold text-neutral-900">
                      <TrendingUp className="size-4 text-[#ff7a00]" />
                      <span>{c.metrics[1]?.v}{c.metrics[1]?.s}</span>
                    </div>
                    <div className="text-[10px] font-medium text-neutral-600 mt-0.5">{c.metrics[1]?.l}</div>
                  </div>
                </div>

                {/* Before & After Details */}
                <div className="mt-5 space-y-2.5 text-xs md:text-sm">
                  <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      BEFORE AUTOMATION
                    </div>
                    <div className="mt-1 text-neutral-700 leading-snug">{c.before}</div>
                  </div>

                  <div className="rounded-xl border border-orange-200/70 bg-orange-50/30 p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#ff7a00] flex items-center gap-1">
                      <ShieldCheck className="size-3 text-[#ff7a00]" />
                      PRONETHESEUS ARCHITECTURE
                    </div>
                    <div className="mt-1 text-neutral-900 font-medium leading-snug">{c.after}</div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="mt-5 text-xs md:text-sm text-neutral-700 italic border-l-2 border-[#ff7a00] pl-3 py-0.5">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <div className="mt-2 text-xs font-medium text-neutral-500">— {c.who}, <span className="text-neutral-700">{c.role}</span></div>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
                  {c.customer.stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-neutral-100 border border-neutral-200/60 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="group inline-flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}