import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Database, Server } from "lucide-react";

export function IsometricSandbox() {
  const [activeSandbox, setActiveSandbox] = useState<number>(3);

  const sandboxes = [
    {
      id: 1,
      name: "SANDBOX #1",
      label: "Dev & Staging Engine",
      status: "Active",
      icon: Cpu,
      desc: "Isolated staging environment for rapid API testing & custom n8n workflow compilation.",
    },
    {
      id: 2,
      name: "SANDBOX #2",
      label: "AI SDR & CRM Pipeline",
      status: "Active",
      icon: Database,
      desc: "Autonomous agent lead qualification & realtime CRM synchronization engine.",
    },
    {
      id: 3,
      name: "SANDBOX #3",
      label: "Core Operations OS",
      status: "Target Core",
      icon: Server,
      desc: "Primary multi-department execution engine with bank-grade SOC2 Action Firewall.",
    },
    {
      id: 4,
      name: "SANDBOX #4",
      label: "BI & ROI Analytics",
      status: "Active",
      icon: ShieldCheck,
      desc: "Real-time client portal dashboards and executive financial ROI telemetry.",
    },
  ];

  const handleNext = () => {
    setActiveSandbox((prev) => (prev % 4) + 1);
  };

  return (
    <div className="relative my-10 mx-auto max-w-5xl rounded-3xl border border-neutral-200/70 bg-[#F7F7F8] p-6 sm:p-10 shadow-xl overflow-hidden text-neutral-900">
      {/* Background Isometric Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column: Heading & Selected Details */}
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#ff7a00]">
            <span className="size-2 rounded-full bg-[#ff7a00] animate-ping" />
            ISOLATED AGENCY INFRASTRUCTURE
          </div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Dedicated Multi-Sandbox Architecture
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            Every build runs inside dedicated, zero-downtime sandbox environments engineered for maximum security, zero vendor lock-in, and instant scalability.
          </p>

          {/* Active Sandbox Info Box */}
          <div className="mt-6 rounded-2xl border border-neutral-300 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#ff7a00]">
                {sandboxes[activeSandbox - 1].name}
              </span>
              <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="size-3 text-emerald-600" />
                {sandboxes[activeSandbox - 1].status}
              </span>
            </div>
            <h4 className="mt-1 font-display text-base font-bold text-neutral-900">
              {sandboxes[activeSandbox - 1].label}
            </h4>
            <p className="mt-1 text-xs text-neutral-600">
              {sandboxes[activeSandbox - 1].desc}
            </p>
          </div>
        </div>

        {/* Right Column: 3D Isometric Server Diagram */}
        <div className="relative flex items-center justify-center w-full max-w-[480px] h-[340px]">
          {/* Isometric Diamond Grid Canvas */}
          <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
            {/* SVG Grid Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-neutral-300/80" viewBox="0 0 500 350" fill="none">
              <path d="M 250,30 L 450,150 L 250,270 L 50,150 Z" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 250,75 L 350,135 L 250,195 L 150,135 Z" strokeWidth="1" strokeDasharray="2 2" />
              {/* Connecting Lines between Sandboxes */}
              <line x1="250" y1="90" x2="160" y2="150" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="250" y1="90" x2="340" y2="150" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="160" y1="150" x2="250" y2="210" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="340" y1="150" x2="250" y2="210" stroke="#cbd5e1" strokeWidth="1.5" />
            </svg>

            {/* SANDBOX #1 (Top Center) */}
            <motion.div
              onClick={() => setActiveSandbox(1)}
              whileHover={{ y: -6 }}
              className={`absolute top-[20px] left-[170px] w-[160px] h-[95px] cursor-pointer transition-all duration-300 ${
                activeSandbox === 1 ? "z-20 scale-105" : "z-10 opacity-90"
              }`}
            >
              <div className={`relative w-full h-full rounded-xl border bg-white p-3 shadow-lg transition-all ${
                activeSandbox === 1 ? "border-[#ff7a00] ring-2 ring-[#ff7a00]/30 shadow-orange-500/20" : "border-neutral-400"
              }`}>
                {/* Top Corner Status LED */}
                <div className="absolute top-2 right-2 size-2 rounded-full bg-emerald-500 shadow-emerald-500/50 shadow-sm" />
                {/* Top Left Corner Dot */}
                <div className="absolute top-2 left-2 size-1.5 rounded-full bg-neutral-900" />
                
                {/* Front Side LED Dots */}
                <div className="absolute bottom-2.5 right-3 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-neutral-300" />
                </div>
                {/* Ventilation Grille */}
                <div className="absolute bottom-3 left-12 flex gap-1 transform -rotate-12 opacity-40">
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                </div>
                {/* Label */}
                <div className="mt-5 font-mono text-xs font-bold text-neutral-700 tracking-wider">
                  SANDBOX #1
                </div>
              </div>
            </motion.div>

            {/* SANDBOX #2 (Left Center) */}
            <motion.div
              onClick={() => setActiveSandbox(2)}
              whileHover={{ y: -6 }}
              className={`absolute top-[110px] left-[50px] w-[160px] h-[95px] cursor-pointer transition-all duration-300 ${
                activeSandbox === 2 ? "z-20 scale-105" : "z-10 opacity-90"
              }`}
            >
              <div className={`relative w-full h-full rounded-xl border bg-white p-3 shadow-lg transition-all ${
                activeSandbox === 2 ? "border-[#ff7a00] ring-2 ring-[#ff7a00]/30 shadow-orange-500/20" : "border-neutral-400"
              }`}>
                <div className="absolute top-2 right-2 size-2 rounded-full bg-emerald-500 shadow-emerald-500/50 shadow-sm" />
                <div className="absolute top-2 left-2 size-1.5 rounded-full bg-neutral-900" />
                <div className="absolute bottom-2.5 right-3 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-neutral-300" />
                  <span className="size-1.5 rounded-full bg-neutral-300" />
                </div>
                <div className="absolute bottom-3 left-12 flex gap-1 transform -rotate-12 opacity-40">
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                </div>
                <div className="mt-5 font-mono text-xs font-bold text-neutral-700 tracking-wider">
                  SANDBOX #2
                </div>
              </div>
            </motion.div>

            {/* SANDBOX #4 (Right Center) */}
            <motion.div
              onClick={() => setActiveSandbox(4)}
              whileHover={{ y: -6 }}
              className={`absolute top-[110px] right-[50px] w-[160px] h-[95px] cursor-pointer transition-all duration-300 ${
                activeSandbox === 4 ? "z-20 scale-105" : "z-10 opacity-90"
              }`}
            >
              <div className={`relative w-full h-full rounded-xl border bg-white p-3 shadow-lg transition-all ${
                activeSandbox === 4 ? "border-[#ff7a00] ring-2 ring-[#ff7a00]/30 shadow-orange-500/20" : "border-neutral-400"
              }`}>
                <div className="absolute top-2 right-2 size-2 rounded-full bg-emerald-500 shadow-emerald-500/50 shadow-sm" />
                <div className="absolute top-2 left-2 size-1.5 rounded-full bg-neutral-900" />
                <div className="absolute bottom-2.5 right-3 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-neutral-300" />
                </div>
                <div className="absolute bottom-3 left-12 flex gap-1 transform -rotate-12 opacity-40">
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                </div>
                <div className="mt-5 font-mono text-xs font-bold text-neutral-700 tracking-wider">
                  SANDBOX #4
                </div>
              </div>
            </motion.div>

            {/* SANDBOX #3 (Bottom Center - Primary Target Box) */}
            <motion.div
              onClick={() => setActiveSandbox(3)}
              whileHover={{ y: -6 }}
              className={`absolute top-[195px] left-[170px] w-[160px] h-[95px] cursor-pointer transition-all duration-300 ${
                activeSandbox === 3 ? "z-30 scale-105" : "z-10 opacity-90"
              }`}
            >
              <div className={`relative w-full h-full rounded-xl border bg-white p-3 shadow-xl transition-all ${
                activeSandbox === 3 ? "border-[#ff7a00] ring-2 ring-[#ff7a00]/40 shadow-orange-500/30" : "border-neutral-400"
              }`}>
                {/* Central Red Pulse Light Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 flex items-center justify-center">
                  <div className="size-6 rounded-full border border-dashed border-[#ff7a00]/60 flex items-center justify-center animate-spin-slow" />
                  <div className="absolute size-3 rounded-full bg-[#ff7a00] shadow-[#ff7a00] shadow-sm animate-pulse" />
                </div>

                <div className="absolute top-2 right-2 size-2 rounded-full bg-emerald-500 shadow-emerald-500/50 shadow-sm" />
                <div className="absolute top-2 left-2 size-1.5 rounded-full bg-neutral-900" />
                <div className="absolute bottom-2.5 right-3 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="size-1.5 rounded-full bg-neutral-300" />
                </div>
                <div className="absolute bottom-3 left-12 flex gap-1 transform -rotate-12 opacity-40">
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                  <span className="w-2 h-0.5 bg-neutral-800 rounded-full" />
                </div>
                <div className="mt-5 font-mono text-xs font-bold text-neutral-900 tracking-wider">
                  SANDBOX #3
                </div>
              </div>
            </motion.div>

            {/* Floating Black Arrow Button on Right Edge (matches Image 1) */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 size-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg transition hover:bg-black hover:scale-110 cursor-pointer z-40"
              title="Next Sandbox Environment"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
