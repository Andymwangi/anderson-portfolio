import { Shield, Database, Zap, Code, Cloud, Cpu, BookOpen, Award, Briefcase, Mail, Github, Linkedin, MapPin, Phone, Twitter } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Site metadata
export const SITE_METADATA = {
  title: "Anderson Mitambo - Cybersecurity & Cloud Engineering Portfolio",
  description: "Full Stack Developer specializing in Cybersecurity and Cloud Engineering solutions",
  keywords: "cybersecurity, cloud engineering, full stack developer, next.js, typescript",
  author: "Anderson Mitambo",
  email: "anderson.mitamboo@gmail.com",
  phone: "+254-700-071-699",
  location: "Nairobi, Kenya",
}

// Navigation links
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Education & Certifications", path: "/certifications" },
  { label: "Contact", path: "/contact" },
]

// Social links
export const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/Andymwangi", label: "GitHub", color: "hover:text-sage-500" },
  { icon: Linkedin, href: "https://linkedin.com/in/anderson-mwangi", label: "LinkedIn", color: "hover:text-orange-500" },
  { icon: Mail, href: "mailto:anderson.mitamboo@gmail.com", label: "Mail", color: "hover:text-pink-500" },
  { icon: Twitter, href: "https://x.com/andymwangii", label: "Twitter", color: "hover:text-blue-500" },
]

// Rotating keywords for hero section
export const HERO_KEYWORDS = [
  "Cybersecurity",
  "Cloud Engineering",
  "Full Stack Development",
];

// Contact information
export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_METADATA.email,
    color: "text-sage-500",
    glow: "glow-sage",
    href: `mailto:${SITE_METADATA.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_METADATA.phone,
    color: "text-orange-500",
    glow: "glow-orange",
    href: `tel:${SITE_METADATA.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE_METADATA.location,
    color: "text-pink-500",
    glow: "glow-pink",
  },
]

// Specializations
export const SPECIALIZATIONS = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Implementing robust security measures to protect digital assets and sensitive information from threats.",
    color: "glow-sage",
    textColor: "text-sage-500",
    gradient: "bg-gradient-to-br from-sage-500/20 to-sage-700/20",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Designing and implementing scalable cloud infrastructure solutions on AWS, Azure, and Google Cloud.",
    color: "glow-orange",
    textColor: "text-orange-500",
    gradient: "bg-gradient-to-br from-orange-500/20 to-orange-700/20",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building modern web applications with React, Next.js, Node.js, and other cutting-edge technologies.",
    color: "glow-pink",
    textColor: "text-pink-500",
    gradient: "bg-gradient-to-br from-pink-500/20 to-pink-700/20",
  },
]

// Stats
export const QUICK_STATS = [
  { number: "3+", label: "Years Experience", color: "text-sage-500" },
  { number: "15+", label: "Projects Completed", color: "text-orange-500" },
  { number: "5+", label: "Certifications", color: "text-pink-500" },
  { number: "70%", label: "Cost Reduction Achieved", color: "text-sage-500" },
]

// Portfolio summary stats
export const PORTFOLIO_SUMMARY = [
  { number: "8+", label: "Major Projects", color: "text-sage-500", glow: "glow-sage" },
  { number: "50+", label: "Users Served", color: "text-orange-500", glow: "glow-orange" },
  { number: "99.9%", label: "Average Uptime", color: "text-pink-500", glow: "glow-pink" },
  { number: "60%", label: "Avg. Efficiency Gain", color: "text-sage-500", glow: "glow-sage" },
]

// Response time stats
export const RESPONSE_STATS = [
  { value: "< 24h", label: "Response Time", color: "text-sage-500" },
  { value: "100%", label: "Response Rate", color: "text-orange-500" },
  { value: "24/7", label: "Availability", color: "text-pink-500" },
]

// Theme colors
export const THEME_COLORS = {
  sage: {
    primary: "#84cc16",
    secondary: "#65a30d",
    light: "#d9f99d",
    dark: "#365314",
  },
  orange: {
    primary: "#f97316",
    secondary: "#ea580c",
    light: "#fed7aa",
    dark: "#7c2d12",
  },
  pink: {
    primary: "#ec4899",
    secondary: "#db2777",
    light: "#fbcfe8",
    dark: "#831843",
  },
}

// Animation durations
export const ANIMATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  extraSlow: 2.0,
  staggerChildren: 0.1,
}

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

// Form validation messages
export const FORM_VALIDATION = {
  required: "This field is required",
  email: "Please enter a valid email address",
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be at most ${max} characters`,
  phoneFormat: "Please enter a valid phone number",
}
