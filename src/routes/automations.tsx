import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { RollingText } from "@/components/ui/rolling-text";
import { CountUp } from "@/components/ui/count-up";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  ArrowRight,
  Bot,
  Workflow,
  PhoneCall,
  Mail,
  Database,
  ShieldCheck,
  Zap,
  LineChart,
  Puzzle,
  Clock,
  CheckCircle2,
  Sparkles,
  Activity,
  Lock,
  Terminal,
  GitBranch,
  Check,
  X,
  Eye,
  FileCheck2,
  Sliders,
} from "lucide-react";

export const Route = createFileRoute("/automations")({
  head: () => ({
    meta: [
      { title: "Automations — Make Accuracy" },
      {
        name: "description",
        content:
          "Production-grade AI agents and n8n automations for sales, support, ops, and marketing — shipped in weeks with evals, guardrails, and monitoring built in.",
      },
      { property: "og:title", content: "Automations — Make Accuracy" },
      {
        property: "og:description",
        content:
          "AI agents and n8n workflows that free your team from repetitive work. See what we build, how we build it, and how fast.",
      },
      { property: "og:url", content: "https://makeaccuracy.agency/automations" },
    ],
    links: [{ rel: "canonical", href: "https://makeaccuracy.agency/automations" }],
  }),
  component: AutomationsPage,
});

interface WorkflowBlueprint {
  id: string;
  label: string;
  subtitle: string;
  trigger: string;
  metrics: { label: string; value: string }[];
  steps: {
    id: string;
    name: string;
    role: string;
    latency: string;
    detail: string;
  }[];
  trace: { time: string; tag: string; msg: string }[];
}

const WORKFLOW_BLUEPRINTS: WorkflowBlueprint[] = [
  {
    id: "speed-to-lead",
    label: "Inbound Lead → Booked Call",
    subtitle: "Qualifies web, ad, and portal leads and books directly onto rep calendars.",
    trigger: "Webhook / Form Submit / Meta Lead Ad",
    metrics: [
      { label: "Speed-to-Lead", value: "< 18 sec" },
      { label: "Qualification Accuracy", value: "99.2%" },
      { label: "Cost / Execution", value: "$0.04" },
      { label: "Booking Lift", value: "+2.8×" },
    ],
    steps: [
      {
        id: "01",
        name: "Lead Capture",
        role: "Webhook Ingestion",
        latency: "45ms",
        detail: "Normalizes payload, deduplicates against CRM, validates phone & email.",
      },
      {
        id: "02",
        name: "Enrichment",
        role: "Clearbit / Apollo",
        latency: "310ms",
        detail: "Appends company size, industry, tech stack, and ICP fit score.",
      },
      {
        id: "03",
        name: "AI Qualifier",
        role: "SMS / WhatsApp Agent",
        latency: "1.1s",
        detail: "Asks 2–3 tailored discovery questions with strict policy guardrails.",
      },
      {
        id: "04",
        name: "Auto-Booking",
        role: "Cal.com / HubSpot",
        latency: "220ms",
        detail: "Matches rep territory, books live calendar slot, and creates deal record.",
      },
      {
        id: "05",
        name: "Rep Brief",
        role: "Slack Notification",
        latency: "90ms",
        detail: "Posts full transcript, intent summary, and call prep notes to #sales.",
      },
    ],
    trace: [
      { time: "00:00.04", tag: "TRIGGER", msg: "POST /webhook/inbound-lead — Acme Logistics (140 staff)" },
      { time: "00:00.35", tag: "ENRICH", msg: "ICP score: 94/100 · Existing HubSpot deal: none · Assigned: Tier-1" },
      { time: "00:01.42", tag: "AGENT", msg: "Sent personalized SMS + WhatsApp qualification prompt" },
      { time: "00:14.80", tag: "VERIFY", msg: "Guardrail check PASS · Budget & timeline confirmed by prospect" },
      { time: "00:15.05", tag: "BOOKED", msg: "Booked Thu 2:00 PM EST · HubSpot Deal #8492 created · Slack alerted" },
    ],
  },
  {
    id: "voice-receptionist",
    label: "Voice AI Receptionist",
    subtitle: "Answers 100% of inbound calls 24/7 with sub-second conversational latency.",
    trigger: "Twilio / SIP Trunk Inbound Call",
    metrics: [
      { label: "Voice Latency", value: "620 ms" },
      { label: "Call Containment", value: "88%" },
      { label: "Missed Calls", value: "0%" },
      { label: "Hours Saved / Mo", value: "47+ hrs" },
    ],
    steps: [
      {
        id: "01",
        name: "Call Stream",
        role: "Twilio Media Streams",
        latency: "80ms",
        detail: "Establishes bi-directional low-latency audio stream with caller ID lookup.",
      },
      {
        id: "02",
        name: "Intent & RAG",
        role: "Realtime Voice Model",
        latency: "420ms",
        detail: "Identifies urgency, pricing questions, or booking requests from live knowledge base.",
      },
      {
        id: "03",
        name: "Tool Execution",
        role: "Dispatch / Calendar API",
        latency: "190ms",
        detail: "Checks technician availability or schedules consultation live on the call.",
      },
      {
        id: "04",
        name: "Warm Handoff",
        role: "SIP Transfer",
        latency: "120ms",
        detail: "Transfers VIP or emergency escalations with whispered caller summary.",
      },
      {
        id: "05",
        name: "CRM Sync",
        role: "Transcript + Recording",
        latency: "210ms",
        detail: "Logs redacted transcript, disposition tag, and follow-up SMS confirmation.",
      },
    ],
    trace: [
      { time: "00:00.08", tag: "CALL IN", msg: "Inbound voice stream connected · Caller matched: Returning Client" },
      { time: "00:00.51", tag: "INTENT", msg: "Classified: Urgent after-hours service dispatch (confidence 0.98)" },
      { time: "00:01.10", tag: "TOOL", msg: "Queried ServiceTitan dispatch slots · Found 08:30 AM opening" },
      { time: "00:01.95", tag: "CONFIRM", msg: "Caller confirmed slot · Dispatched SMS confirmation + calendar invite" },
      { time: "00:02.20", tag: "SYNC", msg: "PII-redacted transcript pushed to CRM · Quality eval: 99/100" },
    ],
  },
  {
    id: "support-triage",
    label: "Support Ticket Deflection",
    subtitle: "Resolves repetitive tickets automatically and drafts verified replies for edge cases.",
    trigger: "Zendesk / Intercom / Shared Inbox Event",
    metrics: [
      { label: "Auto-Deflection", value: "68%" },
      { label: "First Response", value: "< 12 sec" },
      { label: "Hallucination Rate", value: "< 0.1%" },
      { label: "CSAT Impact", value: "+24 pts" },
    ],
    steps: [
      {
        id: "01",
        name: "Ticket Ingest",
        role: "Helpdesk Webhook",
        latency: "60ms",
        detail: "Extracts thread history, account tier, and strips sensitive PII tokens.",
      },
      {
        id: "02",
        name: "RAG Retrieval",
        role: "Vector + Order DB",
        latency: "240ms",
        detail: "Pulls exact policy docs, live subscription state, and shipment status.",
      },
      {
        id: "03",
        name: "Policy Eval",
        role: "Guardrail Scorer",
        latency: "180ms",
        detail: "Verifies every factual claim against retrieved citations before replying.",
      },
      {
        id: "04",
        name: "Action Router",
        role: "Auto-Send / Draft",
        latency: "110ms",
        detail: "Auto-resolves high-confidence tickets; routes low-confidence drafts to agents.",
      },
      {
        id: "05",
        name: "SLA Telemetry",
        role: "Metrics Pipeline",
        latency: "75ms",
        detail: "Tracks resolution rate, cost per ticket, and flags recurring product issues.",
      },
    ],
    trace: [
      { time: "00:00.06", tag: "INGEST", msg: "Zendesk #41908 · Topic: Invoice PDF + Plan Seat Upgrade" },
      { time: "00:00.29", tag: "LOOKUP", msg: "Fetched Stripe Invoice #in_9821 + verified Enterprise SLA policy" },
      { time: "00:00.48", tag: "GUARDRAIL", msg: "Citation grounded: 100% · PII mask verified · Confidence: 0.97" },
      { time: "00:00.61", tag: "ACTION", msg: "Attached invoice PDF + sent clear upgrade confirmation reply" },
      { time: "00:00.70", tag: "CLOSED", msg: "Ticket marked solved · Logged to weekly deflection analytics" },
    ],
  },
  {
    id: "ops-reconciliation",
    label: "Ops & Document Pipeline",
    subtitle: "Extracts unstructured PDFs, validates ERP records, and eliminates manual data entry.",
    trigger: "Email Attachment / Drive Upload / Cron",
    metrics: [
      { label: "Extraction Precision", value: "99.7%" },
      { label: "Processing Time", value: "4.2 sec" },
      { label: "Manual Entry Errors", value: "0%" },
      { label: "Capacity Gain", value: "5×" },
    ],
    steps: [
      {
        id: "01",
        name: "Doc Capture",
        role: "Email / Drive Watcher",
        latency: "120ms",
        detail: "Detects incoming POs, invoices, or intake packets in PDF/image formats.",
      },
      {
        id: "02",
        name: "OCR + Schema",
        role: "Structured Parser",
        latency: "1.8s",
        detail: "Extracts line items, SKUs, tax totals, and vendor IDs into strict JSON.",
      },
      {
        id: "03",
        name: "Cross-Check",
        role: "ERP / DB Validator",
        latency: "340ms",
        detail: "Reconciles line totals against live inventory, pricing rules, and PO limits.",
      },
      {
        id: "04",
        name: "ERP Write",
        role: "Idempotent Sync",
        latency: "290ms",
        detail: "Commits validated entries with retry queues and duplicate protection.",
      },
      {
        id: "05",
        name: "Audit Digest",
        role: "Exception Queue",
        latency: "95ms",
        detail: "Routes mismatched line items for 1-click human approval in Slack.",
      },
    ],
    trace: [
      { time: "00:00.12", tag: "CAPTURE", msg: "Detected attachment: PO_2026_884.pdf (14 line items, 3 pages)" },
      { time: "00:01.94", tag: "PARSE", msg: "Extracted 14 SKUs · Subtotal & tax checksum matched ($42,850.00)" },
      { time: "00:02.28", tag: "VALIDATE", msg: "Inventory available for 14/14 SKUs · Vendor credit limit OK" },
      { time: "00:02.59", tag: "ERP SYNC", msg: "Created Order #SO-99104 in NetSuite + updated warehouse queue" },
      { time: "00:02.70", tag: "AUDIT", msg: "Signed immutable audit record · Zero exceptions flagged" },
    ],
  },
];

const AUTOMATIONS = [
  {
    Icon: PhoneCall,
    tag: "Voice",
    title: "Voice AI Receptionist",
    impact: "88% call containment",
    body: "Answers, qualifies, and books meetings 24/7. Sub-second latency, natural handoff to humans, and full structured transcripts pushed directly into your CRM.",
    inputOutput: {
      in: "Inbound phone calls, missed-call SMS, IVR overflow",
      out: "Booked calendar slots, CRM call notes, warm live transfers",
    },
    stack: ["Twilio Voice", "OpenAI Realtime", "Cal.com", "CRM API"],
    bullets: [
      "Twilio / Vonage / SIP trunk telephony integration",
      "Under 800ms conversational round-trip latency",
      "Warm human handoff with live caller context brief",
      "Automated call recording, redaction & QA scoring",
    ],
  },
  {
    Icon: Bot,
    tag: "Chat",
    title: "Concierge Chat Agent",
    impact: "3× higher lead capture",
    body: "A website, WhatsApp, and in-app agent grounded strictly on your documentation that answers real product questions, books calls, and escalates edge cases on Slack.",
    inputOutput: {
      in: "Website visitors, WhatsApp / SMS messages, in-app help",
      out: "Cited answers, qualified meetings, Slack escalation threads",
    },
    stack: ["RAG Vector DB", "WhatsApp API", "Slack", "HubSpot"],
    bullets: [
      "Grounded strictly on your docs, pricing, and SOPs",
      "One-click human escalation with full transcript summary",
      "Built-in CSAT, containment, and conversion tracking",
      "Multi-language support with consistent brand tone",
    ],
  },
  {
    Icon: Mail,
    tag: "Inbox",
    title: "Inbox Triage & Response",
    impact: "68% faster resolution",
    body: "Classifies, prioritizes, drafts, and sends replies from shared support or ops inboxes. Learns your exact voice while keeping humans in the loop for ambiguous threads.",
    inputOutput: {
      in: "Shared support@, ops@, and sales@ email threads",
      out: "Auto-tagged tickets, verified drafts, instant policy replies",
    },
    stack: ["Gmail / Outlook", "HelpScout", "Zendesk", "Policy Evals"],
    bullets: [
      "Native Gmail, Microsoft 365, HelpScout & Zendesk sync",
      "Configurable draft-first approval or autonomous send",
      "Automatic urgency detection and SLA breach alerting",
      "Live backlog, deflection, and sentiment dashboards",
    ],
  },
  {
    Icon: Workflow,
    tag: "Ops",
    title: "End-to-End n8n Workflows",
    impact: "25+ hrs saved / week",
    body: "Deterministic orchestration connecting every tool in your stack — CRM synchronization, client onboarding, billing reconciliation, and automated executive reporting.",
    inputOutput: {
      in: "CRM stage changes, Stripe events, forms, webhooks",
      out: "Synced databases, client portals, automated weekly digests",
    },
    stack: ["Self-Hosted n8n", "PostgreSQL", "Stripe", "Notion / ClickUp"],
    bullets: [
      "Self-hosted on your VPC or managed n8n Cloud",
      "Git-versioned workflows with retry & dead-letter queues",
      "Idempotent sync logic to eliminate duplicate records",
      "100% repository, workflow JSON, and IP ownership",
    ],
  },
  {
    Icon: Database,
    tag: "Data",
    title: "Internal Knowledge Copilots",
    impact: "10× faster research & RFPs",
    body: "A private, permission-aware AI copilot layered across your CRM, data warehouse, Slack, and Google Drive. Ask complex questions and draft briefs or RFPs in minutes.",
    inputOutput: {
      in: "Natural language queries across docs, tickets & SQL",
      out: "Cited executive briefs, RFP responses, instant SQL reports",
    },
    stack: ["Hybrid RAG", "Postgres / Snowflake", "Drive / Notion", "SSO"],
    bullets: [
      "Hybrid vector + structured SQL retrieval over live systems",
      "Strict row-level and document-level access permissions",
      "Inline source citations with zero unsupported claims",
      "Zero data retention agreements & optional VPC hosting",
    ],
  },
  {
    Icon: LineChart,
    tag: "Growth",
    title: "Outbound & Lead-Gen Agents",
    impact: "3.2× pipeline ROI",
    body: "Enriches accounts, researches buying signals, and crafts hyper-relevant multi-channel outreach at scale — with deliverability guardrails and instant reply routing.",
    inputOutput: {
      in: "Target account lists, website intent, CRM dormant leads",
      out: "Enriched sequences, warm replies routed straight to reps",
    },
    stack: ["Clay", "Apollo", "Smartlead", "Salesforce / HubSpot"],
    bullets: [
      "Automated Apollo, Clay, and LinkedIn signal enrichment",
      "Per-account research briefs driving genuine personalization",
      "Automated reply classification & immediate rep handoff",
      "Built-in domain health & deliverability throttling",
    ],
  },
];

const CATEGORIES = ["All", "Voice", "Chat", "Inbox", "Ops", "Data", "Growth"];

const COMPARISON_ROWS = [
  {
    dimension: "Lead Response Speed",
    manual: "2–18 hours average delay; after-hours inquiries go cold",
    automated: "< 30 seconds 24/7 across voice, SMS, WhatsApp, and email",
  },
  {
    dimension: "Operational Scaling Cost",
    manual: "Linear headcount growth (+$5k–$7k/mo per coordinator)",
    automated: "Sub-cent execution cost; 3–5× volume with the same team",
  },
  {
    dimension: "Data Hygiene & Errors",
    manual: "8–15% manual copy-paste errors and stale CRM fields",
    automated: "Schema-validated, idempotent syncs with 99.7%+ accuracy",
  },
  {
    dimension: "Safety & Governance",
    manual: "Inconsistent ad-hoc replies and unlogged customer context",
    automated: "Automated eval suites, PII redaction, and full audit trails",
  },
  {
    dimension: "Ownership & Lock-in",
    manual: "Tribal knowledge trapped in individual inboxes & spreadsheets",
    automated: "100% documented Git repo, runbooks, and infrastructure you own",
  },
];

const PROCESS = [
  {
    week: "Week 1",
    phase: "01",
    title: "Workflow Audit & Eval Design",
    body: "We shadow your operators, map bottlenecks end-to-end, select the highest-ROI automation target, and define objective success criteria before writing a line of code.",
    deliverables: [
      "End-to-end architecture blueprint",
      "Golden test dataset & eval rubric",
      "Security, PII & API access plan",
    ],
  },
  {
    week: "Week 2",
    phase: "02",
    title: "Wired v1 Agent & Tooling",
    body: "We ship a focused, working automation wired directly into your real staging CRM, telephony, or inbox — benchmarked continuously against the eval suite.",
    deliverables: [
      "Live staging agent & n8n flows",
      "Bi-directional API/webhook connectors",
      "Automated regression test results",
    ],
  },
  {
    week: "Week 3",
    phase: "03",
    title: "Shadow Mode & Hardening",
    body: "We run the system alongside real traffic in shadow or draft-first mode, adding guardrails, human-in-the-loop escalations, retry queues, and instant rollback controls.",
    deliverables: [
      "Action firewall & policy guardrails",
      "Human-in-the-loop Slack escalations",
      "Monitoring, alerting & error fallback",
    ],
  },
  {
    week: "Week 4",
    phase: "04",
    title: "Production Cutover & Handover",
    body: "Full launch with real-time ROI telemetry, cost-per-task tracking, team training, and complete code + runbook handover so your organization owns the asset forever.",
    deliverables: [
      "Production cutover & SLA dashboard",
      "Complete Git repo & SOP runbooks",
      "Next-workflow ROI roadmap",
    ],
  },
];

const SAFETY_LAYERS = [
  {
    step: "LAYER 01",
    Icon: Lock,
    title: "Input Sanitization & PII Redaction",
    desc: "Sensitive customer identifiers, payment tokens, and prompt-injection patterns are scrubbed or tokenized before touching any model endpoint.",
  },
  {
    step: "LAYER 02",
    Icon: Sliders,
    title: "Scoped Tool Permissions (Action Firewall)",
    desc: "Agents operate with least-privilege API keys. High-risk actions (refunds, bulk deletes, contract edits) require deterministic rules or 1-click human approval.",
  },
  {
    step: "LAYER 03",
    Icon: FileCheck2,
    title: "Automated Eval Suite & Citation Checks",
    desc: "Every prompt or model update runs against 100+ historical test cases measuring accuracy, tone, latency, and citation grounding before deployment.",
  },
  {
    step: "LAYER 04",
    Icon: Eye,
    title: "Live Telemetry, Alerts & Instant Rollback",
    desc: "Real-time dashboards track latency, token spend, and escalation rates with Slack/PagerDuty alerts and versioned instant rollbacks.",
  },
];

const INTEGRATION_GROUPS = [
  {
    category: "CRM & Revenue",
    items: ["HubSpot", "Salesforce", "Pipedrive", "GoHighLevel", "ServiceTitan", "Close", "Apollo", "Clay"],
  },
  {
    category: "Comms & Support",
    items: ["Slack", "Microsoft Teams", "Twilio", "WhatsApp API", "Zendesk", "Intercom", "Gmail", "Outlook"],
  },
  {
    category: "AI & Orchestration",
    items: ["n8n", "OpenAI", "Anthropic Claude", "Google Gemini", "LangGraph", "Pinecone", "Make", "Zapier"],
  },
  {
    category: "Data, Ops & Billing",
    items: ["PostgreSQL", "Supabase", "Snowflake", "Airtable", "Notion", "Linear", "Stripe", "NetSuite"],
  },
];

const GUARANTEES = [
  {
    Icon: ShieldCheck,
    title: "Evals + Guardrails on Day One",
    body: "Every agent ships with a deterministic test suite tied to a real business KPI — containment, response time, or extraction precision. Never guesswork.",
  },
  {
    Icon: Zap,
    title: "2–4 Weeks to Production",
    body: "Fixed scope, weekly working demos in your actual environment, and measurable ROI — not a six-month discovery consulting deck.",
  },
  {
    Icon: Puzzle,
    title: "100% Code & IP Ownership",
    body: "Full handover includes your Git repository, prompt libraries, n8n workflow JSONs, dashboards, and operator runbooks. Zero vendor lock-in.",
  },
];

const FAQS = [
  {
    q: "How much does a production automation cost?",
    a: "Focused single-workflow agents start around $8k. Multi-channel deployments with custom evals, telephony, and monitoring sit in the $20–35k range. Ongoing optimization and SLA support are available as an optional monthly retainer.",
  },
  {
    q: "How do you prevent hallucinations and unsafe actions?",
    a: "Four layers: input validation & PII redaction, least-privilege tool-scope restrictions (Action Firewall), grounded RAG with citation checks, and automated output evals against a policy suite. We can also deploy inside your own VPC when compliance requires it.",
  },
  {
    q: "What happens if an upstream API changes or breaks in production?",
    a: "Every workflow ships with structured retries, dead-letter queues, real-time Slack/email failure alerts, and a documented rollback procedure. On a retainer we own regressions proactively; after handover your team has full observability and runbooks.",
  },
  {
    q: "Do you integrate with our existing CRM, ERP, and internal tools?",
    a: "Yes. If it exposes a REST/GraphQL API, webhook, email trigger, or SQL database, we integrate directly without forcing your team to migrate software. We use self-hosted n8n or TypeScript/Python microservices based on reliability requirements.",
  },
  {
    q: "Can we start with a single high-impact workflow first?",
    a: "That is our default approach. We isolate one high-drag bottleneck, ship it to production in 2–4 weeks, verify the hours saved and revenue impact, and only expand once the first system pays for itself.",
  },
];

function AutomationsPage() {
  const [selectedBlueprintId, setSelectedBlueprintId] = useState(WORKFLOW_BLUEPRINTS[0].id);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const activeBlueprint =
    WORKFLOW_BLUEPRINTS.find((b) => b.id === selectedBlueprintId) ?? WORKFLOW_BLUEPRINTS[0];

  const filteredAutomations =
    selectedCategory === "All"
      ? AUTOMATIONS
      : AUTOMATIONS.filter((a) => a.tag === selectedCategory);

  return (
    <div className="bg-white text-neutral-900 min-h-screen font-sans pt-28 sm:pt-36">
      {/* HERO SECTION */}
      <section className="container-pad mx-auto max-w-[1400px] pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-600">
            <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Production AI Systems &amp; n8n Infrastructure
          </span>
          <h1 className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.08]">
            AI Agents &amp; Workflows That Actually Ship
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Production-grade automations for sales, support, ops, and finance — engineered in weeks
            with automated evals, policy guardrails, and full telemetry built in from day one.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-black hover:scale-[1.02]"
            >
              <RollingText>Book a Strategy Call</RollingText>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-neutral-900 shadow-2xs transition hover:border-neutral-900 hover:bg-neutral-50"
            >
              <Sparkles className="size-4 text-neutral-700" />
              <RollingText>Try Live Agent Demo</RollingText>
            </Link>
          </div>
        </div>

        {/* Animated Key Metrics Strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900 tabular-nums">
              <CountUp end={2} duration={1200} />–<CountUp end={4} suffix=" wks" duration={1800} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Kickoff to Production
            </div>
            <p className="mt-2 text-xs text-neutral-600">
              Fixed scope with weekly live demos inside your own stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
              <CountUp end={68} suffix="%" duration={1800} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Avg. Task Deflection
            </div>
            <p className="mt-2 text-xs text-neutral-600">
              Repetitive calls, tickets, and CRM updates handled autonomously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
              <CountUp end={25} suffix="+ hrs" duration={1800} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Saved / Team / Week
            </div>
            <p className="mt-2 text-xs text-neutral-600">
              Reclaimed from manual intake, follow-ups, and spreadsheet copying.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
              <CountUp end={100} suffix="%" duration={2000} />
            </div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
              Code &amp; IP Ownership
            </div>
            <p className="mt-2 text-xs text-neutral-600">
              Full repo, prompts, n8n workflows, and runbooks handed over.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW BLUEPRINT VISUALIZER */}
      <section className="border-y border-neutral-200/80 bg-[#f4f3ee]/60 py-16 sm:py-20">
        <div className="container-pad mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Interactive Architecture Blueprint
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900">
              Inside a Production Automation Pipeline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Select a workflow below to inspect the exact execution steps, latency budgets,
              guardrail checks, and live telemetry trace.
            </p>
          </div>

          {/* Pipeline Selector Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {WORKFLOW_BLUEPRINTS.map((bp) => {
              const active = bp.id === activeBlueprint.id;
              return (
                <button
                  key={bp.id}
                  type="button"
                  onClick={() => setSelectedBlueprintId(bp.id)}
                  className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "bg-white text-neutral-700 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {bp.label}
                </button>
              );
            })}
          </div>

          {/* Blueprint Visualizer Canvas */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBlueprint.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-8 rounded-[32px] border border-neutral-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
            >
              {/* Top Blueprint Header + Metrics */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200/80">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                    <Activity className="size-3.5 text-emerald-600" />
                    Trigger: {activeBlueprint.trigger}
                  </div>
                  <h3 className="mt-1.5 font-sans text-xl sm:text-2xl font-bold text-neutral-900">
                    {activeBlueprint.label}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600">
                    {activeBlueprint.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
                  {activeBlueprint.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-neutral-200/80 bg-[#f4f3ee] px-4 py-3 text-center"
                    >
                      <div className="font-sans text-base sm:text-lg font-extrabold text-neutral-900">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5-Stage Connected Node Flow */}
              <div className="mt-8">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center justify-between">
                  <span>Execution Node Graph</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Deterministic + Guardrailed
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                  {activeBlueprint.steps.map((step, idx) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.3 }}
                      className="relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#f4f3ee]/70 p-4 hover:border-neutral-400 hover:bg-[#f4f3ee] transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex size-6 items-center justify-center rounded-md bg-neutral-900 font-mono text-[10px] font-bold text-white">
                            {step.id}
                          </span>
                          <span className="rounded-full bg-white border border-neutral-200 px-2 py-0.5 font-mono text-[10px] font-semibold text-neutral-600">
                            {step.latency}
                          </span>
                        </div>
                        <div className="mt-3 font-sans text-sm font-bold text-neutral-900">
                          {step.name}
                        </div>
                        <div className="text-[11px] font-mono text-neutral-500">{step.role}</div>
                        <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>

                      {idx < activeBlueprint.steps.length - 1 && (
                        <div
                          aria-hidden
                          className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 size-5 items-center justify-center rounded-full bg-white border border-neutral-300 text-neutral-500 shadow-2xs"
                        >
                          <ArrowRight className="size-3" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Execution Telemetry Console */}
              <div className="mt-8 rounded-2xl bg-neutral-950 p-5 sm:p-6 text-neutral-100 border border-neutral-800">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                    <Terminal className="size-4 text-neutral-400" />
                    <span>production-execution-trace.log</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      STATUS: 200 OK
                    </span>
                    <span>ENV: PRODUCTION</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 font-mono text-xs">
                  {activeBlueprint.trace.map((line, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-neutral-300"
                    >
                      <span className="text-neutral-500 shrink-0">[{line.time}]</span>
                      <span className="inline-block w-fit rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white shrink-0">
                        {line.tag}
                      </span>
                      <span className="text-neutral-200 leading-relaxed">{line.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SIX PRODUCTION AUTOMATION SYSTEMS (FILTERABLE & DETAILED) */}
      <section className="container-pad mx-auto max-w-[1400px] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            Core System Catalog
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900">
            Six Automations We Ship Most
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every system is tailored to your exact workflows, tools, and compliance requirements —
            complete with inputs, outputs, stack integrations, and measurable KPIs.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-neutral-900 text-white shadow-2xs"
                  : "border border-neutral-200 bg-[#f4f3ee] text-neutral-700 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              {cat === "All" ? "All Systems (6)" : cat}
            </button>
          ))}
        </div>

        {/* Detailed System Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAutomations.map((a, idx) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group flex flex-col justify-between rounded-[28px] border border-neutral-200/80 bg-[#f4f3ee] p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
            >
              <div>
                {/* Top Icon + Tag + Impact Pill */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="grid size-11 place-items-center rounded-xl bg-white border border-neutral-200 text-neutral-900 shadow-2xs">
                      <a.Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                      {a.tag}
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-100/80 px-3 py-1 font-mono text-[10px] font-bold text-emerald-800">
                    {a.impact}
                  </span>
                </div>

                <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                  {a.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">{a.body}</p>

                {/* Input -> Output Data Flow Box */}
                <div className="mt-5 rounded-2xl border border-neutral-200/80 bg-white p-4 space-y-2.5 text-xs">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Triggers &amp; Inputs
                    </span>
                    <span className="text-neutral-700 font-medium">{a.inputOutput.in}</span>
                  </div>
                  <div className="border-t border-neutral-100 pt-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Automated Outputs
                    </span>
                    <span className="text-neutral-900 font-semibold">{a.inputOutput.out}</span>
                  </div>
                </div>

                {/* Engineering Deliverables */}
                <ul className="mt-5 space-y-2 border-t border-neutral-300/60 pt-5 text-xs sm:text-sm">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-neutral-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-neutral-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Pills + Action */}
              <div className="mt-6 pt-4 border-t border-neutral-300/50">
                <div className="flex flex-wrap gap-1.5">
                  {a.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* MANUAL VS AUTONOMOUS COMPARISON */}
      <section className="border-y border-neutral-200/80 bg-[#f4f3ee]/60 py-16 sm:py-20">
        <div className="container-pad mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Operational Economics
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900">
              Manual Operations vs. AI Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              See what changes when repetitive execution moves from human copy-pasting to
              deterministic, audited automation pipelines.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-neutral-200/90 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 bg-[#f4f3ee] px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">
              <div className="md:col-span-3">Operational Dimension</div>
              <div className="hidden md:block md:col-span-4 text-red-600">
                Traditional Manual Process
              </div>
              <div className="hidden md:block md:col-span-5 text-emerald-700">
                Make Accuracy Autonomous System
              </div>
            </div>

            <div className="divide-y divide-neutral-200/70">
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.dimension}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 items-center text-sm"
                >
                  <div className="md:col-span-3 font-bold text-neutral-900">{row.dimension}</div>
                  <div className="md:col-span-4 flex items-start gap-2.5 text-neutral-600 text-xs sm:text-sm">
                    <X className="size-4 shrink-0 text-red-500 mt-0.5" />
                    <span>{row.manual}</span>
                  </div>
                  <div className="md:col-span-5 flex items-start gap-2.5 text-neutral-900 font-medium text-xs sm:text-sm">
                    <Check className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{row.automated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-WEEK DELIVERY ROADMAP */}
      <section className="container-pad mx-auto max-w-[1400px] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            Structured Engineering Sprint
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900">
            Four Weeks, From Scope to Production
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every sprint follows a battle-tested delivery schedule with clear weekly artifacts and
            sign-off gates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, idx) => (
            <motion.div
              key={p.week}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="flex flex-col justify-between rounded-[26px] border border-neutral-200/80 bg-[#f4f3ee] p-6 shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-neutral-200 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-800">
                    <Clock className="size-3" /> {p.week}
                  </span>
                  <span className="font-mono text-2xl font-bold text-neutral-300">{p.phase}</span>
                </div>

                <h3 className="mt-5 font-sans text-lg font-bold text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">{p.body}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-300/60">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                  Sprint Deliverables
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-800">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <Check className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECURITY, GUARDRAILS & RELIABILITY ARCHITECTURE */}
      <section className="container-pad mx-auto max-w-[1400px] pb-16 sm:pb-20">
        <div className="rounded-[34px] bg-neutral-950 text-white p-8 sm:p-12 lg:p-14 border border-neutral-800 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-300">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              Enterprise Reliability &amp; Safety Architecture
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
              Engineered for Zero Hallucinations &amp; Full Auditability
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every autonomous workflow runs inside a 4-layer safety envelope — so your team gets
              AI velocity with deterministic software reliability.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SAFETY_LAYERS.map((layer) => (
              <div
                key={layer.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      {layer.step}
                    </span>
                    <div className="grid size-9 place-items-center rounded-xl bg-white/10 text-white">
                      <layer.Icon className="size-4" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-sans text-base font-bold text-white">{layer.title}</h3>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Guarantees Row inside Dark Panel */}
          <div className="mt-8 pt-8 border-t border-white/10 grid gap-6 md:grid-cols-3">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="flex items-start gap-3.5">
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-neutral-950">
                  <g.Icon className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm sm:text-base font-bold text-white">{g.title}</h4>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIZED INTEGRATION ECOSYSTEM */}
      <section className="border-y border-neutral-200/80 bg-[#f4f3ee]/60 py-16 sm:py-20">
        <div className="container-pad mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Native Connectors &amp; Custom APIs
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900">
              Plays Cleanly With Your Entire Stack
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              No rip-and-replace software migrations. If your system has a REST API, webhook, SQL
              database, or email inbox, our automations plug straight in.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INTEGRATION_GROUPS.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-2xs"
              >
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 pb-3 border-b border-neutral-100">
                  {group.category}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-neutral-200/80 bg-[#f4f3ee] px-3 py-1.5 text-xs font-semibold text-neutral-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-mono text-neutral-600 shadow-2xs">
              <GitBranch className="size-3.5 text-neutral-900" />
              Plus custom GraphQL, SOAP, SFTP, and private VPC database connectors
            </span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container-pad mx-auto max-w-3xl py-16 sm:py-20">
        <div className="text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
            Technical &amp; Commercial FAQ
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900">
            Common Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] p-5 sm:p-6 transition hover:border-neutral-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-sans text-sm sm:text-base font-bold text-neutral-900">
                {f.q}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-900 transition-transform duration-200 group-open:rotate-45">
                  ＋
                </span>
              </summary>
              <p className="mt-3 pt-3 border-t border-neutral-200/80 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
