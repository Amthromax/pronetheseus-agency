import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  Home, 
  Stethoscope, 
  Building2, 
  Scale, 
  TrendingUp, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Home,
    title: "Home Services",
    emoji: "🏠",
    desc: "Capture and convert more inbound leads.",
    features: ["Instant phone & form response", "24/7 emergency lead capture", "Automated quote scheduling"]
  },
  {
    icon: Stethoscope,
    title: "Dental Clinics",
    emoji: "🦷",
    desc: "Automate inquiries, bookings and reminders.",
    features: ["Appointment booking bot", "SMS confirmation & reminders", "Patient reactivation campaigns"]
  },
  {
    icon: Building2,
    title: "Real Estate",
    emoji: "🏢",
    desc: "Respond to and nurture leads automatically.",
    features: ["Property inquiry response", "Lead qualification & routing", "Long-term drip nurturing"]
  },
  {
    icon: Scale,
    title: "Professional Services",
    emoji: "⚖️",
    desc: "Automate lead handling and administrative workflows.",
    features: ["Client intake & document collection", "SOP & contract distribution", "Automated billing reminders"]
  },
  {
    icon: TrendingUp,
    title: "Marketing Agencies",
    emoji: "📈",
    desc: "Automate sales, onboarding and client operations.",
    features: ["Automated client onboarding", "Slack & PM tool integration", "Real-time client reporting"]
  }
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="relative bg-[#fafafa] py-10 text-neutral-900 md:py-14 border-b border-neutral-200">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-mono font-semibold text-[#ff7a00] border border-orange-200/60 uppercase">
            <Sparkles className="size-3.5" />
            Who We Help
          </div>
          <h2 className="mt-3 font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Built for service businesses
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans max-w-2xl mx-auto">
            We engineer tailored AI automation systems for service-driven companies ready to capture leads faster and streamline operations.
          </p>
        </div>

        {/* 5 Industry Cards Grid: Horizontal Scroll on Mobile ONLY, Grid on Desktop */}
        <div className="mt-8 sm:mt-10 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-5 sm:pb-0">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-2xs transition-all duration-300 hover:border-neutral-400 hover:shadow-md shrink-0 w-[270px] xs:w-[290px] sm:w-auto snap-center"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 group-hover:bg-[#18181b] group-hover:text-white transition-colors duration-300">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xl select-none">{ind.emoji}</span>
                  </div>

                  <h3 className="mt-4 font-sans text-base font-semibold text-neutral-900">
                    {ind.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed font-normal">
                    {ind.desc}
                  </p>

                  <div className="mt-3 pt-3 border-t border-neutral-100 space-y-1">
                    {ind.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                        <span className="w-1 h-1 rounded-full bg-[#ff7a00]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-2">
                  <Link
                    to="/book"
                    className="inline-flex w-full items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-800 transition duration-200 group-hover:bg-[#18181b] group-hover:text-white"
                  >
                    <span>Automate My Business</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Industry Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-2xl border border-neutral-200 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 p-5 sm:p-6 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="text-center sm:text-left">
            <h4 className="font-sans text-base sm:text-lg font-bold tracking-tight">
              Don't see your industry?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-neutral-300 font-sans max-w-xl">
              We can still identify your best automation opportunities and build custom workflow engines tailored to your exact business needs.
            </p>
          </div>

          <Link to="/book" className="shrink-0">
            <button className="rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 shadow-xs transition-all duration-200 hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2">
              <span>Get Free Automation Audit</span>
              <ArrowRight className="size-3.5 text-neutral-900" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
