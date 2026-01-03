"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrganicBubbleCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  index: number;
  isStatic?: boolean;
  size?: "sm" | "md" | "lg";
  disableAnimation?: boolean;
}

// Preset bubble shapes for variety - refined to be "safe" for contents
const bubbleShapes = [
  // Original shapes
  "55% 45% 55% 45% / 45% 55% 45% 55%",
  "45% 55% 45% 55% / 55% 45% 55% 45%",
  "50% 50% 40% 60% / 60% 40% 50% 50%",
  "60% 40% 50% 50% / 50% 50% 60% 40%",
  "40% 60% 40% 60% / 60% 40% 60% 40%",
  "55% 45% 50% 50% / 50% 50% 45% 55%",
  // NEW: Additional organic shapes for more variety
  "52% 48% 58% 42% / 48% 52% 42% 58%",
  "48% 52% 45% 55% / 55% 45% 52% 48%",
  "58% 42% 52% 48% / 42% 58% 48% 52%",
  "50% 50% 48% 52% / 52% 48% 50% 50%",
  "46% 54% 50% 50% / 50% 50% 54% 46%",
  "54% 46% 46% 54% / 54% 46% 46% 54%"
];

export default function OrganicBubbleCard({
  children,
  className,
  glowColor = "rgba(184, 115, 51, 0.4)",
  index,
  isStatic = false,
  size = "md",
  disableAnimation = false
}: OrganicBubbleCardProps) {
  const shapeIndex = index % bubbleShapes.length;
  const initialShape = bubbleShapes[shapeIndex];
  const nextShape = bubbleShapes[(shapeIndex + 1) % bubbleShapes.length];

  // Size-based padding
  const paddingClasses = {
    sm: "p-8 md:p-12",
    md: "p-12 md:p-16",
    lg: "p-16 md:p-24"
  };

  return (
    <motion.div
      className={cn(
        "relative p-1 group",
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Background Glow */}
      <div 
        className="absolute -inset-8 blur-3xl opacity-10 group-hover:opacity-20 transition duration-1000 -z-10"
        style={{ 
          background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`,
        }}
      />
      
      {/* Organic Container */}
      <motion.div
        className={`relative bg-white/95 dark:bg-charcoal/90 backdrop-blur-md border border-brown/10 dark:border-brown/20 ${paddingClasses[size]} z-10 overflow-hidden shadow-2xl`}
        animate={(isStatic || disableAnimation) ? { borderRadius: initialShape } : {
          borderRadius: [initialShape, nextShape, initialShape]
        }}
        transition={(isStatic || disableAnimation) ? { duration: 0 } : {
          duration: 12 + (index * 2), // Subtle: longer duration (12+ seconds)
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.01 }} // Subtle hover effect
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
