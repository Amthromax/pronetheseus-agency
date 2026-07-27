import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Helleious quietly replaced an entire SDR function.", who: "Sarah Chen", role: "VP Sales, Northwind" },
  { quote: "Sub-second voice AI that actually sounds human.", who: "Amir Khan", role: "COO, Helios Health" },
  { quote: "The best money we spent all year.", who: "Priya Nair", role: "Head of Support, Meridian" },
  { quote: "Weekly demos, zero surprises, huge outcomes.", who: "Marco Rossi", role: "CEO, Atlas Co." },
  { quote: "They ship faster than our internal team.", who: "Nadia Petrov", role: "CTO, Quanta" },
  { quote: "$40k saved in month one alone.", who: "James Whitfield", role: "COO, Apex Lab" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading title="Trusted by operators who care about outcomes" />
      </div>
      <div className="mt-16 space-y-6">
        <Marquee speed={50}>{testimonials.map((t, i) => (<TCard key={i} {...t} />))}</Marquee>
        <Marquee speed={60} reverse>{testimonials.slice().reverse().map((t, i) => (<TCard key={i} {...t} />))}</Marquee>
      </div>
    </section>
  );
}

function TCard({ quote, who, role }: { quote: string; who: string; role: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="w-[340px] shrink-0 rounded-2xl border border-white/10 glass-strong p-6">
      <div className="flex gap-1 text-brand">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-4 fill-current" />))}</div>
      <p className="mt-4 text-sm text-foreground/90">"{quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#ff7a00] to-[#c2410c] text-xs font-medium text-white">
          {who.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="text-sm font-medium">{who}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}