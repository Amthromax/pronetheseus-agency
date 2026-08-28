import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface PricingCardData {
  id: string;
  badge: string;
  type: string;
  title: string;
  priceRange: string;
  priceNote: string;
  description: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
}

interface CategoryData {
  id: string;
  label: string;
  cards: PricingCardData[];
}

const PRICING_CATEGORIES: CategoryData[] = [
  {
    id: "all",
    label: "All Packages",
    cards: [
      {
        id: "starter",
        badge: "Essential Engine",
        type: "STARTER PACKAGE",
        title: "Starter",
        priceRange: "$1,500 – $2,500",
        priceNote: "Setup + $500–$750/mo retainer",
        description: "Essential AI lead capture, intent qualification, and direct calendar booking for growing service businesses.",
        features: [
          "AI Lead Capture & Intent Qualification",
          "Sub-60s Email & SMS Automated Follow-up",
          "Direct Google & Outlook Calendar Booking",
          "Core CRM Automation & Contact Sync",
          "100% System & Code Ownership",
        ],
        ctaText: "Book Starter Strategy Call",
      },
      {
        id: "growth",
        badge: "Most Popular",
        type: "FLAGSHIP ENGINE",
        title: "Growth",
        priceRange: "$3,500 – $6,000",
        priceNote: "Setup + $1,000–$1,500/mo retainer",
        description: "Complete multi-channel AI Revenue Engine with WhatsApp chat, AI Voice Agents, and automated follow-up cadences.",
        highlight: true,
        features: [
          "Everything in Starter Package +",
          "WhatsApp 2-Way Chat & Quote Automation",
          "24/7 AI Voice Agent (Inbound/Outbound)",
          "Multi-Channel Automated Nurture Cadences",
          "Priority Slack Channel & Proactive Support",
        ],
        ctaText: "Get Growth Revenue Engine",
      },
      {
        id: "scale",
        badge: "Full Automation OS",
        type: "SCALE PACKAGE",
        title: "Scale",
        priceRange: "$7,500 – $10,000+",
        priceNote: "Setup + $2,000–$3,000+/mo retainer",
        description: "End-to-end multi-department automation suite with automated review generation & cold database lead reactivation.",
        features: [
          "Everything in Growth Package +",
          "Automated Google Review Generation Engine",
          "Cold Database Lead Reactivation Bot",
          "Multi-Branch CRM & Enterprise Data Sync",
          "Dedicated Principal Engineer Team",
        ],
        ctaText: "Request Scale Blueprint",
      },
      {
        id: "guarantee",
        badge: "Zero Vendor Lock-in",
        type: "VALUE GUARANTEE",
        title: "100% IP Ownership",
        priceRange: "Included Free",
        priceNote: "Guaranteed on all packages & retainers",
        description: "You retain full IP and source code repository ownership with zero proprietary platform dependencies.",
        features: [
          "Full source code & GitHub repository transfer",
          "Self-hosted infrastructure configuration",
          "Comprehensive technical runbooks & SOPs",
          "30-Day SLA & Performance Assurance",
        ],
        ctaText: "Explore Package Scope",
      },
    ],
  },
  {
    id: "setup-engine",
    label: "Setup Engine",
    cards: [
      {
        id: "setup-1",
        badge: "Core Workflow",
        type: "STARTER BUILD",
        title: "Single Engine Build",
        priceRange: "$2,000 – $4,000",
        priceNote: "Fixed project scope",
        description: "Focuses on automated client onboarding, automated invoice generation, or lead triage.",
        features: [
          "1 Core Engine integration",
          "n8n / Make / Supabase automation",
          "2 Team training sessions",
          "Full code repository handoff",
        ],
        ctaText: "Book Engine Build Call",
      },
      {
        id: "setup-2",
        badge: "Multi-Engine",
        type: "ADVANCED BUILD",
        title: "Operations Suite",
        priceRange: "$5,000 – $10,000+",
        priceNote: "Cross-department build",
        highlight: true,
        description: "Integrates onboarding, delivery tracking, and client reporting into a unified engine.",
        features: [
          "3 Core operational engines",
          "Custom API & CRM webhooks",
          "Automated error recovery",
          "Priority technical support",
        ],
        ctaText: "Request Operations Suite",
      },
      {
        id: "setup-3",
        badge: "Audit & Map",
        type: "CONSULTING ONLY",
        title: "Architecture Blueprint",
        priceRange: "$1,500",
        priceNote: "Standalone audit",
        description: "Comprehensive system audit and step-by-step technical blueprint for your internal team.",
        features: [
          "Full tech stack vulnerability audit",
          "Custom automation roadmap",
          "Tool selection & cost optimization",
          "Executive summary presentation",
        ],
        ctaText: "Get Architecture Blueprint",
      },
      {
        id: "setup-4",
        badge: "Fast Track",
        type: "EXPRESS DELIVERY",
        title: "7-Day Sprint Build",
        priceRange: "$6,000+",
        priceNote: "Accelerated execution",
        description: "Rapid 7-day deployment for urgent agency infrastructure bottlenecks.",
        features: [
          "7-Day rapid turnaround",
          "Dedicated senior engineer pair",
          "Daily async video updates",
          "Post-launch 14-day warranty",
        ],
        ctaText: "Launch 7-Day Sprint",
      },
    ],
  },
  {
    id: "monthly-support",
    label: "Monthly Support",
    cards: [
      {
        id: "m-1",
        badge: "Essential Infra",
        type: "LIGHT RETAINER",
        title: "Starter Retainer",
        priceRange: "$500 / mo",
        priceNote: "Recurring maintenance",
        description: "Essential server monitoring, emergency error patches, and routine security updates.",
        features: [
          "24/7 Server uptime monitoring",
          "Monthly system health check",
          "Up to 3 minor workflow edits/mo",
          "Standard email support SLA",
        ],
        ctaText: "Start Starter Retainer",
      },
      {
        id: "m-2",
        badge: "Most Popular",
        type: "GROWTH RETAINER",
        title: "Proactive Retainer",
        priceRange: "$1,500 / mo",
        priceNote: "Maintenance & improvements",
        highlight: true,
        description: "Continuous workflow optimization, new feature rollouts, and priority Slack access.",
        features: [
          "24/7 Automated error alert system",
          "Up to 10 hours monthly feature dev",
          "Priority Slack channel access",
          "Monthly ROI performance review",
        ],
        ctaText: "Start Proactive Retainer",
      },
      {
        id: "m-3",
        badge: "Dedicated Architect",
        type: "SCALE RETAINER",
        title: "Full Infrastructure OS",
        priceRange: "$3,000+ / mo",
        priceNote: "Unlimited optimization",
        description: "Complete hands-off infrastructure management with a dedicated Principal Systems Architect.",
        features: [
          "Dedicated Senior Systems Architect",
          "Unlimited bug fixes & minor tweaks",
          "SOC2 action firewall maintenance",
          "Quarterly strategic roadmap sessions",
        ],
        ctaText: "Request Scale Retainer",
      },
      {
        id: "m-4",
        badge: "Guaranteed SLA",
        type: "SLA ASSURANCE",
        title: "15-Min Emergency SLA",
        priceRange: "Add-on",
        priceNote: "Critical uptime guarantee",
        description: "Guaranteed 15-minute response SLA for mission-critical client delivery pipelines.",
        features: [
          "15-Minute incident response time",
          "Dedicated emergency phone hotline",
          "Financial uptime credit guarantee",
          "Automated failover routing",
        ],
        ctaText: "Add Emergency SLA",
      },
    ],
  },
  {
    id: "enterprise-os",
    label: "Enterprise OS",
    cards: [
      {
        id: "e-1",
        badge: "Full Agency OS",
        type: "TRANSFORMATION",
        title: "Agency Core OS",
        priceRange: "$15,000 – $25,000",
        priceNote: "Full department build",
        description: "End-to-end multi-department agency transformation for high-volume firms.",
        features: [
          "Sales, Onboarding & Delivery OS",
          "AI SDR & Lead Enrichment Engine",
          "SOC2 Action Firewall & Encryption",
          "Custom BI & ROI Dashboards",
        ],
        ctaText: "Request Core OS Blueprint",
      },
      {
        id: "e-2",
        badge: "Flagship OS",
        type: "CUSTOM TRANSFORMATION",
        title: "Global Enterprise OS",
        priceRange: "$30,000 – $50,000+",
        priceNote: "Multi-branch deployment",
        highlight: true,
        description: "Bespoke infrastructure for multi-location or high-volume agencies handling 100+ active clients.",
        features: [
          "Multi-branch workspace architecture",
          "Custom AI model fine-tuning",
          "Bank-grade compliance & audit trails",
          "White-glove executive onboarding",
        ],
        ctaText: "Request Global Blueprint",
      },
      {
        id: "e-3",
        badge: "Custom AI SDR",
        type: "REVENUE ENGINE",
        title: "Autonomous SDR Hub",
        priceRange: "$10,000 – $18,000",
        priceNote: "Outbound AI Engine",
        description: "AI SDR agent that qualifies leads, handles objections, and schedules sales calls directly into CRM.",
        features: [
          "Real-time lead enrichment",
          "Multi-channel outreach automation",
          "CRM bi-directional syncing",
          "Human-in-the-loop review panel",
        ],
        ctaText: "Build Autonomous SDR",
      },
      {
        id: "e-4",
        badge: "Custom BI Dashboard",
        type: "TELEMETRY",
        title: "Executive ROI Portal",
        priceRange: "$5,000 – $8,000",
        priceNote: "Real-time analytics",
        description: "Custom client dashboard displaying live workflow metrics, hour savings, and cost reductions.",
        features: [
          "Real-time client portal UI",
          "Automated PDF report generation",
          "Financial ROI telemetry",
          "Custom domain & branding",
        ],
        ctaText: "Build Executive Portal",
      },
    ],
  },
];

export function TabbedImpactCards() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const currentCategory = PRICING_CATEGORIES.find((cat) => cat.id === activeCategory) || PRICING_CATEGORIES[0];

  return (
    <div className="w-full bg-sandel text-neutral-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-sandel-border">
      <div className="mx-auto max-w-7xl">
        {/* Main Title */}
        <div className="mt-2 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
            Simple, Value-Based
          </h2>
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-500 tracking-tight leading-tight mt-1">
            Agency Pricing <span className="text-neutral-600 font-normal">& Tiers</span>
          </p>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-normal">
            No bloated retainers. No junior handoffs. 100% code ownership guaranteed on every build.
          </p>
        </div>

        {/* Filter Category Pills Bar - Apple HIG */}
        <div className="mt-10 flex justify-center font-sans">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/80 bg-sandel-card p-1.5 shadow-[0_8px_25px_rgb(0,0,0,0.04)] backdrop-blur-md">
            {PRICING_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 sm:px-5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-neutral-900 text-white shadow-md"
                      : "text-neutral-700 hover:text-neutral-900 hover:bg-white/80"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Cards Grid - Apple Design System */}
        <div className="mt-12 font-sans">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            >
              {currentCategory.cards.map((card) => {
                const isHighlight = card.highlight;
                return (
                  <div
                    key={card.id}
                    className={`relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 transition-all duration-300 min-h-[440px] ${
                      isHighlight
                        ? "bg-neutral-900 text-white shadow-2xl scale-[1.02] border-2 border-[#ff7a00] z-10"
                        : "bg-sandel-card border border-white/80 text-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.09)] hover:border-neutral-300/80"
                    }`}
                  >
                    <div>
                      {/* Top Header Row: Type Label & Badge Pill */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff7a00]">
                          {card.type}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold ${
                            isHighlight
                              ? "bg-[#ff7a00] text-white shadow-2xs"
                              : "bg-white/80 backdrop-blur-sm text-neutral-700 border border-black/5 shadow-2xs"
                          }`}
                        >
                          {card.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3
                        className={`mt-4 font-sans text-2xl font-bold tracking-tight ${
                          isHighlight ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {card.title}
                      </h3>

                      {/* Pricing Range & Note */}
                      <div className="mt-3">
                        <div className={`font-sans text-xl sm:text-2xl font-bold tracking-tight ${
                          isHighlight ? "text-white" : "text-neutral-900"
                        }`}>
                          {card.priceRange}
                        </div>
                        <div className={`text-[11px] mt-0.5 ${
                          isHighlight ? "text-neutral-400" : "text-neutral-500"
                        }`}>
                          {card.priceNote}
                        </div>
                      </div>

                      {/* Tagline / Description */}
                      <p
                        className={`mt-3 text-xs font-normal leading-relaxed ${
                          isHighlight ? "text-neutral-300" : "text-neutral-600"
                        }`}
                      >
                        {card.description}
                      </p>

                      <hr className={`my-4 ${isHighlight ? "border-neutral-800" : "border-black/5"}`} />

                      {/* Feature Bullet List */}
                      <ul className="space-y-2 text-xs">
                        {card.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 leading-snug">
                            <Check className="size-3.5 shrink-0 text-[#ff7a00] mt-0.5" />
                            <span className={isHighlight ? "text-neutral-200 font-medium" : "text-neutral-700 font-medium"}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Button - Apple Pill */}
                    <div className="mt-6 pt-2">
                      <Link
                        to="/book"
                        className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold transition-all duration-300 ${
                          isHighlight
                            ? "bg-[#ff7a00] text-white shadow-lg hover:bg-[#e06b00] hover:scale-[1.02] active:scale-[0.98]"
                            : "bg-neutral-900 text-white hover:bg-black shadow-sm"
                        }`}
                      >
                        <Sparkles className="size-3.5 text-orange-200" />
                        <span>{card.ctaText}</span>
                        <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
