"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { useState } from "react";

type Experience = {
  solarIcon: string;
  date: string;
  title: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    solarIcon: "solar:smartphone-bold",
    date: "Feb 2026 – Present",
    title: "Mobile & Backend Developer",
    company: "Tradecare Africa Limited",
    location: "Nairobi, Kenya",
    type: "Full-time",
    summary:
      "Building Farm Data Pod (FDP) — a comprehensive offline-first agricultural data management platform covering the full producer value chain.",
    achievements: [
      "Developing Farm Data Pod (FDP), a full-featured mobile application built with Expo (React Native) and TypeScript that manages agricultural data across an organisation's entire value chain — from producer registration and field management through crop production, input distribution, scouting, and seasonal planning.",
      "Architecting role-based dashboards and multi-module workflows tailored to each user's responsibilities (field agents, agronomists, supervisors, and organisation admins), enabling contextual data entry and reporting at every stage of production.",
      "Implementing an offline-first data management layer so field agents can continue recording producer and farm data in areas with limited or no connectivity, with seamless sync when back online.",
      "Designing and maintaining RESTful backend APIs to support producer registration, field surveys, input tracking, scouting reports, and seasonal planning modules.",
      "Collaborating with agronomists and product stakeholders to translate complex agricultural workflows into intuitive mobile UX, reducing data entry errors and improving field agent efficiency.",
    ],
    technologies: [
      "Expo",
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Offline-first sync",
      "Role-based access control",
    ],
  },
  {
    solarIcon: "solar:code-circle-bold",
    date: "May 2025 – Present",
    title: "Software Engineer",
    company: "Coseke Kenya Limited",
    location: "Nairobi, Kenya",
    type: "Full-time",
    summary:
      "Architected legal management systems serving 200+ officers, reducing case processing time by 70%.",
    achievements: [
      "Architected SRC Legal Management System serving 200+ legal officers managing 5,000+ civil and employment cases, reducing case processing time by 70%.",
      "Integrated Contract Lifecycle Management module processing 300+ annual supplier contracts with 60% reduction in review time and ensuring 100% compliance with Kenyan procurement regulations.",
      "Developed TotalEnergies Contract Lifecycle Management System (CLMS) managing petroleum contracts valued at KES 500M+ with 45% workload reduction through automated expiration alerts.",
      "Led backend optimisation initiatives improving API response times by 50% and reducing server load by 35% through Redis caching and PostgreSQL indexing.",
      "Contributed to ICT Authority's EDRMS implementation, improving government document retrieval efficiency by 55%.",
      "Established security protocols including JWT authentication and role-based access controls, preventing 500+ potential security threats while maintaining GDPR compliance.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Material UI",
      "Docker",
    ],
  },
  {
    solarIcon: "solar:case-round-bold",
    date: "Jan 2023 – Present",
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Nairobi, Kenya (Remote)",
    type: "Freelance",
    summary:
      "Delivered 15+ custom applications generating KES 300,000+ revenue increases per client.",
    achievements: [
      "Delivered 15+ custom web and mobile applications generating average revenue increases of KES 300,000+ per client across e-commerce, education, and healthcare sectors.",
      "Built USIU E-Counselling Platform serving 3,000+ students with real-time appointment booking, reducing scheduling conflicts by 80% and enabling 500+ monthly counselling sessions.",
      "Developed blockchain-based E-Voting System enabling 1,500+ students to vote securely with biometric authentication, increasing election participation by 40% and achieving 100% audit trail accuracy.",
      "Engineered e-commerce platforms processing KES 5M+ in transactions, reducing cart abandonment by 25% and improving conversion rates by 30% through optimised checkout flows.",
      "Improved average website load speeds by 40% and user experience scores by 35% across all projects through Next.js SSR and performance optimisation.",
      "Achieved 85% client satisfaction rate and 60% client retention through quality delivery and comprehensive technical support.",
    ],
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Blockchain",
      "Stripe",
      "M-Pesa",
    ],
  },
  {
    solarIcon: "solar:layers-minimalistic-bold",
    date: "Jan 2024 – Sep 2024",
    title: "IT Intern – Digital Systems & Database Management",
    company: "Office of the Registrar of Political Parties (ORPP)",
    location: "Nairobi, Kenya",
    type: "Internship",
    summary:
      "Digitised 10,000+ political party records, reducing document search time by 60%.",
    achievements: [
      "Spearheaded digitisation initiative for 10,000+ political party records, reducing document search time by 60% from hours to minutes through optimised database indexing.",
      "Developed automated Python scripts for data validation and migration, processing 50,000+ records and reducing manual data entry workload by 30% while improving accuracy by 25%.",
      "Enhanced Digital File Management System (DFMS) improving document accessibility by 45% and reducing processing times by 35% for 500+ government users.",
      "Implemented advanced search functionality with filters, pagination, and autocomplete reducing document retrieval from days to seconds.",
      "Collaborated with cross-functional teams to establish data quality standards eliminating 95% of data entry errors.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "OCR",
      "Pandas",
      "Elasticsearch",
    ],
  },
  {
    solarIcon: "solar:shield-check-bold",
    date: "Sep 2023 – Jan 2024",
    title: "IT Intern – Legal Information Systems",
    company: "Kenya Law",
    location: "Nairobi, Kenya",
    type: "Internship",
    summary:
      "Optimised databases for 500+ legal professionals, reducing search time by 40%.",
    achievements: [
      "Optimised case law databases serving 500+ legal professionals, implementing advanced search functionality and indexing strategies that reduced average search time by 40%.",
      "Developed automated document archiving solutions processing 8,000+ legal documents with drag-and-drop functionality, reducing manual filing time by 50%.",
      "Conducted comprehensive system testing identifying and resolving 75+ critical bugs, improving software stability by 40% and achieving 95%+ test coverage.",
      "Implemented relevance ranking algorithms improving search result accuracy by 30%.",
      "Created intuitive document management dashboard with real-time progress tracking, enhancing user experience scores by 45%.",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Elasticsearch",
      "Jest",
      "Document Management APIs",
    ],
  },
  {
    solarIcon: "solar:diploma-bold",
    date: "2021 – 2025",
    title: "BSc Information Technology",
    company: "JKUAT",
    location: "Nairobi, Kenya",
    type: "Education",
    summary:
      "Graduated with Second Class Honors (Upper Division), specialised in secure system design.",
    achievements: [
      "Graduated with Second Class Honors (Upper Division) from Jomo Kenyatta University of Agriculture and Technology.",
      "Built solid foundation in algorithms, data structures, software engineering, database management, network architecture, and cloud computing.",
      "Developed hands-on projects in Python, JavaScript, React, and Node.js demonstrating practical application of theoretical knowledge.",
      "Specialised in secure system design and database optimisation with focus on enterprise-grade solutions.",
    ],
    technologies: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "Java",
      "C++",
      "SQL",
      "Cloud Computing",
    ],
  },
];

export default function ExperiencePage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
                  Experience
                </span>
              </h1>

              <p
                className="font-sans font-light text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Building enterprise solutions that solve real problems and deliver measurable impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            TIMELINE — Editorial list
        ═══════════════════════════════════════════════ */}
        <section
          className="py-28 px-6 md:px-12 lg:px-20 relative z-20"
          style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-raw)" }}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div
              className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8"
              style={{ borderBottom: "1px solid var(--border-raw)" }}
            >
              <div>
                <div className="section-label">/// Timeline</div>
                <h2
                  className="font-serif font-light italic"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}
                >
                  Career Highlights
                </h2>
              </div>
              <p
                className="font-sans font-light text-sm hidden md:block max-w-xs text-right"
                style={{ color: "var(--text-secondary)" }}
              >
                From education to enterprise — delivering impact across industries
              </p>
            </div>

            {/* Experience cards — editorial ruled rows */}
            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
              }}
            >
              {experiences.map((exp, index) => {
                const isExpanded = expandedCards.includes(index);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    style={{
                      borderRight: "1px solid var(--border-raw)",
                      borderBottom: "1px solid var(--border-raw)",
                    }}
                  >
                    {/* Header row — always visible */}
                    <div
                      className="grid p-8 md:p-10 cursor-pointer group/card transition-colors"
                      style={{
                        gridTemplateColumns: "auto 1fr auto",
                        gap: "32px",
                        alignItems: "start",
                      }}
                      onClick={() => toggleCard(index)}
                    >
                      {/* Left: number + icon */}
                      <div className="flex flex-col items-center gap-3 pt-1">
                        <div
                          className="font-serif italic font-light"
                          style={{ fontSize: "28px", color: "var(--border-raw)", lineHeight: 1 }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div
                          className="p-2.5 relative"
                          style={{
                            background: "rgba(201,168,122,0.08)",
                            border: "1px solid rgba(201,168,122,0.18)",
                          }}
                        >
                          <iconify-icon
                            icon={exp.solarIcon}
                            width="20"
                            style={{ color: "var(--accent-bright)" }}
                          />
                          <span
                            className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ background: "var(--accent-bright)" }}
                          />
                        </div>
                      </div>

                      {/* Centre: info */}
                      <div>
                        <p
                          className="font-mono uppercase tracking-widest mb-2"
                          style={{ fontSize: "9px", color: "var(--accent-bright)" }}
                        >
                          {exp.date}
                        </p>
                        <h3
                          className="font-serif italic font-light mb-1"
                          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "var(--text-primary)" }}
                        >
                          {exp.title}
                        </h3>
                        <p
                          className="font-sans font-light mb-1"
                          style={{ fontSize: "14px", color: "var(--accent-bright)" }}
                        >
                          {exp.company}
                        </p>
                        <p
                          className="font-mono"
                          style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}
                        >
                          {exp.location} · {exp.type}
                        </p>

                        {/* Summary — always shown */}
                        <p
                          className="font-sans font-light text-sm leading-relaxed mt-4"
                          style={{ color: "var(--text-secondary)", maxWidth: "640px" }}
                        >
                          {exp.summary}
                        </p>
                      </div>

                      {/* Right: expand toggle */}
                      <button
                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-colors mt-1"
                        style={{
                          border: "1px solid var(--border-raw)",
                          background: isExpanded ? "rgba(201,168,122,0.12)" : "transparent",
                          color: "var(--accent-bright)",
                        }}
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                      >
                        <iconify-icon
                          icon={isExpanded ? "solar:minus-circle-bold" : "solar:add-circle-bold"}
                          width="20"
                          style={{ color: "var(--accent-bright)" }}
                        />
                      </button>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-8 md:px-10 pb-10"
                            style={{
                              borderTop: "1px solid var(--border-raw)",
                              paddingTop: "32px",
                              marginLeft: "calc(28px + 32px + 52px)", /* align with content column */
                            }}
                          >
                            {/* Achievements */}
                            <div className="mb-8">
                              <div className="section-label mb-5">Key Achievements</div>
                              <ul className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <span
                                      className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                                      style={{ background: "var(--accent-bright)" }}
                                    />
                                    <span
                                      className="font-sans font-light text-sm leading-relaxed"
                                      style={{ color: "var(--text-secondary)" }}
                                    >
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <div className="section-label mb-4">Technologies</div>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="font-mono"
                                    style={{
                                      fontSize: "9px",
                                      letterSpacing: "0.1em",
                                      textTransform: "uppercase",
                                      padding: "5px 10px",
                                      border: "1px solid var(--border-raw)",
                                      color: "var(--text-muted)",
                                      background: "rgba(201,168,122,0.04)",
                                    }}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SUMMARY STATS
        ═══════════════════════════════════════════════ */}
        <section
          className="py-28 px-6 md:px-12 lg:px-20 relative z-20"
          style={{ background: "var(--bg)" }}
        >
          <div className="max-w-7xl mx-auto">

            <div className="mb-16">
              <div className="section-label">/// Impact</div>
              <h2
                className="font-serif font-light italic"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--text-primary)" }}
              >
                By The Numbers
              </h2>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {[
                { number: "3+", label: "Years Experience" },
                { number: "10,000+", label: "Users Served" },
                { number: "20+", label: "Projects Delivered" },
                { number: "70%", label: "Avg Efficiency Gain" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
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
                      color: "var(--accent-bright)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
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
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}