import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
  const cases = caseStudies;
  return (
    <section className="relative bg-white text-neutral-900">
      <div className="container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading title="Results our clients can measure" description="Real outcomes from teams who chose to build with us." />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {cases.map((c, i) => (
          <motion.article
            key={c.company}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-500 hover:border-neutral-300 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]"
          >
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">{c.industry}</div>
                  <h3 className="mt-1 font-display text-2xl text-neutral-900">{c.company}</h3>
                </div>
                <span className="rounded-full border border-neutral-300 bg-neutral-100 px-2 py-1 text-[10px] font-medium text-neutral-700">LIVE</span>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500">Before</div>
                  <div className="mt-1 text-neutral-700">{c.before}</div>
                </div>
                <div className="rounded-xl border border-neutral-300 bg-neutral-100 p-3">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-700">After</div>
                  <div className="mt-1 text-neutral-800">{c.after}</div>
                </div>
              </div>
              <blockquote className="mt-5 text-sm text-neutral-700">
                <Quote className="mb-2 size-4 text-neutral-400" />
                {c.quote}
              </blockquote>
              <div className="mt-3 text-xs text-neutral-500">— {c.who}, {c.role}</div>
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-neutral-700"
              >
                Read case study<ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}