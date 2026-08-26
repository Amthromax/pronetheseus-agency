import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { ScrollReveal, type RevealVariant } from "@/components/fx/ScrollReveal";

export function Reveal({
  children,
  delay = 0,
  variant = "text",
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
  as?: "div" | "section" | "span";
}) {
  return (
    <ScrollReveal variant={variant} delay={delay} className={className} as={as}>
      {children}
    </ScrollReveal>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.97, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};