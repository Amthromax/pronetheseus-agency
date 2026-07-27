import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

type Tier = {
  name: string;
  monthly: number | "custom";
  tag: string;
  highlight?: boolean;
  features: string[];
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    monthly: 999,
    tag: "One workflow, live in 2 weeks",
    features: ["1 AI agent or workflow", "Up to 3 integrations", "Analytics dashboard", "30 days of hyper-care"],
    cta: "Subscribe",
  },
  {
    name: "Growth",
    monthly: 2499,
    tag: "Best for scaling teams",
    highlight: true,
    features: [
      "Up to 5 agents / workflows",
      "Unlimited integrations",
      "CRM / voice / chat surfaces",
      "Priority Slack channel",
      "Quarterly strategy reviews",
    ],
    cta: "Subscribe",
  },
  {
    name: "Scale",
    monthly: 4999,
    tag: "Multi-department automation",
    features: ["Up to 12 agents / workflows", "Advanced observability", "Dedicated PM", "SLAs & priority builds"],
    cta: "Subscribe",
  },
  {
    name: "Enterprise",
    monthly: "custom",
    tag: "For complex, multi-team ops",
    features: ["Unlimited agents & workflows", "Custom SaaS builds", "SOC2-ready deployments", "White-glove support"],
    cta: "Contact",
  },
];

function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const isAnnual = billing === "annual";

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      {/* Local light theme wrapper — this section is intentionally white to feel premium and editorial */}
      <div className="mx-4 rounded-[32px] bg-[#f7f6f3] px-6 py-20 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] md:mx-auto md:max-w-[1320px] md:px-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Pricing</div>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl">
              Subscription
            </h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-500 md:text-base">
              No junior handoffs. No offshored surprises. Every engagement is led by a
              principal engineer.
            </p>
          </div>
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 self-start rounded-full border border-neutral-200 bg-white p-1 text-xs font-medium text-neutral-600 shadow-sm md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={!isAnnual}
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-1.5 transition ${
                !isAnnual ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isAnnual}
              onClick={() => setBilling("annual")}
              className={`rounded-full px-4 py-1.5 transition ${
                isAnnual ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Annual{" "}
              <span className={isAnnual ? "text-white/70" : "text-neutral-400"}>-40%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => {
            const highlight = !!t.highlight;
            const isCustom = t.monthly === "custom";
            const displayPrice = isCustom
              ? "Custom"
              : formatPrice(
                  isAnnual
                    ? Math.round(((t.monthly as number) * 12 * 0.6) / 100) * 100
                    : (t.monthly as number)
                );
            const priceSuffix = isCustom ? null : isAnnual ? "/year" : "/project";
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col rounded-2xl p-7 transition ${
                  highlight
                    ? "z-10 -my-4 overflow-hidden text-white shadow-[0_40px_100px_-20px_rgba(232,93,58,0.55)] md:scale-[1.04]"
                    : "border border-dashed border-neutral-300 bg-transparent hover:bg-white"
                }`}
              >
                {highlight && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a1410] to-[#e85d3a]" />
                    <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-gradient-to-tr from-[#ffb37a] via-[#ff7a4a] to-transparent blur-3xl opacity-80" />
                  </>
                )}

                <div className="relative flex items-center justify-between">
                  <div
                    className={`text-sm font-medium ${
                      highlight ? "text-white/80" : "text-neutral-500"
                    }`}
                  >
                    {t.name} plan
                  </div>
                  {highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/20">
                      Most popular
                    </span>
                  )}
                </div>

                <div className="relative mt-4 flex items-baseline gap-1">
                  <motion.span
                    key={displayPrice}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`font-display text-5xl font-medium tracking-tight ${
                      highlight ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {displayPrice}
                  </motion.span>
                  {priceSuffix && (
                    <span
                      className={`text-sm ${highlight ? "text-white/70" : "text-neutral-400"}`}
                    >
                      {priceSuffix}
                    </span>
                  )}
                </div>

                <p
                  className={`relative mt-4 text-sm leading-relaxed ${
                    highlight ? "text-white/85" : "text-neutral-600"
                  }`}
                >
                  {t.tag}
                </p>

                <ul className="relative mt-6 space-y-2.5 text-sm">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={highlight ? "text-white/80" : "text-neutral-500"}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 flex-1" />

                <Link
                  to="/contact"
                  className={`relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                    highlight
                      ? "bg-neutral-950 text-white hover:bg-black"
                      : "border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:shadow-sm"
                  }`}
                >
                  <Sparkles className="size-3.5" />
                  {t.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}