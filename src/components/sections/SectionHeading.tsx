import { ScrollReveal } from "@/components/fx/ScrollReveal";
import { SplitText } from "@/components/fx/SplitText";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn(center && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <ScrollReveal variant="badge" className="mb-2">
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-xs",
              dark
                ? "border border-white/30 bg-white/20 text-white"
                : "border border-black/10 bg-black/5 text-neutral-800"
            )}
          >
            <span className={cn("size-1.5 rounded-full animate-pulse", dark ? "bg-white" : "bg-brand")} />
            {eyebrow}
          </div>
        </ScrollReveal>
      )}
      
      <h2
        className={cn(
          "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]",
          dark ? "text-white drop-shadow-xs" : "text-neutral-950"
        )}
      >
        <SplitText text={title} delay={0.05} />
      </h2>

      {description && (
        <ScrollReveal variant="text" delay={0.15} className="mt-2.5">
          <p
            className={cn(
              "text-sm sm:text-base font-normal leading-relaxed",
              dark ? "text-white/90" : "text-neutral-600"
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}