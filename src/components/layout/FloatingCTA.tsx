import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, CalendarClock } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-6 right-6 z-[95] flex flex-col items-end gap-3"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass-strong grid size-11 place-items-center rounded-full text-foreground/80 transition hover:text-foreground"
          >
            <ArrowUp className="size-4" />
          </button>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-5 py-3 text-sm font-medium text-white shadow-[0_20px_60px_-15px_rgba(255,122,0,0.7)] transition hover:scale-[1.03]"
          >
            <CalendarClock className="size-4" />
            Book Strategy Call
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}