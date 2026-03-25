"use client";

/// <reference path="../../iconify-icon.d.ts" />
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { AboutTechStack } from "@/components/about-tech-stack";
import { GitHubContributionsCalendar } from "@/components/github-contributions-calendar";
import { LiquidMetalButton } from "@/components/liquid-metal-button";
import { PageHeroGrid } from "@/components/page-hero-grid";

/* ── Types ────────────────────────────────────────────── */
type Hobby = { icon: string; title: string; description: string; frequency: string; details?: string[]; quote?: string };

/* ── Data ─────────────────────────────────────────────── */
const hobbies: Hobby[] = [
  {
    icon: "solar:dumbbell-bold",
    title: "The Power Station",
    description: "Strength training is my bedrock for discipline. Push/Pull/Legs split to maintain peak physical and mental performance.",
    frequency: "4× per week",
    details: ["Push: Chest, Shoulders, Triceps", "Pull: Back, Biceps — controlled movements", "Legs: Foundation of all strength", "Fuel: High-protein (Chicken, Rice, Shakes)"],
  },
  {
    icon: "solar:book-bold",
    title: "Reading & Philosophy",
    description: "Consuming books that challenge mental models — strategy, psychology, and technical mastery.",
    frequency: "Daily",
    quote: "The quality of your life is the quality of your relationships with yourself and others.",
    details: ["Atomic Habits — Systems design for life", "The Psychology of Money — Financial mindset", "Deep Work — Mastering focus in a noisy world"],
  },
  {
    icon: "solar:waterdrops-bold",
    title: "The Rhythm Section",
    description: "Music is my engine for productivity. Hip-hop, R&B soul, and reggae while architecting systems.",
    frequency: "Constant",
    details: ["Hip-Hop: Kendrick Lamar, Nas, Outkast", "Soul & R&B: Lauryn Hill, Neo-Soul classics", "Reggae & Pop: High-energy coding sessions"],
  },
];

export default function AboutPage() {
  const router = useRouter();

  return (
    <PageTransition>
      <div className="noise-overlay" />
      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
        <div className="fixed inset-0 -z-50 dark:bg-[#0D0D0D] bg-[#FAFAFA]" />

        <PageHeroGrid
          sectionLabel="/// About"
          title={
            <h1
              className="font-serif font-light italic"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                color: "var(--text-primary)",
                lineHeight: 0.98,
              }}
            >
              My{" "}
              <span className="font-bold not-italic" style={{ color: "var(--accent-bright)" }}>
                Journey
              </span>
            </h1>
          }
          leftFooter={
            <>
              <p className="font-serif italic" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", color: "var(--text-primary)", lineHeight: 1.2 }}>
                Invitus Maneo
              </p>
              <p
                className="mt-2 font-mono uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  color: "var(--accent-bright)",
                  opacity: 0.85,
                }}
              >
                I remain unvanquished
              </p>
            </>
          }
        >
          <p className="font-serif italic leading-relaxed md:text-xl" style={{ color: "var(--text-secondary)" }}>
            From curiosity to expertise in digital security, full-stack development, cloud engineering, and DevOps.
          </p>
          <p className="font-sans text-base font-light leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
            As a full-stack developer with expertise in cybersecurity and DevOps, I bring a unique blend of skills to
            every project — combining technical excellence with deep security principles.
          </p>
          <div
            className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--border-raw)" }}
          >
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              <iconify-icon icon="solar:map-point-bold" width="14" style={{ color: "var(--accent-bright)" }} />
              Nairobi, Kenya · Worldwide
            </div>
            <div className="flex gap-2">
              <LiquidMetalButton variant="outline" className="px-5 py-2.5 text-[10px]" onClick={() => router.push("/about#tech-stack")}>
                View stack
              </LiquidMetalButton>
              <LiquidMetalButton variant="filled" className="px-5 py-2.5 text-[10px]" onClick={() => router.push("/contact")}>
                Contact
              </LiquidMetalButton>
            </div>
          </div>
        </PageHeroGrid>

        {/* ═══════════════════════════════════════════════
            MISSION — immediately after intro
        ═══════════════════════════════════════════════ */}
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-10 px-8"
            >
              <div className="inline-flex p-4 mb-6" style={{ background: "rgba(var(--accent-rgb) / 0.08)" }}>
                <iconify-icon icon="solar:target-bold" width="40" style={{ color: "var(--accent-bright)" }} />
              </div>
              <div className="section-label justify-center mb-4">/// My Mission</div>
              <h2 className="font-serif italic font-light mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}>
                What Drives Me
              </h2>
              <p className="font-serif italic text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                To bridge the gap between cutting-edge technology and robust security — creating solutions that are{" "}
                <span className="font-semibold not-italic" style={{ color: "var(--accent-bright)" }}>secure by design</span>,{" "}
                <span className="font-semibold not-italic" style={{ color: "var(--accent-bright)" }}>scalable by nature</span>, and{" "}
                <span className="font-semibold not-italic" style={{ color: "var(--accent-bright)" }}>accessible to all</span>.
              </p>
            </motion.div>
          </div>
        </section>

        <AboutTechStack />

        {/* ═══════════════════════════════════════════════
            HOBBIES
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 px-6 md:px-12 lg:px-20"
          style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="section-label">/// Beyond Code</div>
            <h2 className="font-serif font-light italic mb-16" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}>
              Hobbies & Interests
            </h2>

            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn("p-8 flex flex-col", index === 0 ? "col-span-3 md:col-span-1" : "")}
                  style={{ borderRight: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 flex-shrink-0" style={{ background: "rgba(var(--accent-rgb) / 0.08)" }}>
                      <iconify-icon icon={hobby.icon} width="24" style={{ color: "var(--accent-bright)" }} />
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif italic font-light" style={{ fontSize: "22px", color: "var(--text-primary)" }}>
                          {hobby.title}
                        </h3>
                      </div>
                      <p className="font-mono text-[9px] tracking-widest uppercase mt-1" style={{ color: "var(--accent-bright)" }}>
                        {hobby.frequency}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans font-light text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {hobby.description}
                  </p>

                  {hobby.quote && (
                    <div className="mb-5 pl-4" style={{ borderLeft: "2px solid rgba(var(--accent-rgb) / 0.25)" }}>
                      <p className="font-serif italic text-sm" style={{ color: "var(--text-primary)" }}>
                        "{hobby.quote}"
                      </p>
                    </div>
                  )}

                  {hobby.details && (
                    <div className="mt-auto pt-5 space-y-2" style={{ borderTop: "1px solid var(--border-faint)" }}>
                      {hobby.details.map((d, i) => (
                        <p key={i} className="flex items-start gap-2 font-mono text-[10px] tracking-wide" style={{ color: "var(--text-muted)" }}>
                          <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: "var(--accent-bright)" }} />
                          {d}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            GitHub activity
        ═══════════════════════════════════════════════ */}
        <section
          className="border-t px-6 py-20 md:px-12 md:py-24 lg:px-20"
          style={{ borderColor: "var(--border-raw)", background: "var(--bg)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0"
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
              }}
            >
              <div
                className="flex flex-col justify-center p-8 md:p-10 lg:col-span-4"
                style={{
                  borderRight: "1px solid var(--border-raw)",
                  borderBottom: "1px solid var(--border-raw)",
                  background: "var(--bg)",
                }}
              >
                <div className="section-label mb-6">/// Open source</div>
                <h2
                  className="font-serif font-light italic leading-tight"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.35rem)", color: "var(--text-primary)" }}
                >
                  Coding{" "}
                  <span className="font-bold not-italic" style={{ color: "var(--accent-bright)" }}>
                    rhythm
                  </span>
                </h2>
                <p className="mt-5 font-sans text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Public commits on GitHub over the last year — same cadence as shipping client work and side projects.
                </p>
              </div>
              <div
                className="p-8 md:p-10 lg:col-span-8"
                style={{
                  borderRight: "1px solid var(--border-raw)",
                  borderBottom: "1px solid var(--border-raw)",
                  background: "rgba(var(--accent-rgb) / 0.04)",
                }}
              >
                <GitHubContributionsCalendar />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 px-6 md:px-12 lg:px-20"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--border-raw)" }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="px-6 py-14 md:px-12 md:py-16"
              style={{
                border: "1px solid var(--border-raw)",
                background: "rgba(var(--accent-rgb) / 0.04)",
              }}
            >
              <div className="section-label justify-center mb-4">/// Next step</div>
              <h2
                className="mb-5 font-serif font-light italic"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)" }}
              >
                Let&apos;s build something that lasts
              </h2>
              <p
                className="mx-auto mb-10 max-w-xl font-sans font-light leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Open to full-stack, mobile, and security-minded collaborations — from product teams to freelance engagements.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <LiquidMetalButton variant="filled" className="px-8 py-3" onClick={() => router.push("/contact")}>
                  Get in touch
                </LiquidMetalButton>
                <LiquidMetalButton variant="outline" className="px-8 py-3" onClick={() => router.push("/projects")}>
                  View work
                </LiquidMetalButton>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}