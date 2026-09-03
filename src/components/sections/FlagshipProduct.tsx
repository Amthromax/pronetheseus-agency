import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  Bot, 
  MessageSquare, 
  Database, 
  Star, 
  RotateCcw, 
  ArrowRight,
  CheckCircle2,
  Zap,
  Sliders
} from "lucide-react";

const ADDON_MODULES = [
  { 
    icon: Bot, 
    title: "AI Voice Agent", 
    desc: "24/7 inbound phone reception & outbound calling", 
    tag: "Voice AI",
    badgeBg: "bg-orange-500/10 text-orange-600 border-orange-200" 
  },
  { 
    icon: MessageSquare, 
    title: "WhatsApp Automation", 
    desc: "2-way chat support, instant quotes & media", 
    tag: "Messaging",
    badgeBg: "bg-sky-500/10 text-sky-700 border-sky-200" 
  },
  { 
    icon: Database, 
    title: "CRM Automation", 
    desc: "Bi-directional sync for HighLevel, HubSpot & Salesforce", 
    tag: "Pipeline",
    badgeBg: "bg-blue-500/10 text-blue-700 border-blue-200" 
  },
  { 
    icon: Star, 
    title: "Review Engine", 
    desc: "Automated post-service Google 5-star review collector", 
    tag: "Reputation",
    badgeBg: "bg-amber-500/10 text-amber-700 border-amber-200" 
  },
  { 
    icon: RotateCcw, 
    title: "Reactivation Bot", 
    desc: "Turn inactive CRM leads into active bookings", 
    tag: "Growth",
    badgeBg: "bg-purple-500/10 text-purple-700 border-purple-200" 
  },
];

export function FlagshipProduct() {
  return (
    <section id="flagship-product" className="relative bg-sandel py-10 sm:py-14 text-neutral-900 overflow-hidden">
      <div className="relative z-10 container-pad mx-auto max-w-[1440px]">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Pronetheseus AI Revenue Engine
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans max-w-2xl mx-auto leading-relaxed">
            The complete autonomous operating system for service businesses. Replaces fragmented tools with a single unified lead-to-customer automation infrastructure.
          </p>
        </div>



        {/* CORE vs ADD-ONS ARCHITECTURE */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12 items-stretch font-sans">
          
          {/* Left Column: Core System (Obsidian Dark High-Impact Card - Apple Superellipse) */}
          <div className="lg:col-span-7 rounded-[28px] sm:rounded-[34px] bg-neutral-900 text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-neutral-800">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-900 shadow-xs">
                  <Zap className="size-3 fill-current" />
                  CORE REVENUE SYSTEM
                </span>
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-white animate-pulse" />
                  Primary Infrastructure
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white">
                  AI Lead-to-Appointment System
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans max-w-xl">
                  Captures inbound leads instantly, qualifies prospect intent in under 60 seconds, logs deals to your CRM, and books qualified calls straight into your calendar.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-neutral-800/80">
                {[
                  "Multi-channel lead capture (web, phone, chat)",
                  "Sub-60s AI intent & budget qualification",
                  "Automated multi-touch follow-up cadences",
                  "2-way Google & Outlook calendar booking",
                  "Bi-directional CRM creation & deal sync",
                  "Unified WhatsApp, SMS & email engine",
                  "24/7 AI Voice reception & outbound calling",
                  "Automated Google reviews & lead reactivation",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-white shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-200 font-sans leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Performance Metrics Pill Bar */}
              <div className="mt-5 p-3 rounded-[18px] bg-neutral-800/60 border border-neutral-700/60 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="block font-sans text-sm sm:text-base font-bold text-white">&lt; 60s</span>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">Response Time</span>
                </div>
                <div className="border-x border-neutral-700/60 px-1">
                  <span className="block font-sans text-sm sm:text-base font-bold text-white">3.4x</span>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">Booking Rate</span>
                </div>
                <div>
                  <span className="block font-sans text-sm sm:text-base font-bold text-white">24/7</span>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">Coverage</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link to="/contact">
                <button className="w-full rounded-full bg-white hover:bg-neutral-100 text-neutral-900 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                  <span>Get Core Revenue Engine</span>
                  <ArrowRight className="size-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Modular Power Add-ons (Apple Superellipse) */}
          <div className="lg:col-span-5 rounded-[28px] sm:rounded-[34px] border border-neutral-200/90 bg-[#f4f3ee] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-black/5 pb-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white backdrop-blur-sm border border-black/10 font-mono text-[10px] font-bold text-neutral-800 uppercase tracking-wider shadow-2xs">
                  <Sliders className="size-3 text-neutral-900" />
                  MODULAR ADD-ONS
                </span>
                <span className="text-[11px] font-mono text-neutral-500">Plug &amp; Play</span>
              </div>

              <div className="mt-4">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                  Modular Power Add-ons
                </h3>
                <p className="mt-1 text-xs text-neutral-600 font-sans">
                  Expand your core revenue engine with specialized AI capabilities.
                </p>
              </div>

              {/* Module Cards */}
              <div className="mt-4 space-y-2.5">
                {ADDON_MODULES.map((addon) => {
                  const Icon = addon.icon;
                  return (
                    <div 
                      key={addon.title} 
                      className="group flex items-center justify-between p-3 rounded-[18px] bg-white border border-black/5 hover:border-neutral-300 hover:shadow-md transition-all duration-300 shadow-2xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="size-9 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Icon className="size-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-xs font-bold text-neutral-900 font-sans truncate">
                              {addon.title}
                            </h4>
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold border ${addon.badgeBg}`}>
                              {addon.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-600 font-sans truncate">
                            {addon.desc}
                          </p>
                        </div>
                      </div>

                      <ArrowRight className="size-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all shrink-0 ml-1.5" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-black/5">
              <Link 
                to="/contact" 
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-neutral-900 hover:text-black transition-colors py-1"
              >
                <span>CUSTOMIZE YOUR AUTOMATION STACK</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
