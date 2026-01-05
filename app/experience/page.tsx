"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Footer from "@/components/footer";
import { useState } from "react";

type Experience = {
  icon: string; // Solar icon name
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
    icon: "code-circle",
    date: "May 2025 - Present",
    title: "Software Engineer",
    company: "Coseke Kenya Limited",
    location: "Nairobi, Kenya",
    type: "Full-time",
    summary: "Architected legal management systems serving 200+ officers, reducing case processing time by 70%",
    achievements: [
      "Architected SRC Legal Management System serving 200+ legal officers managing 5,000+ civil and employment cases, reducing case processing time by 70%",
      "Integrated Contract Lifecycle Management module processing 300+ annual supplier contracts with 60% reduction in review time and ensuring 100% compliance with Kenyan procurement regulations",
      "Developed TotalEnergies Contract Lifecycle Management System (CLMS) managing petroleum contracts valued at KES 500M+ with 45% workload reduction through automated expiration alerts",
      "Led backend optimization initiatives improving API response times by 50% and reducing server load by 35% through Redis caching and PostgreSQL indexing",
      "Contributed to ICT Authority's EDRMS implementation, improving government document retrieval efficiency by 55%",
      "Established security protocols including JWT authentication and role-based access controls, preventing 500+ potential security threats while maintaining GDPR compliance",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "Material UI", "Docker"],
  },
  {
    icon: "case-round",
    date: "Jan 2023 - Present",
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Nairobi, Kenya (Remote)",
    type: "Freelance",
    summary: "Delivered 15+ custom applications generating KES 300,000+ revenue increases per client",
    achievements: [
      "Delivered 15+ custom web and mobile applications generating average revenue increases of KES 300,000+ per client across e-commerce, education, and healthcare sectors",
      "Built USIU E-Counselling Platform serving 3,000+ students with real-time appointment booking, reducing scheduling conflicts by 80% and enabling 500+ monthly counseling sessions",
      "Developed blockchain-based E-Voting System enabling 1,500+ students to vote securely with biometric authentication, increasing election participation by 40% and achieving 100% audit trail accuracy",
      "Engineered e-commerce platforms processing KES 5M+ in transactions, reducing cart abandonment by 25% and improving conversion rates by 30% through optimized checkout flows",
      "Improved average website load speeds by 40% and user experience scores by 35% across all projects through Next.js SSR and performance optimization",
      "Achieved 85% client satisfaction rate and 60% client retention through quality delivery and comprehensive technical support",
    ],
    technologies: ["React", "Next.js", "React Native", "Node.js", "MongoDB", "PostgreSQL", "Blockchain", "Stripe", "M-Pesa"],
  },
  {
    icon: "layers-minimalistic",
    date: "Jan 2024 - Sep 2024",
    title: "IT Intern – Digital Systems & Database Management",
    company: "Office of the Registrar of Political Parties (ORPP)",
    location: "Nairobi, Kenya",
    type: "Internship",
    summary: "Digitized 10,000+ political party records, reducing document search time by 60%",
    achievements: [
      "Spearheaded digitization initiative for 10,000+ political party records, reducing document search time by 60% from hours to minutes through optimized database indexing",
      "Developed automated Python scripts for data validation and migration, processing 50,000+ records and reducing manual data entry workload by 30% while improving accuracy by 25%",
      "Enhanced Digital File Management System (DFMS) improving document accessibility by 45% and reducing processing times by 35% for 500+ government users",
      "Implemented advanced search functionality with filters, pagination, and autocomplete reducing document retrieval from days to seconds",
      "Collaborated with cross-functional teams to establish data quality standards eliminating 95% of data entry errors",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "OCR", "Pandas", "Elasticsearch"],
  },
  {
    icon: "shield-check",
    date: "Sep 2023 - Jan 2024",
    title: "IT Intern – Legal Information Systems",
    company: "Kenya Law",
    location: "Nairobi, Kenya",
    type: "Internship",
    summary: "Optimized databases for 500+ legal professionals, reducing search time by 40%",
    achievements: [
      "Optimized case law databases serving 500+ legal professionals, implementing advanced search functionality and indexing strategies that reduced average search time by 40% (from 2.5 to 1.5 minutes)",
      "Developed automated document archiving solutions processing 8,000+ legal documents with drag-and-drop functionality, reducing manual filing time by 50% and ensuring compliance with data retention policies",
      "Conducted comprehensive system testing identifying and resolving 75+ critical bugs, improving software stability by 40% and achieving 95%+ test coverage",
      "Implemented relevance ranking algorithms improving search result accuracy by 30%, enabling legal professionals to find critical case law faster",
      "Created intuitive document management dashboard with real-time progress tracking, enhancing user experience scores by 45%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "Jest", "Document Management APIs"],
  },
  {
    icon: "diploma",
    date: "2021 - 2025",
    title: "BSc Information Technology",
    company: "JKUAT",
    location: "Nairobi, Kenya",
    type: "Education",
    summary: "Graduated with Second Class Honors (Upper Division), specialized in secure system design",
    achievements: [
      "Graduated with Second Class Honors (Upper Division) from Jomo Kenyatta University of Agriculture and Technology",
      "Built solid foundation in computer science fundamentals including algorithms, data structures, software engineering, database management, network architecture, and cloud computing",
      "Developed hands-on projects in Python, JavaScript, React, and Node.js demonstrating practical application of theoretical knowledge",
      "Specialized in secure system design and database optimization with focus on enterprise-grade solutions",
    ],
    technologies: ["Python", "JavaScript", "React", "Node.js", "Java", "C++", "SQL", "Cloud Computing"],
  },
];

export default function ExperiencePage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* GLOBAL BACKDROP */}
        <div className="fixed inset-0 bg-[#050403] dark:bg-[#050403] -z-50"></div>

        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] w-full flex items-center justify-center py-32 px-6 border-b border-gray-200 dark:border-accent/10">
          <div className="max-w-7xl mx-auto w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">Professional Journey</span>
              </div>
              <h1 className="font-serif italic text-5xl md:text-7xl text-black dark:text-white mb-6 leading-tight">
                My <span className="text-accent not-italic font-bold">Experience</span>
              </h1>
              <p className="text-gray-800 dark:text-gray-400 text-lg max-w-2xl mx-auto font-sans">
                Building enterprise solutions that solve real problems and deliver measurable impact
              </p>
            </motion.div>
          </div>
        </section>

        {/* TIMELINE SECTION - Tree Layout */}
        <section className="py-32 px-6 bg-gray-50 dark:bg-[#0a0806] border-y border-gray-200 dark:border-accent/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// TIMELINE</span>
              <h2 className="font-serif italic text-4xl md:text-5xl text-black dark:text-white mb-4">Career Highlights</h2>
              <p className="text-gray-800 dark:text-gray-400 max-w-2xl mx-auto font-sans">
                From education to enterprise development, delivering impact across industries
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Central Spine */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-accent hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => {
                  const isLeft = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="glass-panel spotlight-card rounded-2xl p-6 md:p-8 relative group hover:bg-white/5 dark:hover:bg-white/5 transition-colors bg-white dark:bg-transparent">
                          <div className="scan-line"></div>
                          
                          {/* Icon & Date */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-accent/10 rounded-full relative flex-shrink-0">
                              <iconify-icon icon={`solar:${exp.icon}-bold`} width="24" className="text-accent"></iconify-icon>
                              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                            </div>
                            <div className="flex-1">
                              <p className="font-mono text-xs text-accent tracking-wider mb-2">{exp.date}</p>
                              <h3 className="font-serif italic text-xl md:text-2xl text-black dark:text-white mb-1">{exp.title}</h3>
                              <p className="text-accent text-sm font-sans mb-1">{exp.company}</p>
                              <p className="text-gray-500 dark:text-gray-500 text-xs font-mono">{exp.location} • {exp.type}</p>
                            </div>
                            
                            {/* Expand Button */}
                            <button
                              onClick={() => toggleCard(index)}
                              className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 transition-colors"
                            >
                              {expandedCards.includes(index) ? (
                                <iconify-icon icon="solar:minus-circle-bold" width="20" className="text-accent"></iconify-icon>
                              ) : (
                                <iconify-icon icon="solar:add-circle-bold" width="20" className="text-accent"></iconify-icon>
                              )}
                            </button>
                          </div>

                          <p className="text-gray-900 dark:text-gray-300 text-sm font-sans mb-4">{exp.summary}</p>

                          {/* Expanded Content */}
                          <AnimatePresence>
                            {expandedCards.includes(index) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 border-t border-accent/10">
                                  <div className="space-y-3 mb-6">
                                    <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Key Achievements</h4>
                                    {exp.achievements.map((achievement, idx) => (
                                      <p key={idx} className="flex items-start gap-2 text-gray-900 dark:text-gray-300 text-sm leading-relaxed font-sans">
                                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                                        <span className="flex-1">{achievement}</span>
                                      </p>
                                    ))}
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-[10px] border border-gray-300 dark:border-white/10 px-2 py-1 rounded text-gray-800 dark:text-gray-400 bg-gray-100 dark:bg-white/5">
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Timeline Node (Center) */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-[#0a0806] z-10 shadow-lg"></div>

                      {/* Connector Line */}
                      <div className={`hidden md:block absolute top-8 w-8 h-0.5 bg-accent/30 ${isLeft ? 'left-1/2' : 'right-1/2'}`}></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SUMMARY STATS */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// IMPACT</span>
              <h2 className="font-serif italic text-4xl text-black dark:text-white mb-4">By The Numbers</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "10,000+", label: "Users Served" },
                { number: "20+", label: "Projects Delivered" },
                { number: "70%", label: "Avg Efficiency Gain" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 text-center group hover:bg-white/5 dark:hover:bg-white/5 transition-colors bg-white dark:bg-transparent"
                >
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-serif italic transition-transform group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-gray-800 dark:text-gray-400 text-sm font-mono uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <span className="absolute -top-2 -right-2 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </PageTransition>
  );
}