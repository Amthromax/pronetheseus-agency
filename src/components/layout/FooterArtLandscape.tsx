import React from "react";

export function FooterArtLandscape() {
  return (
    <div className="relative w-full overflow-hidden pointer-events-none select-none bg-[#fffbf5]">
      <img
        src="/footer-art-orange.png"
        alt="Classical Infrastructure & AI Automation Artwork"
        className="w-full h-auto object-cover object-center"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
