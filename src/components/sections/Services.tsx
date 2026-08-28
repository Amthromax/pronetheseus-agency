import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  TrendingUp, 
  Bot, 
  Workflow, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from "lucide-react";

const SERVICE_CATEGORIES = [
  {
    id: "revenue-automation",
    title: "AI Revenue Automation",
    tagline: "Turn inbound traffic into qualified pipeline & booked appointments automatically.",
    icon: TrendingUp,
    badge: "Revenue Driver",
    iconBg: "bg-orange-500/10 text-orange-600 border-orange-500/20",
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
    badge: "24/7 Support",
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
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
    badge: "Ops Efficiency",
    iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
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
    badge: "Growth Engine",
    iconBg: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    services: [
      { name: "Lead nurturing", desc: "Automated multi-touch campaign cadences tailored by lead behavior" },
      { name: "Review requests", desc: "Automated post-service 5-star Google review collection flows" },
      { name: "Reactivation", desc: "Database reactivation campaigns to turn old contacts into bookings" },
      { name: "Reporting", desc: "Live client reporting dashboards updated 24/7 without slide decks" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-sandel py-8 text-neutral-900 sm:py-12 overflow-hidden">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Our Automation Services
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-sans max-w-xl mx-auto">
            Organized around clear business outcomes that drive revenue and streamline operations.
          </p>
        </div>

        {/* 4 Service Cards: Apple Design System (rounded-32px squircle, pill buttons) */}
        <div className="mt-6 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-3 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-5 md:pb-0 font-sans">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] border border-white/80 bg-sandel-card p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.09)] hover:border-neutral-300/80 transition-all duration-300 hover:-translate-y-1.5 shrink-0 w-[280px] xs:w-[310px] md:w-auto snap-center"
              >
                <div>
                  {/* Category Card Top Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-sans text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                      <Icon className="size-4 text-[#ff7a00]" />
                      <span>{cat.title}</span>
                    </div>
                    <span className="rounded-full bg-white/80 backdrop-blur-sm px-3 py-0.5 text-[10px] font-sans font-semibold tracking-wide uppercase text-neutral-600 border border-black/5 shadow-2xs">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-neutral-700 font-sans leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* List of Capabilities */}
                  <div className="mt-4 pt-3 border-t border-black/5 space-y-2">
                    {cat.services.map((item) => (
                      <div key={item.name} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#ff7a00] mt-0.5" />
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-neutral-900 inline font-sans">
                            {item.name}:{" "}
                          </span>
                          <span className="text-[11px] text-neutral-600 font-normal">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-1">
                  <Link
                    to="/book"
                    className="inline-flex w-full items-center justify-between rounded-full bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition duration-300 hover:bg-black shadow-sm"
                  >
                    <span>Explore {cat.title}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}