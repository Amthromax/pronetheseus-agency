import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Clock, Zap, CalendarCheck, TrendingUp } from "lucide-react";

const METRICS_LIST = [
  {
    value: "47 hrs/mo",
    label: "Monthly Hours Saved",
    desc: "Reclaim founder and staff time previously lost to manual lead triage & repetitive data entry.",
    icon: Clock,
    badge: "TIME RECLAIMED"
  },
  {
    value: "<60s",
    label: "Speed-to-Lead Response",
    desc: "Sub-60s multi-channel response across web forms, SMS, phone, and WhatsApp.",
    icon: Zap,
    badge: "SPEED TO LEAD"
  },
  {
    value: "+18/mo",
    label: "New Monthly Bookings",
    desc: "Capture after-hours leads and automatically qualify & book them directly onto calendars.",
    icon: CalendarCheck,
    badge: "PIPELINE GROWTH"
  },
  {
    value: "3.2×",
    label: "Measured ROI",
    desc: "Demonstrated return on investment within 90 days of deploying core AI revenue systems.",
    icon: TrendingUp,
    badge: "P&L IMPACT"
  }
];

/** Splits a formatted metric into prefix, number and suffix: "+18/mo" -> "+", "18", "/mo". */
const VALUE_RE = /^([^\d]*)(\d+(?:\.\d+)?)(.*)$/;

/**
 * Renders a metric value that counts up from zero the first time it scrolls
 * into view. The full value is what renders on the server and on the first
 * client paint, so hydration matches and reduced-motion visitors just see the
 * final number.
 */
function CountUpValue({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const match = value.match(VALUE_RE);
    if (!match) return;

    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = (num.split(".")[1] ?? "").length;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

    setDisplay(format(0));
    const controls = animate(0, target, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => setDisplay(format(n)),
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, delay]);

  return (
    <div
      ref={ref}
      className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 tabular-nums"
    >
      {display}
    </div>
  );
}

export function ExpectedOutcomes() {
  return (
    <section id="expected-outcomes" className="relative bg-white py-16 sm:py-24 text-neutral-900 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.12]"
          >
            Measurable Operational Proof
          </motion.h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-xl mx-auto">
            Concrete benchmarks observed across active service business and agency automation deployments.
          </p>
        </div>

        {/* 4 Cards Grid - Clean without outer box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {METRICS_LIST.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col justify-between p-2"
              >
                <div>
                  {/* Top Badge & Icon Row - Clean without outer box */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center text-neutral-900">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider uppercase text-neutral-500">
                      {m.badge}
                    </span>
                  </div>

                  {/* Value & Labels */}
                  <CountUpValue value={m.value} delay={idx * 0.08} />
                  <h3 className="mt-2 text-sm sm:text-base font-bold tracking-tight text-neutral-900">
                    {m.label}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-500 font-normal leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
