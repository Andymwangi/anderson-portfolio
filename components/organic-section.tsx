"use client";

import { ReactNode } from "react";

interface OrganicSectionProps {
  children: ReactNode;
  variant?: "wave-top" | "wave-bottom" | "blob-full" | "asymmetric" | "gentle-wave";
  backgroundColor?: string;
  contentBackground?: string;
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
  overlapTop?: boolean; // New prop to enable top overlap
}

export default function OrganicSection({
  children,
  variant = "blob-full",
  backgroundColor = "#F5E6D3",
  contentBackground,
  className = "",
  paddingTop = "12rem",
  paddingBottom = "12rem",
  overlapTop = true,
}: OrganicSectionProps) {
  // Organic blob paths that START FROM ABOVE (negative Y) for seamless overlap
  // These paths are designed to layer on top of previous sections
  const blobPaths = {
    // Large flowing blob - starts from edges and fills completely
    "blob-full": "M0,0 L0,0 C240,-80 480,150 720,60 C1000,-60 1440,200 L1440,0 L1440,1000 L0,1000 Z",

    // Wave at top - smooth flowing entry with full edge coverage
    "wave-top": "M0,0 L0,20 C200,100 400,0 720,80 C1000,160 1200,10 1440,120 L1440,0 L1440,1000 L0,1000 Z",

    // Asymmetric organic - dramatic flowing shape with edge coverage
    "asymmetric": "M0,0 L0,40 C160,-30 480,200 720,70 C960,-10 1200,180 1440,100 L1440,0 L1440,1000 L0,1000 Z",

    // Gentle rolling - subtle organic flow with edge coverage
    "gentle-wave": "M0,0 L0,60 C240,0 480,120 720,50 C960,0 1200,100 1440,80 L1440,0 L1440,1000 L0,1000 Z",

    // Wave at bottom
    "wave-bottom": "M0,0 L0,180 C200,80 400,220 720,120 C1000,40 1200,180 1440,140 L1440,0 L1440,1000 L0,1000 Z",
  };

  const selectedPath = blobPaths[variant];

  return (
    <div className={`relative ${className}`}>
      {/* Organic SVG Blob - positioned to extend upward for overlap */}
      <div
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{
          top: overlapTop ? '-150px' : '0',
          bottom: '0',
          zIndex: 0,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 1000"
          preserveAspectRatio="none"
          style={{
            minHeight: overlapTop ? 'calc(100% + 150px)' : '100%',
            width: '100%',
            display: 'block',
          }}
        >
          <path d={selectedPath} fill={backgroundColor} />
        </svg>
      </div>

      {/* Content positioned within blob */}
      <div
        className="relative z-10"
        style={{
          paddingTop,
          paddingBottom,
          backgroundColor: contentBackground || 'transparent',
        }}
      >
        {children}
      </div>
    </div>
  );
}
