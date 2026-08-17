import { Check, Minus, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react";

type Cell = boolean | string;
type Row = { label: string; hint?: string; setup: Cell; monthly: Cell; enterprise: Cell };
type Group = { title: string; rows: Row[] };

const groups: Group[] = [
  {
    title: "Core Build & Architecture",
    rows: [
      { label: "Operations Audit & Blueprint", hint: "Deep workflow mapping across sales & delivery", setup: true, monthly: true, enterprise: true },
      { label: "Custom n8n & AI Agent Build", hint: "Workflows built inside your stack", setup: "1 Engine", monthly: "Ongoing Builds", enterprise: "Full Agency OS" },
      { label: "100% Code Ownership", hint: "You own all repos & databases", setup: true, monthly: true, enterprise: true },
      { label: "Tool Integrations", hint: "Slack, ClickUp, Notion, HubSpot, Drive", setup: "Up to 4 Tools", monthly: "Unlimited", enterprise: "Custom API & Database" },
    ],
  },
  {
    title: "Operations, Infrastructure & Monitoring",
    rows: [
      { label: "24/7 Automated Workflow Monitoring", hint: "Real-time error alerts & auto-retry", setup: "30 Days", monthly: true, enterprise: true },
      { label: "Monthly Workflow Optimizations", hint: "Continuous system tuning", setup: false, monthly: true, enterprise: true },
      { label: "API Version Maintenance", hint: "Handling tool breaking changes", setup: false, monthly: true, enterprise: true },
      { label: "SOC2 Action Firewall Security", hint: "Bank-grade data encryption & privacy", setup: false, monthly: false, enterprise: true },
    ],
  },
  {
    title: "Support, Team & SLAs",
    rows: [
      { label: "Hyper-care Post-Launch Support", setup: "30 Days", monthly: "Ongoing", enterprise: "24/7 Priority" },
      { label: "Dedicated Senior Architect Slack", setup: false, monthly: true, enterprise: true },
      { label: "30-Day ROI & Performance SLA", setup: false, monthly: true, enterprise: true },
      { label: "Dedicated Principal Engineer Team", setup: false, monthly: false, enterprise: true },
    ],
  },
];

const plans = [
  { key: "setup", name: "Setup", price: "$2,000–$10k+", suffix: "one-time", best: "Single Core Engine Build", cta: "Book Setup Audit", highlight: false },
  { key: "monthly", name: "Monthly Support", price: "$500–$3k+", suffix: "/month", best: "24/7 Retainer & Improvements", cta: "Start Retainer", highlight: true, badge: "Most popular" },
  { key: "enterprise", name: "Enterprise", price: "$10k–$50k+", suffix: "custom", best: "End-to-End Agency OS", cta: "Request Blueprint", highlight: false },
] as const;

function CellView({ v }: { v: Cell }) {
  if (typeof v === "boolean") {
    return v ? (
      <Check className="mx-auto size-4 text-brand" aria-label="Included" />
    ) : (
      <Minus className="mx-auto size-4 text-neutral-300" aria-label="Not included" />
    );
  }
  return <span className="text-sm font-medium text-neutral-900">{v}</span>;
}

export function PlanComparison() {
  return (
    <section className="relative py-16 md:py-24 bg-white text-neutral-900">
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Compare Offer Scope</div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Detailed Capability Comparison
          </h2>
          <p className="mt-3 text-sm text-neutral-600 md:text-base">
            All builds include senior principal engineers, weekly demos, and 100% code ownership.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead className="sticky top-0 z-10 bg-white">
              <tr className="border-b border-neutral-200">
                <th className="w-[34%] p-5 text-left align-bottom">
                  <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">Offer Tier</div>
                  <div className="mt-2 text-base font-semibold text-neutral-900">Capabilities & Deliverables</div>
                </th>
                {plans.map((p) => (
                  <th
                    key={p.key}
                    className={`w-[22%] p-5 text-center align-bottom ${p.highlight ? "bg-brand/5" : ""}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-base font-semibold ${p.highlight ? "text-brand" : "text-neutral-900"}`}>{p.name}</span>
                      {p.highlight && "badge" in p && (
                        <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex items-baseline justify-center gap-1">
                      <span className="font-display text-xl md:text-2xl font-bold text-neutral-900">{p.price}</span>
                      {p.suffix && <span className="text-xs text-neutral-500">{p.suffix}</span>}
                    </div>
                    <div className="mt-1 text-[11px] text-neutral-500">{p.best}</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {groups.map((g) => (
                <Fragment key={g.title}>
                  <tr>
                    <td
                      colSpan={4}
                      className="border-y border-neutral-200 bg-neutral-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600"
                    >
                      {g.title}
                    </td>
                  </tr>
                  {g.rows.map((r, i) => (
                    <tr key={`${g.title}-${i}`} className="border-b border-neutral-100 last:border-b-0">
                      <td className="p-5 align-top">
                        <div className="font-medium text-neutral-900">{r.label}</div>
                        {r.hint && <div className="mt-0.5 text-xs text-neutral-500">{r.hint}</div>}
                      </td>
                      <td className="p-5 text-center align-middle"><CellView v={r.setup} /></td>
                      <td className="bg-brand/[0.04] p-5 text-center align-middle"><CellView v={r.monthly} /></td>
                      <td className="p-5 text-center align-middle"><CellView v={r.enterprise} /></td>
                    </tr>
                  ))}
                </Fragment>
              ))}

              <tr className="border-t border-neutral-200 bg-neutral-50/60">
                <td className="p-5 align-middle">
                  <div className="text-sm font-medium text-neutral-900">Ready to build your agency OS?</div>
                  <div className="mt-0.5 text-xs text-neutral-500">Free 30-min strategy call. Concrete plan, no fluff.</div>
                </td>
                {plans.map((p) => (
                  <td key={`cta-${p.key}`} className={`p-4 text-center align-middle ${p.highlight ? "bg-brand/5" : ""}`}>
                    <Link
                      to="/book"
                      className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-medium transition ${
                        p.highlight
                          ? "bg-gradient-to-r from-[#ff7a00] to-[#c2410c] text-white hover:scale-105"
                          : "border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:shadow-sm"
                      }`}
                    >
                      <Sparkles className="size-3" />
                      {p.cta}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center text-xs text-neutral-500">
          * Note: Exact numbers depend heavily on market segment, workflow complexity, and measurable financial value created.
        </div>
      </div>
    </section>
  );
}