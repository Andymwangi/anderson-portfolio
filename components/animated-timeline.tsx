"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, TrendingUp } from "lucide-react"
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
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-orange-light to-orange/50"></div>

      {/* Timeline Items */}
      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative mb-12"
        >
          {/* Timeline Dot */}
          <div
            className={`absolute left-6 w-6 h-6 rounded-full border-4 border-background z-10 ${item.color}`}
          />

          {/* Content */}
          <div className="ml-20">
            <Card
              className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700/50 hover:border-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange/10"
            >
              <CardHeader className="p-6 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant={item.type === "Freelance" ? "default" : "secondary"}
                        className={`${item.type === "Freelance"
                            ? "bg-orange/20 text-orange border-orange/30"
                            : item.type === "Full-time"
                              ? "bg-orange/20 text-orange border-orange/30"
                              : "bg-slate-500/20 text-slate-600 dark:text-slate-400 border-slate-500/30"
                          } font-poppins`}
                      >
                        {item.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 text-slate-900 dark:text-white font-bricolage">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-2">
                      <span className="font-medium text-orange font-poppins">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 font-inter">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-orange" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-orange" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-slate-900 dark:text-white font-bricolage">
                    <TrendingUp className="h-4 w-4 text-orange" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements?.map((achievement, i) => (
                      <li
                        key={`${achievement}-${i}`}
                        className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-inter"
                      >
                        <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    )) || []}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-slate-900 dark:text-white font-bricolage">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies?.map((tech, i) => (
                      <Badge
                        key={`${tech}-${i}`}
                        variant="outline"
                        className="bg-orange/10 border-orange/30 text-orange hover:bg-orange/20 font-inter"
                      >
                        {tech}
                      </Badge>
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
