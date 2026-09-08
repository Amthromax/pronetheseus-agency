import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

const allNavLinks = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dateTimeStr, setDateTimeStr] = useState("");

  // Update dynamic Date & Time (e.g., "8 Sep,8:48 am")
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleDateString("en-US", { month: "short" });
      const time = now
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase();
      setDateTimeStr(`${day} ${month},${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      lastScrollY = Math.max(0, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={hidden && !open ? { y: "-120%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 pt-2.5 sm:pt-3.5 pb-1 z-[100] px-4 sm:px-8 lg:px-12 w-full max-w-[1700px] mx-auto pointer-events-auto"
    >
      <div className="relative flex items-center justify-between rounded-full bg-[#f6f5f0] border border-neutral-200/70 px-4 py-2 sm:px-6 sm:py-2.5 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
        
        {/* Left Side: Logo & Live Dynamic Date-Time */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <Link
            to="/"
            className="font-bold text-lg sm:text-2xl leading-none tracking-tighter text-black select-none font-sans flex items-center"
            aria-label="Pronetheseus Home"
          >
            <span className="text-lg sm:text-xl font-extrabold tracking-widest font-mono">Ʌ</span>
          </Link>

          <span className="text-[11px] sm:text-sm text-neutral-500 font-medium tracking-tight select-none">
            {dateTimeStr || "8 Sep,8:48 am"}
          </span>
        </div>

        {/* Right Side: Partner+, Our Work (Desktop only), Start a project & Plus Menu Icon */}
        <div className="flex items-center gap-2 sm:gap-5">
          <Link
            to="/services"
            className="hidden md:inline-flex text-xs sm:text-sm font-medium text-neutral-800 hover:text-black transition"
          >
            Revenue Engines
          </Link>
          <Link
            to="/case-studies"
            className="hidden md:inline-flex text-xs sm:text-sm font-medium text-neutral-800 hover:text-black transition"
          >
            Our Work
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-3.5 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-sm font-semibold hover:bg-neutral-800 transition shadow-xs whitespace-nowrap"
          >
            Start a project
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
            className="flex items-center justify-center size-8 sm:size-9 rounded-full border border-neutral-200/80 bg-white hover:bg-neutral-100 transition text-neutral-900 cursor-pointer shadow-2xs shrink-0"
          >
            {open ? (
              <X className="size-4 text-neutral-900" />
            ) : (
              <Menu className="size-4 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2.5 rounded-3xl border border-neutral-200/90 bg-[#f6f5f0] p-5 shadow-2xl backdrop-blur-2xl max-w-md ml-auto overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Navigation</span>
              <button
                onClick={() => setOpen(false)}
                className="text-xs font-medium text-neutral-500 hover:text-black flex items-center gap-1 cursor-pointer"
              >
                Close <X className="size-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {allNavLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-white hover:text-black"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}