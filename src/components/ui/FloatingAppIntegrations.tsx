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
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 24 24" fill="none">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
      </svg>
    ),
  },

  // 2. Adobe Photoshop (Real Official 3D App Icon)
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Design & Media",
    bgColor: "bg-[#001E36] border-2 border-[#003366] shadow-2xl",
    position: "top-[10%] left-[24%] sm:left-[22%]",
    floatDelay: 0.8,
    floatDuration: 5.3,
    yOffset: -18,
    xOffset: -8,
    rotateRange: [2, -4, 3, -1, 2],
    size: "size-16 sm:size-20",
    svgIcon: (
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 48 48" fill="none">
        <path fill="#31A8FF" d="M11 14h8.4c3.6 0 6 1.8 6 5 0 3.6-2.6 5.2-6.2 5.2H15.4V34H11V14zm4.4 7.2h3.6c1.6 0 2.8-.8 2.8-2.2 0-1.4-1.2-2-2.8-2h-3.6v4.2zM27.6 30.4c1.4 1 3.4 1.8 5.4 1.8 2 0 3-.8 3-2 0-1.2-1-1.8-3.4-2.6-3.2-1-5.2-2.4-5.2-5.2 0-3.2 2.8-5.2 6.8-5.2 2.2 0 4 .6 5.2 1.4l-1.2 3c-1-.6-2.6-1.2-4.2-1.2-1.8 0-2.6.8-2.6 1.8 0 1.2 1.2 1.6 3.6 2.4 3.6 1.2 5.2 2.6 5.2 5.4 0 3.4-2.6 5.4-7.4 5.4-2.4 0-4.6-.6-6.2-1.8l1-3.2z"/>
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
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 48 48" fill="none">
        <path fill="#107C41" d="M16 6h22a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H16V6z"/>
        <path fill="#185ABD" opacity="0.15" d="M16 6h24v36H16z"/>
        <path fill="#0E6C38" d="M6 11.5A2.5 2.5 0 0 1 8.5 9h16.1a2.5 2.5 0 0 1 2.4 2.5v25a2.5 2.5 0 0 1-2.4 2.5H8.5A2.5 2.5 0 0 1 6 36.5v-25z"/>
        <path fill="#FFFFFF" d="M11.8 17.5h3.6l3 5.4 3-5.4h3.6l-4.8 7.5 5 7.8h-3.6l-3.2-5.6-3.2 5.6h-3.6l5-7.8-4.8-7.5z"/>
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
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 48 48" fill="none">
        <path fill="#FFFFFF" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2.1 28.5c-4.8 0-8.4-3.6-8.4-8.7s3.6-8.7 8.4-8.7c2.9 0 5.2 1.3 6.6 3.5l-2.8 1.9c-.8-1.3-2.1-2-3.8-2-2.9 0-5 2.3-5 5.3s2.1 5.3 5 5.3c1.7 0 3-.7 3.8-2l2.8 1.9c-1.4 2.2-3.7 3.5-6.6 3.5z"/>
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
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#4285F4"/>
        <path d="M12 12L7.5 4.2A10 10 0 0 1 21.6 8.4H12z" fill="#EA4335"/>
        <path d="M12 12l4.5 7.8A10 10 0 0 1 2.4 15.6L6.9 7.8 12 12z" fill="#FBBC05"/>
        <path d="M12 12H3a10 10 0 0 1 13.5-7.8L12 12z" fill="#34A853"/>
        <circle cx="12" cy="12" r="4.5" fill="#FFFFFF"/>
        <circle cx="12" cy="12" r="3.5" fill="#4285F4"/>
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
      <svg className="size-full p-2.5 sm:p-3 fill-white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 48 48" fill="none">
        <path fill="#D24726" d="M16 6h22a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H16V6z"/>
        <path fill="#B73A1B" d="M6 11.5A2.5 2.5 0 0 1 8.5 9h16.1a2.5 2.5 0 0 1 2.4 2.5v25a2.5 2.5 0 0 1-2.4 2.5H8.5A2.5 2.5 0 0 1 6 36.5v-25z"/>
        <path fill="#FFFFFF" d="M11 17.5h7.5a4.5 4.5 0 0 1 0 9H14.5v4.5H11v-13.5zm3.5 3.2v3.1h4a1.5 1.5 0 0 0 0-3.1h-4z"/>
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
    size: "size-12 sm:size-14",
    svgIcon: (
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 48 48" fill="none">
        <path fill="#000000" d="M8.9 8.4c1.5 1.2 2.1 1.1 4.8.9l22.9-1.4c.7 0 .1-.7-.1-.8L31.7 3.7c-.8-.7-2-1.2-3.6-1.1L8 4c-.9.1-1.3.7-.8 1.2l1.7 3.2zm1.5 7.4v27.2c0 1.2.7 1.7 2.1 1.6l25.6-2c1.3-.1 1.5-1.1 1.5-1.9V13.3c0-.9-.5-1.5-1.3-1.4L12.5 14c-.9.1-1.4.7-1.4 1.8zm24.7 2.1c0-.5-.3-.7-.8-.6L27.6 18l-.3.1v15.4l-7.3-14.6c-.4-.7-.9-.9-1.8-.8l-5.2.5c-.5.1-.7.5-.7.9v20.2c0 .6.4.7.9.6l4.3-.3v-14.7l7.6 14.7c.5.8 1 .9 1.9.8l7.3-.6c.6-.1.8-.5.8-.9V17.9z"/>
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
      <svg className="size-full p-2 sm:p-2.5" viewBox="0 0 48 48" fill="none">
        <path fill="#185ABD" d="M16 6h22a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H16V6z"/>
        <path fill="#103F91" d="M6 11.5A2.5 2.5 0 0 1 8.5 9h16.1a2.5 2.5 0 0 1 2.4 2.5v25a2.5 2.5 0 0 1-2.4 2.5H8.5A2.5 2.5 0 0 1 6 36.5v-25z"/>
        <path fill="#FFFFFF" d="M9.5 17.5h3.6l2.3 9.4 2.8-9.4h3.2l2.8 9.4 2.3-9.4h3.6l-3.7 13.5h-3.8l-2.7-8.8-2.7 8.8h-3.8l-3.7-13.5z"/>
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
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0079BF"/>
        <rect x="4.5" y="4.5" width="6.5" height="15" rx="1.5" fill="#FFFFFF"/>
        <rect x="13" y="4.5" width="6.5" height="9" rx="1.5" fill="#FFFFFF"/>
      </svg>
    ),
  },

  // 11. Zoom (Real Official Zoom Camera Icon)
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
      <svg className="size-full p-2.5 sm:p-3" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#2D8CFF"/>
        <path d="M4.5 8.5A1.5 1.5 0 0 1 6 7h7a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 13 17H6a1.5 1.5 0 0 1-1.5-1.5v-7zM16 10l3.5-2.5v9L16 14v-4z" fill="#FFFFFF"/>
      </svg>
    ),
  },

  // 12. n8n Automation Engine (Real Official Coral Icon)
  {
    id: "n8n",
    name: "n8n Workflow Engine",
    category: "Core Automation Engine",
    bgColor: "bg-gradient-to-tr from-[#FF6D5A] to-[#EA4B71] shadow-2xl border border-rose-400/40 ring-4 ring-orange-500/20",
    position: "bottom-[18%] left-[45%] sm:left-[46%]",
    floatDelay: 0.2,
    floatDuration: 4.5,
    yOffset: -20,
    xOffset: 14,
    rotateRange: [-5, 4, -2, 5, -5],
    size: "size-14 sm:size-16",
    svgIcon: (
      <div className="flex flex-col items-center justify-center text-white size-full">
        <span className="font-mono text-sm sm:text-base font-black tracking-tighter leading-none">n8n</span>
        <span className="text-[7px] font-mono uppercase tracking-widest opacity-90 mt-0.5 font-bold">FLOW</span>
      </div>
    ),
  },

  // 13. GitHub (Real Official Octocat Icon)
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
      <svg className="size-full p-2 sm:p-2.5 fill-white" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
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
