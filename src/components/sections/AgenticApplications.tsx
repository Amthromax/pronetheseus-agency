import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";
import { motion } from "motion/react";
import { ArrowRight, Search, MousePointer2 } from "lucide-react";

type AppTab = "PRE-BUILT" | "ACCELERATORS" | "TAILORED" | "ARTEMIS";
type CategoryFilter = "ALL" | "CUSTOMER_SERVICE" | "EMPLOYEE_PRODUCTIVITY";

export function AgenticApplications() {
  const [activeTab, setActiveTab] = useState<AppTab>("PRE-BUILT");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("ALL");

  return (
    <section id="agentic-applications" className="relative bg-sandel py-10 sm:py-16 text-neutral-900 overflow-hidden">
      <div className="container-pad mx-auto max-w-[1440px] relative z-10">
        
        {/* Main Top Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px] leading-[1.12]">
            <SplitText text="Proven AI Automation Systems Built for Business Growth." />
          </h2>
        </div>

        {/* 3 Clean Showcase Application Category Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 mb-8 sm:mb-12 md:pb-0">
          {/* Card 1: Pre-built Applications */}
          <div className="shrink-0 w-[280px] xs:w-[310px] md:w-auto snap-center flex flex-col">
            <ScrollReveal variant="card" staggerIndex={0} className="h-full w-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveTab("PRE-BUILT")}
                className={`group flex flex-col justify-between h-full min-h-[340px] rounded-lg border p-5 sm:p-7 bg-sandel-card transition-all duration-300 cursor-pointer ${
                  activeTab === "PRE-BUILT"
                    ? "border-t-4 border-t-[#ff7a00] border-neutral-300 shadow-xl ring-1 ring-black/5"
                    : "border-t-2 border-t-transparent border-sandel-border shadow-sm hover:border-neutral-400 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                      Pre-Built Revenue Engines
                    </h3>
                    <div className="size-8 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-[#ff7a00] group-hover:text-white group-hover:border-[#ff7a00]">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    Deploy turnkey AI agents for lead response, customer support, booking, and reviews in days.
                  </p>
                </div>

                {/* Graphic Mock Preview */}
                <div className="mt-6 rounded-md border border-neutral-200/80 bg-neutral-50/80 p-4 space-y-3 text-neutral-900 shadow-2xs">
                  <div className="flex items-center gap-2 rounded-sm border border-neutral-200 bg-white px-3.5 py-2 shadow-2xs">
                    <Search className="size-4 text-neutral-400" />
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">Speed-to-Lead & Follow-up</span>
                  </div>

                  <div className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider pt-0.5">
                    Active System Modules
                  </div>

                  <div className="flex flex-wrap gap-1.5 relative">
                    <span className="rounded-sm border border-neutral-900 bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs relative">
                      Instant SMS Response
                      <MousePointer2 className="size-3.5 text-neutral-900 absolute -bottom-2 -right-1 fill-neutral-900" />
                    </span>
                    <span className="rounded-sm border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-600">
                      CRM Sync
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Card 2: Application Accelerators */}
          <div className="shrink-0 w-[280px] xs:w-[310px] md:w-auto snap-center flex flex-col">
            <ScrollReveal variant="card" staggerIndex={1} className="h-full w-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveTab("ACCELERATORS")}
                className={`group flex flex-col justify-between h-full min-h-[340px] rounded-lg border p-5 sm:p-7 bg-white transition-all duration-300 cursor-pointer ${
                  activeTab === "ACCELERATORS"
                    ? "border-t-4 border-t-[#ff7a00] border-neutral-300 shadow-xl ring-1 ring-black/5"
                    : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                      Workflow Connectors
                    </h3>
                    <div className="size-8 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-[#ff7a00] group-hover:text-white group-hover:border-[#ff7a00]">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    Bi-directional sync between your CRM, calendar, Slack, WhatsApp, and email platforms.
                  </p>
                </div>

                <div className="mt-6 space-y-2 relative text-neutral-900">
                  <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-2.5 opacity-60 transform scale-[0.98]">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-rose-400" />
                      <span className="size-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="rounded-md border border-neutral-200 bg-neutral-50 p-3.5 shadow-2xs relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="size-5 rounded-sm bg-[#ff7a00] text-white font-bold text-[9px] flex items-center justify-center">CRM</span>
                      <span className="size-5 rounded-sm bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">SMS</span>
                      <span className="size-5 rounded-sm bg-neutral-900 text-white font-bold text-[9px] flex items-center justify-center">AI</span>
                    </div>
                    <div className="h-2 w-3/4 rounded-sm bg-neutral-200 mb-1" />
                    <div className="h-2 w-1/2 rounded-sm bg-neutral-200" />
                    <MousePointer2 className="size-4 text-neutral-900 absolute bottom-2 right-4 fill-neutral-900" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Card 3: Tailored Applications */}
          <div className="shrink-0 w-[280px] xs:w-[310px] md:w-auto snap-center flex flex-col">
            <ScrollReveal variant="card" staggerIndex={2} className="h-full w-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveTab("TAILORED")}
                className={`group flex flex-col justify-between h-full min-h-[340px] rounded-lg border p-5 sm:p-7 bg-white transition-all duration-300 cursor-pointer ${
                  activeTab === "TAILORED"
                    ? "border-t-4 border-t-[#ff7a00] border-neutral-300 shadow-xl ring-1 ring-black/5"
                    : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                      Custom AI Solutions
                    </h3>
                    <div className="size-8 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-[#ff7a00] group-hover:text-white group-hover:border-[#ff7a00]">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    Custom-built AI workflows engineered around your specific agency or business operations.
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div className="w-full rounded-md border border-neutral-200 bg-neutral-900 p-4 font-mono text-xs leading-relaxed text-neutral-200 shadow-md">
                    <div className="flex items-center gap-3 text-neutral-500 select-none">
                      <span>1</span>
                      <span><span className="text-sky-400 font-semibold">def</span> <span className="text-amber-400 font-semibold">qualify_lead</span>(inquiry):</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-500 select-none pl-4">
                      <span>2</span>
                      <span><span className="text-sky-400 font-semibold">if</span> <span className="text-emerald-400">"booking"</span> <span className="text-sky-400 font-semibold">in</span></span>
                    </div>
                  </div>

                  <span className="mt-3 rounded-sm border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-700 shadow-2xs">
                    CUSTOM SYSTEM
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Sidebar & Content Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-6 lg:gap-8 pt-4">
          {/* Left Sidebar Navigation */}
          <ScrollReveal variant="card" className="flex flex-row overflow-x-auto snap-x scrollbar-none pb-2 gap-2 lg:flex-col lg:space-y-2 lg:gap-0 lg:pb-0">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1.5 flex items-center gap-1 shrink-0 lg:shrink">
              Select Category <span className="text-[10px]">▼</span>
            </div>

            <button
              onClick={() => setActiveTab("PRE-BUILT")}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-md px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "PRE-BUILT"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <span>PRE-BUILT AUTOMATIONS</span>
              {activeTab === "PRE-BUILT" && <span className="size-2 rounded-full bg-[#ff7a00] ml-2" />}
            </button>

            <button
              onClick={() => setActiveTab("ACCELERATORS")}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-md px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "ACCELERATORS"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <span>WORKFLOW ACCELERATORS</span>
              {activeTab === "ACCELERATORS" && <span className="size-2 rounded-full bg-[#ff7a00] ml-2" />}
            </button>

            <button
              onClick={() => setActiveTab("TAILORED")}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-md px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "TAILORED"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <span>CUSTOM AI SOLUTIONS</span>
              {activeTab === "TAILORED" && <span className="size-2 rounded-full bg-[#ff7a00] ml-2" />}
            </button>

            <button
              onClick={() => setActiveTab("ARTEMIS")}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-md px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "ARTEMIS"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <div className="flex items-center">
                <span>AMTHROMAX AI ENGINE</span>
                <span className="ml-2 rounded-sm bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-normal">
                  NEW
                </span>
              </div>
              {activeTab === "ARTEMIS" && <span className="size-2 rounded-full bg-[#ff7a00] ml-2" />}
            </button>
          </ScrollReveal>

          {/* Right Main Section Content */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                  Ready-to-Deploy AI Systems
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-normal">
                  Custom-engineered AI agents built to handle high-volume customer & revenue workflows.
                </p>
              </div>

              {/* Category Quick Pills */}
              <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto scrollbar-none bg-white border border-neutral-200 p-1 rounded-md text-xs font-semibold shadow-2xs">
                <button
                  onClick={() => setCategoryFilter("ALL")}
                  className={`px-3 py-1 rounded-sm transition duration-200 cursor-pointer whitespace-nowrap ${categoryFilter === "ALL" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  All (4)
                </button>
                <button
                  onClick={() => setCategoryFilter("CUSTOMER_SERVICE")}
                  className={`px-3 py-1 rounded-sm transition duration-200 cursor-pointer whitespace-nowrap ${categoryFilter === "CUSTOMER_SERVICE" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  Lead & Customer AI
                </button>
                <button
                  onClick={() => setCategoryFilter("EMPLOYEE_PRODUCTIVITY")}
                  className={`px-3 py-1 rounded-sm transition duration-200 cursor-pointer whitespace-nowrap ${categoryFilter === "EMPLOYEE_PRODUCTIVITY" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  Ops & Revenue
                </button>
              </div>
            </div>

            {/* 2-Column Grid of Ultra-Clean Professional AI Applications Boxes */}
            <div className="mt-6 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-6 md:pb-0">
              {/* Card 1: Speed to lead */}
              {(categoryFilter === "ALL" || categoryFilter === "CUSTOMER_SERVICE") && (
                <div className="shrink-0 w-[290px] xs:w-[320px] md:w-auto snap-center flex flex-col">
                  <ScrollReveal variant="card" staggerIndex={0} className="h-full w-full">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-lg bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                            Instant Speed-to-Lead Agent
                          </h4>
                          <span className="text-[10px] sm:text-xs font-bold text-[#ff7a00] uppercase tracking-wider">
                            REVENUE ENGINE
                          </span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                          Respond to form fills, ads, and missed calls in under 60 seconds via SMS and WhatsApp.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <Link
                            to="/book"
                            className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                          >
                            <span>GET THIS SYSTEM</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
                        <div className="space-y-2.5">
                          <div className="flex items-start gap-2">
                            <div className="size-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              o
                            </div>
                            <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed max-w-[88%] text-xs">
                              Hi Alex! Thanks for requesting a consultation quote. I can book your appointment right now.
                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-2">
                            <div className="rounded-xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-3 py-2 text-xs font-medium shadow-2xs">
                              Awesome, is tomorrow at 2 PM open?
                            </div>
                            <img
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                              alt="Alex"
                              className="size-5 rounded-full object-cover shrink-0 border border-neutral-300"
                            />
                          </div>

                          <div className="flex items-start gap-2">
                            <div className="size-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              o
                            </div>
                            <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 text-neutral-700 shadow-2xs leading-relaxed max-w-[88%] text-xs">
                              Confirmed! Tomorrow at 2:00 PM is locked in. Calendar invite sent!
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute left-0 right-0 bottom-0 h-[30%] pointer-events-none z-10 rounded-b-2xl"
                          style={{
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            background:
                              "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.7) 60%, rgba(245, 250, 255, 0.95) 100%)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              )}

              {/* Card 2: Smart Triage */}
              {(categoryFilter === "ALL" || categoryFilter === "CUSTOMER_SERVICE") && (
                <div className="shrink-0 w-[290px] xs:w-[320px] md:w-auto snap-center flex flex-col">
                  <ScrollReveal variant="card" staggerIndex={1} className="h-full w-full">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-lg bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                            Smart Intake & Calendar Booking
                          </h4>
                          <span className="text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider">
                            SCHEDULING
                          </span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                          Qualify customer budget and timeline before placing appointments directly onto your calendar.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <Link
                            to="/book"
                            className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                          >
                            <span>GET THIS SYSTEM</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
                        <div className="space-y-2.5">
                          <div className="flex items-start gap-2">
                            <div className="size-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              o
                            </div>
                            <div className="space-y-2 max-w-[90%]">
                              <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed text-xs">
                                Welcome! What service are you looking to automate today?
                              </div>
                              <div className="flex gap-1.5 pl-1">
                                <button className="rounded-full bg-[#FF6B00] text-white px-3 py-1 text-[10px] font-semibold shadow-2xs">
                                  Lead Capture & Booking
                                </button>
                                <button className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[10px] font-medium text-neutral-600">
                                  Customer Support Bot
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-2">
                            <div className="rounded-xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-3 py-2 text-xs font-medium shadow-2xs">
                              Lead Capture & Booking system
                            </div>
                            <img
                              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                              alt="User"
                              className="size-5 rounded-full object-cover shrink-0 border border-neutral-300"
                            />
                          </div>
                        </div>

                        <div
                          className="absolute left-0 right-0 bottom-0 h-[30%] pointer-events-none z-10 rounded-b-2xl"
                          style={{
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            background:
                              "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.7) 60%, rgba(245, 250, 255, 0.95) 100%)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              )}

              {/* Card 3: 24/7 AI Agent */}
              {(categoryFilter === "ALL" || categoryFilter === "CUSTOMER_SERVICE") && (
                <div className="shrink-0 w-[290px] xs:w-[320px] md:w-auto snap-center flex flex-col">
                  <ScrollReveal variant="card" staggerIndex={2} className="h-full w-full">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-lg bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                            24/7 Customer Service Agent
                          </h4>
                          <span className="text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-wider">
                            24/7 SUPPORT
                          </span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                          Provide instant 24/7 answers, order status updates, and service triage across web and SMS.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <Link
                            to="/book"
                            className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                          >
                            <span>GET THIS SYSTEM</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-end gap-2">
                            <div className="rounded-xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-3 py-2 text-xs font-medium shadow-2xs">
                              What are your weekend service hours?
                            </div>
                            <div className="size-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                              U
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <div className="size-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              o
                            </div>
                            <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed max-w-[88%] text-xs">
                              We offer 24/7 emergency scheduling! Regular appointments are available Sat 8am-4pm.
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute left-0 right-0 bottom-0 h-[30%] pointer-events-none z-10 rounded-b-2xl"
                          style={{
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            background:
                              "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.7) 60%, rgba(245, 250, 255, 0.95) 100%)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              )}

              {/* Card 4: Automated Onboarding */}
              {(categoryFilter === "ALL" || categoryFilter === "EMPLOYEE_PRODUCTIVITY") && (
                <div className="shrink-0 w-[290px] xs:w-[320px] md:w-auto snap-center flex flex-col">
                  <ScrollReveal variant="card" staggerIndex={3} className="h-full w-full">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-lg bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                            Automated Client Onboarding
                          </h4>
                          <span className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wider">
                            CLIENT PORTAL
                          </span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                          Replace 2-week email drag with a 15-minute intake portal, document collection, and contract flow.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <Link
                            to="/book"
                            className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                          >
                            <span>GET THIS SYSTEM</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-end gap-2">
                            <div className="rounded-xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-3 py-2 text-xs font-medium shadow-2xs">
                              Onboarding intake submitted!
                            </div>
                            <div className="size-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                              U
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <div className="size-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              o
                            </div>
                            <div className="rounded-xl bg-white p-2.5 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed max-w-[88%] text-xs">
                              Project board created, Slack channel invited, and welcome email sent!
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute left-0 right-0 bottom-0 h-[30%] pointer-events-none z-10 rounded-b-2xl"
                          style={{
                            backdropFilter: "blur(6px)",
                            WebkitBackdropFilter: "blur(6px)",
                            background:
                              "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.7) 60%, rgba(245, 250, 255, 0.95) 100%)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              )}
            </div>

            {/* Bottom EXPLORE MORE Button */}
            <div className="mt-8 flex items-center justify-between border-t border-neutral-200/70 pt-6">
              <ScrollReveal variant="button">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#ff7a00] hover:scale-[1.02]"
                >
                  <span>EXPLORE ALL AUTOMATIONS</span>
                  <ArrowRight className="size-4" />
                </Link>
              </ScrollReveal>

              <div className="text-xs sm:text-sm text-neutral-600 font-semibold hidden sm:block">
                Showing {categoryFilter === "ALL" ? "4 of 4" : categoryFilter === "CUSTOMER_SERVICE" ? "3 Customer AI" : "1 Ops & Revenue"} Automation Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
