import { RollingText } from "@/components/ui/rolling-text";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  FileCheck,
  Shield,
  Clock,
  Scale,
  ArrowLeft,
  BookOpen,
  GitBranch,
  KeyRound,
  Plug,
  Lock,
  CreditCard,
  AlertTriangle,
  ShieldAlert,
  Handshake,
  LogOut,
  Ban,
  Gavel,
  RefreshCw,
  Mail,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Pronetheseus Agency Infrastructure" },
      {
        name: "description",
        content:
          "The commercial and security terms governing Pronetheseus engagements: scope, SLAs, client responsibilities, credential handling, IP ownership, liability, termination, and dispute resolution.",
      },
      { property: "og:title", content: "Terms & Conditions — Pronetheseus" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  { id: "scope", n: 1, title: "Scope of Engagement" },
  { id: "definitions", n: 2, title: "Definitions" },
  { id: "sow", n: 3, title: "Statements of Work & Change Control" },
  { id: "sla", n: 4, title: "30-Day SLA & Work Guarantee" },
  { id: "client", n: 5, title: "Client Responsibilities" },
  { id: "security", n: 6, title: "Security Obligations & Credential Handling" },
  { id: "ip", n: 7, title: "Code Ownership & Intellectual Property" },
  { id: "thirdparty", n: 8, title: "Third-Party Services & API Costs" },
  { id: "confidentiality", n: 9, title: "Confidentiality" },
  { id: "payment", n: 10, title: "Payment Terms & Invoicing" },
  { id: "warranties", n: 11, title: "Warranties & Disclaimers" },
  { id: "liability", n: 12, title: "Limitation of Liability" },
  { id: "indemnity", n: 13, title: "Indemnification" },
  { id: "term", n: 14, title: "Term, Suspension & Termination" },
  { id: "acceptable", n: 15, title: "Acceptable Use" },
  { id: "subcontractors", n: 16, title: "Subcontractors & Non-Solicitation" },
  { id: "law", n: 17, title: "Governing Law & Dispute Resolution" },
  { id: "changes", n: 18, title: "Changes to These Terms & Contact" },
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

function TermsPage() {
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
            <FileCheck className="size-3.5 text-[#ff7a00]" /> Engineering Agreement
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-neutral-500 font-mono">
            Last Updated: September 8, 2026 • Version 3.0
          </p>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            These terms govern your use of this website and every engagement in which Pronetheseus
            Agency Infrastructure Systems audits, designs, builds, or operates automation infrastructure
            for you. They cover what we deliver, what we need from you, how security and credentials are
            handled on both sides, who owns the resulting work, and how the commercial relationship
            starts, changes, and ends.
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
          <Section id="scope" n={1} title="Scope of Engagement" icon={<Shield className="size-5 text-[#ff7a00]" />}>
            <p>
              By engaging Pronetheseus Agency Infrastructure Systems, you agree to these Terms. Our
              service is the design, deployment, and maintenance of custom automation infrastructure,
              including but not limited to n8n workflow orchestration, AI voice agents, and CRM
              integration layers.
            </p>
            <p>
              These Terms apply together with your Statement of Work. Where the two conflict, the signed
              Statement of Work governs for that engagement. Using this website — browsing, booking a
              call, or submitting an enquiry — also constitutes acceptance of the sections that can apply
              without an engagement.
            </p>
          </Section>

          <Section id="definitions" n={2} title="Definitions" icon={<BookOpen className="size-5 text-[#ff7a00]" />}>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Deliverables</strong> — the workflows, agents, integrations, configuration, and
                documentation produced for you under a Statement of Work.
              </li>
              <li>
                <strong>Statement of Work (SOW)</strong> — the written scope, timeline, fees, and
                acceptance criteria for a specific engagement.
              </li>
              <li>
                <strong>Client Systems</strong> — the accounts, platforms, databases, and tools you own
                or control that we are given access to.
              </li>
              <li>
                <strong>Client Data</strong> — data originating from you or your customers that passes
                through Client Systems or the Deliverables.
              </li>
              <li>
                <strong>Pre-Existing IP</strong> — tooling, libraries, templates, and methodology owned
                by Pronetheseus before or independently of your engagement.
              </li>
              <li>
                <strong>Third-Party Services</strong> — external platforms and APIs the Deliverables
                depend on, contracted by you directly or billed through us as agreed.
              </li>
            </ul>
          </Section>

          <Section
            id="sow"
            n={3}
            title="Statements of Work & Change Control"
            icon={<GitBranch className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Each engagement begins with a written SOW specifying scope, deliverables, milestones, fees,
              and acceptance criteria. Work starts once the SOW is accepted in writing and any deposit is
              received.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Changes in scope</strong> are handled through a written change order recording
                the revised scope, cost, and timeline impact. We do not absorb material scope growth
                silently, and we do not bill for it without your written approval.
              </li>
              <li>
                <strong>Acceptance.</strong> Deliverables are deemed accepted when they meet the SOW
                acceptance criteria, or after ten business days from delivery if you have not raised a
                written defect.
              </li>
              <li>
                <strong>Defects.</strong> A defect is a failure to meet the stated acceptance criteria.
                We correct defects at no charge. Requests that go beyond those criteria are a change of
                scope.
              </li>
              <li>
                <strong>Dependencies.</strong> Timelines assume access, approvals, and information arrive
                when scheduled. Delays outside our control move the timeline, not the fee.
              </li>
            </ul>
          </Section>

          <Section id="sla" n={4} title="30-Day SLA & Work Guarantee" icon={<Clock className="size-5 text-[#ff7a00]" />}>
            <p>
              We commit to a 30-day deployment window for standard Growth-tier infrastructure builds,
              measured from the date of kickoff and receipt of all required system credentials. If we
              fail to deploy a functional system within this window due solely to our own delay, you are
              entitled to a pro-rated refund of the deployment fee.
            </p>
            <p>The window is paused, and the guarantee does not apply, where delay is caused by:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>Delayed provision of credentials, access, content, or approvals by you.</li>
              <li>Scope changes requested after kickoff, until a change order is agreed.</li>
              <li>Outages, deprecations, rate limits, or policy changes at Third-Party Services.</li>
              <li>Force majeure — events outside the reasonable control of either party.</li>
            </ul>
            <p>
              Post-deployment support levels, response targets, and maintenance windows are set out in
              your SOW or support plan. Unless stated there, support is provided on a best-effort basis
              during business hours.
            </p>
          </Section>

          <Section
            id="client"
            n={5}
            title="Client Responsibilities"
            icon={<Users className="size-5 text-[#ff7a00]" />}
          >
            <p>Delivery depends on your side of the engagement. You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                Provide timely, accurate access to Client Systems, and a named decision-maker empowered
                to approve scope and sign off deliverables.
              </li>
              <li>
                Ensure you have the right to grant that access and to have us process the Client Data
                involved, including any consents or notices your customers require.
              </li>
              <li>
                Maintain your own accounts in good standing — active subscriptions, sufficient API quota,
                and valid billing on Third-Party Services the Deliverables depend on.
              </li>
              <li>
                Review and test deliverables during the acceptance window, and report suspected defects
                in writing with reproduction detail.
              </li>
              <li>
                Comply with the terms of every Third-Party Service used in your build, including their
                messaging, consent, and acceptable-use rules.
              </li>
            </ul>
          </Section>

          <Section
            id="security"
            n={6}
            title="Security Obligations & Credential Handling"
            icon={<KeyRound className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Security is a shared obligation. Our practices are described in full in our{" "}
              <Link to="/privacy" className="text-[#ff7a00] font-semibold underline">
                Privacy Policy
              </Link>
              ; the contractual commitments are here.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-base font-bold text-neutral-900">Our commitments</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2 text-neutral-600">
                  <li>
                    Encryption of Client Data in transit (TLS 1.3) and at rest (AES-256) across
                    infrastructure we operate.
                  </li>
                  <li>
                    Credentials stored only in encrypted vault infrastructure, accessible to the named
                    engineers on your engagement on a least-privilege basis.
                  </li>
                  <li>Access logging for production systems, retained and available for audit on request.</li>
                  <li>
                    Notification without undue delay, and within 72 hours of confirmation, of any breach
                    affecting your data.
                  </li>
                  <li>
                    Revocation of all access and deletion or return of Client Data within 30 days of
                    termination, confirmed in writing.
                  </li>
                  <li>
                    A Data Processing Addendum on request where we process personal data on your behalf.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-neutral-900">Your commitments</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2 text-neutral-600">
                  <li>
                    Send credentials only through the secure channel we provide — never by email, chat,
                    SMS, ticket, or shared document.
                  </li>
                  <li>
                    Issue dedicated, scoped integration accounts rather than sharing a personal login or
                    an administrator seat.
                  </li>
                  <li>
                    Keep multi-factor authentication enabled on your own accounts, and manage your users
                    and their permissions.
                  </li>
                  <li>
                    Notify us promptly of personnel changes affecting access, and of any suspected
                    compromise on your side.
                  </li>
                  <li>
                    Rotate any credential that has been exposed insecurely, including one sent to us
                    outside the secure channel.
                  </li>
                </ul>
              </div>
            </div>
            <p className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
              <strong className="text-neutral-900">We will never ask</strong> for your personal account
              password, for a multi-factor code outside a live session you scheduled, or for payment card
              or banking credentials. Treat any such request as fraudulent and report it to{" "}
              <a href="mailto:security@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">
                security@pronetheseus.com
              </a>
              .
            </p>
          </Section>

          <Section
            id="ip"
            n={7}
            title="Code Ownership & Intellectual Property"
            icon={<Scale className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Upon final payment, all custom code, workflow logic, and system documentation developed
              specifically for your business becomes your exclusive intellectual property. Pronetheseus
              retains rights only to its Pre-Existing IP — proprietary internal frameworks, libraries,
              accelerators, and methodology used to accelerate delivery.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Licence to Pre-Existing IP.</strong> Where a deliverable incorporates our
                Pre-Existing IP, you receive a perpetual, worldwide, royalty-free licence to use, modify,
                and host it as part of that deliverable. You may not resell or redistribute it as a
                standalone product.
              </li>
              <li>
                <strong>Before final payment</strong> the Deliverables are licensed to you for evaluation
                only; ownership transfers on settlement of all outstanding invoices.
              </li>
              <li>
                <strong>Client materials.</strong> You retain all rights in content, data, trademarks,
                and systems you supply, and grant us a limited licence to use them solely to perform the
                engagement.
              </li>
              <li>
                <strong>Open source.</strong> Third-party open-source components remain under their own
                licences, which are identified in the delivery documentation.
              </li>
              <li>
                <strong>Publicity.</strong> We will not name you, publish engagement metrics, or use your
                logo without your prior written consent.
              </li>
            </ul>
          </Section>

          <Section
            id="thirdparty"
            n={8}
            title="Third-Party Services & API Costs"
            icon={<Plug className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Deliverables typically depend on Third-Party Services — hosting, workflow platforms, AI
              model providers, telephony, messaging, and your CRM. Unless your SOW says otherwise:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                Subscription, usage, and API consumption fees for those services are billed to you
                directly and are not included in our fees.
              </li>
              <li>
                Usage-based costs vary with your volume. Estimates given during scoping are indicative,
                not a cap or a guarantee.
              </li>
              <li>
                We are not responsible for outages, deprecations, price changes, rate limits, or account
                suspensions imposed by those providers.
              </li>
              <li>
                Where a provider makes a breaking change, remediation is handled under your support plan
                or as a change order.
              </li>
            </ul>
          </Section>

          <Section id="confidentiality" n={9} title="Confidentiality" icon={<Lock className="size-5 text-[#ff7a00]" />}>
            <p>
              Each party will keep the other's non-public information confidential, use it only to
              perform the engagement, and protect it with at least reasonable care. This obligation
              survives termination indefinitely for trade secrets and for five years for other
              confidential information.
            </p>
            <p>
              It does not apply to information that is public through no fault of the receiving party,
              was already lawfully known, is independently developed, or must be disclosed by law — in
              which case the disclosing party is notified where legally permitted.
            </p>
          </Section>

          <Section
            id="payment"
            n={10}
            title="Payment Terms & Invoicing"
            icon={<CreditCard className="size-5 text-[#ff7a00]" />}
          >
            <p>
              Deployment fees are invoiced 50% upfront to secure the engineering slot, with the remaining
              50% due upon system handover. Retainer and maintenance fees are billed monthly in advance.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Payment window.</strong> Invoices are due within 14 days of issue unless your SOW
                states otherwise.
              </li>
              <li>
                <strong>Late payment.</strong> Overdue amounts may accrue interest at the lower of 1.5%
                per month or the maximum permitted by law, and we may suspend work and hosted services on
                seven days' written notice.
              </li>
              <li>
                <strong>Taxes.</strong> Fees are exclusive of VAT, GST, sales tax, and withholding, which
                are your responsibility.
              </li>
              <li>
                <strong>Refunds.</strong> Deposits are non-refundable once engineering work has begun,
                except under the SLA guarantee in section 4.
              </li>
              <li>
                <strong>Price changes.</strong> Recurring fees may be adjusted with 30 days' written
                notice, effective from your next billing cycle.
              </li>
            </ul>
          </Section>

          <Section
            id="warranties"
            n={11}
            title="Warranties & Disclaimers"
            icon={<AlertTriangle className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We warrant that services are performed with reasonable skill and care by qualified
              personnel, and that Deliverables will materially conform to the SOW acceptance criteria for
              30 days after acceptance. Our sole obligation for a breach of this warranty is to correct
              the non-conformity, or to refund the fee for the affected deliverable if we cannot.
            </p>
            <p>
              Beyond that, services and deliverables are provided "as is". We do not warrant uninterrupted
              or error-free operation, nor any specific business outcome — revenue, bookings, conversion
              rate, or cost saving. AI components are probabilistic: outputs can be inaccurate or
              unexpected, and you are responsible for the human review and approval steps appropriate to
              your risk. We do not provide legal, tax, financial, or regulatory-compliance advice, and
              you remain responsible for the lawfulness of the processes you automate.
            </p>
          </Section>

          <Section
            id="liability"
            n={12}
            title="Limitation of Liability"
            icon={<ShieldAlert className="size-5 text-[#ff7a00]" />}
          >
            <p>
              To the maximum extent permitted by law, neither party is liable for indirect, incidental,
              special, consequential, or punitive damages, nor for lost profits, lost revenue, lost
              business, or loss of data, even if advised of the possibility.
            </p>
            <p>
              Each party's total aggregate liability arising out of or relating to the engagement is
              limited to the total fees paid by you to Pronetheseus in the twelve months preceding the
              event giving rise to the claim.
            </p>
            <p>
              These limits do not apply to fraud, wilful misconduct, breach of confidentiality, your
              payment obligations, or any liability that cannot be limited under applicable law.
            </p>
          </Section>

          <Section
            id="indemnity"
            n={13}
            title="Indemnification"
            icon={<Handshake className="size-5 text-[#ff7a00]" />}
          >
            <p>
              You will indemnify Pronetheseus against third-party claims arising from Client Data, from
              your use of the Deliverables in breach of these Terms or applicable law, and from your
              breach of a Third-Party Service's terms.
            </p>
            <p>
              We will indemnify you against third-party claims that our Deliverables, as delivered and
              used as intended, infringe that party's intellectual property rights, excluding claims
              arising from your modifications, from your materials, or from combination with systems we
              did not supply.
            </p>
            <p>
              In each case the indemnified party must give prompt written notice, allow the indemnifying
              party to control the defence, and provide reasonable cooperation.
            </p>
          </Section>

          <Section
            id="term"
            n={14}
            title="Term, Suspension & Termination"
            icon={<LogOut className="size-5 text-[#ff7a00]" />}
          >
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                <strong>Term.</strong> Project engagements run until the Deliverables are accepted.
                Retainers renew monthly until cancelled.
              </li>
              <li>
                <strong>Termination for convenience.</strong> Either party may end a retainer with 30
                days' written notice. Fees for work performed up to the termination date remain payable.
              </li>
              <li>
                <strong>Termination for cause.</strong> Either party may terminate immediately on a
                material breach that is not cured within 15 days of written notice.
              </li>
              <li>
                <strong>Suspension.</strong> We may suspend services for non-payment, for a security risk
                created by your systems, or for a breach of section 15.
              </li>
              <li>
                <strong>On termination</strong> we revoke access, hand over deliverables you have paid
                for, and delete or return Client Data within 30 days. Transition assistance beyond
                handover is billable at our standard rates.
              </li>
              <li>
                <strong>Survival.</strong> Sections 7, 9, 11, 12, 13, and 17 survive termination.
              </li>
            </ul>
          </Section>

          <Section id="acceptable" n={15} title="Acceptable Use" icon={<Ban className="size-5 text-[#ff7a00]" />}>
            <p>You agree not to use our services or the Deliverables to:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li>
                Send unsolicited bulk messaging, or contact people without the consent their jurisdiction
                requires.
              </li>
              <li>Impersonate a person or organisation, or misrepresent an AI agent as a human where disclosure is required.</li>
              <li>Process data you have no lawful right to process, or scrape systems in breach of their terms.</li>
              <li>Break the law, infringe intellectual property, or facilitate fraud or harassment.</li>
              <li>Attack, probe, or attempt to gain unauthorised access to our infrastructure or another party's systems.</li>
            </ul>
            <p>
              We may suspend or terminate immediately for a breach of this section, and will cooperate
              with lawful requests from authorities where required.
            </p>
          </Section>

          <Section
            id="subcontractors"
            n={16}
            title="Subcontractors & Non-Solicitation"
            icon={<Users className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We may use vetted subcontractors and sub-processors to deliver an engagement and remain
              fully responsible for their work and for their compliance with these Terms. Categories of
              sub-processor are listed in our Privacy Policy, and a named list is available on request.
            </p>
            <p>
              During the engagement and for twelve months afterwards, neither party will directly solicit
              for employment the other's personnel who were materially involved in the engagement,
              excluding responses to general public job advertisements.
            </p>
          </Section>

          <Section
            id="law"
            n={17}
            title="Governing Law & Dispute Resolution"
            icon={<Gavel className="size-5 text-[#ff7a00]" />}
          >
            <p>
              These Terms are governed by the laws of the jurisdiction stated in your Statement of Work,
              without regard to conflict-of-law rules. Where no jurisdiction is stated, the governing law
              is that of the place of business of Pronetheseus.
            </p>
            <p>
              Before starting formal proceedings, the parties will attempt in good faith to resolve any
              dispute through escalation to senior representatives for 30 days. Either party may seek
              injunctive relief at any time to protect confidential information or intellectual property.
              Claims are brought individually, not as part of a class or representative action, to the
              extent permitted by law.
            </p>
            <p>
              If any provision is held unenforceable, the remainder stays in force. These Terms together
              with your SOW and any DPA form the entire agreement between the parties on this subject
              matter. Neither party may assign the agreement without the other's written consent, except
              to a successor in a merger or sale of substantially all assets.
            </p>
          </Section>

          <Section
            id="changes"
            n={18}
            title="Changes to These Terms & Contact"
            icon={<RefreshCw className="size-5 text-[#ff7a00]" />}
          >
            <p>
              We may update these Terms as our services evolve. The version number and last-updated date
              above always reflect the current revision. Material changes affecting active engagements
              take effect 30 days after we notify you by email; continuing to use the services after that
              date constitutes acceptance. Changes never apply retroactively to a signed SOW without your
              written agreement.
            </p>
            <p className="flex flex-wrap items-center gap-x-1.5">
              <Mail className="size-4 text-[#ff7a00]" /> Contract and billing questions:{" "}
              <a href="mailto:hello@amthromax.com" className="text-[#ff7a00] font-semibold underline">
                hello@amthromax.com
              </a>
              . Security matters:{" "}
              <a href="mailto:security@pronetheseus.com" className="text-[#ff7a00] font-semibold underline">
                security@pronetheseus.com
              </a>
              .
            </p>
            <p className="text-sm text-neutral-500">
              Related: see our{" "}
              <Link to="/privacy" className="text-[#ff7a00] font-semibold underline">
                Privacy Policy
              </Link>{" "}
              for how we collect, protect, and retain data.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
