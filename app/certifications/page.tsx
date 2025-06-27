"use client"

import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink, CheckCircle, GraduationCap, MapPin, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    location: "Nairobi, Kenya",
    period: "2021 - 2025",
    status: "In Progress",
    description:
      "Comprehensive program covering software development, cybersecurity, database management, and cloud computing technologies.",
    highlights: [
      "Specialized in Cybersecurity and Cloud Computing",
      "Completed advanced coursework in Network Security",
      "Participated in multiple tech innovation projects",
      "Maintained high academic performance throughout",
    ],
    color: "bg-sage-500",
    gradient: "sage-gradient",
    glow: "glow-sage",
  },
]

const certifications = [
  {
    title: "Junior Cybersecurity Certificate",
    issuer: "Cisco Networking Academy",
    year: "2024",
    status: "Completed",
    description:
      "Comprehensive cybersecurity fundamentals covering threat analysis, network security, and incident response.",
    skills: ["Network Security", "Threat Analysis", "Incident Response", "Security Protocols"],
    credentialId: "CSC-2024-001",
    verificationUrl: "#",
    color: "bg-orange-500",
    gradient: "orange-gradient",
    glow: "glow-orange",
  },
  {
    title: "Cisco CyberOps Certificate",
    issuer: "Cisco Networking Academy",
    year: "2025",
    status: "Completed",
    description:
      "Advanced cybersecurity operations including security monitoring, threat hunting, and digital forensics.",
    skills: ["Security Monitoring", "Threat Hunting", "Digital Forensics", "SOC Operations"],
    credentialId: "CCO-2025-001",
    verificationUrl: "#",
    color: "bg-pink-500",
    gradient: "pink-gradient",
    glow: "glow-pink",
  },
  {
    title: "Python for Data Science Certificate",
    issuer: "IBM",
    year: "2024",
    status: "Completed",
    description:
      "Data science fundamentals using Python, including data analysis, visualization, and machine learning basics.",
    skills: ["Python Programming", "Data Analysis", "Data Visualization", "Machine Learning"],
    credentialId: "IBM-PDS-2024",
    verificationUrl: "#",
    color: "bg-sage-500",
    gradient: "sage-gradient",
    glow: "glow-sage",
  },
  {
    title: "IBM Data Engineering Certificate",
    issuer: "IBM",
    year: "2024",
    status: "Completed",
    description:
      "Comprehensive data engineering program covering ETL processes, data warehousing, and big data technologies.",
    skills: ["ETL Processes", "Data Warehousing", "Big Data", "Database Design"],
    credentialId: "IBM-DE-2024",
    verificationUrl: "#",
    color: "bg-orange-500",
    gradient: "orange-gradient",
    glow: "glow-orange",
  },
  {
    title: "ALX Backend Development Course",
    issuer: "ALX",
    year: "Ongoing",
    status: "In Progress",
    description:
      "Intensive backend development program focusing on scalable system design and modern development practices.",
    skills: ["System Design", "API Development", "Database Optimization", "DevOps"],
    credentialId: "ALX-BD-2024",
    verificationUrl: "#",
    color: "bg-pink-500",
    gradient: "pink-gradient",
    glow: "glow-pink",
  },
]

export default function Certifications() {
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
              Education & Certifications
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey and professional certifications that shape my expertise
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-16"
          >
            {education.map((edu, index) => (
              <Card key={index} className={`bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${edu.glow} glow-hover animated-border`}>
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-sage-500/20 dark:bg-sage-400/20 text-sage-600 dark:text-sage-400 border-sage-500/30 dark:border-sage-400/30">
                      {edu.status}
                    </Badge>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <GraduationCap className="h-6 w-6 text-sage-500 dark:text-sage-400" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl mb-2 text-gray-700 dark:text-gray-200">{edu.degree}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0 grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin className="h-4 w-4 mr-2" /> {edu.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" /> {edu.period}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-700 dark:text-gray-200">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Key Highlights
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <h2 className="text-4xl font-bold text-center mb-12 rainbow-gradient bg-clip-text text-transparent">
            My Certifications
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                className="group"
              >
                <Card
                  className={`bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${cert.glow} glow-hover animated-border h-full flex flex-col`}
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className={`${
                          cert.status === "Completed" 
                            ? "bg-green-500/20 dark:bg-green-400/20 text-green-700 dark:text-green-400 border-green-500/30 dark:border-green-400/30" 
                            : "bg-yellow-500/20 dark:bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30 dark:border-yellow-400/30"
                        }`}
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {cert.status}
                      </Badge>
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }}>
                        <Award className={`h-6 w-6 ${
                          cert.color === 'bg-orange-500' ? 'text-orange-500 dark:text-orange-400' :
                          cert.color === 'bg-pink-500' ? 'text-deep-forest dark:text-sage-400' :
                          'text-sage-500 dark:text-sage-400'
                        }`} />
                      </motion.div>
                    </div>
                    <CardTitle className="text-xl mb-2 text-gray-700 dark:text-gray-200">{cert.title}</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow flex flex-col">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{cert.description}</p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Skills Acquired</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills?.map((skill, i) => (
                          <motion.div
                            key={`${skill}-${i}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Badge variant="outline" className={`${
                              cert.color === 'bg-orange-500' ? 'bg-orange-500/10 dark:bg-orange-400/10 border-orange-500/30 dark:border-orange-400/30 text-orange-600 dark:text-orange-400' :
                              cert.color === 'bg-pink-500' ? 'bg-deep-forest/10 dark:bg-sage-400/10 border-deep-forest/30 dark:border-sage-400/30 text-deep-forest dark:text-sage-400' :
                              'bg-sage-500/10 dark:bg-sage-400/10 border-sage-500/30 dark:border-sage-400/30 text-sage-600 dark:text-sage-400'
                            }`}>
                              {skill}
                            </Badge>
                          </motion.div>
                        )) || []}
                      </div>
                    </div>

                    {/* Verification */}
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-sage-500 dark:border-sage-400 text-sage-500 dark:text-sage-400 hover:bg-sage-500 dark:hover:bg-sage-400 hover:text-white dark:hover:text-gray-900"
                        asChild
                      >
                        <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 hover:bg-orange-500 dark:hover:bg-orange-400 hover:text-white dark:hover:text-gray-900"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        {cert.year}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certification Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 glow-pink glow-hover">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-gray-700 dark:text-gray-200">Portfolio Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { number: "1", label: "Degree Program", color: "text-sage-500 dark:text-sage-400", glow: "glow-sage" },
                    { number: "5", label: "Certifications", color: "text-orange-500 dark:text-orange-400", glow: "glow-orange" },
                    { number: "3", label: "Major Platforms", color: "text-deep-forest dark:text-sage-400", glow: "glow-pink" },
                    { number: "2025", label: "Expected Graduation", color: "text-sage-500 dark:text-sage-400", glow: "glow-sage" },
                  ].map((stat, index) => (
                    <motion.div
                      key={`${stat.label}-${index}`}
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      className={`p-6 bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-2xl border border-border/50 ${stat.glow} glow-hover`}
                    >
                      <motion.div
                        className={`text-3xl font-bold mb-2 ${stat.color}`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                      >
                        {stat.number}
                      </motion.div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
