import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import processBg from "@/assets/process-bg.png.asset.json";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const agencySteps = [
  {
    step: "01",
    timeframe: "Days 1–3",
    t: "Operations Audit & Infrastructure Blueprint",
    d: "We shadow your account team, map every manual touchpoint across sales, onboarding, delivery, and reporting, and deliver a custom infrastructure architectural blueprint."
  },
  {
    step: "02",
    timeframe: "Weeks 1–2",
    t: "Custom n8n & AI Agent Architecture",
    d: "Our engineers build your automated client onboarding OS, live reporting engines, and AI agents tailored specifically to your existing stack (Slack, ClickUp, HubSpot, Notion)."
  },
  {
    step: "03",
    timeframe: "Week 2–3",
    t: "Turnkey Integration & Fail-Safe Testing",
    d: "We connect APIs, run stress-testing for edge cases, build human-in-the-loop fallback guardrails, and conduct hands-on training with your agency team."
  },
  {
    step: "04",
    timeframe: "Week 3+",
    t: "Full Handoff & 24/7 Operations Monitoring",
    d: "100% code and repository ownership is transferred to your organization. We maintain real-time monitoring and 30-day SLA hyper-care to ensure zero downtime."
  }
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-neutral-950 py-16 text-white md:py-24">
      <img
        src={processBg.url}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-30"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />
      
      <div className="relative container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            How does it work?
          </h2>
          <p className="mt-4 text-base text-neutral-400 md:text-lg">
            A 4-step engineering protocol designed to get your agency infrastructure live in 3 weeks with zero disruption to daily client work.
          </p>
        </div>

        <div ref={ref} className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div style={{ height: lineHeight }} className="absolute left-6 top-0 w-px bg-gradient-to-b from-[#ff7a00] to-[#c2410c] shadow-[0_0_20px_rgba(255,122,0,0.6)] md:left-1/2 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {agencySteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 50 : -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="relative grid grid-cols-[48px_1fr] gap-6 md:grid-cols-2 md:gap-16"
              >
                <div className={`hidden md:block ${i % 2 ? "" : "order-2"}`} />
                <div className={`relative ${i % 2 ? "md:pl-20" : "md:pr-20 md:text-right"}`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.1 + 0.15, duration: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute left-0 top-3 z-10 size-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#ff7a00] to-[#c2410c] shadow-[0_0_0_4px_#0a0a0a,0_0_20px_4px_rgba(255,122,0,0.6)] md:left-1/2"
                  />
                  <div className="rounded-3xl border border-white/12 bg-neutral-950/70 p-6 md:p-8 backdrop-blur-2xl transition duration-300 hover:border-brand/40 hover:bg-neutral-950/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                      <span className="font-mono tabular-nums tracking-widest bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-md">STEP {s.step}</span>
                      <span>•</span>
                      <span className="text-white/60 font-medium">{s.timeframe}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">{s.t}</h3>
                    <p className="mt-2.5 text-sm text-neutral-400 leading-relaxed font-normal">{s.d}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/book"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Start Step 1: Book Audit Call
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}