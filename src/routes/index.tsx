import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WorkflowShowcase } from "@/components/sections/WorkflowShowcase";
import { Industries } from "@/components/sections/Industries";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Comparison } from "@/components/sections/Comparison";
import { Portfolio } from "@/components/sections/Portfolio";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

import heroPeople from "@/assets/hero-people-4.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "/" }],
    links: [
      { rel: "preload", as: "image", href: heroPeople.url, fetchpriority: "high" },
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
      <WorkflowShowcase />
      <CaseStudies />
      <Industries />
      <ROICalculator />
      <Pricing />
      <Testimonials />
      <Comparison />
      <Portfolio />
      <FAQ />
      <ContactCTA />
    </>
  );
}
