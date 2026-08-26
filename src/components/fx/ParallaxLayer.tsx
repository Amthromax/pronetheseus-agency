import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: "slow" | "medium" | "fast" | number;
  direction?: "up" | "down";
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = "slow",
  direction = "up",
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const getDistance = (): number => {
    if (typeof speed === "number") return speed;
    switch (speed) {
      case "fast":
        return 80;
      case "medium":
        return 45;
      case "slow":
      default:
        return 25;
    }
  };

  const dist = getDistance();
  const range = direction === "up" ? [dist, -dist] : [-dist, dist];
  const rawY = useTransform(scrollYProgress, [0, 1], range);
  const smoothY = useSpring(rawY, { stiffness: 150, damping: 20 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
}
