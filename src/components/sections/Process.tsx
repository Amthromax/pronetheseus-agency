import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import processBg from "@/assets/process-bg.png.asset.json";

const steps = [
  { t: "Discovery", d: "Deep-dive into your processes, tools, and highest-leverage opportunities." },
  { t: "Strategy", d: "Prioritized roadmap with ROI projections and success metrics." },
  { t: "Design", d: "Interaction, data, and system design — reviewed and approved." },
  { t: "Development", d: "We build in weekly sprints with continuous demos." },
  { t: "Testing", d: "End-to-end QA, load, and safety testing before launch." },
  { t: "Deployment", d: "Production-ready deploy with monitoring and dashboards." },
  { t: "Optimization", d: "Ongoing tuning to keep your systems ahead of the curve." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden text-white">
      <img
        src={processBg.url}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      <div className="relative container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading title="From idea to production in weeks" description="A senior team, a tight loop, and no fluff — you'll see progress every week." />
      <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
        <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        <motion.div style={{ height: lineHeight }} className="absolute left-6 top-0 w-px bg-gradient-to-b from-[#ff7a00] to-[#c2410c] shadow-[0_0_20px_rgba(255,122,0,0.6)] md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 60 : -60, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="relative grid grid-cols-[48px_1fr] gap-6 md:grid-cols-2 md:gap-16"
            >
              <div className={`hidden md:block ${i % 2 ? "" : "order-2"}`} />
              <div className={`relative ${i % 2 ? "md:pl-24" : "md:pr-24 md:text-right"}`}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute left-0 top-3 z-10 size-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#ff7a00] to-[#c2410c] shadow-[0_0_0_4px_#050505,0_0_20px_4px_rgba(255,122,0,0.6)] md:left-1/2"
                />
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-brand/40 hover:shadow-[0_20px_60px_-20px_rgba(255,122,0,0.4)]"
                >
                  <h3 className="font-display text-2xl text-white">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.d}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}