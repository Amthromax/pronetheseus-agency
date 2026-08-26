import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

interface StoryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
}

const STORIES: StoryItem[] = [
  {
    id: "1",
    title: "How an 80-million-customer energy giant replaced voice with AI-driven self-service",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1527018606416-a6545375b2ce?auto=format&fit=crop&w=800&q=80",
    slug: "energy-giant-ai-voice",
  },
  {
    id: "2",
    title: "Fortune 50 Financial Institution Modernizes Global Banking Service Operations",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80",
    slug: "financial-institution-modernization",
  },
  {
    id: "3",
    title: "Ecuador's largest insurer transforms contact center operations with generative AI",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    slug: "ecuador-insurer-transformation",
  },
  {
    id: "4",
    title: "Insurance provider transforms customer service with AI agents",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    slug: "insurance-provider-ai-agents",
  },
  {
    id: "5",
    title: "Global design and engineering software leader automated technical support",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    slug: "engineering-software-support",
  },
  {
    id: "6",
    title: "How a leading confectionary manufacturer automated B2B retail ordering",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
    slug: "confectionary-manufacturer-b2b",
  },
  {
    id: "7",
    title: "Empowering a Global Frontline Workforce with AI-Driven Employee Assistance",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    slug: "frontline-workforce-assistance",
  },
  {
    id: "8",
    title: "Transforming Live Event Support with Intelligent Digital Self-Service",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    slug: "live-event-self-service",
  },
  {
    id: "9",
    title: "Modernizing Digital Self-Service for Corporate Travel & Mobility",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    slug: "corporate-travel-self-service",
  },
  {
    id: "10",
    title: "Scaling Developer Velocity with Autonomous Code Assist & Workflows",
    category: "Customer Story",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    slug: "developer-velocity-assist",
  },
];

export function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStories = STORIES.filter((story) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative bg-[#F2F7FA] text-neutral-900 min-h-screen py-10 sm:py-16">
      <div className="container-pad mx-auto max-w-[1500px]">
        {/* Top Header Row with Title & Search Input */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] leading-tight">
            Our customers, their stories
          </h1>

          {/* Search Input Bar */}
          <div className="relative w-full sm:w-[280px] md:w-[320px]">
            <input
              type="text"
              placeholder="Search articles"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-none border border-neutral-300/80 bg-white py-2 pl-3.5 pr-9 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-800 focus:outline-none shadow-2xs transition"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400 pointer-events-none" />
          </div>
        </div>

        {/* 3-Column Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredStories.map((story) => (
            <Link
              key={story.id}
              to="/case-studies/$slug"
              params={{ slug: story.slug }}
              className="group flex flex-col justify-between rounded-none border border-neutral-200/90 bg-white overflow-hidden shadow-2xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Image Thumbnail */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-6">
                  {/* Dashed Left Border Accent Title */}
                  <div className="border-l-2 border-dashed border-neutral-800 pl-3">
                    <h3 className="font-display text-sm sm:text-base font-semibold text-neutral-900 leading-snug line-clamp-3 group-hover:text-black">
                      {story.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Row */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 flex items-center justify-between border-t border-neutral-100/80">
                <span className="text-xs font-semibold text-neutral-500">
                  {story.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-neutral-900 group-hover:underline">
                  READ NOW <span className="size-1 rounded-full bg-neutral-900" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}