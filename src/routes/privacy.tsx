import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Helleious" },
      { name: "description", content: "How Helleious collects, uses, and protects your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <div className="pt-40">
      <div className="container-pad mx-auto max-w-3xl pb-24">
        <SectionHeading center={false} eyebrow="Legal" title="Privacy Policy" />
        <div className="mt-10 space-y-4 text-muted-foreground">
          <p>Helleious respects your privacy. We collect only what we need to serve you, we never sell your data, and we host in SOC2-ready infrastructure.</p>
          <h3 className="mt-8 text-foreground">Data we collect</h3>
          <p>Contact form submissions (name, email, message) and standard analytics.</p>
          <h3 className="mt-8 text-foreground">Your rights</h3>
          <p>You can request access, correction, or deletion of your data at any time by emailing privacy@helleious.com.</p>
        </div>
      </div>
    </div>
  ),
});