import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger children (must be direct children with `data-reveal`) */
  stagger?: boolean;
};

/**
 * Cinematic scroll-linked reveal: opacity + translateY + scale + blur,
 * 1.2s power4.out. Add `data-reveal` to any direct children to stagger them.
 */
export function RevealSection({ children, className, stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = stagger
        ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"))
        : [el];
      if (!targets.length) return;

      gsap.set(targets, {
        opacity: 0,
        y: 60,
        scale: 0.97,
        filter: "blur(12px)",
        willChange: "transform, opacity, filter",
      });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.3,
        ease: "power4.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}