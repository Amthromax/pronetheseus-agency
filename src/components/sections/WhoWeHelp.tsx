import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { 
  Home, 
  Stethoscope, 
  Building2, 
  Scale, 
  TrendingUp, 
  ArrowRight
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Home,
    title: "Home Services",
    desc: "Capture & convert inbound leads.",
    features: ["Instant phone/form response", "24/7 lead capture", "Automated scheduling"]
  },
  {
    icon: Stethoscope,
    title: "Dental Clinics",
    desc: "Automate inquiries & bookings.",
    features: ["Appointment booking bot", "SMS confirmation alerts", "Patient reactivation"]
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Respond to & nurture leads.",
    features: ["Property inquiry bot", "Lead qualification", "Long-term drip campaigns"]
  },
  {
    icon: Scale,
    title: "Professional Services",
    desc: "Automate client workflows.",
    features: ["Client intake portal", "Contract distribution", "Invoice reminders"]
  },
  {
    icon: TrendingUp,
    title: "Marketing Agencies",
    desc: "Automate client operations.",
    features: ["Automated onboarding", "Slack & PM integrations", "Real-time reporting"]
  }
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="relative bg-sandel py-8 text-neutral-900 sm:py-10">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Built for service businesses
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-sans max-w-xl mx-auto">
            We engineer tailored AI automation systems for service-driven companies ready to capture leads faster and streamline operations.
          </p>
        </div>

        {/* 5 Industry Cards Grid: Horizontal Scroll on Mobile ONLY, Grid on Desktop */}
        <div className="mt-6 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-3.5 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-4 sm:pb-0">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-xl border border-sandel-border bg-sandel-card p-4 shadow-2xs transition-all duration-300 hover:border-neutral-400 hover:shadow-md shrink-0 w-[250px] xs:w-[270px] sm:w-auto snap-center"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-sandel text-neutral-900 group-hover:bg-[#18181b] group-hover:text-white transition-colors duration-300">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="mt-3 font-sans text-sm font-semibold text-neutral-900">
                    {ind.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600 font-normal">
                    {ind.desc}
                  </p>

                  <div className="mt-2.5 pt-2.5 border-t border-sandel-border/60 space-y-1">
                    {ind.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                        <span className="w-1 h-1 rounded-full bg-[#ff7a00]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-1">
                  <Link
                    to="/book"
                    className="inline-flex w-full items-center justify-between rounded-md bg-sandel px-3 py-1.5 text-xs font-semibold text-neutral-800 transition duration-200 group-hover:bg-[#18181b] group-hover:text-white"
                  >
                    <span>Automate My Business</span>
                    <ArrowRight className="size-3" />
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
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 rounded-xl border border-neutral-200 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 p-4 sm:p-5 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <h4 className="font-sans text-sm sm:text-base font-bold tracking-tight">
              Don't see your industry?
            </h4>
            <p className="mt-0.5 text-xs text-neutral-300 font-sans max-w-xl">
              We can still identify your best automation opportunities and build custom workflow engines.
            </p>
          </div>

          <Link to="/book" className="shrink-0">
            <button className="rounded-lg bg-sandel-card px-4 py-2 text-xs font-semibold text-neutral-900 shadow-xs transition-all duration-200 hover:bg-sandel hover:scale-[1.02] cursor-pointer flex items-center gap-1.5">
              <span>Get Free Automation Audit</span>
              <ArrowRight className="size-3.5 text-neutral-900" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
