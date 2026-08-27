import { Marquee } from "@/components/ui/marquee";

const logos = ["NORTHWIND","ATLAS·CO","HELIOS","QUANTA","APEX/LAB","MERIDIAN","ORBIT","VERTEX","NIMBUS","ZENITH","OCTAVE","PRISM"];

export function TrustedBy() {
  return (
    <section className="relative bg-neutral-950 py-12 backdrop-blur-xl overflow-hidden">
      {/* edge fades */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-neutral-950 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-neutral-950 to-transparent" />
      
      <div className="w-full">
        <div className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
          Trusted by high-growth agencies &amp; enterprise teams worldwide
        </div>
        <Marquee speed={40} className="group">
          {logos.map((l, i) => (
            <span
              key={i}
              className="font-display text-xl sm:text-2xl font-bold tracking-[0.24em] text-white/40 transition-all duration-500 hover:scale-105 hover:text-white hover:[text-shadow:0_0_24px_rgba(255,122,0,0.7)] cursor-default select-none"
            >
              {l}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}