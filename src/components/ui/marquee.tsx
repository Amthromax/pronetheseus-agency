import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  speed = 40,
  slowFactor = 4,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number;
  /** How many times slower the marquee runs while hovered. */
  slowFactor?: number;
}) {
  const trackStyle = {
    animation: `marquee ${speed}s linear infinite`,
    animationDirection: reverse ? "reverse" : "normal",
    willChange: "transform",
    // Cinematic slow-down on hover: longer duration keeps the current
    // progress but eases toward a near-stop instead of hard pausing.
    ["--marquee-hover-duration" as string]: `${speed * slowFactor}s`,
  } as React.CSSProperties;

  const trackClass =
    "flex min-w-full shrink-0 items-center gap-12 pr-12 " +
    "transition-[animation-duration] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] " +
    "group-hover:[animation-duration:var(--marquee-hover-duration)]";

  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div className={trackClass} style={trackStyle}>
        {children}
      </div>
      <div aria-hidden className={trackClass} style={trackStyle}>
        {children}
      </div>
    </div>
  );
}