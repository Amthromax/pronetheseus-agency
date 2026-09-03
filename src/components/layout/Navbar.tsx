import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      const day = now.getDate();
      const month = months[now.getMonth()];
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      setTimeStr(`${day} ${month},${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 pt-2.5 sm:pt-3.5 pb-1 z-[100] px-4 sm:px-8 lg:px-12 w-full max-w-[1700px] mx-auto pointer-events-auto"
    >
      <div className="relative flex items-center justify-between rounded-full bg-[#f4f3ee] border border-neutral-200/80 px-4 py-2 sm:px-6 sm:py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
        
        {/* Left Side: Logo & Live Time Text */}
        <div className="flex items-center gap-6 sm:gap-10">
          <Link
            to="/"
            className="font-bold text-xl sm:text-2xl leading-none tracking-tighter text-black select-none font-sans"
            aria-label="Pronetheseus Home"
          >
            Ʌ
          </Link>

          <span className="text-xs sm:text-sm font-normal text-neutral-500 tracking-tight whitespace-nowrap tabular-nums">
            {timeStr || "3 Sept,4:22 pm"}
          </span>
        </div>

        {/* Right Side: Links, Start Project Button & Plus Icon */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            to="/contact"
            className="text-xs sm:text-sm font-medium text-neutral-800 hover:text-black transition"
          >
            Partner+
          </Link>
          <Link
            to="/case-studies"
            className="text-xs sm:text-sm font-medium text-neutral-800 hover:text-black transition"
          >
            Our Work
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2 text-xs sm:text-sm font-medium hover:bg-neutral-800 transition shadow-xs whitespace-nowrap"
          >
            Start a project
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
            className="flex items-center justify-center size-8 sm:size-9 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 transition text-neutral-900 cursor-pointer shadow-2xs"
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
            className="mt-2.5 rounded-3xl border border-neutral-200/90 bg-[#f4f3ee] p-5 shadow-2xl backdrop-blur-2xl max-w-md ml-auto overflow-hidden"
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