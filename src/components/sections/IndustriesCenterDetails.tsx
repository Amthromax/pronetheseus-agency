import { motion } from "motion/react";
import { 
  Building2, 
  Database, 
  Layers, 
  ShieldAlert,
  GitMerge,
  SlidersHorizontal,
  Workflow,
  Globe2
} from "lucide-react";

export function IndustriesCenterDetails() {
  return (
    <section className="relative bg-sandel py-12 sm:py-16 text-neutral-900 overflow-hidden">
      <div className="container-pad mx-auto max-w-[1200px] text-center">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900">
            Tailored Architectural Adaptability
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Whether managing a multi-location healthcare network or a high-velocity home service operation, our AI infrastructure adapts precisely to your industry's compliance standards and software stack.
          </p>
        </div>

        {/* Centered Key Industry Metrics - No Boxes */}
        <div className="mt-10 pt-8 border-t border-sandel-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <Building2 className="size-5 text-[#ff7a00]" />
              <span>10+</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Vertical Playbooks</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <GitMerge className="size-5 text-[#ff7a00]" />
              <span>Sub-Second</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Industry CRM Webhook Sync</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.16 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <ShieldAlert className="size-5 text-[#ff7a00]" />
              <span>HIPAA & SOC2</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Compliant Data Handling</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.24 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
              <Globe2 className="size-5 text-[#ff7a00]" />
              <span>Multi-Unit</span>
            </div>
            <span className="mt-1 text-xs font-medium text-neutral-600 font-sans">Franchise & Multi-Location</span>
          </motion.div>
        </div>

        {/* Detailed Industry Capabilities - Clean Centered Layout Without Boxes */}
        <div className="mt-12 pt-8 border-t border-sandel-border/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <Database className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Native CRM Schemas
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              Pre-configured field mappings for ServiceTitan, Dentrix, Follow Up Boss, Clio, Salesforce, HubSpot, and GoHighLevel.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <SlidersHorizontal className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Domain AI Fine-Tuning
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              AI agents trained specifically on industry terminology, service catalog rules, localized pricing, and escalation protocols.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <Layers className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Multi-Branch Architecture
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              Master admin views with location-level data isolation, allowing franchise owners and regional directors to monitor overall performance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="size-10 rounded-full bg-orange-500/10 text-[#ff7a00] flex items-center justify-center mb-3">
              <Workflow className="size-5" />
            </div>
            <h3 className="font-sans text-base font-bold text-neutral-900">
              Automated Audit Logging
            </h3>
            <p className="mt-1.5 text-xs text-neutral-600 font-sans leading-relaxed">
              Complete, timestamped audit trails for every automated message, appointment booking, and CRM update for compliance verification.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
