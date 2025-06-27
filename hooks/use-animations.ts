import { animationControls, TargetAndTransition, Transition, Variants } from "framer-motion"

// Common animation variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export const fadeInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

// Staggered children animations
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Hover animations
export const pulseAnimation: TargetAndTransition = {
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
}

export const rotateAnimation: TargetAndTransition = {
  rotate: 360,
  transition: { duration: 20, repeat: Infinity, ease: "linear" },
}

export const floatAnimation: TargetAndTransition = {
  y: [0, -10, 0],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
}

// Common transition configurations
export const springTransition: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 300,
}

export const easeTransition: Transition = {
  duration: 0.6,
  ease: "easeInOut",
}

// Utility to create staggered delay transitions
export const createStaggeredDelay = (baseDelay: number, increment: number, index: number): number => {
  return baseDelay + increment * index
}

// Typewriter animation for text
export const typewriterAnimation = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: { delay: 0.5, duration: 2 },
}
