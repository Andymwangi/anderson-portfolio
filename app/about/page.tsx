"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Sparkles, Code, Shield, Layers, Target, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import GlowingCard from "@/components/glowing-card";
import ApproachSection from "@/components/approach-section";
import dynamic from 'next/dynamic';

const World = dynamic(() => import('@/components/globe'), {
  ssr: false,
  loading: () => <div style={{width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><p>Loading Globe...</p></div>
});
import DayInTheLife from "@/components/day-in-the-life"; 
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    icon: GraduationCap,
    date: "2021 - 2025",
    title: "BSc Information Technology - JKUAT",
    description: "Building a solid foundation in computer science fundamentals at Jomo Kenyatta University of Agriculture and Technology. Mastering core concepts in algorithms, data structures, software engineering, and network architecture. Specializing in secure system design and database optimization with hands-on projects in Python, JavaScript, and modern web frameworks.",
    side: "left",
    glowColor: "rgba(45, 80, 22, 0.5)" // deep-forest glow
  },
  {
    icon: Shield,
    date: "2023 - 2025",
    title: "Cybersecurity Specialist Certification",
    description: "Earned prestigious Junior Cybersecurity Certificate and Cisco CyberOps Certificate, mastering network defense, threat detection, and incident response. Developed expertise in vulnerability assessment, penetration testing, and security protocol implementation. Gained hands-on experience with security frameworks, encryption methods, and compliance standards essential for enterprise security.",
    side: "right",
    glowColor: "rgba(184, 115, 51, 0.5)" // warm-copper glow
  },
  {
    icon: Briefcase,
    date: "Sep 2023 - Jan 2024",
    title: "IT Intern - Kenya Law",
    description: "Transformed legal information systems by optimizing database performance, achieving 40% reduction in query response times. Developed secure document management solutions ensuring regulatory compliance and enhanced system stability. Implemented comprehensive search functionality that revolutionized how legal professionals access critical information.",
    side: "left",
    glowColor: "rgba(54, 69, 79, 0.5)" // charcoal glow
  },
  {
    icon: Code,
    date: "Jan 2024 - Sep 2024",
    title: "Full-Stack Developer - RegisVault",
    description: "Architected and developed RegisVault, a cutting-edge digital file management system at ORPP, processing over 100,000+ sensitive political documents. Built secure React.js interfaces with TypeScript, implemented OCR capabilities, and created automated data validation scripts that reduced manual processing by 30%. Delivered a system that decreased document retrieval from days to seconds.",
    side: "right",
    glowColor: "rgba(245, 245, 220, 0.3)" // cream glow
  },
  {
    icon: Layers,
    date: "Oct 2024 - Jan 2025",
    title: "DevOps Engineer - Bakari Ventures",
    description: "Led enterprise application development using modern DevOps practices, achieving 70% reduction in manual workloads across 3 major projects. Implemented Redis caching solutions, optimized Node.js APIs for 50% faster response times, and established CI/CD pipelines with Docker containerization. Mastered infrastructure automation and scalable system architecture.",
    side: "left",
    glowColor: "rgba(45, 80, 22, 0.5)" // deep-forest glow
  },
  {
    icon: Code,
    date: "Jan 2025 - Present",
    title: "Backend Developer - Coseke",
    description: "Leading backend architecture and full-stack development for cutting-edge mobile applications in active production. Architecting scalable API infrastructures, implementing real-time data synchronization, and ensuring seamless frontend-backend integration. Driving digital innovation through robust microservices architecture and advanced database optimization for high-performance app ecosystems.",
    side: "right",
    glowColor: "rgba(184, 115, 51, 0.5)" // warm-copper glow
  },
  {
    icon: Target,
    date: "Jan 2025 - Present",
    title: "Freelance Full-Stack Developer",
    description: "Simultaneously operating as an independent developer, delivering secure, high-performance web applications for 15+ clients with measurable business impact. Generating average revenue increases of KES 300,000+ per client through custom React.js, Vue.js, and Next.js solutions. Balancing corporate innovation with entrepreneurial projects, specializing in e-commerce platforms and enterprise-grade security implementations.",
    side: "left",
    glowColor: "rgba(45, 80, 22, 0.5)" // deep-forest glow
  },
];


export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section with Globe Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
          >
            <div className="md:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-deep-forest dark:text-warm-copper">
                About My Journey
              </h1>
              <p className="text-xl text-slate-grey dark:text-cream/80 mb-6">
                From curiosity to expertise in digital security and development.
              </p>
              <p className="text-slate-grey dark:text-cream/70">
                As a full-stack developer with expertise in cybersecurity and DevOps, I bring a unique blend of skills to every project. My approach combines technical excellence with a deep understanding of security principles and efficient deployment practices.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-1 w-20 bg-deep-forest dark:bg-warm-copper rounded-full"></div>
                <p className="text-deep-forest dark:text-warm-copper font-medium">Available worldwide</p>
              </div>
            </div>

            <div className="md:w-1/2 w-full aspect-square relative">
              {/* Enhanced 3D Globe Animation */}
              <World />
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center mb-16"
          >
            <button
              onClick={() => {
                const timelineSection = document.getElementById('timeline-section');
                timelineSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <p className="text-sm text-slate-grey dark:text-cream/60 font-medium mb-2">
                Scroll to explore my journey
              </p>
              <div className="relative">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 rounded-full bg-deep-forest/10 dark:bg-warm-copper/10 border border-deep-forest/20 dark:border-warm-copper/20 group-hover:bg-deep-forest/20 dark:group-hover:bg-warm-copper/20 transition-colors"
                >
                  <ChevronDown className="h-6 w-6 text-deep-forest dark:text-warm-copper" />
                </motion.div>
              </div>
            </button>
          </motion.div>

          {/* Timeline Section with Image and Dual-Sided Layout */}
          <div id="timeline-section" className="flex flex-col lg:flex-row gap-10 mb-24">
            {/* Image Section */}
            <motion.div 
              className="lg:w-1/3 flex flex-col gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Profile Image */}
              <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/profileimage.png"
                  alt="Anderson Mwangi"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-deep-forest/80 to-warm-copper/50 dark:from-warm-copper/80 dark:to-deep-forest/50 mix-blend-multiply z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                  <h3 className="text-cream font-bold text-xl">Anderson Mwangi</h3>
                  <p className="text-cream/80 text-sm">Full-Stack Developer & Security Specialist</p>
                </div>
              </div>
              
              {/* Skills Showcase */}
              <div className="bg-cream/5 dark:bg-charcoal/30 backdrop-blur-sm p-6 rounded-2xl border border-deep-forest/10 dark:border-warm-copper/10 shadow-lg">
                <h3 className="text-deep-forest dark:text-warm-copper font-bold text-xl mb-4">Core Competencies</h3>
                
                <div className="space-y-4">
                  {/* Skill Bars */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-grey dark:text-cream/70">Full-Stack Development</span>
                      <span className="text-xs text-deep-forest dark:text-warm-copper font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-cream/10 dark:bg-charcoal/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-deep-forest to-deep-forest/70 dark:from-warm-copper dark:to-warm-copper/70" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-grey dark:text-cream/70">Cybersecurity</span>
                      <span className="text-xs text-deep-forest dark:text-warm-copper font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-cream/10 dark:bg-charcoal/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-deep-forest to-deep-forest/70 dark:from-warm-copper dark:to-warm-copper/70" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-grey dark:text-cream/70">DevOps</span>
                      <span className="text-xs text-deep-forest dark:text-warm-copper font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-cream/10 dark:bg-charcoal/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-deep-forest to-deep-forest/70 dark:from-warm-copper dark:to-warm-copper/70" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Timeline Section */}
            <div className="lg:w-2/3 relative">
              {/* Creative Timeline Layout */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Connecting Line to Next Item */}
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute top-full left-8 w-0.5 h-8 bg-gradient-to-b from-deep-forest/40 to-warm-copper/40 dark:from-warm-copper/40 dark:to-deep-forest/40 z-0"></div>
                    )}
                    
                    {/* Timeline Card - Full Width */}
                    <div className="relative z-10">
                      <GlowingCard 
                        glowColor={event.glowColor}
                        side={event.side}
                        className="w-full"
                      >
                        <div className="flex items-start gap-6">
                          {/* Icon and Date Section */}
                          <div className="flex-shrink-0">
                            <div className={`p-4 rounded-full mb-3 ${event.side === 'left' ? 'bg-deep-forest/10 text-deep-forest dark:bg-warm-copper/10 dark:text-warm-copper' : 'bg-warm-copper/10 text-warm-copper dark:bg-deep-forest/10 dark:text-deep-forest'}`}>
                              <event.icon className="h-8 w-8" />
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-slate-grey dark:text-cream/60 font-medium whitespace-nowrap">{event.date}</p>
                            </div>
                          </div>
                          
                          {/* Content Section - Takes Full Available Width */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-deep-forest dark:text-warm-copper mb-3">{event.title}</h3>
                                <p className="text-slate-grey dark:text-cream/70 leading-relaxed">{event.description}</p>
                              </div>
                              
                              {/* Timeline Position Indicator */}
                              <div className="flex-shrink-0 flex flex-col items-center">
                                <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-deep-forest dark:bg-warm-copper' : 'bg-warm-copper dark:bg-deep-forest'}`}></div>
                                <div className="text-xs text-slate-grey dark:text-cream/40 mt-1 font-mono">
                                  {String(index + 1).padStart(2, '0')}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </GlowingCard>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator - After Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-16"
          >
            <button
              onClick={() => {
                const missionSection = document.querySelector('[data-section="mission"]');
                if (missionSection) {
                  missionSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group flex flex-col items-center gap-2 p-4 rounded-full hover:bg-deep-forest/5 dark:hover:bg-warm-copper/5 transition-all duration-300"
              aria-label="Scroll to mission section"
            >
              <div className="text-sm text-slate-grey dark:text-cream/60 font-medium group-hover:text-deep-forest dark:group-hover:text-warm-copper transition-colors">
                Continue Reading
              </div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-6 text-deep-forest dark:text-warm-copper group-hover:text-warm-copper dark:group-hover:text-deep-forest transition-colors"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </button>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            data-section="mission"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <div className="inline-block p-4 rounded-full bg-deep-forest/10 dark:bg-warm-copper/10 mb-6">
              <Target className="h-10 w-10 text-deep-forest dark:text-warm-copper" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-forest dark:text-warm-copper">
              My Mission
            </h2>
            <p className="text-lg text-slate-grey dark:text-cream/80 max-w-3xl mx-auto">
              To bridge the gap between cutting-edge technology and robust security, creating solutions that are
              <span className="text-deep-forest dark:text-warm-copper font-medium"> secure by design</span>,
              <span className="text-deep-forest dark:text-warm-copper font-medium"> scalable by nature</span>, and
              <span className="text-deep-forest dark:text-warm-copper font-medium"> accessible to all</span>.
              I aim to empower organizations with technology that not only meets their current needs but
              adapts to future challenges in our rapidly evolving digital landscape.
            </p>
          </motion.div>

          {/* Approach Section with Expanded Content */}
          <ApproachSection />
          
          {/* A Day in the Life Section */}
          <DayInTheLife />
        </div>
      </div>
    </PageTransition>
  );
}
