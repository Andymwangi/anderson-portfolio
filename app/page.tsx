"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

const profileImages = [
  "/profileimage.jpg",
  "/profileimage2.jpg",
  "/profileimage3.jpg",
];

const techStack = [
  { name: "React.js",    icon: "simple-icons:react",       color: "#61DAFB" },
  { name: "Node.js",     icon: "simple-icons:nodedotjs",   color: "#339933" },
  { name: "TypeScript",  icon: "simple-icons:typescript",  color: "#3178C6" },
  { name: "Next.js",     icon: "simple-icons:nextdotjs",   color: "#C9A87A" },
  { name: "NestJS",      icon: "simple-icons:nestjs",      color: "#E0234E" },
  { name: "Golang",      icon: "simple-icons:go",          color: "#00ADD8" },
  { name: "PostgreSQL",  icon: "simple-icons:postgresql",  color: "#4169E1" },
  { name: "MongoDB",     icon: "simple-icons:mongodb",     color: "#47A248" },
  { name: "MySQL",       icon: "simple-icons:mysql",       color: "#4479A1" },
  { name: "Prisma",      icon: "simple-icons:prisma",      color: "#C9A87A" },
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
        <div className="fixed inset-0 -z-50 dark:bg-[#0F0D0A] bg-[#F7F4EF]" />

        {/* ═══════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════ */}
        <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">

          {/* Radial glow rings */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            {[300, 500, 700, 900].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border"
                style={{
                  width: size,
                  height: size,
                  borderColor: `rgba(201,168,122,${0.12 - i * 0.025})`,
                  animation: `ping ${3 + i}s cubic-bezier(0,0,0.2,1) infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Background image */}
          <div className="absolute inset-0 dark:bg-[#0F0D0A] bg-[#F7F4EF]">
            <Image
              src="/background.jpg"
              alt="Background"
              fill
              className="object-cover dark:opacity-[0.06] opacity-[0.04]"
              priority
            />
          </div>

          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

          {/* Hero content */}
          <div className="relative z-20 w-full text-center max-w-5xl px-6">

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light tracking-tight mb-6 leading-[0.9]"
              style={{ fontSize: "clamp(4.5rem, 13vw, 10rem)" }}
            >
              <span className="dark:text-[#EDE5D8] text-[#1C1410] block italic">Anderson</span>
              <span
                className="font-bold not-italic block"
                style={{
                  background: "linear-gradient(135deg, var(--accent-bright) 0%, var(--text-primary) 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mwangi
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-sans font-light text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12"
              style={{ color: "var(--text-secondary)" }}
            >
              Building secure, scalable web applications with modern technologies.
              Specialised in full-stack development, cybersecurity, and cloud engineering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/projects">
                <button
                  className="btn-magnetic px-9 py-4 font-bold"
                  style={{ background: "var(--accent-bright)", color: "var(--bg)" }}
                >
                  View Projects
                </button>
              </Link>
              <a href="/Anderson Mwangi Junior Full stack  Resume (1).pdf" download>
                <button
                  className="btn-magnetic px-9 py-4 border"
                  style={{
                    borderColor: "rgba(201,168,122,0.4)",
                    color: "var(--accent-bright)",
                    background: "transparent",
                  }}
                >
                  Download CV
                </button>
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-40">
            <span
              className="font-mono text-[9px] tracking-widest"
              style={{ color: "var(--accent-bright)" }}
            >
              SCROLL
            </span>
            <div
              className="w-px h-12"
              style={{ background: `linear-gradient(to bottom, var(--accent-bright), transparent)` }}
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            MARQUEE — Tech Stack
        ═══════════════════════════════════════════════ */}
        <div
          className="border-y py-5 relative z-20 overflow-hidden marquee-mask w-full"
          style={{ borderColor: "var(--border-raw)", background: "var(--bg-subtle)" }}
        >
          <div className="flex whitespace-nowrap animate-marquee w-[max-content]">
            {[...Array(2)].map((_, si) => (
              <div key={si} className="flex gap-14 px-10 items-center">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 transition-colors group"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <iconify-icon
                      icon={tech.icon}
                      width="18"
                      style={{ color: tech.color, opacity: 0.7 }}
                    />
                    <span
                      className="font-serif text-base italic"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            ABOUT — Bento with Editorial Photo Album
        ═══════════════════════════════════════════════ */}
        <section
          id="about"
          className="py-28 px-6 md:px-12 lg:px-20 relative z-20"
          style={{ background: "var(--bg)" }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div
              className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8"
              style={{ borderBottom: "1px solid var(--border-raw)" }}
            >
              <div>
                <div className="section-label">/// About Me</div>
                <h2
                  className="font-serif font-light italic"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}
                >
                  Who I Am
                </h2>
              </div>
              <span
                className="font-mono text-[9px] tracking-widest uppercase hidden md:block"
                style={{ color: "var(--text-muted)" }}
              >
                Nairobi, Kenya · 2026
              </span>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

              {/* ── Single Portrait ── */}
              <motion.div
                className="md:col-span-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className="photo-frame"
                  style={{ height: "600px", position: "relative" }}
                >
                  <Image
                    src={profileImages[0]}
                    alt="Anderson Mwangi"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Bottom meta overlay */}
                  <div className="photo-meta">
                    <div className="photo-meta-number">01.</div>
                    <div className="photo-meta-caption">Anderson Mwangi</div>
                    <div className="photo-meta-date">2025 ——— Nairobi, KE</div>
                  </div>
                  {/* Subtle top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(to right, var(--accent-bright), transparent)" }}
                  />
                </div>
              </motion.div>

              {/* ── About text ── */}
              <motion.div
                className="md:col-span-7 space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {/* Title */}
                <div style={{ borderBottom: "1px solid var(--border-raw)", paddingBottom: "24px" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3
                      className="font-serif italic font-light"
                      style={{ fontSize: "36px", color: "var(--text-primary)" }}
                    >
                      Full Stack Developer
                    </h3>
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: "var(--accent-bright)" }}
                    />
                  </div>
                  <p
                    className="font-sans font-light text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Passionate about building secure, scalable digital solutions. With over 3 years of
                    enterprise experience, I've helped organisations across legal, energy, and education
                    sectors deliver systems that are robust, efficient, and built to last.
                  </p>
                </div>

                {/* Motto */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-px self-stretch"
                    style={{ background: "rgba(201,168,122,0.3)", minHeight: "48px" }}
                  />
                  <div>
                    <p
                      className="font-serif italic"
                      style={{ fontSize: "28px", color: "var(--text-primary)", lineHeight: 1.1 }}
                    >
                      Invitus Maneo
                    </p>
                    <p
                      className="font-mono mt-1"
                      style={{ fontSize: "9px", letterSpacing: "0.3em", color: "var(--accent-bright)", textTransform: "uppercase", opacity: 0.8 }}
                    >
                      I remain unvanquished
                    </p>
                  </div>
                </div>

                {/* Skills row */}
                <div
                  className="grid grid-cols-3 gap-0"
                  style={{ borderTop: "1px solid var(--border-raw)", borderLeft: "1px solid var(--border-raw)" }}
                >
                  {[
                    { icon: "solar:code-circle-bold", label: "Full Stack" },
                    { icon: "solar:shield-check-bold", label: "Security" },
                    { icon: "solar:server-square-bold", label: "Cloud" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center justify-center py-7 gap-3"
                      style={{
                        borderRight: "1px solid var(--border-raw)",
                        borderBottom: "1px solid var(--border-raw)",
                      }}
                    >
                      <iconify-icon icon={s.icon} width="26" style={{ color: "var(--accent-bright)" }} />
                      <span
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stat strip */}
                <div
                  className="grid grid-cols-3 gap-0"
                  style={{ borderTop: "1px solid var(--border-raw)" }}
                >
                  {[
                    { val: "3+", label: "Years exp." },
                    { val: "15+", label: "Projects" },
                    { val: "5", label: "Enterprise sys." },
                  ].map((st) => (
                    <div
                      key={st.label}
                      className="py-6 text-center"
                      style={{ borderRight: "1px solid var(--border-raw)" }}
                    >
                      <div
                        className="font-serif italic font-light"
                        style={{ fontSize: "40px", color: "var(--text-primary)", lineHeight: 1 }}
                      >
                        {st.val}
                      </div>
                      <div
                        className="font-mono mt-2"
                        style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}
                      >
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-4 pt-2">
                  <Link href="/contact" className="flex-1">
                    <button
                      className="w-full btn-magnetic py-3.5 font-bold"
                      style={{ background: "var(--accent-bright)", color: "var(--bg)" }}
                    >
                      Get in Touch
                    </button>
                  </Link>
                  <Link href="/about" className="flex-1">
                    <button
                      className="w-full btn-magnetic py-3.5 border"
                      style={{
                        borderColor: "rgba(201,168,122,0.4)",
                        color: "var(--accent-bright)",
                        background: "transparent",
                      }}
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SERVICES — Editorial number grid
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
            <div className="section-label">/// What I Offer</div>
            <h2
              className="font-serif font-light italic mb-16"
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
                  className="p-10 flex flex-col gap-5"
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
                    className="font-sans font-light text-base leading-relaxed flex-1"
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
                          className="w-1 h-1 rounded-full flex-shrink-0"
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
                  <button
                    className="btn-magnetic px-10 py-4 font-bold"
                    style={{ background: "var(--accent-bright)", color: "var(--bg)" }}
                  >
                    Start a Project
                  </button>
                </Link>
                <Link href="/projects">
                  <button
                    className="btn-magnetic px-10 py-4 border"
                    style={{
                      borderColor: "rgba(201,168,122,0.4)",
                      color: "var(--accent-bright)",
                      background: "transparent",
                    }}
                  >
                    View My Work
                  </button>
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