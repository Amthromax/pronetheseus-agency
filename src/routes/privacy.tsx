import { RollingText } from "@/components/ui/rolling-text";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  ArrowLeft,
  Server,
  Users,
  Cpu,
  Timer,
  Globe2,
  Siren,
  UserCheck,
  Cookie,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pronetheseus Agency Infrastructure" },
      {
        name: "description",
        content:
          "How Pronetheseus collects, uses, retains, and safeguards client and operational data — including our security program, sub-processors, AI data handling, retention schedule, and your data rights.",
      },
      { property: "og:title", content: "Privacy Policy — Pronetheseus" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { id: "commitment", n: 1, title: "Commitment to Security & Confidentiality" },
  { id: "collect", n: 2, title: "Data We Collect" },
  { id: "use", n: 3, title: "How We Use Data & Legal Bases" },
  { id: "credentials", n: 4, title: "Credential & Secrets Handling" },
  { id: "ai", n: 5, title: "AI Model & Automation Data Handling" },
  { id: "subprocessors", n: 6, title: "Sub-Processors & Third Parties" },
  { id: "security", n: 7, title: "Our Security Program" },
  { id: "incident", n: 8, title: "Incident Response & Breach Notification" },
  { id: "retention", n: 9, title: "Data Retention & Deletion" },
  { id: "transfers", n: 10, title: "International Data Transfers" },
  { id: "ownership", n: 11, title: "Data Ownership & Non-Disclosure" },
  { id: "rights", n: 12, title: "Your Rights & Data Requests" },
  { id: "cookies", n: 13, title: "Cookies & Analytics" },
  { id: "changes", n: 14, title: "Changes to This Policy" },
  { id: "contact", n: 15, title: "Contact & Data Protection Enquiries" },
];

function Section({
  id,
  n,
  title,
  icon,
  children,
}: {
  id: string;
  n: number;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="space-y-3 scroll-mt-32">
      <h2 className="font-display text-xl font-bold text-neutral-900 flex items-center gap-2">
        {icon} {n}. {title}
      </h2>
      {children}
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 border-b border-neutral-200">
      <div className="container-pad mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 hover:text-black mb-8 transition"
        >
          <ArrowLeft className="size-4" /> <RollingText>Back to Home</RollingText>
        </Link>

        <div className="border-b border-neutral-200 pb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-xs font-mono font-semibold text-neutral-800 uppercase tracking-wider mb-4 border border-neutral-200">
            <ShieldCheck className="size-3.5 text-[#ff7a00]" /> SOC2 Ready Compliance
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-neutral-500 font-mono">
            Last Updated: September 8, 2026 • Version 3.0
          </p>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            This policy explains what data Pronetheseus Agency Infrastructure Systems handles when we
            audit, build, and operate automation infrastructure for your business — how we protect it,
            how long we keep it, who else touches it, and what you can ask us to do with it. It applies
            to our website, our booking and contact flows, and every workflow, agent, or integration we
            deploy on your behalf.
          </p>
        </div>

        <nav aria-label="Contents" className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-3">
            Contents
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {SECTIONS.map((s) => (
              <li key={s.id} className="text-sm">
                <a href={"#" + s.id} className="text-neutral-600 hover:text-[#ff7a00] transition">
                  <span className="font-mono text-neutral-400 mr-2">{String(s.n).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-10 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <Section
            id="commitment"
            n={1}
            title="Commitment to Security & Confidentiality"
            icon={<Lock className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Pronetheseus Agency Infrastructure Systems ("Pronetheseus", "we", "our") is dedicated to
              protecting client, agency, and operational telemetry data. We implement enterprise-grade
              encryption standard protocols (AES-256 at rest, TLS 1.3 in transit) across all n8n
              workflows, CRM hooks, and AI agent execution layers.
            </p>
            <p>
              Security is treated as a delivery requirement, not an afterthought. Every engagement is
              scoped with a least-privilege access plan, a named owner for each credential, and a
              documented decommissioning path so that access ends when the engagement does.
            </p>
            <p>
              Where we process personal data on your behalf — for example, leads flowing through a
              workflow we built — we act as a <strong>data processor</strong> and you remain the{" "}
              <strong>data controller</strong>. Where we process data for our own purposes, such as our
              website and sales enquiries, we act as the controller. A Data Processing Addendum (DPA) is
              available on request and is incorporated into every Statement of Work that touches
              personal data.
            </p>
          </Section>

          <Section id="collect" n={2} title="Data We Collect" icon={<Eye className="size-5 text-[#ff7a00]" />}>
            <p>
              We collect the minimum data required to audit, deploy, and maintain custom agency
              infrastructure:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Contact Information:</strong> Name, professional email, company name, phone
                number where you provide one, and strategy booking preferences.
              </li>
              <li>
                <strong>Operational Metadata:</strong> API connection keys (stored in encrypted vault
                infrastructure), workflow logs, execution status metrics, and error traces.
              </li>
              <li>
                <strong>Technical Telemetry:</strong> Anonymised browser metadata, IP address logs for
                DDoS prevention and abuse detection, and application performance metrics.
              </li>
              <li>
                <strong>Engagement Records:</strong> Statements of Work, meeting notes, architecture
                diagrams, invoices, and support correspondence.
              </li>
              <li>
                <strong>Client End-User Data (processor role):</strong> Records that pass through the
                systems we build for you — typically lead names, contact details, enquiry text, and
                booking timestamps. We do not choose what this contains; your configuration does.
              </li>
            </ul>
            <p>
              We do not intentionally collect special-category data (health, biometric, financial account
              numbers, government identifiers, or similar). If your use case requires processing that
              kind of data, it must be scoped explicitly in a Statement of Work with additional controls
              agreed in writing beforehand.
            </p>
          </Section>

          <Section
            id="use"
            n={3}
            title="How We Use Data & Legal Bases"
            icon={<FileText className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We use data only for the purposes below, each with a stated lawful basis under GDPR
              Article 6:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Delivering the engagement</strong> — building, testing, and operating your
                automation systems. Basis: performance of a contract.
              </li>
              <li>
                <strong>Support and incident resolution</strong> — reading logs and traces to diagnose
                failures. Basis: performance of a contract.
              </li>
              <li>
                <strong>Security and abuse prevention</strong> — rate limiting, audit logging, and
                intrusion detection. Basis: legitimate interests.
              </li>
              <li>
                <strong>Service improvement</strong> — aggregated, de-identified performance metrics.
                Basis: legitimate interests.
              </li>
              <li>
                <strong>Billing and legal compliance</strong> — invoicing, tax, and statutory
                record-keeping. Basis: legal obligation.
              </li>
              <li>
                <strong>Sales and marketing communication</strong> — replying to enquiries and sending
                material you asked for. Basis: consent, withdrawable at any time.
              </li>
            </ul>
            <p>
              We do not sell personal data, we do not share it with data brokers, and we do not use
              client operational data to build lookalike audiences or advertising profiles.
            </p>
          </Section>

          <Section
            id="credentials"
            n={4}
            title="Credential & Secrets Handling"
            icon={<Server className="size-5 text-[#ff7a00]" />}
          >
            <p>Deploying automation requires access to your systems. We handle that access under strict rules:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Never in plain text.</strong> Credentials are never accepted or stored in email,
                chat, tickets, spreadsheets, or source code. If one is sent to us insecurely, we ask you
                to rotate it immediately.
              </li>
              <li>
                <strong>Vault storage only.</strong> Secrets live in encrypted vault infrastructure with
                access scoped to the named engineers on your engagement.
              </li>
              <li>
                <strong>Least privilege.</strong> We request the narrowest scope that will do the job — a
                dedicated integration user rather than an administrator seat, read-only where writes are
                not required.
              </li>
              <li>
                <strong>Prefer delegated auth.</strong> Where a provider supports OAuth or scoped service
                accounts, we use those instead of shared passwords. We never ask for your personal
                account password, and we will never ask for multi-factor codes outside a live, scheduled
                session you initiated.
              </li>
              <li>
                <strong>Rotation and revocation.</strong> Credentials are rotated on personnel change and
                revoked at engagement close, with written confirmation of decommissioning.
              </li>
              <li>
                <strong>Auditability.</strong> Access to production secrets is logged, and those logs are
                retained for the period in section 9.
              </li>
            </ul>
          </Section>

          <Section
            id="ai"
            n={5}
            title="AI Model & Automation Data Handling"
            icon={<Cpu className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Our systems call third-party AI models. How your data reaches those models matters, so we
              are explicit about it:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>No training on your data.</strong> We use enterprise or API tiers configured so
                that prompts and completions are not used to train third-party foundation models, and we
                do not use client data to train models of our own.
              </li>
              <li>
                <strong>Minimised prompts.</strong> Agents are designed to send the fields a task
                actually needs, rather than whole records, and to redact identifiers where the task does
                not require them.
              </li>
              <li>
                <strong>Provider disclosure.</strong> The model providers used in your build are named in
                your Statement of Work and listed in section 6. We tell you before we introduce a new
                one.
              </li>
              <li>
                <strong>Human review boundaries.</strong> Engineers may read execution traces to debug a
                failure. Where those traces contain personal data, access is limited to the assigned
                engineers and is logged.
              </li>
              <li>
                <strong>Output limitations.</strong> AI-generated output can be wrong. Systems we deploy
                that affect customers are built with review steps, confidence thresholds, or fallback
                paths appropriate to the risk, as agreed in scoping.
              </li>
            </ul>
          </Section>

          <Section
            id="subprocessors"
            n={6}
            title="Sub-Processors & Third Parties"
            icon={<Users className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We rely on a small set of infrastructure providers to deliver the service. Each is bound by
              a written agreement with confidentiality and security obligations no weaker than those in
              this policy.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Cloud hosting and compute</strong> — running workflow engines, agent runtimes,
                and application infrastructure.
              </li>
              <li>
                <strong>Workflow automation platform</strong> — n8n instances, self-hosted or managed
                depending on your deployment model.
              </li>
              <li>
                <strong>AI model providers</strong> — for agent reasoning and language tasks, on
                non-training tiers.
              </li>
              <li>
                <strong>Communications infrastructure</strong> — transactional email, SMS, and voice
                routing where your build uses them.
              </li>
              <li>
                <strong>Business operations</strong> — scheduling, invoicing, error monitoring, and
                product analytics.
              </li>
            </ul>
            <p>
              A current, named sub-processor list is maintained and provided on request to{" "}
              <a href="mailto:privacy@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">
                privacy@pronetheseus.com
              </a>
              . Clients under an active DPA are notified before a new sub-processor with access to their
              data is added, and may object on reasonable security grounds.
            </p>
          </Section>

          <Section
            id="security"
            n={7}
            title="Our Security Program"
            icon={<ShieldCheck className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We operate a defence-in-depth program built around SOC 2 Trust Services criteria. Controls
              are grouped below.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-base font-bold text-neutral-900">Technical controls</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2 text-neutral-600">
                  <li>AES-256 encryption at rest and TLS 1.3 in transit across all managed infrastructure.</li>
                  <li>Secrets held in a dedicated encrypted vault, never in repositories or configuration files.</li>
                  <li>
                    Environment isolation — development, staging, and production are separated, and
                    production data is never copied into lower environments.
                  </li>
                  <li>Mandatory multi-factor authentication and SSO on all internal accounts and provider consoles.</li>
                  <li>
                    Automated dependency and vulnerability scanning on our codebases, with a defined
                    remediation window by severity.
                  </li>
                  <li>Centralised audit logging for access to production systems and client credentials.</li>
                  <li>Encrypted, access-controlled backups with periodic restore testing.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-neutral-900">Organisational controls</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2 text-neutral-600">
                  <li>Role-based access on a least-privilege, need-to-know basis, reviewed on a recurring schedule.</li>
                  <li>Structured onboarding, signed confidentiality agreements, and same-day offboarding revocation.</li>
                  <li>Peer review required on changes to production automation, with change history retained.</li>
                  <li>Documented incident response, business continuity, and disaster recovery procedures.</li>
                  <li>Annual security training for all personnel with production access.</li>
                  <li>Vendor security review before any new sub-processor is granted client data access.</li>
                </ul>
              </div>
            </div>
            <p className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
              <strong className="text-neutral-900">Responsible disclosure.</strong> If you believe you
              have found a vulnerability in our website or in infrastructure we operate, email{" "}
              <a href="mailto:security@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">
                security@pronetheseus.com
              </a>
              . Please include reproduction steps and avoid accessing or modifying data that is not
              yours. We acknowledge reports within two business days and will not pursue action against
              good-faith research that follows this guidance.
            </p>
            <p className="text-sm text-neutral-500">
              No system is perfectly secure. These measures reduce risk; they are not a guarantee against
              every possible compromise, and this section describes our practices rather than offering a
              warranty.
            </p>
          </Section>

          <Section
            id="incident"
            n={8}
            title="Incident Response & Breach Notification"
            icon={<Siren className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We maintain a written incident response plan covering detection, containment, eradication,
              recovery, and post-incident review.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Triage.</strong> Suspected incidents are assigned a severity and an owner on
                detection, with containment prioritised over investigation.
              </li>
              <li>
                <strong>Client notification.</strong> Where a confirmed breach affects your data, we
                notify you without undue delay and in any case within 72 hours of confirmation, with what
                we know at the time.
              </li>
              <li>
                <strong>Content of notice.</strong> Nature of the incident, categories and approximate
                volume of data affected, likely consequences, measures taken, and a point of contact.
              </li>
              <li>
                <strong>Regulatory support.</strong> As processor, we assist you with your own
                notification obligations to supervisory authorities and affected individuals.
              </li>
              <li>
                <strong>Post-incident review.</strong> Every significant incident produces a written
                root-cause analysis and corrective actions, shared with affected clients on request.
              </li>
            </ul>
          </Section>

          <Section
            id="retention"
            n={9}
            title="Data Retention & Deletion"
            icon={<Timer className="size-5 text-[#ff7a00]" />}
          >
            <p>We keep data only as long as it serves the purpose it was collected for:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Sales enquiries that do not convert</strong> — up to 24 months, then deleted.
              </li>
              <li>
                <strong>Client operational data in systems we host</strong> — for the life of the
                engagement, then deleted or exported to you within 30 days of termination.
              </li>
              <li>
                <strong>Workflow execution logs</strong> — 90 days by default, configurable per
                engagement.
              </li>
              <li>
                <strong>Security and access audit logs</strong> — 12 months, to support investigation.
              </li>
              <li>
                <strong>Contracts, invoices, and tax records</strong> — as required by applicable law,
                typically 7 years.
              </li>
              <li>
                <strong>Backups</strong> — deleted data persists in encrypted backups until they rotate
                out, normally within 35 days.
              </li>
            </ul>
            <p>
              On written request we will delete your data ahead of these schedules, except where we are
              legally required to retain it. Deletion is confirmed in writing.
            </p>
          </Section>

          <Section
            id="transfers"
            n={10}
            title="International Data Transfers"
            icon={<Globe2 className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Our infrastructure and sub-processors may be located outside your country. Where personal
              data is transferred out of the UK, EEA, or another jurisdiction with transfer restrictions,
              we rely on an approved mechanism — an adequacy decision, or Standard Contractual Clauses
              with a transfer risk assessment — and apply encryption in transit and at rest throughout.
            </p>
            <p>
              If your engagement requires data residency in a specific region, tell us during scoping. We
              can typically pin hosting and model routing to a nominated region, subject to provider
              availability, and will record that commitment in your Statement of Work.
            </p>
          </Section>

          <Section
            id="ownership"
            n={11}
            title="Data Ownership & Non-Disclosure"
            icon={<Lock className="size-5 text-[#ff7a00]" />}
          >
            <p>
              You retain 100% ownership of all proprietary code, database schema, client lists, and AI
              prompt architecture created during your engagement. Pronetheseus never sells, licenses, or
              exposes agency client data to third-party model providers for model training purposes.
            </p>
            <p>
              We treat your commercial information as confidential indefinitely, subject only to
              disclosure required by law. We will not name you as a client, publish metrics from your
              engagement, or use your logo in marketing without your prior written consent.
            </p>
          </Section>

          <Section
            id="rights"
            n={12}
            title="Your Rights & Data Requests"
            icon={<UserCheck className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Depending on where you live, you may have the right to access, correct, delete, port, or
              restrict the processing of your personal data, to object to processing based on legitimate
              interests, and to withdraw consent at any time without affecting prior processing.
              California residents additionally have the right to know what is collected, to delete, to
              correct, and to opt out of sale or sharing — we do not sell or share personal data as those
              terms are defined under the CCPA/CPRA.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>How to ask.</strong> Email{" "}
                <a href="mailto:privacy@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">
                  privacy@pronetheseus.com
                </a>{" "}
                from the address on file, or use the details in section 15.
              </li>
              <li>
                <strong>Verification.</strong> We verify identity before acting, proportionate to the
                sensitivity of the request.
              </li>
              <li>
                <strong>Timing.</strong> We respond within 30 days, extendable once by a further 30 days
                for complex requests, and we tell you if we need the extension.
              </li>
              <li>
                <strong>Cost.</strong> Free, unless a request is manifestly unfounded or excessive.
              </li>
              <li>
                <strong>Processor requests.</strong> If your data reached us through a client of ours, we
                route your request to that client as controller and support them in answering it.
              </li>
              <li>
                <strong>No retaliation.</strong> Exercising these rights will never affect the service or
                pricing you receive.
              </li>
            </ul>
            <p>
              If you are unhappy with our response, you may lodge a complaint with your local supervisory
              authority. We would appreciate the chance to resolve it with you first.
            </p>
          </Section>

          <Section
            id="cookies"
            n={13}
            title="Cookies & Analytics"
            icon={<Cookie className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Our website uses strictly necessary cookies to function and, with your consent, a small
              number of analytics cookies to understand which pages are useful. You choose this in the
              consent banner on your first visit, and your choice is stored locally in your browser so we
              do not ask again.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Strictly necessary</strong> — session integrity, security, and remembering your
                consent choice. These cannot be disabled.
              </li>
              <li>
                <strong>Analytics</strong> — aggregated page and performance metrics. Loaded only after
                you accept.
              </li>
              <li>
                <strong>No advertising cookies.</strong> We do not run third-party ad or cross-site
                tracking pixels.
              </li>
            </ul>
            <p>
              You can clear or block cookies in your browser at any time. We honour Global Privacy
              Control signals where your browser sends them. Declining analytics does not reduce site
              functionality.
            </p>
          </Section>

          <Section
            id="changes"
            n={14}
            title="Changes to This Policy"
            icon={<FileText className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We update this policy as our infrastructure and obligations change. The version number and
              last-updated date at the top of this page always reflect the current revision. For material
              changes that affect how we handle client data, we notify active clients by email at least
              30 days before the change takes effect, and prior versions are available on request.
            </p>
          </Section>

          <Section
            id="contact"
            n={15}
            title="Contact & Data Protection Enquiries"
            icon={<Mail className="size-5 text-[#ff7a00]" />}
          >
            <p>
              For privacy questions, data requests, DPA copies, or the current sub-processor list,
              contact{" "}
              <a href="mailto:privacy@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">
                privacy@pronetheseus.com
              </a>
              . For vulnerability reports and security matters, contact{" "}
              <a href="mailto:security@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">
                security@pronetheseus.com
              </a>
              . For anything else, our general address is{" "}
              <a href="mailto:hello@amthromax.com" className="text-[#ff7a00] font-semibold underline">
                hello@amthromax.com
              </a>
              .
            </p>
            <p className="text-sm text-neutral-500">
              Related: see our{" "}
              <Link to="/terms" className="text-[#ff7a00] font-semibold underline">
                Terms of Service
              </Link>{" "}
              for the commercial terms, SLAs, and security obligations governing engagements.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
