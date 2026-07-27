import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Helleious" },
      { name: "description", content: "AI agents, n8n automation, CRM automation, voice AI, custom software — and more." },
      { property: "og:title", content: "Services — Helleious" },
      { property: "og:description", content: "Everything we ship. From single-agent deployments to end-to-end business automation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <div className="container-pad mx-auto max-w-[1400px] pt-40">
        <SectionHeading eyebrow="Services" title="Everything we ship" description="A senior team, ready to deploy production-grade AI." />
      </div>
      <Services />
      <ContactCTA />
    </>
  ),
});