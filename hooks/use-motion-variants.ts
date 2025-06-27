import { useCallback } from "react"
import { Variants } from "framer-motion"
import { ANIMATION } from "@/lib/constants"

// Default animation variants
const defaultVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: ANIMATION.normal } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: ANIMATION.normal } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: ANIMATION.normal } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: ANIMATION.normal } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: ANIMATION.normal } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: ANIMATION.normal } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATION.staggerChildren,
      },
    },
  },
  slideInBottom: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: ANIMATION.normal } },
  },
  slideInTop: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: ANIMATION.normal } },
  },
  zoomIn: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: ANIMATION.normal } },
  },
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: ANIMATION.normal } },
  },
}

export type VariantName = keyof typeof defaultVariants

interface UseMotionVariantsOptions {
  customVariants?: Record<string, Variants>
  defaultDelay?: number
}

export function useMotionVariants(options: UseMotionVariantsOptions = {}) {
  const { customVariants = {}, defaultDelay = 0 } = options
  
  // Combine default and custom variants
  const allVariants = { ...defaultVariants, ...customVariants }
  
  // Get a variant with optional delay
  const getVariant = useCallback(
    (name: VariantName | string, delay?: number): Variants => {
      const variant = allVariants[name]
      
      if (!variant) {
        console.warn(`Variant "${name}" not found`)
        return defaultVariants.fadeIn
      }
      
      // If no delay is specified, use the default delay
      const actualDelay = delay ?? defaultDelay
      
      // If no delay is needed, return the variant as is
      if (actualDelay === 0) {
        return variant
      }
      
      // Clone the variant and add delay to the visible state transition
      const variantWithDelay = JSON.parse(JSON.stringify(variant))
      
      if (variantWithDelay.visible && variantWithDelay.visible.transition) {
        variantWithDelay.visible.transition.delay = actualDelay
      } else if (variantWithDelay.visible) {
        variantWithDelay.visible.transition = { delay: actualDelay }
      }
      
      return variantWithDelay
    },
    [allVariants, defaultDelay]
  )
  
  // Create a staggered container variant
  const createStaggerContainer = useCallback(
    (staggerDelay: number = ANIMATION.staggerChildren): Variants => {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }
    },
    []
  )
  
  return {
    getVariant,
    createStaggerContainer,
    variants: allVariants,
  }
}
