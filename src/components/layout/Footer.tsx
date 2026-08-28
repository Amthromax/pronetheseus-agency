import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, MessageSquare, Star, ArrowRight, ShieldCheck, Award } from "lucide-react";
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
          <div className="lg:col-span-3 space-y-3">
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
          <div className="lg:col-span-3 space-y-3">
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
          <div className="lg:col-span-3 space-y-3">
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
          <div className="lg:col-span-3 space-y-3">
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

          {/* Full-Width Compact Horizontal CTA & Verified Trust Box */}
          <div className="col-span-2 md:col-span-3 lg:col-span-12 mt-4">
            <div className="rounded-2xl border border-sandel-border bg-sandel-card p-6 sm:p-7 shadow-sm flex flex-col gap-6">
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Left: Message Icon & Headline */}
                <div className="flex items-center gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-neutral-900 text-white shrink-0">
                    <MessageSquare className="size-5 text-[#ff7a00]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-bold text-neutral-900">
                      Let's work together
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-neutral-600 font-sans">
                      Get answers and a customized AI automation quote for your business projects.
                    </p>
                  </div>
                </div>

                {/* Right: CTA Button & Social Links */}
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto shrink-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:scale-[1.01] shrink-0"
                  >
                    <span>GET FREE AUDIT</span>
                    <ArrowRight className="size-3.5" />
                  </Link>

                  <div className="flex items-center gap-2.5 sm:border-l sm:border-sandel-border sm:pl-4">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 hidden sm:inline-block">FOLLOW US</span>
                    <div className="flex items-center gap-1.5">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="size-8.5 rounded-lg bg-neutral-900 text-white flex items-center justify-center transition-all duration-200 hover:bg-[#0A66C2] hover:scale-105 shadow-xs"
                      >
                        <svg className="size-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="size-8.5 rounded-lg bg-neutral-900 text-white flex items-center justify-center transition-all duration-200 hover:bg-[#E4405F] hover:scale-105 shadow-xs"
                      >
                        <svg className="size-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="X Twitter"
                        className="size-8.5 rounded-lg bg-neutral-900 text-white flex items-center justify-center transition-all duration-200 hover:bg-neutral-700 hover:scale-105 shadow-xs"
                      >
                        <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Multi Verified Trust Badges */}
              <div className="pt-4 border-t border-sandel-border/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="rounded-xl border border-sandel-border bg-white px-3.5 py-1.5 flex items-center gap-2 shadow-2xs antialiased">
                    <div className="flex gap-0.5 text-amber-500">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-[11px] font-semibold font-sans text-neutral-900 tracking-tight">VERIFIED AGENCY ROI</span>
                  </div>

                  <div className="rounded-xl border border-sandel-border bg-white px-3.5 py-1.5 flex items-center gap-2 shadow-2xs antialiased">
                    <ShieldCheck className="size-4 text-[#ff7a00] shrink-0" />
                    <span className="text-[11px] font-semibold font-sans text-neutral-900 tracking-tight">VERIFIED SOC2 COMPLIANT</span>
                  </div>

                  <div className="rounded-xl border border-sandel-border bg-white px-3.5 py-1.5 flex items-center gap-2 shadow-2xs antialiased">
                    <Award className="size-4 text-emerald-600 shrink-0" />
                    <span className="text-[11px] font-semibold font-sans text-neutral-900 tracking-tight">VERIFIED CODE OWNERSHIP</span>
                  </div>
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