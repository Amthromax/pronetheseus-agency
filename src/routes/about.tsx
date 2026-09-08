import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Stagger, staggerItem } from "@/components/ui/reveal";
import { motion } from "motion/react";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  Check, TrendingUp, Smile, Zap, Clock, Shield, Globe, Award, Sparkles, Compass,
  Layers, Cpu, Command, Flame, Sun, HeartHandshake, CreditCard, ShoppingBag,
  FileText, Database, Hash, Cloud, GitBranch, Brain, Target, Layout, Box,
  MessageCircle, Code2, Workflow, Building2, ChevronRight, Server, Hexagon, Circle
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pronetheseus" },
      { name: "description", content: "The senior team behind Pronetheseus and the beliefs that guide our work." },
      { property: "og:title", content: "About — Pronetheseus" },
      { property: "og:description", content: "Meet the team building the AI backbone of ambitious companies." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const values = [
  { title: "Ship weekly", desc: "Real demos every Friday, not quarterly steering committees." },
  { title: "Senior only", desc: "Every engagement is led by a principal engineer." },
  { title: "Own the outcome", desc: "We measure success in hours saved and revenue moved." },
  { title: "Design counts", desc: "AI systems should feel effortless — and beautiful." },
];
const team = [
  { name: "Kanth Magliar", role: "Founder & CEO", image: "/kishore-kanth.png" },
];

const row1Logos = [
  { name: "Stripe", icon: CreditCard },
  { name: "OpenAI", icon: Sparkles },
  { name: "Vercel", icon: Layers },
  { name: "Shopify", icon: ShoppingBag },
  { name: "Linear", icon: Compass },
  { name: "Notion", icon: FileText },
  { name: "Supabase", icon: Database },
  { name: "Slack", icon: Hash },
  { name: "Figma", icon: Box },
];

const row2Logos = [
  { name: "AWS", icon: Cloud },
  { name: "GitHub", icon: GitBranch },
  { name: "Anthropic", icon: Brain },
  { name: "HubSpot", icon: Target },
  { name: "Webflow", icon: Layout },
  { name: "Salesforce", icon: Building2 },
  { name: "Intercom", icon: MessageCircle },
  { name: "Retool", icon: Workflow },
  { name: "Datadog", icon: Code2 },
];

function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-36 pb-20">
      <div className="container-pad mx-auto max-w-[1400px]">
        <SectionHeading title="We build the AI backbone of ambitious companies" description="A boutique studio of senior engineers, designers, and operators. We take on a limited number of engagements each quarter." />
      </div>
      <section className="container-pad mx-auto mt-16 max-w-[1400px]">
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="rounded-[24px] sm:rounded-[28px] border border-neutral-200/80 bg-[#f4f3ee] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] transition-all duration-300 font-sans"
            >
              <div className="font-sans text-xl font-bold text-neutral-900">{v.title}</div>
              <p className="mt-2 text-sm text-neutral-600 font-sans leading-relaxed font-normal">{v.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* Unified Founder Showcase Section */}
      <section className="container-pad mx-auto mt-20 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Narrative, Stats & Highlights */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-wider text-blue-600">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              ABOUT THE FOUNDER
            </div>

            {/* Main Heading */}
            <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Meet the Person Behind Pronetheseus
            </h2>

            {/* Narrative Text */}
            <p className="mt-6 font-sans text-base font-normal leading-relaxed text-neutral-700 sm:text-lg">
              We are a team focused on helping businesses attract high quality enquiries and turn them into real clients. For the past four years, we have worked with businesses that wanted more than just traffic, clicks, or impressive numbers. Our focus is simple. We bring the right people to your business and help more of them take the next step. Many businesses are already putting in the effort, but their marketing may be reaching the wrong audience or losing interested people before they enquire. Our team helps identify these gaps and improve the complete journey. We keep the process clear and practical. We understand your business, build the right system, reach the right people, and improve what is not working. We also work with a limited number of clients at a time. This allows our team to give every business proper attention, communicate clearly, and keep you informed about the progress and results.
            </p>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 border-y border-neutral-200/80 py-8">
              <div className="py-2">
                <div className="font-sans text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">4+</div>
                <div className="mt-2 font-sans text-sm font-medium text-neutral-600 sm:text-base">Years of Experience</div>
              </div>
              <div className="py-2 border-t sm:border-t-0 sm:border-l border-neutral-200/80 sm:pl-8">
                <div className="font-sans text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">62+</div>
                <div className="mt-2 font-sans text-sm font-medium text-neutral-600 sm:text-base">Businesses Worked With</div>
              </div>
              <div className="py-2 border-t sm:border-t-0 sm:border-l border-neutral-200/80 sm:pl-8">
                <div className="font-sans text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">4.9 / 5</div>
                <div className="mt-2 font-sans text-sm font-medium text-neutral-600 sm:text-base">Client Satisfaction</div>
              </div>
            </div>

            {/* Why Clients Choose to Work With Me */}
            <div className="mt-10">
              <h3 className="mb-6 font-sans text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                Why Clients Choose to Work With Me
              </h3>
              <div className="space-y-4">
                {[
                  "I focus on leads that are ready to buy, not just traffic",
                  "Every strategy is built around real results, not theory",
                  "I tell you what works, not what sounds good",
                  "Strong focus on ROI and business growth",
                  "Built for long-term results, not short-term spikes",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 font-sans text-base font-medium text-neutral-800 sm:text-lg">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Founder Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group w-full max-w-[440px] overflow-hidden rounded-[32px] sm:rounded-[40px] border border-neutral-200/80 bg-sandel-card shadow-[0_16px_45px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_55px_rgba(0,0,0,0.12)] transition-all duration-300 font-sans"
            >
              <div className="aspect-[4/4.5] w-full overflow-hidden bg-neutral-100 flex items-center justify-center text-5xl font-sans text-white font-bold">
                <img
                  src="/kishore-kanth.png"
                  alt="Kanth Magliar"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7 sm:p-8 bg-sandel-card">
                <div className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Kanth Magliar</div>
                <div className="mt-1 text-base sm:text-lg font-semibold text-blue-600">Founder & CEO</div>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Leading AI automation & growth infrastructure for scaling agencies and enterprises.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Metrics Section */}
      <section className="container-pad mx-auto mt-24 max-w-[1400px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Growth Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-neutral-300/80 bg-[#f4f3ee] p-6 text-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 font-sans text-xs font-semibold text-neutral-800 shadow-sm">
                <TrendingUp className="h-3.5 w-3.5 text-neutral-700" />
                <span>Growth Metrics</span>
              </div>
              <h3 className="mt-4 font-sans text-lg font-bold leading-snug text-neutral-900 sm:text-xl">
                Helping businesses build stronger online presence through websites, ads, and content.
              </h3>
            </div>

            {/* Bar chart graphic */}
            <div className="my-6 rounded-2xl border border-neutral-300/70 bg-white p-5 shadow-sm">
              <div className="flex h-28 items-end justify-between gap-1.5 px-2">
                {[35, 42, 50, 60, 95, 100, 90, 85, 55, 45, 38, 30].map((height, i) => {
                  const isHighlight = i >= 4 && i <= 7;
                  return (
                    <div key={i} className="flex h-full flex-1 flex-col items-center justify-end">
                      <div
                        style={{ height: `${height}%` }}
                        className={`w-full rounded-t-sm transition-all duration-500 ${
                          isHighlight
                            ? "bg-gradient-to-t from-red-600 via-orange-500 to-amber-400 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                            : "bg-neutral-200"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-neutral-200 pt-2 font-mono text-xs text-neutral-500">
                <span>2019</span>
                <span>2026</span>
              </div>
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-2 gap-4 border-t border-neutral-300/70 pt-4 font-sans">
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">42+</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Industries Served</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">78+</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Projects delivered</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Custom-Built Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-neutral-300/80 bg-[#f4f3ee] p-6 text-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-7"
          >
            {/* Visual Header Box */}
            <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 p-4 shadow-inner">
              <div className="relative z-10 flex items-center justify-between font-mono text-xs font-semibold text-neutral-300">
                <span>100%</span>
                <span>Custom-Built Solutions</span>
              </div>

              {/* Abstract Vertical Blue Fiber Lines Graphic */}
              <div className="absolute inset-x-0 bottom-0 top-10 flex items-end justify-between gap-1 px-4 opacity-90">
                {[40, 65, 80, 95, 85, 70, 90, 100, 80, 60, 75, 90, 100, 85, 65, 95, 70, 50, 85, 95, 75, 60].map((h, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${h}%` }}
                    className="w-1.5 rounded-t-full bg-gradient-to-t from-blue-900 via-blue-500 to-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.3)] transition-all duration-300 group-hover:brightness-125"
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-1 flex-col justify-end">
              <h3 className="font-sans text-xl font-bold tracking-tight text-neutral-900">
                Revenue Systems Built With Purpose
              </h3>
              <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-neutral-600">
                Every strategy is designed to attract the right audience, build trust, and generate qualified leads.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Three Core Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-neutral-300/80 bg-[#f4f3ee] p-6 text-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <div>
              <h3 className="font-sans text-xl font-bold leading-snug tracking-tight text-neutral-900">
                Every Growth System Is Built Around Three Core Areas
              </h3>
              <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-neutral-600">
                The strongest results come when strategy, visibility, and conversion work together.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="my-6 grid grid-cols-3 gap-2 font-sans">
              <div>
                <div className="text-xl font-extrabold text-neutral-900 sm:text-2xl">40%</div>
                <div className="mt-1 text-[11px] font-medium leading-tight text-neutral-600">Trust & Positioning</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-neutral-900 sm:text-2xl">35%</div>
                <div className="mt-1 text-[11px] font-medium leading-tight text-neutral-600">Traffic Acquisition</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-neutral-900 sm:text-2xl">25%</div>
                <div className="mt-1 text-[11px] font-medium leading-tight text-neutral-600">Conversion Optimization</div>
              </div>
            </div>

            {/* Progress Bars Stack */}
            <div className="space-y-2.5 pt-2">
              {/* Red Bar with White Dot Knob */}
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-neutral-200">
                <div className="relative h-full w-[80%] rounded-full bg-gradient-to-r from-red-600 to-rose-500">
                  <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1 transform rounded-full bg-white shadow-md" />
                </div>
              </div>
              {/* Amber/Yellow Bar */}
              <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full w-[45%] rounded-full bg-amber-500" />
              </div>
              {/* Light Grey Bar */}
              <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full w-[20%] rounded-full bg-neutral-400" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Client Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-neutral-300/80 bg-[#f4f3ee] p-6 text-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 font-sans text-xs font-semibold text-neutral-800 shadow-sm">
                <Smile className="h-3.5 w-3.5 text-neutral-700" />
                <span>Client satisfaction</span>
              </div>
            </div>

            {/* Gauge Circle */}
            <div className="my-6 flex flex-col items-center justify-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-lime-600 via-lime-400 to-emerald-400 p-1.5 shadow-[0_0_25px_rgba(132,204,22,0.3)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-lime-400 font-sans text-2xl font-extrabold text-neutral-950 shadow-inner">
                  5.0
                </div>
              </div>
              <div className="mt-3 font-sans text-xs font-medium text-neutral-600">Client satisfaction score</div>
            </div>

            {/* Bottom stats row */}
            <div className="grid grid-cols-3 gap-2 border-t border-neutral-300/70 pt-4 text-center font-sans">
              <div>
                <div className="text-xl font-extrabold text-neutral-900 sm:text-2xl">4.9</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Rating</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-neutral-900 sm:text-2xl">98%</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Client success</div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-neutral-900 sm:text-2xl">78+</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Reviews</div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Project Delivery Speed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-neutral-300/80 bg-[#f4f3ee] p-6 text-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 font-sans text-xs font-semibold text-neutral-800 shadow-sm">
                <Zap className="h-3.5 w-3.5 text-neutral-700" />
                <span>Project delivery speed</span>
              </div>

              <div className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                14 days
              </div>
              <div className="mt-1 font-sans text-xs font-medium text-neutral-600">
                Average website delivery timeline
              </div>
            </div>

            {/* Checklist Horizontal Timeline */}
            <div className="my-6 flex flex-wrap items-center justify-between gap-2 border-y border-neutral-300/70 py-4 font-sans text-xs font-semibold text-neutral-800">
              <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-neutral-600" /> Discovery</span>
              <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-neutral-600" /> Strategy</span>
              <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-neutral-600" /> Design System</span>
              <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-neutral-600" /> Launch</span>
            </div>

            {/* Bottom stats row */}
            <div className="grid grid-cols-2 gap-4 font-sans">
              <div>
                <div className="text-2xl font-extrabold text-neutral-900 sm:text-3xl">98%</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">On-time delivery</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-neutral-900 sm:text-3xl">24/7</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Project Communication</div>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Design Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-neutral-300/80 bg-[#f4f3ee] p-6 text-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 font-sans text-xs font-semibold text-neutral-800 shadow-sm">
                <Clock className="h-3.5 w-3.5 text-neutral-700" />
                <span>Design performance</span>
              </div>

              <div className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                120ms
              </div>
              <div className="mt-1 font-sans text-xs font-medium text-neutral-600">
                Average interaction response time
              </div>
            </div>

            {/* Performance Bar Gauge */}
            <div className="my-6 rounded-2xl border border-neutral-300/70 bg-white p-4 shadow-sm">
              <div className="relative h-2 w-full rounded-full bg-neutral-200">
                <div className="relative h-full w-[60%] rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400">
                  <div className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]" />
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-xs text-neutral-500">
                <span>0ms</span>
                <span>200ms</span>
              </div>
            </div>

            {/* Bottom stats row */}
            <div className="grid grid-cols-2 gap-4 border-t border-neutral-300/70 pt-4 font-sans">
              <div>
                <div className="text-2xl font-extrabold text-neutral-900 sm:text-3xl">99.9%</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Reliability</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-neutral-900 sm:text-3xl">50ms</div>
                <div className="mt-0.5 text-xs font-medium text-neutral-600">Average response time</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 100+ Integrations Section */}
      <section className="relative mt-20 overflow-hidden border-y border-neutral-900 bg-[#040508] py-20 text-white">
        {/* Subtle background grid pattern */}
        <div 
          aria-hidden 
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f293718_1px,transparent_1px),linear-gradient(to_bottom,#1f293718_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_80%,transparent_100%)]"
        />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 text-center">
          {/* Main Metallic Title */}
          <h2 className="font-sans text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text leading-tight">
            100+ Integrations
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm font-normal leading-relaxed text-neutral-400 sm:text-base">
            Seamlessly deploy the entire Pronetheseus platform or separate best-in-class modules into your current environment with built-in integrations. No manual scripting or maintenance.
          </p>

          {/* Grid Container */}
          <div className="relative mt-12">
            {/* Intense radial blue blur spotlight behind the box grid */}
            <div 
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.65)_0%,rgba(29,78,216,0.3)_45%,transparent_75%)] blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7 sm:gap-4">
              {[
                // Row 1
                { 
                  name: "AWS Auto Scaling Group", 
                  active: false,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls}>
                      <path d="M4 8h16M4 16h16M8 4v16M16 4v16" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  )
                },
                { 
                  name: "Azure", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
                      <path d="M13.05 2.15L3.6 18.5H8.7L14.6 8.2L18.3 18.5H23.4L15.9 2.15H13.05ZM11.1 11.8L6.45 21.85H0.6L9.65 6.2L11.1 11.8Z" />
                    </svg>
                  )
                },
                { 
                  name: "AWS", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 60 36" fill="currentColor" className={cls}>
                      <text x="3" y="22" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="-0.5">aws</text>
                      <path d="M6 28 Q 28 36 50 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <path d="M46 25 L 52 28 L 47 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  )
                },
                { 
                  name: "GCP", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
                    </svg>
                  )
                },
                { 
                  name: "OCI", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className={cls}>
                      <ellipse cx="12" cy="12" rx="9" ry="5.5" />
                    </svg>
                  )
                },
                { 
                  name: "Tanzu", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={cls}>
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                      <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
                    </svg>
                  )
                },
                { 
                  name: "Spot Elastigroup", 
                  active: false,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
                      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                    </svg>
                  )
                },

                // Row 2
                { 
                  name: "Serverless", 
                  active: false,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls}>
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                    </svg>
                  )
                },
                { 
                  name: "WinRM", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls}>
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <polyline points="7 9 10 12 7 15" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="12" y1="15" x2="16" y2="15" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  )
                },
                { 
                  name: "Amazon ECS", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={cls}>
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                      <path d="M2 7l10 5 10-5" />
                      <line x1="12" y1="12" x2="12" y2="22" />
                    </svg>
                  )
                },
                { 
                  name: "Azure Functions", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cls}>
                      <path d="M6 5L3 12l3 7M18 5l3 7-3 7" strokeWidth="2.2" />
                      <polygon points="13 3 8 13 13 13 11 21 17 11 12 11 13 3" fill="currentColor" stroke="none" />
                    </svg>
                  )
                },
                { 
                  name: "AWS Lambda", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
                      <path d="M4 20h4l3.8-8.5L15 20h5L13.8 8.8 16.5 4h-4.2L10 8.8 8.4 4H4l3.5 7.8L4 20z" />
                    </svg>
                  )
                },
                { 
                  name: "Kubernetes", 
                  active: true,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
                      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
                      <circle cx="12" cy="12" r="3.2" strokeWidth="2" />
                      <line x1="12" y1="2" x2="12" y2="8.8" strokeWidth="2" />
                      <line x1="12" y1="15.2" x2="12" y2="22" strokeWidth="2" />
                      <line x1="3" y1="7" x2="9.3" y2="10.5" strokeWidth="2" />
                      <line x1="14.7" y1="13.5" x2="21" y2="17" strokeWidth="2" />
                      <line x1="21" y1="7" x2="14.7" y2="10.5" strokeWidth="2" />
                      <line x1="9.3" y1="13.5" x2="3" y2="17" strokeWidth="2" />
                    </svg>
                  )
                },
                { 
                  name: "Spot Elastigroup", 
                  active: false,
                  icon: (cls: string) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
                      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                    </svg>
                  )
                },
              ].map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`group relative flex h-26 sm:h-32 flex-col items-center justify-center rounded-2xl transition-all duration-300 p-3 sm:p-4 ${
                      item.active
                        ? "border border-blue-400/60 bg-gradient-to-b from-[#3b82f6] to-[#1d4ed8] text-white shadow-[0_0_30px_rgba(59,130,246,0.6),inset_0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_45px_rgba(59,130,246,0.85)] hover:border-blue-300"
                        : "border border-neutral-800/60 bg-[#0c0d12]/90 text-neutral-500 opacity-30 backdrop-blur-sm hover:opacity-60 hover:text-neutral-300"
                    }`}
                  >
                    {item.icon(`h-9 w-9 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-110 ${item.active ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" : "text-neutral-500"}`)}
                    <span className={`mt-3 font-sans text-xs sm:text-sm font-bold tracking-tight text-center leading-tight ${item.active ? "text-white" : "text-neutral-500"}`}>
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Work Process: Why Businesses Work With Us Section */}
      <section className="bg-white py-20 text-neutral-900">
        <div className="container-pad mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
            
            {/* Row 1 - Col 1: Card 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] p-6 sm:p-8 hover:border-neutral-300 transition-all duration-300 shadow-sm"
            >
              <div className="inline-flex w-fit rounded-lg border border-neutral-300 bg-white px-3 py-1 font-mono text-xs font-bold text-neutral-900">
                01
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                Strategic Thinking
              </h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-neutral-600">
                Every project begins with understanding your business, audience, and goals before any execution starts.
              </p>
            </motion.div>

            {/* Row 1 - Col 2: Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center p-6 text-center sm:p-8"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-600">
                <span className="h-2 w-2 rounded-sm bg-blue-600" />
                Work process
              </div>
              <h2 className="mt-4 font-sans text-2xl font-extrabold tracking-tight text-neutral-900 uppercase leading-tight sm:text-3xl md:text-4xl max-w-xs">
                WHY BUSINESSES WORK WITH US
              </h2>
            </motion.div>

            {/* Row 1 - Col 3: Card 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] p-6 sm:p-8 hover:border-neutral-300 transition-all duration-300 shadow-sm"
            >
              <div className="inline-flex w-fit rounded-lg border border-neutral-300 bg-white px-3 py-1 font-mono text-xs font-bold text-neutral-900">
                02
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                Systems That Work Together
              </h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-neutral-600">
                Your website, ads, and content work together to build trust, improve engagement, and generate qualified leads.
              </p>
            </motion.div>

            {/* Row 2 - Col 1: Card 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] p-6 sm:p-8 hover:border-neutral-300 transition-all duration-300 shadow-sm"
            >
              <div className="inline-flex w-fit rounded-lg border border-neutral-300 bg-white px-3 py-1 font-mono text-xs font-bold text-neutral-900">
                03
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                Focused On Real Results
              </h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-neutral-600">
                Every strategy is built to increase conversions, generate quality leads, and support long-term business growth.
              </p>
            </motion.div>

            {/* Row 2 - Col 2: Card 04 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] p-6 sm:p-8 hover:border-neutral-300 transition-all duration-300 shadow-sm"
            >
              <div className="inline-flex w-fit rounded-lg border border-neutral-300 bg-white px-3 py-1 font-mono text-xs font-bold text-neutral-900">
                04
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                Transparent Communication
              </h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-neutral-600">
                Direct updates from senior engineers, weekly progress demos, and clear, jargon-free milestone reporting.
              </p>
            </motion.div>

            {/* Row 2 - Col 3: Card 05 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-[#f4f3ee] p-6 sm:p-8 hover:border-neutral-300 transition-all duration-300 shadow-sm"
            >
              <div className="inline-flex w-fit rounded-lg border border-neutral-300 bg-white px-3 py-1 font-mono text-xs font-bold text-neutral-900">
                05
              </div>
              <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-neutral-900">
                Continuous Optimization
              </h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-neutral-600">
                We monitor performance post-launch and continuously refine workflows to maximize speed, scalability, and ROI.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}