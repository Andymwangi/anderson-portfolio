"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import Footer from "@/components/footer";
import { LiquidMetalButton } from "@/components/liquid-metal-button";
import { LogosCarousel } from "@/components/logos-carousel";
import { HomeSelectedWorks } from "@/components/home-selected-works";
import { PageTransition } from "@/components/page-transition";
import { GrainGradient } from "@paper-design/shaders-react";

/// <reference path="../iconify-icon.d.ts" />

const techStack = [
  { name: "React.js",      icon: "simple-icons:react",       color: "#61DAFB" },
  { name: "React Native",  icon: "simple-icons:react",       color: "#61DAFB" },
  { name: "Expo",          icon: "simple-icons:expo",        color: "#000020" },
  { name: "Node.js",       icon: "simple-icons:nodedotjs",   color: "#339933" },
  { name: "TypeScript",    icon: "simple-icons:typescript",  color: "#3178C6" },
  { name: "Next.js",       icon: "simple-icons:nextdotjs",   color: "#E85D24" },
  { name: "NestJS",        icon: "simple-icons:nestjs",      color: "#E0234E" },
  { name: "Golang",        icon: "simple-icons:go",          color: "#00ADD8" },
  { name: "PostgreSQL",    icon: "simple-icons:postgresql",  color: "#4169E1" },
  { name: "MongoDB",       icon: "simple-icons:mongodb",     color: "#47A248" },
  { name: "MySQL",         icon: "simple-icons:mysql",       color: "#4479A1" },
  { name: "Prisma",        icon: "simple-icons:prisma",      color: "#E85D24" },
  { name: "Docker",        icon: "simple-icons:docker",      color: "#2496ED" },
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

// ─── Polaroid Card Stack ───────────────────────────────────────────────────────
const polaroidCards = [
  { src: "/profileimage.jpg", label: "Nairobi · 2025", rotate: -2 },
  { src: "/profileimage2.jpg", label: "JKUAT Graduation", rotate: 3.5 },
  { src: "/profileimage3.jpg", label: "Building · Always", rotate: -1.2 },
];

function PolaroidStack() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % polaroidCards.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: "clamp(260px, 34vw, 420px)", height: "clamp(320px, 42vw, 520px)" }}
    >
      {polaroidCards.map((card, i) => {
        const isActive = i === active;
        const offset = (i - active + polaroidCards.length) % polaroidCards.length;

        return (
          <motion.div
            key={i}
            onClick={() => setActive(i)}
            className="absolute cursor-pointer select-none"
            style={{ zIndex: isActive ? 10 : polaroidCards.length - offset }}
            animate={{
              rotate: isActive ? 0 : card.rotate,
              scale: isActive ? 1 : 0.94 - offset * 0.03,
              y: isActive ? 0 : offset * 14,
              x: isActive ? 0 : offset * 10,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            whileHover={!isActive ? { y: (offset * 14) - 6 } : {}}
          >
            {/* Polaroid white frame */}
            <div
              className="flex flex-col overflow-hidden"
              style={{
                background: "#FEFEFE",
                padding: "10px 10px 42px 10px",
                width: "clamp(230px, 28vw, 350px)",
                boxShadow: isActive
                  ? "0 28px 64px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.12)"
                  : "0 10px 28px rgba(0,0,0,0.16)",
              }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden bg-zinc-200"
                style={{
                  aspectRatio: "4/5",
                  filter: isActive ? "none" : "grayscale(0.15) brightness(0.95)",
                  transition: "filter 0.4s ease",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.src}
                  alt={card.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Fallback gradient placeholder */}
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, #d6cfc6 0%, #b8b0a6 100%)",
                  }}
                >
                  <iconify-icon icon="solar:user-bold" width="72" style={{ color: "rgba(255,255,255,0.3)" }} />
                </div>
              </div>

              {/* Caption row */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.16em]"
                  style={{ color: "#9a9188" }}
                >
                  {card.label}
                </span>
                <span className="font-mono text-[9px]" style={{ color: "#c0b8ae" }}>
                  0{i + 1}.
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Dot indicators */}
      <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {polaroidCards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Card ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              height: "6px",
              width: i === active ? "20px" : "6px",
              background: i === active ? "var(--accent-bright)" : "rgba(var(--accent-rgb)/0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <PageTransition>
      <div className="noise-overlay" />
      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
        <div className="fixed inset-0 -z-50 dark:bg-[#0D0D0D] bg-[#FAFAFA]" />

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative isolate flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-24 md:px-10 md:py-28 lg:px-16">

          {/* GrainGradient — correct named component API */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden
            style={{ opacity: isDark ? 0.4 : 0.65 }}
          >
            <GrainGradient
              style={{ width: "100%", height: "100%" }}
              speed={0.18}
              colorBack={isDark ? "#0D0D0D" : "#F7F3EE"}
              colors={
                isDark
                  ? ["#1c0e02", "#080810", "#0a0a0f", "#1a1008"]
                  : ["#f2e8d8", "#e8e2d8", "#ede5d5", "#f5efe3"]
              }
              softness={0.85}
              intensity={0.35}
              noise={0.55}
              shape="blob"
            />
          </div>

          {/* Accent radial glow */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] opacity-[0.2] dark:opacity-[0.12]"
            style={{
              background: `radial-gradient(ellipse 65% 50% at 24% 36%, rgba(var(--accent-rgb) / 0.09), transparent 62%)`,
            }}
            aria-hidden
          />

          {/* Content row */}
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 xl:max-w-7xl">

            {/* LEFT */}
            <motion.div
              className="order-2 flex w-full flex-1 flex-col items-center gap-8 text-center lg:order-1 lg:max-w-[52%] lg:items-start lg:text-left"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p
                className="font-mono text-[9px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full-stack · mobile · security · cloud
              </motion.p>

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

              <motion.p
                className="max-w-md font-sans text-lg font-light leading-relaxed md:text-xl"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                I build production-grade systems — from React Native apps to hardened backend
                APIs and cloud infrastructure. Based in Nairobi, working globally.
              </motion.p>

              {/* Stat pills */}
              <motion.div
                className="flex flex-wrap items-center gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                {[
                  { value: "4+",  label: "Years building" },
                  { value: "CEH", label: "Certified"      },
                  { value: "15+", label: "Systems shipped"},
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2 border px-4 py-2"
                    style={{
                      borderColor: "rgba(var(--accent-rgb) / 0.2)",
                      background:  "rgba(var(--accent-rgb) / 0.04)",
                    }}
                  >
                    <span className="font-serif italic text-base font-light" style={{ color: "var(--accent-bright)" }}>
                      {stat.value}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/projects">
                  <LiquidMetalButton variant="filled" className="px-9 py-4">View projects</LiquidMetalButton>
                </Link>
                <a href="/Anderson Mwangi Junior Full stack  Resume (1).pdf" download>
                  <LiquidMetalButton variant="outline" className="px-9 py-4">Download CV</LiquidMetalButton>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Polaroid stack */}
            <motion.div
              className="order-1 flex shrink-0 items-center justify-center lg:order-2 lg:flex-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
            >
              <PolaroidStack />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 opacity-40">
            <span className="font-mono text-[9px] tracking-widest" style={{ color: "var(--accent-bright)" }}>
              SCROLL
            </span>
            <div className="h-12 w-px" style={{ background: `linear-gradient(to bottom, var(--accent-bright), transparent)` }} />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            LOGOS CAROUSEL
        ═══════════════════════════════════════════ */}
        <div className="border-y relative z-20 overflow-hidden w-full" style={{ borderColor: "var(--border-raw)" }}>
          <LogosCarousel count={4} interval={3000} duration={500} stagger={0.12} className="border-0">
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 transition-colors group shrink-0" style={{ color: "var(--text-muted)" }}>
                <iconify-icon icon={tech.icon} width="20" height="20" style={{ color: tech.color, opacity: 0.85 }} />
                <span className="font-serif text-base italic whitespace-nowrap" style={{ color: "var(--text-secondary)" }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </LogosCarousel>
        </div>

        {/* ═══════════════════════════════════════════
            SERVICES
        ═══════════════════════════════════════════ */}
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
                  <div className="font-serif italic font-light" style={{ fontSize: "52px", color: "var(--border-raw)", lineHeight: 1 }}>
                    {svc.num}
                  </div>
                  <div>
                    <iconify-icon icon={svc.icon} width="24" style={{ color: "var(--accent-bright)" }} />
                  </div>
                  <h3 className="font-serif italic font-light" style={{ fontSize: "26px", color: "var(--text-primary)" }}>
                    {svc.title}
                  </h3>
                  <p className="flex-1 font-sans text-base font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {svc.description}
                  </p>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-mono text-xs tracking-wide" style={{ color: "var(--text-muted)" }}>
                        <span className="h-1 w-1 flex-shrink-0 rounded-full" style={{ background: "var(--accent-bright)" }} />
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

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
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
              <p className="font-sans font-light text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <LiquidMetalButton variant="filled" className="px-10 py-4">Start a Project</LiquidMetalButton>
                </Link>
                <Link href="/projects">
                  <LiquidMetalButton variant="outline" className="px-10 py-4">View My Work</LiquidMetalButton>
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