import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Lock, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  Code 
} from "lucide-react";

export function ServicesCenterDetails() {
  return (
    <section className="relative bg-sandel py-12 sm:py-16 text-neutral-900 overflow-hidden">
      <div className="container-pad mx-auto max-w-[1200px] text-center">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ff7a00]">
            Service Standards & Infrastructure Specs
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900">
            Engineered for Precision & Scalability
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Every automation system we deploy is custom-built, fully documented, and integrated directly into your existing software stack without operational downtime.
          </p>
        </div>

        {/* Centered Key Metrics Row - No Boxes */}
        <div className="mt-10 pt-8 border-t border-sandel-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <Clock className="size-5 text-[#ff7a00]" />
              <span>&lt; 60s</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Speed-to-Lead Response</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <Code className="size-5 text-[#ff7a00]" />
              <span>100%</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Code & IP Ownership</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.16 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <Zap className="size-5 text-[#ff7a00]" />
              <span>3 Weeks</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Avg. System Go-Live</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.24 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <ShieldCheck className="size-5 text-[#ff7a00]" />
              <span>99.9%</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Workflow Execution Uptime</span>
          </motion.div>
        </div>

        {/* Detailed Information Columns - Clean Centered Layout Without Boxes */}
        <div className="mt-12 pt-8 border-t border-sandel-border/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <Cpu className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Universal Integration
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              Bi-directional API and webhook synchronization across Slack, ClickUp, Notion, HubSpot, Salesforce, WhatsApp, and custom databases.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <Lock className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Security & Privacy
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              Enterprise-grade data protection with encrypted API credential storage, zero-retention LLM prompts, and full SOC2 compliance readiness.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <RefreshCw className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Autonomous Retries
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              Self-healing automation pipelines with automatic error retries, intelligent fallback paths, and instant team alert triggers.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <CheckCircle2 className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Zero Platform Lock-in
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              You own 100% of the workflow logic, code endpoints, and documentation. You maintain total control over your business infrastructure.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
