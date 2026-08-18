import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { 
  Users, 
  AlertTriangle, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export interface CoreQuestion {
  id: string;
  number: string;
  question: string;
  shortAnswer: string;
  badge: string;
  icon: typeof Users;
  details: {
    heading: string;
    points: string[];
    metric?: string;
    metricLabel?: string;
  };
  avoidText: string;
}

export const CORE_QUESTIONS: CoreQuestion[] = [
  {
    id: "who-we-help",
    number: "01",
    question: "Who do you help?",
    badge: "Target ICP",
    icon: Users,
    shortAnswer: "Scaling B2B Marketing, Dev, & Consulting Agencies ($50k–$500k+/mo) stuck at 10-50+ clients.",
    details: {
      heading: "Built Specifically For High-Growth Agencies Bottlenecked By Manual Ops",
      points: [
        "Performance & Growth Marketing Agencies juggling 20+ ad accounts and manual client reporting",
        "Dev, Design & Product Studios scaling deliverable velocity & client feedback loops",
        "High-Ticket Lead Gen & Sales Agencies handling high inbound volume requiring instant AI qualification",
        "Real Estate & Professional Services firms scaling client intake and contract management"
      ],
      metric: "$50k–$500k+",
      metricLabel: "Monthly Agency Revenue"
    },
    avoidText: "Not generic B2C prompts or pre-revenue solo freelancers. We build custom infrastructure for established agency operators."
  },
  {
    id: "problem-solved",
    number: "02",
    question: "What problem do you solve?",
    badge: "Operational Bottlenecks",
    icon: AlertTriangle,
    shortAnswer: "The Operational Scaling Wall: 14-day manual onboarding, chaotic account updates, and margin decay.",
    details: {
      heading: "Eliminating Administrative Chaos & Payroll Bloat",
      points: [
        "14-Day Onboarding Lag: Back-and-forth emails, missing access keys, and delayed kickoffs",
        "Margin Decay: Senior account directors spending 15+ hours/week copying data into spreadsheets",
        "Disconnected Tool Silos: Slack, ClickUp, Notion, HubSpot, and Drive operating in blind spots",
        "Human Error & Churn: Forgotten follow-ups, delayed client updates, and inconsistent delivery"
      ],
      metric: "120+ Hrs",
      metricLabel: "Saved Per Month / Agency"
    },
    avoidText: "We don't sell 'AI hype' or generic chatbots. We replace manual human data entry with automated engineering pipelines."
  },
  {
    id: "how-it-works",
    number: "03",
    question: "How does it work?",
    badge: "4-Step System",
    icon: Cpu,
    shortAnswer: "Our 4-Step Agency Systems Protocol: Audit -> Custom n8n & AI Build -> Integration -> Full Handoff.",
    details: {
      heading: "Turnkey Agency Infrastructure Engineering",
      points: [
        "Step 1: Operations Audit (Days 1–3) — We map every workflow, data schema, and manual bottleneck",
        "Step 2: Custom Architecture (Weeks 1–2) — Engineer bespoke n8n automations, AI agents & databases",
        "Step 3: Stress-Tested Integration (Week 2–3) — Live stack deployment, error handling & team training",
        "Step 4: Full Handoff & SLA Monitoring (Week 3+) — 100% code ownership transferred to you with 24/7 monitoring"
      ],
      metric: "3 Weeks",
      metricLabel: "Audit to Live Production"
    },
    avoidText: "No endless consulting retainers. We build production-ready software systems directly inside your technology stack."
  },
  {
    id: "expected-outcomes",
    number: "04",
    question: "What outcome can the client expect?",
    badge: "Concrete Metrics",
    icon: TrendingUp,
    shortAnswer: "3x client capacity without adding headcount, 90% faster onboarding, and 40%+ higher net profit margins.",
    details: {
      heading: "Hard Data & Measurable Financial ROI",
      points: [
        "3x Client Capacity: Scale from 15 to 45 active retainers using your existing operational team",
        "90% Faster Client Onboarding: Reduced from 14 days of back-and-forth to 15 minutes automatically",
        "Zero Deliverable Drops: Real-time SLA tracking with proactive automated client notifications",
        "40%+ Profit Margin Increase: Reclaim thousands in wasted payroll from manual administrative tasks"
      ],
      metric: "300%",
      metricLabel: "Capacity Increase"
    },
    avoidText: "Zero vague promises. Every metric is tracked via real-time operational dashboards from day one."
  },
  {
    id: "why-trust-us",
    number: "05",
    question: "Why trust you?",
    badge: "Guarantees & Security",
    icon: ShieldCheck,
    shortAnswer: "100% Code Ownership (zero vendor lock-in), SOC2 security, $4.2M+ client revenue unlocked, and 30-Day SLA guarantee.",
    details: {
      heading: "Enterprise Security & Risk-Free Guarantees",
      points: [
        "100% Code Ownership: Built on open n8n & Python architecture. You own 100% of the repos & workflows",
        "SOC2-Compliant Security: Bank-grade data encryption, zero AI training on your private client data",
        "30-Day ROI Guarantee: If your infrastructure doesn't save at least 20 hrs/wk in 30 days, we work free until it does",
        "Principal Engineers Only: Built by senior backend & AI system architects, never outsourced junior devs"
      ],
      metric: "$4.2M+",
      metricLabel: "Client Value Created"
    },
    avoidText: "No proprietary lock-in. No black-box software. If you ever leave, your infrastructure continues running on your servers."
  },
  {
    id: "book-call",
    number: "06",
    question: "How can they book a call?",
    badge: "Instant Scheduling",
    icon: Calendar,
    shortAnswer: "Select your agency scale, answer 3 quick questions, and book a 1-on-1 Strategy Call directly on our calendar.",
    details: {
      heading: "Low-Friction 30-Minute Systems Audit Session",
      points: [
        "Direct 1-on-1 call with a Principal Systems Architect (zero high-pressure sales reps)",
        "Live stack tear-down & custom bottleneck identification during the call",
        "Receive a customized Agency Infrastructure Blueprint within 24 hours of call completion",
        "Pick your exact date & time with instant Google Calendar invite & meeting link"
      ],
      metric: "30 Min",
      metricLabel: "Free Systems Strategy Call"
    },
    avoidText: "No fluff, no 50-slide pitch decks. Just an engineering audit of your bottlenecks and a concrete plan."
  }
];

export function Agency6Framework() {
  const [activeId, setActiveId] = useState<string>("who-we-help");
  const activeQuestion = CORE_QUESTIONS.find((q) => q.id === activeId) || CORE_QUESTIONS[0];

  return (
    <section id="clarity-framework" className="relative bg-[#fbfbfd] py-10 md:py-16 text-neutral-900 overflow-hidden border-y border-black/[0.05]">
      {/* Apple-style soft ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-gradient-to-tr from-orange-200/25 via-neutral-200/30 to-transparent blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1750px] px-4 sm:px-6 md:px-10 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.1]">
            The 6 Core Questions Answered
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
            Everything you need to know about our Agency Infrastructure &amp; System Builds — upfront, clear, and measurable.
          </p>
        </div>

        {/* 6 Tabs Grid (Compact Apple Bento Row) */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {CORE_QUESTIONS.map((q) => {
            const Icon = q.icon;
            const isActive = q.id === activeId;
            return (
              <button
                key={q.id}
                onClick={() => setActiveId(q.id)}
                className={`group relative flex flex-col items-start justify-between rounded-[18px] p-3 text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "border border-orange-500/40 bg-white text-neutral-950 shadow-[0_8px_24px_-4px_rgba(255,122,0,0.2),0_2px_4px_rgba(0,0,0,0.03)] ring-2 ring-orange-500/20 -translate-y-0.5"
                    : "border border-black/[0.06] bg-white/70 backdrop-blur-md text-neutral-700 shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:border-black/15 hover:bg-white hover:shadow-[0_6px_16px_rgba(0,0,0,0.04)]"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className={`font-mono text-[11px] font-bold tabular-nums tracking-wider ${isActive ? "text-brand" : "text-neutral-400"}`}>
                    {q.number}
                  </span>
                  <div className={`grid size-6 place-items-center rounded-lg transition-all duration-300 ${isActive ? "bg-brand text-white shadow-xs scale-105" : "bg-neutral-100/80 text-neutral-500 group-hover:bg-neutral-200/80 group-hover:text-neutral-950"}`}>
                    <Icon className="size-3" />
                  </div>
                </div>
                <div className={`mt-2 font-display text-[11px] sm:text-xs font-bold leading-snug tracking-tight ${isActive ? "text-neutral-950" : "text-neutral-800"}`}>
                  {q.question}
                </div>
                <span className={`mt-1.5 inline-block text-[9px] font-semibold tracking-tight ${isActive ? "text-brand" : "text-neutral-400"}`}>
                  {q.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Question Detail Panel (Compact Apple Pro Design Box) */}
        <div className="mt-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuestion.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-white/90 p-5 md:p-7 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.02]"
            >
              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                {/* Left Column: Deep Answers */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] font-bold tabular-nums tracking-widest text-brand">
                      QUESTION {activeQuestion.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">{activeQuestion.badge}</span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-neutral-950 leading-tight">
                    {activeQuestion.question}
                  </h3>

                  {/* Compact Apple Pill Quote Box */}
                  <div className="rounded-xl border border-black/[0.06] bg-neutral-100/70 p-3.5 text-xs md:text-sm font-semibold text-neutral-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md">
                    &ldquo;{activeQuestion.shortAnswer}&rdquo;
                  </div>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Detailed Infrastructure Blueprint:</h4>
                    <ul className="space-y-2">
                      {activeQuestion.details.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 font-medium leading-normal">
                          <CheckCircle2 className="size-3.5 shrink-0 text-brand mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Avoid Fluff Guarantee Box */}
                  <div className="mt-2.5 rounded-xl border border-black/[0.05] bg-neutral-100/50 p-3 text-[11px] text-neutral-600 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                    <span className="font-semibold text-neutral-950">Why we don&apos;t use hype words: </span>
                    {activeQuestion.avoidText}
                  </div>
                </div>

                {/* Right Column: Metric Showcase (Compact Space Black Pro Glass Box) */}
                <div className="flex flex-col justify-between rounded-[22px] border border-neutral-800/90 bg-neutral-950 p-5 md:p-6 text-white shadow-[0_15px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">Key Deliverable Benchmark</div>
                    {activeQuestion.details.metric && (
                      <div className="mt-1.5 font-display text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-brand tabular-nums">
                        {activeQuestion.details.metric}
                      </div>
                    )}
                    {activeQuestion.details.metricLabel && (
                      <div className="mt-0.5 font-semibold text-xs text-neutral-300">
                        {activeQuestion.details.metricLabel}
                      </div>
                    )}

                    <hr className="my-3.5 border-neutral-800/80" />

                    <div className="space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Our Commitment</div>
                      <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        Every system we build is custom-fitted to your agency&apos;s existing software stack. You maintain 100% data residency, zero vendor lock-in, and full repository control.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <Link
                      to="/book"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-5 py-2.5 text-xs font-bold text-white shadow-[0_8px_25px_-5px_rgba(255,122,0,0.4)] transition hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Book Strategy Call to Discuss This
                      <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                    </Link>
                    
                    <div className="flex items-center justify-center gap-3 text-[10px] text-neutral-400 font-medium">
                      <span>• Free 30-min call</span>
                      <span>• Concrete plan</span>
                      <span>• No commitment</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
