"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Shield, Layers, Target } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import ApproachSection from "@/components/approach-section";
import dynamic from 'next/dynamic';
import TypewriterEffect from '@/components/typewriter-effect';
import OrganicBubbleCard from "@/components/organic-bubble-card";
import DayInTheLife from "@/components/day-in-the-life";
import { cn } from "@/lib/utils";
import WaveSeparator from "@/components/wave-separator";
import OrganicSection from "@/components/organic-section";
import GradientDivider from "@/components/gradient-divider";

const World = dynamic(() => import('@/components/globe'), {
  ssr: false,
  loading: () => <div style={{ width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading Globe...</p></div>
});

type TimelineEvent = {
  icon: React.ElementType;
  date: string;
  title: string;
  description: string;
  side: "left" | "right";
  glowColor: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    icon: Code,
    date: "May 2025 - Present",
    title: "Software Engineer - Coseke Kenya Limited",
    description: `• Architected SRC Legal Management System serving 200+ legal officers managing 5,000+ civil and employment cases for Kenya's Salaries and Remuneration Commission, reducing case processing time by 70%
• Integrated Contract Lifecycle Management module processing 300+ annual contracts with 60% reduction in review time and ensuring 100% compliance with Kenyan procurement regulations
• Developed TotalEnergies CLMS managing petroleum contracts valued at KES 500M+ with 45% workload reduction through automated expiration alerts and renewal workflows
• Led backend optimization initiatives improving API response times by 50% and reducing server load by 35% through Redis caching and database indexing
• Contributed to ICT Authority's EDRMS implementation improving document retrieval efficiency by 55% for government digitization efforts
• Established security protocols including JWT authentication and role-based access controls, preventing 500+ potential security threats while maintaining GDPR compliance`,
    side: "right",
    glowColor: "rgba(45, 80, 22, 0.5)" // deep-forest glow
  },
  {
    icon: Briefcase,
    date: "Jan 2024 - Present",
    title: "Freelance Full-Stack Developer",
    description: `• Delivered 15+ custom web and mobile applications for startups and SMEs, generating average revenue increases of KES 300,000+ per client
• Built USIU E-Counselling Platform serving 3,000+ students with 80% reduction in scheduling conflicts and 500+ monthly counseling sessions
• Developed blockchain-based E-Voting System enabling 1,500+ students to vote securely with 40% increased participation and 100% audit trail accuracy
• Improved average website load speeds by 40% and user experience scores by 35% across all projects through performance optimization
• Achieved 85% client satisfaction rate and 60% client retention through quality delivery and ongoing support`,
    side: "left",
    glowColor: "rgba(184, 115, 51, 0.5)" // warm-copper glow
  },
  {
    icon: Layers,
    date: "Jan 2024 - Sep 2024",
    title: "IT Intern - Office of the Registrar of Political Parties (ORPP)",
    description: `• Spearheaded digitization initiative for 10,000+ political party records, reducing document search time by 60% through optimized database indexing and advanced search algorithms
• Developed automated Python scripts for data validation and migration, processing 50,000+ records and reducing manual data entry workload by 30% while improving data accuracy by 25%
• Collaborated with cross-functional government teams to enhance Digital File Management System (DFMS), improving document accessibility by 45% and reducing processing times by 35%`,
    side: "left",
    glowColor: "rgba(54, 69, 79, 0.5)" // charcoal glow
  },
  {
    icon: Shield,
    date: "Sep 2023 - Jan 2024",
    title: "IT Intern - Kenya Law",
    description: `• Optimized case law databases serving 500+ legal professionals, implementing advanced search functionality and indexing strategies that reduced average search time by 40% and improved result relevance by 30%
• Developed automated document archiving solutions processing 8,000+ legal documents, ensuring compliance with data retention policies and reducing manual filing time by 50%
• Conducted comprehensive system testing identifying and resolving 75+ critical issues, improving software stability by 40% and enhancing overall system performance`,
    side: "right",
    glowColor: "rgba(245, 245, 220, 0.3)" // cream glow
  },
  {
    icon: GraduationCap,
    date: "2021 - 2025",
    title: "BSc Information Technology - JKUAT",
    description: `• Graduated with Second Class Honors (Upper Division) from Jomo Kenyatta University of Agriculture and Technology
• Built solid foundation in computer science fundamentals including algorithms, data structures, software engineering, database management, network architecture, and cloud computing
• Developed hands-on projects in Python, JavaScript, React, and Node.js demonstrating practical application of theoretical knowledge
• Specialized in secure system design and database optimization with focus on enterprise-grade solutions`,
    side: "left",
    glowColor: "rgba(45, 80, 22, 0.5)" // deep-forest glow
  },
  {
    icon: Shield,
    date: "2024",
    title: "Professional Certifications",
    description: `• Earned Junior Cybersecurity Certificate from Cisco Networking Academy, mastering network defense, threat detection, and incident response
• Completed Endpoint Security Certificate from Cisco, specializing in endpoint protection and security protocols
• Currently pursuing CyberOps Associate Certification (Cisco) and ALX Backend Development Course
• Achieved Python for Data Science Certificate and IBM Data Engineering Certificate, demonstrating commitment to continuous learning in data engineering and analytics
• Expanding expertise in cybersecurity, cloud computing, and full-stack development through ongoing professional development`,
    side: "right",
    glowColor: "rgba(184, 115, 51, 0.5)" // warm-copper glow
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* Section 1: Intro - Default Background */}
        <div className="relative pt-24 pb-32 overflow-hidden">
          <div className="container mx-auto max-w-6xl px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
            >
              <div className="md:w-1/2 text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-orange font-bricolage">
                  About My Journey
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 font-inter">
                  From curiosity to expertise in <TypewriterEffect words={['Digital Security', 'Full-Stack Development', 'Cloud Engineering', 'DevOps']} className="text-orange font-poppins font-semibold" />
                </p>
                <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed text-lg">
                  As a full-stack developer with expertise in cybersecurity and DevOps, I bring a unique blend of skills to every project. My approach combines technical excellence with a deep understanding of security principles and efficient deployment practices.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-1 w-20 bg-orange rounded-full"></div>
                  <p className="text-orange font-medium font-poppins">Available worldwide</p>
                </div>
              </div>

              <div className="md:w-1/2 w-full aspect-square relative">
                <World />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Section 2: My Journey - Organic Blob */}
        <OrganicSection
          variant="gentle-wave"
          backgroundColor="#DCC9A8"
          paddingTop="6rem"
          paddingBottom="12rem"
          overlapTop={true}
        >
          <div className="container mx-auto max-w-5xl px-6" id="timeline-section">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 text-brown-dark font-bricolage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My Professional Journey
            </motion.h2>

            <div className="relative">
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute top-full left-8 w-0.5 h-8 bg-gradient-to-b from-brown/40 to-brown/40 z-0"></div>
                    )}

                    <div className="relative z-10">
                      <OrganicBubbleCard
                        glowColor={event.glowColor}
                        index={index}
                        isStatic={true}
                        className="w-full"
                        size="lg"
                      >
                        <div className="flex items-start gap-8">
                          <div className="flex-shrink-0">
                            <div className={`p-4 rounded-full mb-3 ${event.side === 'left' ? 'bg-brown/10 text-brown-dark' : 'bg-orange/10 text-orange'}`}>
                              <event.icon className="h-8 w-8" />
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-brown/60 font-medium whitespace-nowrap">{event.date}</p>
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-brown-dark mb-3 font-bricolage">{event.title}</h3>
                                <div className="text-slate-600 dark:text-slate-400 leading-relaxed font-inter space-y-2">
                                  {event.description.split('\n').map((line, idx) => (
                                    line.trim() && (
                                      <p key={idx} className="flex items-start gap-2">
                                        {line.startsWith('•') ? (
                                          <>
                                            <span className="text-orange mt-1 flex-shrink-0">•</span>
                                            <span className="flex-1">{line.substring(1).trim()}</span>
                                          </>
                                        ) : (
                                          <span>{line}</span>
                                        )}
                                      </p>
                                    )
                                  ))}
                                </div>
                              </div>

                              <div className="flex-shrink-0 flex flex-col items-center">
                                <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-brown' : 'bg-orange'}`}></div>
                                <div className="text-xs text-brown/40 mt-1 font-mono">
                                  {String(index + 1).padStart(2, '0')}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </OrganicBubbleCard>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </OrganicSection>

        {/* Section 5: My Mission - Organic Blob */}
        <OrganicSection
          variant="asymmetric"
          backgroundColor="#FAFAF8"
          paddingTop="6rem"
          paddingBottom="12rem"
          overlapTop={true}
        >
          <div className="container mx-auto max-w-6xl px-6">
            <motion.div
              data-section="mission"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full bg-orange/10 mb-6">
                <Target className="h-10 w-10 text-orange" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brown-dark font-bricolage">
                My Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-inter">
                To bridge the gap between cutting-edge technology and robust security, creating solutions that are
                <span className="text-orange font-medium"> secure by design</span>,
                <span className="text-orange font-medium"> scalable by nature</span>, and
                <span className="text-orange font-medium"> accessible to all</span>.
                I aim to empower organizations with technology that not only meets their current needs but
                adapts to future challenges in our rapidly evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </OrganicSection>

        {/* Section 6: Approach & Life - Organic Blob */}
        <OrganicSection
          variant="gentle-wave"
          backgroundColor="#F5E6D3"
          paddingTop="6rem"
          paddingBottom="6rem"
          overlapTop={true}
        >
          <div className="container mx-auto max-w-6xl px-6">
            <ApproachSection />
            <DayInTheLife />
          </div>
        </OrganicSection>
      </div>
    </PageTransition>
  );
}