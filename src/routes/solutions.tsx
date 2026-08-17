import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Pronetheseus" },
      { name: "description", content: "End-to-end AI solutions for revenue, operations, and support." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: () => (
    <>
      <div className="container-pad mx-auto max-w-[1400px] pt-40">
        <SectionHeading eyebrow="Solutions" title="Composable AI, tuned to your business" />
      </div>
      <Services />
      <Industries />
      <ContactCTA />
    </>
  ),
});