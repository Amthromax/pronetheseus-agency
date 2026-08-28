export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  logo?: string;
  hero: string;
  before: string;
  after: string;
  metrics: { v: number | string; s: string; l: string }[];
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
    slug: "energy-giant-ai-voice",
    company: "Global Energy & Utility Corp",
    industry: "Voice AI & Utility Ops",
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
    before: "45,000+ daily call volume created 18-minute call queues and high customer frustration.",
    after: "Conversational Voice AI agent handles 90% of routine inquiries instantly with 0s wait time.",
    metrics: [
      { v: "90", s: "%", l: "Call Deflection" },
      { v: "1.8", s: "$M", l: "Annual Cost Savings" },
      { v: "<10", s: "sec", l: "Avg Resolution Time" },
    ],
    quote: "Pronetheseus transformed our customer call center. Our call wait times dropped from 18 minutes to zero instantly.",
    who: "Elena Rostova",
    role: "VP Customer Operations",
    customer: {
      founded: "1998",
      size: "12,000 employees",
      location: "Houston, TX",
      website: "globalenergy.com",
      stack: ["SAP Billing", "Twilio Voice", "n8n Workflows", "Salesforce"],
    },
    challenge:
      "Managing peak surges during power outages and billing cycles caused severe call center congestion, driving customer churn and high agent burnout.",
    approach: [
      "Built a real-time voice streaming agent connected to SAP billing database via webhooks.",
      "Engineered automated natural language intent classification for 40+ utility inquiry types.",
      "Implemented seamless human-agent fallback for complex outage escalations.",
      "De-identified and logged 100% of audio transcripts for automated quality compliance audits.",
    ],
    feedback: [
      { name: "Elena Rostova", role: "VP Customer Ops", rating: 5, text: "Flawless execution. The voice AI sounds completely natural and handles billing inquiries effortlessly." },
      { name: "Marcus Vance", role: "Director of IT", rating: 5, text: "Integration with our legacy SAP system was surprisingly fast. Deployed in under 6 weeks." },
      { name: "Sarah Lin", role: "Customer Experience Manager", rating: 5, text: "Customer CSAT scores jumped 34 points in the first month following cutover." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80", caption: "Voice AI Traffic Radar" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", caption: "SAP Real-Time Data Sync" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", caption: "Live Analytics Dashboard" },
    ],
    workflow: [
      { step: "01", title: "Discovery", duration: "Week 1", description: "Audited 10,000 historical call recordings and defined intent taxonomy." },
      { step: "02", title: "Architecture", duration: "Week 2", description: "Designed low-latency voice streaming pipeline and SAP webhook integrations." },
      { step: "03", title: "Build", duration: "Weeks 3–4", description: "Configured LLM intent parser, Twilio Media Streams, and fallback triggers." },
      { step: "04", title: "Shadow Mode", duration: "Week 5", description: "Ran voice AI against live inbound traffic in shadow mode for validation." },
      { step: "05", title: "Cutover", duration: "Week 6", description: "Production launch handling 100% of Tier-1 inbound utility calls." },
      { step: "06", title: "Optimization", duration: "Ongoing", description: "Weekly transcript retraining and continuous latency optimization." },
    ],
  },
  {
    slug: "financial-institution-modernization",
    company: "Apex Global Banking",
    industry: "Financial Services",
    hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    before: "Manual compliance reviews delayed international wire approvals by up to 48 hours.",
    after: "Autonomous OCR & document agents verify wire transfers and KYC in 45 seconds.",
    metrics: [
      { v: "2.4", s: "$M", l: "Annual Operational Savings" },
      { v: "98", s: "%", l: "Faster Processing" },
      { v: "100", s: "%", l: "Compliance Audit Pass Rate" },
    ],
    quote: "Our global compliance team now processes wire verifications in seconds with zero calculation errors.",
    who: "Alexander Wright",
    role: "Chief Risk Officer",
    customer: {
      founded: "2004",
      size: "8,500 employees",
      location: "New York, NY",
      website: "apexbanking.com",
      stack: ["Core Banking API", "Python OCR", "FastAPI", "Snowflake"],
    },
    challenge:
      "Strict regulatory KYC requirements forced analysts to cross-reference multi-page PDF documents across 6 legacy databases manually.",
    approach: [
      "Engineered automated document parsing engine with 99.8% field extraction precision.",
      "Integrated instant cross-checks against sanction databases and historical ledger records.",
      "Created SOC2 and banking-grade audit logging for every automated approval.",
    ],
    feedback: [
      { name: "Alexander Wright", role: "CRO", rating: 5, text: "Unmatched technical precision. Banking-grade security delivered on time." },
      { name: "Michael Chang", role: "Head of Compliance", rating: 5, text: "Transaction backlogs completely disappeared within 14 days of launch." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80", caption: "Global Compliance Console" },
    ],
    workflow: [
      { step: "01", title: "Security Review", duration: "Week 1", description: "SOC2 compliance sign-off and banking API security architecture." },
      { step: "02", title: "Pipeline Build", duration: "Weeks 2–4", description: "Engineered OCR document extraction and sanction cross-reference APIs." },
      { step: "03", title: "Banking Cutover", duration: "Week 5", description: "Full deployment across international transfer operations." },
    ],
  },
  {
    slug: "ecuador-insurer-transformation",
    company: "Seguros del Ecuador",
    industry: "Insurance & Claims",
    hero: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80",
    before: "Claims submission processing took 5 days with manual policy verification.",
    after: "Generative AI claims bot verifies coverage and dispatches adjusters in <30 seconds.",
    metrics: [
      { v: "<30", s: "sec", l: "Instant Response Rate" },
      { v: "42", s: "%", l: "Support Cost Reduction" },
      { v: "4.8", s: "/5", l: "Policyholder Rating" },
    ],
    quote: "Our policyholders file claims and receive instant approval notifications on WhatsApp in under a minute.",
    who: "Maria Fernandez",
    role: "Head of Customer Experience",
    customer: {
      founded: "2010",
      size: "2,200 employees",
      location: "Quito, Ecuador",
      website: "segurosecuador.com",
      stack: ["WhatsApp Business API", "Python LLM", "Salesforce CRM"],
    },
    challenge:
      "Severe weather events caused massive spikes in insurance claims, paralyzing call centers and delaying urgent payout approvals.",
    approach: [
      "Deployed 24/7 multi-lingual WhatsApp AI assistant for photo damage upload and policy checks.",
      "Connected AI agent to core underwriting engine for instant validation.",
    ],
    feedback: [
      { name: "Maria Fernandez", role: "Head of CX", rating: 5, text: "Customer satisfaction during claims reached an all-time high." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80", caption: "WhatsApp Claims Processing" },
    ],
    workflow: [
      { step: "01", title: "Policy Mapping", duration: "Week 1", description: "Mapped policy terms and claims approval logic." },
      { step: "02", title: "Bot Integration", duration: "Weeks 2–3", description: "WhatsApp API and claims database integration." },
      { step: "03", title: "Launch", duration: "Week 4", description: "Full deployment for 500k+ insured policyholders." },
    ],
  },
  {
    slug: "insurance-provider-ai-agents",
    company: "OmniCover Insurance",
    industry: "AI Support Agents",
    hero: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80",
    before: "Policy underwriting inquiries suffered a 4-day lag between inquiry and quote.",
    after: "Autonomous AI agents perform quote underwriting and policy issuance in 45 seconds.",
    metrics: [
      { v: "99.4", s: "%", l: "Underwriting Accuracy" },
      { v: "45", s: "sec", l: "Quote Turnaround" },
      { v: "3.5", s: "x", l: "Policy Volume Expansion" },
    ],
    quote: "Our underwriters now review edge cases while our AI agents handle 95% of standard policy issuance automatically.",
    who: "Robert Sterling",
    role: "VP Underwriting",
    customer: {
      founded: "2015",
      size: "1,500 employees",
      location: "Chicago, IL",
      website: "omnicover.com",
      stack: ["HubSpot CRM", "LLM Parser", "Twilio", "PostgreSQL"],
    },
    challenge:
      "Manual data intake from broker applications delayed quote deliveries, causing brokers to place business with faster competitors.",
    approach: [
      "Configured automated underwriting rules engine paired with LLM document parser.",
      "Automated policy document generation and instant electronic signing.",
    ],
    feedback: [
      { name: "Robert Sterling", role: "VP Underwriting", rating: 5, text: "Quote speed went from days to seconds. Game changer for our growth." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80", caption: "Underwriting Engine Console" },
    ],
    workflow: [
      { step: "01", title: "Rules Definition", duration: "Week 1", description: "Codified underwriting risk parameters and boundaries." },
      { step: "02", title: "Agent Build", duration: "Weeks 2–3", description: "Built autonomous underwriting agents and CRM sync." },
      { step: "03", title: "Broker Launch", duration: "Week 4", description: "Rolled out to 400+ independent brokerages." },
    ],
  },
  {
    slug: "engineering-software-support",
    company: "Cadence Design Systems",
    industry: "Tech Support AI",
    hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
    before: "Engineers spent 60% of their workday manually reviewing complex stack trace logs.",
    after: "AI log parsing agent diagnoses bug traces and suggests fixes automatically.",
    metrics: [
      { v: "4.2", s: "x", l: "Ticket Throughput" },
      { v: "75", s: "%", l: "Lower Escalation Rate" },
      { v: "85", s: "%", l: "First-Touch Resolution" },
    ],
    quote: "Our technical support team resolves complex software bugs 4x faster with automated log diagnostics.",
    who: "Dr. Jonathan Vance",
    role: "VP Engineering Support",
    customer: {
      founded: "2012",
      size: "3,400 employees",
      location: "San Jose, CA",
      website: "cadencedesign.com",
      stack: ["Zendesk API", "Python AST", "Docker", "ElasticSearch"],
    },
    challenge:
      "Tier-1 support staff were overburdened with reading raw software crash dumps, causing long ticket delays for enterprise engineering clients.",
    approach: [
      "Built automated log parsing AI that extracts error signatures and correlates with code commits.",
      "Integrated auto-reply diagnostic suggestions inside Zendesk agent workspace.",
    ],
    feedback: [
      { name: "Dr. Jonathan Vance", role: "VP Support", rating: 5, text: "Saves our engineering team hundreds of hours every week." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", caption: "Log Diagnostic AI Console" },
    ],
    workflow: [
      { step: "01", title: "Log Indexing", duration: "Week 1", description: "Indexed 5 years of historical error logs and fixes." },
      { step: "02", title: "Parser Build", duration: "Weeks 2–3", description: "Built AST log parser and Zendesk co-pilot." },
      { step: "03", title: "Cutover", duration: "Week 4", description: "Deployed across global enterprise support centers." },
    ],
  },
  {
    slug: "confectionary-manufacturer-b2b",
    company: "ChocoCraft International",
    industry: "B2B Revenue AI",
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
    before: "Wholesale retail orders submitted via PDF emails suffered 12% manual entry errors.",
    after: "n8n email OCR & ERP database pipeline syncs B2B orders with 100% precision.",
    metrics: [
      { v: "100", s: "%", l: "Order Sync Accuracy" },
      { v: "12", s: "hrs", l: "Saved Daily / Rep" },
      { v: "0", s: "", l: "Fulfillment Delays" },
    ],
    quote: "Our B2B ordering pipeline runs on autopilot. Distributors get instant confirmation and warehouse dispatch.",
    who: "Pierre Dubois",
    role: "Global Supply Chain Director",
    customer: {
      founded: "2006",
      size: "1,800 employees",
      location: "Zurich, Switzerland",
      website: "chococraft.com",
      stack: ["SAP ERP", "n8n Workflows", "Tesseract OCR", "PostgreSQL"],
    },
    challenge:
      "Distributors sent non-standard purchase order PDFs, requiring sales reps to copy line items manually into SAP.",
    approach: [
      "Implemented automated email OCR parser extracting line items, quantities, and delivery dates.",
      "Built bi-directional validation rules against live inventory levels.",
    ],
    feedback: [
      { name: "Pierre Dubois", role: "Director", rating: 5, text: "Fulfillment accuracy reached 100% instantly." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80", caption: "B2B Order Router Radar" },
    ],
    workflow: [
      { step: "01", title: "OCR Training", duration: "Week 1", description: "Trained parser on 200 distributor PDF invoice layouts." },
      { step: "02", title: "ERP Connector", duration: "Weeks 2–3", description: "n8n automated database sync engine." },
      { step: "03", title: "Full Launch", duration: "Week 4", description: "Production cutover across global retail network." },
    ],
  },
  {
    slug: "frontline-workforce-assistance",
    company: "Global Field Services",
    industry: "Enterprise Ops",
    hero: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80",
    before: "45,000 field technicians lost 2+ hours daily searching paper manuals.",
    after: "Mobile voice RAG assistant delivers instant maintenance answers on site.",
    metrics: [
      { v: "45", s: "k", l: "Active Daily Users" },
      { v: "35", s: "%", l: "First-Time Fix Lift" },
      { v: "2.5", s: "hrs", l: "Saved / Tech / Day" },
    ],
    quote: "Our technicians ask their mobile voice AI for schematics and receive exact diagnostic steps in seconds.",
    who: "Samantha Reed",
    role: "Chief Field Operations Officer",
    customer: {
      founded: "2002",
      size: "45,000 employees",
      location: "Atlanta, GA",
      website: "globalfield.com",
      stack: ["Vector RAG", "Mobile React Native", "Pinecone", "Azure"],
    },
    challenge:
      "Complex machinery maintenance required consulting 500-page physical binders, slowing down site repair times.",
    approach: [
      "Built a vector database indexing 20,000+ technical manuals and wiring diagrams.",
      "Developed an offline-first mobile voice assistant for remote field usage.",
    ],
    feedback: [
      { name: "Samantha Reed", role: "CFOO", rating: 5, text: "Field repair efficiency increased beyond our highest expectations." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80", caption: "Field Mobile Voice Assistant" },
    ],
    workflow: [
      { step: "01", title: "RAG Indexing", duration: "Weeks 1–2", description: "Vectorized 20,000 technical manuals." },
      { step: "02", title: "Mobile Build", duration: "Weeks 3–4", description: "Built offline mobile voice UI." },
      { step: "03", title: "Global Rollout", duration: "Week 5", description: "Deployed to 45,000 technicians." },
    ],
  },
  {
    slug: "live-event-self-service",
    company: "Arena Events Group",
    industry: "Event Automation",
    hero: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80",
    before: "10,000+ simultaneous attendee inquiries overwhelmed event support desks.",
    after: "Omni-channel event bot handles ticket upgrades and venue navigation 24/7.",
    metrics: [
      { v: "24/7", s: "", l: "Instant Availability" },
      { v: "96", s: "%", l: "Attendee CSAT" },
      { v: "150", s: "k+", l: "Messages Handled / Event" },
    ],
    quote: "Pronetheseus handled our entire tournament support without a single customer complaint.",
    who: "Marcus Thorne",
    role: "VP Event Operations",
    customer: {
      founded: "2014",
      size: "650 employees",
      location: "Los Angeles, CA",
      website: "arenaevents.com",
      stack: ["SeatGeek API", "Twilio SMS", "FastAPI", "Redis"],
    },
    challenge:
      "Peak ticket entry hours caused massive line delays and lost VIP seat upgrade revenue.",
    approach: [
      "Built instant SMS and web bot integrated directly into digital ticketing systems.",
    ],
    feedback: [
      { name: "Marcus Thorne", role: "VP Ops", rating: 5, text: "Handled 150k attendees seamlessly." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80", caption: "Arena Bot Operations Radar" },
    ],
    workflow: [
      { step: "01", title: "API Integration", duration: "Week 1", description: "Ticketing API connection." },
      { step: "02", title: "Bot Launch", duration: "Week 2", description: "Live event deployment." },
    ],
  },
  {
    slug: "corporate-travel-self-service",
    company: "Voyage Corporate Mobility",
    industry: "Travel & Mobility",
    hero: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
    before: "Flight rebookings required 45-minute phone hold times with travel agents.",
    after: "Slack & Teams AI bot rebooks canceled flights in under 60 seconds automatically.",
    metrics: [
      { v: "60", s: "%", l: "Ops Cost Savings" },
      { v: "<60", s: "sec", l: "Flight Rebooking Speed" },
      { v: "99", s: "%", l: "Traveler Satisfaction" },
    ],
    quote: "Our business travelers rebook canceled flights directly inside Slack in under a minute.",
    who: "Claire Dupont",
    role: "Global Travel Director",
    customer: {
      founded: "2011",
      size: "1,100 employees",
      location: "Paris, France",
      website: "voyagemobility.com",
      stack: ["Amadeus GDS", "Slack API", "Microsoft Teams API"],
    },
    challenge:
      "Severe flight disruptions left corporate executives stranded while waiting for agent assistance.",
    approach: [
      "Connected GDS flight reservation APIs directly to conversational Slack and Teams bots.",
    ],
    feedback: [
      { name: "Claire Dupont", role: "Director", rating: 5, text: "Essential tool for international corporate travelers." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80", caption: "Slack Travel Assistant Console" },
    ],
    workflow: [
      { step: "01", title: "GDS Sync", duration: "Weeks 1–2", description: "Amadeus flight API connection." },
      { step: "02", title: "Slack Rollout", duration: "Week 3", description: "Deployed to 10k corporate travelers." },
    ],
  },
  {
    slug: "developer-velocity-assist",
    company: "DevScale Technologies",
    industry: "Developer Ops",
    hero: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80",
    before: "Senior engineers spent 15+ hours weekly reviewing repetitive PR boilerplate code.",
    after: "Autonomous GitHub code review agent tests and approves PRs in 3 minutes.",
    metrics: [
      { v: "3", s: "x", l: "Feature Shipping Speed" },
      { v: "50", s: "%", l: "Fewer Production Bugs" },
      { v: "15", s: "hrs", l: "Saved / Senior Dev / Wk" },
    ],
    quote: "Our development velocity tripled after introducing automated AI code review agents.",
    who: "Alex Chen",
    role: "VP Engineering",
    customer: {
      founded: "2017",
      size: "450 employees",
      location: "Seattle, WA",
      website: "devscale.io",
      stack: ["GitHub Actions", "Docker", "Python AI AST", "SonarQube"],
    },
    challenge:
      "Rapid team growth created pull request review bottlenecks, delaying production feature releases.",
    approach: [
      "Integrated automated code review and security vulnerability scanner into GitHub CI/CD.",
    ],
    feedback: [
      { name: "Alex Chen", role: "VP Eng", rating: 5, text: "Shipping speed tripled while code quality improved significantly." },
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80", caption: "GitHub AI Code Review Radar" },
    ],
    workflow: [
      { step: "01", title: "CI Integration", duration: "Week 1", description: "GitHub Actions bot setup." },
      { step: "02", title: "Dev Rollout", duration: "Week 2", description: "Full deployment across 40 engineering teams." },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);