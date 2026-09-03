import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: any;
  description?: string;
  href?: string;
  cta?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[26px]",
      // light styles
      "bg-[#f4f3ee] border border-neutral-200/90 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.03)]",
      // dark styles
      "transform-gpu dark:bg-neutral-900 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
      {Icon && <Icon className="h-10 w-10 origin-left transform-gpu text-neutral-800 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-200" />}
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans tracking-tight">
        {name}
      </h3>
      {description && <p className="max-w-lg text-sm text-neutral-600 font-normal leading-relaxed">{description}</p>}
    </div>

    {href && cta && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Link
          to={href}
          className="pointer-events-auto flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white hover:underline cursor-pointer"
        >
          {cta}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
