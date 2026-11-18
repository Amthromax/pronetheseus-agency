import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { RollingText } from "@/components/ui/rolling-text";
import { CountUp } from "@/components/ui/count-up";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  TrendingUp,
  Zap,
  ShieldCheck,
  Layers,
  Cpu,
  Quote,
  Sparkles,
  Code2,
  Database,
  Cloud,
  Workflow,
  MessageSquare,
  CreditCard,
  Terminal,
  Globe,
  Compass,
  Lock,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Make Accuracy" },
      {
        name: "description",
        content:
          "Led by Founder & CEO Kanth K Maglaire — meet the senior engineering studio building autonomous AI and revenue infrastructure for ambitious companies.",
      },
      { property: "og:title", content: "About — Make Accuracy" },
      {
        property: "og:description",
        content:
          "Meet Kanth K Maglaire and the senior team engineering the AI backbone of high-growth companies.",
      },
      { property: "og:url", content: "https://makeaccuracy.agency/about" },
    ],
    links: [{ rel: "canonical", href: "https://makeaccuracy.agency/about" }],
  }),
  component: AboutPage,
});

const STUDIO_PRINCIPLES = [
  {
    num: "01",
    Icon: Zap,
    title: "Ship Weekly",
    desc: "Working software and live production demos every Friday — never endless strategy decks or quarterly steering committees.",
  },
  {
    num: "02",
    Icon: ShieldCheck,
    title: "Senior Engineers Only",
    desc: "Every engagement is architected and led directly by principal engineers and operators. Zero junior handoffs.",
  },
  {
    num: "03",
    Icon: TrendingUp,
    title: "Outcome Accountability",
    desc: "We measure success strictly in hours reclaimed, speed-to-lead, conversion lift, and verified bottom-line ROI.",
  },
  {
    num: "04",
    Icon: Compass,
    title: "Craft & Precision",
    desc: "Enterprise AI infrastructure should feel effortless, transparent, and unmistakably refined for every operator who touches it.",
  },
];

const FOUNDER_COMMITMENTS = [
  "Focused on qualified, high-intent revenue outcomes — never vanity clicks or surface metrics",
  "Every system is engineered around real operational workflows, never generic templates",
  "Radical candor: we tell you what actually moves the needle, not what merely sounds impressive",
  "100% code, workflow, and data ownership handed over — zero agency lock-in",
  "Intentionally capped quarterly client roster so every partner receives direct executive attention",
];

const CLOUD_STACK = [
  { name: "AWS", category: "Cloud", Icon: Cloud },
  { name: "Azure", category: "Enterprise", Icon: Layers },
  { name: "Google Cloud", category: "Infra", Icon: Globe },
  { name: "OpenAI", category: "Models", Icon: Sparkles },
  { name: "Anthropic", category: "Models", Icon: Cpu },
  { name: "n8n", category: "Workflows", Icon: Workflow },
  { name: "HubSpot", category: "CRM", Icon: Activity },
  { name: "Salesforce", category: "CRM", Icon: Database },
  { name: "Twilio", category: "Voice", Icon: MessageSquare },
  { name: "Stripe", category: "Billing", Icon: CreditCard },
  { name: "PostgreSQL", category: "Data", Icon: Database },
  { name: "Kubernetes", category: "Compute", Icon: Terminal },
  { name: "GitHub CI", category: "DevOps", Icon: Code2 },
  { name: "SOC2 VPC", category: "Security", Icon: Lock },
];

const WORKING_MODEL = [
  {
    num: "01",
    title: "Strategic First Principles",
    desc: "Every engagement starts inside your actual operations — auditing bottlenecks, customer journeys, and data flows before writing a single line of code.",
  },
  {
    num: "02",
    title: "Unified Revenue Infrastructure",
    desc: "Your website, acquisition channels, CRM, and autonomous AI agents operate as one synchronized engine rather than disconnected tools.",
  },
  {
    num: "03",
    title: "Engineered for Measurable ROI",
    desc: "Every workflow is tied to concrete telemetry — speed-to-lead, hours saved, deflection rate, and pipeline velocity.",
  },
  {
    num: "04",
    title: "Direct Senior Communication",
    desc: "Work directly with Kanth K Maglaire and our principal engineers through dedicated Slack channels and jargon-free weekly milestone reviews.",
  },
  {
    num: "05",
    title: "Continuous Post-Launch Refinement",
    desc: "We monitor live latency, eval accuracy, and conversion trends after cutover — tuning systems so performance compounds over time.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans pt-28 sm:pt-36">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="container-pad mx-auto max-w-[1400px] pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
            <span className="size-1.5 rounded-full bg-neutral-900" />
            About Make Accuracy · Est. 2022
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.08]"
          >
            Engineering the AI Backbone of Ambitious Companies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto"
          >
            A boutique engineering studio of senior architects, designers, and operators. We partner
            with a select number of businesses each quarter to replace manual drag with autonomous,
            production-grade AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-black hover:scale-[1.02]"
            >
              <RollingText>Book a Strategy Call</RollingText>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-neutral-900 shadow-2xs transition hover:border-neutral-900 hover:bg-neutral-50"
            >
              <RollingText>View Proven Results</RollingText>
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </div>

        {/* 4 Animated Impact Metric Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              <CountUp end={4} suffix="+" duration={1400} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Years of Execution
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Shipping production growth &amp; automation systems since 2022.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              <CountUp end={62} suffix="+" duration={1800} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Businesses Transformed
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Service firms, agencies, healthcare, and enterprise operators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              <CountUp end={78} suffix="+" duration={1900} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Systems Delivered
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              Custom AI agents, voice pipelines, and end-to-end CRM meshes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              <CountUp end={4.9} decimals={1} suffix=" / 5" duration={2000} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Client Satisfaction
            </div>
            <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
              98% on-time sprint delivery with zero vendor lock-in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. EDITORIAL FOUNDER SPOTLIGHT — KANTH K MAGLAIRE */}
      <section className="border-y border-neutral-200/80 bg-[#f4f3ee]/60 py-16 sm:py-24">
        <div className="container-pad mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Museum-Grade Portrait Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <div className="group overflow-hidden rounded-[32px] border border-neutral-200/90 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-neutral-100">
                  <img
                    src="/kishore-kanth.webp"
                    alt="Kanth K Maglaire — Founder & CEO of Make Accuracy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = "1";
                        img.src = "/kishore-kanth.png";
                      }
                    }}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white">
                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
                        Founder &amp; Chief Executive Officer
                      </div>
                      <div className="mt-1 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                        Kanth K Maglaire
                      </div>
                    </div>
                  </div>
                </div>

                {/* Founder Metadata Footer */}
                <div className="p-6 sm:p-7 space-y-5">
                  <div className="relative rounded-2xl bg-[#f4f3ee] border border-neutral-200/80 p-5">
                    <Quote className="size-4 text-neutral-400 mb-2" />
                    <p className="text-xs sm:text-sm italic text-neutral-700 leading-relaxed">
                      &ldquo;Most companies don&apos;t have a traffic problem or a talent problem —
                      they have an execution bottleneck. Build the right system once, and growth
                      compounds quietly every single day.&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-1 text-center">
                    <div className="rounded-xl border border-neutral-200/80 bg-white px-2.5 py-3">
                      <div className="font-sans text-base font-extrabold text-neutral-900">42+</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-0.5">
                        Sectors
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-200/80 bg-white px-2.5 py-3">
                      <div className="font-sans text-base font-extrabold text-neutral-900">14d</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-0.5">
                        Avg Launch
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-200/80 bg-white px-2.5 py-3">
                      <div className="font-sans text-base font-extrabold text-neutral-900">100%</div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-0.5">
                        Client IP
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Narrative, Philosophy & Founder Commitments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                <span className="size-1.5 rounded-full bg-neutral-900" />
                Leadership &amp; Origin
              </div>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.12]">
                Meet the Person Behind Make Accuracy
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-neutral-600">
                <span className="font-bold text-neutral-900">Kanth K Maglaire</span>
                <span className="text-neutral-300">•</span>
                <span>Founder &amp; CEO</span>
                <span className="text-neutral-300">•</span>
                <span>Principal AI &amp; Revenue Systems Architect</span>
              </div>

              <div className="mt-7 space-y-5 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  Make Accuracy was founded by <strong className="text-neutral-900">Kanth K Maglaire</strong>{" "}
                  with a straightforward conviction: scaling businesses deserve real operational
                  infrastructure, not hollow dashboards, bloated retainers, or fragmented software
                  experiments.
                </p>
                <p>
                  Over the past four years, we have partnered with more than 62 service businesses,
                  agencies, and high-growth operators who wanted more than raw clicks or vanity
                  numbers. Many companies already invest heavily in demand, yet lose ready-to-buy
                  enquiries because follow-ups are slow, handoffs are manual, and systems don&apos;t
                  talk to one another.
                </p>
                <p>
                  We step directly inside that operational gap. We map your complete customer and
                  delivery journey, engineer tailored AI agents and automated workflows around your
                  existing stack, and keep our quarterly client roster intentionally capped so every
                  partner receives direct senior attention, clear communication, and compounding
                  long-term results.
                </p>
              </div>

              {/* Founder Commitments */}
              <div className="mt-10 rounded-[28px] border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-2xs">
                <div className="flex items-center justify-between border-b border-neutral-200/80 pb-4">
                  <h3 className="font-sans text-base sm:text-lg font-bold tracking-tight text-neutral-900">
                    Why Partners Choose to Work With Us
                  </h3>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    5 Standards
                  </span>
                </div>

                <ul className="mt-5 space-y-3.5">
                  {FOUNDER_COMMITMENTS.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-xs sm:text-sm font-medium text-neutral-800 leading-relaxed"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                        <Check className="size-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500">
                    Speak directly with <span className="font-semibold text-neutral-900">Kanth K Maglaire</span> about your workflow roadmap.
                  </div>
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-black shrink-0"
                  >
                    <RollingText>Schedule Intro Call</RollingText>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUR STUDIO PRINCIPLES */}
      <section className="container-pad mx-auto max-w-[1400px] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            Operating Philosophy
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900">
            Principles That Govern Every Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Small senior teams outperform bloated agencies when engineering rigor and business
            clarity come first.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STUDIO_PRINCIPLES.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group flex flex-col justify-between rounded-[26px] border border-neutral-200/80 bg-[#f4f3ee] p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-white border border-neutral-200 text-neutral-900 shadow-2xs transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900">
                    <p.Icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">{p.num}</span>
                </div>
                <h3 className="mt-6 font-sans text-lg font-bold tracking-tight text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. OBSIDIAN ENTERPRISE INTEGRATIONS SHOWCASE */}
      <section className="relative overflow-hidden bg-neutral-950 py-20 sm:py-24 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)]"
        />

        <div className="relative z-10 container-pad mx-auto max-w-[1400px] text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            Infrastructure Compatibility
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            100+ Production Integrations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-neutral-400 leading-relaxed">
            Deploy our complete autonomous architecture or individual high-leverage modules directly
            inside your existing cloud, CRM, and communication stack — zero migration friction.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5">
            {CLOUD_STACK.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.09] hover:-translate-y-0.5"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
                  <item.Icon className="size-5" />
                </div>
                <span className="mt-3 font-sans text-xs sm:text-sm font-bold text-white">
                  {item.name}
                </span>
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE PARTNER — EXECUTIVE WORKING MODEL */}
      <section className="bg-white py-20 sm:py-24 text-neutral-900">
        <div className="container-pad mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              How We Partner
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900">
              Why Ambitious Businesses Work With Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Clear process, senior accountability, and systems engineered to keep performing long
              after launch day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKING_MODEL.slice(0, 2).map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex flex-col justify-between rounded-[26px] border border-neutral-200/80 bg-[#f4f3ee] p-7 sm:p-8 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex rounded-lg border border-neutral-200 bg-white px-3 py-1 font-mono text-xs font-bold text-neutral-900">
                    {step.num}
                  </span>
                  <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Obsidian Centerpiece Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="flex flex-col justify-between rounded-[26px] border border-neutral-800 bg-neutral-950 p-7 sm:p-8 text-white shadow-xl"
            >
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  The Make Accuracy Standard
                </span>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white leading-snug">
                  Founder-Led Architecture. Zero Junior Handoffs.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Every client works directly with Kanth K Maglaire and senior systems engineers
                  from day-one discovery through live production cutover.
                </p>
              </div>
              <Link
                to="/book"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-neutral-950 transition hover:bg-neutral-100"
              >
                <RollingText>Work With Our Team</RollingText>
                <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>

            {WORKING_MODEL.slice(2).map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx + 3) * 0.06 }}
                className="flex flex-col justify-between rounded-[26px] border border-neutral-200/80 bg-[#f4f3ee] p-7 sm:p-8 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex rounded-lg border border-neutral-200 bg-white px-3 py-1 font-mono text-xs font-bold text-neutral-900">
                    {step.num}
                  </span>
                  <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
