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
      "Pronetheseus quietly replaced an entire SDR function. We now book more meetings with fewer people.",
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
  {
    slug: "apex-global-media",
    company: "Apex Global Media",
    industry: "Digital Agency",
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    before: "Client onboarding took 14 days with manual Slack, Notion & Drive setup.",
    after: "Automated OS onboarded clients in 12 minutes with 100% data accuracy.",
    metrics: [
      { v: 1450, s: "hrs", l: "Saved / month" },
      { v: 420, s: "%", l: "ROI" },
      { v: 12, s: "min", l: "Avg onboarding" },
    ],
    quote: "Pronetheseus transformed our operational engine. Client satisfaction soared from day one.",
    who: "David Sterling",
    role: "Managing Director",
    customer: {
      founded: "2016",
      size: "95 employees",
      location: "New York, NY",
      website: "apexglobalmedia.com",
      stack: ["Slack", "Notion", "Google Drive", "n8n", "ClickUp"],
    },
    challenge:
      "Rapid client acquisition created severe onboarding bottlenecks, delaying project kickoff dates and overburdening account managers.",
    approach: [
      "Zero-touch intake workflow triggering instant Slack channel & Drive creation.",
      "Automated contract generation and DocuSign integration.",
      "Real-time task template duplication in ClickUp based on client tier.",
    ],
    feedback: [
      { name: "David Sterling", role: "Managing Director", rating: 5, text: "Incredible velocity and flawless architecture. Transformed our business." },
      { name: "Elena Rostova", role: "Ops Lead", rating: 5, text: "Onboarding went from our biggest headache to our strongest selling point." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80", caption: "Automated Onboarding Console" },
    ],
    workflow: [
      { step: "01", title: "Audit", duration: "Week 1", description: "Mapped all intake touchpoints and bottlenecks." },
      { step: "02", title: "Build", duration: "Weeks 2–3", description: "n8n webhooks, Slack API, Google Workspace integration." },
      { step: "03", title: "Launch", duration: "Week 4", description: "Full deployment with live client onboarding." },
    ],
  },
  {
    slug: "vanguard-capital",
    company: "Vanguard Capital",
    industry: "Wealth Management",
    hero: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80",
    before: "Quarterly investor reporting required 3 analyst weeks of manual Excel building.",
    after: "Live API reporting portal updates investor portfolios 24/7 automatically.",
    metrics: [
      { v: 950, s: "hrs", l: "Saved / month" },
      { v: 380, s: "%", l: "ROI" },
      { v: 100, s: "%", l: "Data accuracy" },
    ],
    quote: "Our investors receive live financial intelligence with zero manual effort from our team.",
    who: "Victoria Hayes",
    role: "Chief Investment Officer",
    customer: {
      founded: "2011",
      size: "140 employees",
      location: "Boston, MA",
      website: "vanguardcapital.com",
      stack: ["Salesforce", "Snowflake", "PowerBI", "FastAPI"],
    },
    challenge:
      "Manual data aggregation across 15 liquidity providers led to delayed quarterly reports and potential human calculation errors.",
    approach: [
      "Built automated data pipeline syncing API feeds into Snowflake data lake.",
      "Custom investor portal with role-based access control.",
      "Automated PDF report generator dispatched via secure email.",
    ],
    feedback: [
      { name: "Victoria Hayes", role: "CIO", rating: 5, text: "Outstanding engineering rigor. Banking-grade security with zero hiccups." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", caption: "Investor Financial Dashboard" },
    ],
    workflow: [
      { step: "01", title: "Architecture", duration: "Week 1", description: "Designed bank-grade encryption and API schemas." },
      { step: "02", title: "Pipeline Build", duration: "Weeks 2–4", description: "Snowflake & FastAPI data sync engine." },
      { step: "03", title: "Portal Cutover", duration: "Week 5", description: "Production release for 500+ accredited investors." },
    ],
  },
  {
    slug: "hyperscale-logistics",
    company: "HyperScale Logistics",
    industry: "E-Commerce Logistics",
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
    before: "Supplier inventory sync lags caused 18% out-of-stock order cancellations.",
    after: "n8n bi-directional inventory router syncs 50k SKUs in sub-second intervals.",
    metrics: [
      { v: 3100, s: "hrs", l: "Saved / month" },
      { v: 510, s: "%", l: "ROI" },
      { v: 99.9, s: "%", l: "Fulfillment rate" },
    ],
    quote: "We scaled our order volume 3x while cutting stock-out cancellations down to zero.",
    who: "Marcus Vance",
    role: "Head of Operations",
    customer: {
      founded: "2018",
      size: "310 employees",
      location: "Chicago, IL",
      website: "hyperscalelogistics.com",
      stack: ["Shopify Plus", "NetSuite", "n8n", "PostgreSQL"],
    },
    challenge:
      "Disconnected warehouse ERP systems caused inventory overselling during flash sale spikes.",
    approach: [
      "Sub-second event-driven webhook architecture connecting Shopify Plus & NetSuite.",
      "Automated exception handling router with real-time Slack notifications.",
    ],
    feedback: [
      { name: "Marcus Vance", role: "Head of Ops", rating: 5, text: "The system handled Black Friday volume without a single dropped packet." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80", caption: "Warehouse Logistics Radar" },
    ],
    workflow: [
      { step: "01", title: "Load Test", duration: "Week 1", description: "Simulated 50k requests/min against n8n cluster." },
      { step: "02", title: "Build", duration: "Weeks 2–3", description: "NetSuite ERP connector & inventory cache." },
      { step: "03", title: "Deployment", duration: "Week 4", description: "Live production cutover with zero downtime." },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);