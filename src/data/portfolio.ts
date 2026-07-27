import northwindShowcase from "@/assets/northwind-showcase.png.asset.json";
import heliosShowcase from "@/assets/helios-showcase.png.asset.json";
import quantaShowcase from "@/assets/quanta-showcase.png.asset.json";
import atlasShowcase from "@/assets/atlas-showcase.png.asset.json";
import meridianShowcase from "@/assets/meridian-showcase.png.asset.json";
import apexShowcase from "@/assets/apex-showcase.png.asset.json";
import zenithShowcase from "@/assets/zenith-showcase.png.asset.json";
import prismShowcase from "@/assets/prism-showcase.png.asset.json";

export type PortfolioItem = {
  slug: string;
  title: string;
  tag: string;
  category: string;
  gradient: string;
  client: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: { label: string; value: string }[];
  stack: string[];
  showcase?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "northwind-realty-portal",
    title: "Northwind Realty Portal",
    tag: "SaaS + Voice AI",
    category: "SaaS",
    gradient: "from-rose-500 to-orange-900",
    client: "Northwind Realty",
    year: "2025",
    summary: "A unified agent portal with a voice AI concierge that qualifies leads and books property tours 24/7.",
    challenge: "Sales agents were spending 22 hours a week manually qualifying inbound leads and juggling three disconnected tools.",
    solution: "We shipped a single React portal backed by a voice AI concierge, CRM sync, and automated tour scheduling with SMS confirmations.",
    outcomes: [
      { label: "Hours saved / month", value: "880" },
      { label: "ROI", value: "312%" },
      { label: "More qualified calls", value: "47%" },
    ],
    stack: ["React", "Node.js", "Twilio Voice", "OpenAI", "Postgres"],
    showcase: northwindShowcase.url,
  },
  {
    slug: "helios-intake-agent",
    title: "Helios Intake Agent",
    tag: "Voice + EMR",
    category: "AI",
    gradient: "from-orange-500 to-orange-900",
    client: "Helios Levels",
    year: "2025",
    summary: "A HIPAA-aligned voice intake agent that gathers patient details and writes structured data straight into the EMR.",
    challenge: "Front-desk staff averaged 14 minutes per intake call, creating a backlog that pushed patients to competitors.",
    solution: "We built a natural-sounding voice agent with live transfer, PII redaction, and a bi-directional EMR sync layer.",
    outcomes: [
      { label: "Hours saved / month", value: "1,200" },
      { label: "ROI", value: "210%" },
      { label: "Faster intake", value: "68%" },
    ],
    stack: ["OpenAI Realtime", "Twilio", "FHIR", "Node.js"],
    showcase: heliosShowcase.url,
  },
  {
    slug: "meridian-support-ai",
    title: "Meridian Support AI",
    tag: "Chat + Ticket routing",
    category: "Automation",
    gradient: "from-rose-600 to-purple-900",
    client: "Meridian SaaS",
    year: "2024",
    summary: "An AI-first support layer that deflects tier-1 tickets and routes the rest to the right human, fast.",
    challenge: "Support was drowning in tickets and CSAT had slipped below 80 for three straight quarters.",
    solution: "We combined a knowledge-base RAG agent, sentiment-aware routing, and Slack escalations into their existing Zendesk pipeline.",
    outcomes: [
      { label: "Hours saved / month", value: "2,400" },
      { label: "ROI", value: "415%" },
      { label: "CSAT lift", value: "22 pt" },
    ],
    stack: ["LangChain", "Pinecone", "Zendesk API", "n8n"],
    showcase: meridianShowcase.url,
  },
  {
    slug: "atlas-ops-dashboard",
    title: "Atlas Ops Dashboard Trading",
    tag: "Real-time analytics",
    category: "Web Apps",
    gradient: "from-pink-500 to-rose-900",
    client: "Atlas Logistics",
    year: "2024",
    summary: "A real-time operations dashboard giving executives one glass pane across fleet, warehouse, and finance data.",
    challenge: "Leadership was making weekly decisions off spreadsheets that were already 48 hours stale.",
    solution: "We shipped a streaming dashboard with role-based views, custom KPI builders, and Slack digests for exceptions.",
    outcomes: [
      { label: "Reporting latency", value: "48h → 30s" },
      { label: "Decisions / week", value: "3×" },
      { label: "Adoption", value: "94%" },
    ],
    stack: ["Next.js", "ClickHouse", "Kafka", "Recharts"],
    showcase: atlasShowcase.url,
  },
  {
    slug: "quanta-crm-sync",
    title: "Quanta CRM Sync",
    tag: "n8n + Salesforce",
    category: "Automation",
    gradient: "from-orange-700 to-black",
    client: "Quanta Industries",
    year: "2024",
    summary: "A production n8n mesh that keeps Salesforce, HubSpot, and their data warehouse perfectly in sync.",
    challenge: "Three CRMs, four regions, and constant duplicate leads eating sales time and skewing forecasts.",
    solution: "We built a self-hosted n8n cluster with idempotent workflows, versioned mappings, and full observability.",
    outcomes: [
      { label: "Duplicate rate", value: "-92%" },
      { label: "Sync errors", value: "-98%" },
      { label: "Manual hours", value: "-640/mo" },
    ],
    stack: ["n8n", "Salesforce", "HubSpot", "Snowflake"],
    showcase: quantaShowcase.url,
  },
  {
    slug: "apex-landing",
    title: "Apex Landing",
    tag: "Marketing site",
    category: "Landing Pages",
    gradient: "from-orange-500 to-orange-900",
    client: "Apex Labs",
    year: "2025",
    summary: "A high-performance marketing site that turned a product launch into their best pipeline quarter yet.",
    challenge: "Their previous site converted at 0.7% and took 4.8 seconds to first paint on mobile.",
    solution: "We rebuilt the site on a modern stack with edge rendering, motion-first hero, and a fully instrumented funnel.",
    outcomes: [
      { label: "Lighthouse", value: "100" },
      { label: "Conversion", value: "4.3%" },
      { label: "Pipeline / qtr", value: "+$3.1M" },
    ],
    stack: ["TanStack Start", "Tailwind", "Motion", "Vercel"],
    showcase: apexShowcase.url,
  },
  {
    slug: "zenith-investor-portal",
    title: "Zenith Investor Portal",
    tag: "SaaS + Auth",
    category: "SaaS",
    gradient: "from-fuchsia-500 to-orange-900",
    client: "Zenith Capital",
    year: "2025",
    summary: "A secure investor portal with document rooms, capital call flows, and SSO across their LP network.",
    challenge: "LPs were getting sensitive documents over email and asking for updates the team already published.",
    solution: "We shipped a role-based portal with audit logs, SSO, e-signature, and an AI Q&A over their fund documents.",
    outcomes: [
      { label: "LP support tickets", value: "-71%" },
      { label: "Doc turnaround", value: "5d → 1d" },
      { label: "SOC 2", value: "Ready" },
    ],
    stack: ["React", "Supabase", "Auth0", "Stripe", "Postgres"],
    showcase: zenithShowcase.url,
  },
  {
    slug: "prism-whatsapp-agent",
    title: "Prism WhatsApp Agent",
    tag: "Sales AI",
    category: "AI",
    gradient: "from-orange-500 to-pink-800",
    client: "Prism Retail",
    year: "2024",
    summary: "A conversational sales agent on WhatsApp that qualifies leads, books meetings, and closes low-touch deals.",
    challenge: "WhatsApp was their #1 inbound channel but responses often took hours, killing conversion.",
    solution: "We deployed a multilingual sales agent with CRM sync, live handoff, and a payments-ready checkout flow.",
    outcomes: [
      { label: "First-response time", value: "3h → 6s" },
      { label: "Booked meetings", value: "+184%" },
      { label: "Deals closed in-chat", value: "27%" },
    ],
    stack: ["WhatsApp Cloud API", "OpenAI", "n8n", "HubSpot"],
    showcase: prismShowcase.url,
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((i) => i.slug === slug);
}