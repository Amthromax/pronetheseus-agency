import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Sparkles, Zap } from "lucide-react";

interface AppIcon {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  position: string;
  floatDelay: number;
  floatDuration: number;
  yOffset: number;
  xOffset: number;
  rotateRange: number[];
  size: string;
  svgIcon: React.ReactNode;
}

const INTEGRATION_APPS: AppIcon[] = [
  // 1. Slack (Real Official Logo)
  {
    id: "slack",
    name: "Slack",
    category: "Team Communication",
    bgColor: "bg-white border border-neutral-200/90 shadow-xl",
    position: "top-[6%] left-[6%] sm:left-[12%]",
    floatDelay: 0,
    floatDuration: 4.5,
    yOffset: 16,
    xOffset: 10,
    rotateRange: [-4, 3, -2, 4, -4],
    size: "size-14 sm:size-18",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 122.8 122.8" fill="none">
        <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#E01E5A"/>
        <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36C5F0"/>
        <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C77.6 5.8 83.4 0 90.5 0s12.9 5.8 12.9 12.9v32.3z" fill="#2EB67D"/>
        <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ECB22E"/>
      </svg>
    ),
  },

  // 2. Adobe Photoshop (Real Official App Icon)
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Design & Media",
    bgColor: "bg-[#001E36] border-2 border-[#31A8FF]/40 shadow-2xl",
    position: "top-[10%] left-[24%] sm:left-[22%]",
    floatDelay: 0.8,
    floatDuration: 5.3,
    yOffset: -18,
    xOffset: -8,
    rotateRange: [2, -4, 3, -1, 2],
    size: "size-16 sm:size-20",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="48" fill="#001E36"/>
        <path fill="#31A8FF" d="M56 64h48c20 0 34 10 34 29 0 20-14 30-35 30H81v45H56V64zm25 40h20c8 0 13-4 13-11 0-7-5-11-13-11H81v22zM151 155c8 6 19 10 31 10 12 0 18-5 18-12 0-8-7-11-20-15-18-6-29-14-29-30 0-18 16-30 39-30 13 0 23 3 30 8l-7 18c-6-4-15-7-24-7-10 0-15 5-15 11 0 7 7 10 21 15 20 7 29 15 29 31 0 19-15 31-42 31-14 0-27-4-35-10l8-18z"/>
      </svg>
    ),
  },

  // 3. Microsoft Excel (Real 3D Microsoft Office Icon)
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "Financial Telemetry",
    bgColor: "bg-white border border-neutral-200/90 shadow-2xl",
    position: "top-[14%] left-[45%] sm:left-[41%]",
    floatDelay: 0.4,
    floatDuration: 4.8,
    yOffset: 20,
    xOffset: 12,
    rotateRange: [-3, 5, -2, 3, -3],
    size: "size-16 sm:size-20",
    svgIcon: (
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 256 256" fill="none">
        <path fill="#107C41" d="M152 24h80a16 16 0 0 1 16 16v176a16 16 0 0 1-16 16h-80V24z"/>
        <path fill="#0E6C38" d="M8 52a16 16 0 0 1 16-16h128v184H24a16 16 0 0 1-16-16V52z"/>
        <path fill="#FFFFFF" d="M48 92h24l18 36 18-36h24l-30 52 32 52h-24l-20-40-20 40H46l32-52-30-52z"/>
      </svg>
    ),
  },

  // 4. Canva (Real Canva Official Logo)
  {
    id: "canva",
    name: "Canva",
    category: "Creative Assets",
    bgColor: "bg-gradient-to-tr from-[#00C4CC] via-[#0085FF] to-[#7D2AE8] shadow-2xl border border-white/30",
    position: "top-[5%] right-[16%] sm:right-[14%]",
    floatDelay: 1.2,
    floatDuration: 4.6,
    yOffset: -14,
    xOffset: 9,
    rotateRange: [4, -3, 2, -4, 4],
    size: "size-16 sm:size-20",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 100 100" fill="none">
        <path fill="#FFFFFF" d="M68.5 35.8c-2.4-3.1-6.1-4.8-10.8-4.8-10.2 0-18.4 8.1-18.4 19.2 0 10.4 7.6 18.2 17.5 18.2 5.1 0 9.2-1.9 12.1-5.5l-3.8-3.4c-2 2.5-4.8 3.8-8.3 3.8-6.4 0-11.2-5-11.2-12.8 0-7.7 5.1-13.4 11.9-13.4 3.4 0 5.9 1.2 7.7 3.3l3.3-4.7zM42.1 44.5c0-1.8-1.2-2.8-3.1-2.8-2.5 0-4.6 2.1-6.1 5.3l-2.4-1.6c2.1-4.2 5.3-7.1 9.8-7.1 4.1 0 6.9 2.2 6.9 6.2v17h-4.8v-2.8c-1.8 2.1-4.2 3.3-7.2 3.3-4.1 0-7.1-2.6-7.1-6.4 0-4.3 3.4-6.6 9.4-6.8l4.6-.2v-4.1zm-4.6 13.9c2.7 0 4.6-1.8 4.6-4.5v-2.4l-3.7.2c-3.6.2-5.4 1.4-5.4 3.8 0 1.9 1.6 2.9 4.5 2.9z"/>
      </svg>
    ),
  },

  // 5. Google Chrome (Real Official 4-Color Logo)
  {
    id: "chrome",
    name: "Google Chrome",
    category: "Web & API Automation",
    bgColor: "bg-white border border-neutral-200/90 shadow-xl",
    position: "top-[18%] right-[26%] sm:right-[24%]",
    floatDelay: 0.6,
    floatDuration: 5.1,
    yOffset: 15,
    xOffset: -10,
    rotateRange: [-2, 4, -3, 2, -2],
    size: "size-14 sm:size-16",
    svgIcon: (
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 192 192" fill="none">
        <circle cx="96" cy="96" r="88" fill="#4285F4"/>
        <path fill="#EA4335" d="M96 44h81.4A88 88 0 0 0 35.8 24.5L74.9 92.2A52 52 0 0 1 96 44z"/>
        <path fill="#FBBC05" d="M96 148a52 52 0 0 1-45.1-26L11.8 54.3A88 88 0 0 0 96 184l39.1-67.8A51.9 51.9 0 0 1 96 148z"/>
        <path fill="#34A853" d="M96 148l39.1 67.8A88 88 0 0 0 177.4 54.3H99.2A52 52 0 0 1 96 148z"/>
        <circle cx="96" cy="96" r="48" fill="#FFFFFF"/>
        <circle cx="96" cy="96" r="36" fill="#1A73E3"/>
      </svg>
    ),
  },

  // 6. WhatsApp (Real Official Logo)
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Client Messaging",
    bgColor: "bg-[#25D366] shadow-2xl border border-emerald-400/40",
    position: "top-[34%] left-[14%] sm:left-[14%]",
    floatDelay: 0.3,
    floatDuration: 4.9,
    yOffset: -18,
    xOffset: 7,
    rotateRange: [3, -5, 2, -2, 3],
    size: "size-14 sm:size-16",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 256 256" fill="none">
        <path fill="#FFFFFF" d="M128 32a96 96 0 0 0-83 144L32 224l49-13a96 96 0 1 0 47-179zm53 137c-2 6-13 13-19 13-4 1-11 1-35-9-31-12-51-43-52-45-2-2-12-16-12-31 0-15 8-22 11-25 3-3 7-3 9-3s6 0 8 1c2 1 7 16 8 19 1 2 1 4 0 7s-2 4-4 6c-2 2-5 4-2 8 4 6 12 20 27 32 18 15 33 20 37 22 4 2 7 1 9-1s9-10 11-13c2-3 5-2 8-1s20 10 23 11c3 2 5 4 6 6 1 3 1 8-1 15z"/>
      </svg>
    ),
  },

  // 7. Microsoft PowerPoint (Real 3D Office Icon)
  {
    id: "powerpoint",
    name: "Microsoft PowerPoint",
    category: "Executive Decks",
    bgColor: "bg-white border border-neutral-200/90 shadow-2xl",
    position: "top-[38%] right-[8%] sm:right-[11%]",
    floatDelay: 0.9,
    floatDuration: 5.2,
    yOffset: 22,
    xOffset: -12,
    rotateRange: [-4, 3, -2, 5, -4],
    size: "size-16 sm:size-20",
    svgIcon: (
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 256 256" fill="none">
        <path fill="#D24726" d="M152 24h80a16 16 0 0 1 16 16v176a16 16 0 0 1-16 16h-80V24z"/>
        <path fill="#B73A1B" d="M8 52a16 16 0 0 1 16-16h128v184H24a16 16 0 0 1-16-16V52z"/>
        <path fill="#FFFFFF" d="M48 92h40a28 28 0 0 1 0 56H68v36H48V92zm20 18v20h20a10 10 0 0 0 0-20H68z"/>
      </svg>
    ),
  },

  // 8. Notion (Real Official Notion Logo)
  {
    id: "notion",
    name: "Notion OS",
    category: "Knowledge Base",
    bgColor: "bg-white border border-neutral-300 shadow-xl",
    position: "top-[25%] right-[4%] sm:right-[5%]",
    floatDelay: 1.1,
    floatDuration: 4.3,
    yOffset: -12,
    xOffset: 8,
    rotateRange: [2, -3, 4, -1, 2],
    size: "size-14 sm:size-16",
    svgIcon: (
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="48" fill="#FFFFFF"/>
        <path fill="#000000" d="M48 37c6 5 8 4 19 3l90-5c3 0 1-3 0-3L138 20c-3-3-8-5-14-4L45 21c-4 1-5 3-3 5l6 11zm6 29v107c0 5 3 7 8 6l98-8c5-1 6-4 6-7V51c0-4-2-6-5-5L59 54c-3 1-5 3-5 7zm97 8c0-2-1-3-3-2l-20 4-1 1v40l-28-38c-1-2-4-4-7-3l-20 2c-2 0-3 2-3 4v52c0 2 1 3 4 2l11-1V90l30 39c2 3 4 4 7 3l19-2c2 0 3-2 3-4V74z"/>
      </svg>
    ),
  },

  // 9. Microsoft Word (Real 3D Office Icon)
  {
    id: "word",
    name: "Microsoft Word",
    category: "Contract Automation",
    bgColor: "bg-white border border-neutral-200/90 shadow-2xl",
    position: "bottom-[20%] right-[20%] sm:right-[18%]",
    floatDelay: 0.5,
    floatDuration: 4.7,
    yOffset: -16,
    xOffset: -9,
    rotateRange: [-3, 4, -2, 3, -3],
    size: "size-16 sm:size-20",
    svgIcon: (
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 256 256" fill="none">
        <path fill="#185ABD" d="M152 24h80a16 16 0 0 1 16 16v176a16 16 0 0 1-16 16h-80V24z"/>
        <path fill="#103F91" d="M8 52a16 16 0 0 1 16-16h128v184H24a16 16 0 0 1-16-16V52z"/>
        <path fill="#FFFFFF" d="M36 92h22l14 56 16-56h20l16 56 14-56h22l-24 92h-22l-16-54-16 54H60L36 92z"/>
      </svg>
    ),
  },

  // 10. Trello (Real Official Trello Icon)
  {
    id: "trello",
    name: "Trello",
    category: "Project Kanban",
    bgColor: "bg-[#0079BF] shadow-2xl border border-blue-400/40",
    position: "bottom-[14%] left-[16%] sm:left-[18%]",
    floatDelay: 1.3,
    floatDuration: 5.4,
    yOffset: 18,
    xOffset: 10,
    rotateRange: [4, -2, 3, -5, 4],
    size: "size-14 sm:size-16",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="48" fill="#0079BF"/>
        <rect x="44" y="44" width="72" height="168" rx="16" fill="#FFFFFF"/>
        <rect x="140" y="44" width="72" height="104" rx="16" fill="#FFFFFF"/>
      </svg>
    ),
  },

  // 11. Zoom (Real Official Zoom Icon)
  {
    id: "zoom",
    name: "Zoom",
    category: "Video Conferencing",
    bgColor: "bg-[#2D8CFF] shadow-2xl border border-blue-400/40",
    position: "bottom-[32%] left-[24%] sm:left-[26%]",
    floatDelay: 0.7,
    floatDuration: 4.4,
    yOffset: -14,
    xOffset: -6,
    rotateRange: [-3, 2, -4, 3, -3],
    size: "size-12 sm:size-14",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="48" fill="#2D8CFF"/>
        <path fill="#FFFFFF" d="M48 92a16 16 0 0 1 16-16h76a16 16 0 0 1 16 16v72a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V92zm124 18l36-26a8 8 0 0 1 12 7v74a8 8 0 0 1-12 7l-36-26v-36z"/>
      </svg>
    ),
  },

  // 12. n8n Automation Engine (Real Official Connected Nodes Logo)
  {
    id: "n8n",
    name: "n8n Workflow Engine",
    category: "Core Automation Engine",
    bgColor: "bg-[#EA4B71] shadow-2xl border border-rose-400/40 ring-4 ring-orange-500/20",
    position: "bottom-[18%] left-[45%] sm:left-[46%]",
    floatDelay: 0.2,
    floatDuration: 4.5,
    yOffset: -20,
    xOffset: 14,
    rotateRange: [-5, 4, -2, 5, -5],
    size: "size-14 sm:size-16",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="48" fill="#EA4B71"/>
        <circle cx="70" cy="128" r="28" fill="#FFFFFF"/>
        <circle cx="186" cy="74" r="28" fill="#FFFFFF"/>
        <circle cx="186" cy="182" r="28" fill="#FFFFFF"/>
        <path d="M70 128H186M186 74V182" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round"/>
      </svg>
    ),
  },

  // 13. GitHub (Real Official Octocat Logo)
  {
    id: "github",
    name: "GitHub Repositories",
    category: "Source Code Control",
    bgColor: "bg-[#181717] border border-neutral-700 shadow-2xl",
    position: "bottom-[12%] right-[8%] sm:right-[10%]",
    floatDelay: 1.4,
    floatDuration: 5.5,
    yOffset: 16,
    xOffset: -10,
    rotateRange: [3, -4, 2, -3, 3],
    size: "size-12 sm:size-14",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 256 256" fill="none">
        <rect width="256" height="256" rx="48" fill="#181717"/>
        <path fill="#FFFFFF" d="M128 32C75 32 32 75 32 128c0 42 27 78 65 91 5 1 7-2 7-5v-18c-26 6-32-13-32-13-4-11-10-14-10-14-9-6 1-6 1-6 10 1 15 10 15 10 8 15 22 10 28 8 1-6 3-10 6-13-21-2-43-11-43-47 0-10 4-19 10-26-1-2-4-12 1-25 0 0 8-3 26 10 8-2 16-3 25-3s17 1 25 3c18-13 26-10 26-10 5 13 2 23 1 25 6 7 10 16 10 26 0 36-22 45-43 47 3 3 6 9 6 18v27c0 3 2 6 7 5 38-13 65-49 65-91 0-53-43-96-96-96z"/>
      </svg>
    ),
  },
];

export function FloatingAppIntegrations() {
  const [hoveredApp, setHoveredApp] = useState<AppIcon | null>(null);
  const [plusHovered, setPlusHovered] = useState(false);

  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 sm:py-28 overflow-hidden border-t border-b border-neutral-200 select-none">
      {/* Full Royal Feast Architectural Background Sketch */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        <img
          src="/royal-feast-sketch.jpg"
          alt="Classical Royal Feast Architectural Sketch"
          className="w-full h-full object-cover object-center opacity-85 sm:opacity-90 mix-blend-multiply"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Dynamic Ambient Glow Halo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="size-[650px] sm:size-[800px] rounded-full bg-gradient-to-tr from-orange-400/10 via-orange-600/5 to-transparent blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-[480px] sm:min-h-[560px] flex flex-col items-center justify-center">
        {/* Scattered Dynamic Animated App Badges */}
        {INTEGRATION_APPS.map((app) => {
          const isCurrentHovered = hoveredApp?.id === app.id;
          return (
            <motion.div
              key={app.id}
              initial={{ y: 0, x: 0, rotate: 0 }}
              animate={{
                y: [0, app.yOffset, 0, -app.yOffset * 0.7, 0],
                x: [0, app.xOffset, 0, -app.xOffset * 0.8, 0],
                rotate: app.rotateRange,
                scale: [1, 1.04, 0.98, 1.02, 1],
              }}
              transition={{
                duration: app.floatDuration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: app.floatDelay,
              }}
              onMouseEnter={() => setHoveredApp(app)}
              onMouseLeave={() => setHoveredApp(null)}
              className={`absolute ${app.position} ${app.size} cursor-pointer z-10 transition-transform duration-300 ${
                isCurrentHovered ? "z-40 scale-125" : "hover:z-30 hover:scale-115"
              }`}
            >
              {/* App Icon Container */}
              <div
                className={`relative w-full h-full rounded-2xl ${app.bgColor} flex items-center justify-center transition-all duration-300 overflow-hidden ${
                  isCurrentHovered
                    ? "shadow-[0_20px_40px_rgba(255,122,0,0.35)] ring-2 ring-[#ff7a00]"
                    : "hover:shadow-2xl"
                }`}
              >
                {app.svgIcon}
              </div>

              {/* Floating Tooltip Banner on Hover */}
              <AnimatePresence>
                {isCurrentHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -12, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-semibold text-white shadow-xl pointer-events-none flex items-center gap-1.5 border border-neutral-700 z-50"
                  >
                    <Sparkles className="size-3 text-[#ff7a00]" />
                    <span>{app.name}</span>
                    <span className="text-[9px] text-neutral-400 font-mono">({app.category})</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Central Headline Box with Glassmorphism & Subtle Shimmer Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 text-center max-w-2xl mx-auto px-6 py-8 sm:py-10 bg-white/80 backdrop-blur-xl rounded-[32px] border border-neutral-200/90 shadow-[0_10px_40px_rgba(0,0,0,0.06)] group"
        >
          {/* Top Pill Badge */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#ff7a00]">
              <Zap className="size-3 text-[#ff7a00]" />
              UNIVERSAL INTEGRATION ENGINE
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight sm:leading-none">
            All your go-to apps
          </h2>
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight sm:leading-none mt-2">
            fly on Pronetheseus.
          </p>
          <p className="mt-4 text-xs sm:text-sm text-neutral-600 font-normal max-w-lg mx-auto leading-relaxed">
            Seamless bi-directional integrations across Slack, CRM, Microsoft 365, Google Workspace, n8n workflows, and custom agency APIs.
          </p>
        </motion.div>

        {/* Floating Plus (+) Button on Bottom Right Edge */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20">
          <motion.button
            onMouseEnter={() => setPlusHovered(true)}
            onMouseLeave={() => setPlusHovered(false)}
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative size-12 sm:size-14 rounded-full bg-white border border-neutral-300 text-neutral-900 flex items-center justify-center shadow-xl hover:shadow-2xl hover:border-[#ff7a00] hover:text-[#ff7a00] cursor-pointer"
            title="Explore 100+ More Integrations"
          >
            <Plus className="size-6 sm:size-7" />

            {/* Hover Tooltip */}
            <AnimatePresence>
              {plusHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: -14 }}
                  exit={{ opacity: 0, x: -5 }}
                  className="absolute right-full top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-semibold text-white shadow-lg mr-2 pointer-events-none"
                >
                  100+ Custom Integrations Available
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
