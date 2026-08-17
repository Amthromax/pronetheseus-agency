import {
  UserPlus,
  Workflow,
  BarChart3,
  MessageSquare,
  Users,
  Bot,
  PhoneCall,
  CreditCard,
  Share2,
  FileText,
  ShieldCheck,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  desc: string;
  benefits: string[];
  Icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "client-onboarding-os",
    title: "Client Onboarding OS",
    desc: "Transform 14 days of back-and-forth email onboarding into a 15-minute automated setup flow.",
    benefits: ["Instant Slack & Drive setup", "Automated contract intake", "Zero-friction client kickoff"],
    Icon: UserPlus
  },
  {
    slug: "autonomous-delivery-engine",
    title: "Autonomous Delivery Engine",
    desc: "n8n workflows connecting Slack, ClickUp, Notion, and Linear to eliminate deliverable drops.",
    benefits: ["Bi-directional tool sync", "Automated task routing", "Real-time SLA alerts"],
    Icon: Workflow
  },
  {
    slug: "automated-client-reporting",
    title: "Automated Client Reporting",
    desc: "Eliminate manual slide decks. Live client dashboards updated 24/7 directly from ad APIs & CRMs.",
    benefits: ["Zero manual report labor", "Live client performance portal", "Weekly automated AI summaries"],
    Icon: BarChart3
  },
  {
    slug: "inbound-ai-sdr-agents",
    title: "Inbound AI SDR Agents",
    desc: "Qualify inbound agency leads instantly on WhatsApp & SMS with sub-second response times.",
    benefits: ["24/7 lead qualification", "Live Google Calendar booking", "HubSpot & CRM auto-sync"],
    Icon: MessageSquare
  },
  {
    slug: "crm-data-infrastructure",
    title: "CRM Data Infrastructure",
    desc: "Turn messy CRMs into automated revenue engines with lead enrichment and smart rep routing.",
    benefits: ["Auto lead enrichment", "Intent-based rep routing", "Clean pipeline hygiene"],
    Icon: Users
  },
  {
    slug: "ai-account-management",
    title: "AI Account Manager",
    desc: "Triage client requests, auto-draft responses, and alert account directors before issues arise.",
    benefits: ["Client sentiment tracking", "Auto-drafted client replies", "Proactive issue escalation"],
    Icon: Bot
  },
  {
    slug: "voice-ai-inbound-assistant",
    title: "Voice AI Call Assistant",
    desc: "Autonomous voice agent handling after-hours agency phone calls, intake, and booking.",
    benefits: ["Instant 24/7 call answering", "Sub-second voice responses", "Direct CRM call log sync"],
    Icon: PhoneCall
  },
  {
    slug: "proposal-contract-automation",
    title: "Proposal & Contract Engine",
    desc: "Dynamic contract generation synced with PandaDoc & DocuSign for instant client sign-offs.",
    benefits: ["Instant contract generation", "Automated deposit collection", "CRM stage transition trigger"],
    Icon: FileText
  },
  {
    slug: "financial-retainer-os",
    title: "Financial & Retainer OS",
    desc: "Automated Stripe & QuickBooks sync for retainer billing, invoice reminders, and revenue ops.",
    benefits: ["Zero late payment chasing", "Automated retainer invoices", "Live agency margin tracking"],
    Icon: CreditCard
  }
];