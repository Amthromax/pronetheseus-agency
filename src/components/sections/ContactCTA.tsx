import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";
import { MagneticButton } from "@/components/fx/MagneticButton";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 text-white border-t border-white/10">
      {/* Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-tr from-brand/20 via-orange-950/20 to-transparent blur-[140px] animate-pulse-glow" />
      </div>

      <div className="container-pad relative mx-auto max-w-[1400px] text-center">
        <ScrollReveal variant="badge" className="mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neutral-300 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand animate-ping" />
            Ready for Zero-Touch Operations?
          </div>
        </ScrollReveal>

        <h2 className="mx-auto max-w-4xl font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          <SplitText text="Transform Your Agency Delivery Infrastructure in 3 Weeks." />
        </h2>

        <ScrollReveal variant="text" delay={0.2} className="mx-auto mt-6 max-w-2xl">
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            Eliminate manual client onboarding, reporting chaos, and payroll bloat. Book your free 30-minute infrastructure strategy audit today.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="button" delay={0.35} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book">
            <MagneticButton className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_35px_-5px_rgba(255,122,0,0.6)] transition duration-300 hover:scale-105">
              <span className="relative z-10 inline-flex items-center gap-2">
                Book Strategy Call
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </MagneticButton>
          </Link>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <span>Explore Pricing & SLAs</span>
          </Link>
        </ScrollReveal>

        <ScrollReveal variant="text" delay={0.45} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-brand" />
            <span>100% Code Ownership</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="size-4 text-brand" />
            <span>30-Day SLA Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span>Enterprise Security Standards</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}