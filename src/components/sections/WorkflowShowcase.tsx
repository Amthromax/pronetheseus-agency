import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { FileInput, type LucideIcon } from "lucide-react";
import { useState } from "react";

type Node = {
  id: string;
  label: string;
  Icon?: LucideIcon;
  src?: string; // absolute logo URL (real brand mark, square aspect)
};
// Square icon marks only — gilbarbara/logos for those that publish an *-icon,
// simpleicons.org (colored) for brands whose gilbarbara slug is a wide wordmark.
const GB = "https://raw.githubusercontent.com/gilbarbara/logos/main/logos";
const flow: Node[] = [
  { id: "form", label: "Typeform", src: `${GB}/typeform-icon.svg` },
  { id: "ai", label: "OpenAI", src: `${GB}/openai-icon.svg` },
  { id: "crm", label: "HubSpot", src: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { id: "email", label: "Gmail", src: `${GB}/google-gmail.svg` },
  { id: "cal", label: "Google Calendar", src: `${GB}/google-calendar.svg` },
  { id: "slack", label: "Slack", src: `${GB}/slack-icon.svg` },
  { id: "invoice", label: "Stripe", src: "https://cdn.simpleicons.org/stripe/635BFF" },
];

function NodeIcon({ n }: { n: Node }) {
  if (n.src) {
    return (
      <img
        src={n.src}
        alt={`${n.label} logo`}
        loading="lazy"
        decoding="async"
        className="size-7 object-contain"
      />
    );
  }
  const Icon = n.Icon ?? FileInput;
  return <Icon className="size-4 text-brand" />;
}

const presets = [
  { name: "Inbound Lead → Booked", desc: "Qualify, enrich, and book a call in under 60 seconds." },
  { name: "Support Ticket → Resolution", desc: "Deflect, classify, respond, and escalate as needed." },
  { name: "Invoice → Payment", desc: "Generate, send, chase, reconcile — hands-free." },
];

export function WorkflowShowcase() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading title="Watch a workflow come to life" description="Real templates we deploy in production — click any preset to see the flow animate." />
      <div className="mt-16 grid gap-8 lg:grid-cols-[280px_1fr]">
        <div className="space-y-2">
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-full rounded-2xl border p-4 text-left transition ${active === i ? "border-brand/40 bg-brand/5" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`}
            >
              <div className="font-medium">{p.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
            </button>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 glass p-8 md:p-12">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-wrap items-center justify-center gap-y-8">
            {flow.map((n, i) => (
              <div key={n.id} className="flex items-center">
                <motion.div
                  key={`${active}-${n.id}`}
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative flex w-[130px] flex-col items-center rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur"
                >
                  <div className="grid size-11 place-items-center rounded-lg bg-white ring-1 ring-inset ring-white/10">
                    <NodeIcon n={n} />
                  </div>
                  <div className="mt-2 text-xs font-medium">{n.label}</div>
                </motion.div>
                {i < flow.length - 1 && (
                  <div className="relative mx-2 h-px w-6 overflow-hidden md:w-10">
                    <div className="absolute inset-0 bg-white/10" />
                    <motion.div
                      key={`${active}-arrow-${i}`}
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ delay: i * 0.12 + 0.2, duration: 0.8, repeat: Infinity, repeatDelay: 1.6 }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-brand to-transparent"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}