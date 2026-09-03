import { Link, useLocation } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function Footer() {
  const location = useLocation();

  if (
    location.pathname === "/contact" ||
    location.pathname === "/contact/" ||
    location.pathname === "/book" ||
    location.pathname === "/book/"
  ) {
    return null;
  }

  return (
    <footer className="relative w-full bg-[#ebedeb] text-neutral-900 py-12 sm:py-16 font-sans">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-12 lg:px-20 xl:px-24">
        
        {/* Top Header Row: Logo Icon & Social Links */}
        <div className="flex items-center justify-between pb-12 sm:pb-16">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <span className="font-display font-black text-2xl tracking-tighter text-neutral-900">
              Ʌ
            </span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs text-neutral-700 tracking-wider">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors uppercase font-medium"
            >
              LI
            </a>
            <span className="text-neutral-400">/</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors uppercase font-medium"
            >
              IG
            </a>
          </div>
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 sm:pb-24">
          
          {/* Left Column: Greeting Headline & Email */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.18] tracking-tight text-neutral-900 max-w-xl font-sans">
              We’d love to hear from you.<br />
              Whether you have a project in mind, or just want to say hi.
            </h2>

            <div className="pt-2">
              <a
                href="mailto:hello@amthromax.com"
                className="inline-block text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900 underline underline-offset-8 decoration-neutral-900/80 hover:opacity-75 transition-opacity"
              >
                hello@amthromax.com
              </a>
            </div>
          </div>

          {/* Right Column: Let's talk section & Book a call button */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-3">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 font-sans">
              Let's talk
            </h3>
            
            <p className="text-xs sm:text-sm font-mono text-neutral-600 tracking-tight">
              Tell us about your project, question, or idea.
            </p>

            <div className="pt-3 w-full max-w-md">
              <Link
                to="/book"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d6d8d6] hover:bg-[#caccca] active:scale-[0.99] px-8 py-4 text-xs font-mono font-semibold tracking-wider uppercase text-neutral-900 transition-all shadow-2xs cursor-pointer"
              >
                <span>Book a call</span>
                <Phone className="size-3.5 fill-current text-neutral-900" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Navigation Links Bar */}
        <div className="pt-8 border-t border-neutral-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          
          {/* Left Navigation Links */}
          <div className="flex items-center gap-6">
            <Link to="/services" className="hover:text-black transition-colors font-medium">
              Our Work
            </Link>
            <Link to="/pricing" className="hover:text-black transition-colors font-medium">
              Partner +
            </Link>
            <Link to="/contact" className="hover:text-black transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Center Copyright */}
          <div className="text-neutral-500 text-[11px]">
            ( ©{new Date().getFullYear()} Amthromax Studios )
          </div>

          {/* Right Policy Links */}
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-black transition-colors font-medium">
              Privacy &amp; Policy
            </Link>
            <Link to="/terms" className="hover:text-black transition-colors font-medium">
              Terms &amp; Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}