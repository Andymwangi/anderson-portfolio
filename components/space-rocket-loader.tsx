"use client";

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"

export function SpaceRocketLoader() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{
            y: [-20, -60, -20],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="mb-4"
        >
          <Rocket className="h-16 w-16 text-primary mx-auto" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <p className="text-lg font-medium">Launching into orbit...</p>
        </motion.div>
      </div>
    </div>
  )
}
