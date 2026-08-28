import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";
import { motion } from "motion/react";

type IndustryCategory =
  | "AUTONOMOUS AI AGENTS"
  | "ENTERPRISE INTEGRATIONS"
  | "CUSTOM AI ARCHITECTURE"
  | "DOMAIN AI MODELS"
  | "GLOBAL AI PIPELINES"
  | "AI GOVERNANCE & SECURITY";

interface CardData {
  id: IndustryCategory;
  title: string;
  subtitle: string;
  trustedLabel: string;
  logos: string[];
  sketchImage: string;
}

const CARDS: CardData[] = [
  {
    id: "AUTONOMOUS AI AGENTS",
    title: "Autonomous AI Agent Networks",
    subtitle: "Orchestrate multi-agent autonomous workflows on n8n & Python that execute lead qualification, research, outreach, and client onboarding 24/7.",
    trustedLabel: "DEPLOYED AGENT STACK:",
    logos: ["n8n Workflows", "LangChain", "OpenAI Swarm", "Claude 3.5 Sonnet", "Supabase DB"],
    sketchImage: "/sketch-tower.png",
  },
  {
    id: "ENTERPRISE INTEGRATIONS",
    title: "Enterprise API & Workflow Bridges",
    subtitle: "Build resilient high-throughput data pipelines connecting CRMs, ERPs, webhooks, and custom LLM agents with bank-grade encryption.",
    trustedLabel: "INTEGRATED PLATFORMS:",
    logos: ["Salesforce API", "HubSpot CRM", "Stripe Connect", "Zendesk AI", "PostgreSQL"],
    sketchImage: "/sketch-bridge.png",
  },
  {
    id: "CUSTOM AI ARCHITECTURE",
    title: "Custom AI System Architectures",
    subtitle: "Architect production-ready RAG pipelines, fine-tuned domain models, and scalable vector search systems engineered for high-growth B2B agencies.",
    trustedLabel: "ENGINEERING INFRASTRUCTURE:",
    logos: ["Pinecone VectorDB", "Qdrant", "Docker / K8s", "AWS Bedrock", "FastAPI"],
    sketchImage: "/sketch-pagoda.png",
  },
  {
    id: "DOMAIN AI MODELS",
    title: "Domain-Specific LLM Models",
    subtitle: "Fine-tune domain-specific language models for legal, financial, and technical document extraction with high precision.",
    trustedLabel: "MODEL ARCHITECTURE STACK:",
    logos: ["Llama 3.3 70B", "Mistral NeMo", "Unsloth AI", "vLLM", "HF TGI"],
    sketchImage: "/sketch-cathedral.png",
  },
  {
    id: "GLOBAL AI PIPELINES",
    title: "Global Multi-Region AI Pipelines",
    subtitle: "Deploy edge-computed AI automation pipelines with sub-100ms response latencies across North America, Europe, and Asia.",
    trustedLabel: "CLOUD EDGE INFRASTRUCTURE:",
    logos: ["Cloudflare Workers", "AWS Lambda@Edge", "Vercel AI SDK", "Redis Enterprise", "Fastly"],
    sketchImage: "/sketch-eiffel.png",
  },
  {
    id: "AI GOVERNANCE & SECURITY",
    title: "Enterprise AI Governance & Security",
    subtitle: "Guarantee SOC2 & GDPR compliance with automated PII masking, RBAC access controls, and real-time audit trail logs.",
    trustedLabel: "SECURITY & AUDIT PROTOCOLS:",
    logos: ["SOC2 Type II", "GDPR Guard", "Vault Encryption", "Datadog APM", "OpenTelemetry"],
    sketchImage: "/sketch-building.png",
  },
];

const TABS: IndustryCategory[] = [
  "AUTONOMOUS AI AGENTS",
  "ENTERPRISE INTEGRATIONS",
  "CUSTOM AI ARCHITECTURE",
  "DOMAIN AI MODELS",
  "GLOBAL AI PIPELINES",
  "AI GOVERNANCE & SECURITY",
];

export function Process() {
  const [activeTab, setActiveTab] = useState<IndustryCategory>("AUTONOMOUS AI AGENTS");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: IndustryCategory) => {
    setActiveTab(tab);
    if (scrollRef.current) {
      const cardElem = scrollRef.current.querySelector(`[data-card-id="${tab}"]`);
      if (cardElem) {
        cardElem.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }
  };

  return (
    <section id="global-enterprises" className="relative bg-black py-16 text-white md:py-24 overflow-hidden">
      <div className="w-full pl-6 sm:pl-10 md:pl-16 lg:pl-20 pr-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr]">
          {/* Left Column */}
          <div className="flex flex-col justify-between pr-4 sm:pr-8 lg:pr-4 py-2">
            <div>
              <ScrollReveal variant="heading">
                <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[48px] leading-[1.08]">
                  <SplitText text="Engineered for high-growth B2B agencies & AI automation" />
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="text" delay={0.2} className="mt-4">
                <p className="text-base font-normal text-neutral-400 md:text-lg">
                  Production-grade n8n agentic infrastructure and enterprise API automation built for scale.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="button" delay={0.3} className="mt-12 lg:mt-20">
              <p className="text-sm font-normal text-neutral-400 mb-4">
                See how leading organizations scale 3x faster with custom automation.
              </p>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-3 shadow-xs inline-block">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black shadow-sm transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]"
                  >
                    REQUEST A DEMO <span className="inline-block size-1.5 rounded-full bg-black ml-0.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-800 hover:scale-[1.02]"
                  >
                    LET'S TALK
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="flex flex-col min-w-0 w-full pr-0">
            {/* Filter Tabs Bar */}
            <ScrollReveal variant="card" delay={0.1} className="mb-6 pr-6">
              <div className="flex flex-wrap items-center justify-start gap-2">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => handleTabClick(tab)}
                      className={`relative rounded-full px-4 py-2 text-[11px] font-semibold tracking-wider transition-all duration-300 uppercase cursor-pointer ${
                        isActive
                          ? "bg-white text-black shadow-md scale-105"
                          : "border border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Horizontal Cards Showcase */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory w-full pr-6 sm:pr-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {CARDS.map((card, idx) => {
                const isSelected = activeTab === card.id;
                return (
                  <ScrollReveal key={card.id} variant="card" staggerIndex={idx} staggerStep={0.1}>
                    <motion.div
                      data-card-id={card.id}
                      onClick={() => setActiveTab(card.id)}
                      whileHover={{ scale: 1.015, y: -4 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`group relative flex min-h-[500px] w-[320px] xs:w-[420px] sm:w-[540px] md:w-[580px] lg:w-[640px] shrink-0 snap-start flex-col justify-between rounded-3xl p-8 sm:p-9 bg-sandel-card border border-sandel-border shadow-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                        isSelected ? "ring-2 ring-black" : "opacity-95 hover:opacity-100"
                      }`}
                    >
                      {/* Full-size Sharp & Unblurred Architectural Sketch Image */}
                      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl z-0 select-none opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                        <img
                          src={card.sketchImage}
                          alt={`${card.title} Architectural Sketch`}
                          className="w-full h-full object-cover object-right sm:object-center mix-blend-multiply filter contrast-125 brightness-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-sandel-card/90 via-sandel-card/50 to-transparent pointer-events-none" />
                      </div>

                      <div className="relative z-10 max-w-md">
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight leading-tight">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                          {card.subtitle}
                        </p>
                      </div>

                      <div className="relative z-10 rounded-2xl border border-sandel-border bg-sandel-card p-5 max-w-lg mt-auto shadow-md antialiased">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 font-sans">
                          {card.trustedLabel}
                        </div>
                        <div className="mt-2.5 flex flex-wrap items-center gap-2">
                          {card.logos.map((logo, lIdx) => (
                            <span
                              key={lIdx}
                              className="rounded-full border border-sandel-border bg-sandel px-3.5 py-1.5 text-xs font-semibold text-neutral-900 shadow-2xs transition-colors hover:border-neutral-400"
                            >
                              {logo}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}