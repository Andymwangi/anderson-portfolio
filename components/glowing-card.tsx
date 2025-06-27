"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  side?: "left" | "right" | string;
}

export default function GlowingCard({ 
  children, 
  className, 
  glowColor = "rgba(184, 115, 51, 0.5)", // Default warm-copper glow
  side = "left" 
}: GlowingCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden",
        side === "left" ? "mr-4" : "ml-4",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-0.5 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000"
        style={{ 
          background: `radial-gradient(circle at ${side === "left" ? "right" : "left"} center, ${glowColor}, transparent 70%)`,
          zIndex: -1 
        }}
      />
      
      {/* Main content */}
      <div className="relative bg-white/90 dark:bg-charcoal/80 backdrop-blur-sm border border-warm-copper/20 dark:border-warm-copper/30 rounded-xl p-6 z-10">
        {children}
      </div>
    </motion.div>
  );
}
