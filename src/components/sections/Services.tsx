import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  TrendingUp, 
  Bot, 
  Workflow, 
  Rocket, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

const SERVICE_CATEGORIES = [
  {
    id: "revenue-automation",
    title: "AI Revenue Automation",
    tagline: "Turn inbound traffic into qualified pipeline & booked appointments automatically.",
    icon: TrendingUp,
    badge: "REVENUE DRIVER",
    services: [
      { name: "AI lead capture", desc: "Instantly capture leads across form fills, ads, and live chat" },
      { name: "Lead qualification", desc: "Autonomous AI scoring and budget/intent validation" },
      { name: "Automated follow-up", desc: "Multi-channel speed-to-lead response under 60 seconds" },
      { name: "Appointment booking", desc: "Sub-second calendar booking without back-and-forth emails" },
    ],
  },
  {
    id: "customer-service",
    title: "AI Customer Service",
    tagline: "Provide 24/7 intelligent assistance across every customer communication channel.",
    icon: Bot,
    badge: "24/7 SUPPORT",
    services: [
      { name: "Website AI agents", desc: "Custom-trained brand chatbots that resolve complex inquiries" },
      { name: "WhatsApp & SMS", desc: "Direct 2-way conversational support and transactional text messaging" },
      { name: "Email AI", desc: "Intelligent inbox triaging, draft generation, and auto-replies" },
      { name: "AI voice agents", desc: "Human-sounding inbound & outbound voice assistance for calls" },
    ],
  },
  {
    id: "operations",
    title: "AI Operations",
    tagline: "Streamline client onboarding and internal administrative workflows to eliminate manual drag.",
    icon: Workflow,
    badge: "OPS EFFICIENCY",
    services: [
      { name: "Client onboarding", desc: "Replace 2-week email back-and-forth with a 15-minute portal" },
      { name: "Internal workflows", desc: "Bi-directional sync across Slack, ClickUp, Notion & Linear" },
      { name: "Document processing", desc: "Automated PDF extraction, invoice matching, and parsing" },
      { name: "SLA notifications", desc: "Real-time Slack & email alerts for urgent operational items" },
    ],
  },
  {
    id: "growth-systems",
    title: "AI Growth Systems",
    tagline: "Maximize customer lifetime value, re-engage cold leads, and automate revenue reporting.",
    icon: Rocket,
    badge: "GROWTH ENGINE",
    services: [
      { name: "Lead nurturing", desc: "Automated multi-touch campaign cadences tailored by lead behavior" },
      { name: "Review requests", desc: "Automated post-service 5-star Google review collection flows" },
      { name: "Reactivation", desc: "Database reactivation campaigns to turn old contacts into bookings" },
      { name: "Reporting", desc: "Live client reporting dashboards updated 24/7 without slide decks" },
    ],
  },
];

const INCLUDED_FEATURES = [
  "Access to all automation & AI work types in one subscription",
  "Dedicated AI project manager and customer success",
  "Fast, defined turnaround times",
  "A shared task board to drop requests and track progress",
  "Unlimited revisions while work is active",
  "Built to work alongside your in-house team",
  "Support for multiple brands or products",
];

export function Services() {
  return (
    <section id="services" className="relative bg-white py-16 sm:py-24 text-neutral-900 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.12]"
          >
            Our Automation Services
          </motion.h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-xl mx-auto">
            Organized around clear business outcomes that drive revenue and streamline operations.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-[24px] bg-[#f4f3ee] border border-neutral-200/90 p-4.5 sm:p-5 flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition duration-300"
              >
                <div>
                  {/* Category Top Row */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-black/5">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 sm:size-4.5 text-neutral-900" />
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider text-neutral-600 border border-neutral-200/80 shadow-2xs">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-neutral-500 font-normal leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* List of Capabilities */}
                  <div className="mt-3.5 space-y-2 pt-2.5 border-t border-black/5">
                    {cat.services.map((item) => (
                      <div key={item.name} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 shrink-0 text-neutral-900 mt-0.5" />
                        <div className="text-xs leading-snug">
                          <strong className="font-bold text-neutral-900">{item.name}: </strong>
                          <span className="text-neutral-500 font-normal">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4.5">
                  <Link
                    to="/book"
                    className="inline-flex w-full items-center justify-between rounded-full bg-neutral-900 px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-black shadow-sm"
                  >
                    <span>Explore {cat.title}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subscription Pricing Banner Box */}
        <div className="relative">
          {/* Top Right Pricing Tag */}
          <div className="flex justify-end mb-2.5">
            <span className="rounded-full bg-neutral-900 text-white px-3.5 py-0.5 text-xs font-semibold tracking-tight shadow-2xs">
              Pricing
            </span>
          </div>

          {/* Split Subscription Card Box */}
          <div className="rounded-[24px] border-2 border-neutral-900 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl bg-white">
            
            {/* Left Half (Light Background) */}
            <div className="lg:col-span-6 p-5 sm:p-7 lg:p-8 bg-[#f7f7f3] border-b lg:border-b-0 lg:border-r border-neutral-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                    Subscription
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Amthromax®
                  </span>
                </div>

                <div className="space-y-3 text-xs text-neutral-500 font-normal leading-relaxed max-w-lg">
                  <p>
                    Amthromax operates as an AI &amp; automation system you can turn on.
                  </p>
                  <p>
                    Teams work with us at a defined monthly capacity, running requests through a steady, repeatable cadence.
                  </p>
                  <p>
                    Whether that starts with a focused scope or continues month to month, the structure stays the same. Clear ownership. Output that compounds instead of resetting. <strong className="text-neutral-900 font-bold">Plans typically start from $5K based on the level of capacity you need.</strong>
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-black transition shadow-sm cursor-pointer"
                >
                  Get started
                </Link>
              </div>
            </div>

            {/* Right Half (Solid Black Background) */}
            <div className="lg:col-span-6 p-5 sm:p-7 lg:p-8 bg-neutral-950 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Included in every plan
                </h3>
                <p className="mt-1.5 text-xs text-neutral-400 font-normal leading-relaxed mb-4">
                  Every engagement runs on the same operating system, same team, and delivery model, whether you start small or scale ongoing capacity.
                </p>

                <div className="space-y-2">
                  {INCLUDED_FEATURES.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <span className="size-1.5 rounded-full bg-neutral-400 shrink-0" />
                      <span className="text-xs font-medium text-neutral-200">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex items-center justify-between pt-4 border-t border-neutral-800">
                <span className="text-[11px] font-mono text-neutral-500">
                  Amthromax®
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-200 px-6 py-2.5 text-xs font-bold text-neutral-900 hover:bg-white transition shadow-sm cursor-pointer"
                >
                  Get started
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}