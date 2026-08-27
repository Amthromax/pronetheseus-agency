import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { FlagshipProduct } from "@/components/sections/FlagshipProduct";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { ExpectedOutcomes } from "@/components/sections/ExpectedOutcomes";
import { AgenticApplications } from "@/components/sections/AgenticApplications";
import { WhyTrustUs } from "@/components/sections/WhyTrustUs";
import { AIInsights } from "@/components/sections/AIInsights";
import { FAQ } from "@/components/sections/FAQ";

import heroPeople from "@/assets/hero-people-4.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pronetheseus — Agency Infrastructure & AI Automation Systems" },
      { name: "description", content: "Automate lead capture, customer conversations, appointment booking, follow-ups, and repetitive business operations." },
      { property: "og:title", content: "Pronetheseus — AI Revenue Engine & Business Automation Systems" },
      { property: "og:description", content: "Automate your business. Capture more customers." },
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
      <WhoWeHelp />
      <FlagshipProduct />
      <Services />
      <ExpectedOutcomes />
      <Process />
      <AgenticApplications />
      <WhyTrustUs />
      <AIInsights />
      <FAQ />
    </>
  );
}
