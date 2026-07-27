import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "How fast can you deploy an AI agent?", a: "Most single-workflow agents go live in 2–4 weeks. Multi-agent systems ship in 6–10 weeks." },
  { q: "Which AI models do you use?", a: "We pick the right model per task — GPT, Claude, Gemini, Llama, DeepSeek, Mistral, or open-source. Model-agnostic by design." },
  { q: "Do you work with our existing tools?", a: "Yes. We integrate with any tool that has an API — HubSpot, Salesforce, Notion, Slack, Zendesk, Twilio, Stripe, and 500+ more." },
  { q: "Is our data safe?", a: "Yes. Everything runs in your infra or in isolated cloud environments with SOC2-ready practices and full data residency options." },
  { q: "What if the AI makes a mistake?", a: "We build human-in-the-loop guardrails, confidence thresholds, and escalation flows into every agent from day one." },
  { q: "Do you offer ongoing support?", a: "Every engagement includes 30 days of hyper-care. Retainers and dedicated Slack channels available for longer partnerships." },
];

export function FAQ() {
  return (
    <section className="relative container-pad mx-auto max-w-[1400px] py-24 md:py-32">
      <SectionHeading title="Answers to what teams ask most" />
      <div className="mx-auto mt-14 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6">
              <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}