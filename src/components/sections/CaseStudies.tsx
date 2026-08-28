import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ArrowRight, X, Sparkles, CheckCircle2, Star, Quote, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ImplementationStep {
  step: string;
  label: string;
  desc: string;
}

interface StoryItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  summary: string;
  steps: ImplementationStep[];
  tags: string[];
  image: string;
  slug: string;
  quote?: string;
  author?: string;
  authorTitle?: string;
}

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";

const STORIES: StoryItem[] = [
  {
    id: "1",
    title: "How an 80-million-customer energy giant replaced voice with AI-driven self-service",
    category: "Voice AI & Ops",
    metric: "90% Deflection",
    summary: "Eliminated long phone queues by deploying conversational voice AI to handle high-frequency utility inquiries, billing updates, and meter readouts.",
    steps: [
      { step: "01", label: "Challenge", desc: "45,000+ daily inbound calls created 18-minute wait times during peak hours." },
      { step: "02", label: "AI Execution", desc: "Deployed conversational voice agent integrated with SAP billing & webhook triggers." },
      { step: "03", label: "Result", desc: "90% automated deflection with sub-10 second resolution times." },
    ],
    tags: ["Voice AI", "SAP Integration", "Webhook Auto"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    slug: "energy-giant-ai-voice",
    quote: "Pronetheseus transformed our customer call center. Our call wait times dropped from 18 minutes to zero instantly.",
    author: "Elena Rostova",
    authorTitle: "VP Customer Operations",
  },
  {
    id: "2",
    title: "Fortune 50 Financial Institution Modernizes Global Banking Service Operations",
    category: "Financial Services",
    metric: "$2.4M Saved",
    summary: "Modernized global wire transfer verification and account compliance checks using sub-second document scanning and automated KYC agents.",
    steps: [
      { step: "01", label: "Challenge", desc: "Manual compliance reviews delayed international wire approvals by up to 48 hours." },
      { step: "02", label: "AI Execution", desc: "Engineered OCR & document parsing agents synced with core banking ledger." },
      { step: "03", label: "Result", desc: "$2.4M operational cost reduction and 98% faster transaction approvals." },
    ],
    tags: ["Financial AI", "OCR Engine", "Core Banking API"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    slug: "financial-institution-modernization",
    quote: "Our global compliance team now processes wire verifications in seconds with zero calculation errors.",
    author: "Alexander Wright",
    authorTitle: "Chief Risk Officer",
  },
  {
    id: "3",
    title: "Ecuador's largest insurer transforms contact center operations with generative AI",
    category: "Customer Service",
    metric: "<30s Response",
    summary: "Replaced legacy contact center IVRs with multi-lingual generative AI agents capable of handling claims processing and policy adjustments.",
    steps: [
      { step: "01", label: "Challenge", desc: "High agent turnover and peak call surges caused high customer churn during claims." },
      { step: "02", label: "AI Execution", desc: "Deployed 24/7 omni-channel generative AI agents across WhatsApp & web chat." },
      { step: "03", label: "Result", desc: "<30s instant response rate and 42% decrease in support operating costs." },
    ],
    tags: ["Claims AI", "Generative Agents", "WhatsApp API"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    slug: "ecuador-insurer-transformation",
    quote: "Our policyholders file claims and receive instant approval notifications on WhatsApp in under a minute.",
    author: "Maria Fernandez",
    authorTitle: "Head of CX",
  },
  {
    id: "4",
    title: "Insurance provider transforms customer service with autonomous AI agents",
    category: "AI Support Agents",
    metric: "99.4% Accuracy",
    summary: "Automated policy underwriting, customer inquiry triage, and policy renewal reminders with zero human intervention required.",
    steps: [
      { step: "01", label: "Challenge", desc: "Manual policy underwriting caused a 4-day lag between inquiry and quote delivery." },
      { step: "02", label: "AI Execution", desc: "Configured automated underwriting rules engine paired with LLM document parser." },
      { step: "03", label: "Result", desc: "99.4% decision accuracy with quote turnaround reduced from 4 days to 45s." },
    ],
    tags: ["Underwriting Bot", "LLM Parser", "HubSpot CRM"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    slug: "insurance-provider-ai-agents",
    quote: "Our underwriters now review edge cases while our AI agents handle 95% of standard policy issuance automatically.",
    author: "Robert Sterling",
    authorTitle: "VP Underwriting",
  },
  {
    id: "5",
    title: "Global design and engineering software leader automated technical support",
    category: "Tech Support AI",
    metric: "4.2x Throughput",
    summary: "Accelerated technical support tickets for complex CAD software by routing log files and error diagnostics directly to autonomous code assist agents.",
    steps: [
      { step: "01", label: "Challenge", desc: "Tier-1 support engineers spent 60% of their time reading raw error log files." },
      { step: "02", label: "AI Execution", desc: "Built automated log parsing AI that diagnoses stack traces and recommends fixes." },
      { step: "03", label: "Result", desc: "4.2x ticket resolution throughput and 75% reduction in escalation rates." },
    ],
    tags: ["Log AI", "Ticket Router", "Zendesk API"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    slug: "engineering-software-support",
    quote: "Saves our engineering support team hundreds of hours every week.",
    author: "Dr. Jonathan Vance",
    authorTitle: "VP Engineering Support",
  },
  {
    id: "6",
    title: "How a leading confectionary manufacturer automated B2B retail ordering",
    category: "B2B Revenue AI",
    metric: "100% Order Sync",
    summary: "Transformed manual wholesale order entry from PDF invoices into automated n8n database sync, eliminating order fulfillment errors.",
    steps: [
      { step: "01", label: "Challenge", desc: "Retail distributors sent unstructured PDF orders via email, causing entry delays." },
      { step: "02", label: "AI Execution", desc: "Implemented automated email parser and ERP database synchronization engine." },
      { step: "03", label: "Result", desc: "100% order synchronization accuracy and 12 hours saved daily per rep." },
    ],
    tags: ["ERP Auto-Sync", "Email OCR", "n8n Workflows"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    slug: "confectionary-manufacturer-b2b",
    quote: "Fulfillment accuracy reached 100% instantly.",
    author: "Pierre Dubois",
    authorTitle: "Global Supply Chain Director",
  },
  {
    id: "7",
    title: "Empowering a Global Frontline Workforce with AI-Driven Employee Assistance",
    category: "Enterprise Ops",
    metric: "45k Users",
    summary: "Empowered 45,000 global field technicians with an instant voice-activated mobile AI assistant for equipment manuals and safety compliance.",
    steps: [
      { step: "01", label: "Challenge", desc: "Field technicians lost 2+ hours daily searching through paper maintenance manuals." },
      { step: "02", label: "AI Execution", desc: "Created RAG vector database assistant accessible via mobile app and voice." },
      { step: "03", label: "Result", desc: "45,000 active daily users with 35% improvement in first-time fix rates." },
    ],
    tags: ["Vector RAG", "Mobile Voice AI", "Safety Compliance"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    slug: "frontline-workforce-assistance",
    quote: "Field repair efficiency increased beyond our highest expectations.",
    author: "Samantha Reed",
    authorTitle: "Chief Field Ops Officer",
  },
  {
    id: "8",
    title: "Transforming Live Event Support with Intelligent Digital Self-Service",
    category: "Event Automation",
    metric: "24/7 Availability",
    summary: "Handled 100,000+ attendee ticket changes, venue navigation, and VIP upgrades during major international sports tournaments using automated AI bots.",
    steps: [
      { step: "01", label: "Challenge", desc: "Event staff overwhelmed by 10,000+ simultaneous inquiries during peak event hours." },
      { step: "02", label: "AI Execution", desc: "Deployed multi-platform self-service bot integrated with ticketing APIs." },
      { step: "03", label: "Result", desc: "24/7 instant resolution with 96% attendee satisfaction score." },
    ],
    tags: ["Event Bot", "Ticketing API", "Real-Time AI"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    slug: "live-event-self-service",
    quote: "Pronetheseus handled our entire tournament support without a single customer complaint.",
    author: "Marcus Thorne",
    authorTitle: "VP Event Operations",
  },
  {
    id: "9",
    title: "Modernizing Digital Self-Service for Corporate Travel & Mobility",
    category: "Travel & Mobility",
    metric: "60% Cost Reduction",
    summary: "Streamlined corporate flight rebooking, hotel cancellation, and expense reporting into a single automated Slack & Teams conversational bot.",
    steps: [
      { step: "01", label: "Challenge", desc: "Flight disruptions required manual phone calls to travel agents, causing missed connections." },
      { step: "02", label: "AI Execution", desc: "Built automated rebooking bot connected to Amadeus & Sabre travel GDS." },
      { step: "03", label: "Result", desc: "60% operational cost reduction and instant sub-1 minute flight rebooking." },
    ],
    tags: ["Amadeus GDS", "Slack Bot", "Rebooking Engine"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    slug: "corporate-travel-self-service",
    quote: "Our business travelers rebook canceled flights directly inside Slack in under a minute.",
    author: "Claire Dupont",
    authorTitle: "Global Travel Director",
  },
  {
    id: "10",
    title: "Scaling Developer Velocity with Autonomous Code Assist & Workflows",
    category: "Developer Ops",
    metric: "3x Shipping Speed",
    summary: "Scaled software team output by introducing autonomous code review agents and automated pull request testing workflows.",
    steps: [
      { step: "01", label: "Challenge", desc: "Senior engineers spent 15+ hours weekly reviewing repetitive PR boilerplate code." },
      { step: "02", label: "AI Execution", desc: "Integrated automated AI code reviewer into GitHub CI/CD pipeline." },
      { step: "03", label: "Result", desc: "3x feature shipping speed with 50% fewer production bug regressions." },
    ],
    tags: ["GitHub CI/CD", "AI Code Review", "DevOps Auto"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    slug: "developer-velocity-assist",
    quote: "Our development velocity tripled after introducing automated AI code review agents.",
    author: "Alex Chen",
    authorTitle: "VP Engineering",
  },
];

const CATEGORIES = ["All", "Customer Service", "Financial Services", "Voice AI & Ops", "Enterprise Ops"];

export function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeStoryModal, setActiveStoryModal] = useState<StoryItem | null>(null);

  const filteredStories = STORIES.filter((story) => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "All" || story.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="relative bg-sandel text-neutral-900 min-h-screen py-12 sm:py-20">
      <div className="container-pad mx-auto max-w-[1400px]">
        
        {/* Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="font-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Our customers, their stories
            </h1>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans max-w-xl">
              Step-by-step implementation breakdowns demonstrating how global enterprises replace manual bottlenecks with autonomous AI engines. Click any box to view full story details.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-[320px]">
            <input
              type="text"
              placeholder="Search by topic, workflow..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-sandel-border bg-sandel-card py-2.5 pl-4 pr-10 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none shadow-2xs transition"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-4 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-sans transition-all duration-200 shrink-0 ${
                selectedCategory === cat
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-sandel-card text-neutral-700 hover:bg-neutral-200/60 border border-sandel-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Premium Apple-Design Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredStories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              onClick={() => setActiveStoryModal(story)}
              className="cursor-pointer group flex flex-col justify-between rounded-[28px] sm:rounded-[32px] border border-white/80 bg-sandel-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-neutral-300/80 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden h-full font-sans"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-200">
                  <img
                    src={story.image}
                    alt={story.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = DEFAULT_FALLBACK_IMG;
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90" />
                  
                  {/* Top Apple Badges overlay */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[10px] font-sans font-medium text-white tracking-wide uppercase shadow-2xs">
                      {story.category}
                    </span>
                    <span className="rounded-full bg-[#ff7a00] text-white px-3 py-1 text-[10px] font-sans font-bold shadow-2xs">
                      {story.metric}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Title */}
                  <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-900 leading-snug line-clamp-2 group-hover:text-[#ff7a00] transition-colors duration-200 tracking-tight">
                    {story.title}
                  </h3>

                  {/* Executive Summary Paragraph */}
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed line-clamp-2">
                    {story.summary}
                  </p>

                  {/* Apple Glass Implementation Pathway Box */}
                  <div className="rounded-[18px] bg-white/70 backdrop-blur-md border border-black/5 p-3.5 space-y-2.5 shadow-2xs">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 border-b border-black/5 pb-1.5 flex items-center justify-between">
                      <span>Implementation Pathway</span>
                      <span className="text-[#ff7a00]">3 Steps</span>
                    </div>

                    {story.steps.map((st) => (
                      <div key={st.step} className="flex items-start gap-2.5 text-[11px] font-sans">
                        <span className="font-mono font-bold text-white text-[9px] bg-[#ff7a00] px-2 py-0.5 rounded-full shrink-0 shadow-2xs">
                          {st.step}
                        </span>
                        <div>
                          <span className="font-bold text-neutral-900 mr-1">{st.label}:</span>
                          <span className="text-neutral-600 font-normal leading-tight">{st.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Floating Apple Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono font-medium text-neutral-700 border border-black/5 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Apple Card Footer Action Row */}
              <div className="px-5 sm:px-6 pb-5 pt-3.5 flex items-center justify-between border-t border-black/5 mt-2">
                <span className="text-xs font-semibold text-neutral-500 font-sans">
                  Customer Story
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                  <span>Read Full Story</span>
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* APPLE DESIGN FULL INFORMATION POPUP MODAL */}
      <AnimatePresence>
        {activeStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Apple Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStoryModal(null)}
              className="fixed inset-0 bg-black/45 backdrop-blur-xl transition-opacity"
            />

            {/* Apple Super-Ellipse Card Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl sm:max-w-3xl rounded-[28px] sm:rounded-[34px] border border-white/60 bg-[#F5ECE0]/95 backdrop-blur-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/5 overflow-hidden z-10 my-4 max-h-[82vh] flex flex-col font-sans"
            >
              {/* Apple Header Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-black/5 bg-[#F5ECE0]/80 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-neutral-900 text-white px-3 py-1 text-[11px] font-sans font-medium shadow-2xs">
                    {activeStoryModal.category}
                  </span>
                  <span className="rounded-full bg-[#ff7a00] text-white px-3 py-1 text-[11px] font-sans font-bold shadow-2xs">
                    {activeStoryModal.metric}
                  </span>
                </div>
                <button
                  onClick={() => setActiveStoryModal(null)}
                  className="size-8 rounded-full bg-black/5 hover:bg-black/10 text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Scrollable Apple Modal Content Body */}
              <div className="p-5 sm:p-7 space-y-5 overflow-y-auto scrollbar-none">
                {/* Hero Banner with Apple Curved Superellipse */}
                <div className="relative h-44 sm:h-52 w-full rounded-[22px] overflow-hidden shadow-sm bg-neutral-200">
                  <img
                    src={activeStoryModal.image}
                    alt={activeStoryModal.title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = DEFAULT_FALLBACK_IMG;
                    }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                      VERIFIED CASE STUDY
                    </span>
                    <h2 className="text-lg sm:text-2xl font-bold text-white font-sans tracking-tight leading-snug">
                      {activeStoryModal.title}
                    </h2>
                  </div>
                </div>

                {/* Executive Summary Block */}
                <div className="px-1">
                  <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Executive Summary
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-800 font-sans leading-relaxed">
                    {activeStoryModal.summary}
                  </p>
                </div>

                {/* Step by Step Implementation Box (Apple Frosted Glass Container) */}
                <div className="rounded-[20px] bg-white/75 backdrop-blur-md border border-black/5 p-4 sm:p-5 space-y-3 shadow-2xs">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 flex items-center justify-between pb-2 border-b border-black/5">
                    <span>3-Step Implementation Pathway</span>
                    <span className="text-[#ff7a00]">Execution Plan</span>
                  </h4>
                  <div className="space-y-2.5 pt-1">
                    {activeStoryModal.steps.map((st) => (
                      <div key={st.step} className="flex items-start gap-3 text-xs sm:text-sm font-sans">
                        <span className="font-mono font-bold text-white text-[10px] bg-[#ff7a00] px-2 py-0.5 rounded-full shrink-0 shadow-2xs">
                          {st.step}
                        </span>
                        <div>
                          <span className="font-bold text-neutral-900 mr-1.5">{st.label}:</span>
                          <span className="text-neutral-700 leading-normal">{st.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote Box */}
                {activeStoryModal.quote && (
                  <div className="rounded-[20px] bg-white/80 backdrop-blur-md border border-orange-200/60 p-4 sm:p-5 space-y-2 shadow-2xs">
                    <Quote className="size-5 text-[#ff7a00]" />
                    <p className="text-xs sm:text-sm font-bold text-neutral-900 font-sans italic leading-relaxed">
                      "{activeStoryModal.quote}"
                    </p>
                    {activeStoryModal.author && (
                      <div className="text-[11px] font-semibold text-neutral-600 font-sans pt-1">
                        — {activeStoryModal.author}, {activeStoryModal.authorTitle}
                      </div>
                    )}
                  </div>
                )}

                {/* Tech Stack & Integration Badges */}
                <div className="px-1 pt-1">
                  <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Deployed Stack & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStoryModal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-mono font-medium text-neutral-700 border border-black/5 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Apple Footer Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 border-t border-black/5 bg-[#F5ECE0]/80 backdrop-blur-md shrink-0">
                <button
                  onClick={() => setActiveStoryModal(null)}
                  className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors font-sans cursor-pointer"
                >
                  Close
                </button>

                <Link
                  to="/case-studies/$slug"
                  params={{ slug: activeStoryModal.slug }}
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all shadow-sm hover:scale-[1.02]"
                >
                  <span>Open Dedicated Page</span>
                  <ArrowUpRight className="size-4 text-[#ff7a00]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}