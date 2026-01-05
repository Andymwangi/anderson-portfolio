"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Footer from "@/components/footer";
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiNestjs, SiMysql, SiPrisma, SiMongodb } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';

const profileImages = [
  "/profileimage.jpg",
  "/profileimage2.jpg",
  "/profileimage3.jpg"
];

const techStack = [
  { name: "React.js", Icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Golang", Icon: TbBrandGolang, color: "#00ADD8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Docker", Icon: FaDocker, color: "#2496ED" },
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* GLOBAL BACKDROP */}
        <div className="fixed inset-0 bg-[#050403] -z-50"></div>

        {/* HERO SECTION */}
        <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
          {/* Radial Pulse Animation */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="absolute w-[300px] h-[300px] rounded-full border border-accent/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute w-[500px] h-[500px] rounded-full border border-accent/15 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
            <div className="absolute w-[700px] h-[700px] rounded-full border border-accent/10 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
            <div className="absolute w-[900px] h-[900px] rounded-full border border-accent/5 animate-ping" style={{ animationDuration: '6s', animationDelay: '1.5s' }}></div>
          </div>

          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/background.jpg"
              alt="Background"
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-[#050403]/80 to-[#050403] z-10"></div>
          </div>

          <div className="relative z-20 text-center max-w-5xl px-6">
            <div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
              <span className="font-mono text-[10px] text-accent tracking-widest uppercase">Full Stack Developer</span>
            </div>
            <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 leading-[0.9] text-white italic">
              Anderson <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-gray-400 not-italic font-bold">Mwangi</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-sans font-light">
              Building secure, scalable web applications with modern technologies.
              Specialized in full-stack development, cybersecurity, and cloud engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <button className="bg-accent text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all hover-trigger w-full sm:w-auto btn-magnetic">
                  View Projects
                </button>
              </Link>
              <a href="/Anderson Mwangi Junior Full stack  Resume (1).pdf" download>
                <button className="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all hover-trigger w-full sm:w-auto btn-magnetic">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50">
            <span className="text-[10px] font-mono tracking-widest text-accent">SCROLL</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
          </div>
        </section>

        {/* MARQUEE (Tech Stack) */}
        <div className="border-y border-gray-200 dark:border-accent/10 bg-[#0a0806] py-6 relative z-20 overflow-hidden marquee-mask w-full">
          <div className="flex whitespace-nowrap animate-marquee w-[max-content]">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 px-10 items-center">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/40 hover:text-accent transition-colors group">
                    <tech.Icon 
                      className="transition-transform group-hover:scale-110" 
                      size={20}
                      style={{ color: tech.color }}
                    />
                    <span className="font-serif text-lg italic">{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* BENTO GRID - About Me Section */}
        <section id="about" className="py-32 px-6 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
              <div>
                <span className="text-accent font-mono text-xs tracking-widest block mb-2">/// ABOUT ME</span>
                <h2 className="font-serif italic text-gray-900 dark:text-white text-4xl md:text-5xl">Who I Am</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Profile Image Showcase */}
              <div className="md:col-span-5 glass-panel spotlight-card rounded-xl overflow-hidden relative group min-h-[500px]">
                <div className="scan-line"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={profileImages[currentImageIndex]}
                    alt="Anderson Mwangi"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent"></div>

                  {/* Slider Indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {profileImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-accent w-8"
                            : "bg-white/60 hover:bg-white/90 w-2"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* About Text */}
              <div className="md:col-span-7 space-y-6">
                <div className="glass-panel spotlight-card rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-serif font-medium italic text-2xl text-white">Full Stack Developer</h3>
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed mb-4 font-sans">
                    I am a passionate Full Stack Developer with specialized expertise in Cybersecurity and Cloud Engineering.
                    With over 3 years of experience, I've helped organizations build secure, scalable, and efficient digital solutions.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    My approach combines technical excellence with a deep understanding of business needs,
                    ensuring that every solution not only meets but exceeds client expectations.
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-panel spotlight-card rounded-xl p-6 flex flex-col items-center justify-center text-center group">
                    <iconify-icon icon="solar:code-circle-bold" width="32" class="text-accent mb-3 transition-transform group-hover:scale-110"></iconify-icon>
                    <span className="text-sm font-mono text-white">Full Stack</span>
                    <span className="w-1 h-1 bg-accent rounded-full animate-pulse mt-2"></span>
                  </div>
                  <div className="glass-panel spotlight-card rounded-xl p-6 flex flex-col items-center justify-center text-center group">
                    <iconify-icon icon="solar:shield-check-bold" width="32" class="text-accent mb-3 transition-transform group-hover:scale-110"></iconify-icon>
                    <span className="text-sm font-mono text-white">Security</span>
                    <span className="w-1 h-1 bg-accent rounded-full animate-pulse mt-2"></span>
                  </div>
                  <div className="glass-panel spotlight-card rounded-xl p-6 flex flex-col items-center justify-center text-center group">
                    <iconify-icon icon="solar:server-square-bold" width="32" class="text-accent mb-3 transition-transform group-hover:scale-110"></iconify-icon>
                    <span className="text-sm font-mono text-white">Cloud</span>
                    <span className="w-1 h-1 bg-accent rounded-full animate-pulse mt-2"></span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <Link href="/contact" className="flex-1">
                    <button className="w-full bg-accent text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-all btn-magnetic rounded-lg">
                      Get in Touch
                    </button>
                  </Link>
                  <Link href="/about" className="flex-1">
                    <button className="w-full border border-white/20 px-6 py-3 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all btn-magnetic rounded-lg">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-32 px-6 bg-[#0a0806] relative z-20 border-y border-gray-200 dark:border-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif italic font-medium text-4xl text-white text-center mb-16">What I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "solar:shield-check-bold",
                  title: "Cybersecurity",
                  description: "Advanced threat protection, security audits, and secure architecture design.",
                  items: ["Penetration Testing", "Security Audits", "Secure Architecture"]
                },
                {
                  icon: "solar:code-circle-bold",
                  title: "Full-Stack Development",
                  description: "End-to-end web application development with modern technologies.",
                  items: ["React & Next.js", "Node.js & Express", "Database Design"]
                },
                {
                  icon: "solar:database-bold",
                  title: "Cloud Engineering",
                  description: "Scalable cloud infrastructures on AWS and modern DevOps practices.",
                  items: ["AWS Deployment", "CI/CD Pipelines", "Docker & Kubernetes"]
                }
              ].map((service, index) => (
                <div key={index} className="glass-panel spotlight-card rounded-2xl p-8 hover:bg-white/5 transition-colors group">
                  <div className="p-3 bg-accent/10 rounded-full inline-block mb-6 relative">
                    <iconify-icon icon={service.icon} width="32" class="text-accent transition-transform group-hover:scale-110"></iconify-icon>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  </div>
                  <h3 className="text-2xl font-serif italic text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 font-sans">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-panel spotlight-card rounded-2xl p-12">
              <h2 className="font-serif italic text-4xl md:text-5xl text-white mb-6">
                Let's Build Something Great
              </h2>
              <p className="text-gray-300 text-lg mb-8 font-sans">
                Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-accent text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all btn-magnetic">
                    Start a Project
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="border border-white/20 px-8 py-4 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all btn-magnetic">
                    View My Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </PageTransition>
  );
}
