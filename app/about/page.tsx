"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import { useState } from "react";
import { cn } from "@/lib/utils";

const World = dynamic(() => import("@/components/globe"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-[300px] h-[300px]">
      <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--text-muted)" }}>
        Loading...
      </span>
    </div>
  ),
});

/* ── Types ────────────────────────────────────────────── */
type TimelineEvent  = { icon: string; date: string; title: string; summary: string; description: string };
type DayActivity    = { icon1: string; icon2: string; title: string; time: string; description: string; details: string[] };
type Hobby          = { icon: string; title: string; description: string; frequency: string; details?: string[]; quote?: string };

/* ── Data ─────────────────────────────────────────────── */
const timelineEvents: TimelineEvent[] = [
  {
    icon: "solar:code-bold",
    date: "May 2025 – Present",
    title: "Software Engineer · Coseke Kenya Limited",
    summary: "Architected legal management systems serving 200+ officers, reducing case processing time by 70%",
    description: `• Architected SRC Legal Management System serving 200+ legal officers managing 5,000+ civil and employment cases, reducing case processing time by 70%
• Integrated Contract Lifecycle Management module processing 300+ annual contracts with 60% reduction in review time and 100% compliance with Kenyan procurement regulations
• Developed TotalEnergies CLMS managing petroleum contracts valued at KES 500M+ with 45% workload reduction
• Led backend optimisation improving API response times by 50% and reducing server load by 35% through Redis caching and database indexing
• Contributed to ICT Authority EDRMS improving document retrieval efficiency by 55% for government digitisation
• Established JWT authentication and role-based access controls, preventing 500+ potential security threats while maintaining GDPR compliance`,
  },
  {
    icon: "solar:briefcase-bold",
    date: "Jan 2023 – Present",
    title: "Freelance Full-Stack Developer",
    summary: "Delivered 15+ custom applications generating KES 300,000+ revenue increases per client",
    description: `• Delivered 15+ custom web and mobile applications for startups and SMEs, generating average revenue increases of KES 300,000+ per client
• Built USIU E-Counselling Platform serving 3,000+ students with 80% reduction in scheduling conflicts
• Developed blockchain-based E-Voting System enabling 1,500+ students to vote securely with 40% increased participation
• Improved average website load speeds by 40% and UX scores by 35% through performance optimisation
• Achieved 85% client satisfaction rate and 60% client retention through quality delivery`,
  },
  {
    icon: "solar:layers-bold",
    date: "Jan 2024 – Sep 2024",
    title: "IT Intern · Office of the Registrar of Political Parties",
    summary: "Digitised 10,000+ political party records, reducing document search time by 60%",
    description: `• Spearheaded digitisation initiative for 10,000+ political party records, reducing document search time by 60%
• Developed automated Python scripts for data validation and migration, processing 50,000+ records
• Collaborated with cross-functional teams to enhance DFMS, improving document accessibility by 45%`,
  },
  {
    icon: "solar:shield-check-bold",
    date: "Sep 2023 – Jan 2024",
    title: "IT Intern · Kenya Law",
    summary: "Optimised databases for 500+ legal professionals, reducing search time by 40%",
    description: `• Optimised case law databases serving 500+ legal professionals, reducing average search time by 40%
• Developed automated document archiving solutions processing 8,000+ legal documents
• Identified and resolved 75+ critical issues, improving software stability by 40%`,
  },
  {
    icon: "solar:graduation-cap-bold",
    date: "2021 – 2025",
    title: "BSc Information Technology · JKUAT",
    summary: "Graduated Second Class Honors (Upper Division), specialised in secure system design",
    description: `• Graduated with Second Class Honors (Upper Division) from Jomo Kenyatta University of Agriculture and Technology
• Built foundation in algorithms, data structures, software engineering, database management, network architecture, and cloud computing
• Specialised in secure system design and database optimisation with focus on enterprise-grade solutions`,
  },
  {
    icon: "solar:shield-check-bold",
    date: "2024",
    title: "Professional Certifications",
    summary: "Cisco Cybersecurity, Python for Data Science, IBM Data Engineering",
    description: `• Earned Junior Cybersecurity Certificate from Cisco Networking Academy
• Completed Endpoint Security Certificate from Cisco
• Currently pursuing CyberOps Associate Certification (Cisco) and ALX Backend Development Course
• Python for Data Science Certificate and IBM Data Engineering Certificate`,
  },
];

const dayActivities: DayActivity[] = [
  {
    icon1: "solar:cup-bold",
    icon2: "solar:server-bold",
    title: "Morning: The Architect",
    time: "9:00 AM – 12:00 PM",
    description: "The day begins at Coseke. Architecting backend microservices, designing secure APIs, and ensuring database schemas are robust and scalable.",
    details: ["Review pull requests and code quality", "Design microservices architecture", "Optimise database schemas and queries", "Implement Docker configurations", "Write clean, maintainable code"],
  },
  {
    icon1: "solar:shield-check-bold",
    icon2: "solar:magnifier-bold",
    title: "Midday: The Analyst",
    time: "12:00 PM – 1:00 PM",
    description: "Switching hats to cybersecurity analyst. Scanning threat intelligence feeds, reviewing firewall logs, hunting for vulnerabilities.",
    details: ["Monitor threat intelligence feeds", "Review firewall and security logs", "Conduct vulnerability assessments", "Implement security best practices", "Stay updated on latest threats"],
  },
  {
    icon1: "solar:code-bold",
    icon2: "solar:cloud-bold",
    title: "Afternoon: The Builder",
    time: "1:00 PM – 5:00 PM",
    description: "Back to development. Writing Python and Go, deploying services to AWS, configuring CI/CD pipelines.",
    details: ["Develop features in Python and Go", "Deploy services to AWS", "Configure CI/CD pipelines", "Implement automated testing", "Optimise application performance"],
  },
  {
    icon1: "solar:moon-bold",
    icon2: "solar:laptop-bold",
    title: "Evening: The Freelance Maverick",
    time: "7:00 PM onwards",
    description: "The corporate day is done but the passion isn't. Diving into freelance projects, helping startups build MVPs or securing their applications.",
    details: ["Work on freelance client projects", "Build MVPs for startups", "Implement security solutions", "Experiment with new technologies", "Push creative boundaries"],
  },
];

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

const inspirations = [
  {
    name: "Linus Torvalds",
    role: "Founder, Linux & Git",
    icon: "solar:code-square-bold",
    lesson: "The power of open-source and version control architecture.",
    detail: "His focus on efficiency and the creation of Git changed software engineering forever.",
  },
  {
    name: "Warren Buffett",
    role: "The Oracle of Omaha",
    icon: "solar:banknote-bold",
    lesson: "Strategic non-action and extreme discipline in financial systems.",
    detail: "Holding quality assets indefinitely mirrors my approach to clean, long-term code.",
  },
  {
    name: "Jeff Bezos",
    role: "Founder, Amazon",
    icon: "solar:cart-large-bold",
    lesson: "Pioneering marketplace systems and customer-centric engineering.",
    detail: "The 'Day 1' mentality: approaching every project with curiosity and urgency.",
  },
];

const cinematicLore = [
  { title: "Interstellar",       icon: "solar:stars-bold",             quote: "We used to look up at the sky and wonder at our place in the stars.", theme: "Exploration & Resolve" },
  { title: "Mr. Robot",          icon: "solar:code-circle-bold",       quote: "Control is an illusion.",                                            theme: "Cybersecurity & Reality" },
  { title: "The Social Network", icon: "solar:users-group-rounded-bold",quote: "A million dollars isn't cool. You know what's cool? A billion dollars.", theme: "Ambition & Engineering" },
  { title: "Inception",          icon: "solar:layers-bold",            quote: "Your mind is the scene of the crime.",                               theme: "Complexity & Dreams" },
  { title: "Whiplash",           icon: "solar:music-note-bold",        quote: "There are no two words more harmful than 'good job'.",               theme: "Pursuit of Greatness" },
];

/* ── Shared style helpers ─────────────────────────────── */
const cardStyle = {
  borderBottom: "1px solid var(--border-raw)",
  background: "transparent",
};

export default function AboutPage() {
  const [expandedTimeline, setExpandedTimeline]   = useState<number[]>([]);
  const [expandedActivities, setExpandedActivities] = useState<number[]>([]);

  const toggleTimeline = (i: number) =>
    setExpandedTimeline((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);
  const toggleActivity = (i: number) =>
    setExpandedActivities((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

  return (
    <PageTransition>
      <div className="noise-overlay" />
      <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
        <div className="fixed inset-0 -z-50 dark:bg-[#0F0D0A] bg-[#F7F4EF]" />

        {/* ═══════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════ */}
        <section className="relative min-h-screen w-full flex items-center justify-center py-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h1
                  className="font-serif font-light italic mb-6"
                  style={{ fontSize: "clamp(4.5rem, 9vw, 7.5rem)", color: "var(--text-primary)", lineHeight: 0.95 }}
                >
                  My{" "}
                  <span className="font-bold not-italic" style={{ color: "var(--accent-bright)" }}>
                    Journey
                  </span>
                </h1>

                <p className="font-serif italic text-2xl mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  From curiosity to expertise in digital security, full-stack development, cloud engineering, and DevOps.
                </p>
                <p className="font-sans font-light text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
                  As a full-stack developer with expertise in cybersecurity and DevOps, I bring a unique blend
                  of skills to every project — combining technical excellence with deep security principles.
                </p>

                {/* Location + motto */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                    <iconify-icon icon="solar:map-point-bold" width="14" style={{ color: "var(--accent-bright)" }} />
                    Based in Nairobi, Kenya · Available Worldwide
                  </div>

                  <div
                    className="flex items-start gap-4 pl-4"
                    style={{ borderLeft: "2px solid rgba(201,168,122,0.25)" }}
                  >
                    <div>
                      <p className="font-serif italic" style={{ fontSize: "26px", color: "var(--text-primary)", lineHeight: 1.1 }}>
                        Invitus Maneo
                      </p>
                      <p className="font-mono mt-1" style={{ fontSize: "9px", letterSpacing: "0.3em", color: "var(--accent-bright)", textTransform: "uppercase", opacity: 0.8 }}>
                        I remain unvanquished
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Globe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative p-8"
                style={{ borderBottom: "1px solid var(--border-raw)" }}
              >
                <div className="scan-line" />
                <div className="flex items-center justify-center">
                  <World />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
              <div className="inline-flex p-4 mb-6" style={{ background: "rgba(201,168,122,0.08)" }}>
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

        {/* ═══════════════════════════════════════════════
            TIMELINE
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 px-6 md:px-12 lg:px-20"
          style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="section-label">/// Experience</div>
            <h2 className="font-serif font-light italic mb-16" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}>
              Professional Journey
            </h2>

            <div>
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                  style={cardStyle}
                >
                  <div className="py-8 flex flex-col gap-6">
                    {/* Header row */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Icon + date */}
                      <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                        <div
                          className="p-3 inline-flex"
                          style={{ background: "rgba(201,168,122,0.08)", border: "1px solid rgba(201,168,122,0.15)" }}
                        >
                          <iconify-icon icon={event.icon} width="24" style={{ color: "var(--accent-bright)" }} />
                        </div>
                        <p className="font-mono text-[9px] tracking-widest uppercase" style={{ color: "var(--accent-bright)" }}>
                          {event.date}
                        </p>
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="font-serif italic font-light mb-2" style={{ fontSize: "24px", color: "var(--text-primary)" }}>
                          {event.title}
                        </h3>
                        <p className="font-sans font-light text-base" style={{ color: "var(--text-secondary)" }}>
                          {event.summary}
                        </p>
                      </div>

                      {/* Expand */}
                      <button
                        onClick={() => toggleTimeline(index)}
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center transition-colors"
                        style={{ border: "1px solid var(--border-raw)" }}
                      >
                        <iconify-icon
                          icon={expandedTimeline.includes(index) ? "solar:minus-circle-bold" : "solar:add-circle-bold"}
                          width="18"
                          style={{ color: "var(--accent-bright)" }}
                        />
                      </button>
                    </div>

                    {/* Expanded */}
                    <AnimatePresence>
                      {expandedTimeline.includes(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5" style={{ borderTop: "1px solid var(--border-faint)" }}>
                            <div className="space-y-2">
                              {event.description.split("\n").map((line, idx) =>
                                line.trim() ? (
                                  <p key={idx} className="flex items-start gap-3 font-sans font-light text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                    {line.startsWith("•") ? (
                                      <>
                                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: "var(--accent-bright)" }} />
                                        <span>{line.substring(1).trim()}</span>
                                      </>
                                    ) : (
                                      <span>{line}</span>
                                    )}
                                  </p>
                                ) : null
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            DAY IN THE LIFE
        ═══════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="section-label">/// Daily Routine</div>
            <h2 className="font-serif font-light italic mb-16" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}>
              A Day in the Life
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
              }}
            >
              {dayActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-8 flex flex-col gap-4"
                  style={{
                    borderRight: "1px solid var(--border-raw)",
                    borderBottom: "1px solid var(--border-raw)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex gap-2 flex-shrink-0">
                        {[activity.icon1, activity.icon2].map((ic) => (
                          <div key={ic} className="p-2.5" style={{ background: "rgba(201,168,122,0.08)" }}>
                            <iconify-icon icon={ic} width="18" style={{ color: "var(--accent-bright)" }} />
                          </div>
                        ))}
                      </div>
                      <div>
                        <h3 className="font-serif italic font-light" style={{ fontSize: "22px", color: "var(--text-primary)" }}>
                          {activity.title}
                        </h3>
                        <p className="font-mono text-[9px] tracking-widest mt-1" style={{ color: "var(--accent-bright)" }}>
                          {activity.time}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleActivity(index)}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                      style={{ border: "1px solid var(--border-raw)" }}
                    >
                      <iconify-icon
                        icon={expandedActivities.includes(index) ? "solar:minus-circle-bold" : "solar:add-circle-bold"}
                        width="16"
                        style={{ color: "var(--accent-bright)" }}
                      />
                    </button>
                  </div>

                  <p className="font-sans font-light text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {activity.description}
                  </p>

                  <AnimatePresence>
                    {expandedActivities.includes(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-2" style={{ borderTop: "1px solid var(--border-faint)" }}>
                          {activity.details.map((d, i) => (
                            <p key={i} className="flex items-start gap-2 font-sans font-light text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                              <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: "var(--accent-bright)" }} />
                              {d}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            INSPIRATIONS
        ═══════════════════════════════════════════════ */}
        <section
          className="py-24 px-6 md:px-12 lg:px-20"
          style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="section-label">/// Architects of Thought</div>
            <h2 className="font-serif font-light italic mb-16" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}>
              Icons of Inspiration
            </h2>

            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {inspirations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="p-8 flex flex-col gap-5"
                  style={{ borderRight: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(201,168,122,0.08)" }}>
                      <iconify-icon icon={item.icon} width="20" style={{ color: "var(--accent-bright)" }} />
                    </div>
                    <div>
                      <h3 className="font-serif italic font-light" style={{ fontSize: "22px", color: "var(--text-primary)", lineHeight: 1.1 }}>
                        {item.name}
                      </h3>
                      <p className="font-mono text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "var(--accent-bright)" }}>
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-4" style={{ background: "rgba(201,168,122,0.05)", borderLeft: "2px solid rgba(201,168,122,0.2)" }}>
                    <p className="font-serif italic text-base leading-relaxed mb-2" style={{ color: "var(--text-primary)" }}>
                      "{item.lesson}"
                    </p>
                    <p className="font-sans font-light text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CINEMATIC LORE
        ═══════════════════════════════════════════════ */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: "var(--bg)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="section-label">/// Cinematic Lore</div>
            <h2 className="font-serif font-light italic mb-16" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}>
              Masterpieces & Reflections
            </h2>

            <div
              style={{
                borderTop: "1px solid var(--border-raw)",
                borderLeft: "1px solid var(--border-raw)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              {cinematicLore.map((movie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={cn(
                    "p-8 flex flex-col min-h-[200px]",
                    index === 0 ? "col-span-2" : "",
                    index === 4 ? "col-span-2" : "",
                  )}
                  style={{ borderRight: "1px solid var(--border-raw)", borderBottom: "1px solid var(--border-raw)" }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3" style={{ background: "rgba(201,168,122,0.08)" }}>
                      <iconify-icon icon={movie.icon} width="22" style={{ color: "var(--accent-bright)" }} />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                      {movie.theme}
                    </span>
                  </div>

                  <h3
                    className="font-serif italic font-light mb-5"
                    style={{ fontSize: index === 0 ? "28px" : "20px", color: "var(--text-primary)" }}
                  >
                    {movie.title}
                  </h3>

                  <div className="mt-auto relative">
                    <span
                      className="absolute -top-4 -left-1 font-serif"
                      style={{ fontSize: "48px", color: "var(--border-raw)", lineHeight: 1 }}
                    >
                      "
                    </span>
                    <p
                      className="font-serif italic leading-relaxed pt-1"
                      style={{ fontSize: index === 0 ? "16px" : "13px", color: "var(--text-secondary)" }}
                    >
                      {movie.quote}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                    <div className="p-3 flex-shrink-0" style={{ background: "rgba(201,168,122,0.08)" }}>
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
                    <div className="mb-5 pl-4" style={{ borderLeft: "2px solid rgba(201,168,122,0.25)" }}>
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

        <Footer />
      </div>
    </PageTransition>
  );
}