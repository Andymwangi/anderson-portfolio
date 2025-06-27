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
        <div className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden px-6 py-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-background"
          ></motion.div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <DynamicGreeting name="Anderson Mwangi" role="Full Stack Developer" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-grey dark:text-cream/70 max-w-2xl mb-10"
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
              className="text-4xl font-bold text-center mb-12 text-deep-forest dark:text-warm-copper"
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
                  <Card className="h-full bg-white/90 dark:bg-charcoal/50 backdrop-blur-sm border-warm-copper/20 shadow-lg hover:border-warm-copper hover:shadow-warm-copper/10 transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <div className="inline-block p-4 bg-deep-forest/10 dark:bg-warm-copper/10 rounded-full group-hover:bg-deep-forest/20 dark:group-hover:bg-warm-copper/20 transition-colors duration-300">
                          <service.icon className="h-10 w-10 text-deep-forest dark:text-warm-copper" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-deep-forest dark:text-cream mb-3">{service.title}</h3>
                      <p className="text-slate-grey dark:text-cream/70">{service.description}</p>
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
                  <Button size="lg" className="bg-deep-forest text-cream hover:bg-deep-forest/90 dark:bg-warm-copper dark:text-charcoal dark:hover:bg-warm-copper/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    View All Projects
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer/Connect Section */}
        <div className="py-16 bg-cream/5 dark:bg-charcoal/30 mt-16">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h3 
              className="text-3xl font-bold mb-4 text-deep-forest dark:text-warm-copper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.h3>
            <motion.p 
              className="text-slate-grey dark:text-cream/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind or just want to connect? I'm always open to discussing new opportunities and collaborations.
            </motion.p>
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 bg-white/10 dark:bg-charcoal/50 rounded-full text-deep-forest dark:text-warm-copper hover:bg-deep-forest hover:text-cream dark:hover:bg-warm-copper dark:hover:text-charcoal transition-colors duration-300 shadow-lg"
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 pt-8 border-t border-deep-forest/10 dark:border-warm-copper/10 text-sm text-slate-grey dark:text-cream/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              © {new Date().getFullYear()} Anderson Mitambo Mwangi. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
