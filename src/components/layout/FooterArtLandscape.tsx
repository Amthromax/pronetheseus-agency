import React from "react";

interface FooterArtLandscapeProps {
  heading?: string;
}

export function FooterArtLandscape({ heading = "MAKE ACCURACY CAPITAL" }: FooterArtLandscapeProps) {
  return (
    <div className="relative w-full overflow-hidden select-none bg-sandel">
      {/* Left Sidebar Frame Accent */}
      <div className="absolute left-0 top-0 bottom-0 z-30 w-2 sm:w-5 bg-gradient-to-r from-neutral-900/60 via-neutral-800/40 to-transparent border-r border-neutral-900/40 shadow-lg pointer-events-none" />

      {/* Right Sidebar Frame Accent */}
      <div className="absolute right-0 top-0 bottom-0 z-30 w-2 sm:w-5 bg-gradient-to-l from-neutral-900/60 via-neutral-800/40 to-transparent border-l border-neutral-900/40 shadow-lg pointer-events-none" />

      {/* Prominent Overlay Heading Banner */}
      <div className="absolute top-2.5 sm:top-4 inset-x-0 z-30 flex justify-center items-center pointer-events-none px-4">
        <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-700/50 px-4 sm:px-7 py-1 sm:py-2 rounded-full shadow-2xl">
          <h3 className="font-serif text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-neutral-100 drop-shadow-md text-center">
            {heading}
          </h3>
        </div>
      </div>

      {/* Renaissance Ceramic Artwork Banner with Reduced Height */}
      <img
        src="/footer-real-full.webp"
        alt="Classical Infrastructure & AI Automation Artwork"
        className="w-full h-[150px] sm:h-[210px] md:h-[260px] lg:h-[290px] object-cover object-center shadow-md relative z-10"
        loading="lazy"
        decoding="async"
        width={1920}
        height={400}
      />
    </div>
  );
}
