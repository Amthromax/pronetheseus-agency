import { useMemo, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Counter } from "@/components/ui/counter";

export function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [salary, setSalary] = useState(60000);
  const [hours, setHours] = useState(15);

  const { moneySaved, hoursSaved, roi } = useMemo(() => {
    const hourly = salary / 2080;
    const savedHrsMonth = employees * hours * 4.33 * 0.6;
    const money = savedHrsMonth * hourly;
    const cost = 4000;
    const roiPct = Math.max(0, ((money - cost) / cost) * 100);
    return { moneySaved: Math.round(money), hoursSaved: Math.round(savedHrsMonth), roi: Math.round(roiPct) };
  }, [employees, salary, hours]);

  return (
    <section className="relative bg-white text-neutral-900">
      <div className="container-pad mx-auto max-w-[1200px] py-14 md:py-20">
      <SectionHeading title="Estimate what automation is worth" description="Move the sliders to see live monthly savings — most clients see payback within 60 days." />
      <div className="mt-10 grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Slider label="Team size" value={employees} min={1} max={200} unit=" people" onChange={setEmployees} />
          <Slider label="Average annual salary" value={salary} min={30000} max={200000} step={5000} unit="" prefix="$" onChange={setSalary} />
          <Slider label="Manual work per person / week" value={hours} min={1} max={40} unit=" hrs" onChange={setHours} />
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <Metric label="Money saved / month" value={moneySaved} prefix="$" />
          <Metric label="Hours saved / month" value={hoursSaved} suffix=" hrs" />
          <Metric label="Estimated ROI" value={roi} suffix="%" highlight />
        </div>
      </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step = 1, unit = "", prefix = "", onChange }: { label: string; value: number; min: number; max: number; step?: number; unit?: string; prefix?: string; onChange: (v: number) => void; }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{label}</span>
        <span className="font-sans font-semibold text-neutral-900">{prefix}{value.toLocaleString()}{unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-3 w-full accent-[#ff7a00]" />
    </label>
  );
}

function Metric({ label, value, prefix = "", suffix = "", highlight = false }: { label: string; value: number; prefix?: string; suffix?: string; highlight?: boolean; }) {
  return (
    <div className={`rounded-2xl border p-5 ${highlight ? "border-brand/40 bg-gradient-to-br from-brand/10 to-transparent" : "border-neutral-200 bg-neutral-50"}`}>
      <div className="text-xs uppercase tracking-widest text-neutral-500">{label}</div>
      <div key={value} className="mt-2 font-sans font-bold text-3xl text-gradient-brand md:text-4xl">
        <Counter to={value} prefix={prefix} suffix={suffix} duration={800} />
      </div>
    </div>
  );
}