import * as React from "react";

import { cn } from "@/lib/utils";

export interface RollingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The label to roll. Must be plain text so it can be duplicated via `data-text`. */
  children: string;
}

/**
 * Hover effect for button / CTA labels: the text slides up and out while an
 * identical copy slides in from below. Driven by the `.roll-text` rules in
 * styles.css, which react to hover on the nearest `a`, `button`, `[role=button]`
 * or `.group` ancestor — so it works inside any clickable wrapper.
 */
export function RollingText({ children, className, ...props }: RollingTextProps) {
  return (
    <span className={cn("roll-text", className)} data-text={children} {...props}>
      <span>{children}</span>
    </span>
  );
}
