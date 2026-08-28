import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Proven System Results & Case Studies — Pronetheseus" },
      { name: "description", content: "Real problem-to-result breakdowns demonstrating how service businesses eliminate operational drag." },
      { property: "og:title", content: "Case Studies & Results — Pronetheseus" },
      { property: "og:description", content: "ROI, hours saved, and lead response benchmarks for service businesses." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <div className="bg-sandel min-h-screen">
      <div className="pt-20 md:pt-28" />
      <Testimonials />
      <CaseStudies />
      <ContactCTA />
    </div>
  );
}