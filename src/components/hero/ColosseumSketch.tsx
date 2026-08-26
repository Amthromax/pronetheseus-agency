import React from "react";

export function ColosseumSketch({ className = "" }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover text-neutral-700"
      >
        <defs>
          {/* Vertical Blue Tint Mask / Gradient */}
          <linearGradient id="blueTintGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="blueLineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>

          {/* Fade out right & bottom */}
          <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <mask id="colosseumMask">
            <rect width="1400" height="900" fill="url(#fadeRight)" />
          </mask>
        </defs>

        <g mask="url(#colosseumMask)" opacity="0.85">
          {/* Structural Guidework Grid */}
          <g stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="3 3">
            <line x1="0" y1="150" x2="1400" y2="150" />
            <line x1="0" y1="300" x2="1400" y2="300" />
            <line x1="0" y1="450" x2="1400" y2="450" />
            <line x1="0" y1="600" x2="1400" y2="600" />
            <line x1="0" y1="750" x2="1400" y2="750" />
            <line x1="200" y1="0" x2="200" y2="900" />
            <line x1="450" y1="0" x2="450" y2="900" />
            <line x1="700" y1="0" x2="700" y2="900" />
            <line x1="950" y1="0" x2="950" y2="900" />
          </g>

          {/* BASE COLOSSEUM SKETCH - BLACK / GREY GRAPHITE LINES */}
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
            {/* Top Attic Story Wall */}
            <path d="M 20 80 L 350 150 L 850 250 L 1380 380" />
            <path d="M 20 110 L 350 175 L 850 270 L 1380 395" />
            <path d="M 20 140 L 350 200 L 850 290 L 1380 410" />

            {/* Top Attic Pilasters / Windows */}
            {[40, 70, 100, 130, 160, 190, 220, 250, 280, 310, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 870, 920, 970, 1020, 1070, 1120, 1170, 1220, 1270, 1320].map((x, i) => (
              <g key={`top-win-${i}`}>
                <line x1={x} y1={80 + x * 0.22} x2={x} y2={140 + x * 0.2} />
                {i % 2 === 0 && (
                  <rect x={x + 5} y={92 + x * 0.21} width={12} height={20} fill="#1E293B" opacity="0.15" />
                )}
              </g>
            ))}

            {/* Third Tier Promenade & Cornice */}
            <path d="M 15 210 L 340 265 L 840 345 L 1370 455" strokeWidth="1.6" />
            <path d="M 15 225 L 340 278 L 840 355 L 1370 465" />

            {/* Third Tier Arches */}
            {[25, 65, 105, 145, 185, 225, 265, 305, 350, 395, 440, 485, 530, 575, 620, 665, 710, 755, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300].map((x, i) => {
              const yBase = 225 + x * 0.17;
              const h = 75;
              return (
                <g key={`arch-3-${i}`}>
                  <path d={`M ${x} ${yBase + h} L ${x} ${yBase + 22} Q ${x + 15} ${yBase} ${x + 30} ${yBase + 22} L ${x + 30} ${yBase + h}`} />
                  <path d={`M ${x + 4} ${yBase + h} L ${x + 4} ${yBase + 25} Q ${x + 15} ${yBase + 6} ${x + 26} ${yBase + 25} L ${x + 26} ${yBase + h}`} opacity="0.5" />
                  {/* Column Detailing */}
                  <line x1={x - 3} y1={yBase} x2={x + 33} y2={yBase} strokeWidth="1" />
                </g>
              );
            })}

            {/* Second Tier Entablature & Cornice */}
            <path d="M 10 330 L 330 380 L 830 455 L 1360 560" strokeWidth="1.8" />
            <path d="M 10 345 L 330 393 L 830 465 L 1360 570" />

            {/* Second Tier Arches */}
            {[20, 60, 100, 140, 180, 220, 260, 300, 345, 390, 435, 480, 525, 570, 615, 660, 705, 750, 795, 845, 895, 945, 995, 1045, 1095, 1145, 1195, 1245, 1295].map((x, i) => {
              const yBase = 345 + x * 0.16;
              const h = 90;
              return (
                <g key={`arch-2-${i}`}>
                  <path d={`M ${x} ${yBase + h} L ${x} ${yBase + 28} Q ${x + 17} ${yBase} ${x + 34} ${yBase + 28} L ${x + 34} ${yBase + h}`} strokeWidth="1.4" />
                  <path d={`M ${x + 5} ${yBase + h} L ${x + 5} ${yBase + 32} Q ${x + 17} ${yBase + 8} ${x + 29} ${yBase + 32} L ${x + 29} ${yBase + h}`} opacity="0.6" />
                  {/* Statue silhouette in arch */}
                  {i % 3 === 0 && (
                    <path d={`M ${x + 14} ${yBase + h} L ${x + 14} ${yBase + 45} Q ${x + 17} ${yBase + 38} ${x + 20} ${yBase + 45} L ${x + 20} ${yBase + h}`} fill="#334155" opacity="0.25" />
                  )}
                </g>
              );
            })}

            {/* First Tier Entablature (Ground Level Arches) */}
            <path d="M 5 465 L 320 515 L 820 580 L 1350 675" strokeWidth="2" />
            <path d="M 5 480 L 320 528 L 820 592 L 1350 685" />

            {/* First Tier Grand Arches */}
            {[15, 55, 95, 135, 175, 215, 255, 295, 340, 385, 430, 475, 520, 565, 610, 655, 700, 745, 790, 840, 890, 940, 990, 1040, 1090, 1140, 1190, 1240, 1290].map((x, i) => {
              const yBase = 480 + x * 0.15;
              const h = 110;
              return (
                <g key={`arch-1-${i}`}>
                  <path d={`M ${x} ${yBase + h} L ${x} ${yBase + 32} Q ${x + 18} ${yBase} ${x + 36} ${yBase + 32} L ${x + 36} ${yBase + h}`} strokeWidth="1.6" />
                  <path d={`M ${x + 6} ${yBase + h} L ${x + 6} ${yBase + 36} Q ${x + 18} ${yBase + 10} ${x + 30} ${yBase + 36} L ${x + 30} ${yBase + h}`} opacity="0.7" fill="#000000" fillOpacity="0.04" />
                </g>
              );
            })}

            {/* Base Podium & Steps */}
            <path d="M 0 610 L 310 655 L 810 715 L 1350 805" strokeWidth="2" />
            <path d="M 0 630 L 310 675 L 810 735 L 1350 825" strokeWidth="1.5" />
            <path d="M 0 650 L 310 695 L 810 755 L 1350 845" strokeWidth="1" />
          </g>

          {/* VERTICAL BLUE PRINT HIGHLIGHT BAND (Matching exact blueprint strip in screenshot) */}
          <g>
            {/* Blue Tint Background Strip */}
            <rect x="180" y="0" width="220" height="900" fill="url(#blueTintGrad)" />
            
            {/* Vertical Accent Guide Borders */}
            <line x1="180" y1="0" x2="180" y2="900" stroke="#4F46E5" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
            <line x1="400" y1="0" x2="400" y2="900" stroke="#4F46E5" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />

            {/* Re-render the Colosseum lines falling INSIDE the 180px-400px band with Electric Blue stroke */}
            <g stroke="url(#blueLineGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {/* Highlighted Top Lines */}
              <path d="M 180 115 L 350 150 L 400 160" />
              <path d="M 180 142 L 350 175 L 400 185" />
              <path d="M 180 168 L 350 200 L 400 210" />

              {/* Highlighted Attic Columns */}
              {[190, 220, 250, 280, 310, 340, 380].map((x, i) => (
                <line key={`blue-top-${i}`} x1={x} y1={80 + x * 0.22} x2={x} y2={140 + x * 0.2} strokeWidth="1.4" />
              ))}

              {/* Highlighted Tier 3 Lines & Arches */}
              <path d="M 180 240 L 340 265 L 400 274" strokeWidth="2" />
              {[185, 225, 265, 305, 350, 395].map((x, i) => {
                const yBase = 225 + x * 0.17;
                const h = 75;
                return (
                  <path key={`blue-arch3-${i}`} d={`M ${x} ${yBase + h} L ${x} ${yBase + 22} Q ${x + 15} ${yBase} ${x + 30} ${yBase + 22} L ${x + 30} ${yBase + h}`} />
                );
              })}

              {/* Highlighted Tier 2 Lines & Arches */}
              <path d="M 180 358 L 330 380 L 400 390" strokeWidth="2.2" />
              {[180, 220, 260, 300, 345, 390].map((x, i) => {
                const yBase = 345 + x * 0.16;
                const h = 90;
                return (
                  <g key={`blue-arch2-${i}`}>
                    <path d={`M ${x} ${yBase + h} L ${x} ${yBase + 28} Q ${x + 17} ${yBase} ${x + 34} ${yBase + 28} L ${x + 34} ${yBase + h}`} strokeWidth="2" />
                    <path d={`M ${x + 5} ${yBase + h} L ${x + 5} ${yBase + 32} Q ${x + 17} ${yBase + 8} ${x + 29} ${yBase + 32} L ${x + 29} ${yBase + h}`} opacity="0.8" />
                  </g>
                );
              })}

              {/* Highlighted Tier 1 Lines & Arches */}
              <path d="M 180 493 L 320 515 L 400 527" strokeWidth="2.5" />
              {[175, 215, 255, 295, 340, 385].map((x, i) => {
                const yBase = 480 + x * 0.15;
                const h = 110;
                return (
                  <path key={`blue-arch1-${i}`} d={`M ${x} ${yBase + h} L ${x} ${yBase + 32} Q ${x + 18} ${yBase} ${x + 36} ${yBase + 32} L ${x + 36} ${yBase + h}`} strokeWidth="2.2" />
                );
              })}

              {/* Highlighted Base Lines */}
              <path d="M 180 636 L 310 655 L 400 668" strokeWidth="2.5" />
              <path d="M 180 656 L 310 675 L 400 688" strokeWidth="2" />
              <path d="M 180 676 L 310 695 L 400 708" strokeWidth="1.5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
