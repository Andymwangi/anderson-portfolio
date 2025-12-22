"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { AnimatedTimeline } from "@/components/animated-timeline"

const experiences = [
  {
    title: "Software Engineer",
    company: "Coseke Kenya Limited",
    location: "Nairobi, Kenya",
    period: "May 2024 – Nov 2024",
    type: "Full-time",
    problem: "Kenya's Salaries and Remuneration Commission needed a comprehensive system to digitally manage thousands of legal cases and contracts, replacing inefficient paper-based processes that caused delays and compliance issues.",
    achievements: [
      "Architected SRC Legal Management System serving 200+ legal officers managing 5,000+ civil and employment cases, reducing case processing time by 70%",
      "Integrated Contract Lifecycle Management module processing 300+ annual supplier contracts with 60% reduction in review time and ensuring 100% compliance with Kenyan procurement regulations",
      "Developed TotalEnergies Contract Lifecycle Management System (CLMS) managing petroleum contracts valued at KES 500M+ with 45% workload reduction through automated expiration alerts",
      "Led backend optimization initiatives improving API response times by 50% and reducing server load by 35% through Redis caching and PostgreSQL indexing",
      "Contributed to ICT Authority's EDRMS implementation, improving government document retrieval efficiency by 55%",
      "Established security protocols including JWT authentication and role-based access controls, preventing 500+ potential security threats while maintaining GDPR compliance",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "Material UI", "Docker"],
    color: "bg-orange-500",
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Nairobi, Kenya (Remote)",
    period: "Jan 2023 – Present",
    type: "Freelance",
    problem: "Startups and SMEs needed affordable, high-quality web applications to compete in the digital marketplace. Universities required modern platforms for student mental health services and secure voting systems.",
    achievements: [
      "Delivered 15+ custom web and mobile applications generating average revenue increases of KES 300,000+ per client across e-commerce, education, and healthcare sectors",
      "Built USIU E-Counselling Platform serving 3,000+ students with real-time appointment booking, reducing scheduling conflicts by 80% and enabling 500+ monthly counseling sessions",
      "Developed blockchain-based E-Voting System enabling 1,500+ students to vote securely with biometric authentication, increasing election participation by 40% and achieving 100% audit trail accuracy",
      "Engineered e-commerce platforms processing KES 5M+ in transactions, reducing cart abandonment by 25% and improving conversion rates by 30% through optimized checkout flows",
      "Improved average website load speeds by 40% and user experience scores by 35% across all projects through Next.js SSR and performance optimization",
      "Achieved 85% client satisfaction rate and 60% client retention through quality delivery and comprehensive technical support",
    ],
    technologies: ["React", "Next.js", "React Native", "Node.js", "MongoDB", "PostgreSQL", "Blockchain", "Stripe", "M-Pesa"],
    color: "bg-sage-500",
  },
  {
    title: "IT Intern – Digital Systems & Database Management",
    company: "Office of the Registrar of Political Parties (ORPP)",
    location: "Nairobi, Kenya",
    period: "Jan 2024 – Sep 2024",
    type: "Internship",
    problem: "Kenya's political party registration system relied on outdated paper-based records, making document retrieval slow (taking days) and error-prone, hindering government transparency and efficiency.",
    achievements: [
      "Spearheaded digitization initiative for 10,000+ political party records, reducing document search time by 60% from hours to minutes through optimized database indexing",
      "Developed automated Python scripts for data validation and migration, processing 50,000+ records and reducing manual data entry workload by 30% while improving accuracy by 25%",
      "Enhanced Digital File Management System (DFMS) improving document accessibility by 45% and reducing processing times by 35% for 500+ government users",
      "Implemented advanced search functionality with filters, pagination, and autocomplete reducing document retrieval from days to seconds",
      "Collaborated with cross-functional teams to establish data quality standards eliminating 95% of data entry errors",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "OCR", "Pandas", "Elasticsearch"],
    color: "bg-pink-500",
  },
  {
    title: "IT Intern – Legal Information Systems",
    company: "Kenya Law",
    location: "Nairobi, Kenya",
    period: "Sep 2023 – Jan 2024",
    type: "Internship",
    problem: "Legal professionals struggled with slow database searches (2.5+ minutes per query) and disorganized document archives containing 8,000+ legal documents, severely impacting case research efficiency.",
    achievements: [
      "Optimized case law databases serving 500+ legal professionals, implementing advanced search functionality and indexing strategies that reduced average search time by 40% (from 2.5 to 1.5 minutes)",
      "Developed automated document archiving solutions processing 8,000+ legal documents with drag-and-drop functionality, reducing manual filing time by 50% and ensuring compliance with data retention policies",
      "Conducted comprehensive system testing identifying and resolving 75+ critical bugs, improving software stability by 40% and achieving 95%+ test coverage",
      "Implemented relevance ranking algorithms improving search result accuracy by 30%, enabling legal professionals to find critical case law faster",
      "Created intuitive document management dashboard with real-time progress tracking, enhancing user experience scores by 45%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "Jest", "Document Management APIs"],
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
            <h1 className="text-6xl font-bold mb-6 rainbow-gradient bg-clip-text text-transparent font-bricolage">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-bricolage">
              Building enterprise solutions that solve real problems and deliver measurable impact
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
                { number: "10,000+", label: "Users Served", color: "text-orange-500 dark:text-orange-400", glow: "glow-orange" },
                { number: "20+", label: "Projects Delivered", color: "text-deep-forest dark:text-sage-400", glow: "glow-pink" },
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