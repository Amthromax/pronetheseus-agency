import { motion } from "motion/react";
import { type ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface AnimatedCardProps {
  children: ReactNode;
  staggerIndex?: number;
  className?: string;
  hoverScale?: number;
  glowColor?: string;
  onClick?: () => void;
}

export function AnimatedCard({
  children,
  staggerIndex = 0,
  className = "",
  hoverScale = 1.02,
  onClick,
}: AnimatedCardProps) {
  return (
    <ScrollReveal variant="card" staggerIndex={staggerIndex} className="h-full">
      <motion.div
        onClick={onClick}
        whileHover={{
          scale: hoverScale,
          y: -4,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        }}
        whileTap={{ scale: 0.98 }}
        className={`group relative h-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white/90 backdrop-blur-xl shadow-xs transition-colors duration-300 hover:border-orange-500/40 hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(255,122,0,0.15),0_10px_30px_rgba(0,0,0,0.04)] ${className}`}
      >
        {/* Subtle Ambient Hover Glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-full opacity-0 bg-radial from-orange-500/15 via-transparent to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        />
        {children}
      </motion.div>
    </ScrollReveal>
  );
}
