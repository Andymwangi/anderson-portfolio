"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, Code, Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";
import Link from 'next/link';
import FloatingNavbar from "@/components/floating-navbar";
import ProfessionalIntro from "@/components/professional-intro";
import ProjectSection from "@/components/project-section";
import RotatingKeywords from "@/components/rotating-keywords";
import { SOCIAL_LINKS } from "@/lib/constants";
import Footer from "@/components/footer";
import TypewriterEffect from "@/components/typewriter-effect";
import WaveSeparator from "@/components/wave-separator";
import OrganicSection from "@/components/organic-section";
import OrganicBubbleCard from "@/components/organic-bubble-card";
import GradientDivider from "@/components/gradient-divider";

const services = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Solutions",
    description: "Advanced threat protection, vulnerability assessments, and secure architecture design to safeguard your digital assets.",
  },
  {
    icon: Server,
    title: "Cloud Engineering",
    description: "Scalable, resilient, and cost-effective cloud infrastructures on AWS, Azure, and GCP, tailored to your business needs.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "From concept to deployment, I build seamless, high-performance web applications with modern technologies.",
  },
];



export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* Floating Navbar - only on homepage */}
        <FloatingNavbar />

        {/* Hero Section with Background Image */}
        <div className="relative min-h-screen flex flex-col justify-center items-center -mt-20 z-20">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: 'url(/background.jpg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent"></div>
          </div>

          {/* Extended Bottom Fade for seamless blend */}
          <div className="absolute bottom-0 left-0 right-0 h-[50vh] z-[5]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(245, 230, 211, 0.1) 20%, rgba(245, 230, 211, 0.4) 50%, rgba(245, 230, 211, 0.8) 80%, #F5E6D3 100%)' }}></div>

          {/* Centered Content */}
          <div className="container mx-auto max-w-4xl relative z-10 text-center px-6 py-12 -mt-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white font-bricolage drop-shadow-2xl"
            >
              Anderson Mwangi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-brown-accent mb-8 font-inter drop-shadow-lg"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-inter leading-relaxed"
            >
              Specializing in <RotatingKeywords /> solutions that prioritize security, scalability, and performance.
            </motion.p>
          </div>

        </div>

        {/* Professional Introduction - Organic Blob */}
        <OrganicSection
          variant="blob-full"
          backgroundColor="#F5E6D3"
          paddingTop="6rem"
          paddingBottom="16rem"
          overlapTop={true}
        >
          <div className="container mx-auto max-w-6xl">
            <ProfessionalIntro />
          </div>
        </OrganicSection>

        {/* Services Section - Organic Blob */}
        <OrganicSection
          variant="asymmetric"
          backgroundColor="#E8D4B8"
          paddingTop="6rem"
          paddingBottom="16rem"
          overlapTop={true}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-brown font-bricolage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What I Offer
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <OrganicBubbleCard
                    index={index}
                    size="sm"
                    glowColor={index === 0 ? "rgba(45, 80, 22, 0.4)" : index === 1 ? "rgba(184, 115, 51, 0.4)" : "rgba(54, 69, 79, 0.4)"}
                  >
                    <div className="text-center">
                      <div className="mb-6">
                        <div className="inline-block p-4 bg-brown/10 rounded-full group-hover:bg-brown/20 transition-colors duration-300">
                          <service.icon className="h-10 w-10 text-brown" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-bricolage">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 font-inter">{service.description}</p>
                    </div>
                  </OrganicBubbleCard>
                </motion.div>
              ))}
            </div>
          </div>
        </OrganicSection>

        {/* Featured Projects - Organic Blob */}
        <OrganicSection
          variant="wave-top"
          backgroundColor="#DCC9A8"
          paddingTop="6rem"
          paddingBottom="16rem"
          overlapTop={true}
        >
          <div className="container mx-auto max-w-6xl">
            <ProjectSection limit={3} showFilters={false} />
            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/projects">
                  <Button size="lg" className="bg-brown text-white hover:bg-brown-dark transition-all duration-300 shadow-lg shadow-brown/30 hover:shadow-xl hover:shadow-brown/40 transform hover:-translate-y-1 font-poppins px-8 py-3 rounded-xl">
                    View All Projects
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </OrganicSection>

        {/* Footer with Newsletter */}
        <div className="-mt-32 relative z-20" style={{ backgroundColor: '#DCC9A8' }}>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}
