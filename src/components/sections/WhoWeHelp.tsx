import { SectionHeading } from "./SectionHeading";
import { Check, X, Building2, Code2, Target, Home, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const ICP_CARDS = [
  {
    icon: Target,
    title: "B2B Marketing & Growth Agencies",
    range: "$50k–$300k+/mo",
    teamSize: "5 to 40 employees",
    pain: "Spent 20+ hrs/week compiling manual client reports, tracking ad performance, and chasing clients for assets.",
    solution: "Automated real-time client dashboards, autonomous ad-spend alerts, and 15-minute onboarding flows."
  },
  {
    icon: Code2,
    title: "Dev & Design Studios",
    range: "$60k–$400k+/mo",
    teamSize: "8 to 50 employees",
    pain: "Scope creep, chaotic client feedback loops, manual ticket triage, and delayed project milestone sign-offs.",
    solution: "AI ticket routing, automated client sign-off pipelines, and Slack-to-Linear/ClickUp sync."
  },
  {
    icon: Building2,
    title: "High-Ticket Lead Gen & Sales Firms",
    range: "$40k–$500k+/mo",
    teamSize: "4 to 30 employees",
    pain: "Inbound leads turning cold while waiting for human SDRs to manually qualify and respond hours later.",
    solution: "Sub-second WhatsApp/SMS AI qualifying agents with 2-way Google/Outlook calendar booking."
  },
  {
    icon: Home,
    title: "Real Estate & Professional Services",
    range: "$50k–$250k+/mo",
    teamSize: "5 to 25 employees",
    pain: "Manual document collection, signature chasing, listing updates, and fragmented client communications.",
    solution: "Autonomous intake agents, automated contract distribution, and real-time CRM updates."
  }
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="relative bg-white py-16 text-neutral-900 md:py-24">
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-mono font-bold tracking-wider text-brand uppercase">
            QUESTION 01 • TARGET ICP
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Who do we help?
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            We work exclusively with high-growth B2B agencies and service providers who have outgrown manual operations and need enterprise-grade AI infrastructure.
          </p>
        </div>

        {/* ICP Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ICP_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_50px_-15px_rgba(255,122,0,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-900/5 text-brand ring-1 ring-inset ring-neutral-200">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400">{card.range}</span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-neutral-900 leading-tight">
                    {card.title}
                  </h3>
                  <div className="mt-1 text-xs font-medium text-neutral-500">
                    Team: {card.teamSize}
                  </div>

                  <hr className="my-4 border-neutral-100" />

                  <div className="space-y-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-500">The Problem:</span>
                      <p className="mt-1 text-xs text-neutral-600 leading-relaxed">{card.pain}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">The Infrastructure:</span>
                      <p className="mt-1 text-xs text-neutral-800 font-medium leading-relaxed">{card.solution}</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/book"
                  className="mt-6 flex items-center justify-between rounded-xl bg-neutral-50 p-3 text-xs font-semibold text-neutral-900 transition hover:bg-brand hover:text-white"
                >
                  <span>Build For My Agency</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Who This Is For vs Who This Is NOT For */}
        <div className="mt-16 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Who This IS For */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-8 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900">Who This IS Built For</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span>Agencies doing <strong>$50k to $500k+/month</strong> with established service offerings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span>Teams with 10–50+ clients suffering from manual delivery and onboarding bottlenecks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span>Founders who want to scale revenue 3x without doubling operational headcount</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-emerald-600 mt-0.5" />
                  <span>Operators who demand 100% code ownership with zero proprietary vendor lock-in</span>
                </li>
              </ul>
            </div>

            {/* Right: Who This IS NOT For */}
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="grid size-8 place-items-center rounded-full bg-rose-500 text-white">
                  <X className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900">Who This IS NOT For</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <X className="size-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Pre-revenue freelancers looking for $50 ChatGPT prompt tricks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="size-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Businesses looking for a generic offshore dev shop to outsource basic coding</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="size-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Teams expecting magical &ldquo;1-click AI button&rdquo; solutions without proper process mapping</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="size-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>Companies refusing to standardize their core client onboarding and delivery SOPs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
