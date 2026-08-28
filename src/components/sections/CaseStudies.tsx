import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

interface StoryItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  image: string;
  slug: string;
}

const DEFAULT_FALLBACK_IMG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";

const STORIES: StoryItem[] = [
  {
    id: "1",
    title: "How an 80-million-customer energy giant replaced voice with AI-driven self-service",
    category: "Voice AI & Ops",
    metric: "90% Deflection",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    slug: "energy-giant-ai-voice",
  },
  {
    id: "2",
    title: "Fortune 50 Financial Institution Modernizes Global Banking Service Operations",
    category: "Financial Services",
    metric: "$2.4M Saved",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    slug: "financial-institution-modernization",
  },
  {
    id: "3",
    title: "Ecuador's largest insurer transforms contact center operations with generative AI",
    category: "Customer Service",
    metric: "<30s Response",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    slug: "ecuador-insurer-transformation",
  },
  {
    id: "4",
    title: "Insurance provider transforms customer service with autonomous AI agents",
    category: "AI Support Agents",
    metric: "99.4% Accuracy",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    slug: "insurance-provider-ai-agents",
  },
  {
    id: "5",
    title: "Global design and engineering software leader automated technical support",
    category: "Tech Support AI",
    metric: "4.2x Throughput",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    slug: "engineering-software-support",
  },
  {
    id: "6",
    title: "How a leading confectionary manufacturer automated B2B retail ordering",
    category: "B2B Revenue AI",
    metric: "100% Order Sync",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    slug: "confectionary-manufacturer-b2b",
  },
  {
    id: "7",
    title: "Empowering a Global Frontline Workforce with AI-Driven Employee Assistance",
    category: "Enterprise Ops",
    metric: "45k Users",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    slug: "frontline-workforce-assistance",
  },
  {
    id: "8",
    title: "Transforming Live Event Support with Intelligent Digital Self-Service",
    category: "Event Automation",
    metric: "24/7 Availability",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    slug: "live-event-self-service",
  },
  {
    id: "9",
    title: "Modernizing Digital Self-Service for Corporate Travel & Mobility",
    category: "Travel & Mobility",
    metric: "60% Cost Reduction",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    slug: "corporate-travel-self-service",
  },
  {
    id: "10",
    title: "Scaling Developer Velocity with Autonomous Code Assist & Workflows",
    category: "Developer Ops",
    metric: "3x Shipping Speed",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    slug: "developer-velocity-assist",
  },
];

const CATEGORIES = ["All", "Customer Service", "Financial Services", "Voice AI & Ops", "Enterprise Ops"];

export function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStories = STORIES.filter((story) => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.category.toLowerCase().includes(searchQuery.toLowerCase());
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
              Explore how global enterprises and fast-growing companies replace manual processes with autonomous AI systems.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-[320px]">
            <input
              type="text"
              placeholder="Search by topic, industry..."
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

        {/* 3-Column Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <Link
                to="/case-studies/$slug"
                params={{ slug: story.slug }}
                className="group flex flex-col justify-between rounded-xl border border-sandel-border bg-sandel-card overflow-hidden shadow-2xs transition-all duration-300 hover:border-neutral-400 hover:shadow-xl hover:-translate-y-1.5 h-full"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Top Badges overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-sans font-semibold text-white tracking-wide uppercase">
                        {story.category}
                      </span>
                      <span className="rounded-md bg-[#ff7a00] text-white px-2.5 py-1 text-[10px] font-sans font-bold shadow-sm">
                        {story.metric}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-900 leading-snug line-clamp-3 group-hover:text-[#ff7a00] transition-colors duration-200">
                      {story.title}
                    </h3>
                  </div>
                </div>

                {/* Card Footer Action Row */}
                <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between border-t border-sandel-border/60">
                  <span className="text-xs font-semibold text-neutral-500 font-sans">
                    Customer Story
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-[#ff7a00] transition-colors">
                    <span>Read Story</span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}