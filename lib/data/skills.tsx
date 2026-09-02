export interface Skill {
  name: string;
  /** Iconify icon name (simple-icons for brands, solar for concepts) */
  icon: string;
}

export interface SkillCategory {
  title: string;
  /** Short line under the title, what this group covers */
  subtitle: string;
  /** Stable id for in-section anchor links */
  slug: string;
  num: string;
  skills: Skill[];
}

export interface PersonalAttribute {
  name: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    subtitle: "Interfaces, design systems, and typed UI",
    slug: "frontend",
    num: "01",
    skills: [
      { name: "React", icon: "simple-icons:react" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "Vue", icon: "simple-icons:vuedotjs" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs, services, and application logic",
    slug: "backend",
    num: "02",
    skills: [
      { name: "Node.js", icon: "simple-icons:nodedotjs" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "NestJS", icon: "simple-icons:nestjs" },
      { name: "Python", icon: "simple-icons:python" },
      { name: "FastAPI", icon: "simple-icons:fastapi" },
      { name: "Django", icon: "simple-icons:django" },
      { name: "Go", icon: "simple-icons:go" },
      { name: "Rust", icon: "simple-icons:rust" },
    ],
  },
  {
    title: "Mobile",
    subtitle: "Offline-first apps for the field",
    slug: "mobile",
    num: "03",
    skills: [
      { name: "React Native", icon: "simple-icons:react" },
      { name: "Expo", icon: "simple-icons:expo" },
    ],
  },
  {
    title: "Data",
    subtitle: "Persistence, search, and data access",
    slug: "data",
    num: "04",
    skills: [
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "MongoDB", icon: "simple-icons:mongodb" },
      { name: "MySQL", icon: "simple-icons:mysql" },
      { name: "Redis", icon: "simple-icons:redis" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "Elasticsearch", icon: "simple-icons:elasticsearch" },
    ],
  },
  {
    title: "Security",
    subtitle: "Defensive practice, assessment, and secure design",
    slug: "security",
    num: "05",
    skills: [
      { name: "Security protocols", icon: "solar:shield-check-linear" },
      { name: "Threat analysis", icon: "solar:eye-scan-linear" },
      { name: "Encryption", icon: "solar:key-linear" },
      { name: "Network security", icon: "solar:server-path-linear" },
      { name: "Penetration testing", icon: "solar:bug-linear" },
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure, containers, and delivery",
    slug: "cloud",
    num: "06",
    skills: [
      { name: "AWS", icon: "simple-icons:amazonwebservices" },
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Kubernetes", icon: "simple-icons:kubernetes" },
      { name: "Terraform", icon: "simple-icons:terraform" },
      { name: "Git", icon: "simple-icons:git" },
    ],
  },
];

export const personalAttributes: PersonalAttribute[] = [
  {
    name: "Problem solving",
    description: "An analytical approach to complex challenges, with creative and pragmatic solutions.",
  },
  {
    name: "Collaboration",
    description: "Clear communication and cooperation across product, design, and engineering.",
  },
  {
    name: "Communication",
    description: "Technical concepts explained plainly for every stakeholder in the room.",
  },
  {
    name: "Leadership",
    description: "Guiding teams towards delivery with ownership and calm under pressure.",
  },
  {
    name: "Adaptability",
    description: "Fast learning and flexibility across stacks, domains, and team sizes.",
  },
  {
    name: "Critical thinking",
    description: "Decisions grounded in data, trade-offs, and long-term maintainability.",
  },
];
