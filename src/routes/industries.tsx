import { createFileRoute } from "@tanstack/react-router";
import { Industries } from "@/components/sections/Industries";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Helleious" },
      { name: "description", content: "AI automation playbooks tuned to your industry." },
      { property: "og:title", content: "Industries — Helleious" },
      { property: "og:description", content: "Playbooks for healthcare, real estate, finance, SaaS, and more." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <>
      <div className="container-pad mx-auto max-w-[1400px] pt-40">
        <SectionHeading eyebrow="Industries" title="Built for your operating model" />
      </div>
      <Industries />
      <ContactCTA />
    </>
  ),
});