import React from "react";

// Top Left: Lime Green 3D Squiggly Coil
export const LimeSpring = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#eefd53" />
        <stop offset="40%" stopColor="#d2fc00" />
        <stop offset="80%" stopColor="#8ebd00" />
        <stop offset="100%" stopColor="#678c00" />
      </linearGradient>
      <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#001875" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#shadow3d)">
      <path
        d="M 40 40 C 90 10, 160 30, 150 70 C 140 110, 40 90, 50 130 C 60 170, 160 150, 150 190 C 140 230, 70 220, 60 230"
        stroke="url(#limeGrad)"
        strokeWidth="38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 40 40 C 90 10, 160 30, 150 70 C 140 110, 40 90, 50 130 C 60 170, 160 150, 150 190 C 140 230, 70 220, 60 230"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
    </g>
  </svg>
);

// Bottom Left: White 3D Squiggly Spring Loop
export const WhiteSpring = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="whiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="70%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <filter id="whiteShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="8" floodColor="#001a80" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#whiteShadow)">
      <path
        d="M 30 130 C 10 90, 60 40, 100 50 C 140 60, 130 110, 90 120 C 50 130, 40 70, 80 30"
        stroke="url(#whiteGrad)"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        d="M 30 130 C 10 90, 60 40, 100 50 C 140 60, 130 110, 90 120 C 50 130, 40 70, 80 30"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </g>
  </svg>
);

// Top Right: Lime Green 3D Pill Cylinder
export const LimeCylinder = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="cylGrad" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#f4ff78" />
        <stop offset="30%" stopColor="#d2fc00" />
        <stop offset="85%" stopColor="#7da800" />
      </linearGradient>
      <filter id="cylShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="6" dy="14" stdDeviation="12" floodColor="#001875" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#cylShadow)" transform="rotate(25 90 130)">
      <rect x="35" y="30" width="110" height="200" rx="55" fill="url(#cylGrad)" />
      <rect x="45" y="40" width="25" height="180" rx="12.5" fill="#ffffff" opacity="0.35" />
    </g>
  </svg>
);

// Middle Right: White 3D Pyramid Prism
export const WhitePyramid = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="pyrLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
      <linearGradient id="pyrRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="pyrBase" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
      <filter id="pyrShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#001875" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#pyrShadow)" transform="rotate(-12 80 90)">
      <polygon points="80,15 15,135 85,155" fill="url(#pyrLeft)" />
      <polygon points="80,15 85,155 145,120" fill="url(#pyrRight)" />
      <polygon points="15,135 85,155 145,120 70,110" fill="url(#pyrBase)" opacity="0.15" />
    </g>
  </svg>
);

// Lime Green 3D Pyramid Prism
export const LimePyramid = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="limePyrLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f4ff78" />
        <stop offset="100%" stopColor="#d2fc00" />
      </linearGradient>
      <linearGradient id="limePyrRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b5dc00" />
        <stop offset="100%" stopColor="#87aa00" />
      </linearGradient>
      <filter id="limePyrShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#001875" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#limePyrShadow)" transform="rotate(15 80 90)">
      <polygon points="80,15 15,135 85,155" fill="url(#limePyrLeft)" />
      <polygon points="80,15 85,155 145,120" fill="url(#limePyrRight)" />
    </g>
  </svg>
);

// White 3D Pill Cylinder
export const WhiteCylinder = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wCylGrad" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="60%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <filter id="wCylShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="6" dy="14" stdDeviation="12" floodColor="#001875" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#wCylShadow)" transform="rotate(-20 90 130)">
      <rect x="35" y="30" width="110" height="200" rx="55" fill="url(#wCylGrad)" />
      <rect x="45" y="40" width="25" height="180" rx="12.5" fill="#ffffff" opacity="0.6" />
    </g>
  </svg>
);

// Lime Green 3D Torus Ring
export const LimeTorus = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f4ff78" />
        <stop offset="50%" stopColor="#d2fc00" />
        <stop offset="100%" stopColor="#7da800" />
      </linearGradient>
      <filter id="torusShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="12" stdDeviation="10" floodColor="#001875" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#torusShadow)" transform="rotate(-30 100 100)">
      <path
        d="M 100 20 A 80 80 0 1 0 100 180 A 80 80 0 1 0 100 20 Z M 100 60 A 40 40 0 1 1 100 140 A 40 40 0 1 1 100 60 Z"
        fill="url(#torusGrad)"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

// Bottom Right: White 3D Squiggly Ribbon
export const WhiteRibbon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <filter id="ribShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="6" stdDeviation="6" floodColor="#001875" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#ribShadow)">
      <path
        d="M 20 100 C 40 40, 100 30, 110 80 C 120 110, 80 120, 60 80 C 50 50, 90 20, 120 40"
        stroke="url(#ribbonGrad)"
        strokeWidth="24"
        strokeLinecap="round"
      />
    </g>
  </svg>
);
