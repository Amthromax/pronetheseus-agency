import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroPeople from "@/assets/hero-party.png.asset.json";
import { SplitText } from "@/components/fx/SplitText";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { TiltCard } from "@/components/fx/TiltCard";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-32 pb-24 text-neutral-900 md:pt-40 md:pb-32"
    >
      {/* Soft ambient light layers — Apple-style */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-neutral-50" />
      </div>

      <div className="container-pad relative mx-auto flex max-w-[1400px] flex-col items-center">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-balance font-display text-[11vw] font-semibold leading-[0.95] tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-[92px]">
            <SplitText as="span" text="Automate the Work," delay={0.2} stagger={0.02} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-xl text-base text-neutral-600 md:text-lg"
          >
            Helleious builds AI agents and n8n automations that free your team from
            repetitive work — deployed in weeks, not quarters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact">
              <MagneticButton className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-7 py-4 text-sm font-medium text-white glow-red">
                <span className="relative z-10 inline-flex items-center gap-2">
                  Book a Free Call
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
                <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </MagneticButton>
            </Link>
            <Link to="/automations">
              <MagneticButton
                strength={0.25}
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-4 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50"
              >
                Explore Automations
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Hero image inside floating glass frame with 3D tilt + parallax */}
        <motion.div
          style={{ y: parallaxY, scale: parallaxScale, opacity: parallaxOpacity }}
          className="relative mt-20 w-full"
        >
          <TiltCard intensity={5} className="group mx-auto w-full max-w-[1400px]">
            <div
              className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.25)]"
              style={{ aspectRatio: "21 / 9" }}
            >
              {!loaded && (
                <div aria-hidden className="absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-br from-neutral-100 to-transparent" />
              )}
              <motion.img
                ref={imgRef}
                src={heroPeople.url}
                alt="Happy team energized by AI automation"
                width={1200}
                height={902}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                draggable={false}
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
                animate={loaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full select-none rounded-2xl object-cover object-center"
              />
              {/* Reflection sweep on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
              />
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}