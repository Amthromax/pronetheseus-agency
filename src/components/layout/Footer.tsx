import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, MessageSquare, Star, ArrowRight } from "lucide-react";
import { FooterArtLandscape } from "./FooterArtLandscape";

export function Footer() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (
    location.pathname === "/contact" ||
    location.pathname === "/contact/" ||
    location.pathname === "/book" ||
    location.pathname === "/book/"
  ) {
    return null;
  }

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("Thank you for subscribing!");
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative w-full bg-sandel text-neutral-900 pt-0 overflow-hidden font-sans border-t border-sandel-border">
      {/* Top Classical Baroque Ceramic Mural Illustration Banner */}
      <FooterArtLandscape />

      {/* Main Sandel Theme Footer Body */}
      <div className="relative z-10 container-pad mx-auto max-w-[1440px] pt-8 pb-16 lg:pb-24">
        
        {/* Top Header Row: Stacked Serif Title & Newsletter Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 border-b border-sandel-border">
          {/* Stacked Serif Brand Title */}
          <div className="lg:col-span-6">
            <Link to="/" className="inline-block group">
              <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight uppercase text-neutral-900 transition-opacity group-hover:opacity-80">
                PRONE<br />THESEUS<br />CAPITAL
              </div>
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-mono tracking-wide uppercase">
              Agentic AI applications &amp; business automation systems for the enterprise
            </p>
          </div>

          {/* Newsletter Signup Box */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end">
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="text-[11px] font-mono tracking-widest text-neutral-600 uppercase mb-2">
                ENTER EMAIL
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1 border-b border-neutral-400 focus-within:border-neutral-900">
                  <input
                    type="email"
                    required
                    placeholder="your@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-transparent py-2 text-sm text-neutral-900 placeholder-neutral-500 outline-none font-sans"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-900 px-6 py-2.5 text-xs font-mono tracking-widest text-white uppercase transition-all duration-200 hover:bg-neutral-800 active:scale-95 cursor-pointer disabled:opacity-60 shrink-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="size-3.5 animate-spin" />
                      SUBMITTING
                    </span>
                  ) : (
                    "SUBSCRIBE"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Multi-Column Links Section (Enterprise structure) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6 pt-12 items-start">
          
          {/* Col 1: PRE-BUILT APPLICATIONS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              PRE-BUILT APPLICATIONS
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-neutral-700">
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">AI Revenue Engine</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">AI Customer Service</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">n8n Workflow Bridges</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">AI Voice Agents</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">WhatsApp &amp; SMS Bots</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">CRM Automation</Link></li>
            </ul>
          </div>

          {/* Col 2: AGENCY PLATFORM */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              AGENCY PLATFORM
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-neutral-700">
              <li><Link to="/" className="hover:text-neutral-900 transition-colors">Platform Overview</Link></li>
              <li><Link to="/pricing" className="hover:text-neutral-900 transition-colors">Starter Package</Link></li>
              <li><Link to="/pricing" className="hover:text-neutral-900 transition-colors">Growth Package</Link></li>
              <li><Link to="/pricing" className="hover:text-neutral-900 transition-colors">Scale Infrastructure</Link></li>
              <li><Link to="/about" className="hover:text-neutral-900 transition-colors">Agent Marketplace</Link></li>
            </ul>
          </div>

          {/* Col 3: INDUSTRIES */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              INDUSTRIES
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-neutral-700">
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">Home Services</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">Dental Clinics</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">Real Estate</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">Professional Services</Link></li>
              <li><Link to="/services" className="hover:text-neutral-900 transition-colors">Marketing Agencies</Link></li>
            </ul>
          </div>

          {/* Col 4: COMPANY & RESOURCES */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              COMPANY &amp; RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-neutral-700">
              <li><Link to="/about" className="hover:text-neutral-900 transition-colors">About Pronetheseus</Link></li>
              <li><Link to="/case-studies" className="hover:text-neutral-900 transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-neutral-900 transition-colors">Documentation</Link></li>
              <li><Link to="/resources" className="hover:text-neutral-900 transition-colors">AI Research Reports</Link></li>
              <li><Link to="/privacy" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-neutral-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Col 5: CTA Card "Let's work together" */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <div className="rounded-2xl border border-sandel-border bg-sandel-card p-5 sm:p-6 shadow-sm flex flex-col justify-between h-full space-y-5">
              <div>
                <div className="inline-flex size-9 items-center justify-center rounded-xl bg-neutral-900 text-white mb-3">
                  <MessageSquare className="size-4 text-[#ff7a00]" />
                </div>
                <h3 className="font-sans text-lg font-bold text-neutral-900">
                  Let's work together
                </h3>
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed font-sans">
                  Get answers and a customized AI automation quote for your business projects.
                </p>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:scale-[1.01]"
                >
                  <span>GET FREE AUDIT</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              {/* Socials & Trust Rating */}
              <div className="pt-2 border-t border-sandel-border flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1.5">FOLLOW US ON</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="size-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-xs font-bold transition-transform hover:scale-105"
                    >
                      in
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="YouTube"
                      className="size-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-xs transition-transform hover:scale-105"
                    >
                      ▶
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X Twitter"
                      className="size-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-xs transition-transform hover:scale-105"
                    >
                      ✕
                    </a>
                  </div>
                </div>

                {/* G2 5-Star Badge */}
                <div className="rounded-xl bg-neutral-900 text-white px-3 py-1.5 flex flex-col items-center justify-center text-center shadow-xs">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    <Star className="size-2.5 fill-current" />
                    <Star className="size-2.5 fill-current" />
                    <Star className="size-2.5 fill-current" />
                    <Star className="size-2.5 fill-current" />
                    <Star className="size-2.5 fill-current" />
                  </div>
                  <span className="text-[9px] font-mono tracking-tight text-white/90">VERIFIED AGENCY ROI</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer Credits & Location Row */}
        <div className="mt-14 pt-6 border-t border-sandel-border flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-sandel-border bg-sandel-card px-3 py-0.5 text-[11px] font-mono tracking-widest text-neutral-800 uppercase font-semibold">
              LPs
            </span>
            <span className="font-medium text-neutral-800">
              Investing &amp; Engineering worldwide from NYC &amp; SF
            </span>
          </div>

          <div className="text-neutral-500 font-mono text-[11px]">
            Pronetheseus Capital © All rights reserved {new Date().getFullYear()}
          </div>
        </div>

      </div>
    </footer>
  );
}