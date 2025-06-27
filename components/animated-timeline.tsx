"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Rocket, Calendar, MapPin, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  title: string
  company: string
  location: string
  period: string
  type: string
  achievements: string[]
  technologies: string[]
  color: string
}

interface AnimatedTimelineProps {
  items: TimelineItem[]
}

export function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !items?.length) return;

    let isCancelled = false;

    const animateTimeline = async () => {
      setIsAnimating(true);

      for (let i = 0; i < items.length; i++) {
        if (isCancelled) return;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (isCancelled) return;
        setCurrentIndex(i);

        // Rocket animation
        await controls.start({
          y: [100, -20, -200],
          x: [0, 10, -10, 0],
          rotate: [0, -10, 10, 0],
          opacity: [0, 1, 1, 0],
          transition: { duration: 2, ease: "easeInOut" },
        });

        if (isCancelled) return;

        await controls.start({
          y: 100,
          opacity: 0,
          transition: { duration: 0.1 },
        });
      }

      if (!isCancelled) {
        setIsAnimating(false);
      }
    };

    const timer = setTimeout(animateTimeline, 1000);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [controls, items, mounted]);

  if (!mounted || !items?.length) {
    return <div>Loading timeline...</div>
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sage-500 via-orange-500 to-pink-500 opacity-30"></div>

      {/* Animated Rocket */}
      <motion.div animate={controls} className="absolute left-6 z-20" style={{ y: 100 }}>
        <div className="relative">
          <Rocket className="h-6 w-6 text-orange-500" />
          <motion.div
            className="absolute -bottom-2 left-1/2 w-1 bg-gradient-to-t from-orange-500 to-transparent"
            animate={{ height: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            style={{ transform: "translateX(-50%)" }}
          />
        </div>
      </motion.div>

      {/* Timeline Items */}
      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${index}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: currentIndex >= index ? 1 : 0.3,
            x: currentIndex >= index ? 0 : -50,
            scale: currentIndex === index ? 1.02 : 1,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12"
        >
          {/* Timeline Dot */}
          <motion.div
            className={`absolute left-6 w-6 h-6 rounded-full border-4 border-background z-10 ${
              currentIndex >= index ? item.color : "bg-gray-500"
            }`}
            animate={{
              scale: currentIndex === index ? [1, 1.3, 1] : 1,
              boxShadow:
                currentIndex === index
                  ? [
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      "0 0 0 10px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0)",
                    ]
                  : "none",
            }}
            transition={{ duration: 2, repeat: currentIndex === index ? Number.POSITIVE_INFINITY : 0 }}
          />

          {/* Content */}
          <div className="ml-20">
            <Card
              className={`bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${
                item.color === "bg-sage-500" ? "glow-sage" :
                item.color === "bg-orange-500" ? "glow-orange" :
                "glow-pink"
              } glow-hover animated-border`}
            >
              <CardHeader className="p-6 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant={item.type === "Freelance" ? "default" : "secondary"} 
                        className={`${
                          item.type === "Freelance" 
                            ? "bg-sage-500/20 dark:bg-sage-400/20 text-sage-600 dark:text-sage-400 border-sage-500/30 dark:border-sage-400/30" 
                            : item.type === "Full-time"
                            ? "bg-orange-500/20 dark:bg-orange-400/20 text-orange-600 dark:text-orange-400 border-orange-500/30 dark:border-orange-400/30"
                            : "bg-deep-forest/20 dark:bg-sage-400/20 text-deep-forest dark:text-sage-400 border-deep-forest/30 dark:border-sage-400/30"
                        }`}
                      >
                        {item.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 text-gray-700 dark:text-gray-200">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium text-orange-500 dark:text-orange-400">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-deep-forest dark:text-sage-400" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-sage-500 dark:text-sage-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <TrendingUp className="h-4 w-4 text-green-500 dark:text-green-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements?.map((achievement, i) => (
                      <motion.li
                        key={`${achievement}-${i}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: currentIndex >= index ? 1 : 0.5,
                          x: currentIndex >= index ? 0 : -20,
                        }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-sage-500 dark:bg-sage-400 rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    )) || []}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies?.map((tech, i) => (
                      <motion.div
                        key={`${tech}-${i}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: currentIndex >= index ? 1 : 0.5,
                          scale: currentIndex >= index ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="outline"
                          className={`${
                            item.color === "bg-sage-500" ? "bg-sage-500/10 dark:bg-sage-400/10 border-sage-500/30 dark:border-sage-400/30 text-sage-600 dark:text-sage-400" :
                            item.color === "bg-orange-500" ? "bg-orange-500/10 dark:bg-orange-400/10 border-orange-500/30 dark:border-orange-400/30 text-orange-600 dark:text-orange-400" :
                            "bg-deep-forest/10 dark:bg-sage-400/10 border-deep-forest/30 dark:border-sage-400/30 text-deep-forest dark:text-sage-400"
                          } hover:bg-opacity-20 dark:hover:bg-opacity-20`}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    )) || []}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
