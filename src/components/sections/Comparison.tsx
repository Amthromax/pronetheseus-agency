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
    <section className="relative bg-sandel text-neutral-900 font-sans">
      <div className="container-pad mx-auto max-w-[1400px] py-16 md:py-24">
        <SectionHeading title="Why teams switch from traditional agencies" />
        
        {/* Apple Squircle Comparison Card Box */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[28px] sm:rounded-[32px] border border-neutral-200/90 bg-[#f4f3ee] shadow-[0_8px_30px_rgb(0,0,0,0.03)] font-sans">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-black/5 bg-white/80 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
            <div className="p-4 sm:p-5" />
            <div className="p-4 sm:p-5 text-center">Traditional Agency</div>
            <div className="p-4 sm:p-5 text-center text-neutral-900 font-bold">Pronetheseus</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-black/5 text-sm last:border-b-0">
              <div className="p-4 sm:p-5 font-bold text-neutral-900">{r.label}</div>
              <div className="p-4 sm:p-5 text-center text-neutral-500 font-normal">
                {typeof r.trad === "boolean" ? (r.trad ? <Check className="mx-auto size-4 text-neutral-400" /> : <X className="mx-auto size-4 text-neutral-400" />) : r.trad}
              </div>
              <div className="bg-neutral-200/30 p-4 sm:p-5 text-center font-bold text-neutral-900">
                {typeof r.us === "boolean" ? (r.us ? <Check className="mx-auto size-4 text-neutral-900" /> : <X className="mx-auto size-4" />) : r.us}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}