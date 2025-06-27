"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { AnimatedTimeline } from "@/components/animated-timeline"

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Nairobi, Kenya",
    period: "Jan 2025 – Present",
    type: "Freelance",
    achievements: [
      "Develop and maintain secure, always-on web applications for 15+ clients",
      "Generated average revenue increases of KES 300,000+ for clients",
      "Debug and troubleshoot production environment issues with 99.9% uptime",
      "Build responsive user interfaces using React.js, Vue.js, and modern CSS frameworks",
      "Implement secure authentication systems and role-based access controls",
      "Design optimized database schemas improving query performance by 40%",
    ],
    technologies: ["React.js", "Vue.js", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    color: "bg-sage-500",
  },
  {
    title: "Junior Full Stack Developer",
    company: "Bakari Ventures",
    location: "Nairobi, Kenya",
    period: "Oct 2024 – Jan 2025",
    type: "Full-time",
    achievements: [
      "Led development and testing of 3 enterprise-level applications",
      "Reduced manual workload by 70% through automation",
      "Optimized backend APIs achieving 50% improvement in response times",
      "Implemented Redis caching solutions accelerating load speeds by 40%",
      "Enhanced system security through robust authentication measures",
      "Contributed to software engineering process improvements",
    ],
    technologies: ["Node.js", "Express.js", "React.js", "Redis", "PostgreSQL", "Docker"],
    color: "bg-orange-500",
  },
  {
    title: "IT Intern – Digital Systems & Database Management",
    company: "Office of the Registrar of Political Parties (ORPP)",
    location: "Nairobi, Kenya",
    period: "Jan 2024 – Sep 2024",
    type: "Internship",
    achievements: [
      "Contributed to RegisVault development processing 100,000+ documents",
      "Developed automated data validation scripts reducing manual processing by 30%",
      "Participated in system testing and quality assurance processes",
      "Collaborated on performance enhancements reducing retrieval time from days to seconds",
      "Implemented secure document management with OCR capabilities",
    ],
    technologies: ["React.js", "TypeScript", "Python", "PostgreSQL", "OCR", "Security Protocols"],
    color: "bg-pink-500",
  },
  {
    title: "IT Intern – Legal Information Systems",
    company: "Kenya Law",
    location: "Nairobi, Kenya",
    period: "Sep 2023 – Jan 2024",
    type: "Internship",
    achievements: [
      "Optimized database systems reducing query time by 40%",
      "Developed document management solutions enhancing system organization",
      "Conducted comprehensive system testing and debugging",
      "Implemented fixes for improved system stability",
      "Enhanced search functionality for legal document retrieval",
    ],
    technologies: ["SQL", "Database Optimization", "System Testing", "Document Management"],
    color: "bg-sage-500",
  },
]

export default function Experience() {
  return (
    <PageTransition>
      <div className="min-h-screen cyber-vibrant-gradient p-6 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 rainbow-gradient bg-clip-text text-transparent">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey through various organizations and roles in the tech industry
            </p>
          </motion.div>

          {/* Animated Timeline */}
          <AnimatedTimeline items={experiences} />

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "3+", label: "Years Experience", color: "text-sage-500 dark:text-sage-400", glow: "glow-sage" },
                { number: "4", label: "Organizations", color: "text-orange-500 dark:text-orange-400", glow: "glow-orange" },
                { number: "15+", label: "Projects Delivered", color: "text-deep-forest dark:text-sage-400", glow: "glow-pink" },
                { number: "70%", label: "Efficiency Improvement", color: "text-sage-500 dark:text-sage-400", glow: "glow-sage" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className={`p-8 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-2xl border border-border/50 ${stat.glow} glow-hover card-hover`}
                >
                  <motion.div
                    className={`text-4xl font-bold mb-2 ${stat.color}`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
