import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <section className="relative overflow-hidden bg-neutral-950 text-white container-pad mx-auto max-w-[1400px] py-10 md:py-14 my-4 rounded-3xl border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)]">
      {/* Wave texture background image with Orange Hue Rotation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-all duration-700"
        style={{
          backgroundImage: "url('/850f23bca065e10b91701e39df67723f.jpg')",
          filter: "hue-rotate(-95deg) saturate(240%) brightness(1.05)",
        }}
      />
      {/* Orange Ambient Light Glow Overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/30 via-orange-600/15 to-transparent mix-blend-color-dodge" />

      {/* Dark vignette glass gradient overlay for high-contrast readability */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/75 to-neutral-950/90 backdrop-blur-[2px]" />

      <div className="relative z-10">
        <SectionHeading
          title="Frequently Asked Infrastructure Questions"
          description="Clear answers about our engineering process, guarantees, and technology stack."
        />
        <div className="mx-auto mt-7 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2.5">
            {agencyFaqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`} className="overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/80 backdrop-blur-xl px-5 sm:px-6 transition duration-300 hover:border-brand/50 hover:bg-neutral-900/90">
                <AccordionTrigger className="py-3.5 sm:py-4 text-left text-base font-semibold text-white hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-neutral-300 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}