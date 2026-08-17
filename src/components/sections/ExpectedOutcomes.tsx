import { useMemo, useState } from "react";
import { Counter } from "@/components/ui/counter";
import { CheckCircle2, TrendingUp, Clock, Zap, ArrowRight, BarChart2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const HARD_METRICS = [
  {
    value: "300%",
    label: "Client Capacity Boost",
    desc: "Scale active client retainers from 15 to 45 with zero extra operations hires."
  },
  {
    value: "90%",
    label: "Faster Client Onboarding",
    desc: "Client onboarding setup time cut from 14 days down to 15 minutes automatically."
  },
  {
    value: "120+ Hrs",
    label: "Monthly Hours Reclaimed",
    desc: "Reclaim account director & founder hours previously lost to manual reporting."
  },
  {
    value: "40%+",
    label: "Net Margin Expansion",
    desc: "Drastically increase profit margins by eliminating operational labor redundancy."
  }
];

export function ExpectedOutcomes() {
  const [activeClients, setActiveClients] = useState(20);
  const [teamMembers, setTeamMembers] = useState(8);
  const [avgHourlyRate, setAvgHourlyRate] = useState(65);

  const { monthlyHoursSaved, monthlyDollarSavings, projectedCapacity } = useMemo(() => {
    const hoursSavedPerClient = 8; // hrs/month per client in onboarding & reporting
    const totalHoursSaved = activeClients * hoursSavedPerClient + teamMembers * 12;
    const dollarSavings = totalHoursSaved * avgHourlyRate;
    const capacityIncrease = Math.round(activeClients * 2.8);
    return {
      monthlyHoursSaved: Math.round(totalHoursSaved),
      monthlyDollarSavings: Math.round(dollarSavings),
      projectedCapacity: capacityIncrease
    };
  }, [activeClients, teamMembers, avgHourlyRate]);

  return (
    <section id="expected-outcomes" className="relative bg-white py-16 text-neutral-900 md:py-24">
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            What outcome can your agency expect?
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            Hard, measurable operational benchmarks delivered directly to your P&L within 30 days of deployment.
          </p>
        </div>

        {/* 4 Hard Metrics Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HARD_METRICS.map((m, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-neutral-200/80 bg-neutral-50/80 p-6 md:p-8 transition-all duration-300 hover:border-brand/50 hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.8)] backdrop-blur-md"
            >
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient-brand tabular-nums">
                {m.value}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-neutral-900">{m.label}</h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-600 leading-relaxed font-normal">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Agency Capacity & ROI Calculator */}
        <div className="mt-16 rounded-3xl border border-white/12 bg-neutral-950/90 p-6 md:p-10 text-white backdrop-blur-2xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-brand/20 border border-brand/30 text-brand shadow-sm">
              <BarChart2 className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Interactive Agency Capacity & ROI Calculator</h3>
              <p className="text-xs md:text-sm text-neutral-400">Calculate live monthly savings based on your agency&apos;s current client count and team size.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Sliders */}
            <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <Slider
                label="Active Monthly Clients"
                value={activeClients}
                min={5}
                max={100}
                unit=" clients"
                onChange={setActiveClients}
              />
              <Slider
                label="Agency Operations & Delivery Staff"
                value={teamMembers}
                min={2}
                max={50}
                unit=" team members"
                onChange={setTeamMembers}
              />
              <Slider
                label="Average Team Blended Hourly Rate"
                value={avgHourlyRate}
                min={30}
                max={150}
                prefix="$"
                unit="/hr"
                onChange={setAvgHourlyRate}
              />
            </div>

            {/* Live Outputs */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <OutputCard
                label="Monthly Dollars Saved"
                value={monthlyDollarSavings}
                prefix="$"
                sub="Direct payroll & admin savings reallocated"
              />
              <OutputCard
                label="Monthly Hours Reclaimed"
                value={monthlyHoursSaved}
                suffix=" hrs"
                sub="Saved across onboarding & manual reporting"
              />
              <OutputCard
                label="New Max Client Capacity"
                value={projectedCapacity}
                suffix=" clients"
                highlight
                sub="Capacity unlocked without adding headcount"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <span className="text-xs md:text-sm text-neutral-300 font-medium">
              Want to see these exact numbers unlocked for your agency?
            </span>
            <Link
              to="/book"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.6)] transition hover:scale-105"
            >
              Book Capacity Audit Call
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, prefix = "", unit = "", onChange }: { label: string; value: number; min: number; max: number; prefix?: string; unit?: string; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs md:text-sm">
        <span className="text-neutral-400 font-medium tracking-tight">{label}</span>
        <span className="font-mono font-semibold tabular-nums text-white text-base tracking-wider">{prefix}{value.toLocaleString()}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[#ff7a00]"
      />
    </div>
  );
}

function OutputCard({ label, value, prefix = "", suffix = "", sub, highlight = false }: { label: string; value: number; prefix?: string; suffix?: string; sub: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 transition backdrop-blur-xl ${highlight ? "border-brand/50 bg-gradient-to-br from-brand/20 to-orange-950/20 shadow-[0_10px_30px_-10px_rgba(255,122,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)]" : "border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"}`}>
      <div className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">{label}</div>
      <div className="mt-2 font-display font-bold tracking-tight text-3xl md:text-4xl text-gradient-brand tabular-nums">
        <Counter to={value} prefix={prefix} suffix={suffix} duration={600} />
      </div>
      <div className="mt-1 text-[11px] text-neutral-400">{sub}</div>
    </div>
  );
}
