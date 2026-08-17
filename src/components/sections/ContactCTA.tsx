import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, CheckCircle2, Clock, Video, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function ContactCTA() {
  return (
    <section id="book-call" className="relative overflow-hidden bg-neutral-950 text-white py-16 md:py-24">
      <div className="container-pad relative mx-auto flex max-w-[1400px] flex-col items-center">
        
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-balance text-center font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ready to eliminate delivery bottlenecks & scale your agency?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base text-neutral-400 md:text-lg">
            Book a 30-minute Infrastructure Strategy Call with a Principal Systems Architect. Zero high-pressure sales pitch. Just a direct tear-down of your agency stack and a concrete plan.
          </p>
        </Reveal>

        {/* 3 Call Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-neutral-300">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-brand" /> 30-Minute Free Audit
          </span>
          <span className="inline-flex items-center gap-2">
            <Video className="size-4 text-brand" /> Live Google Meet Session
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand" /> Blueprint Delivered in 24 Hours
          </span>
        </div>

        {/* Action Button */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              to="/book"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.7)] transition hover:scale-105"
            >
              <Calendar className="size-5" />
              <span>Book Strategy Call Now</span>
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Big Brand Watermark */}
        <div aria-hidden className="pointer-events-none mt-16 select-none overflow-hidden">
          <div
            className="text-center font-display font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(5rem, 18vw, 18rem)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 60%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Pronetheseus
          </div>
        </div>

        {/* Footer links */}
        <div className="container-pad mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-neutral-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Pronetheseus Agency Infrastructure Systems. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}