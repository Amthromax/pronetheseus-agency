import { createFileRoute } from "@tanstack/react-router";
import { Industries } from "@/components/sections/Industries";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Pronetheseus" },
      { name: "description", content: "AI automation playbooks tuned to your industry." },
      { property: "og:title", content: "Industries — Pronetheseus" },
      { property: "og:description", content: "Playbooks for healthcare, real estate, finance, SaaS, and more." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <>
      <div className="pt-24 md:pt-32" />
      <Industries />
      <ContactCTA />
    </>
  ),
});