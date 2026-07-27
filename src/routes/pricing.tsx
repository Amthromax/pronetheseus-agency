import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/sections/Pricing";
import { PlanComparison } from "@/components/sections/PlanComparison";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Helleious" },
      { name: "description", content: "Simple, senior-team pricing. Starter, Growth, and Enterprise engagements." },
      { property: "og:title", content: "Pricing — Helleious" },
      { property: "og:description", content: "Transparent pricing for AI automation and custom software." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: () => (
    <div className="pt-24">
      <Pricing />
      <PlanComparison />
      <Comparison />
      <FAQ />
      <ContactCTA />
    </div>
  ),
});