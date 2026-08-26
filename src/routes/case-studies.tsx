import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Pronetheseus" },
      { name: "description", content: "Measurable results from teams who chose to build with us." },
      { property: "og:title", content: "Case Studies — Pronetheseus" },
      { property: "og:description", content: "ROI, hours saved, and revenue lift — the outcomes we deliver." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: () => (
    <>
      <div className="pt-20" />
      <CaseStudies />
      <ContactCTA />
    </>
  ),
});