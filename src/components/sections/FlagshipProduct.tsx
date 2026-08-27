import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  Sparkles, 
  Bot, 
  MessageSquare, 
  Database, 
  Star, 
  RotateCcw, 
  ArrowRight,
  Check
} from "lucide-react";

const LIFECYCLE_STEPS = [
  { name: "Inquiry", desc: "Form/phone" },
  { name: "AI Reply", desc: "Sub-60s" },
  { name: "Qualify", desc: "Intent check" },
  { name: "CRM", desc: "Auto sync" },
  { name: "Follow-up", desc: "Cadence" },
  { name: "Booking", desc: "Calendar" },
  { name: "Reminder", desc: "SMS/WA" },
  { name: "Customer", desc: "Onboarding" },
  { name: "Reviews", desc: "5-Star" },
];

const ADDON_MODULES = [
  { icon: Bot, title: "AI Voice Agent", desc: "24/7 inbound & outbound phone calls", color: "text-amber-700 bg-amber-500/10 border-amber-500/20" },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "2-way chat support & quotes", color: "text-emerald-700 bg-emerald-500/10 border-emerald-500/20" },
  { icon: Database, title: "CRM Automation", desc: "HubSpot, HighLevel, Zoho, Salesforce", color: "text-blue-700 bg-blue-500/10 border-blue-500/20" },
  { icon: Star, title: "Review Engine", desc: "Automated post-service Google reviews", color: "text-yellow-700 bg-yellow-500/10 border-yellow-500/20" },
  { icon: RotateCcw, title: "Reactivation Bot", desc: "Turn cold contacts into bookings", color: "text-purple-700 bg-purple-500/10 border-purple-500/20" },
];

export function FlagshipProduct() {
  return (
    <section id="flagship-product" className="relative bg-[#fafafa] py-10 sm:py-14 text-neutral-900 overflow-hidden border-y border-neutral-200">
      <div className="relative z-10 container-pad mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Pronetheseus AI Revenue Engine
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans max-w-2xl mx-auto leading-relaxed">
            The all-in-one autonomous system for service businesses. Replace fragmented tools with a single unified lead-to-customer automation infrastructure.
          </p>
        </div>

        {/* 9-STEP CUSTOMER LIFECYCLE FLOW */}
        <div className="mt-7 rounded-2xl border border-neutral-200/90 bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200/80">
            <div>
              <span className="text-[10px] font-sans font-semibold text-[#ff7a00] uppercase tracking-widest block">
                END-TO-END AUTOMATION FLOW
              </span>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
                The 9-Step Automated Customer Lifecycle
              </h3>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-sans text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              100% Autonomous
            </span>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-3 xs:grid-cols-5 lg:grid-cols-9 gap-2">
            {LIFECYCLE_STEPS.map((step, idx) => (
              <div key={step.name} className="relative flex flex-col items-center text-center p-2 rounded-lg bg-[#fafafa] border border-neutral-200/80 hover:border-neutral-300 transition-colors">
                <span className="flex size-5 items-center justify-center rounded-full bg-orange-500/10 text-[#ff7a00] text-[10px] font-mono font-bold mb-1 border border-orange-500/20">
                  {idx + 1}
                </span>
                <span className="text-xs font-semibold text-neutral-900 leading-tight font-sans">
                  {step.name}
                </span>
                <span className="text-[9px] text-neutral-500 mt-0.5 leading-tight">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CORE vs ADD-ONS ARCHITECTURE */}
        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          {/* Left Column: Core System (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border-2 border-[#ff7a00]/40 bg-white p-5 sm:p-6 shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#ff7a00] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                  CORE SYSTEM
                </span>
                <span className="text-xs font-mono text-neutral-500">Primary Product</span>
              </div>

              <h3 className="mt-4 font-sans text-xl sm:text-2xl font-bold text-neutral-900">
                AI Lead-to-Appointment System
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Handles inbound lead capture, 60-second AI qualification, CRM creation, and automated calendar scheduling out of the box.
              </p>

              <div className="mt-4 space-y-2 border-t border-neutral-200/80 pt-4">
                {[
                  "Sub-60s multi-channel speed-to-lead response",
                  "AI intent & budget qualification engine",
                  "Direct 2-way Google & Outlook calendar booking",
                  "Instant CRM deal creation and contact enrichment",
                  "Automated SMS & email appointment confirmations",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <div className="mt-0.5 grid size-4 place-items-center rounded-full bg-orange-500/10 text-[#ff7a00] shrink-0 border border-orange-500/20">
                      <Check className="size-3" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-800 font-sans">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-2">
              <Link to="/book">
                <button className="w-full rounded-xl bg-[#18181b] px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-black hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2">
                  <span>Get Core Revenue Engine</span>
                  <ArrowRight className="size-4 text-white" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Modular Add-ons (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 font-mono text-[10px] font-semibold uppercase tracking-wider border border-neutral-200">
                  ADD-ON MODULES
                </span>
                <span className="text-xs font-mono text-neutral-500">Expandable</span>
              </div>

              <h3 className="mt-4 font-sans text-xl font-bold text-neutral-900">
                Modular Power Add-ons
              </h3>

              <div className="mt-3 space-y-2">
                {ADDON_MODULES.map((addon) => {
                  const Icon = addon.icon;
                  return (
                    <div key={addon.title} className="flex items-center gap-2.5 p-2 rounded-lg bg-[#fafafa] border border-neutral-200/90 hover:bg-white hover:border-neutral-300 transition">
                      <div className={`p-1.5 rounded-md border ${addon.color} shrink-0`}>
                        <Icon className="size-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-semibold text-neutral-900 font-sans truncate">{addon.title}</h4>
                        <p className="text-[10px] text-neutral-500 font-sans truncate">{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-2">
              <Link to="/book" className="block text-center text-xs font-mono font-semibold text-[#ff7a00] hover:underline">
                Customize Your Automation Stack →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
