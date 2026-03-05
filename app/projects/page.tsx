"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageTransition } from "@/components/page-transition";
import { ProjectModal } from "@/components/project-modal";
import { useProjects } from "@/hooks";
import Footer from "@/components/footer";
import { PORTFOLIO_SUMMARY } from "@/lib/constants";

const ICON_LIST_TO_ICONIFY: Record<string, string> = {
  FaReact:       "simple-icons:react",
  SiNextdotjs:   "simple-icons:nextdotjs",
  SiTailwindcss: "simple-icons:tailwindcss",
  SiTypescript:  "simple-icons:typescript",
  SiFramer:      "simple-icons:framer",
  SiAppwrite:    "simple-icons:appwrite",
  SiPrisma:      "simple-icons:prisma",
  SiPostgresql:  "simple-icons:postgresql",
  SiPhp:         "simple-icons:php",
  SiLaravel:     "simple-icons:laravel",
  SiShadcnui:    "simple-icons:shadcnui",
  SiJavascript:  "simple-icons:javascript",
  SiDocker:      "simple-icons:docker",
};

export default function Projects() {
  const {
    filteredProjects,
    selectedProject,
    isModalOpen,
    openModal,
    closeModal,
    categories,
    filters,
    setFilter,
  } = useProjects();

  const displayCategories = ["All", ...categories];

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
                Selected{" "}
                <span
                  className="font-bold not-italic"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-bright) 0%, var(--text-primary) 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Works
                </span>
              </h1>

              <p
                className="font-sans font-light text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                A showcase of my best projects and technical implementations
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            FILTERS
        ═══════════════════════════════════════════════ */}
        <section
          className="py-10 px-6"
          style={{
            background: "var(--bg-subtle)",
            borderBottom: "1px solid var(--border-raw)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {displayCategories.map((category, i) => {
                const isActive =
                  filters.category === category ||
                  (category === "All" && !filters.category);
                return (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() =>
                      setFilter("category", category === "All" ? null : category)
                    }
                    className="btn-magnetic px-6 py-2.5 transition-all"
                    style={
                      isActive
                        ? {
                            background: "var(--accent-bright)",
                            color: "var(--bg)",
                            border: "1px solid transparent",
                          }
                        : {
                            background: "transparent",
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border-raw)",
                          }
                    }
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            PROJECTS BENTO GRID
        ═══════════════════════════════════════════════ */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section label */}
            <div className="flex items-end justify-between mb-16 pb-8" style={{ borderBottom: "1px solid var(--border-raw)" }}>
              <div>
                <div className="section-label">/// Featured Work</div>
                <h2
                  className="font-serif font-light italic"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
                >
                  Projects
                </h2>
              </div>
              <span
                className="font-mono text-[9px] tracking-widest uppercase hidden md:block"
                style={{ color: "var(--text-muted)" }}
              >
                {filteredProjects.length} Works
              </span>
            </div>

            {/* Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "3px",
              }}
            >
              {filteredProjects.map((project, index) => {
                const isFeatured = index === 0 || index === 3 || index === 6;
                const colSpan = isFeatured ? 2 : 2;
                const rowSpan = isFeatured ? 2 : 1;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    onClick={() => openModal(project)}
                    className="photo-frame group cursor-pointer"
                    style={{
                      gridColumn: `span ${colSpan}`,
                      gridRow: `span ${rowSpan}`,
                      minHeight: isFeatured ? "500px" : "300px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Image */}
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ filter: "grayscale(40%) brightness(0.7)" }}
                    />

                    {/* Gradient overlay - strong at bottom for title visibility */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15,13,10,0.97) 0%, rgba(15,13,10,0.85) 35%, rgba(15,13,10,0.4) 60%, transparent 100%)",
                      }}
                    />

                    {/* Top accent line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(to right, var(--accent-bright), transparent)",
                      }}
                    />

                    {/* Category badge */}
                    <div
                      className="absolute top-5 right-5 font-mono text-[9px] tracking-widest uppercase px-3 py-1 backdrop-blur-sm"
                      style={{
                        border: "1px solid rgba(201,168,122,0.3)",
                        background: "rgba(15,13,10,0.6)",
                        color: "var(--accent-bright)",
                      }}
                    >
                      {project.category}
                    </div>

                    {/* Photo number */}
                    <div
                      className="absolute top-5 left-5 font-mono text-[9px]"
                      style={{ color: "rgba(237,229,216,0.3)", letterSpacing: "0.1em" }}
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                      <h3
                        className="font-serif italic font-light mb-2"
                        style={{
                          fontSize: isFeatured ? "32px" : "22px",
                          color: "rgba(237,229,216,1)",
                          textShadow: "0 1px 2px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="font-sans font-light text-sm mb-5 leading-relaxed max-w-md"
                        style={{
                          color: "rgba(237,229,216,0.85)",
                          textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                        }}
                      >
                        {project.des}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.iconLists.slice(0, 5).map((iconName, idx) => {
                          const iconId = ICON_LIST_TO_ICONIFY[iconName];
                          if (!iconId) return null;
                          return (
                            <div
                              key={idx}
                              className="p-2 backdrop-blur-sm transition-colors"
                              style={{
                                background: "rgba(201,168,122,0.1)",
                                border: "1px solid rgba(201,168,122,0.2)",
                              }}
                            >
                              <iconify-icon
                                icon={iconId}
                                width="14"
                                height="14"
                                style={{ color: "var(--accent-bright)" }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Scan line */}
                    <div className="scan-line" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            PORTFOLIO SUMMARY
        ═══════════════════════════════════════════════ */}
        <section
          className="py-28 px-6"
          style={{
            background: "var(--bg-subtle)",
            borderTop: "1px solid var(--border-raw)",
            borderBottom: "1px solid var(--border-raw)",
          }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-16">
              <div className="section-label">/// Statistics</div>
              <h2
                className="font-serif font-light italic"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
              >
                Portfolio Overview
              </h2>
            </div>

            {/* Stats grid — editorial ruled */}
            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
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
                    className="py-12 px-8 text-center relative"
                    style={{
                      borderRight: "1px solid var(--border-raw)",
                      borderBottom: "1px solid var(--border-raw)",
                    }}
                  >
                    <div
                      className="font-serif italic font-light mb-2"
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
                      className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: "var(--accent-bright)" }}
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </PageTransition>
  );
}