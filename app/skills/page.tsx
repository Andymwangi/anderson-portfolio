"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code, Shield, Cloud, Database, Wrench, Users, Puzzle, Handshake, MessageSquare, Crown, GitCommit, BrainCircuit } from "lucide-react"
import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiFastapi, SiDjango, SiFlask, SiPostgresql, SiMongodb, SiRedis, SiKubernetes, SiTerraform } from "react-icons/si"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition } from "@/components/page-transition"

// Type definitions for skills
interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  glow: string;
  skills: Skill[];
}

interface SoftSkill {
  name: string;
  level: number;
  icon: React.ElementType;
}

const iconComponents: { [key: string]: React.ElementType } = {
  FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws,
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiFastapi, SiDjango, SiFlask, SiPostgresql, SiMongodb, SiRedis, SiKubernetes, SiTerraform,
  Database, Code, Wrench, Users
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-gray-600",
    gradient: "sage-gradient",
    glow: "glow-sage",
    skills: [
      { name: "React.js", level: 95, color: "bg-gray-500/70", icon: "FaReact" },
      { name: "Next.js", level: 90, color: "bg-gray-400/70", icon: "SiNextdotjs" },
      { name: "Vue.js", level: 85, color: "bg-gray-600/70", icon: "FaVuejs" },
      { name: "TypeScript", level: 88, color: "bg-gray-500/70", icon: "SiTypescript" },
      { name: "JavaScript", level: 95, color: "bg-gray-400/70", icon: "FaNodeJs" },
      { name: "HTML5/CSS3", level: 95, color: "bg-gray-400/70", icon: "FaHtml5" },
      { name: "Tailwind CSS", level: 92, color: "bg-gray-600/70", icon: "SiTailwindcss" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-orange-500",
    gradient: "orange-gradient",
    glow: "glow-orange",
    skills: [
      { name: "Node.js", level: 90, color: "bg-orange-400/70", icon: "FaNodeJs" },
      { name: "Express.js", level: 88, color: "bg-orange-300/70", icon: "SiExpress" },
      { name: "Python", level: 85, color: "bg-orange-500/70", icon: "FaPython" },
      { name: "FastAPI", level: 80, color: "bg-orange-400/70", icon: "SiFastapi" },
      { name: "Django", level: 75, color: "bg-orange-300/70", icon: "SiDjango" },
      { name: "Flask", level: 82, color: "bg-orange-500/70", icon: "SiFlask" },
      { name: "JavaScript", level: 92, color: "bg-orange-300/70", icon: "FaNodeJs" },
      { name: "PHP", level: 78, color: "bg-orange-400/70", icon: "Code" },
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "text-deep-forest",
    gradient: "pink-gradient",
    glow: "glow-pink",
    skills: [
      { name: "Security Protocols", level: 92, color: "bg-deep-forest/70", icon: "Shield" },
      { name: "Threat Analysis", level: 88, color: "bg-deep-forest/60", icon: "Shield" },
      { name: "Data Encryption", level: 85, color: "bg-deep-forest/80", icon: "Shield" },
      { name: "Network Security", level: 90, color: "bg-deep-forest/70", icon: "Shield" },
      { name: "Penetration Testing", level: 80, color: "bg-deep-forest/60", icon: "Shield" },
      { name: "Security Auditing", level: 87, color: "bg-deep-forest/80", icon: "Shield" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-sage-500",
    gradient: "sage-gradient",
    glow: "glow-sage",
    skills: [
      { name: "AWS", level: 85, color: "bg-sage-400/70", icon: "FaAws" },
      { name: "Docker", level: 90, color: "bg-sage-300/70", icon: "FaDocker" },
      { name: "CI/CD Pipelines", level: 82, color: "bg-sage-500/70", icon: "FaGitAlt" },
      { name: "Kubernetes", level: 75, color: "bg-sage-400/70", icon: "SiKubernetes" },
      { name: "Terraform", level: 70, color: "bg-sage-300/70", icon: "SiTerraform" },
      { name: "Monitoring", level: 88, color: "bg-sage-500/70", icon: "FaGitAlt" },
    ],
  },
  {
    title: "Database & Caching",
    icon: Database,
    color: "text-orange-500",
    gradient: "orange-gradient",
    glow: "glow-orange",
    skills: [
      { name: "PostgreSQL", level: 92, color: "bg-orange-400/70", icon: "SiPostgresql" },
      { name: "MongoDB", level: 88, color: "bg-orange-300/70", icon: "SiMongodb" },
      { name: "MySQL", level: 90, color: "bg-orange-500/70", icon: "Database" },
      { name: "Redis", level: 85, color: "bg-orange-400/70", icon: "SiRedis" },
      { name: "Database Design", level: 90, color: "bg-orange-300/70", icon: "Database" },
      { name: "Query Optimization", level: 87, color: "bg-orange-500/70", icon: "Database" },
    ],
  },
  {
    title: "Tools & Methodologies",
    icon: Wrench,
    color: "text-deep-forest",
    gradient: "pink-gradient",
    glow: "glow-pink",
    skills: [
      { name: "Git & Version Control", level: 95, color: "bg-deep-forest/70", icon: "FaGitAlt" },
      { name: "Agile/Scrum", level: 88, color: "bg-deep-forest/60", icon: "Users" },
      { name: "Testing & QA", level: 85, color: "bg-deep-forest/80", icon: "Wrench" },
      { name: "API Development", level: 92, color: "bg-deep-forest/70", icon: "Code" },
      { name: "Code Review", level: 90, color: "bg-deep-forest/60", icon: "Code" },
      { name: "Documentation", level: 92, color: "bg-deep-forest/60", icon: "Database" },
      { name: "Debugging", level: 94, color: "bg-deep-forest/80", icon: "Wrench" },
    ],
  },
]

const softSkills: SoftSkill[] = [
  { name: "Problem Solving", level: 95, icon: Puzzle },
  { name: "Team Collaboration", level: 90, icon: Handshake },
  { name: "Communication", level: 88, icon: MessageSquare },
  { name: "Leadership", level: 85, icon: Crown },
  { name: "Adaptability", level: 92, icon: GitCommit },
  { name: "Critical Thinking", level: 90, icon: BrainCircuit },
]

export default function Skills() {
  return (
    <PageTransition>
      <div className="min-h-screen cyber-vibrant-gradient p-6 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 rainbow-gradient bg-clip-text text-transparent">
              My Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="group"
              >
                <Card
                  className={`bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${category.glow} glow-hover animated-border h-full flex flex-col`}
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-4">
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                        <category.icon className={`h-8 w-8 ${category.color}`} />
                      </motion.div>
                      <CardTitle className={`text-xl text-gray-700 dark:text-gray-200`}>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-1">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => {
                        const IconComponent = iconComponents[skill.icon as keyof typeof iconComponents];
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                {IconComponent && <IconComponent className={`h-5 w-5 ${category.color}`} />}
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                              </div>
                              <span className={`text-sm font-bold ${category.color}`}>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-300/50 dark:bg-gray-600/50 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-2 rounded-full ${skill.color}`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 glow-sage glow-hover">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-gray-700 dark:text-gray-200">
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        className="flex flex-col items-center text-center p-3 rounded-lg bg-background/30 dark:bg-background/20"
                      >
                        <IconComponent className="h-8 w-8 mb-3 text-warm-gold dark:text-warm-gold" />
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">{skill.name}</h3>
                        <div className="w-full">
                          <div className="flex justify-center items-center mb-2">
                            <span className="text-xs font-bold text-warm-gold dark:text-warm-gold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-300/50 dark:bg-gray-600/50 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-warm-gold to-cream h-2 rounded-full shadow-sm"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Card className="bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 glow-orange glow-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200 mb-6">
                  Skills Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { number: "20+", label: "Technologies", color: "text-sage-500", glow: "glow-sage" },
                    { number: "5+", label: "Frameworks", color: "text-orange-500", glow: "glow-orange" },
                    { number: "3+", label: "Cloud Platforms", color: "text-deep-forest dark:text-sage-400", glow: "glow-pink" },
                    { number: "90%+", label: "Average Proficiency", color: "text-sage-500", glow: "glow-sage" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
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
