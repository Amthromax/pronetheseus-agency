import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Users, AlertTriangle, Cpu, TrendingUp, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroPeople from "@/assets/hero-party.png.asset.json";
import { SplitText } from "@/components/fx/SplitText";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { TiltCard } from "@/components/fx/TiltCard";

const QUICK_QUESTIONS_PILLS = [
  { id: "who-we-help", label: "01. Who We Help", icon: Users },
  { id: "problem-solved", label: "02. Problem Solved", icon: AlertTriangle },
  { id: "how-it-works", label: "03. How It Works", icon: Cpu },
  { id: "expected-outcomes", label: "04. Expected Outcomes", icon: TrendingUp },
  { id: "why-trust-us", label: "05. Why Trust Us", icon: ShieldCheck },
  { id: "book-call", label: "06. How To Book", icon: Calendar },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id) || document.getElementById("clarity-framework");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-20 pb-12 text-neutral-900 md:pt-24 md:pb-16"
    >
      {/* Ambient background light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-7xl bg-gradient-to-b from-orange-500/10 via-orange-500/5 to-transparent blur-3xl" />
      </div>

      <div className="container-pad relative mx-auto flex max-w-[1400px] flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Anti-fluff positioning badge */}

        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-display text-[26px] xs:text-[32px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] 2xl:text-[84px] font-semibold leading-[1.12] sm:leading-[1.08] tracking-tight text-neutral-900">
            <span className="block">
              <SplitText as="span" text="Zero-Touch Client Onboarding" delay={0.1} stagger={0.02} />
            </span>
            <span className="text-gradient-brand block mt-1 sm:mt-2">
              Powered By Autonomous AI.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed px-2 sm:px-0"
          >
            We build custom n8n automations, autonomous AI agents, and unified CRM backbones for B2B marketing, dev, and consulting agencies ($50k–$500k+/mo). Eliminate manual onboarding, reporting bottlenecks, and payroll bloat in 3 weeks flat.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link to="/book" className="w-full sm:w-auto">
              <MagneticButton className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#ff7a00] to-[#c2410c] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,122,0,0.7)] transition hover:scale-105 w-full justify-center">
                <span className="relative z-10 inline-flex items-center gap-2 justify-center">
                  Book Infrastructure Strategy Call
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
                <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </MagneticButton>
            </Link>

            <button
              onClick={() => scrollToSection("clarity-framework")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50 w-full sm:w-auto"
            >
              See 6 Core Questions Answered
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image / Dashboard Frame */}
        <motion.div
          style={{ y: parallaxY, scale: parallaxScale, opacity: parallaxOpacity }}
          className="relative mt-8 sm:mt-12 w-full max-w-[1300px]"
        >
          <TiltCard intensity={4} className="group mx-auto w-full">
            <div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-1.5 sm:p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] sm:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.2)] aspect-[16/10] sm:aspect-[21/9]"
            >
              {!loaded && (
                <div aria-hidden className="absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-br from-neutral-100 to-transparent" />
              )}
              <motion.img
                ref={imgRef}
                src={heroPeople.url}
                alt="Agency Operations Automation Architecture"
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