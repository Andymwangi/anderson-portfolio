"use client";

import { motion } from "framer-motion";

interface WaveSeparatorProps {
  variant?: "wave1" | "wave2" | "wave3" | "organic1" | "organic2" | "organic3" | "organic4" | "organic5" | "dramatic";
  backgroundColor?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveSeparator({
  variant = "wave1",
  backgroundColor = "#ffffff",
  flip = false,
  className = "",
}: WaveSeparatorProps) {
  // Different wave path designs - enhanced with more organic and natural curves
  const wavePaths = {
    // Original waves (kept for compatibility)
    wave1: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",

    wave2: "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",

    wave3: "M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,197.3C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",

    // NEW: Enhanced organic waves with more control points for smoothness
    // Flowing organic wave with varied peaks
    organic1: "M0,60 C120,100 240,20 360,80 C480,140 600,40 720,90 C840,140 960,50 1080,100 C1200,150 1320,60 1440,110 L1440,320 L0,320 Z",

    // Gentle rolling hills effect
    organic2: "M0,80 C100,30 200,120 300,70 C450,20 550,110 700,65 C850,120 950,40 1100,95 C1250,140 1350,50 1440,100 L1440,320 L0,320 Z",

    // Dynamic multi-peak organic
    organic3: "M0,100 C90,150 180,50 270,110 C360,170 450,60 540,100 C630,140 720,70 810,110 C900,150 990,80 1080,120 C1170,160 1260,90 1350,130 C1410,150 1440,120 1440,120 L1440,320 L0,320 Z",

    // Smooth asymmetric wave
    organic4: "M0,120 C160,40 320,150 480,90 C640,30 800,140 960,80 C1120,20 1280,120 1440,70 L1440,320 L0,320 Z",

    // Natural flowing curve
    organic5: "M0,90 C180,130 300,50 480,100 C660,150 780,70 960,110 C1140,150 1260,80 1440,120 L1440,320 L0,320 Z",

    // Dramatic wave with steep but smooth curves (matches gentle-wave from OrganicSection)
    dramatic: "M0,60 C240,0 480,120 720,50 C960,0 1200,100 1440,80 L1440,320 L0,320 Z",
  };

  return (
    <div 
      className={`absolute left-0 w-full pointer-events-none z-10 ${flip ? 'top-0 rotate-180' : 'bottom-0'} ${className}`}
      style={{ height: '150px', marginBottom: '-1px', marginTop: '-1px' }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <motion.path
          d={wavePaths[variant]}
          fill={backgroundColor}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
