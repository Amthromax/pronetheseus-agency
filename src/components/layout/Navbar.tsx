import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
        scrolled ? "py-2 px-4 md:px-8" : "py-4 px-6 md:px-10",
      )}
    >
      <div className="w-full">
        <nav
          className={cn(
            "relative flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
            scrolled
              ? "glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              : "border border-transparent",
          )}
        >
          <Link to="/" className="flex items-center pr-4 group" aria-label="Pronetheseus Home">
            <img src="/logo.png" alt="Pronetheseus Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain filter brightness-0 transition-transform duration-300 group-hover:scale-110" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-900 hover:bg-neutral-100/80"
                activeProps={{ className: "text-neutral-900 font-semibold bg-neutral-100" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="group relative hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.7)] transition hover:scale-[1.03] md:inline-flex"
            >
              Book Strategy Call
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid size-10 place-items-center rounded-full glass lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 grid gap-1 rounded-2xl p-3 lg:hidden"
          >
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-4 py-3 text-center text-sm font-medium text-white"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}