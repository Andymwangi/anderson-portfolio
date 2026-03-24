"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Link from "next/link";
import Footer from "@/components/footer";
import { LiquidMetalButton } from "@/components/liquid-metal-button";
import { LogosCarousel } from "@/components/logos-carousel";
import { HeroProfileCarousel } from "@/components/hero-profile-carousel";
import { HomeSelectedWorks } from "@/components/home-selected-works";

const techStack = [
  { name: "React.js",       icon: "simple-icons:react",       color: "#61DAFB" },
  { name: "React Native",  icon: "simple-icons:react",       color: "#61DAFB" },
  { name: "Expo",          icon: "simple-icons:expo",        color: "#000020" },
  { name: "Node.js",      icon: "simple-icons:nodedotjs",   color: "#339933" },
  { name: "TypeScript",  icon: "simple-icons:typescript",  color: "#3178C6" },
  { name: "Next.js",     icon: "simple-icons:nextdotjs",   color: "#E85D24" },
  { name: "NestJS",      icon: "simple-icons:nestjs",      color: "#E0234E" },
  { name: "Golang",      icon: "simple-icons:go",          color: "#00ADD8" },
  { name: "PostgreSQL",  icon: "simple-icons:postgresql",  color: "#4169E1" },
  { name: "MongoDB",     icon: "simple-icons:mongodb",     color: "#47A248" },
  { name: "MySQL",       icon: "simple-icons:mysql",       color: "#4479A1" },
  { name: "Prisma",      icon: "simple-icons:prisma",      color: "#E85D24" },
  { name: "Docker",      icon: "simple-icons:docker",      color: "#2496ED" },
];

const services = [
  {
    num: "01",
    icon: "solar:shield-check-bold",
    title: "Cybersecurity",
    description: "Advanced threat protection, security audits, and secure architecture design for enterprise systems.",
    items: ["Penetration Testing", "Security Audits", "Secure Architecture"],
  },
  {
    num: "02",
    icon: "solar:code-circle-bold",
    title: "Full-Stack Dev",
    description: "End-to-end web application development with React, NestJS, and PostgreSQL for scalable platforms.",
    items: ["React & Next.js", "Node.js & NestJS", "Database Design"],
  },
  {
    num: "03",
    icon: "solar:server-square-bold",
    title: "Cloud Engineering",
    description: "Scalable cloud infrastructures on AWS with modern DevOps practices and automated pipelines.",
    items: ["AWS Deployment", "CI/CD Pipelines", "Docker & Kubernetes"],
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>

        {/* ── GLOBAL BACKDROP (dark mode) ── */}
        <div className="fixed inset-0 -z-50 dark:bg-[#0D0D0D] bg-[#FAFAFA]" />

        {/* ═══════════════════════════════════════════════
            HERO — fluid layout (no ruled grid; unique to home)
        ═══════════════════════════════════════════════ */}
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-25"
            style={{
              background: `radial-gradient(ellipse 85% 55% at 50% 20%, rgba(var(--accent-rgb) / 0.09), transparent 55%)`,
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:max-w-7xl">
            <motion.div
              className="order-2 flex w-full flex-1 flex-col items-center gap-8 text-center lg:order-1 lg:items-start lg:text-left"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="font-mono text-[9px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)" }}
              >
                Full-stack · mobile · security · cloud
              </p>

              <h1
                className="font-serif font-light leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)" }}
              >
                <span className="block italic text-zinc-950 dark:text-white">Anderson</span>
                <span
                  className="block font-bold not-italic"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-bright) 0%, var(--text-primary) 62%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Mwangi
                </span>
              </h1>

              <p
                className="max-w-lg font-sans text-lg font-light leading-relaxed md:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Secure, scalable web and mobile work—React Native &amp; Expo, full-stack APIs, and cloud-ready
                delivery.
              </p>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Link href="/projects">
                  <LiquidMetalButton variant="filled" className="px-9 py-4">
                    View projects
                  </LiquidMetalButton>
                </Link>
                <a href="/Anderson Mwangi Junior Full stack  Resume (1).pdf" download>
                  <LiquidMetalButton variant="outline" className="px-9 py-4">
                    Download CV
                  </LiquidMetalButton>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="order-1 shrink-0 lg:order-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroProfileCarousel />
            </motion.div>
          </div>

          <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
            <span
              className="font-mono text-[9px] tracking-widest"
              style={{ color: "var(--accent-bright)" }}
            >
              SCROLL
            </span>
            <div
              className="h-12 w-px"
              style={{ background: `linear-gradient(to bottom, var(--accent-bright), transparent)` }}
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            LOGOS CAROUSEL — Tech Stack (4 per cycle)
        ═══════════════════════════════════════════════ */}
        <div className="border-y relative z-20 overflow-hidden w-full" style={{ borderColor: "var(--border-raw)" }}>
          <LogosCarousel count={4} interval={3000} duration={500} stagger={0.12} className="border-0">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-3 transition-colors group shrink-0"
                style={{ color: "var(--text-muted)" }}
              >
                <iconify-icon
                  icon={tech.icon}
                  width="20"
                  height="20"
                  style={{ color: tech.color, opacity: 0.85 }}
                />
                <span
                  className="font-serif text-base italic whitespace-nowrap"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </LogosCarousel>
        </div>

        {/* ═══════════════════════════════════════════════
            SERVICES — Editorial number grid
        ═══════════════════════════════════════════════ */}
        <section
          className="relative z-20 px-6 py-28 md:px-12 lg:px-20"
          style={{
            background: "var(--bg-subtle)",
            borderTop: "1px solid var(--border-raw)",
            borderBottom: "1px solid var(--border-raw)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="section-label">/// What I Offer</div>
            <h2
              className="mb-16 font-serif font-light italic"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}
            >
              Services
            </h2>

            {/* Cards as editorial ruled rows */}
            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col gap-5 p-10"
                  style={{
                    borderRight: "1px solid var(--border-raw)",
                    borderBottom: "1px solid var(--border-raw)",
                  }}
                >
                  <div
                    className="font-serif italic font-light"
                    style={{ fontSize: "52px", color: "var(--border-raw)", lineHeight: 1 }}
                  >
                    {svc.num}
                  </div>
                  <div>
                    <iconify-icon icon={svc.icon} width="24" style={{ color: "var(--accent-bright)" }} />
                  </div>
                  <h3
                    className="font-serif italic font-light"
                    style={{ fontSize: "26px", color: "var(--text-primary)" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="flex-1 font-sans text-base font-light leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {svc.description}
                  </p>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-mono text-xs tracking-wide"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span
                          className="h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ background: "var(--accent-bright)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HomeSelectedWorks />

        {/* ═══════════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════════ */}
        <section className="py-28 px-6 relative z-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label justify-center mb-6">/// Let's Collaborate</div>
              <h2
                className="font-serif font-light italic mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}
              >
                Let's Build Something Great
              </h2>
              <p
                className="font-sans font-light text-xl mb-10 max-w-xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <LiquidMetalButton variant="filled" className="px-10 py-4">
                    Start a Project
                  </LiquidMetalButton>
                </Link>
                <Link href="/projects">
                  <LiquidMetalButton variant="outline" className="px-10 py-4">
                    View My Work
                  </LiquidMetalButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}