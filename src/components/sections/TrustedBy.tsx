import { Marquee } from "@/components/ui/marquee";

const logos = ["NORTHWIND","ATLAS·CO","HELIOS","QUANTA","APEX/LAB","MERIDIAN","ORBIT","VERTEX","NIMBUS","ZENITH","OCTAVE","PRISM"];

export function TrustedBy() {
  return (
    <section className="relative border-y border-white/5 bg-black/40 py-12 backdrop-blur-xl">
      {/* edge fades */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
      <div className="w-full">
        <div className="mb-8 text-center text-[11px] uppercase tracking-[0.35em] text-white/50">
          Trusted by ambitious teams worldwide
        </div>
        <Marquee speed={45} className="group">
          {logos.map((l, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-[0.24em] text-white/30 grayscale transition-all duration-500 hover:scale-110 hover:text-white hover:[text-shadow:0_0_24px_rgba(255,122,0,0.6)] hover:grayscale-0"
            >
              {l}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}