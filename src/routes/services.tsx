import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pronetheseus" },
      { name: "description", content: "AI agents, n8n automation, CRM automation, voice AI, custom software — and more." },
      { property: "og:title", content: "Services — Pronetheseus" },
      { property: "og:description", content: "Everything we ship. From single-agent deployments to end-to-end business automation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <div className="pt-24 md:pt-32" />
      <Services />
      <ContactCTA />
    </>
  ),
});