import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { FooterArtLandscape } from "./FooterArtLandscape";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <footer className="relative w-full bg-[#1d42db] text-white pt-0 overflow-hidden font-sans">
      {/* Top Classical & Infrastructure Line-Art Illustration Banner */}
      <FooterArtLandscape />

      {/* Main Royal Blue Footer Body */}
      <div className="relative z-10 container-pad mx-auto max-w-[1400px] pt-4 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Stacked Serif Logo + Subscription Form + Copyright */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[320px]">
            <div>
              {/* Stacked Serif Brand Title */}
              <Link to="/" className="inline-block group">
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.02] tracking-tight uppercase text-white transition-opacity group-hover:opacity-90">
                  PRONE<br />THESEUS<br />CAPITAL
                </div>
              </Link>

              {/* Newsletter Email Signup */}
              <form onSubmit={handleSubscribe} className="mt-12 sm:mt-16 w-full max-w-md">
                <div className="text-[11px] font-mono tracking-widest text-white/80 uppercase mb-3">
                  ENTER EMAIL
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="relative flex-1 border-b border-white/60 focus-within:border-white">
                    <input
                      type="email"
                      required
                      placeholder="your@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-transparent py-2.5 text-sm text-white placeholder-white/50 outline-none font-sans"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full border border-white/80 bg-transparent px-6 py-2.5 text-xs font-mono tracking-widest text-white uppercase transition-all duration-200 hover:bg-white hover:text-[#1d42db] active:scale-95 cursor-pointer disabled:opacity-60"
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

            {/* Copyright */}
            <div className="mt-12 lg:mt-20 text-xs font-sans text-white/70 space-y-1">
              <p className="font-medium text-white/90">Pronetheseus Capital</p>
              <p>© All rights reserved {new Date().getFullYear()}</p>
            </div>
          </div>

          {/* Middle Column: Navigation Links */}
          <div className="lg:col-span-3 pt-2">
            <span className="inline-block rounded-full border border-white/60 px-3.5 py-1 text-[11px] font-mono tracking-widest text-white uppercase mb-6">
              LPs
            </span>
            <ul className="space-y-3 font-sans text-sm sm:text-base">
              <li>
                <Link to="/services" className="text-white/85 hover:text-white transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/85 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/85 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/85 hover:text-white transition-colors">
                  Social Proof
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/85 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-xs pt-2 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors text-xs inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Global Presence & Social Links */}
          <div className="lg:col-span-3 pt-2 flex flex-col justify-between min-h-[220px]">
            <div>
              <p className="text-sm sm:text-base font-sans text-white/90 font-medium leading-relaxed">
                Investing worldwide from NYC & SF
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-12 lg:mt-0">
              <div className="text-xs font-sans text-white/80 mb-3">
                Socials:
              </div>
              <div className="flex items-center gap-4 text-white font-mono text-sm">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X Twitter"
                  className="hover:opacity-75 transition-opacity inline-flex items-center justify-center size-7 border border-white/50 rounded-full text-xs"
                >
                  ✕
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-75 transition-opacity inline-flex items-center justify-center size-7 border border-white/50 rounded-full text-xs"
                >
                  📷
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-75 transition-opacity inline-flex items-center justify-center size-7 border border-white/50 rounded-full text-xs font-serif font-bold"
                >
                  in
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}