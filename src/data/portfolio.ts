import northwindShowcase from "@/assets/northwind-showcase.png.asset.json";
import heliosShowcase from "@/assets/helios-showcase.png.asset.json";
import quantaShowcase from "@/assets/quanta-showcase.png.asset.json";
import atlasShowcase from "@/assets/atlas-showcase.png.asset.json";
import meridianShowcase from "@/assets/meridian-showcase.png.asset.json";
import apexShowcase from "@/assets/apex-showcase.png.asset.json";
import zenithShowcase from "@/assets/zenith-showcase.png.asset.json";
import prismShowcase from "@/assets/prism-showcase.png.asset.json";
import plasmaoneShowcase from "@/assets/plasmaone-showcase.png.asset.json";
import yoodeShowcase from "@/assets/yoode-showcase.png.asset.json";
import zentraShowcase from "@/assets/zentra-showcase.png.asset.json";

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
  // 1. WEBSITES
  {
    slug: "apex-web-platform",
    title: "Apex Next-Gen Web Platform",
    tag: "High-Performance Website",
    category: "Websites",
    gradient: "from-orange-500 to-amber-900",
    client: "Apex Labs",
    year: "2025",
    summary: "A high-converting marketing website and product platform built with motion design and ultra-fast edge rendering.",
    challenge: "Their legacy marketing site converted at under 0.7% with slow mobile page loads that harmed lead acquisition.",
    solution: "We engineered a motion-first, high-contrast web app with edge rendering, instant interactive demos, and automated lead capture.",
    outcomes: [
      { label: "Lighthouse Score", value: "100" },
      { label: "Conversion Lift", value: "4.3%" },
      { label: "Pipeline Generated", value: "+$3.1M" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    showcase: apexShowcase.url,
  },
  {
    slug: "plasmaone-digital-experience",
    title: "PlasmaOne Digital Experience",
    tag: "Web App & Brand Site",
    category: "Websites",
    gradient: "from-rose-600 to-orange-950",
    client: "PlasmaOne Technologies",
    year: "2025",
    summary: "An immersive web application featuring live product interactions, dynamic customer portal, and glassmorphic UI.",
    challenge: "The company needed a website that conveyed enterprise authority while maintaining a modern, interactive startup feel.",
    solution: "Designed and developed an Obsidian-style web app with micro-animations, real-time product previews, and integrated booking.",
    outcomes: [
      { label: "Engagement Time", value: "+210%" },
      { label: "Bounce Rate", value: "-45%" },
      { label: "Organic Signups", value: "+180%" },
    ],
    stack: ["TanStack Router", "React", "Node.js", "Tailwind CSS"],
    showcase: plasmaoneShowcase.url,
  },
  {
    slug: "atlas-ops-dashboard",
    title: "Atlas Ops Executive Web App",
    tag: "Real-time Analytics Web App",
    category: "Websites",
    gradient: "from-pink-500 to-rose-900",
    client: "Atlas Logistics",
    year: "2024",
    summary: "A real-time operations dashboard giving executives one glass pane across fleet, warehouse, and finance data.",
    challenge: "Leadership was making weekly decisions off spreadsheets that were already 48 hours stale.",
    solution: "We shipped a streaming dashboard with role-based views, custom KPI builders, and Slack digests for exceptions.",
    outcomes: [
      { label: "Reporting Latency", value: "48h → 30s" },
      { label: "Decisions / Week", value: "3×" },
      { label: "Executive Adoption", value: "94%" },
    ],
    stack: ["Next.js", "ClickHouse", "Kafka", "Recharts"],
    showcase: atlasShowcase.url,
  },

  // 2. AI AGENTS
  {
    slug: "ava-concierge-agent",
    title: "Yoode Autonomous AI Agent",
    tag: "Voice & Conversational AI",
    category: "AI Agents",
    gradient: "from-orange-600 to-rose-950",
    client: "Yoode AI",
    year: "2025",
    summary: "An autonomous AI concierge agent that handles incoming customer inquiries, qualifies leads, and schedules discovery calls 24/7.",
    challenge: "High inbound conversation volume overwhelmed human reps, causing multi-hour delay in response times.",
    solution: "Deploved an AI agent grounded on internal knowledge bases with sub-second voice latency and automated CRM calendar booking.",
    outcomes: [
      { label: "Response Time", value: "Sub-second" },
      { label: "Leads Qualified / Mo", value: "1,450+" },
      { label: "CSAT Score", value: "4.9 / 5" },
    ],
    stack: ["OpenAI GPT-4o", "Twilio Voice", "LangChain", "n8n"],
    showcase: yoodeShowcase.url,
  },
  {
    slug: "helios-intake-agent",
    title: "Helios Intake Voice Agent",
    tag: "Voice AI + EMR Sync",
    category: "AI Agents",
    gradient: "from-orange-500 to-orange-900",
    client: "Helios Health",
    year: "2025",
    summary: "A HIPAA-aligned voice intake agent that gathers patient details and writes structured data straight into the EMR.",
    challenge: "Front-desk staff averaged 14 minutes per intake call, creating a backlog that pushed patients to competitors.",
    solution: "We built a natural-sounding voice agent with live transfer, PII redaction, and a bi-directional EMR sync layer.",
    outcomes: [
      { label: "Hours Saved / Mo", value: "1,200" },
      { label: "ROI", value: "210%" },
      { label: "Faster Intake", value: "68%" },
    ],
    stack: ["OpenAI Realtime", "Twilio", "FHIR", "Node.js"],
    showcase: heliosShowcase.url,
  },
  {
    slug: "prism-whatsapp-agent",
    title: "Prism Sales AI Agent",
    tag: "Multi-channel Sales AI",
    category: "AI Agents",
    gradient: "from-orange-500 to-pink-800",
    client: "Prism Retail",
    year: "2024",
    summary: "A conversational sales agent on WhatsApp that qualifies leads, books meetings, and closes low-touch deals.",
    challenge: "WhatsApp was their #1 inbound channel but responses often took hours, killing conversion.",
    solution: "We deployed a multilingual sales agent with CRM sync, live handoff, and a payments-ready checkout flow.",
    outcomes: [
      { label: "First-Response Time", value: "3h → 6s" },
      { label: "Booked Meetings", value: "+184%" },
      { label: "In-Chat Closure Rate", value: "27%" },
    ],
    stack: ["WhatsApp Cloud API", "OpenAI", "n8n", "HubSpot"],
    showcase: prismShowcase.url,
  },

  // 3. REAL ESTATE
  {
    slug: "northwind-realty-portal",
    title: "Northwind Real Estate AI Concierge",
    tag: "Real Estate + Voice AI",
    category: "Real Estate",
    gradient: "from-rose-500 to-orange-900",
    client: "Northwind Realty",
    year: "2025",
    summary: "A unified real estate portal with a voice AI concierge that qualifies property buyers and books home tours 24/7.",
    challenge: "Realtors spent 22 hours a week manually answering initial property queries and coordinating agent calendars.",
    solution: "Shipped a React real estate portal backed by an AI concierge, MLS data sync, and instant tour booking via SMS & Google Calendar.",
    outcomes: [
      { label: "Hours Saved / Mo", value: "880" },
      { label: "ROI", value: "312%" },
      { label: "More Property Tours", value: "47%" },
    ],
    stack: ["React", "Node.js", "Twilio Voice", "OpenAI", "Postgres"],
    showcase: northwindShowcase.url,
  },
  {
    slug: "zentra-proptech-engine",
    title: "Zentra Real Estate Automation",
    tag: "PropTech & MLS Engine",
    category: "Real Estate",
    gradient: "from-fuchsia-600 to-orange-900",
    client: "Zentra Property Group",
    year: "2025",
    summary: "An automated real estate property management engine connecting MLS listings, tenant inquiries, and lease workflows.",
    challenge: "Managing property portfolios across 4 cities resulted in lost leads, delayed tenant approvals, and manual data entry.",
    solution: "Engineered an n8n automation web platform with automated buyer scoring, lease generation, and instant tenant support.",
    outcomes: [
      { label: "Lead Response Time", value: "< 10 seconds" },
      { label: "Lease Processing", value: "4 days → 2 hours" },
      { label: "Occupancy Rate", value: "98.4%" },
    ],
    stack: ["React", "n8n", "PostgreSQL", "DocuSign API", "OpenAI"],
    showcase: zentraShowcase.url,
  },
  {
    slug: "zenith-real-estate-vault",
    title: "Zenith Real Estate LP Vault",
    tag: "Commercial Real Estate",
    category: "Real Estate",
    gradient: "from-amber-600 to-black",
    client: "Zenith Real Estate Capital",
    year: "2025",
    summary: "A commercial real estate investor portal with automated deal rooms, capital call tracking, and AI document search.",
    challenge: "Commercial real estate LPs needed fast access to deal metrics, property valuation reports, and distribution statements.",
    solution: "We built a secure investor portal with AI-powered document RAG, automated e-signatures, and real-time LP analytics.",
    outcomes: [
      { label: "LP Support Tickets", value: "-71%" },
      { label: "Doc Turnaround", value: "5d → 1d" },
      { label: "Capital Deployed", value: "$45M+" },
    ],
    stack: ["React", "Supabase", "Auth0", "Stripe", "Postgres"],
    showcase: zenithShowcase.url,
  },

  // 4. AUTOMATION & SAAS
  {
    slug: "quanta-crm-sync",
    title: "Quanta CRM Mesh Automation",
    tag: "n8n + Enterprise CRM",
    category: "Automation",
    gradient: "from-orange-700 to-black",
    client: "Quanta Industries",
    year: "2024",
    summary: "A production n8n mesh that keeps Salesforce, HubSpot, and their data warehouse perfectly in sync.",
    challenge: "Three CRMs, four regions, and constant duplicate leads eating sales time and skewing forecasts.",
    solution: "We built a self-hosted n8n cluster with idempotent workflows, versioned mappings, and full observability.",
    outcomes: [
      { label: "Duplicate Rate", value: "-92%" },
      { label: "Sync Errors", value: "-98%" },
      { label: "Manual Hours Saved", value: "-640/mo" },
    ],
    stack: ["n8n", "Salesforce", "HubSpot", "Snowflake"],
    showcase: quantaShowcase.url,
  },
  {
    slug: "meridian-support-ai",
    title: "Meridian Support Automation",
    tag: "Chat + Ticket Routing",
    category: "Automation",
    gradient: "from-rose-600 to-purple-900",
    client: "Meridian SaaS",
    year: "2024",
    summary: "An AI-first support layer that deflects tier-1 tickets and routes the rest to the right human, fast.",
    challenge: "Support was drowning in tickets and CSAT had slipped below 80 for three straight quarters.",
    solution: "We combined a knowledge-base RAG agent, sentiment-aware routing, and Slack escalations into their existing Zendesk pipeline.",
    outcomes: [
      { label: "Hours Saved / Mo", value: "2,400" },
      { label: "ROI", value: "415%" },
      { label: "CSAT Lift", value: "+22 pt" },
    ],
    stack: ["LangChain", "Pinecone", "Zendesk API", "n8n"],
    showcase: meridianShowcase.url,
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((i) => i.slug === slug);
}