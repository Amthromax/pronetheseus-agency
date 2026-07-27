import { Check, Minus, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react";

type Cell = boolean | string;
type Row = { label: string; hint?: string; starter: Cell; growth: Cell; scale: Cell; enterprise: Cell };
type Group = { title: string; rows: Row[] };

const groups: Group[] = [
  {
    title: "Build & deploy",
    rows: [
      { label: "AI agents / workflows", hint: "How many production agents you can run", starter: "1", growth: "Up to 5", scale: "Up to 12", enterprise: "Unlimited" },
      { label: "Integrations", hint: "CRMs, inboxes, data sources", starter: "Up to 3", growth: "Unlimited", scale: "Unlimited", enterprise: "Unlimited" },
      { label: "Custom SaaS builds", starter: true, growth: true, scale: true, enterprise: true },
      { label: "CRM / voice / chat surfaces", starter: true, growth: true, scale: true, enterprise: true },
    ],
  },
  {
    title: "Operate & monitor",
    rows: [
      { label: "Analytics dashboard", starter: true, growth: true, scale: true, enterprise: true },
      { label: "Advanced observability", hint: "Traces, alerts, cost tracking", starter: false, growth: true, scale: true, enterprise: true },
      { label: "SLAs & priority builds", starter: false, growth: false, scale: true, enterprise: true },
      { label: "SOC2-ready deployments", starter: false, growth: false, scale: false, enterprise: true },
    ],
  },
  {
    title: "Support & success",
    rows: [
      { label: "Hyper-care period", hint: "Post-launch tuning included", starter: "30 days", growth: "60 days", scale: "90 days", enterprise: "Ongoing" },
      { label: "Priority Slack channel", starter: false, growth: true, scale: true, enterprise: true },
      { label: "Quarterly strategy reviews", starter: false, growth: true, scale: true, enterprise: true },
      { label: "Dedicated PM", starter: false, growth: false, scale: true, enterprise: true },
      { label: "White-glove support", starter: false, growth: false, scale: false, enterprise: true },
    ],
  },
];

const plans = [
  { key: "starter", name: "Starter", price: "$999", suffix: "/project", best: "Freelancers & small teams", cta: "Start with Starter", highlight: false },
  { key: "growth", name: "Growth", price: "$2,499", suffix: "/project", best: "Scaling revenue teams", cta: "Choose Growth", highlight: true, badge: "Most popular" },
  { key: "scale", name: "Scale", price: "$4,999", suffix: "/project", best: "Multi-department ops", cta: "Choose Scale", highlight: false },
  { key: "enterprise", name: "Enterprise", price: "Custom", suffix: "", best: "Complex, regulated orgs", cta: "Talk to sales", highlight: false },
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
    <section className="relative py-16 md:py-24">
      <div className="mx-4 rounded-[32px] bg-[#f7f6f3] px-4 py-14 md:mx-auto md:max-w-[1320px] md:px-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Compare plans</div>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
            Find the plan that fits your team
          </h2>
          <p className="mt-3 text-sm text-neutral-500 md:text-base">
            Every plan includes senior engineers, weekly demos, and full ownership of what we ship — no junior handoffs.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            {/* Sticky header with plan summary + price */}
            <thead className="sticky top-0 z-10 bg-white">
              <tr className="border-b border-neutral-200">
                <th className="w-[30%] p-5 text-left align-bottom">
                  <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">Plans</div>
                  <div className="mt-2 text-base font-medium text-neutral-900">Compare features & benefits</div>
                </th>
                {plans.map((p) => (
                  <th
                    key={p.key}
                    className={`w-[17.5%] p-5 text-center align-bottom ${p.highlight ? "bg-brand/5" : ""}`}
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
                      <span className="font-display text-2xl text-neutral-900">{p.price}</span>
                      {p.suffix && <span className="text-xs text-neutral-400">{p.suffix}</span>}
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
                      colSpan={5}
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
                      <td className="p-5 text-center align-middle"><CellView v={r.starter} /></td>
                      <td className="bg-brand/[0.04] p-5 text-center align-middle"><CellView v={r.growth} /></td>
                      <td className="p-5 text-center align-middle"><CellView v={r.scale} /></td>
                      <td className="p-5 text-center align-middle"><CellView v={r.enterprise} /></td>
                    </tr>
                  ))}
                </Fragment>
              ))}

              {/* CTA row */}
              <tr className="border-t border-neutral-200 bg-neutral-50/60">
                <td className="p-5 align-middle">
                  <div className="text-sm font-medium text-neutral-900">Ready to move?</div>
                  <div className="mt-0.5 text-xs text-neutral-500">30-min call. Concrete plan, no fluff.</div>
                </td>
                {plans.map((p) => (
                  <td key={`cta-${p.key}`} className={`p-4 text-center align-middle ${p.highlight ? "bg-brand/5" : ""}`}>
                    <Link
                      to="/contact"
                      className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-medium transition ${
                        p.highlight
                          ? "bg-neutral-950 text-white hover:bg-black"
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

        {/* Trust strip */}
        <div className="mt-8 grid gap-3 text-center text-xs text-neutral-500 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
            <span className="font-medium text-neutral-900">No lock-in.</span> Cancel or pause anytime.
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
            <span className="font-medium text-neutral-900">Live in 2–4 weeks.</span> Weekly demos included.
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
            <span className="font-medium text-neutral-900">ROI-guaranteed.</span> Most clients see payback in 60 days.
          </div>
        </div>
      </div>
    </section>
  );
}