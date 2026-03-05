"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaRust,
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
  SiPrisma,
  SiElasticsearch,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface SkillCategory {
  title: string;
  solarIcon: string;
  num: string;
  skills: Skill[];
  featured?: boolean;
}

interface PersonalAttribute {
  name: string;
  description: string;
  solarIcon: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    solarIcon: "solar:code-circle-bold",
    num: "01",
    featured: true,
    skills: [
      { name: "React.js",      icon: FaReact,       color: "#61DAFB" },
      { name: "Next.js",       icon: SiNextdotjs,   color: "#C9A87A" },
      { name: "Vue.js",        icon: FaVuejs,        color: "#4FC08D" },
      { name: "TypeScript",    icon: SiTypescript,  color: "#3178C6" },
      { name: "Tailwind CSS",  icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend Development",
    solarIcon: "solar:server-square-bold",
    num: "02",
    featured: true,
    skills: [
      { name: "Node.js",    icon: FaNodeJs,        color: "#339933" },
      { name: "Express.js", icon: SiExpress,       color: "#C9A87A" },
      { name: "NestJS",     icon: SiNestjs,        color: "#E0234E" },
      { name: "Python",     icon: FaPython,        color: "#3776AB" },
      { name: "FastAPI",    icon: SiFastapi,       color: "#009688" },
      { name: "Django",     icon: SiDjango,        color: "#092E20" },
      { name: "Golang",     icon: TbBrandGolang,   color: "#00ADD8" },
      { name: "Rust",       icon: FaRust,          color: "#CE422B" },
    ],
  },
  {
    title: "Database & ORM",
    solarIcon: "solar:database-bold",
    num: "03",
    skills: [
      { name: "PostgreSQL",    icon: SiPostgresql,    color: "#4169E1" },
      { name: "MongoDB",       icon: SiMongodb,       color: "#47A248" },
      { name: "MySQL",         icon: SiMysql,         color: "#4479A1" },
      { name: "Redis",         icon: SiRedis,         color: "#DC382D" },
      { name: "Prisma",        icon: SiPrisma,        color: "#C9A87A" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
    ],
  },
  {
    title: "Cybersecurity",
    solarIcon: "solar:shield-check-bold",
    num: "04",
    skills: [
      { name: "Security Protocols",  icon: FaAws, color: "#C9A87A" },
      { name: "Threat Analysis",     icon: FaAws, color: "#C9A87A" },
      { name: "Data Encryption",     icon: FaAws, color: "#C9A87A" },
      { name: "Network Security",    icon: FaAws, color: "#C9A87A" },
      { name: "Penetration Testing", icon: FaAws, color: "#C9A87A" },
    ],
  },
  {
    title: "Cloud & DevOps",
    solarIcon: "solar:cloud-bold",
    num: "05",
    skills: [
      { name: "AWS",        icon: FaAws,        color: "#FF9900" },
      { name: "Docker",     icon: FaDocker,     color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform",  icon: SiTerraform,  color: "#7B42BC" },
      { name: "Git",        icon: FaGitAlt,     color: "#F05032" },
    ],
  },
];

const personalAttributes: PersonalAttribute[] = [
  {
    name: "Problem Solving",
    description: "Analytical approach to complex challenges with creative solutions",
    solarIcon: "solar:lightbulb-bolt-bold",
  },
  {
    name: "Team Collaboration",
    description: "Effective communication and cooperation in diverse teams",
    solarIcon: "solar:users-group-rounded-bold",
  },
  {
    name: "Communication",
    description: "Clear articulation of technical concepts to all stakeholders",
    solarIcon: "solar:chat-round-line-bold",
  },
  {
    name: "Leadership",
    description: "Guiding teams towards successful project delivery",
    solarIcon: "solar:crown-bold",
  },
  {
    name: "Adaptability",
    description: "Quick learning and flexibility in dynamic environments",
    solarIcon: "solar:refresh-circle-bold",
  },
  {
    name: "Critical Thinking",
    description: "Strategic decision-making based on data and analysis",
    solarIcon: "solar:lightbulb-bolt-bold",
  },
];

export default function SkillsPage() {
  return (
    <PageTransition>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>

        {/* Global backdrop */}
        <div className="fixed inset-0 -z-50 dark:bg-[#0F0D0A] bg-[#F7F4EF]" />

        {/* Dot grid */}
        <div className="fixed inset-0 dot-grid opacity-40 pointer-events-none -z-10" />

        {/* ═══════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════ */}
        <section
          className="relative min-h-[70vh] w-full flex items-center justify-center py-32 px-6 overflow-hidden"
          style={{ borderBottom: "1px solid var(--border-raw)" }}
        >
          {/* Radial glow rings */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            {[300, 500, 700].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border"
                style={{
                  width: size,
                  height: size,
                  borderColor: `rgba(201,168,122,${0.10 - i * 0.025})`,
                  animation: `ping ${4 + i}s cubic-bezier(0,0,0.2,1) infinite`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="font-serif font-light italic mb-6 leading-[0.9]"
                style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", color: "var(--text-primary)" }}
              >
                My{" "}
                <span
                  className="font-bold not-italic"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-bright) 0%, var(--text-primary) 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Expertise
                </span>
              </h1>

              <p
                className="font-sans font-light text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                A comprehensive overview of my technical skills and capabilities
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            TECHNICAL SKILLS — Editorial ruled grid
        ═══════════════════════════════════════════════ */}
        <section className="py-28 px-6 md:px-12 lg:px-20 relative z-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div
              className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8"
              style={{ borderBottom: "1px solid var(--border-raw)" }}
            >
              <div>
                <div className="section-label">/// Technical Skills</div>
                <h2
                  className="font-serif font-light italic"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}
                >
                  Core Competencies
                </h2>
              </div>
              <span
                className="font-mono text-[9px] tracking-widest uppercase hidden md:block"
                style={{ color: "var(--text-muted)" }}
              >
                {skillCategories.length} Domains
              </span>
            </div>

            {/* Cards as editorial ruled columns */}
            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="p-10 relative"
                  style={{
                    borderRight: "1px solid var(--border-raw)",
                    borderBottom: "1px solid var(--border-raw)",
                    // Span featured (first two) wider if desired — keeping 2-col for clean editorial look
                  }}
                >
                  {/* Large editorial number */}
                  <div
                    className="font-serif italic font-light mb-6"
                    style={{ fontSize: "64px", color: "var(--border-raw)", lineHeight: 1 }}
                  >
                    {category.num}
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-8">
                    <iconify-icon
                      icon={category.solarIcon}
                      width="22"
                      style={{ color: "var(--accent-bright)" }}
                    />
                    <h3
                      className="font-serif italic font-light"
                      style={{ fontSize: "26px", color: "var(--text-primary)" }}
                    >
                      {category.title}
                    </h3>
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse ml-1"
                      style={{ background: "var(--accent-bright)" }}
                    />
                  </div>

                  {/* Skills — editorial row list */}
                  <div
                    style={{
                      borderTop: "1px solid var(--border-raw)",
                      borderLeft: "1px solid var(--border-raw)",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.04, duration: 0.3 }}
                        className="flex flex-col items-center justify-center py-6 gap-3 group/skill transition-colors"
                        style={{
                          borderRight: "1px solid var(--border-raw)",
                          borderBottom: "1px solid var(--border-raw)",
                        }}
                      >
                        <skill.icon
                          size={28}
                          style={{
                            color: skill.color,
                            transition: "transform 0.3s ease",
                            filter: "brightness(0.9)",
                          }}
                          className="group-hover/skill:scale-110 transition-transform"
                        />
                        <span
                          className="font-mono text-center leading-tight"
                          style={{
                            fontSize: "9px",
                            color: "var(--text-muted)",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            PERSONAL ATTRIBUTES
        ═══════════════════════════════════════════════ */}
        <section
          className="py-28 px-6 md:px-12 lg:px-20 relative z-20"
          style={{
            background: "var(--bg-subtle)",
            borderTop: "1px solid var(--border-raw)",
            borderBottom: "1px solid var(--border-raw)",
          }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div
              className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8"
              style={{ borderBottom: "1px solid var(--border-raw)" }}
            >
              <div>
                <div className="section-label">/// Soft Skills</div>
                <h2
                  className="font-serif font-light italic"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}
                >
                  Professional Attributes
                </h2>
              </div>
              <p
                className="font-sans font-light text-base max-w-xs text-right hidden md:block"
                style={{ color: "var(--text-secondary)" }}
              >
                Beyond code — the interpersonal skills that drive successful collaboration
              </p>
            </div>

            {/* Attributes — editorial ruled grid */}
            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {personalAttributes.map((attribute, index) => (
                <motion.div
                  key={attribute.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-10 flex flex-col gap-5 relative"
                  style={{
                    borderRight: "1px solid var(--border-raw)",
                    borderBottom: "1px solid var(--border-raw)",
                  }}
                >
                  {/* Large index number */}
                  <div
                    className="font-serif italic font-light absolute top-6 right-8"
                    style={{ fontSize: "40px", color: "var(--border-raw)", lineHeight: 1 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="relative w-fit">
                    <div
                      className="p-3"
                      style={{ background: "rgba(201,168,122,0.08)", border: "1px solid rgba(201,168,122,0.15)" }}
                    >
                      <iconify-icon
                        icon={attribute.solarIcon}
                        width="24"
                        style={{ color: "var(--accent-bright)" }}
                      />
                    </div>
                    <span
                      className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: "var(--accent-bright)" }}
                    />
                  </div>

                  {/* Text */}
                  <h3
                    className="font-serif italic font-light"
                    style={{ fontSize: "24px", color: "var(--text-primary)" }}
                  >
                    {attribute.name}
                  </h3>
                  <p
                    className="font-sans font-light text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {attribute.description}
                  </p>

                  {/* Accent line */}
                  <div
                    className="w-8 h-px mt-auto"
                    style={{ background: "var(--accent-bright)", opacity: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}