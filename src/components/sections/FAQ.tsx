import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { HelpCircle } from "lucide-react";

const SYSTEM_FAQS = [
  {
    q: "What businesses do you work with?",
    a: "Service businesses and SMBs with repetitive customer, sales and administrative processes."
  },
  {
    q: "Do you replace employees?",
    a: "No. We automate repetitive work so your team can focus on higher-value work."
  },
  {
    q: "Can you integrate with our existing CRM?",
    a: "Yes, where technically supported."
  },
  {
    q: "How long does implementation take?",
    a: "Depends on complexity; simple workflows can be implemented much faster than full operational systems."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes."
  },
  {
    q: "Can you build custom AI agents?",
    a: "Yes."
  },
  {
    q: "What happens after implementation?",
    a: "We monitor, optimize and expand the system as needed."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-sandel py-10 sm:py-14 text-neutral-900">
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sandel-card px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 border border-sandel-border uppercase">
            <HelpCircle className="size-3.5 text-[#ff7a00]" />
            Frequently Asked Questions
          </div>
          <h2 className="mt-3 font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans max-w-xl mx-auto">
            Clear, honest answers about our automation services, CRM integrations, and ongoing support.
          </p>
        </div>

        {/* Accordion List with ScrollReveal */}
        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2.5">
            {SYSTEM_FAQS.map((f, i) => (
              <ScrollReveal key={i} variant="card" staggerIndex={i} staggerStep={0.04}>
                <AccordionItem
                  value={`i${i}`}
                  className="rounded-2xl border border-sandel-border bg-sandel-card px-5 sm:px-6 transition duration-300 hover:border-neutral-400 hover:bg-[#FFFBF5] shadow-2xs"
                >
                  <AccordionTrigger className="py-4 text-left text-sm sm:text-base font-semibold text-neutral-900 hover:no-underline hover:text-[#ff7a00] transition-colors cursor-pointer font-sans">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal font-sans">
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