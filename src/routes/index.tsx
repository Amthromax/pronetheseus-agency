import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";

const ExpectedOutcomes = lazy(() => import("@/components/sections/ExpectedOutcomes").then(m => ({ default: m.ExpectedOutcomes })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const AgenticApplications = lazy(() => import("@/components/sections/AgenticApplications").then(m => ({ default: m.AgenticApplications })));
const Portfolio = lazy(() => import("@/components/sections/Portfolio").then(m => ({ default: m.Portfolio })));
const AIInsights = lazy(() => import("@/components/sections/AIInsights").then(m => ({ default: m.AIInsights })));
const MarqueeReviews = lazy(() => import("@/components/sections/MarqueeReviews").then(m => ({ default: m.MarqueeReviews })));
const FAQ = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));

import heroPeople from "@/assets/hero-people-4.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pronetheseus — Agency Infrastructure & AI Automation Systems" },
      { name: "description", content: "Automate lead capture, customer conversations, appointment booking, follow-ups, and repetitive business operations." },
      { property: "og:title", content: "Pronetheseus — AI Revenue Engine & Business Automation Systems" },
      { property: "og:description", content: "Autonomous AI Infrastructure. Built for High-Growth Agencies." },
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
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <ExpectedOutcomes />
        <Process />
        <AgenticApplications />
        <Portfolio />
        <AIInsights />
        <MarqueeReviews />
        <FAQ />
      </Suspense>
    </>
  );
}
