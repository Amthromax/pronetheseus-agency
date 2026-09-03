import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  logo: string;
  isLogoCustom?: boolean;
  logoElement?: React.ReactNode;
  image: string;
  slug: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "POSH AI",
    category: "Ad Production & UI Design",
    year: "2025",
    logo: "posh",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80",
    slug: "posh-ai",
  },
  {
    id: "2",
    title: "TaxCloud",
    category: "Ad Production & Creative",
    year: "2025",
    logo: "taxcloud",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&auto=format&fit=crop&q=80",
    slug: "taxcloud",
  },
  {
    id: "3",
    title: "Tosoh Bioscience",
    category: "Podcast Production & Animation",
    year: "2025",
    logo: "",
    isLogoCustom: true,
    logoElement: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#eae9e3] p-8">
        <div className="relative max-w-[85%] max-h-[85%] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
            alt="MacBook Showcase"
            className="rounded-lg shadow-xl object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-8 sm:size-10 rounded-full bg-white/90 shadow-md border border-neutral-200 flex items-center justify-center">
              <span className="size-3.5 rounded-full bg-[#e11d48] border-2 border-white" />
            </div>
          </div>
        </div>
      </div>
    ),
    image: "",
    slug: "tosoh-bioscience",
  },
  {
    id: "4",
    title: "Time4Learning",
    category: "Video Production",
    year: "2026",
    logo: "",
    isLogoCustom: true,
    logoElement: (
      <div className="w-full h-full flex items-center justify-center bg-[#e6e5df] p-8">
        <div className="text-center font-display tracking-tight font-extrabold text-2xl sm:text-4xl text-neutral-900 flex items-center justify-center gap-0.5">
          <span>time</span>
          <span className="text-[#059669]">4</span>
          <span>learning</span>
        </div>
      </div>
    ),
    image: "",
    slug: "time4learning",
  },
];

export function Portfolio() {
  return (
    <section id="our-work" className="relative bg-white py-16 sm:py-24 text-neutral-900 font-sans overflow-hidden">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-8 lg:px-16 xl:px-20">
        
        {/* Top Section Header Divider Bar */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
          <span className="text-sm font-medium tracking-tight text-neutral-800 font-sans">
            /Our work
          </span>
          <span className="text-sm font-medium text-neutral-400 font-sans">
            (03)
          </span>
        </div>

        {/* Main Section Title & Subtitle + View All Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-[50px] font-semibold text-neutral-900 tracking-tight leading-[1.1] font-sans"
            >
              Selected projects across ad production, podcast, social, and motion.
            </motion.h2>

            <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-xl font-sans">
              A curated selection of projects that reflect our commitment to simplicity and purposeful design.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-[#f4f3ee] px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-200/70 transition shadow-2xs cursor-pointer font-sans"
            >
              <span>View all projects</span>
              <span className="text-sm font-normal">+</span>
            </Link>
          </div>
        </div>

        {/* 2x2 Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-[24px] bg-[#e6e5df] border border-neutral-300/80 overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-neutral-400 transition duration-300 cursor-pointer"
            >
              {/* Full-Bleed Media Container Box */}
              <div className="relative bg-neutral-900 overflow-hidden aspect-[16/11] min-h-[320px] sm:min-h-[410px] w-full flex items-center justify-center">
                {project.isLogoCustom ? (
                  project.logoElement
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition duration-500" />
                    
                    {/* Centered Overlay Logo */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display opacity-95 group-hover:scale-110 transition duration-500 drop-shadow-md">
                        {project.logo}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom Full-Width Card Meta Details Info Row */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-[#e6e5df] border-t border-black/5">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-normal mt-0.5">
                    {project.category}
                  </p>
                </div>
                <div className="text-xs font-semibold text-neutral-600">
                  {project.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}