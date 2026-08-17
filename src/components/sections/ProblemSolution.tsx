import { ArrowRight, CheckCircle2, XCircle, Clock, Zap, Shield, Layers } from "lucide-react";
import { Link } from "@tanstack/react-router";

const PAINS_VS_SOLUTIONS = [
  {
    category: "Client Onboarding",
    oldWay: "14 days of back-and-forth emails, lost files, manual intake forms, delayed Slack invites.",
    newWay: "Automated 15-minute onboarding: instant Slack channel setup, Google Drive folder creation, CRM sync & client kickoff.",
    impact: "90% Faster Time-To-Value"
  },
  {
    category: "Client Reporting",
    oldWay: "Account managers spending 15+ hours every Friday copying metrics into manual slide decks.",
    newWay: "Live client portals & automated weekly email digests generated directly from API data pipelines.",
    impact: "120+ Hours Saved / Month"
  },
  {
    category: "Project & Task Management",
    oldWay: "Silos between Slack, ClickUp, Notion, and email leads to dropped deliverables and missed deadlines.",
    newWay: "Bi-directional n8n automation syncing every project update across all tools in real-time.",
    impact: "Zero Missed Client Milestones"
  },
  {
    category: "Team Capacity & Payroll",
    oldWay: "Scaling from 15 to 30 clients requires hiring 4 expensive operations & account managers.",
    newWay: "Scale to 45+ clients using your existing operational team with autonomous AI workflows.",
    impact: "3x Client Capacity"
  }
];

export function ProblemSolution() {
  return (
    <section id="problem-solved" className="relative bg-neutral-900 py-10 text-white md:py-14">
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            What problem do we solve?
          </h2>
          <p className="mt-2.5 text-sm text-neutral-400 md:text-base">
            We break through the <span className="text-white font-medium">&ldquo;Agency Operational Scaling Wall&rdquo;</span> — replacing human data copying with automated, production-grade infrastructure.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="mt-8 space-y-3">
          {PAINS_VS_SOLUTIONS.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-neutral-950/70 p-4 md:p-5 backdrop-blur-2xl transition duration-300 hover:border-brand/40 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            >
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <div className="lg:w-1/4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold tabular-nums tracking-widest text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-md">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-white">{item.category}</h3>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[11px] font-medium text-orange-200 tracking-tight">
                    <Zap className="size-3 text-brand" />
                    <span className="tabular-nums">{item.impact}</span>
                  </div>
                </div>

                <div className="grid flex-1 gap-4 sm:grid-cols-2">
                  {/* Old Way */}
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold tracking-tight text-red-400 text-[11px]">
                      <XCircle className="size-3.5 shrink-0" />
                      <span>Traditional Manual Agency</span>
                    </div>
                    <p className="mt-1 text-neutral-400 leading-normal text-xs">{item.oldWay}</p>
                  </div>

                  {/* New Way */}
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold tracking-tight text-emerald-400 text-[11px]">
                      <CheckCircle2 className="size-3.5 shrink-0" />
                      <span>Infrastructure-Backed Agency</span>
                    </div>
                    <p className="mt-1 text-neutral-200 font-medium leading-normal text-xs">{item.newWay}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/15 via-orange-950/20 to-neutral-950/90 px-6 py-4 sm:flex-row backdrop-blur-2xl shadow-[0_15px_40px_-15px_rgba(255,122,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
          <div>
            <h4 className="font-display text-lg font-semibold tracking-tight text-white">Ready to remove operational bottlenecks?</h4>
            <p className="mt-0.5 text-xs text-neutral-400">Get a free 30-minute infrastructure audit of your agency stack.</p>
          </div>
          <Link
            to="/book"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_-8px_rgba(255,122,0,0.6)] transition hover:scale-105"
          >
            Schedule Free Audit Call
            <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
