export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  logo?: string;
  hero: string;
  before: string;
  after: string;
  metrics: { v: number; s: string; l: string }[];
  quote: string;
  who: string;
  role: string;
  customer: {
    founded: string;
    size: string;
    location: string;
    website: string;
    stack: string[];
  };
  challenge: string;
  approach: string[];
  feedback: { name: string; role: string; text: string; rating: number }[];
  gallery: { src: string; caption: string }[];
  workflow: { step: string; title: string; description: string; duration: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northwind-realty",
    company: "Northwind Realty",
    industry: "Real Estate",
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
    before: "Sales team spent 22 hrs/week qualifying leads by hand.",
    after: "AI agent qualifies & books tours 24/7 with 92% accuracy.",
    metrics: [
      { v: 880, s: "hrs", l: "Saved / month" },
      { v: 312, s: "%", l: "ROI" },
      { v: 47, s: "%", l: "More calls" },
    ],
    quote:
      "Helleious quietly replaced an entire SDR function. We now book more meetings with fewer people.",
    who: "Sarah Chen",
    role: "VP Sales",
    customer: {
      founded: "2014",
      size: "180 employees",
      location: "Seattle, WA",
      website: "northwindrealty.com",
      stack: ["HubSpot", "Twilio", "Google Calendar", "Slack"],
    },
    challenge:
      "Northwind's SDR team was buried under inbound leads from Zillow, Redfin, and their own site. Response times exceeded 6 hours on evenings and weekends, and hot buyers were slipping to competitors.",
    approach: [
      "Voice + chat AI agent trained on 3 years of qualified conversations.",
      "Two-way calendar sync with each agent's Google Calendar.",
      "CRM push to HubSpot with enrichment and lead scoring.",
      "Human-in-the-loop escalation for offers above $2M.",
    ],
    feedback: [
      { name: "Sarah Chen", role: "VP Sales", rating: 5, text: "Best-in-class delivery. The team shipped in 5 weeks flat and stayed with us through onboarding." },
      { name: "Marcus Ortiz", role: "Sales Director", rating: 5, text: "Our SDRs now focus on closing, not chasing. Pipeline coverage doubled in 60 days." },
      { name: "Rita Delgado", role: "Head of Ops", rating: 5, text: "Zero downtime since go-live. The dashboards make it easy to trust the automation." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", caption: "Buyer intake console" },
      { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80", caption: "Live conversation transcript" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", caption: "Pipeline dashboard" },
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", caption: "Agent handoff view" },
    ],
    workflow: [
      { step: "01", title: "Discovery", duration: "Week 1", description: "Shadowed SDRs, mapped every qualification path, defined success metrics." },
      { step: "02", title: "Design", duration: "Week 2", description: "Conversation flows, calendar logic, CRM schema, escalation rules." },
      { step: "03", title: "Build", duration: "Weeks 3–4", description: "Voice + chat agent, HubSpot integration, calendar sync, QA harness." },
      { step: "04", title: "Pilot", duration: "Week 5", description: "Shadow mode on live traffic, side-by-side scoring against human SDRs." },
      { step: "05", title: "Launch", duration: "Week 6", description: "Full production cutover with 24/7 monitoring and weekly tuning." },
      { step: "06", title: "Handover", duration: "Ongoing", description: "Playbooks, dashboards, and a Slack channel with our team on call." },
    ],
  },
  {
    slug: "helios-health",
    company: "Helios Health",
    industry: "Healthcare",
    hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
    before: "Patient intake averaged 14 minutes per call.",
    after: "Voice AI handles intake in under 3 minutes, syncs to EMR.",
    metrics: [
      { v: 1200, s: "hrs", l: "Saved / month" },
      { v: 210, s: "%", l: "ROI" },
      { v: 68, s: "%", l: "Faster intake" },
    ],
    quote:
      "The build was clean, the deployment was calm, and our staff finally has time to focus on patients.",
    who: "Dr. Amir Khan",
    role: "COO",
    customer: {
      founded: "2009",
      size: "420 employees",
      location: "Austin, TX",
      website: "helioshealth.io",
      stack: ["Epic EMR", "Twilio", "Okta", "AWS"],
    },
    challenge:
      "Front-desk staff were spending most of their day on repetitive intake calls, leaving in-clinic patients waiting and driving burnout at three of the busiest sites.",
    approach: [
      "HIPAA-aligned voice AI with PHI redaction and audit trail.",
      "Real-time write-back to Epic via FHIR.",
      "Multilingual support (EN/ES) tuned on de-identified transcripts.",
      "Nurse-triage escalation with warm transfer.",
    ],
    feedback: [
      { name: "Dr. Amir Khan", role: "COO", rating: 5, text: "Every promise on the SOW landed. Compliance review was unusually painless." },
      { name: "Nadia Osei, RN", role: "Clinical Lead", rating: 5, text: "The AI is calmer than half our humans. Patients love it." },
      { name: "Ken Larsen", role: "IT Director", rating: 4, text: "Solid architecture, clean runbooks. Their team is a pleasure to work with." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=1200&q=80", caption: "Intake voice console" },
      { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80", caption: "Clinician review screen" },
      { src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=80", caption: "EMR write-back panel" },
      { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80", caption: "Compliance dashboard" },
    ],
    workflow: [
      { step: "01", title: "Compliance kickoff", duration: "Week 1", description: "BAAs, security review, data flow diagrams signed off." },
      { step: "02", title: "Discovery", duration: "Week 2", description: "Shadowed intake, mapped edge cases across three sites." },
      { step: "03", title: "Build", duration: "Weeks 3–5", description: "Voice AI, FHIR integration, redaction pipeline, dashboards." },
      { step: "04", title: "Clinical pilot", duration: "Week 6", description: "One-site pilot with nurse oversight and daily reviews." },
      { step: "05", title: "Rollout", duration: "Weeks 7–8", description: "Phased site-by-site rollout with staff training." },
      { step: "06", title: "Handover", duration: "Ongoing", description: "24/7 support, monthly tuning, quarterly compliance audit." },
    ],
  },
  {
    slug: "meridian-saas",
    company: "Meridian SaaS",
    industry: "SaaS",
    hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
    before: "Support drowning in tickets, CSAT slipping below 80.",
    after: "AI deflects 63% of tickets and escalates the hard ones cleanly.",
    metrics: [
      { v: 2400, s: "hrs", l: "Saved / month" },
      { v: 415, s: "%", l: "ROI" },
      { v: 22, s: "pt", l: "CSAT lift" },
    ],
    quote: "Best investment we made this year, by a wide margin.",
    who: "Priya Nair",
    role: "Head of Support",
    customer: {
      founded: "2017",
      size: "260 employees",
      location: "London, UK",
      website: "meridian.app",
      stack: ["Zendesk", "Segment", "Snowflake", "Slack"],
    },
    challenge:
      "Ticket volume grew 3× in twelve months while headcount was frozen. Backlog crept past 72 hours and CSAT dropped for the first time in two years.",
    approach: [
      "Retrieval-augmented AI trained on the last 24 months of resolved tickets.",
      "Deflection layer inside the app plus Zendesk co-pilot for agents.",
      "Confidence-based escalation to L2 with full context handoff.",
      "Weekly retraining loop from human corrections.",
    ],
    feedback: [
      { name: "Priya Nair", role: "Head of Support", rating: 5, text: "They ship. Every sprint delivered exactly what was promised — no drama." },
      { name: "Tomás García", role: "L2 Team Lead", rating: 5, text: "Escalations arrive with full context. Handle time dropped by a third." },
      { name: "Yuki Tanaka", role: "VP Product", rating: 5, text: "Best delivery team we've partnered with in five years. Zero rework." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80", caption: "In-app deflection widget" },
      { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80", caption: "Agent co-pilot" },
      { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80", caption: "Escalation queue" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", caption: "Analytics room" },
    ],
    workflow: [
      { step: "01", title: "Discovery", duration: "Week 1", description: "Ticket taxonomy, knowledge audit, deflection targets set." },
      { step: "02", title: "Data prep", duration: "Week 2", description: "Cleaned 24 months of tickets, built the retrieval index." },
      { step: "03", title: "Build", duration: "Weeks 3–4", description: "Deflection widget, Zendesk app, escalation router." },
      { step: "04", title: "Pilot", duration: "Week 5", description: "10% traffic shadow, side-by-side quality scoring." },
      { step: "05", title: "Launch", duration: "Week 6", description: "Full rollout across web and in-app surfaces." },
      { step: "06", title: "Handover", duration: "Ongoing", description: "Weekly retraining, monthly reviews, on-call Slack channel." },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);