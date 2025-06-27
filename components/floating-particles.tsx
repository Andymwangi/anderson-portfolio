"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  delay: number
  color: string
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const colors = ["hsl(142, 76%, 36%)", "hsl(25, 95%, 53%)", "hsl(330, 81%, 60%)"]
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [typeof window !== "undefined" ? window.innerHeight : 1000, -100],
            x: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 20,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
