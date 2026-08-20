import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Hero } from "@/components/hero/Hero";
import { Agency6Framework } from "@/components/sections/Agency6Framework";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { ExpectedOutcomes } from "@/components/sections/ExpectedOutcomes";
import { WhyTrustUs } from "@/components/sections/WhyTrustUs";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

import heroPeople from "@/assets/hero-people-4.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pronetheseus — Agency Infrastructure & AI Automation Systems" },
      { name: "description", content: "Scale your B2B agency delivery 3x without hiring ops staff. Custom n8n automations & AI agents for high-growth agencies ($50k–$500k+/mo)." },
      { property: "og:title", content: "Pronetheseus — Agency Infrastructure & AI Systems" },
      { property: "og:description", content: "Eliminate manual client onboarding, delivery bottlenecks, and reporting friction in 3 weeks flat." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroPeople.url, fetchPriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Agency6Framework />
      <TrustedBy />
      <Services />
      <Process />
      <ExpectedOutcomes />
      <WhyTrustUs />

      {/* Brand Visual Banner Break (Full-Width Stretch) */}
      <section className="relative bg-black py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="w-full px-3 sm:px-6 lg:px-8 max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] group w-full"
          >
            <img
              src="/5501520d-4c3f-4ddb-ab9d-d2312b27b336.png"
              alt="Pronetheseus Brand Banner"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <FAQ />
      <ContactCTA />
    </>
  );
}
