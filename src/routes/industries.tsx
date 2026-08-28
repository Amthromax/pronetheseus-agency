import { createFileRoute } from "@tanstack/react-router";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { IndustriesCenterDetails } from "@/components/sections/IndustriesCenterDetails";
import { FlagshipProduct } from "@/components/sections/FlagshipProduct";
import { Industries } from "@/components/sections/Industries";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & AI Revenue Engine — Pronetheseus" },
      { name: "description", content: "AI automation systems and flagships tailored for Home Services, Dental Clinics, Real Estate, Professional Services, and Marketing Agencies." },
      { property: "og:title", content: "Industries & AI Revenue Engine — Pronetheseus" },
      { property: "og:description", content: "Playbooks and AI systems engineered for service businesses." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="bg-sandel min-h-screen">
      <div className="pt-20 md:pt-28" />
      <WhoWeHelp />
      <IndustriesCenterDetails />
      <FlagshipProduct />
      <Industries />
      <ContactCTA />
    </div>
  );
}