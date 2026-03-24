import type { ElementType } from "react";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaRust,
  FaShieldAlt,
  FaBug,
  FaKey,
  FaNetworkWired,
  FaUserSecret,
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

export interface Skill {
  name: string;
  icon: ElementType;
  color: string;
}

export interface SkillCategory {
  title: string;
  /** Short line under the title — what this group covers */
  subtitle: string;
  /** Stable id for in-section anchor links */
  slug: string;
  /** Compact label for the in-section jump nav */
  shortNavLabel: string;
  solarIcon: string;
  num: string;
  skills: Skill[];
  /** Shown in the prominent “core stack” band */
  featured?: boolean;
}

export interface PersonalAttribute {
  name: string;
  description: string;
  solarIcon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces, design systems, and typed UI",
    slug: "frontend",
    shortNavLabel: "Frontend",
    solarIcon: "solar:code-circle-bold",
    num: "01",
    featured: true,
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#E85D24" },
      { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "APIs, services, and application logic",
    slug: "backend",
    shortNavLabel: "Backend",
    solarIcon: "solar:server-square-bold",
    num: "02",
    featured: true,
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#E85D24" },
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
    subtitle: "Persistence, search, and data access",
    slug: "data",
    shortNavLabel: "Data",
    solarIcon: "solar:database-bold",
    num: "03",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Prisma", icon: SiPrisma, color: "#E85D24" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
    ],
  },
  {
    title: "Cybersecurity",
    subtitle: "Defensive practices, assessment, and secure design",
    slug: "security",
    shortNavLabel: "Security",
    solarIcon: "solar:shield-check-bold",
    num: "04",
    skills: [
      { name: "Security Protocols", icon: FaShieldAlt, color: "#E85D24" },
      { name: "Threat Analysis", icon: FaUserSecret, color: "#E85D24" },
      { name: "Data Encryption", icon: FaKey, color: "#E85D24" },
      { name: "Network Security", icon: FaNetworkWired, color: "#E85D24" },
      { name: "Penetration Testing", icon: FaBug, color: "#E85D24" },
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure, containers, and delivery",
    slug: "cloud",
    shortNavLabel: "Cloud",
    solarIcon: "solar:cloud-bold",
    num: "05",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
  },
];

export const personalAttributes: PersonalAttribute[] = [
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
