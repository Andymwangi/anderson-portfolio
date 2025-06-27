"use client"

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Lightbulb, Zap, TrendingUp } from "lucide-react";
import { FaReact, FaGithub, FaExternalLinkAlt, FaQuoteLeft } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiAppwrite,
  SiPrisma,
  SiPostgresql,
  SiPhp,
  SiLaravel,
  SiShadcnui,
  SiJavascript,
  SiDocker,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/project-types";
import Image from "next/image";
import Link from "next/link";

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const iconComponents: { [key: string]: React.ElementType } = {
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiAppwrite,
  SiPrisma,
  SiPostgresql,
  SiPhp,
  SiLaravel,
  SiShadcnui,
  SiJavascript,
  SiDocker,
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-cream/95 dark:bg-charcoal/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-warm-gold/20 dark:border-warm-copper/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-8 bg-gradient-to-br from-warm-gold to-warm-gold/70 dark:from-warm-copper dark:to-warm-copper/70 rounded-t-2xl">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden">
                  <Image 
                    src={project.img} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {project.category}
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30">
                      Client: {project.client}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-white/80 text-lg">{project.des}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8 text-gray-700 dark:text-cream">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h3 className="text-xl font-semibold mb-4 text-warm-gold dark:text-warm-copper">Project Overview</h3>
                <p className="text-gray-600 dark:text-cream/80 leading-relaxed">{project.fullDescription}</p>
              </motion.div>

              {/* Challenge & Solution */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h3 className="text-xl font-semibold mb-4 text-warm-gold dark:text-warm-copper">Challenge & Solution</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-orange-50 dark:bg-warm-copper/10 rounded-lg border border-orange-200 dark:border-warm-copper/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-orange-600 dark:text-warm-copper" />
                      <h4 className="font-semibold text-orange-800 dark:text-warm-copper">Challenge</h4>
                    </div>
                    <p className="text-gray-600 dark:text-cream/80">{project.challenge}</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-sage/10 rounded-lg border border-green-200 dark:border-sage/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-5 w-5 text-green-600 dark:text-sage" />
                      <h4 className="font-semibold text-green-800 dark:text-sage">Solution</h4>
                    </div>
                    <p className="text-gray-600 dark:text-cream/80">{project.solution}</p>
                  </div>
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-warm-gold dark:text-warm-copper">
                  <TrendingUp className="h-5 w-5 text-warm-gold dark:text-warm-copper" />
                  <span>Impact & Results</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.impact.map((impact, i) => (
                    <motion.div
                      key={`impact-${i}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-warm-gold/10 dark:bg-warm-copper/10 rounded-lg border border-warm-gold/20 dark:border-warm-copper/20"
                    >
                      <div className="w-2 h-2 bg-warm-gold dark:bg-warm-copper rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-cream/80">{impact}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.7 }}
                className="p-6 bg-warm-gold/10 dark:bg-warm-copper/10 rounded-xl border border-warm-gold/20 dark:border-warm-copper/20"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="text-warm-gold dark:text-warm-copper">
                    <FaQuoteLeft size={30} />
                  </div>
                  <div>
                    <p className="italic text-gray-600 dark:text-cream/80 mb-4">"{project.testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-warm-gold dark:text-warm-copper">{project.testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-cream/60">{project.testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <h3 className="text-xl font-semibold mb-4 text-warm-gold dark:text-warm-copper">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.iconLists.map((iconName, i) => {
                    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
                    if (!IconComponent) return null;
                    return (
                      <motion.div
                        key={`tech-${i}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 flex items-center justify-center bg-warm-gold/10 dark:bg-warm-copper/10 rounded-full p-1 border border-warm-gold/20 dark:border-warm-copper/20"
                        title={iconName.replace(/^(Si|Fa)/, '')}
                      >
                        <IconComponent className="h-6 w-6 text-warm-gold dark:text-warm-copper" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-warm-gold hover:bg-warm-gold/80 text-white">
                    <FaExternalLinkAlt className="h-4 w-4 mr-2" />
                    View Live Site
                  </Button>
                </a>
                
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white dark:border-warm-copper dark:text-warm-copper dark:hover:bg-warm-copper dark:hover:text-charcoal"
                    >
                      <FaGithub className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                )}
                
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-warm-gold/50 text-warm-gold hover:bg-warm-gold/10 dark:border-warm-copper/50 dark:text-warm-copper dark:hover:bg-warm-copper/10"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Contact Me
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
