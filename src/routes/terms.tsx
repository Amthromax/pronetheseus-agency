import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Helleious" },
      { name: "description", content: "The terms that govern engagements with Helleious." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-3xl pb-24">
        <SectionHeading center={false} eyebrow="Legal" title="Terms of Service" />
        <div className="mt-10 space-y-4 text-muted-foreground">
          <p>By engaging Helleious, you agree to these simple terms. Full commercial terms are captured in your signed statement of work.</p>
          <h3 className="mt-8 text-foreground">Deliverables</h3>
          <p>Deliverables are scoped and documented per project.</p>
          <h3 className="mt-8 text-foreground">Payment</h3>
          <p>Milestones are invoiced upfront and net 15.</p>
        </div>
      </div>
    </div>
  ),
});