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
    <section id="agentic-applications" className="relative bg-[#FAFAFA] py-14 sm:py-20 text-neutral-900 overflow-hidden border-y border-neutral-200/80">
      <div className="container-pad mx-auto max-w-[1440px] relative z-10">
        
        {/* Main Top Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px] leading-[1.12]">
            <SplitText text="Autonomous AI Automation Systems for Enterprise Scale & Efficiency." />
          </h2>
        </div>

        {/* 3 Clean Showcase Application Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Pre-built Applications */}
          <ScrollReveal variant="card" staggerIndex={0}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveTab("PRE-BUILT")}
              className={`group flex flex-col justify-between min-h-[360px] rounded-lg border p-6 sm:p-7 bg-white transition-all duration-300 cursor-pointer ${
                activeTab === "PRE-BUILT"
                  ? "border-t-4 border-t-[#ff7a00] border-neutral-300 shadow-xl ring-1 ring-black/5"
                  : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                    Pre-Built AI Automations
                  </h3>
                  <div className="size-8 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-[#ff7a00] group-hover:text-white group-hover:border-[#ff7a00]">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
                <p className="mt-2.5 text-sm text-neutral-600 font-normal leading-relaxed">
                  Deploy battle-tested AI agents for Finance, IT, HR, E-Commerce, and Recruiting in minutes.
                </p>
              </div>

              {/* Graphic Mock Preview */}
              <div className="mt-6 rounded-md border border-neutral-200/80 bg-neutral-50/80 p-4 space-y-3 text-neutral-900 shadow-2xs">
                {/* Search Bar */}
                <div className="flex items-center gap-2 rounded-sm border border-neutral-200 bg-white px-3.5 py-2 shadow-2xs">
                  <Search className="size-4 text-neutral-400" />
                  <span className="text-sm font-semibold text-neutral-900">Finance & Sales Automation</span>
                </div>

                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider pt-0.5">
                  Matching applications
                </div>

                {/* Tags Grid with Pointer */}
                <div className="flex flex-wrap gap-1.5 relative">
                  <span className="rounded-sm border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs font-semibold text-white shadow-2xs relative">
                    Financial Operations
                    <MousePointer2 className="size-4 text-neutral-900 absolute -bottom-2 -right-1 fill-neutral-900" />
                  </span>
                  <span className="rounded-sm border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600">
                    ERP Integration
                  </span>
                  <span className="rounded-sm border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600">
                    Smart Triage
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Card 2: Application Accelerators */}
          <ScrollReveal variant="card" staggerIndex={1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveTab("ACCELERATORS")}
              className={`group flex flex-col justify-between min-h-[360px] rounded-lg border p-6 sm:p-7 bg-white transition-all duration-300 cursor-pointer ${
                activeTab === "ACCELERATORS"
                  ? "border-t-4 border-t-[#ff7a00] border-neutral-300 shadow-xl ring-1 ring-black/5"
                  : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                    Workflow Accelerators
                  </h3>
                  <div className="size-8 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-[#ff7a00] group-hover:text-white group-hover:border-[#ff7a00]">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  Leverage modular AI templates, custom API connectors, and automated logic flows.
                </p>
              </div>

              {/* Graphic Mock Stack */}
              <div className="mt-6 space-y-2 relative text-neutral-900">
                <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-2.5 opacity-60 transform scale-[0.98]">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-rose-400" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="rounded-md border border-neutral-200 bg-neutral-50 p-3.5 shadow-2xs relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="size-5 rounded-sm bg-[#ff7a00] text-white font-bold text-[9px] flex items-center justify-center">Hub</span>
                    <span className="size-5 rounded-sm bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">MS</span>
                    <span className="size-5 rounded-sm bg-neutral-900 text-white font-bold text-[9px] flex items-center justify-center">AI</span>
                  </div>
                  <div className="h-2 w-3/4 rounded-sm bg-neutral-200 mb-1" />
                  <div className="h-2 w-1/2 rounded-sm bg-neutral-200" />
                  <MousePointer2 className="size-4 text-neutral-900 absolute bottom-2 right-4 fill-neutral-900" />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Card 3: Tailored Applications */}
          <ScrollReveal variant="card" staggerIndex={2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveTab("TAILORED")}
              className={`group flex flex-col justify-between min-h-[360px] rounded-lg border p-6 sm:p-7 bg-white transition-all duration-300 cursor-pointer ${
                activeTab === "TAILORED"
                  ? "border-t-4 border-t-[#ff7a00] border-neutral-300 shadow-xl ring-1 ring-black/5"
                  : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                    Custom AI Agency Solutions
                  </h3>
                  <div className="size-8 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-[#ff7a00] group-hover:text-white group-hover:border-[#ff7a00]">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
                <p className="mt-2.5 text-sm text-neutral-600 font-normal leading-relaxed">
                  End-to-end bespoke AI agent development tailored specifically to your business operations.
                </p>
              </div>

              {/* Graphic Code Preview Window */}
              <div className="mt-6 flex flex-col items-center">
                <div className="w-full rounded-md border border-neutral-200 bg-neutral-900 p-4 font-mono text-xs leading-relaxed text-neutral-200 shadow-md">
                  <div className="flex items-center gap-3 text-neutral-500 select-none">
                    <span>1</span>
                    <span><span className="text-sky-400 font-semibold">def</span> <span className="text-amber-400 font-semibold">auto_reply</span>(email):</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-500 select-none pl-4">
                    <span>2</span>
                    <span><span className="text-sky-400 font-semibold">if</span> <span className="text-emerald-400">"invoice"</span> <span className="text-sky-400 font-semibold">in</span></span>
                  </div>
                </div>

                <span className="mt-3 rounded-sm border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-700 shadow-2xs">
                  CODE BUILDER
                </span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Sidebar & Content Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-6 lg:gap-8 pt-4">
          {/* Left Sidebar Navigation */}
          <ScrollReveal variant="card" className="flex flex-col space-y-2">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
              Select Category <span className="text-[10px]">▼</span>
            </div>

            <button
              onClick={() => setActiveTab("PRE-BUILT")}
              className={`w-full text-left rounded-md px-4 py-3 text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer ${
                activeTab === "PRE-BUILT"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <span>PRE-BUILT AUTOMATIONS</span>
              {activeTab === "PRE-BUILT" && <span className="size-2 rounded-full bg-[#ff7a00]" />}
            </button>

            <button
              onClick={() => setActiveTab("ACCELERATORS")}
              className={`w-full text-left rounded-md px-4 py-3 text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer ${
                activeTab === "ACCELERATORS"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <span>WORKFLOW ACCELERATORS</span>
              {activeTab === "ACCELERATORS" && <span className="size-2 rounded-full bg-[#ff7a00]" />}
            </button>

            <button
              onClick={() => setActiveTab("TAILORED")}
              className={`w-full text-left rounded-md px-4 py-3 text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer ${
                activeTab === "TAILORED"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <span>CUSTOM AI SOLUTIONS</span>
              {activeTab === "TAILORED" && <span className="size-2 rounded-full bg-[#ff7a00]" />}
            </button>

            <button
              onClick={() => setActiveTab("ARTEMIS")}
              className={`w-full text-left rounded-md px-4 py-3 text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer ${
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
              {activeTab === "ARTEMIS" && <span className="size-2 rounded-full bg-[#ff7a00]" />}
            </button>
          </ScrollReveal>

          {/* Right Main Section Content */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                  Enterprise AI Automation Systems
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-neutral-600 font-normal">
                  Turnkey autonomous AI agents custom-engineered to automate high-volume business workflows.
                </p>
              </div>

              {/* Category Quick Pills */}
              <div className="flex items-center gap-2 shrink-0 bg-white border border-neutral-200 p-1.5 rounded-md text-xs font-semibold shadow-2xs">
                <button
                  onClick={() => setCategoryFilter("ALL")}
                  className={`px-3.5 py-1.5 rounded-sm transition duration-200 cursor-pointer ${categoryFilter === "ALL" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  All (6)
                </button>
                <button
                  onClick={() => setCategoryFilter("CUSTOMER_SERVICE")}
                  className={`px-3.5 py-1.5 rounded-sm transition duration-200 cursor-pointer ${categoryFilter === "CUSTOMER_SERVICE" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  Customer Service
                </button>
                <button
                  onClick={() => setCategoryFilter("EMPLOYEE_PRODUCTIVITY")}
                  className={`px-3.5 py-1.5 rounded-sm transition duration-200 cursor-pointer ${categoryFilter === "EMPLOYEE_PRODUCTIVITY" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  Employee Productivity
                </button>
              </div>
            </div>

            {/* 2-Column Grid of Ultra-Clean Professional AI Applications Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Card 1: Banking */}
              {(categoryFilter === "ALL" || categoryFilter === "CUSTOMER_SERVICE") && (
                <ScrollReveal variant="card" staggerIndex={0}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between min-h-[430px] sm:min-h-[450px] rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                          Financial Operations Automation
                        </h4>
                        <span className="text-xs font-bold text-[#ff7a00] uppercase tracking-wider">
                          ENTERPRISE AUTOMATION
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 font-normal leading-relaxed">
                        Automate invoice processing, compliance checks, and ERP financial reconciliation.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-4 sm:p-5 text-sm font-sans shadow-inner overflow-hidden">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2.5">
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            o
                          </div>
                          <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed max-w-[85%] text-sm">
                            Hi Alex, invoice #INV-4092 ($1,250.00) is ready for automated approval & ERP logging.
                          </div>
                        </div>

                        <div className="flex items-center justify-end gap-2">
                          <div className="rounded-2xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-4 py-2.5 text-sm font-medium shadow-2xs">
                            Approve invoice and trigger payment disbursement.
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                            alt="Alex"
                            className="size-6 rounded-full object-cover shrink-0 border border-neutral-300"
                          />
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            o
                          </div>
                          <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 text-neutral-700 shadow-2xs leading-relaxed max-w-[85%] text-sm">
                            Approved! Payment logged in QuickBooks and confirmation sent to vendor.
                          </div>
                        </div>
                      </div>

                      {/* Progressive Glass Blur & Fade Overlay */}
                      <div
                        className="absolute left-0 right-0 bottom-0 h-[35%] pointer-events-none z-10 rounded-b-2xl"
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          background:
                            "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.25) 30%, rgba(245, 250, 255, 0.65) 70%, rgba(245, 250, 255, 0.95) 100%)",
                          maskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                        }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              )}

              {/* Card 2: Healthcare */}
              {(categoryFilter === "ALL" || categoryFilter === "CUSTOMER_SERVICE") && (
                <ScrollReveal variant="card" staggerIndex={1}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between min-h-[430px] sm:min-h-[450px] rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                          Intelligent Intake & Triage
                        </h4>
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          SMART TRIAGE
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 font-normal leading-relaxed">
                        Automate client intake, inquiry categorization, and smart priority routing 24/7.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-4 sm:p-5 text-sm font-sans shadow-inner overflow-hidden">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2.5">
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            o
                          </div>
                          <div className="space-y-2.5 max-w-[88%]">
                            <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed text-sm">
                              Welcome! What type of technical inquiry can I assist you with today?
                            </div>
                            <div className="flex gap-2 pl-1">
                              <button className="rounded-full bg-[#FF6B00] text-white px-4 py-1.5 text-xs font-semibold shadow-2xs">
                                API Integration
                              </button>
                              <button className="rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
                                Account Access
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-end gap-2">
                          <div className="rounded-2xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-4 py-2.5 text-sm font-medium shadow-2xs">
                            API Integration setup assistance
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                            alt="User"
                            className="size-6 rounded-full object-cover shrink-0 border border-neutral-300"
                          />
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            o
                          </div>
                          <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 text-neutral-700 shadow-2xs leading-relaxed max-w-[85%] text-sm">
                            Routing to Senior API Engineer AI agent. Diagnosing webhooks...
                          </div>
                        </div>
                      </div>

                      {/* Progressive Glass Blur & Fade Overlay */}
                      <div
                        className="absolute left-0 right-0 bottom-0 h-[35%] pointer-events-none z-10 rounded-b-2xl"
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          background:
                            "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.25) 30%, rgba(245, 250, 255, 0.65) 70%, rgba(245, 250, 255, 0.95) 100%)",
                          maskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                        }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              )}

              {/* Card 3: Retail */}
              {(categoryFilter === "ALL" || categoryFilter === "CUSTOMER_SERVICE") && (
                <ScrollReveal variant="card" staggerIndex={2}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between min-h-[430px] sm:min-h-[450px] rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                          E-Commerce & Sales Automation
                        </h4>
                        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                          SALES ACCELERATOR
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 font-normal leading-relaxed">
                        Deliver instant 24/7 product recommendations, cart recovery, and real-time order tracking.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-4 sm:p-5 text-sm font-sans shadow-inner overflow-hidden">
                      <div className="space-y-3">
                        <div className="flex items-center justify-end gap-2">
                          <div className="rounded-2xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-4 py-2.5 text-sm font-medium shadow-2xs">
                            I need high-performance server nodes for AI workloads.
                          </div>
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                            U
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            o
                          </div>
                          <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed max-w-[85%] text-sm">
                            Nvidia H100 Enterprise Node with 80GB HBM3 memory is available for instant setup.
                          </div>
                        </div>

                        <div className="flex gap-2 pl-7 pt-0.5">
                          <div className="rounded-xl border border-neutral-200 bg-white p-3 flex items-center gap-3 shrink-0 w-[240px] shadow-2xs">
                            <div className="size-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                              <svg className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div className="truncate text-xs">
                              <div className="font-bold text-neutral-900 truncate text-xs sm:text-sm">Nvidia H100 Node</div>
                              <div className="text-neutral-500 text-xs truncate">80GB HBM3 • Ready</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progressive Glass Blur & Fade Overlay */}
                      <div
                        className="absolute left-0 right-0 bottom-0 h-[35%] pointer-events-none z-10 rounded-b-2xl"
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          background:
                            "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.25) 30%, rgba(245, 250, 255, 0.65) 70%, rgba(245, 250, 255, 0.95) 100%)",
                          maskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                        }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              )}

              {/* Card 4: IT */}
              {(categoryFilter === "ALL" || categoryFilter === "CUSTOMER_SERVICE") && (
                <ScrollReveal variant="card" staggerIndex={3}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between min-h-[430px] sm:min-h-[450px] rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                          IT Infrastructure & Incident AI
                        </h4>
                        <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                          24/7 INFRASTRUCTURE
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 font-normal leading-relaxed">
                        Automate incident triage, password resets, and system health checks to reduce MTTR.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-4 sm:p-5 text-sm font-sans shadow-inner overflow-hidden">
                      <div className="space-y-3">
                        <div className="flex items-center justify-end gap-2">
                          <div className="rounded-2xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-4 py-2.5 text-sm font-medium shadow-2xs">
                            What is the status of system incident #INC-9821?
                          </div>
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                            U
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6B00] pl-7">
                          <span className="size-2 rounded-full bg-[#FF6B00]" />
                          <span>Routing to: "DevOps & Infrastructure AI" agent</span>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            o
                          </div>
                          <div className="rounded-2xl bg-white p-3 border border-neutral-200/80 text-neutral-800 shadow-2xs leading-relaxed max-w-[85%] text-sm">
                            <span className="font-bold text-neutral-900">Incident #INC-9821</span> — Memory leak auto-mitigated. All services healthy.
                          </div>
                        </div>
                      </div>

                      {/* Progressive Glass Blur & Fade Overlay */}
                      <div
                        className="absolute left-0 right-0 bottom-0 h-[35%] pointer-events-none z-10 rounded-b-2xl"
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          background:
                            "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.25) 30%, rgba(245, 250, 255, 0.65) 70%, rgba(245, 250, 255, 0.95) 100%)",
                          maskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                        }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              )}

              {/* Card 5: HR */}
              {(categoryFilter === "ALL" || categoryFilter === "EMPLOYEE_PRODUCTIVITY") && (
                <ScrollReveal variant="card" staggerIndex={4}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between min-h-[430px] sm:min-h-[450px] rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                          HR & Workforce Productivity
                        </h4>
                        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                          WORKFLOW ENGINE
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 font-normal leading-relaxed">
                        Streamline employee onboarding, policy access, and automated performance analytics.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-4 sm:p-5 text-xs grid grid-cols-2 gap-2.5 font-sans content-center shadow-inner overflow-hidden">
                      <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-2xs">
                        <div className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                          <span>🔔</span> Alerts
                        </div>
                        <div className="mt-1 text-sm font-semibold text-neutral-800 truncate">Onboarding Assigned</div>
                      </div>
                      <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-2xs">
                        <div className="text-xs font-semibold text-neutral-500">Offer acceptance</div>
                        <div className="mt-0.5 text-base font-bold text-neutral-900">
                          88% <span className="text-xs text-emerald-600 font-bold">↑ 12%</span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-orange-200 bg-[#FFF6F0] p-3.5 shadow-2xs">
                        <div className="text-xs font-semibold text-orange-700">Time to hire</div>
                        <div className="mt-0.5 text-base font-bold text-orange-900">14 Days</div>
                      </div>
                      <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-2xs">
                        <div className="text-xs font-semibold text-neutral-500">Active Workflows</div>
                        <div className="mt-0.5 text-base font-bold text-neutral-900">142</div>
                      </div>

                      {/* Progressive Glass Blur & Fade Overlay */}
                      <div
                        className="absolute left-0 right-0 bottom-0 h-[35%] pointer-events-none z-10 rounded-b-2xl"
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          background:
                            "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.25) 30%, rgba(245, 250, 255, 0.65) 70%, rgba(245, 250, 255, 0.95) 100%)",
                          maskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                        }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              )}

              {/* Card 6: Recruiting */}
              {(categoryFilter === "ALL" || categoryFilter === "EMPLOYEE_PRODUCTIVITY") && (
                <ScrollReveal variant="card" staggerIndex={5}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-between min-h-[430px] sm:min-h-[450px] rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                          Talent Acquisition & Hiring
                        </h4>
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          TALENT ENGINE
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 font-normal leading-relaxed">
                        Automate candidate sourcing, resume screening, and interview scheduling effortlessly.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 rounded-sm bg-neutral-900 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-[#ff7a00]"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="relative mt-5 rounded-2xl border border-neutral-200/80 bg-[#FAFAFC] p-4 sm:p-5 text-sm font-sans shadow-inner overflow-hidden">
                      <div className="space-y-3">
                        <div className="flex items-center justify-end gap-2">
                          <div className="rounded-2xl bg-[#FFF6F0] border border-[#FFE4D4] text-[#4A2408] px-4 py-2.5 text-sm font-medium shadow-2xs">
                            Generate candidate match summary for Senior AI Architect
                          </div>
                          <div className="size-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                            R
                          </div>
                        </div>

                        <div className="rounded-xl border border-neutral-200 bg-white p-3.5 text-xs space-y-1 shadow-2xs">
                          <div className="font-bold text-neutral-900 flex items-center gap-1 text-xs sm:text-sm">
                            <span>⚡</span> Enterprise AI Architect Pipeline
                          </div>
                          <div className="text-neutral-500 font-medium text-xs">
                            💼 18 candidates matched • 4 interview ready
                          </div>
                        </div>
                      </div>

                      {/* Progressive Glass Blur & Fade Overlay */}
                      <div
                        className="absolute left-0 right-0 bottom-0 h-[35%] pointer-events-none z-10 rounded-b-2xl"
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          background:
                            "linear-gradient(to bottom, rgba(245, 250, 255, 0), rgba(245, 250, 255, 0.25) 30%, rgba(245, 250, 255, 0.65) 70%, rgba(245, 250, 255, 0.95) 100%)",
                          maskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 20%, black 60%, black 100%)",
                        }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              )}
            </div>

            {/* Bottom EXPLORE MORE Button */}
            <div className="mt-10 flex items-center justify-between border-t border-neutral-200/70 pt-6">
              <ScrollReveal variant="button">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#ff7a00] hover:scale-[1.02]"
                >
                  <span>EXPLORE ALL APPLICATIONS</span>
                  <ArrowRight className="size-4" />
                </Link>
              </ScrollReveal>

              <div className="text-sm text-neutral-600 font-semibold hidden sm:block">
                Showing {categoryFilter === "ALL" ? "6 of 6" : categoryFilter === "CUSTOMER_SERVICE" ? "4 Customer Service" : "2 Employee Productivity"} AI Applications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
