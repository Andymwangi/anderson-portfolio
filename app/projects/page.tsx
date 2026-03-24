"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { useProjects } from "@/hooks";
import Footer from "@/components/footer";
import { LiquidMetalButton } from "@/components/liquid-metal-button";
import { PORTFOLIO_SUMMARY } from "@/lib/constants";
import { ProjectShowcaseCard } from "@/components/project-showcase-card";
import { PageHeroGrid } from "@/components/page-hero-grid";

export default function Projects() {
  const { filteredProjects, categories, filters, setFilter } = useProjects();

  const displayCategories = ["All", ...categories];

  return (
    <PageTransition>
      <div className="noise-overlay" />

      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
        <div className="fixed inset-0 -z-50 bg-[#FAFAFA] dark:bg-[#0D0D0D]" />

        <PageHeroGrid
          sectionLabel="/// Work"
          title={
            <h1
              className="font-serif font-light italic"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                color: "var(--text-primary)",
                lineHeight: 0.98,
              }}
            >
              Selected{" "}
              <span className="font-bold not-italic" style={{ color: "var(--accent-bright)" }}>
                Works
              </span>
            </h1>
          }
          leftFooter={
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.28em",
                color: "var(--accent-bright)",
                opacity: 0.85,
              }}
            >
              Case studies · Live systems
            </p>
          }
        >
          <p className="font-serif italic leading-relaxed md:text-xl" style={{ color: "var(--text-secondary)" }}>
            A showcase of my best projects and technical implementations.
          </p>
          <p className="font-sans text-base font-light leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
            Filter by category to explore product work, platforms, and experiments — each with context, stack, and
            outcomes.
          </p>
        </PageHeroGrid>

        <section
          className="px-6 py-10"
          style={{
            background: "var(--bg-subtle)",
            borderBottom: "1px solid var(--border-raw)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-3">
              {displayCategories.map((category, i) => {
                const isActive =
                  filters.category === category || (category === "All" && !filters.category);
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <LiquidMetalButton
                      variant={isActive ? "filled" : "outline"}
                      className="px-6 py-2.5"
                      onClick={() => setFilter("category", category === "All" ? null : category)}
                    >
                      {category}
                    </LiquidMetalButton>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-0 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
            <div
              className="mb-14 flex flex-col items-end justify-between gap-4 pb-8 md:flex-row md:items-end"
              style={{ borderBottom: "1px solid var(--border-raw)" }}
            >
              <div>
                <div className="section-label">/// Featured work</div>
                <h2
                  className="font-serif font-light italic"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
                >
                  Project details
                </h2>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                {filteredProjects.length} works
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-[1400px]">
            {filteredProjects.map((project, index) => (
              <ProjectShowcaseCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section
          className="px-6 py-28"
          style={{
            background: "var(--bg-subtle)",
            borderTop: "1px solid var(--border-raw)",
            borderBottom: "1px solid var(--border-raw)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <div className="section-label">/// Statistics</div>
              <h2
                className="font-serif font-light italic"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
              >
                Portfolio overview
              </h2>
            </div>

            <div
              className="grid grid-cols-2 lg:grid-cols-4"
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
              }}
            >
              {PORTFOLIO_SUMMARY.map(
                (stat: { number: string; label: string }, index: number) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative px-8 py-12 text-center"
                    style={{
                      borderRight: "1px solid var(--border-raw)",
                      borderBottom: "1px solid var(--border-raw)",
                    }}
                  >
                    <div
                      className="mb-2 font-serif font-light italic"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: "var(--text-primary)",
                        lineHeight: 1,
                      }}
                    >
                      <span style={{ color: "var(--accent-bright)" }}>{stat.number}</span>
                    </div>
                    <div
                      className="font-mono uppercase tracking-widest"
                      style={{ fontSize: "9px", color: "var(--text-muted)" }}
                    >
                      {stat.label}
                    </div>
                    <span
                      className="absolute right-4 top-4 h-1.5 w-1.5 animate-pulse rounded-full"
                      style={{ background: "var(--accent-bright)" }}
                    />
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
