import { forwardRef, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  strength?: number;
};

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, strength = 0.35, className, ...props }, _ref) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 180, damping: 15, mass: 0.3 });
    const sy = useSpring(y, { stiffness: 180, damping: 15, mass: 0.3 });

    return (
      <motion.button
        ref={ref}
        style={{ x: sx, y: sy }}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          x.set((e.clientX - r.left - r.width / 2) * strength);
          y.set((e.clientY - r.top - r.height / 2) * strength);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={cn("relative inline-flex will-change-transform", className)}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  },
);
MagneticButton.displayName = "MagneticButton";