import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "1",
    title: "Discover",
    description: "We start by understanding your content engine. What you're producing, where things slow down, and where the real leverage lies.",
  },
  {
    number: "2",
    title: "Define",
    description: "We turn that into a clear system. Formats, workflows, and structure. Everything needed to produce consistently without bottlenecks.",
  },
  {
    number: "3",
    title: "Execute",
    description: "This is where we plug in. Our team takes over post-production and content ops, working alongside you to ship high-quality content at scale.",
  },
  {
    number: "4",
    title: "Scale",
    description: "Once the system is running, we push it further. More output, better performance, tighter execution. Without adding internal load on your side.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-white py-16 sm:py-24 text-neutral-900 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Top Section Header Divider Bar */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <span className="text-sm font-medium tracking-tight text-neutral-800 font-sans">
            /Process
          </span>
          <span className="text-sm font-medium text-neutral-400 font-sans">
            (05)
          </span>
        </div>

        {/* 2 Column Process Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-semibold text-neutral-900 tracking-tight leading-[1.1] font-sans max-w-xl"
              >
                Our process is simple, purposeful, and adaptable.
              </motion.h2>

              <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-md font-sans">
                We believe great design is a result of clarity, collaboration, and craft.
              </p>
            </div>

            <div className="mt-8 sm:mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-[#f4f3ee] px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-200/70 transition shadow-2xs cursor-pointer font-sans"
              >
                <span>Let's talk</span>
                <span className="text-sm font-normal">+</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Outer Box Wrapping 4 Stacked White Step Cards */}
          <div className="lg:col-span-7">
            <div className="rounded-[26px] border border-neutral-200/90 bg-[#f4f3ee] p-2.5 sm:p-3 space-y-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              {STEPS.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-[20px] bg-white border border-neutral-200/80 p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-neutral-400 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}