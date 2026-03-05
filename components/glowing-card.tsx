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
        "relative overflow-hidden border-b border-white/10",
        side === "left" ? "mr-4" : "ml-4",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative p-6 z-10">
        {children}
      </div>
    </motion.div>
  );
}
