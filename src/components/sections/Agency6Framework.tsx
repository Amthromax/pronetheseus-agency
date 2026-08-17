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
    <section id="clarity-framework" className="relative bg-neutral-900 py-16 text-white md:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-gradient-to-tr from-brand/10 to-orange-600/5 blur-[120px]" />
      </div>

      <div className="container-pad relative mx-auto max-w-[1400px]">

        <SectionHeading
          title="The 6 Core Questions Answered"
          description="Everything you need to know about our Agency Infrastructure & System Builds — upfront, clear, and measurable."
        />

        {/* 6 Tabs Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CORE_QUESTIONS.map((q) => {
            const Icon = q.icon;
            const isActive = q.id === activeId;
            return (
              <button
                key={q.id}
                onClick={() => setActiveId(q.id)}
                className={`group relative flex flex-col items-start justify-between rounded-2xl border p-3.5 text-left transition-all duration-300 backdrop-blur-xl ${
                  isActive
                    ? "border-brand/60 bg-gradient-to-b from-white/15 to-white/5 shadow-[0_0_30px_-5px_rgba(255,122,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.2)] ring-1 ring-brand/40"
                    : "border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className={`font-mono text-xs font-semibold tabular-nums tracking-wider ${isActive ? "text-brand" : "text-white/40"}`}>
                    {q.number}
                  </span>
                  <div className={`grid size-6.5 place-items-center rounded-lg transition-colors ${isActive ? "bg-brand text-white shadow-sm" : "bg-white/5 text-white/60 group-hover:text-white"}`}>
                    <Icon className="size-3.5" />
                  </div>
                </div>
                <div className="mt-3 font-display text-xs font-semibold leading-snug tracking-tight text-white">
                  {q.question}
                </div>
                <span className={`mt-2 inline-block text-[10px] font-medium tracking-tight ${isActive ? "text-orange-200 font-semibold" : "text-white/40"}`}>
                  {q.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Question Detail Panel */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuestion.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/80 p-6 md:p-9 backdrop-blur-2xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
            >
              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                {/* Left Column: Deep Answers */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tabular-nums tracking-widest text-brand">
                      QUESTION {activeQuestion.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span className="text-[11px] font-medium uppercase tracking-widest text-white/50">{activeQuestion.badge}</span>
                  </div>

                  <h3 className="font-display text-xl md:text-3xl font-semibold tracking-tight text-white leading-tight">
                    {activeQuestion.question}
                  </h3>

                  <div className="rounded-2xl border border-brand/25 bg-gradient-to-r from-brand/10 via-orange-950/20 to-transparent px-4.5 py-3 text-sm md:text-base font-medium text-orange-100 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                    &ldquo;{activeQuestion.shortAnswer}&rdquo;
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/50">Detailed Infrastructure Blueprint:</h4>
                    <ul className="space-y-2.5">
                      {activeQuestion.details.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/85 leading-relaxed">
                          <CheckCircle2 className="size-4 shrink-0 text-brand mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Avoid Fluff Guarantee Box */}
                  <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white/50 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                    <span className="font-semibold text-white/80">Why we don&apos;t use hype words: </span>
                    {activeQuestion.avoidText}
                  </div>
                </div>

                {/* Right Column: Metric Showcase & Call To Action */}
                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-8 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Key Deliverable Benchmark</div>
                    {activeQuestion.details.metric && (
                      <div className="mt-3 font-display text-4xl md:text-6xl font-bold tracking-tight text-gradient-brand tabular-nums">
                        {activeQuestion.details.metric}
                      </div>
                    )}
                    {activeQuestion.details.metricLabel && (
                      <div className="mt-1 font-medium text-sm text-white/70">
                        {activeQuestion.details.metricLabel}
                      </div>
                    )}

                    <hr className="my-6 border-white/10" />

                    <div className="space-y-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-white/60">Our Commitment</div>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                        Every system we build is custom-fitted to your agency&apos;s existing software stack. You maintain 100% data residency, zero vendor lock-in, and full repository control.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Link
                      to="/book"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.6)] transition hover:scale-[1.02]"
                    >
                      Book Strategy Call to Discuss This
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </Link>
                    
                    <div className="flex items-center justify-center gap-4 text-[11px] text-white/40 font-medium">
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
