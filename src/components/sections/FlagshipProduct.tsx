import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  Cpu, 
  CheckCircle2, 
  Plus, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  MessageSquare, 
  Database, 
  Star, 
  RotateCcw, 
  Workflow, 
  BarChart3,
  CalendarCheck,
  Check
} from "lucide-react";

const LIFECYCLE_STEPS = [
  { name: "Customer Inquiry", desc: "Form, phone, or lead ad" },
  { name: "AI Response", desc: "Sub-60s instant reply" },
  { name: "Lead Qualification", desc: "AI intent & budget check" },
  { name: "CRM", desc: "Auto deal creation & sync" },
  { name: "Follow-up", desc: "Multi-channel cadence" },
  { name: "Appointment Booking", desc: "2-way calendar sync" },
  { name: "Reminder", desc: "SMS & WhatsApp alerts" },
  { name: "Customer", desc: "Smooth onboarding flow" },
  { name: "Review Request", desc: "5-star review collection" },
];

const ADDON_MODULES = [
  {
    icon: Bot,
    title: "AI Voice Agent",
    desc: "24/7 human-sounding inbound & outbound phone call handling",
    color: "text-amber-600 bg-amber-500/10 border-amber-500/20"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    desc: "Direct 2-way conversational support and quote distribution",
    color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    icon: Database,
    title: "CRM Automation",
    desc: "Deep integration with HubSpot, HighLevel, Zoho, & Salesforce",
    color: "text-blue-600 bg-blue-500/10 border-blue-500/20"
  },
  {
    icon: Star,
    title: "Review Automation",
    desc: "Automated post-service Google & Trustpilot review triggers",
    color: "text-yellow-600 bg-yellow-500/10 border-yellow-500/20"
  },
  {
    icon: RotateCcw,
    title: "Reactivation Engine",
    desc: "Turn cold contact databases into fresh appointments",
    color: "text-purple-600 bg-purple-500/10 border-purple-500/20"
  },
  {
    icon: Workflow,
    title: "Internal Operations",
    desc: "Automated client onboarding, task routing, & SLA alerts",
    color: "text-orange-600 bg-orange-500/10 border-orange-500/20"
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    desc: "24/7 live performance dashboards without manual slide decks",
    color: "text-indigo-600 bg-indigo-500/10 border-indigo-500/20"
  },
];

export function FlagshipProduct() {
  return (
    <section id="flagship-product" className="relative bg-[#0f0f11] py-20 text-white md:py-28 overflow-hidden border-y border-neutral-800">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#ff7a00]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container-pad mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ff7a00]/15 px-4 py-1 text-xs font-mono font-semibold text-[#ff8c24] border border-[#ff7a00]/30 uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            Flagship Product Architecture
          </div>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Pronetheseus AI Revenue Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans max-w-2xl mx-auto leading-relaxed">
            The all-in-one autonomous system built for service businesses. Replace fragmented tools with a single unified lead-to-customer automation infrastructure.
          </p>
        </div>

        {/* 9-STEP CUSTOMER LIFECYCLE FLOW */}
        <div className="mt-14 rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono font-semibold text-[#ff8c24] uppercase tracking-widest block">
                END-TO-END AUTOMATION FLOW
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mt-1">
                The 9-Step Automated Customer Lifecycle
              </h3>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Autonomous
            </span>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {LIFECYCLE_STEPS.map((step, idx) => (
              <div key={step.name} className="relative flex flex-col items-center text-center p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#ff7a00]/20 text-[#ff8c24] text-xs font-mono font-bold mb-2 border border-[#ff7a00]/30">
                  {idx + 1}
                </span>
                <span className="text-xs font-semibold text-white leading-tight font-sans">
                  {step.name}
                </span>
                <span className="text-[10px] text-neutral-400 mt-1 leading-snug">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CORE vs ADD-ONS ARCHITECTURE */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Core System (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-[#ff7a00]/30 bg-gradient-to-b from-[#ff7a00]/10 via-neutral-900/90 to-neutral-950 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#ff7a00] text-black font-mono text-xs font-bold uppercase tracking-wider">
                  CORE SYSTEM
                </span>
                <span className="text-xs font-mono text-neutral-400">Primary Product</span>
              </div>

              <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-normal text-white">
                AI Lead-to-Appointment System
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                The core foundation of Pronetheseus. Handles inbound lead capture, 60-second AI qualification, CRM creation, and automated calendar scheduling out of the box.
              </p>

              <div className="mt-8 space-y-3.5 border-t border-neutral-800 pt-6">
                {[
                  "Sub-60s multi-channel speed-to-lead response",
                  "AI intent & budget qualification engine",
                  "Direct 2-way Google & Outlook calendar booking",
                  "Instant CRM deal creation and contact enrichment",
                  "Automated SMS & email appointment confirmations",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 grid size-5 place-items-center rounded-full bg-[#ff7a00]/20 text-[#ff8c24]">
                      <Check className="size-3.5" />
                    </div>
                    <span className="text-sm font-medium text-neutral-200 font-sans">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link to="/book">
                <button className="w-full rounded-xl bg-[#ff7a00] px-6 py-4 text-sm font-semibold text-black shadow-lg transition-all duration-200 hover:bg-[#ff8c24] hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2">
                  <span>Get Core Revenue Engine</span>
                  <ArrowRight className="size-4 text-black" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Modular Add-ons (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 font-mono text-xs font-semibold uppercase tracking-wider border border-neutral-700">
                  ADD-ON MODULES
                </span>
                <span className="text-xs font-mono text-neutral-400">Expandable</span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-normal text-white">
                Modular Power Add-ons
              </h3>
              <p className="mt-2 text-sm text-neutral-400 font-sans">
                Plug in specialized modules as your business scales:
              </p>

              <div className="mt-6 space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {ADDON_MODULES.map((addon) => {
                  const Icon = addon.icon;
                  return (
                    <div key={addon.title} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/90 hover:border-neutral-700 transition">
                      <div className={`p-2 rounded-lg border ${addon.color} shrink-0 mt-0.5`}>
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white font-sans">{addon.title}</h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5 font-sans leading-snug">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-2">
              <Link to="/book" className="block text-center text-xs font-mono text-[#ff8c24] hover:underline">
                Customize Your Automation Stack →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
