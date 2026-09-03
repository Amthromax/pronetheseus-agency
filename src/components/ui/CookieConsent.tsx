import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Always show cookie banner when site opens
    const timer = setTimeout(() => setIsOpen(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("amthromax_cookie_consent", "accepted_all");
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("amthromax_cookie_consent", "rejected_all");
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-4 right-4 sm:left-6 sm:right-auto z-[9999] max-w-[640px] rounded-[24px] bg-[#0a0a0c]/95 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl border border-white/10 font-sans"
        >
          {/* Top Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 rounded-full p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition cursor-pointer"
            aria-label="Close cookie notice"
          >
            <X className="size-4" />
          </button>

          {/* Description Content */}
          <p className="pr-8 text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-normal">
            Essential cookies keep the site working and stay on. Optional cookies help with performance and advertising — accept, reject, or manage them. Learn more in our{" "}
            <a href="#privacy" className="font-semibold text-white underline underline-offset-2 hover:text-neutral-300 transition">
              Cookie Policy
            </a>
            ,{" "}
            <a href="#privacy" className="font-semibold text-white underline underline-offset-2 hover:text-neutral-300 transition">
              Privacy Policy
            </a>
            , and{" "}
            <a href="#terms" className="font-semibold text-white underline underline-offset-2 hover:text-neutral-300 transition">
              Terms of Service
            </a>
            .
          </p>

          {/* Bottom Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              onClick={handleClose}
              className="rounded-full border border-neutral-700 bg-neutral-900/80 px-5 py-2 text-xs font-semibold text-white hover:bg-neutral-800 transition cursor-pointer"
            >
              Cookies Settings
            </button>

            <div className="flex items-center gap-2.5 ml-auto">
              <button
                onClick={handleRejectAll}
                className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition cursor-pointer shadow-xs"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition cursor-pointer shadow-xs"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
