import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { PlusCircle } from "lucide-react";

const SYSTEM_FAQS = [
  {
    number: "1",
    q: "What kind of teams do you work with?",
    a: "Service businesses, agencies, and enterprise brands looking to scale their production, content operations, and revenue infrastructure seamlessly.",
  },
  {
    number: "2",
    q: "What services do you cover?",
    a: "We cover custom AI revenue engines, autonomous voice & chatbot agents, CRM automation pipelines, and operational workflow optimization.",
  },
  {
    number: "3",
    q: "How does pricing work?",
    a: "We operate on a transparent monthly subscription capacity starting from $5K, with clear deliverables and no hidden fees.",
  },
  {
    number: "4",
    q: "How fast do you deliver?",
    a: "Initial workflow deployments take 1 to 3 weeks depending on integration complexity.",
  },
  {
    number: "5",
    q: "Where is your team based?",
    a: "Our core architecture and engineering team operates globally with dedicated client success support across US & European time zones.",
  },
  {
    number: "6",
    q: "Can you work with agencies and studios?",
    a: "Yes! We partner directly with high-growth agencies to power their client infrastructure and backend AI capabilities.",
  },
  {
    number: "7",
    q: "What about revisions?",
    a: "Unlimited iterations while your subscription is active to guarantee everything runs with zero bottlenecks.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-white py-16 sm:py-24 text-neutral-900 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Top Section Header Divider Bar */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <span className="text-sm font-medium tracking-tight text-neutral-800 font-sans">
            /FAQs
          </span>
          <span className="text-sm font-medium text-neutral-400 font-sans">
            (08)
          </span>
        </div>

        {/* 2 Column FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-semibold text-neutral-900 tracking-tight leading-[1.1] font-sans max-w-xl"
              >
                Wondering How We Work?
              </motion.h2>

              <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-md font-sans">
                Answers to common questions about our process, services, and how we work.
              </p>
            </div>

            <div className="mt-8 sm:mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-[#f4f3ee] px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-200/70 transition shadow-2xs cursor-pointer font-sans"
              >
                <span>Contact us</span>
                <span className="text-sm font-normal">+</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Outer Container Box with Stacked White Cards */}
          <div className="lg:col-span-7">
            <div className="rounded-[26px] border border-neutral-200/90 bg-[#f4f3ee] p-2.5 sm:p-3 space-y-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <Accordion type="single" collapsible className="space-y-2">
                {SYSTEM_FAQS.map((f, i) => (
                  <motion.div
                    key={f.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                  >
                    <AccordionItem
                      value={`i${i}`}
                      className="rounded-[18px] sm:rounded-[20px] bg-white border border-neutral-200/80 px-4 sm:px-5 py-0.5 transition duration-200 hover:border-neutral-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-3.5 sm:py-4 text-left text-xs sm:text-sm font-bold text-neutral-900 cursor-pointer font-sans [&[data-state=open]>svg]:rotate-45">
                          <span className="leading-snug">
                            {f.number}. {f.q}
                          </span>
                          <PlusCircle className="size-4.5 text-neutral-800 shrink-0 transition-transform duration-200" />
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionContent className="pb-4 text-xs text-neutral-500 leading-relaxed font-normal font-sans">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}