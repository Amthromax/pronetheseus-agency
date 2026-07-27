import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-foreground/70">
            <span className="size-1.5 rounded-full bg-brand" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-gradient">{title}</span>
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}