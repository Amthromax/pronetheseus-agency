import {
  Bot,
  Workflow,
  Users,
  MessageSquare,
  Phone,
  TrendingUp,
  Sparkles,
  Headphones,
  Globe,
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
  { slug: "ai-agents", title: "AI Agents", desc: "Autonomous agents that reason, decide, and take action across your stack — 24/7.", benefits: ["Autonomous workflows", "Tool use & memory", "Human-in-the-loop"], Icon: Bot },
  { slug: "n8n-automation", title: "n8n Automation", desc: "Custom n8n workflows connecting every tool you use — battle-tested at scale.", benefits: ["500+ integrations", "Self-hosted or cloud", "Version-controlled"], Icon: Workflow },
  { slug: "crm-automation", title: "CRM Automation", desc: "Turn your CRM into an intelligent revenue engine with auto enrichment & routing.", benefits: ["Auto-enrichment", "Smart routing", "Pipeline hygiene"], Icon: Users },
  { slug: "whatsapp-ai", title: "WhatsApp AI Agents", desc: "Conversational AI on WhatsApp that qualifies leads, books meetings, and closes deals.", benefits: ["24/7 availability", "Multi-language", "CRM sync"], Icon: MessageSquare },
  { slug: "voice-ai", title: "Voice AI Agents", desc: "Human-sounding voice agents handling inbound & outbound with sub-second latency.", benefits: ["Natural voice", "Live transfer", "Call summaries"], Icon: Phone },
  { slug: "sales-automation", title: "Sales Automation", desc: "End-to-end automation for prospecting, outreach, and pipeline management.", benefits: ["Multi-channel", "AI personalization", "Analytics"], Icon: TrendingUp },
  { slug: "lead-generation", title: "Lead Generation", desc: "AI systems that find, enrich, and qualify leads on autopilot.", benefits: ["Enriched lists", "Intent signals", "Auto-outreach"], Icon: Sparkles },
  { slug: "customer-support-ai", title: "Customer Support AI", desc: "Deflect 60%+ of tickets while raising CSAT with AI-first support.", benefits: ["Ticket deflection", "KB sync", "Escalation logic"], Icon: Headphones },
  { slug: "website-development", title: "Website Development", desc: "Blazing-fast, conversion-optimized marketing sites built on modern stacks.", benefits: ["Perfect Lighthouse", "CMS integration", "SEO-ready"], Icon: Globe },
];