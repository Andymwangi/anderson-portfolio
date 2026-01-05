"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import Script from "next/script";
import { 
  FaReact, 
  FaVuejs, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt,
  FaRust
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiExpress, 
  SiFastapi, 
  SiDjango, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql, 
  SiRedis, 
  SiKubernetes, 
  SiTerraform,
  SiNestjs,
  SiGo,
  SiPrisma,
  SiElasticsearch
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string; // Brand color for the icon
}

interface SkillCategory {
  title: string;
  icon: string; // Solar icon name
  skills: Skill[];
  gridSpan: string; // Tailwind grid span classes
}

interface PersonalAttribute {
  name: string;
  description: string;
  icon: string; // Solar icon name
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "code-circle",
    gridSpan: "md:col-span-2 md:row-span-2", // Large card
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend Development",
    icon: "server-square",
    gridSpan: "md:col-span-2 md:row-span-2", // Large card
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Golang", icon: TbBrandGolang, color: "#00ADD8" },
      { name: "Rust", icon: FaRust, color: "#CE422B" },
    ],
  },
  {
    title: "Database & ORM",
    icon: "database",
    gridSpan: "md:col-span-2", // Medium card
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
    ],
  },
  {
    title: "Cybersecurity",
    icon: "shield-check",
    gridSpan: "md:col-span-1", // Small card
    skills: [
      { name: "Security Protocols", icon: FaAws, color: "#D4B483" },
      { name: "Threat Analysis", icon: FaAws, color: "#D4B483" },
      { name: "Data Encryption", icon: FaAws, color: "#D4B483" },
      { name: "Network Security", icon: FaAws, color: "#D4B483" },
      { name: "Penetration Testing", icon: FaAws, color: "#D4B483" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    gridSpan: "md:col-span-1", // Small card
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
  },
];

const personalAttributes: PersonalAttribute[] = [
  { 
    name: "Problem Solving", 
    description: "Analytical approach to complex challenges with creative solutions",
    icon: "lightbulb-bolt"
  },
  { 
    name: "Team Collaboration", 
    description: "Effective communication and cooperation in diverse teams",
    icon: "users-group-rounded"
  },
  { 
    name: "Communication", 
    description: "Clear articulation of technical concepts to all stakeholders",
    icon: "chat-round-line"
  },
  { 
    name: "Leadership", 
    description: "Guiding teams towards successful project delivery",
    icon: "crown"
  },
  { 
    name: "Adaptability", 
    description: "Quick learning and flexibility in dynamic environments",
    icon: "refresh-circle"
  },
  { 
    name: "Critical Thinking", 
    description: "Strategic decision-making based on data and analysis",
    icon: "lightbulb-bolt"
  },
];

export default function SkillsPage() {
  const [unicornLoaded, setUnicornLoaded] = useState(false);

  useEffect(() => {
    // Initialize Unicorn Studio after script loads
    if (typeof window !== 'undefined' && (window as any).UnicornStudio && !unicornLoaded) {
      (window as any).UnicornStudio.init();
      setUnicornLoaded(true);
    }
  }, [unicornLoaded]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* GLOBAL BACKDROP */}
        <div className="fixed inset-0 bg-[#050403] -z-50"></div>

        {/* 3D BACKGROUND (Unicorn Studio) */}
        <div 
          className="fixed top-0 w-full h-screen -z-10 aura-filter" 
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
            filter: 'sepia(0.8) hue-rotate(330deg) saturate(0.6) brightness(0.8)'
          }}
        >
          <div className="absolute w-full h-full left-0 top-0 -z-10">
            <div data-us-project="NMlvqnkICwYYJ6lYb064" className="absolute w-full h-full left-0 top-0 -z-10"></div>
          </div>
        </div>

        {/* Unicorn Studio Script */}
        <Script
          id="unicorn-studio"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            `
          }}
        />

        {/* Iconify Script for Solar Icons */}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="afterInteractive" />

        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] w-full flex items-center justify-center py-32 px-6 border-b border-gray-200 dark:border-accent/10">
          <div className="max-w-7xl mx-auto w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">Technical Stack</span>
              </div>
              <h1 className="font-serif italic text-5xl md:text-7xl text-black dark:text-white mb-6 leading-tight">
                My <span className="text-accent not-italic font-bold">Expertise</span>
              </h1>
              <p className="text-gray-800 dark:text-gray-400 text-lg max-w-2xl mx-auto font-sans">
                A comprehensive overview of my technical skills and capabilities
              </p>
            </motion.div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION - BENTO GRID */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// TECHNICAL SKILLS</span>
              <h2 className="font-serif italic text-4xl text-black dark:text-white mb-4">Core Competencies</h2>
            </div>

            {/* Bento Grid with varying sizes */}
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className={`glass-panel spotlight-card rounded-2xl p-8 relative group hover:bg-white/5 transition-colors ${category.gridSpan}`}
                >
                  <div className="scan-line"></div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-full relative">
                      <iconify-icon icon={`solar:${category.icon}-bold`} width="24" className="text-accent"></iconify-icon>
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    </div>
                    <h3 className="font-serif italic text-xl text-black dark:text-white">{category.title}</h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                        className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-accent/10 hover:border-accent/30 transition-all group/skill"
                      >
                        <skill.icon 
                          className="group-hover/skill:scale-110 transition-transform" 
                          size={32}
                          style={{ color: skill.color }}
                        />
                        <span className="text-xs text-gray-900 dark:text-gray-300 font-sans text-center leading-tight">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONAL ATTRIBUTES SECTION */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-[#0a0806] border-y border-gray-200 dark:border-accent/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// SOFT SKILLS</span>
              <h2 className="font-serif italic text-4xl text-black dark:text-white mb-4">Professional Attributes</h2>
              <p className="text-gray-800 dark:text-gray-400 max-w-2xl mx-auto font-sans">
                Beyond code - the interpersonal skills that drive successful collaboration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalAttributes.map((attribute, index) => (
                <motion.div
                  key={attribute.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 relative group hover:bg-white/5 transition-colors"
                >
                  <div className="scan-line"></div>
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4 relative group-hover:bg-accent/20 transition-colors">
                      <iconify-icon icon={`solar:${attribute.icon}-bold`} width="32" className="text-accent"></iconify-icon>
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    </div>
                    <h3 className="font-serif italic text-lg text-black dark:text-white mb-3">{attribute.name}</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-400 font-sans leading-relaxed">{attribute.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </PageTransition>
  );
}

