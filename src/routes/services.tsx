import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { ServicesCenterDetails } from "@/components/sections/ServicesCenterDetails";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & How It Works — Pronetheseus" },
      { name: "description", content: "AI Revenue Automation, AI Customer Service, AI Operations, and our 5-step automation methodology." },
      { property: "og:title", content: "Services & Automation Methodology — Pronetheseus" },
      { property: "og:description", content: "Everything we ship. From single-agent deployments to end-to-end business automation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <div className="pt-24 md:pt-32" />
      <Services />
      <ServicesCenterDetails />
      <HowItWorksSection />
      <ContactCTA />
    </>
  );
}