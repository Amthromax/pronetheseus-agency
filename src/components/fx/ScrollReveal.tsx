import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export type RevealVariant =
  | "heading"
  | "text"
  | "card"
  | "image"
  | "button"
  | "icon"
  | "section"
  | "badge";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  staggerIndex?: number;
  staggerStep?: number;
  duration?: number;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "span";
}

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function ScrollReveal({
  children,
  variant = "text",
  delay = 0,
  staggerIndex = 0,
  staggerStep = 0.09,
  duration,
  amount = 0.2,
  className = "",
  as = "div",
  ...props
}: ScrollRevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const calculatedDelay = delay + staggerIndex * staggerStep;

  // Custom motion specs according to element type
  const getVariants = (): Variants => {
    const mobileFactor = isMobile ? 0.5 : 1;

    switch (variant) {
      case "heading":
        return {
          hidden: {
            opacity: 0,
            y: 35 * mobileFactor,
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: duration ?? 0.85,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
      case "card":
        return {
          hidden: {
            opacity: 0,
            y: 40 * mobileFactor,
            scale: 0.96,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: duration ?? 0.75,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
      case "image":
        return {
          hidden: {
            opacity: 0,
            scale: 0.94,
            y: 25 * mobileFactor,
            filter: "blur(6px)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: duration ?? 0.9,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
      case "button":
        return {
          hidden: {
            opacity: 0,
            y: 18 * mobileFactor,
            scale: 0.97,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: duration ?? 0.55,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
      case "icon":
        return {
          hidden: {
            opacity: 0,
            scale: 0.75,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: duration ?? 0.5,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
      case "badge":
        return {
          hidden: {
            opacity: 0,
            y: -10,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: duration ?? 0.5,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
      case "section":
        return {
          hidden: {
            opacity: 0,
            y: 50 * mobileFactor,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration ?? 1.0,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
      case "text":
      default:
        return {
          hidden: {
            opacity: 0,
            y: 20 * mobileFactor,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration ?? 0.65,
              delay: calculatedDelay,
              ease: EASE_PREMIUM,
            },
          },
        };
    }
  };

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={getVariants()}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
