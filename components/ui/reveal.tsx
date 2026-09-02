"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the element animates in */
  delay?: number;
  /** Render as a different HTML element; defaults to div */
  as?: "div" | "article" | "li" | "section" | "header" | "footer" | "p";
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The single motion primitive used across the site: a soft fade-up that plays
 * once when the element scrolls into view, and is skipped entirely when the
 * visitor prefers reduced motion.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}
