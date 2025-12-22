"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, Code, Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/page-transition";
import Link from 'next/link';
import FloatingNavbar from "@/components/floating-navbar";
import DynamicGreeting from "@/components/dynamic-greeting";
import ProfessionalIntro from "@/components/professional-intro";
import ProjectSection from "@/components/project-section";
import RotatingKeywords from "@/components/rotating-keywords";
import { SOCIAL_LINKS } from "@/lib/constants";
import Footer from "@/components/footer";
import TypewriterEffect from "@/components/typewriter-effect";

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

        {/* Hero Section with Dynamic Greeting */}
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 py-16 -mt-20 pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <DynamicGreeting name="Anderson Mwangi" role="Full Stack Developer" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 font-inter"
            >
              Specializing in <RotatingKeywords /> solutions that prioritize security, scalability, and performance.
            </motion.p>

            {/* Professional Introduction with Image */}
            <ProfessionalIntro />
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 px-6 bg-cream/5 dark:bg-charcoal/20">
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-orange font-bricolage"
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
                  <Card className="h-full bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 shadow-xl hover:border-orange/50 hover:shadow-2xl hover:shadow-orange/10 transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <div className="inline-block p-4 bg-orange/10 rounded-full group-hover:bg-orange/20 transition-colors duration-300">
                          <service.icon className="h-10 w-10 text-orange" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-bricolage">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 font-inter">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="py-16 px-6">
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
                  <Button size="lg" className="bg-orange text-white hover:bg-orange-dark transition-all duration-300 shadow-lg shadow-orange/30 hover:shadow-xl hover:shadow-orange/40 transform hover:-translate-y-1 font-poppins px-8 py-3 rounded-xl">
                    View All Projects
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer with Newsletter */}
        <Footer />
      </div>
    </PageTransition>
  );
}
