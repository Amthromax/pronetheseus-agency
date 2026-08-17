import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/sections/SectionHeading";
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
} from "lucide-react";

export const Route = createFileRoute("/automations")({
  head: () => ({
    meta: [
      { title: "Automations — Pronetheseus" },
      {
        name: "description",
        content:
          "Production-grade AI agents and n8n automations for sales, support, ops, and marketing — shipped in weeks with evals, guardrails, and monitoring built in.",
      },
      { property: "og:title", content: "Automations — Pronetheseus" },
      {
        property: "og:description",
        content:
          "AI agents and n8n workflows that free your team from repetitive work. See what we build, how we build it, and how fast.",
      },
      { property: "og:url", content: "/automations" },
    ],
    links: [{ rel: "canonical", href: "/automations" }],
  }),
  component: AutomationsPage,
});

const AUTOMATIONS = [
  {
    Icon: PhoneCall,
    tag: "Voice",
    title: "Voice AI receptionist",
    body:
      "Answers, qualifies, and books meetings 24/7. Sub-second latency, natural handoff to humans, full transcripts pushed to your CRM.",
    bullets: ["Twilio / Vonage telephony", "Under 800ms round-trip", "Warm handoff with context"],
  },
  {
    Icon: Bot,
    tag: "Chat",
    title: "Concierge chat agent",
    body:
      "A website and in-app agent that answers real product questions, books calls, and routes edge cases to the right human on Slack.",
    bullets: ["Grounded on your docs", "Escalation with transcript", "Retention & CSAT tracking"],
  },
  {
    Icon: Mail,
    tag: "Inbox",
    title: "Inbox triage & response",
    body:
      "Classifies, drafts, and sends replies from a shared inbox. Learns your tone. Humans stay in the loop for anything ambiguous.",
    bullets: ["Gmail / Outlook / HelpScout", "Draft-first or auto-send", "SLA + backlog dashboards"],
  },
  {
    Icon: Workflow,
    tag: "Ops",
    title: "End-to-end n8n workflows",
    body:
      "Orchestrate everything between your tools — CRM sync, lead routing, billing reconciliation, onboarding, reporting.",
    bullets: ["Self-hosted or n8n cloud", "Versioned, tested, monitored", "Own the IP"],
  },
  {
    Icon: Database,
    tag: "Data",
    title: "Internal copilots",
    body:
      "A private copilot on top of your CRM, warehouse, and docs. Ask questions, generate briefs, ship RFPs in hours instead of days.",
    bullets: ["RAG over your systems", "Row-level permissions", "Cited answers, no hallucination"],
  },
  {
    Icon: LineChart,
    tag: "Growth",
    title: "Outbound & lead-gen agents",
    body:
      "Enrich, segment, and personalize outbound at scale — with real deliverability guardrails and reply-detection handoff.",
    bullets: ["Apollo / Clay integrations", "Per-account personalization", "Reply routing to reps"],
  },
];

const PROCESS = [
  {
    week: "Week 1",
    title: "Scope & eval design",
    body:
      "Map the workflow end-to-end, pick the highest-leverage step, and define what 'good' looks like as a testable metric.",
  },
  {
    week: "Week 2",
    title: "First working agent",
    body: "Ship a narrow v1 wired to real tools and data. Run it against the eval suite before anyone touches production.",
  },
  {
    week: "Week 3",
    title: "Harden & deploy",
    body: "Add guardrails, human-in-the-loop, monitoring, and rollback. Roll out to a small internal cohort first.",
  },
  {
    week: "Week 4",
    title: "Measure & iterate",
    body: "Instrument outcomes, calculate real cost-per-task, and plan the next workflow with actual evidence.",
  },
];

const INTEGRATIONS = [
  "HubSpot",
  "Salesforce",
  "Slack",
  "Notion",
  "Airtable",
  "Zendesk",
  "Intercom",
  "Gmail",
  "Outlook",
  "Stripe",
  "Twilio",
  "OpenAI",
  "Anthropic",
  "Google",
  "Zapier",
  "n8n",
];

const GUARANTEES = [
  { Icon: ShieldCheck, title: "Evals + guardrails on day one", body: "Every agent ships with an eval suite tied to a real business metric. No vibes." },
  { Icon: Zap, title: "2–4 weeks to production", body: "Fixed scope, weekly demos, measurable outcome — not a six-month consulting engagement." },
  { Icon: Puzzle, title: "You own the code", body: "Handover includes the repo, prompts, workflows, and runbook. Never a black box." },
];

const FAQS = [
  {
    q: "How much does an automation cost?",
    a: "Focused single-workflow agents start around $8k. Multi-channel deployments with evals and monitoring sit in the $20–35k range. Ongoing support is a separate monthly retainer if you want it.",
  },
  {
    q: "How do you handle hallucinations and safety?",
    a: "Three layers: input validation, tool-scope restrictions, and output evals against a policy model. PII is redacted before it hits any third-party model, and we can deploy inside your VPC if compliance requires it.",
  },
  {
    q: "What if it breaks in production?",
    a: "Every agent has monitoring, alerting, and a documented rollback. During the retainer we own regressions; after handover you have the runbook and dashboards to own it yourself.",
  },
  {
    q: "Do you work with our existing stack?",
    a: "Yes. If it has an API, webhook, or a database, we can integrate. We default to n8n or code depending on reliability requirements.",
  },
  {
    q: "Can we start small?",
    a: "That's the default. We pick one workflow, ship it in weeks, and only expand once it's measurably paying for itself.",
  },
];

function AutomationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40">
        <div className="container-pad mx-auto max-w-[1400px] pb-16">
          <SectionHeading
            title="AI agents and workflows that actually ship"
            description="Production-grade automations for sales, support, ops, and marketing — deployed in weeks, with evals, guardrails, and monitoring built in from day one."
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              Book a strategy call <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium transition hover:border-brand/40"
            >
              <Sparkles className="size-4" /> Try the live demo
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "2–4 wks", v: "Kickoff to production" },
              { k: "60%", v: "Avg. task deflection" },
              { k: "25 hrs", v: "Saved per team per week" },
              { k: "100%", v: "Code & IP handed over" },
            ].map((s) => (
              <div key={s.v} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="font-display text-4xl">{s.k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations grid */}
      <section className="container-pad mx-auto max-w-[1400px] py-16">
        <SectionHeading title="Six automations we ship most" />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {AUTOMATIONS.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand/40"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#ff7a00]/20 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
                  <a.Icon className="size-4" />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{a.tag}</div>
              </div>
              <h3 className="mt-4 font-display text-2xl">{a.title}</h3>
              <p className="mt-3 text-sm text-foreground/70">{a.body}</p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-foreground/80">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-pad mx-auto max-w-[1400px] py-16">
        <SectionHeading title="Four weeks, from scope to production" />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div key={p.week} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand">
                <Clock className="size-3.5" /> {p.week}
              </div>
              <h3 className="mt-4 font-display text-xl">{p.title}</h3>
              <p className="mt-3 text-sm text-foreground/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="container-pad mx-auto max-w-[1400px] py-16">
        <SectionHeading title="Every engagement, guaranteed" />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#ff7a00]/20 to-[#c2410c]/10 text-brand ring-1 ring-inset ring-white/10">
                <g.Icon className="size-4" />
              </div>
              <h3 className="mt-4 font-display text-xl">{g.title}</h3>
              <p className="mt-3 text-sm text-foreground/70">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="container-pad mx-auto max-w-[1400px] py-16">
        <SectionHeading title="Plays well with your stack" description="If it has an API, we can integrate. A few we work with weekly:" />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {INTEGRATIONS.map((i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/80"
            >
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-pad mx-auto max-w-3xl py-16">
        <SectionHeading title="Common questions" />
        <div className="mt-10 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-brand/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium">
                {f.q}
                <span className="text-brand transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}