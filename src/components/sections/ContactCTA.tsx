import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 text-neutral-900">
      <div className="container-pad mx-auto flex max-w-[1400px] flex-col items-center pt-28 md:pt-40">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-balance text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-400 sm:text-5xl md:text-6xl lg:text-7xl">
            Work seamlessly with a creative team that&apos;s built to match your pace and{" "}
            <span className="text-neutral-900">exceed your expectations.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Link
            to="/contact"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-neutral-900 py-2 pl-2 pr-5 text-sm text-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] transition hover:bg-neutral-800"
          >
            <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#ff7a00] to-[#c2410c] text-xs font-semibold text-white">
              A
            </span>
            <span className="flex flex-col items-start leading-tight">
              <span className="inline-flex items-center gap-1 font-medium">
                Book a Call
                <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
              </span>
              <span className="text-[11px] text-white/60">Let&apos;s talk about your project</span>
            </span>
          </Link>
        </Reveal>
      </div>

      <div aria-hidden className="pointer-events-none mt-16 select-none overflow-hidden">
        <div
          className="text-center font-display font-black leading-none tracking-tight"
          style={{
            fontSize: "clamp(6rem, 22vw, 22rem)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Helleious
        </div>
      </div>

      <div className="container-pad mx-auto flex max-w-[1400px] items-center justify-between pb-6 text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} Helleious. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-neutral-900">Terms of Service</Link>
          <Link to="/" className="hover:text-neutral-900">Privacy Policy</Link>
          <Link to="/" className="hover:text-neutral-900">Cookie Policy</Link>
        </div>
      </div>
    </section>
  );
}