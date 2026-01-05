"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Code, Shield, Layers, Target, Plus, Minus, Coffee, Server, Search, Cloud, Moon, Laptop, Dumbbell, Book, Film, Waves } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import dynamic from 'next/dynamic';
import Footer from "@/components/footer";
import { useState } from "react";
import { cn } from "@/lib/utils";

const World = dynamic(() => import('@/components/globe'), {
  ssr: false,
  loading: () => <div style={{ width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading Globe...</p></div>
});

type TimelineEvent = {
  icon: React.ElementType;
  date: string;
  title: string;
  summary: string;
  description: string;
};

type DayActivity = {
  icon1: React.ElementType;
  icon2: React.ElementType;
  title: string;
  time: string;
  description: string;
  details: string[];
};

type Hobby = {
  icon: React.ElementType;
  title: string;
  description: string;
  frequency: string;
  details?: string[];
  quote?: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    icon: Code,
    date: "May 2025 - Present",
    title: "Software Engineer - Coseke Kenya Limited",
    summary: "Architected legal management systems serving 200+ officers, reducing case processing time by 70%",
    description: `• Architected SRC Legal Management System serving 200+ legal officers managing 5,000+ civil and employment cases for Kenya's Salaries and Remuneration Commission, reducing case processing time by 70%
• Integrated Contract Lifecycle Management module processing 300+ annual contracts with 60% reduction in review time and ensuring 100% compliance with Kenyan procurement regulations
• Developed TotalEnergies CLMS managing petroleum contracts valued at KES 500M+ with 45% workload reduction through automated expiration alerts and renewal workflows
• Led backend optimization initiatives improving API response times by 50% and reducing server load by 35% through Redis caching and database indexing
• Contributed to ICT Authority's EDRMS implementation improving document retrieval efficiency by 55% for government digitization efforts
• Established security protocols including JWT authentication and role-based access controls, preventing 500+ potential security threats while maintaining GDPR compliance`
  },
  {
    icon: Briefcase,
    date: "Jan 2023 - Present",
    title: "Freelance Full-Stack Developer",
    summary: "Delivered 15+ custom applications generating KES 300,000+ revenue increases per client",
    description: `• Delivered 15+ custom web and mobile applications for startups and SMEs, generating average revenue increases of KES 300,000+ per client
• Built USIU E-Counselling Platform serving 3,000+ students with 80% reduction in scheduling conflicts and 500+ monthly counseling sessions
• Developed blockchain-based E-Voting System enabling 1,500+ students to vote securely with 40% increased participation and 100% audit trail accuracy
• Improved average website load speeds by 40% and user experience scores by 35% across all projects through performance optimization
• Achieved 85% client satisfaction rate and 60% client retention through quality delivery and ongoing support`
  },
  {
    icon: Layers,
    date: "Jan 2024 - Sep 2024",
    title: "IT Intern - Office of the Registrar of Political Parties (ORPP)",
    summary: "Digitized 10,000+ political party records, reducing document search time by 60%",
    description: `• Spearheaded digitization initiative for 10,000+ political party records, reducing document search time by 60% through optimized database indexing and advanced search algorithms
• Developed automated Python scripts for data validation and migration, processing 50,000+ records and reducing manual data entry workload by 30% while improving data accuracy by 25%
• Collaborated with cross-functional government teams to enhance Digital File Management System (DFMS), improving document accessibility by 45% and reducing processing times by 35%`
  },
  {
    icon: Shield,
    date: "Sep 2023 - Jan 2024",
    title: "IT Intern - Kenya Law",
    summary: "Optimized databases for 500+ legal professionals, reducing search time by 40%",
    description: `• Optimized case law databases serving 500+ legal professionals, implementing advanced search functionality and indexing strategies that reduced average search time by 40% and improved result relevance by 30%
• Developed automated document archiving solutions processing 8,000+ legal documents, ensuring compliance with data retention policies and reducing manual filing time by 50%
• Conducted comprehensive system testing identifying and resolving 75+ critical issues, improving software stability by 40% and enhancing overall system performance`
  },
  {
    icon: GraduationCap,
    date: "2021 - 2025",
    title: "BSc Information Technology - JKUAT",
    summary: "Graduated with Second Class Honors (Upper Division), specialized in secure system design",
    description: `• Graduated with Second Class Honors (Upper Division) from Jomo Kenyatta University of Agriculture and Technology
• Built solid foundation in computer science fundamentals including algorithms, data structures, software engineering, database management, network architecture, and cloud computing
• Developed hands-on projects in Python, JavaScript, React, and Node.js demonstrating practical application of theoretical knowledge
• Specialized in secure system design and database optimization with focus on enterprise-grade solutions`
  },
  {
    icon: Shield,
    date: "2024",
    title: "Professional Certifications",
    summary: "Cisco Cybersecurity, Python for Data Science, IBM Data Engineering certifications",
    description: `• Earned Junior Cybersecurity Certificate from Cisco Networking Academy, mastering network defense, threat detection, and incident response
• Completed Endpoint Security Certificate from Cisco, specializing in endpoint protection and security protocols
• Currently pursuing CyberOps Associate Certification (Cisco) and ALX Backend Development Course
• Achieved Python for Data Science Certificate and IBM Data Engineering Certificate, demonstrating commitment to continuous learning in data engineering and analytics
• Expanding expertise in cybersecurity, cloud computing, and full-stack development through ongoing professional development`
  },
];

const dayActivities: DayActivity[] = [
  {
    icon1: Coffee,
    icon2: Server,
    title: "Morning: The Architect",
    time: "9:00 AM - 12:00 PM",
    description: "Fueling up, the day begins at Coseke. I'm architecting backend microservices, designing secure APIs, and ensuring database schemas are robust and scalable.",
    details: [
      "Review pull requests and code quality",
      "Design microservices architecture",
      "Optimize database schemas and queries",
      "Implement Docker and Kubernetes configurations",
      "Write clean, maintainable code"
    ]
  },
  {
    icon1: Shield,
    icon2: Search,
    title: "Midday: The Analyst",
    time: "12:00 PM - 1:00 PM",
    description: "Switching hats to a cybersecurity analyst. I scan threat intelligence feeds, review firewall logs, and hunt for vulnerabilities.",
    details: [
      "Monitor threat intelligence feeds",
      "Review firewall and security logs",
      "Conduct vulnerability assessments",
      "Implement security best practices",
      "Stay updated on latest security threats"
    ]
  },
  {
    icon1: Code,
    icon2: Cloud,
    title: "Afternoon: The Builder",
    time: "1:00 PM - 5:00 PM",
    description: "Back to development. I'm writing Python and Go, deploying services to AWS, and configuring CI/CD pipelines.",
    details: [
      "Develop features in Python and Go",
      "Deploy services to AWS cloud",
      "Configure CI/CD pipelines",
      "Implement automated testing",
      "Optimize application performance"
    ]
  },
  {
    icon1: Moon,
    icon2: Laptop,
    title: "Evening: The Freelance Maverick",
    time: "7:00 PM onwards",
    description: "The corporate day is done, but the passion isn't. I dive into freelance projects, helping startups build their MVPs or securing their applications.",
    details: [
      "Work on freelance client projects",
      "Build MVPs for startups",
      "Implement security solutions",
      "Experiment with new technologies",
      "Push creative boundaries"
    ]
  }
];

const hobbies: Hobby[] = [
  {
    icon: Dumbbell,
    title: "The Power Station (Gym)",
    description: "Strength training is my bedrock for discipline. I follow a rigorous Push/Pull/Legs split to maintain peak physical and mental performance.",
    frequency: "4x per week",
    details: [
      "Push: Chest, Shoulders, Triceps for explosive power",
      "Pull: Back, Biceps focusing on controlled movements",
      "Legs: The foundation of all strength and stability",
      "Fuel: High-protein diet (Chicken, Rice, Protein Shakes)"
    ]
  },
  {
    icon: Book,
    title: "Reading & Philosophy",
    description: "I consume books that challenge my mental models, focusing on strategy, psychology, and technical mastery.",
    frequency: "Daily",
    quote: "The quality of your life is the quality of your relationships with yourself and others.",
    details: [
      "Atomic Habits - Systems design for life",
      "The Psychology of Money - Financial mindset",
      "Deep Work - Mastering focus in a noisy world"
    ]
  },
  {
    icon: Waves, // Re-using Waves or similar for rhythm
    title: "The Rhythm Section (Music)",
    description: "Music is my engine for productivity. I flow through hip-hop, R&B soul, and reggae while architecting systems.",
    frequency: "Constant",
    details: [
      "Hip-Hop: Kendrick Lamar, Nas, Outkast, Kanye West",
      "Soul & R&B: Ms. Hill (Lauryn Hill), Neo-Soul classics",
      "Reggae & Pop: For high-energy coding sessions",
      "The Vibe: Precision and rhythm in every line of code"
    ]
  }
];

const inspirations = [
  {
    name: "Linus Torvalds",
    role: "Founder, Linux & Git",
    icon: "solar:terminal-bold",
    lesson: "The power of open-source and version control architecture.",
    detail: "His focus on efficiency and the creation of Git changed the world of software engineering forever."
  },
  {
    name: "Warren Buffett",
    role: "The Oracle of Omaha",
    icon: "solar:banknote-bold",
    lesson: "Strategic non-action and extreme discipline in financial systems.",
    detail: "Holding quality assets indefinitely mirrors my approach to clean, long-term code."
  },
  {
    name: "Jeff Bezos",
    role: "Founder, Amazon",
    icon: "solar:cart-large-bold",
    lesson: "Pioneering marketplace systems and customer-centric engineering.",
    detail: "The 'Day 1' mentality: approaching every project with curiosity and urgency."
  }
];

const cinematicLore = [
  {
    title: "Interstellar",
    icon: "solar:stars-bold",
    quote: "We used to look up at the sky and wonder at our place in the stars. Now we just look down and worry about our place in the dirt.",
    theme: "Exploration & Resolve"
  },
  {
    title: "Mr. Robot",
    icon: "solar:terminal-bold",
    quote: "Control is an illusion.",
    theme: "Cybersecurity & Reality"
  },
  {
    title: "The Social Network",
    icon: "solar:users-group-rounded-bold",
    quote: "A million dollars isn't cool. You know what's cool? A billion dollars.",
    theme: "Ambition & Engineering"
  },
  {
    title: "Inception",
    icon: "solar:layers-bold",
    quote: "Your mind is the scene of the crime.",
    theme: "Complexity & Dreams"
  },
  {
    title: "Whiplash",
    icon: "solar:music-note-bold",
    quote: "There are no two words in the English language more harmful than 'good job'.",
    theme: "Pursuit of Greatness"
  }
];

export default function AboutPage() {
  const [expandedTimeline, setExpandedTimeline] = useState<number[]>([]);
  const [expandedActivities, setExpandedActivities] = useState<number[]>([]);

  const toggleTimeline = (index: number) => {
    setExpandedTimeline(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleActivity = (index: number) => {
    setExpandedActivities(prev =>
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
        <section className="relative min-h-screen w-full flex items-center justify-center py-32 px-6">
          <div className="max-w-7xl mx-auto w-full relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  <span className="font-mono text-[10px] text-accent tracking-widest uppercase">About Me</span>
                </div>
                <h1 className="font-serif italic text-5xl md:text-7xl text-black dark:text-white mb-6 leading-tight">
                  My <span className="text-accent not-italic font-bold">Journey</span>
                </h1>
                <p className="text-gray-800 dark:text-gray-200 text-lg mb-6 leading-relaxed font-serif italic">
                  From curiosity to expertise in digital security, full-stack development, cloud engineering, and DevOps.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-serif italic mb-8">
                  As a full-stack developer with expertise in cybersecurity and DevOps, I bring a unique blend of skills to every project. My approach combines technical excellence with a deep understanding of security principles and efficient deployment practices.
                </p>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-16 bg-gradient-to-r from-accent to-transparent"></div>
                    <span className="text-accent font-serif italic text-sm uppercase tracking-wider">Available Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-800 dark:text-gray-400 font-serif italic text-sm ml-[76px] mb-4">
                    <iconify-icon icon="solar:map-point-bold" width="16"></iconify-icon>
                    <span>Based in Nairobi, Kenya</span>
                  </div>
                  
                  {/* Personal Motto - Refined Typographic Integration */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="ml-[76px] relative"
                  >
                    <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-accent/20" />
                    <p className="font-serif italic text-2xl text-black dark:text-white leading-none mb-1">Invitus Maneo</p>
                    <p className="text-[9px] font-mono text-accent uppercase tracking-[0.3em] opacity-80">I remain unvanquished</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Globe in Glass Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-panel spotlight-card rounded-2xl p-8 relative bg-white dark:bg-transparent"
              >
                <div className="scan-line"></div>
                <div className="flex items-center justify-center">
                  <World />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0806] border-y border-gray-200 dark:border-accent/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// EXPERIENCE</span>
              <h2 className="font-serif italic text-4xl md:text-5xl text-black dark:text-white mb-4">Professional Journey</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
                Building enterprise solutions and delivering measurable impact across industries
              </p>
            </div>

            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 relative group hover:bg-white/5 dark:hover:bg-white/5 transition-colors bg-white dark:bg-transparent"
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Icon & Date */}
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-accent/10 rounded-full inline-block mb-4 relative">
                          <event.icon className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
                          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        </div>
                        <p className="font-mono text-xs text-accent tracking-wider whitespace-nowrap">{event.date}</p>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-serif italic text-2xl text-black dark:text-white mb-2">{event.title}</h3>
                        <p className="text-gray-800 dark:text-gray-200 text-sm font-sans">{event.summary}</p>
                      </div>

                      {/* Expand Button */}
                      <button
                        onClick={() => toggleTimeline(index)}
                        className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 transition-colors"
                      >
                        {expandedTimeline.includes(index) ? (
                          <Minus className="h-5 w-5 text-accent" />
                        ) : (
                          <Plus className="h-5 w-5 text-accent" />
                        )}
                      </button>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedTimeline.includes(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-accent/10">
                            <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-sans">
                              {event.description.split('\n').map((line, idx) => (
                                line.trim() && (
                                  <p key={idx} className="flex items-start gap-2">
                                    {line.startsWith('•') ? (
                                      <>
                                        <span className="text-accent mt-1 flex-shrink-0">•</span>
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DAY IN THE LIFE SECTION - Enhanced with Expandable Cards */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// DAILY ROUTINE</span>
              <h2 className="font-serif italic text-4xl md:text-5xl text-black dark:text-white mb-4">A Day in the Life</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
                Juggling the worlds of full-stack development and cybersecurity, from corporate challenges to freelance adventures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dayActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 relative group hover:bg-white/5 dark:hover:bg-white/5 transition-colors bg-white dark:bg-transparent"
                >
                  <div className="scan-line"></div>
                  
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex gap-2 flex-shrink-0">
                          <div className="p-3 bg-accent/10 rounded-full relative">
                            <activity.icon1 className="h-6 w-6 text-accent" />
                          </div>
                          <div className="p-3 bg-accent/10 rounded-full relative">
                            <activity.icon2 className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif italic text-xl text-black dark:text-white mb-1">{activity.title}</h3>
                          <p className="font-mono text-accent text-xs">{activity.time}</p>
                        </div>
                      </div>
                      
                      {/* Expand Button */}
                      <button
                        onClick={() => toggleActivity(index)}
                        className="flex-shrink-0 w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 transition-colors"
                      >
                        {expandedActivities.includes(index) ? (
                          <Minus className="h-5 w-5 text-accent" />
                        ) : (
                          <Plus className="h-5 w-5 text-accent" />
                        )}
                      </button>
                    </div>

                    <p className="text-gray-800 dark:text-gray-200 text-sm font-sans">{activity.description}</p>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {expandedActivities.includes(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-accent/10">
                            <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Key Activities</h4>
                            <div className="space-y-2">
                              {activity.details.map((detail, idx) => (
                                <p key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm font-sans">
                                  <span className="text-accent mt-1 flex-shrink-0">•</span>
                                  <span className="flex-1">{detail}</span>
                                </p>
                              ))}
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

        {/* ICONS OF INSPIRATION SECTION - Bento Grid */}
        <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0806] border-y border-accent/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// ARCHITECTS OF THOUGHT</span>
              <h2 className="font-serif italic text-4xl md:text-5xl text-black dark:text-white mb-4">Icons of Inspiration</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
                Learning from those who defined strategic excellence and long-term systems creation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inspirations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    "glass-panel spotlight-card rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-500",
                    index === 0 ? "md:col-span-2" : "md:col-span-1"
                  )}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <iconify-icon icon={item.icon} width={index === 0 ? "180" : "120"}></iconify-icon>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <iconify-icon icon={item.icon} width="24" class="text-accent"></iconify-icon>
                      </div>
                      <div>
                        <h3 className="text-black dark:text-white font-serif italic text-2xl leading-none mb-1">{item.name}</h3>
                        <p className="text-accent font-mono text-[10px] tracking-widest uppercase">{item.role}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                        <p className="text-accent font-serif italic text-lg leading-relaxed mb-2">"{item.lesson}"</p>
                        <p className="text-gray-900 dark:text-gray-300 text-sm font-sans leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CINEMATIC LORE SECTION */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// CINEMATIC LORE</span>
              <h2 className="font-serif italic text-4xl md:text-5xl text-black dark:text-white mb-4">Masterpieces & Reflections</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
                Films that reshaped my understanding of complexity, ambition, and the human condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cinematicLore.map((movie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "glass-panel spotlight-card rounded-2xl p-8 flex flex-col items-start hover:bg-white/5 transition-all duration-500 border border-black/5 dark:border-white/5 bg-white dark:bg-transparent min-h-[220px]",
                    index === 0 ? "lg:col-span-2" : "",
                    index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  )}
                >
                  <div className="w-full flex justify-between items-start mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <iconify-icon icon={movie.icon} width="28" class="text-accent"></iconify-icon>
                    </div>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em]">{movie.theme}</span>
                  </div>
                  
                  <h3 className={cn(
                    "text-black dark:text-white font-serif italic mb-4 leading-tight",
                    index === 0 ? "text-3xl" : "text-xl"
                  )}>{movie.title}</h3>
                  
                  <div className="mt-auto relative w-full">
                    <div className="absolute -top-4 -left-2 text-accent/10 text-6xl font-serif">"</div>
                    <p className={cn(
                      "text-gray-900 dark:text-gray-300 font-serif italic leading-relaxed pt-2",
                      index === 0 ? "text-lg" : "text-sm"
                    )}>
                      {movie.quote}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOBBIES SECTION */}
        <section className="py-24 px-6 bg-gray-50 dark:bg-[#0a0806] border-y border-accent/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// BEYOND CODE</span>
              <h2 className="font-serif italic text-4xl md:text-5xl text-black dark:text-white mb-4">Hobbies & Interests</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
                Staying balanced through physical activities, continuous learning, and entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "glass-panel spotlight-card rounded-2xl p-8 relative group hover:bg-white/5 dark:hover:bg-white/5 transition-colors bg-white dark:bg-transparent flex flex-col h-full",
                    index === 0 ? "md:col-span-2" : "md:col-span-1"
                  )}
                >
                  <div className="scan-line"></div>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-accent/10 rounded-full relative">
                        <hobby.icon className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-black dark:text-white font-serif italic text-xl">{hobby.title}</h3>
                        <span className="font-mono text-[10px] text-accent tracking-widest uppercase">{hobby.frequency}</span>
                      </div>
                      <p className="text-gray-900 dark:text-gray-300 text-sm font-sans leading-relaxed">{hobby.description}</p>
                    </div>
                  </div>

                  {hobby.quote && (
                    <div className="mb-6 pl-4 border-l-2 border-accent/30">
                      <p className="text-gray-800 dark:text-gray-200 text-base font-serif italic">"{hobby.quote}"</p>
                    </div>
                  )}

                  {hobby.details && (
                    <div className="mt-auto pt-6 border-t border-accent/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hobby.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 group/item">
                          <div className="w-1 h-1 bg-accent rounded-full group-hover/item:scale-150 transition-transform"></div>
                          <span className="text-[11px] text-gray-900 dark:text-gray-300 font-mono tracking-tight">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LIFE STACK OVERVIEW - Creative Conceptual Section */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 xl:col-span-5">
                <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// ARCHITECTURE</span>
                <h2 className="font-serif italic text-4xl md:text-5xl text-black dark:text-white mb-6">The Life Stack</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-serif italic leading-relaxed mb-8">
                  My approach to self-improvement follows the same principles as my development: build on a solid foundation, 
                  optimize every layer, and maintain absolute resolve.
                </p>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <iconify-icon icon="solar:shield-star-bold" width="32" class="text-accent"></iconify-icon>
                  <div>
                    <p className="text-black dark:text-white font-mono text-[10px] tracking-widest uppercase">Operating Motto</p>
                    <p className="text-black dark:text-accent font-serif italic text-xl whitespace-nowrap">"Invitus Maneo"</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-transparent border border-black/5 dark:border-white/5 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-1 bg-accent"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <iconify-icon icon="solar:cpu-bold" width="24" class="text-accent"></iconify-icon>
                      <h4 className="text-black dark:text-white font-mono text-xs tracking-widest uppercase">Hardware (Body)</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-gray-800 dark:text-gray-400 text-[11px] font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span> 4x Weekly Intensity (PPL)
                      </li>
                      <li className="text-gray-800 dark:text-gray-400 text-[11px] font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span> High-Protein Optimization
                      </li>
                      <li className="text-gray-800 dark:text-gray-400 text-[11px] font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full"></span> Mental/Physical Sync
                      </li>
                    </ul>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-transparent border border-black/5 dark:border-white/5 relative group overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-16 h-1 bg-accent/20"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <iconify-icon icon="solar:programming-bold" width="24" class="text-accent"></iconify-icon>
                      <h4 className="text-black dark:text-white font-mono text-xs tracking-widest uppercase">Software (Mind)</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-gray-800 dark:text-gray-400 text-[11px] font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent/30 rounded-full"></span> Strategic Reading Daily
                      </li>
                      <li className="text-gray-800 dark:text-gray-400 text-[11px] font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent/30 rounded-full"></span> Continuous Tech Mastery
                      </li>
                      <li className="text-gray-800 dark:text-gray-400 text-[11px] font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent/30 rounded-full"></span> Creative Visualization
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative glass-panel rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col justify-center items-center text-center overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent"></div>
                    <div className="scan-line"></div>
                  </div>
                  <iconify-icon icon="solar:heart-pulse-bold" width="64" class="text-accent mb-6 animate-pulse"></iconify-icon>
                  <p className="text-black dark:text-white font-serif italic text-lg leading-relaxed mb-2">"True resolve is found in the stillness of the struggle."</p>
                  <span className="text-accent font-mono text-[10px] tracking-widest uppercase opacity-80">– Core Philosophy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="py-24 px-6 border-t border-accent/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel spotlight-card rounded-2xl p-12 text-center bg-white dark:bg-transparent"
            >
              <div className="inline-block p-4 rounded-full bg-accent/10 mb-6">
                <Target className="h-12 w-12 text-accent" />
              </div>
              <h2 className="font-serif italic text-4xl text-black dark:text-white mb-6">My Mission</h2>
              <p className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed font-serif italic max-w-2xl mx-auto">
                To bridge the gap between cutting-edge technology and robust security, creating solutions that are
                <span className="text-accent font-semibold"> secure by design</span>,
                <span className="text-accent font-semibold"> scalable by nature</span>, and
                <span className="text-accent font-semibold"> accessible to all</span>.
                I aim to empower organizations with technology that not only meets their current needs but
                adapts to future challenges in our rapidly evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </PageTransition>
  );
}
