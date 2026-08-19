import React from 'react';

/**
 * Clean, high-fidelity SVG QR code component for location navigation
 */
export default function QRCodeDisplay({ label, url, id }) {
  // Deterministic SVG QR-like matrix pattern for authentic invitation look
  return (
    <div className="flex flex-col items-center group cursor-pointer" onClick={() => window.open(url, '_blank')}>
      <div className="w-20 h-20 sm:w-24 sm:h-24 p-1.5 bg-white border border-[#E8DDCA] rounded-lg shadow-sm group-hover:border-[#C9A35A] group-hover:shadow-md transition-all duration-300">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full text-[#3D3328]" 
          fill="currentColor"
        >
          {/* Top Left Finder */}
          <rect x="5" y="5" width="28" height="28" fill="currentColor" rx="2" />
          <rect x="9" y="9" width="20" height="20" fill="white" rx="1" />
          <rect x="13" y="13" width="12" height="12" fill="currentColor" rx="1" />

          {/* Top Right Finder */}
          <rect x="67" y="5" width="28" height="28" fill="currentColor" rx="2" />
          <rect x="71" y="9" width="20" height="20" fill="white" rx="1" />
          <rect x="75" y="13" width="12" height="12" fill="currentColor" rx="1" />

          {/* Bottom Left Finder */}
          <rect x="5" y="67" width="28" height="28" fill="currentColor" rx="2" />
          <rect x="9" y="71" width="20" height="20" fill="white" rx="1" />
          <rect x="13" y="75" width="12" height="12" fill="currentColor" rx="1" />

          {/* Timing Patterns & Data Modules */}
          <rect x="38" y="8" width="5" height="5" />
          <rect x="48" y="8" width="5" height="5" />
          <rect x="58" y="8" width="5" height="5" />
          
          <rect x="8" y="38" width="5" height="5" />
          <rect x="8" y="48" width="5" height="5" />
          <rect x="8" y="58" width="5" height="5" />

          {/* Center & Scattered QR Matrix Dots */}
          <rect x="38" y="38" width="8" height="8" rx="1" />
          <rect x="54" y="38" width="6" height="6" />
          <rect x="42" y="50" width="6" height="6" />
          <rect x="52" y="52" width="8" height="8" rx="1" />
          <rect x="65" y="40" width="6" height="6" />
          <rect x="75" y="48" width="6" height="6" />
          <rect x="85" y="38" width="6" height="6" />
          <rect x="38" y="68" width="6" height="6" />
          <rect x="48" y="75" width="6" height="6" />
          <rect x="58" y="68" width="6" height="6" />
          <rect x="40" y="85" width="6" height="6" />
          <rect x="54" y="85" width="6" height="6" />
          <rect x="68" y="68" width="6" height="6" />
          <rect x="78" y="78" width="8" height="8" rx="1" />
          <rect x="86" y="86" width="6" height="6" />
          <rect x="68" y="86" width="6" height="6" />
          <rect x="86" y="65" width="6" height="6" />
          <rect x="20" y="42" width="6" height="6" />
          <rect x="25" y="52" width="6" height="6" />
        </svg>
      </div>

      <span className="font-caps text-[9px] sm:text-[10px] text-[#7A6C5B] tracking-[0.18em] mt-2 group-hover:text-[#A77D35] transition-colors">
        {label}
      </span>
    </div>
  );
}
