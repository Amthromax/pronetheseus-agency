import { Logo } from "@/components/ui/logo";
import { RollingText } from "@/components/ui/rolling-text";
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
          <Link to="/" className="inline-flex items-center gap-2 group" aria-label="Home">
            <Logo className="h-7 sm:h-8 w-auto text-neutral-900" />
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs text-neutral-700 tracking-wider">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors uppercase font-medium"
            >
              <RollingText>LI</RollingText>
            </a>
            <span className="text-neutral-400">/</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors uppercase font-medium"
            >
              <RollingText>IG</RollingText>
            </a>
          </div>
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 sm:pb-24">
          {/* Left Column: Greeting Headline & Email */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.18] tracking-tight text-neutral-900 max-w-xl font-sans">
              We’d love to hear from you.
              <br />
              Whether you have a project in mind, or just want to say hi.
            </h2>

            <div className="pt-2">
              <a
                href="mailto:hello@makeaccuracy.agency"
                className="inline-block text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900 underline underline-offset-8 decoration-neutral-900/80 hover:opacity-75 transition-opacity"
              >
                <RollingText>hello@makeaccuracy.agency</RollingText>
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
                <span>
                  <RollingText>Book a call</RollingText>
                </span>
                <Phone className="size-3.5 fill-current text-neutral-900" />
              </Link>
            </div>
          </div>
        </div>

        {/* Site Navigation Links Section */}
        <div className="pt-10 pb-12 border-t border-neutral-300/80 grid grid-cols-2 md:grid-cols-4 gap-8 font-sans text-xs">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-3">
              Systems &amp; Solutions
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Services &amp; Revenue Engines</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Custom Solutions</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/automations"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Automations Engine</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>How It Works</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Industries We Serve</RollingText>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-3">
              Company &amp; Work
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>About Make Accuracy</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Case Studies &amp; Results</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Interactive AI Agent Demo</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Pricing &amp; Partner Tier</RollingText>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-3">
              Insights &amp; Resources
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/resources"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Playbooks &amp; Guides</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Blog &amp; AI Insights</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Careers &amp; Team</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Contact Us</RollingText>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-3">
              Legal &amp; Booking
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/book"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Book Strategy Call</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Privacy Policy</RollingText>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-black transition-colors font-medium text-neutral-800"
                >
                  <RollingText>Terms &amp; Conditions</RollingText>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Navigation Links Bar */}
        <div className="pt-8 border-t border-neutral-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
          {/* Left Navigation Links */}
          <div className="flex items-center gap-6">
            <Link to="/services" className="hover:text-black transition-colors font-medium">
              <RollingText>Services</RollingText>
            </Link>
            <Link to="/case-studies" className="hover:text-black transition-colors font-medium">
              <RollingText>Case Studies</RollingText>
            </Link>
            <Link to="/pricing" className="hover:text-black transition-colors font-medium">
              <RollingText>Pricing</RollingText>
            </Link>
            <Link to="/contact" className="hover:text-black transition-colors font-medium">
              <RollingText>Contact</RollingText>
            </Link>
          </div>

          {/* Center Copyright */}
          <div className="text-neutral-500 text-[11px]">
            ( ©{new Date().getFullYear()} Make Accuracy )
          </div>

          {/* Right Policy Links */}
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-black transition-colors font-medium">
              <RollingText>Privacy &amp; Policy</RollingText>
            </Link>
            <Link to="/terms" className="hover:text-black transition-colors font-medium">
              <RollingText>Terms &amp; Conditions</RollingText>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
