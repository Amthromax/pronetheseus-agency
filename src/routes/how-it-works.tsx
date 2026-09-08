import { createFileRoute } from "@tanstack/react-router";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Process } from "@/components/sections/Process";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, Bot, Database, Zap, ShieldCheck, Cpu, Code2, Layers, 
  Clock, TrendingUp, Check, X, Sparkles, Building2, Workflow, Rocket
} from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Pronetheseus AI Infrastructure" },
      { name: "description", content: "Discover how Pronetheseus rapidly builds, deploys, and scales custom AI revenue engines for ambitious businesses in 14 days." },
      { property: "og:title", content: "How It Works & Growth System — Pronetheseus" },
      { property: "og:description", content: "From initial process audit to fully autonomous AI infrastructure." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <div className="bg-white min-h-screen pt-36 pb-20 text-neutral-900 font-sans">
      {/* Page Header */}
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading 
          title="How Pronetheseus Drives Rapid Business Growth" 
          description="We engineer custom AI workflows, lead qualification agents, and CRM integrations that eliminate manual bottlenecks and scale your revenue faster."
        />
      </div>

      {/* Speed & Rapid Growth Metrics Callout */}
      <section className="container-pad mx-auto mt-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-[28px] border border-neutral-200/80 bg-[#f4f3ee] p-7 shadow-xs"
          >
            <div className="flex items-center gap-2">
              <Clock className="size-4.5 text-blue-600" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-blue-600">Speed Guarantee</span>
            </div>
            <div className="mt-5 font-sans text-4xl font-extrabold text-neutral-900">14-Day Delivery</div>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
              Full AI system audit, custom prompts engineering, and production deployment completed within 14 business days.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-[28px] border border-neutral-200/80 bg-[#f4f3ee] p-7 shadow-xs"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4.5 text-emerald-600" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-600 font-semibold">Growth Velocity</span>
            </div>
            <div className="mt-5 font-sans text-4xl font-extrabold text-neutral-900">300% Response Speed</div>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
              Sub-second inbound lead response speeds turn interested prospects into booked calls before competitors reply.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-[28px] border border-neutral-200/80 bg-[#f4f3ee] p-7 shadow-xs"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4.5 text-purple-600" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-purple-600">Enterprise Standard</span>
            </div>
            <div className="mt-5 font-sans text-4xl font-extrabold text-neutral-900">Senior Engineers Only</div>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
              Direct access to principal AI engineers and operators. No junior account managers or outsourced scripts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main 5-Step Visual Methodology */}
      <HowItWorksSection />

      {/* Deep-Dive Architectural Flow */}
      <section className="container-pad mx-auto mt-16 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] sm:rounded-[40px] border border-neutral-200/80 bg-[#f4f3ee] p-8 sm:p-12 shadow-[0_12px_40px_rgb(0,0,0,0.04)]"
        >
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">Autonomous Workflow Pipeline</span>
            <h3 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              How Our AI Systems Operate 24/7
            </h3>
            <p className="mt-4 font-sans text-base text-neutral-600 leading-relaxed">
              Every system we deploy functions seamlessly in the background, handling inbound inquiries, qualifying buyer intent, updating CRMs, and notifying your team automatically.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-neutral-200/80 shadow-xs">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                <Bot className="size-5" />
              </div>
              <div className="font-sans text-lg font-bold text-neutral-900">1. Instant Capture</div>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Inbound form fills, webhooks, or phone calls trigger sub-second AI response agents.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-neutral-200/80 shadow-xs">
              <div className="flex size-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-4">
                <Cpu className="size-5" />
              </div>
              <div className="font-sans text-lg font-bold text-neutral-900">2. Qualification</div>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                LLM agents ask targeted questions to filter low-intent leads and score high-value prospects.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-neutral-200/80 shadow-xs">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-4">
                <Database className="size-5" />
              </div>
              <div className="font-sans text-lg font-bold text-neutral-900">3. CRM Sync</div>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Clean customer data & transcripts get routed straight into Hubspot, Salesforce, or your database.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-neutral-200/80 shadow-xs">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-4">
                <Zap className="size-5" />
              </div>
              <div className="font-sans text-lg font-bold text-neutral-900">4. Live Handoff</div>
              <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                Qualified meetings automatically populate your sales team's calendar with instant Slack alerts.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Section: Why Pronetheseus vs Traditional Approach */}
      <section className="container-pad mx-auto mt-20 max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Why Businesses Grow 10x Faster With Us
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Compare traditional agency contracts vs. custom in-house dev teams vs. our autonomous AI infrastructure.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-neutral-200 text-xs uppercase tracking-wider font-semibold text-neutral-500">
                <th className="py-4 px-6">Comparison Feature</th>
                <th className="py-4 px-6 text-neutral-400">Traditional Agency</th>
                <th className="py-4 px-6 text-neutral-400">In-House Engineering</th>
                <th className="py-4 px-6 bg-blue-600 text-white rounded-t-2xl">Pronetheseus AI Systems</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-sm font-medium text-neutral-800">
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-6 font-bold text-neutral-900">Deployment Timeline</td>
                <td className="py-4 px-6 text-neutral-500">2 – 4 Months</td>
                <td className="py-4 px-6 text-neutral-500">3 – 6 Months</td>
                <td className="py-4 px-6 bg-blue-50/60 font-bold text-blue-700">14 Days Guaranteed</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-6 font-bold text-neutral-900">Lead Response Velocity</td>
                <td className="py-4 px-6 text-neutral-500">Hours to Days</td>
                <td className="py-4 px-6 text-neutral-500">Minutes</td>
                <td className="py-4 px-6 bg-blue-50/60 font-bold text-blue-700">Sub-second (&lt; 1 sec)</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-6 font-bold text-neutral-900">24/7 Autonomous Booking</td>
                <td className="py-4 px-6 text-red-500 font-semibold flex items-center gap-1.5"><X className="size-4" /> No (Manual Staff)</td>
                <td className="py-4 px-6 text-amber-600 font-semibold flex items-center gap-1.5"><Check className="size-4" /> Complex Custom Build</td>
                <td className="py-4 px-6 bg-blue-50/60 font-bold text-blue-700 flex items-center gap-1.5"><Check className="size-4 text-blue-600" /> Fully Autonomous</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-6 font-bold text-neutral-900">System Integrations</td>
                <td className="py-4 px-6 text-neutral-500">Basic Zapier</td>
                <td className="py-4 px-6 text-neutral-500">Custom Code Overhead</td>
                <td className="py-4 px-6 bg-blue-50/60 font-bold text-blue-700">100+ Enterprise Connectors</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-6 font-bold text-neutral-900">Team Structure</td>
                <td className="py-4 px-6 text-neutral-500">Junior Account Reps</td>
                <td className="py-4 px-6 text-neutral-500">High Overhead Salaries</td>
                <td className="py-4 px-6 bg-blue-50/60 font-bold text-blue-700 rounded-b-2xl">Principal Engineers Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Process />

      <ContactCTA />
    </div>
  );
}
