import { Sparkles, Check, ArrowRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

export type OfferTier = {
  id: string;
  name: string;
  badge: string;
  type: string;
  priceRange: string;
  priceNote: string;
  tagline: string;
  highlight?: boolean;
  features: string[];
  ctaText: string;
};

const OFFER_TIERS: OfferTier[] = [
  {
    id: "setup",
    name: "Setup",
    badge: "One-Time Build",
    type: "IMPLEMENTATION FEE",
    priceRange: "$2,000 – $10,000+",
    priceNote: "One-time fee depending on workflow complexity",
    tagline: "Ideal for agencies needing a single core operational engine engineered and integrated into their stack.",
    features: [
      "Full Operations Audit & Infrastructure Blueprint",
      "1 Core Engine (e.g. 15-Min Onboarding or Auto-Reporting)",
      "Custom n8n workflow engineering & API integrations",
      "Hands-on team training & technical runbooks",
      "100% Code & Repository Ownership (Zero Lock-in)",
    ],
    ctaText: "Book Setup Audit Call",
  },
  {
    id: "monthly",
    name: "Monthly Support",
    badge: "Most Popular",
    type: "RETAINER & INFRA",
    priceRange: "$500 – $3,000+",
    priceNote: "per month (recurring maintenance & improvements)",
    tagline: "24/7 server monitoring, proactive workflow optimization, and ongoing improvements as you scale.",
    highlight: true,
    features: [
      "24/7 Automated workflow monitoring & error alerts",
      "Proactive monthly system tuning & feature rollouts",
      "API version maintenance & security updates",
      "Priority Slack channel with Senior Systems Architect",
      "30-Day SLA & ROI performance guarantee",
    ],
    ctaText: "Start Monthly Retainer",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Full Transformation",
    type: "CUSTOM IMPLEMENTATION",
    priceRange: "$10,000 – $50,000+",
    priceNote: "Custom full-agency system build",
    tagline: "End-to-end multi-department agency transformation for high-volume firms ($150k–$500k+/mo).",
    features: [
      "Multi-department audit (Sales, Onboarding, Delivery, Reporting)",
      "Complete Agency OS (Onboarding + Delivery + AI SDRs + CRM)",
      "SOC2-compliant Action Firewall & bank-grade encryption",
      "Dedicated Principal Systems Architect team",
      "Custom BI dashboards & executive ROI reporting",
    ],
    ctaText: "Request Enterprise Blueprint",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-14 md:py-24 bg-black text-white overflow-hidden">
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-gradient-to-tr from-[#ff7a00]/15 via-orange-600/5 to-transparent blur-[140px]" />
      </div>

      <div className="container-pad relative mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Simple, Value-Based Agency Pricing
          </h2>
          <p className="mt-4 text-base text-neutral-400 md:text-lg">
            No bloated retainers. No junior handoffs. 100% code ownership guaranteed on every build.
          </p>
        </div>

        {/* 3 Offer Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8 items-stretch">
          {OFFER_TIERS.map((tier, idx) => {
            const isHighlight = tier.highlight;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 md:p-8 transition-all duration-300 ${
                  isHighlight
                    ? "border-2 border-[#ff7a00] bg-white text-neutral-900 shadow-[0_20px_60px_-15px_rgba(255,122,0,0.3)] lg:scale-[1.02]"
                    : "border border-neutral-200 bg-white text-neutral-900 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]"
                }`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#ff7a00]">
                      {tier.type}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-medium shrink-0 ${
                        isHighlight
                          ? "bg-[#ff7a00] text-white shadow-sm font-semibold"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-2xl font-semibold text-neutral-900 tracking-tight">
                    {tier.name}
                  </h3>

                  {/* Pricing */}
                  <div className="mt-3">
                    <div className="font-display text-2xl sm:text-2xl md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-3xl font-semibold text-neutral-900 tracking-tight">
                      {tier.priceRange}
                    </div>
                    <div className="mt-1 text-xs text-neutral-500 font-normal">
                      {tier.priceNote}
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                    {tier.tagline}
                  </p>

                  <hr className="my-5 border-neutral-200" />

                  {/* Features Header & List */}
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    INCLUDED CAPABILITIES:
                  </div>
                  <ul className="space-y-3 text-xs md:text-sm">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-neutral-700 font-normal leading-snug">
                        <Check className="size-4 shrink-0 text-[#ff7a00] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4">
                  <Link
                    to="/book"
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition ${
                      isHighlight
                        ? "bg-gradient-to-r from-[#ff7a00] to-[#c2410c] text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.6)] hover:scale-[1.01]"
                        : "border border-neutral-300 bg-neutral-900 text-white hover:bg-neutral-800"
                    }`}
                  >
                    <Sparkles className="size-4 text-orange-200" />
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scope Note */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row text-xs md:text-sm text-neutral-300">
            <Zap className="size-4 text-[#ff7a00] shrink-0" />
            <span className="font-semibold text-white">Value-Based Scope Note:</span>
            <span>The exact numbers depend heavily on market segment, workflow complexity, and measurable financial value created for your agency.</span>
          </div>
        </div>
      </div>
    </section>
  );
}