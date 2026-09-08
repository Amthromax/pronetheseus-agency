import { createFileRoute, Link } from "@tanstack/react-router";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { motion } from "motion/react";
import { 
  TrendingUp, Clock, ShieldCheck, Zap, ArrowRight, Building2, 
  Stethoscope, Wrench, Landmark, ShoppingBag, Check, Layers
} from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Proven System Results & Case Studies — Pronetheseus" },
      { name: "description", content: "Real problem-to-result breakdowns demonstrating how service businesses eliminate operational drag." },
      { property: "og:title", content: "Case Studies & Results — Pronetheseus" },
      { property: "og:description", content: "ROI, hours saved, and lead response benchmarks for service businesses." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const INDUSTRY_BENCHMARKS = [
  {
    icon: Wrench,
    industry: "Home Services & HVAC",
    avgRoi: "4.8x ROI",
    avgTimeSaved: "45+ hrs/month",
    speedToLead: "< 30 sec",
    topWorkflow: "After-Hours Voice AI Dispatch & Calendar Auto-Booking",
    bg: "bg-blue-50/50",
  },
  {
    icon: Stethoscope,
    industry: "Healthcare & Dental Practices",
    avgRoi: "3.5x ROI",
    avgTimeSaved: "38 hrs/month",
    speedToLead: "Instant SMS",
    topWorkflow: "2-Way Patient Confirmation & Automated No-Show Fill",
    bg: "bg-emerald-50/50",
  },
  {
    icon: Building2,
    industry: "Real Estate Brokerages",
    avgRoi: "5.2x ROI",
    avgTimeSaved: "52 hrs/month",
    speedToLead: "< 45 sec",
    topWorkflow: "Portal Lead WhatsApp Qualification & Tour Scheduler",
    bg: "bg-purple-50/50",
  },
  {
    icon: Landmark,
    industry: "Financial & Legal Services",
    avgRoi: "4.1x ROI",
    avgTimeSaved: "60+ hrs/month",
    speedToLead: "< 60 sec",
    topWorkflow: "Document Intake OCR & Automated Compliance Triage",
    bg: "bg-amber-50/50",
  },
];

function CaseStudiesPage() {
  return (
    <div className="bg-sandel text-neutral-900 min-h-screen font-sans pt-28 pb-20">
      {/* Hero Stats Header */}
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl font-normal tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Real Problem-to-Result Operations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-sans leading-relaxed">
            Explore how scaling businesses deploy autonomous AI infrastructure to cut response times, eliminate manual intake errors, and drive revenue growth.
          </p>
        </div>

        {/* Global Impact Summary Bar */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 sm:px-8 sm:py-7 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">$14.2M+</div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">Client Cost Savings</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 sm:px-8 sm:py-7 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">1.2M+</div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">Inbound Leads Qualified</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 sm:px-8 sm:py-7 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">&lt; 45s</div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">Average Speed-to-Lead</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] px-7 py-6 sm:px-8 sm:py-7 shadow-2xs"
          >
            <div className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">99.9%</div>
            <div className="mt-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">Uptime SLA Reliability</div>
          </motion.div>
        </div>
      </div>

      {/* Main Interactive Slider Showcase */}
      <Testimonials hideBorders className="mt-4" />

      {/* Industry Performance Benchmarks */}
      <section className="container-pad mx-auto mt-12 max-w-[1400px]">
        <div className="max-w-3xl mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">Industry Performance Breakdown</span>
          <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl">
            Average Outcomes Across Sectors
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans">
            Benchmark results achieved when replacing manual processes with specialized AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRY_BENCHMARKS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-[28px] border border-neutral-200/80 bg-[#f4f3ee] p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-white text-neutral-900 border border-neutral-200 shadow-2xs">
                        <Icon className="size-5 text-blue-600" />
                      </div>
                      <h3 className="font-sans text-lg font-bold text-neutral-900">{item.industry}</h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                      {item.avgRoi}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-neutral-300/60 py-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase text-neutral-500 block">Avg Time Saved</span>
                      <span className="text-base font-bold text-neutral-900 mt-0.5 block">{item.avgTimeSaved}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase text-neutral-500 block">Speed-to-Lead</span>
                      <span className="text-base font-bold text-neutral-900 mt-0.5 block">{item.speedToLead}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-mono font-bold uppercase text-neutral-500 block">Primary Deployed Engine</span>
                    <p className="text-xs sm:text-sm font-medium text-neutral-800 mt-1 leading-snug">
                      {item.topWorkflow}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-300/40 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-mono">14-Day Rapid Deployment</span>
                  <Link 
                    to="/how-it-works"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 font-sans"
                  >
                    <span>See Methodology</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Production Standard & Guarantee */}
      <section className="container-pad mx-auto mt-16 mb-16 sm:mb-24 max-w-[1400px]">
        <div className="rounded-[32px] sm:rounded-[40px] border border-neutral-200/80 bg-[#f4f3ee] p-8 sm:p-12 shadow-[0_12px_40px_rgb(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">Enterprise Standard</span>
              <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl">
                Built Around Your Existing Infrastructure
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
                We don't force your team to adopt new software. Our autonomous agents plug directly into your current CRM, phone systems, email providers, and databases with zero workflow disruption.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-neutral-800 font-sans">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-600" />
                  <span>HubSpot / Salesforce Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-600" />
                  <span>WhatsApp & Twilio API</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-600" />
                  <span>Custom Webhooks & n8n</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-3 justify-center">
              <Link
                to="/book"
                className="w-full text-center rounded-xl bg-neutral-900 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-black"
              >
                Request Free Automation Audit
              </Link>
              <Link
                to="/services"
                className="w-full text-center rounded-xl border border-neutral-300 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 shadow-2xs hover:bg-neutral-50"
              >
                View Revenue Engines
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}