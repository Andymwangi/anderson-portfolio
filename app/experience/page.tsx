"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Footer from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/ui/reveal";
import { ClosingCta } from "@/components/closing-cta";
import { cn } from "@/lib/utils";

type Experience = {
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
    date: "Feb 2026 – Present",
    title: "Mobile & Backend Developer",
    company: "Tradecare Africa Limited",
    location: "Nairobi, Kenya",
    type: "Full-time",
    summary:
      "Building Farm Data Pod (FDP), an offline-first agricultural data management platform covering the full producer value chain.",
    achievements: [
      "Developing Farm Data Pod (FDP), a full-featured mobile application built with Expo (React Native) and TypeScript that manages agricultural data across an organisation's entire value chain, from producer registration and field management through crop production, input distribution, scouting, and seasonal planning.",
      "Architecting role-based dashboards and multi-module workflows tailored to each user's responsibilities (field agents, agronomists, supervisors, and organisation admins), enabling contextual data entry and reporting at every stage of production.",
      "Implementing an offline-first data management layer so field agents can continue recording producer and farm data in areas with limited or no connectivity, with seamless sync when back online.",
      "Designing and maintaining RESTful backend APIs to support producer registration, field surveys, input tracking, scouting reports, and seasonal planning modules.",
      "Collaborating with agronomists and product stakeholders to translate complex agricultural workflows into intuitive mobile UX, reducing data entry errors and improving field agent efficiency.",
    ],
    technologies: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Offline-first sync", "RBAC"],
  },
  {
    date: "May 2025 – Present",
    title: "Software Engineer",
    company: "Coseke Kenya Limited",
    location: "Nairobi, Kenya",
    type: "Full-time",
    summary: "Architected legal management systems serving 200+ officers, reducing case processing time by 70%.",
    achievements: [
      "Architected SRC Legal Management System serving 200+ legal officers managing 5,000+ civil and employment cases, reducing case processing time by 70%.",
      "Integrated Contract Lifecycle Management module processing 300+ annual supplier contracts with 60% reduction in review time and ensuring 100% compliance with Kenyan procurement regulations.",
      "Developed TotalEnergies Contract Lifecycle Management System (CLMS) managing petroleum contracts valued at KES 500M+ with 45% workload reduction through automated expiration alerts.",
      "Led backend optimisation initiatives improving API response times by 50% and reducing server load by 35% through Redis caching and PostgreSQL indexing.",
      "Contributed to ICT Authority's EDRMS implementation, improving government document retrieval efficiency by 55%.",
      "Established security protocols including JWT authentication and role-based access controls, preventing 500+ potential security threats while maintaining GDPR compliance.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Material UI", "Docker"],
  },
  {
    date: "Jan 2023 – Present",
    title: "Freelance Full-Stack Developer",
    company: "Self-employed",
    location: "Nairobi, Kenya (Remote)",
    type: "Freelance",
    summary: "Delivered 15+ custom applications generating KES 300,000+ revenue increases per client.",
    achievements: [
      "Delivered 15+ custom web and mobile applications generating average revenue increases of KES 300,000+ per client across e-commerce, education, and healthcare sectors.",
      "Built USIU E-Counselling Platform serving 3,000+ students with real-time appointment booking, reducing scheduling conflicts by 80% and enabling 500+ monthly counselling sessions.",
      "Developed blockchain-based E-Voting System enabling 1,500+ students to vote securely with biometric authentication, increasing election participation by 40% and achieving 100% audit trail accuracy.",
      "Engineered e-commerce platforms processing KES 5M+ in transactions, reducing cart abandonment by 25% and improving conversion rates by 30% through optimised checkout flows.",
      "Improved average website load speeds by 40% and user experience scores by 35% across all projects through Next.js SSR and performance optimisation.",
      "Achieved 85% client satisfaction rate and 60% client retention through quality delivery and comprehensive technical support.",
    ],
    technologies: ["React", "Next.js", "React Native", "Node.js", "MongoDB", "PostgreSQL", "Blockchain", "Stripe", "M-Pesa"],
  },
  {
    date: "Jan 2024 – Sep 2024",
    title: "IT Intern, Digital Systems & Database Management",
    company: "Office of the Registrar of Political Parties (ORPP)",
    location: "Nairobi, Kenya",
    type: "Internship",
    summary: "Digitised 10,000+ political party records, reducing document search time by 60%.",
    achievements: [
      "Spearheaded digitisation initiative for 10,000+ political party records, reducing document search time by 60% from hours to minutes through optimised database indexing.",
      "Developed automated Python scripts for data validation and migration, processing 50,000+ records and reducing manual data entry workload by 30% while improving accuracy by 25%.",
      "Enhanced Digital File Management System (DFMS) improving document accessibility by 45% and reducing processing times by 35% for 500+ government users.",
      "Implemented advanced search functionality with filters, pagination, and autocomplete reducing document retrieval from days to seconds.",
      "Collaborated with cross-functional teams to establish data quality standards eliminating 95% of data entry errors.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "OCR", "Pandas", "Elasticsearch"],
  },
  {
    date: "Sep 2023 – Jan 2024",
    title: "IT Intern, Legal Information Systems",
    company: "Kenya Law",
    location: "Nairobi, Kenya",
    type: "Internship",
    summary: "Optimised databases for 500+ legal professionals, reducing search time by 40%.",
    achievements: [
      "Optimised case law databases serving 500+ legal professionals, implementing advanced search functionality and indexing strategies that reduced average search time by 40%.",
      "Developed automated document archiving solutions processing 8,000+ legal documents with drag-and-drop functionality, reducing manual filing time by 50%.",
      "Conducted comprehensive system testing identifying and resolving 75+ critical bugs, improving software stability by 40% and achieving 95%+ test coverage.",
      "Implemented relevance ranking algorithms improving search result accuracy by 30%.",
      "Created intuitive document management dashboard with real-time progress tracking, enhancing user experience scores by 45%.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "Jest", "Document Management APIs"],
  },
  {
    date: "2021 – 2025",
    title: "BSc Information Technology",
    company: "JKUAT",
    location: "Nairobi, Kenya",
    type: "Education",
    summary: "Graduated with Second Class Honours (Upper Division), specialised in secure system design.",
    achievements: [
      "Graduated with Second Class Honours (Upper Division) from Jomo Kenyatta University of Agriculture and Technology.",
      "Built a solid foundation in algorithms, data structures, software engineering, database management, network architecture, and cloud computing.",
      "Developed hands-on projects in Python, JavaScript, React, and Node.js demonstrating practical application of theoretical knowledge.",
      "Specialised in secure system design and database optimisation with a focus on enterprise-grade solutions.",
    ],
    technologies: ["Python", "JavaScript", "React", "Node.js", "Java", "C++", "SQL", "Cloud Computing"],
  },
  {
    date: "2023 – Present",
    title: "Professional Certifications",
    company: "Cisco · IBM · ALX",
    location: "Online",
    type: "Certifications",
    summary:
      "Industry credentials in cybersecurity and data, with ongoing advanced study in security operations and backend engineering.",
    achievements: [
      "Earned Junior Cybersecurity Certificate from Cisco Networking Academy.",
      "Completed Endpoint Security Certificate from Cisco.",
      "Earned Python for Data Science Certificate and IBM Data Engineering Certificate.",
      "Currently pursuing CyberOps Associate Certification (Cisco) and ALX Backend Development Course.",
    ],
    technologies: ["Cisco Networking Academy", "Python", "Data engineering", "Security fundamentals"],
  },
];

const stats = [
  { number: "3+", label: "Years experience" },
  { number: "10,000+", label: "Users served" },
  { number: "20+", label: "Projects delivered" },
  { number: "70%", label: "Average efficiency gain" },
];

function CurrentRoleCard({ experience }: { experience: Experience }) {
  return (
    <div className="w-full rounded-2xl bg-canvas-subtle p-6 ring-1 ring-ink/[0.06] dark:ring-white/[0.06] md:p-7 lg:max-w-[380px]">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brick-bright" aria-hidden />
          Now
        </p>
        <p className="caption">{experience.date}</p>
      </div>
      <h2 className="display-sm mt-5">{experience.title}</h2>
      <p className="mt-1.5 text-[15px] text-ink-secondary">
        {experience.company} &middot; {experience.location}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{experience.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.slice(0, 4).map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceRow({ experience, index }: { experience: Experience; index: number }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = `experience-panel-${index}`;

  return (
    <Reveal as="article" className="hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-1 gap-4 py-8 text-left md:grid-cols-12 md:gap-8 md:py-10"
      >
        <div className="md:col-span-3">
          <p className="caption text-brick-bright">{experience.date}</p>
          <p className="caption mt-1.5">{experience.type}</p>
        </div>

        <div className="md:col-span-8">
          <h3 className="display-sm transition-colors group-hover:text-brick-bright">{experience.title}</h3>
          <p className="mt-1.5 text-[15px] text-ink-secondary">
            {experience.company} &middot; {experience.location}
          </p>
          <p className="prose-copy mt-4 max-w-2xl">{experience.summary}</p>
        </div>

        <div className="flex md:col-span-1 md:justify-end">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors group-hover:border-ink",
              open && "bg-ink text-canvas"
            )}
            aria-hidden
          >
            <iconify-icon icon={open ? "solar:minus-circle-linear" : "solar:add-circle-linear"} width="18" />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12 md:pb-12">
              <div className="md:col-span-8 md:col-start-4">
                <p className="eyebrow mb-4">Key achievements</p>
                <ul className="flex flex-col gap-3">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="mt-3 h-px w-3 shrink-0 bg-brick-bright" aria-hidden />
                      <span className="text-[15px] leading-relaxed text-ink-secondary">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <p className="eyebrow mb-3 mt-8">Technologies</p>
                <ul className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Reveal>
  );
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="accent-word">worked</span>
          </>
        }
        lead="From legal platforms and government systems to mobile field tools and client delivery: a timeline of roles, outcomes, and stacks."
        meta="Enterprise · Product · Freelance · 2021 – present"
        aside={<CurrentRoleCard experience={experiences[0]} />}
      />

      <Section bordered={false}>
        <SectionHeading
          eyebrow="Timeline"
          title="Career highlights"
          aside={<p className="prose-copy">Select a role to see the detail behind the outcome.</p>}
        />
        <div className="flex flex-col">
          {experiences.map((experience, index) => (
            <ExperienceRow key={experience.title + experience.company} experience={experience} index={index} />
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHeading eyebrow="Impact" title="By the numbers" size="md" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="hairline pt-6">
              <p className="display-lg accent-word">{stat.number}</p>
              <p className="caption mt-3">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Bring me onto your next build"
        copy="Whether it is a greenfield product or hardening an existing platform, I bring the same discipline and care."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/projects", label: "View work" }}
      />

      <Footer />
    </PageTransition>
  );
}
