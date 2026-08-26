import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { ExpectedOutcomes } from "@/components/sections/ExpectedOutcomes";
import { AgenticApplications } from "@/components/sections/AgenticApplications";
import { WhyTrustUs } from "@/components/sections/WhyTrustUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIInsights } from "@/components/sections/AIInsights";
import { FAQ } from "@/components/sections/FAQ";

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
      <TrustedBy />
      <Services />
      <Process />
      <ExpectedOutcomes />
      <AgenticApplications />
      <WhyTrustUs />
      <Testimonials />
      <AIInsights />
      <FAQ />
    </>
  );
}
