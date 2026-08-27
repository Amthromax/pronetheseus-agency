import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  TrendingUp, 
  Bot, 
  Workflow, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Cpu,
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
      { name: "CRM automation", desc: "Auto-sync deal stages, notes, and activity history" },
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
      { name: "WhatsApp", desc: "Direct 2-way conversational support and transactional messaging" },
      { name: "SMS", desc: "Automated text updates, reminders, and quick answer triage" },
      { name: "Email", desc: "Intelligent inbox triaging, draft generation, and auto-replies" },
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
      { name: "Task automation", desc: "Trigger automatic task creation upon client milestone events" },
      { name: "Notifications", desc: "Real-time Slack & email alerts for urgent operational items" },
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
      { name: "Sales assistants", desc: "AI SDR co-pilots that prepare meeting briefs & follow-up drafts" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-white py-10 text-neutral-900 md:py-14 border-b border-neutral-200 overflow-hidden">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-700 border border-neutral-200 uppercase">
            <Layers className="size-3.5 text-[#ff7a00]" />
            Outcome-Driven Solutions
          </div>
          <h2 className="mt-3 font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Our Automation Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans max-w-2xl mx-auto">
            Organized around clear business outcomes that drive revenue, elevate customer experience, and streamline operations.
          </p>
        </div>

        {/* 4 Outcome-Driven Service Category Cards: Horizontal Scroll on Mobile ONLY, Grid on Desktop */}
        <div className="mt-8 sm:mt-10 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-6 md:pb-0">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#fafafa] p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-md shrink-0 w-[290px] xs:w-[320px] md:w-auto snap-center"
              >
                <div>
                  {/* Category Card Top Row */}
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-xl border font-mono text-xs font-semibold ${cat.iconBg}`}>
                      <Icon className="size-3.5" />
                      <span>{cat.title}</span>
                    </div>
                    <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                      {cat.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-700 font-sans leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* List of Outcomes & Capabilities */}
                  <div className="mt-4 pt-3.5 border-t border-neutral-200/70 space-y-2">
                    {cat.services.map((item) => (
                      <div key={item.name} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#ff7a00] mt-0.5" />
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-neutral-900 block font-sans">
                            {item.name}
                          </span>
                          <span className="text-[11px] sm:text-xs text-neutral-600 font-normal leading-tight">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-2">
                  <Link
                    to="/book"
                    className="inline-flex w-full items-center justify-between rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-medium text-white transition duration-200 hover:bg-black hover:scale-[1.01]"
                  >
                    <span>Explore {cat.title}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* UNDERNEATH CAPABILITY & PROOF FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-neutral-200/90 bg-neutral-50 p-5 text-center max-w-3xl mx-auto shadow-2xs"
        >
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1">
            <Cpu className="size-3.5 text-[#ff7a00]" />
            Technology Capability Proof
          </div>
          <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-900">
            Powered by advanced AI agents, workflow automation, APIs and custom integrations.
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-sans font-medium">
            Technology becomes the proof of capability, not the product.
          </p>
        </motion.div>
      </div>
    </section>
  );
}