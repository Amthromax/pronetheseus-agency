import { BookOpen, Download, PlayCircle, type LucideIcon } from "lucide-react";

export type ResourceSlug = "ai-agent-playbook" | "n8n-starter-workflows" | "voice-ai-setup-guide";

export type Resource = {
  slug: ResourceSlug;
  Icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  cta: string;
  sections: { heading: string; body: string }[];
};

export const RESOURCES: Resource[] = [
  {
    slug: "ai-agent-playbook",
    Icon: BookOpen,
    tag: "Ebook",
    title: "The 30-day AI agent playbook",
    description:
      "A four-week roadmap for shipping your first production AI agent — from scoping the workflow to measuring ROI.",
    cta: "Download the ebook",
    sections: [
      {
        heading: "Week 1 — Scope the workflow",
        body: "Map the process end-to-end, identify the highest-leverage step, and define what 'good' looks like before writing a single prompt.",
      },
      {
        heading: "Week 2 — Build the first agent",
        body: "Set up tool access, retrieval, and evals. Ship a narrow v1 that solves one job well instead of a generalist that fails everywhere.",
      },
      {
        heading: "Week 3 — Harden and deploy",
        body: "Add guardrails, human-in-the-loop, and monitoring. Roll out to a small internal cohort before opening the door wider.",
      },
      {
        heading: "Week 4 — Measure and iterate",
        body: "Instrument outcomes, calculate real cost per task, and decide what to automate next based on evidence, not vibes.",
      },
    ],
  },
  {
    slug: "n8n-starter-workflows",
    Icon: Download,
    tag: "Templates",
    title: "n8n starter workflows",
    description:
      "Ten production-tested n8n workflows you can import in minutes — CRM sync, lead routing, inbox triage, and more.",
    cta: "Download the templates",
    sections: [
      {
        heading: "What's inside",
        body: "Ten JSON workflows covering CRM sync, lead enrichment, inbox triage, meeting prep, and internal notifications.",
      },
      {
        heading: "How to use them",
        body: "Import the JSON into your self-hosted or cloud n8n instance, connect your credentials, and swap the sample endpoints for your own.",
      },
      {
        heading: "Requirements",
        body: "n8n 1.0+ with access to the HTTP Request, OpenAI, and Airtable / HubSpot nodes depending on the workflow.",
      },
    ],
  },
  {
    slug: "voice-ai-setup-guide",
    Icon: PlayCircle,
    tag: "Video",
    title: "Voice AI setup guide",
    description:
      "A 22-minute walkthrough for standing up a production voice agent — telephony, latency, evals, and handoff.",
    cta: "Watch the guide",
    sections: [
      {
        heading: "Telephony stack",
        body: "Picking a provider, provisioning a number, and wiring the media stream to your agent with sub-second round trips.",
      },
      {
        heading: "Latency budget",
        body: "Where the milliseconds go — STT, LLM, TTS, and network — and how to claw them back without hurting quality.",
      },
      {
        heading: "Human handoff",
        body: "Detecting when the agent should escalate, transferring context cleanly, and keeping the caller in the loop.",
      },
    ],
  },
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}