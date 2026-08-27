import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "py-2 px-4 sm:px-8 bg-sandel-card/90 backdrop-blur-xl border-b border-sandel-border shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]"
          : "py-4 px-6 sm:px-10 bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <nav className="relative flex items-center justify-between">
          {/* Logo with micro hover scale */}
          <Link to="/" className="group flex items-center pr-4" aria-label="Pronetheseus Home">
            <motion.img
              src="/logo.png"
              alt="Pronetheseus Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="h-7 sm:h-8 md:h-9 w-auto object-contain filter brightness-0"
            />
          </Link>

          {/* Nav Links with animated hover pill */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
                activeProps={{ className: "text-neutral-950 font-semibold bg-neutral-100/90" }}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{l.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 rounded-full bg-neutral-100 shadow-xs"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_25px_-5px_rgba(255,122,0,0.5)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_12px_35px_-5px_rgba(255,122,0,0.65)] active:scale-[0.98] md:inline-flex"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/80 backdrop-blur-md transition hover:bg-neutral-100 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 grid gap-1.5 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 hover:text-neutral-950"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}