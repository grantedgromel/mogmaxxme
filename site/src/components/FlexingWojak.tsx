"use client";

export default function FlexingWojak() {
  return (
    <div className="flex-wojak w-48 h-48 sm:w-56 sm:h-56">
      <svg viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Head */}
        <ellipse cx="150" cy="65" rx="42" ry="48" stroke="currentColor" strokeWidth="2.5" fill="none" />
        {/* Eyes */}
        <circle cx="138" cy="58" r="3" fill="currentColor" />
        <circle cx="162" cy="58" r="3" fill="currentColor" />
        {/* Brow lines */}
        <path d="M130 50 Q135 46 142 49" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M158 49 Q165 46 170 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Mouth - slight smirk */}
        <path d="M140 75 Q150 80 160 75" stroke="currentColor" strokeWidth="1.5" fill="none" />

        {/* Neck */}
        <path d="M138 110 L138 120 M162 110 L162 120" stroke="currentColor" strokeWidth="2.5" />

        {/* Torso */}
        <path d="M115 120 L110 230 L190 230 L185 120 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        {/* Center chest line */}
        <path d="M150 125 L150 200" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        {/* Pec lines */}
        <path d="M125 140 Q138 155 150 145" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M175 140 Q162 155 150 145" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Ab lines */}
        <path d="M135 165 L165 165" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M133 180 L167 180" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M132 195 L168 195" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M131 210 L169 210" stroke="currentColor" strokeWidth="1" opacity="0.4" />

        {/* Left arm (flexing up) */}
        <g className="flex-arm-left">
          {/* Shoulder to elbow */}
          <path d="M115 125 L80 155" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Upper arm bulk */}
          <ellipse cx="97" cy="140" rx="14" ry="8" transform="rotate(-35 97 140)" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Elbow to fist (forearm up) */}
          <path d="M80 155 L90 110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Forearm bulk */}
          <ellipse cx="85" cy="132" rx="10" ry="6" transform="rotate(-75 85 132)" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* Bicep bulge */}
          <ellipse cx="82" cy="138" rx="16" ry="9" transform="rotate(-20 82 138)" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Fist */}
          <circle cx="90" cy="107" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </g>

        {/* Right arm (flexing up) */}
        <g className="flex-arm-right">
          {/* Shoulder to elbow */}
          <path d="M185 125 L220 155" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Upper arm bulk */}
          <ellipse cx="203" cy="140" rx="14" ry="8" transform="rotate(35 203 140)" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Elbow to fist (forearm up) */}
          <path d="M220 155 L210 110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Forearm bulk */}
          <ellipse cx="215" cy="132" rx="10" ry="6" transform="rotate(75 215 132)" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* Bicep bulge */}
          <ellipse cx="218" cy="138" rx="16" ry="9" transform="rotate(20 218 138)" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Fist */}
          <circle cx="210" cy="107" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </g>

        {/* Shorts waistband */}
        <path d="M108 228 L192 228 L192 235 L108 235 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Left leg */}
        <path d="M125 235 L118 330" stroke="currentColor" strokeWidth="3" />
        <path d="M145 235 L138 330" stroke="currentColor" strokeWidth="3" />
        {/* Right leg */}
        <path d="M155 235 L162 330" stroke="currentColor" strokeWidth="3" />
        <path d="M175 235 L182 330" stroke="currentColor" strokeWidth="3" />
      </svg>
    </div>
  );
}
