import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SectionHeading } from "./SectionHeading";

const agencyFaqs = [
  {
    q: "Who do you help?",
    a: "We work exclusively with scaling B2B Marketing, Development, Consulting, and High-Ticket Lead Gen Agencies ($50k–$500k+/mo) managing 10 to 50+ clients where manual onboarding and delivery operations create severe bottlenecks."
  },
  {
    q: "What problem do you solve?",
    a: "We eliminate the 'Agency Operational Scaling Wall' — replacing 14-day manual client onboarding, tedious spreadsheet reporting, fragmented software silos, and high overhead payroll with automated n8n workflows & custom AI agents."
  },
  {
    q: "How does it work?",
    a: "Our 4-step engineering protocol: (1) Operations Audit & Infrastructure Blueprint (Days 1–3), (2) Custom n8n & AI Agent Build (Weeks 1–2), (3) Turnkey Integration & Stress Testing (Week 2–3), and (4) Full Code Handoff & 24/7 Operations Monitoring (Week 3+)."
  },
  {
    q: "What outcome can we expect?",
    a: "Our agency clients typically achieve a 3x client capacity increase with existing staff, a 90% reduction in client onboarding time (from 14 days to 15 minutes), 120+ hours saved per month, and a 40%+ expansion in net profit margin."
  },
  {
    q: "Why trust you over a traditional dev agency?",
    a: "You get 100% code and repository ownership (zero vendor lock-in), SOC2-compliant data security, senior principal engineers (never offshore handoffs), and a 30-day ROI SLA guarantee: if it doesn't save 20 hrs/wk, we work for free until it does."
  },
  {
    q: "How can we book a strategy call?",
    a: "Click 'Book Infrastructure Strategy Call' anywhere on this page to select a 30-minute slot directly on our calendar. You'll meet with a Principal Systems Architect for a live stack tear-down and receive a custom blueprint within 24 hours."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-white py-16 sm:py-24 text-neutral-900 border-t border-neutral-200">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Infrastructure Questions"
          description="Clear answers about our engineering process, guarantees, and technology stack."
        />

        {/* Accordion List with ScrollReveal */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3.5">
            {agencyFaqs.map((f, i) => (
              <ScrollReveal key={i} variant="card" staggerIndex={i} staggerStep={0.07}>
                <AccordionItem
                  value={`i${i}`}
                  className="rounded-lg border border-neutral-200 bg-white px-5 sm:px-6 transition duration-300 hover:border-[#ff7a00]/50 shadow-2xs"
                >
                  <AccordionTrigger className="py-4.5 text-left text-base font-semibold text-neutral-900 hover:no-underline hover:text-brand transition-colors cursor-pointer">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-neutral-600 leading-relaxed font-normal">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}