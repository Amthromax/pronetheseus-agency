import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pronetheseus Agency Infrastructure" },
      { name: "description", content: "Learn how Pronetheseus collects, uses, and safeguards client and operational data under SOC2-ready standards." },
      { property: "og:title", content: "Privacy Policy — Pronetheseus" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 border-b border-neutral-200">
      <div className="container-pad mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 hover:text-black mb-8 transition">
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <div className="border-b border-neutral-200 pb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-mono font-semibold text-neutral-800 uppercase tracking-wider mb-4 border border-neutral-200">
            <ShieldCheck className="size-3.5 text-[#ff7a00]" /> SOC2 Ready Compliance
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-500 font-mono">
            Last Updated: August 25, 2026 • Version 2.4
          </p>
        </div>

        <div className="mt-10 space-y-10 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Lock className="size-5 text-[#ff7a00]" /> 1. Commitment to Security & Confidentiality
            </h2>
            <p>
              Pronetheseus Agency Infrastructure Systems ("Pronetheseus", "we", "our") is dedicated to protecting client, agency, and operational telemetry data. We implement enterprise-grade encryption standard protocols (AES-256 at rest, TLS 1.3 in transit) across all n8n workflows, CRM hooks, and AI agent execution layers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Eye className="size-5 text-[#ff7a00]" /> 2. Data We Collect
            </h2>
            <p>
              We collect minimal data required to audit, deploy, and maintain custom agency infrastructure:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li><strong>Contact Information:</strong> Name, professional email, company name, and strategy booking preferences.</li>
              <li><strong>Operational Metadata:</strong> API connection keys (stored in encrypted vault infrastructure), workflow logs, and execution status metrics.</li>
              <li><strong>Technical Telemetry:</strong> Anonymized browser metadata, IP address logs for DDoS prevention, and application performance metrics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900 flex items-center gap-2">
              <FileText className="size-5 text-[#ff7a00]" /> 3. Data Ownership & Non-Disclosure
            </h2>
            <p>
              You retain 100% ownership of all proprietary code, database schema, client lists, and AI prompt architecture created during your engagement. Pronetheseus never sells, licenses, or exposes agency client data to third-party model providers for model training purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-neutral-900">
              4. Your Rights & Data Requests
            </h2>
            <p>
              You may request access to, export of, or deletion of your agency's operational data at any time. For security compliance requests, please email <a href="mailto:privacy@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">privacy@pronetheseus.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}