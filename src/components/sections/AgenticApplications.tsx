import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";
import { motion, useInView, useReducedMotion, type Transition } from "motion/react";
import { ArrowRight, Search, MousePointer2 } from "lucide-react";
import { RollingText } from "@/components/ui/rolling-text";

const CHIP_LOOP: Transition = { duration: 4.4, times: [0, 0.38, 0.5, 0.88, 1], repeat: Infinity, ease: "easeInOut" };

/** Cycles a module chip between its active (dark) and idle (light) look. */
const chipCycle = (idleFirst: boolean) => {
  const dark = ["#171717", "#171717", "#ffffff", "#ffffff", "#171717"];
  const light = ["#ffffff", "#ffffff", "#171717", "#171717", "#ffffff"];
  const darkText = ["#ffffff", "#ffffff", "#525252", "#525252", "#ffffff"];
  const lightText = ["#525252", "#525252", "#ffffff", "#ffffff", "#525252"];
  const darkBorder = ["#171717", "#171717", "#e5e5e5", "#e5e5e5", "#171717"];
  const lightBorder = ["#e5e5e5", "#e5e5e5", "#171717", "#171717", "#e5e5e5"];
  return {
    backgroundColor: idleFirst ? light : dark,
    color: idleFirst ? lightText : darkText,
    borderColor: idleFirst ? lightBorder : darkBorder,
  };
};

const CARET = { opacity: [1, 1, 0, 0, 1] };
const CARET_LOOP: Transition = { duration: 1.1, times: [0, 0.45, 0.5, 0.95, 1], repeat: Infinity };

type AppTab = "PRE-BUILT" | "ACCELERATORS" | "TAILORED" | "ARTEMIS";
type CategoryFilter = "ALL" | "CUSTOMER_SERVICE" | "EMPLOYEE_PRODUCTIVITY";

export function AgenticApplications() {
  const [activeTab, setActiveTab] = useState<AppTab>("PRE-BUILT");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("ALL");

  // The card mock-ups loop forever, so only run them while they are on screen
  // and never when the visitor has asked for reduced motion.
  const mocksRef = useRef<HTMLDivElement>(null);
  const mocksInView = useInView(mocksRef, { margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const live = !reduceMotion && mocksInView;

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
        <div ref={mocksRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 mb-8 sm:mb-12 md:pb-0">
          {/* Card 1: Pre-built Applications */}
          <div className="shrink-0 w-[280px] xs:w-[310px] md:w-auto snap-center flex flex-col">
            <ScrollReveal variant="card" staggerIndex={0} className="h-full w-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveTab("PRE-BUILT")}
                className={`group flex flex-col justify-between h-full min-h-[340px] rounded-2xl border p-5 sm:p-7 bg-[#f4f3ee] transition-all duration-300 cursor-pointer ${
                  activeTab === "PRE-BUILT"
                    ? "border-t-4 border-t-neutral-900 border-neutral-300 shadow-xl ring-1 ring-black/5"
                    : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-400 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-900 transition-colors">
                      Pre-Built Revenue Engines
                    </h3>
                    <div className="size-8 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    Deploy turnkey AI agents for lead response, customer support, booking, and reviews in days.
                  </p>
                </div>

                {/* Graphic Mock Preview */}
                <div className="mt-6 rounded-xl border border-neutral-200/80 bg-white/80 p-4 space-y-3 text-neutral-900 shadow-2xs">
                  <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2 shadow-2xs">
                    <Search className="size-4 text-neutral-400" />
                    <span className="text-xs sm:text-sm font-semibold text-neutral-900">Speed-to-Lead & Follow-up</span>
                    <motion.span
                      aria-hidden
                      className="ml-auto h-3.5 w-px shrink-0 bg-neutral-900"
                      animate={live ? CARET : undefined}
                      transition={CARET_LOOP}
                    />
                  </div>

                  <div className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider pt-0.5">
                    Active System Modules
                  </div>

                  <div className="flex flex-wrap gap-1.5 relative">
                    <motion.span
                      className="rounded-md border border-neutral-900 bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs relative"
                      animate={live ? chipCycle(false) : undefined}
                      transition={CHIP_LOOP}
                    >
                      Instant SMS Response
                      <motion.span
                        aria-hidden
                        className="absolute -bottom-2 -right-1"
                        animate={live ? { y: [0, 0, -3, 0, 0], scale: [1, 1, 0.82, 1, 1] } : undefined}
                        transition={{ duration: 4.4, times: [0, 0.3, 0.38, 0.46, 1], repeat: Infinity, ease: "easeInOut" }}
                      >
                        <MousePointer2 className="size-3.5 text-neutral-900 fill-neutral-900" />
                      </motion.span>
                    </motion.span>
                    <motion.span
                      className="rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-600"
                      animate={live ? chipCycle(true) : undefined}
                      transition={CHIP_LOOP}
                    >
                      CRM Sync
                    </motion.span>
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
                className={`group flex flex-col justify-between h-full min-h-[340px] rounded-2xl border p-5 sm:p-7 bg-[#f4f3ee] transition-all duration-300 cursor-pointer ${
                  activeTab === "ACCELERATORS"
                    ? "border-t-4 border-t-neutral-900 border-neutral-300 shadow-xl ring-1 ring-black/5"
                    : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-900 transition-colors">
                      Workflow Connectors
                    </h3>
                    <div className="size-8 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    Bi-directional sync between your CRM, calendar, Slack, WhatsApp, and email platforms.
                  </p>
                </div>

                <div className="mt-6 space-y-2 relative text-neutral-900">
                  <motion.div
                    className="rounded-lg border border-neutral-200 bg-white/60 p-2.5 opacity-60 transform scale-[0.98]"
                    animate={live ? { opacity: [0.6, 0.85, 0.6] } : undefined}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-rose-400" />
                      <span className="size-2 rounded-full bg-emerald-400" />
                    </div>
                  </motion.div>

                  <div className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-2xs relative">
                    <div className="flex items-center gap-2 mb-2">
                      {[
                        { label: "CRM", tone: "bg-neutral-900" },
                        { label: "SMS", tone: "bg-blue-600" },
                        { label: "AI", tone: "bg-neutral-900" },
                      ].map((badge, i) => (
                        <motion.span
                          key={badge.label}
                          className={`size-5 rounded-sm ${badge.tone} text-white font-bold text-[9px] flex items-center justify-center`}
                          animate={live ? { scale: [1, 1.22, 1], y: [0, -2, 0] } : undefined}
                          transition={{ duration: 0.85, repeat: Infinity, repeatDelay: 2.15, delay: i * 0.35, ease: "easeInOut" }}
                        >
                          {badge.label}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div
                      className="h-2 w-3/4 rounded-sm bg-neutral-200 mb-1 origin-left"
                      animate={live ? { scaleX: [0.2, 1, 1, 0.2] } : undefined}
                      transition={{ duration: 3, times: [0, 0.35, 0.86, 1], repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.div
                      className="h-2 w-1/2 rounded-sm bg-neutral-200 origin-left"
                      animate={live ? { scaleX: [0.2, 1, 1, 0.2] } : undefined}
                      transition={{ duration: 3, times: [0, 0.35, 0.86, 1], repeat: Infinity, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.span
                      aria-hidden
                      className="absolute bottom-2 right-4"
                      animate={live ? { x: [0, -7, 0, 0], y: [0, -4, 0, 0], scale: [1, 0.86, 1, 1] } : undefined}
                      transition={{ duration: 3, times: [0, 0.12, 0.24, 1], repeat: Infinity, ease: "easeInOut" }}
                    >
                      <MousePointer2 className="size-4 text-neutral-900 fill-neutral-900" />
                    </motion.span>
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
                className={`group flex flex-col justify-between h-full min-h-[340px] rounded-2xl border p-5 sm:p-7 bg-[#f4f3ee] transition-all duration-300 cursor-pointer ${
                  activeTab === "TAILORED"
                    ? "border-t-4 border-t-neutral-900 border-neutral-300 shadow-xl ring-1 ring-black/5"
                    : "border-t-2 border-t-transparent border-neutral-200/90 shadow-sm hover:border-neutral-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-900 transition-colors">
                      Custom AI Solutions
                    </h3>
                    <div className="size-8 rounded-md bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    Custom-built AI workflows engineered around your specific agency or business operations.
                  </p>
                </div>

                <div className="mt-6 flex flex-col items-center">
                  <div className="w-full rounded-xl border border-neutral-200 bg-neutral-900 p-4 font-mono text-xs leading-relaxed text-neutral-200 shadow-md">
                    <motion.div
                      className="flex items-center gap-3 text-neutral-500 select-none"
                      animate={live ? { clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"] } : undefined}
                      transition={{ duration: 5.2, times: [0, 0.26, 0.92, 1], repeat: Infinity, ease: "linear" }}
                    >
                      <span>1</span>
                      <span><span className="text-sky-400 font-semibold">def</span> <span className="text-amber-400 font-semibold">qualify_lead</span>(inquiry):</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 text-neutral-500 select-none pl-4"
                      animate={live ? { clipPath: ["inset(0 100% 0 0)", "inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"] } : undefined}
                      transition={{ duration: 5.2, times: [0, 0.3, 0.56, 0.92, 1], repeat: Infinity, ease: "linear" }}
                    >
                      <span>2</span>
                      <span><span className="text-sky-400 font-semibold">if</span> <span className="text-emerald-400">"booking"</span> <span className="text-sky-400 font-semibold">in</span></span>
                      <motion.span
                        aria-hidden
                        className="h-3 w-1.5 shrink-0 bg-neutral-400"
                        animate={live ? CARET : undefined}
                        transition={CARET_LOOP}
                      />
                    </motion.div>
                  </div>

                  <motion.span
                    className="mt-3 rounded-md border border-neutral-200 bg-white px-3 py-1 text-xs font-bold text-neutral-700 shadow-2xs"
                    animate={live ? { scale: [1, 1.07, 1] } : undefined}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    CUSTOM SYSTEM
                  </motion.span>
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
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-xl px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "PRE-BUILT"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-[#f4f3ee] border border-neutral-200/90 text-neutral-700 hover:bg-[#eae8e1] hover:text-black"
              }`}
            >
              <span><RollingText>PRE-BUILT AUTOMATIONS</RollingText></span>
              {activeTab === "PRE-BUILT" && <span className="size-2 rounded-full bg-neutral-100 ml-2" />}
            </button>

            <button
              onClick={() => setActiveTab("ACCELERATORS")}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-xl px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "ACCELERATORS"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-[#f4f3ee] border border-neutral-200/90 text-neutral-700 hover:bg-[#eae8e1] hover:text-black"
              }`}
            >
              <span><RollingText>WORKFLOW ACCELERATORS</RollingText></span>
              {activeTab === "ACCELERATORS" && <span className="size-2 rounded-full bg-neutral-100 ml-2" />}
            </button>

            <button
              onClick={() => setActiveTab("TAILORED")}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-xl px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "TAILORED"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-[#f4f3ee] border border-neutral-200/90 text-neutral-700 hover:bg-[#eae8e1] hover:text-black"
              }`}
            >
              <span><RollingText>CUSTOM AI SOLUTIONS</RollingText></span>
              {activeTab === "TAILORED" && <span className="size-2 rounded-full bg-neutral-100 ml-2" />}
            </button>

            <button
              onClick={() => setActiveTab("ARTEMIS")}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-xl px-4 py-3 text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer snap-center whitespace-nowrap ${
                activeTab === "ARTEMIS"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-[#f4f3ee] border border-neutral-200/90 text-neutral-700 hover:bg-[#eae8e1] hover:text-black"
              }`}
            >
              <div className="flex items-center">
                <span><RollingText>AMTHROMAX AI ENGINE</RollingText></span>
                <span className="ml-2 rounded-sm bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-normal">
                  NEW
                </span>
              </div>
              {activeTab === "ARTEMIS" && <span className="size-2 rounded-full bg-neutral-100 ml-2" />}
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
              <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto scrollbar-none bg-[#f4f3ee] border border-neutral-200/90 p-1 rounded-xl text-xs font-semibold shadow-2xs">
                <button
                  onClick={() => setCategoryFilter("ALL")}
                  className={`px-3 py-1 rounded-lg transition duration-200 cursor-pointer whitespace-nowrap ${categoryFilter === "ALL" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  <RollingText>All (4)</RollingText>
                </button>
                <button
                  onClick={() => setCategoryFilter("CUSTOMER_SERVICE")}
                  className={`px-3 py-1 rounded-lg transition duration-200 cursor-pointer whitespace-nowrap ${categoryFilter === "CUSTOMER_SERVICE" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  <RollingText>Lead & Customer AI</RollingText>
                </button>
                <button
                  onClick={() => setCategoryFilter("EMPLOYEE_PRODUCTIVITY")}
                  className={`px-3 py-1 rounded-lg transition duration-200 cursor-pointer whitespace-nowrap ${categoryFilter === "EMPLOYEE_PRODUCTIVITY" ? "bg-neutral-900 text-white font-bold" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  <RollingText>Ops & Revenue</RollingText>
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
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-2xl bg-[#f4f3ee] border border-neutral-200/90 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group hover:border-neutral-300"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-900 transition-colors">
                            Instant Speed-to-Lead Agent
                          </h4>
                          <span className="text-[10px] sm:text-xs font-bold text-neutral-700 uppercase tracking-wider">
                            REVENUE ENGINE
                          </span>
                        </div>
                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                          Respond to form fills, ads, and missed calls in under 60 seconds via SMS and WhatsApp.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <Link
                            to="/book"
                            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-neutral-800"
                          >
                            <span><RollingText>GET THIS SYSTEM</RollingText></span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-white/90 p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
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
                            <div className="rounded-xl bg-[#f4f3ee] border border-neutral-200 text-neutral-900 px-3 py-2 text-xs font-medium shadow-2xs">
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
                              "linear-gradient(to bottom, rgba(244, 243, 238, 0), rgba(244, 243, 238, 0.7) 60%, rgba(244, 243, 238, 0.95) 100%)",
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
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-2xl bg-[#f4f3ee] border border-neutral-200/90 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group hover:border-neutral-300"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-900 transition-colors">
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
                            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-neutral-800"
                          >
                            <span><RollingText>GET THIS SYSTEM</RollingText></span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-white/90 p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
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
                                <button className="rounded-full bg-neutral-900 text-white px-3 py-1 text-[10px] font-semibold shadow-2xs">
                                  <RollingText>Lead Capture & Booking</RollingText>
                                </button>
                                <button className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[10px] font-medium text-neutral-600">
                                  <RollingText>Customer Support Bot</RollingText>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-end gap-2">
                            <div className="rounded-xl bg-[#f4f3ee] border border-neutral-200 text-neutral-900 px-3 py-2 text-xs font-medium shadow-2xs">
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
                              "linear-gradient(to bottom, rgba(244, 243, 238, 0), rgba(244, 243, 238, 0.7) 60%, rgba(244, 243, 238, 0.95) 100%)",
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
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-2xl bg-[#f4f3ee] border border-neutral-200/90 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group hover:border-neutral-300"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-900 transition-colors">
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
                            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-neutral-800"
                          >
                            <span><RollingText>GET THIS SYSTEM</RollingText></span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-white/90 p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-end gap-2">
                            <div className="rounded-xl bg-[#f4f3ee] border border-neutral-200 text-neutral-900 px-3 py-2 text-xs font-medium shadow-2xs">
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
                              "linear-gradient(to bottom, rgba(244, 243, 238, 0), rgba(244, 243, 238, 0.7) 60%, rgba(244, 243, 238, 0.95) 100%)",
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
                      className="flex flex-col justify-between h-full min-h-[410px] sm:min-h-[440px] rounded-2xl bg-[#f4f3ee] border border-neutral-200/90 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer group hover:border-neutral-300"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-900 transition-colors">
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
                            className="inline-flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-2xs transition hover:bg-neutral-800"
                          >
                            <span><RollingText>GET THIS SYSTEM</RollingText></span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative mt-4 rounded-2xl border border-neutral-200/80 bg-white/90 p-3.5 sm:p-4 text-xs sm:text-sm font-sans shadow-inner overflow-hidden">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-end gap-2">
                            <div className="rounded-xl bg-[#f4f3ee] border border-neutral-200 text-neutral-900 px-3 py-2 text-xs font-medium shadow-2xs">
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
                              "linear-gradient(to bottom, rgba(244, 243, 238, 0), rgba(244, 243, 238, 0.7) 60%, rgba(244, 243, 238, 0.95) 100%)",
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
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.02]"
                >
                  <span><RollingText>EXPLORE ALL AUTOMATIONS</RollingText></span>
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
