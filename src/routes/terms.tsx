import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck, Shield, Clock, Scale, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pronetheseus Agency Infrastructure" },
      { name: "description", content: "Commercial terms governing engineering engagements, SLAs, and deliverables with Pronetheseus." },
      { property: "og:title", content: "Terms of Service — Pronetheseus" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 border-b border-neutral-200">
      <div className="container-pad mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 hover:text-black mb-8 transition">
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <div className="border-b border-neutral-200 pb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-mono font-semibold text-neutral-800 uppercase tracking-wider mb-4 border border-neutral-200">
            <FileCheck className="size-3.5 text-[#ff7a00]" /> Engineering Agreement
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-neutral-500 font-mono">
            Last Updated: August 25, 2026 • Version 2.1
          </p>
        </div>

        <div className="mt-10 space-y-10 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Shield className="size-5 text-[#ff7a00]" /> 1. Scope of Engagement
            </h2>
            <p>
              Pronetheseus provides custom automation engineering, n8n workflow deployment, AI agent architecture, and agency infrastructure optimization under individual Statements of Work (SOW). These Terms govern your access to and use of our engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Clock className="size-5 text-[#ff7a00]" /> 2. 30-Day SLA & Work Guarantee
            </h2>
            <p>
              Our 30-Day SLA guarantees that delivered automation workflows save at least 20 hours per week of manual operational effort within 30 days of turnkey handoff. If an implemented workflow fails to achieve this benchmark, Pronetheseus will provide dedicated engineering hours at zero additional cost until achieved.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Scale className="size-5 text-[#ff7a00]" /> 3. Code Ownership & Intellectual Property
            </h2>
            <p>
              Upon payment of applicable invoice milestones, the client receives 100% full code ownership and repository access to custom n8n JSON nodes, Python/TypeScript agent code, and webhook integrations. Zero vendor lock-in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900">
              4. Payment Terms & Invoicing
            </h2>
            <p>
              Milestone invoices are payable Net 15 via credit card, ACH, or wire transfer. Setup engines require upfront initiation deposit as detailed in your SOW.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}