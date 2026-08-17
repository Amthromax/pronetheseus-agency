import { Shield, Key, FileCheck, Users, Lock, Award, CheckCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TRUST_FACTORS = [
  {
    icon: Key,
    title: "100% Code Ownership & Zero Lock-in",
    desc: "We build on standard open-source n8n, Python, and cloud infrastructure. You own 100% of the code repositories and databases. If you ever stop working with us, your systems keep running smoothly on your own servers."
  },
  {
    icon: Shield,
    title: "SOC2 Security & Action Firewall",
    desc: "Enterprise bank-grade data encryption (AES-256 in transit & at rest). Zero training of AI models on your private agency or client data. Built-in Action Firewall governance for human oversight."
  },
  {
    icon: FileCheck,
    title: "30-Day SLA & ROI Guarantee",
    desc: "If our agency infrastructure does not save your team at least 20 hours per week within 30 days of production go-live, we work for free until it does. Zero financial risk for your business."
  },
  {
    icon: Users,
    title: "Principal Engineers Only",
    desc: "No junior account managers or offshore handoffs. Your system architect has built systems handling millions of API calls. You get a direct Slack channel with the senior team building your code."
  }
];

export function WhyTrustUs() {
  return (
    <section id="why-trust-us" className="relative bg-white py-10 text-neutral-900 md:py-14">
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Why trust us with your agency?
          </h2>
          <p className="mt-3 text-sm text-neutral-600 md:text-base">
            We operate with complete engineering transparency, zero proprietary lock-in, and strict performance SLAs.
          </p>
        </div>

        {/* Proof Stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/90 py-3.5 px-4 text-center backdrop-blur-md transition hover:border-brand/40 hover:bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand tabular-nums">$4.2M+</div>
            <div className="mt-1 text-xs text-neutral-600 font-medium">Client Revenue Unlocked</div>
          </div>
          <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/90 py-3.5 px-4 text-center backdrop-blur-md transition hover:border-brand/40 hover:bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand tabular-nums">45+</div>
            <div className="mt-1 text-xs text-neutral-600 font-medium">Agency Systems Deployed</div>
          </div>
          <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/90 py-3.5 px-4 text-center backdrop-blur-md transition hover:border-brand/40 hover:bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand tabular-nums">100%</div>
            <div className="mt-1 text-xs text-neutral-600 font-medium">Client Code Ownership</div>
          </div>
          <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/90 py-3.5 px-4 text-center backdrop-blur-md transition hover:border-brand/40 hover:bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <div className="font-display text-2xl md:text-3xl font-bold tracking-tight text-brand tabular-nums">30 Days</div>
            <div className="mt-1 text-xs text-neutral-600 font-medium">ROI SLA Guarantee</div>
          </div>
        </div>

        {/* Trust Cards Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TRUST_FACTORS.map((tf, idx) => {
            const Icon = tf.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-neutral-200/90 bg-white p-4.5 md:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-brand/40 hover:shadow-lg"
              >
                <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-orange-500/15 to-orange-900/5 text-brand ring-1 ring-inset ring-neutral-200/80">
                  <Icon className="size-4.5" />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-neutral-900">{tf.title}</h3>
                <p className="mt-1.5 text-xs md:text-sm text-neutral-600 leading-relaxed">{tf.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Code Guarantee Callout */}
        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-5 text-white shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1.5 lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-2.5 py-0.5 text-[11px] font-medium text-orange-300">
                <Lock className="size-3" />
                No Proprietary Lock-In Promise
              </div>
              <h4 className="font-display text-lg font-semibold tracking-tight text-white">You own 100% of your repositories and workflows</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Unlike SaaS tools that trap your data, our agency builds n8n workflows and AI scripts inside your own AWS/DigitalOcean accounts. Your system remains yours forever.
              </p>
            </div>
            <Link
              to="/book"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Discuss System Ownership
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
