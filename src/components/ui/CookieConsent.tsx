import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, X } from "lucide-react";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pronetheseus_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("pronetheseus_cookie_consent", "accepted");
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("pronetheseus_cookie_consent", "declined");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-50 max-w-md rounded-2xl bg-neutral-900/95 p-5 text-white shadow-2xl backdrop-blur-xl border border-neutral-800"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-[#ff7a00]" />
              <span className="font-display text-sm font-semibold tracking-tight text-white">
                Privacy & Data Consent
              </span>
            </div>
            <button
              onClick={handleDecline}
              className="rounded-full p-1 text-neutral-400 hover:bg-neutral-800 hover:text-white transition"
              aria-label="Close cookie consent"
            >
              <X className="size-4" />
            </button>
          </div>

          <p className="mt-2.5 text-xs text-neutral-300 leading-relaxed font-normal">
            We use essential cookies and anonymized telemetry to optimize agency workflow performance and ensure SOC2 data compliance.
          </p>

          <div className="mt-4 flex items-center justify-end gap-2.5">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-neutral-700 bg-neutral-800 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:bg-neutral-700 hover:text-white transition cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-[#ff7a00] px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#e06b00] transition cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
