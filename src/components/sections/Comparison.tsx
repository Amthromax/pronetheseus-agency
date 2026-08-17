import { Check, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const rows = [
  { label: "Time to first deploy", trad: "3–6 months", us: "2–4 weeks" },
  { label: "Team seniority", trad: "Junior handoffs", us: "Principal engineers" },
  { label: "Weekly demos", trad: false, us: true },
  { label: "Custom AI agents", trad: false, us: true },
  { label: "Ongoing optimization", trad: "Retainer required", us: "Included" },
  { label: "Transparent pricing", trad: false, us: true },
  { label: "Post-launch monitoring", trad: false, us: true },
  { label: "In-house AI expertise", trad: false, us: true },
];

export function Comparison() {
  return (
    <section className="relative bg-white text-neutral-900">
      <div className="container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading title="Why teams switch from traditional agencies" />
      <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-widest text-neutral-500">
          <div className="p-4" />
          <div className="p-4 text-center">Traditional Agency</div>
          <div className="p-4 text-center text-brand">Pronetheseus</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-neutral-100 text-sm last:border-b-0">
            <div className="p-4 text-neutral-800">{r.label}</div>
            <div className="p-4 text-center text-neutral-500">
              {typeof r.trad === "boolean" ? (r.trad ? <Check className="mx-auto size-4 text-neutral-400" /> : <X className="mx-auto size-4 text-neutral-400" />) : r.trad}
            </div>
            <div className="bg-brand/5 p-4 text-center text-neutral-900">
              {typeof r.us === "boolean" ? (r.us ? <Check className="mx-auto size-4 text-brand" /> : <X className="mx-auto size-4" />) : r.us}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}