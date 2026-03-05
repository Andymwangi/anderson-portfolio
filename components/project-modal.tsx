"use client"

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
// Map project iconLists keys to Iconify (simple-icons) icon names
const ICON_LIST_TO_ICONIFY: Record<string, string> = {
  FaReact: "simple-icons:react",
  SiNextdotjs: "simple-icons:nextdotjs",
  SiTailwindcss: "simple-icons:tailwindcss",
  SiTypescript: "simple-icons:typescript",
  SiFramer: "simple-icons:framer",
  SiAppwrite: "simple-icons:appwrite",
  SiPrisma: "simple-icons:prisma",
  SiPostgresql: "simple-icons:postgresql",
  SiPhp: "simple-icons:php",
  SiLaravel: "simple-icons:laravel",
  SiShadcnui: "simple-icons:shadcnui",
  SiJavascript: "simple-icons:javascript",
  SiDocker: "simple-icons:docker",
};
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
            className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - theme-aware text so title is visible in light and dark */}
            <div className="relative p-8 border-b border-border bg-background">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-foreground hover:bg-muted"
                onClick={onClose}
              >
                <iconify-icon icon="solar:close-circle-bold" width="24" height="24" />
              </Button>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                  <Image 
                    src={project.img} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="text-foreground border-border">
                      {project.category}
                    </Badge>
                    <Badge variant="secondary" className="text-foreground border-border">
                      Client: {project.client}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 font-bricolage text-foreground">{project.title}</h2>
                  <p className="text-muted-foreground text-lg">{project.des}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8 text-gray-700 dark:text-cream">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h3 className="text-xl font-semibold mb-4 text-warm-gold dark:text-warm-copper font-bricolage">Project Overview</h3>
                <p className="text-gray-600 dark:text-cream/80 leading-relaxed">{project.fullDescription}</p>
              </motion.div>

              {/* Challenge & Solution */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h3 className="text-xl font-semibold mb-4 text-warm-gold dark:text-warm-copper font-bricolage">Challenge & Solution</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-orange-50 dark:bg-warm-copper/10 rounded-lg border border-orange-200 dark:border-warm-copper/20">
                    <div className="flex items-center gap-2 mb-3">
                      <iconify-icon icon="solar:lightbulb-bold" width="20" height="20" className="text-orange-600 dark:text-warm-copper" />
                      <h4 className="font-semibold text-orange-800 dark:text-warm-copper font-bricolage">Challenge</h4>
                    </div>
                    <p className="text-gray-600 dark:text-cream/80">{project.challenge}</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-3">
                      <iconify-icon icon="solar:lightning-bold" width="20" height="20" className="text-accent" />
                      <h4 className="font-semibold text-accent font-bricolage">Solution</h4>
                    </div>
                    <p className="text-gray-600 dark:text-cream/80">{project.solution}</p>
                  </div>
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-warm-gold dark:text-warm-copper font-bricolage">
                  <iconify-icon icon="solar:graph-up-bold" width="20" height="20" className="text-warm-gold dark:text-warm-copper" />
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
                    <iconify-icon icon="solar:quote-down-bold" width="30" height="30" />
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
                <h3 className="text-xl font-semibold mb-4 text-warm-gold dark:text-warm-copper font-bricolage">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.iconLists.map((iconName, i) => {
                    const iconId = ICON_LIST_TO_ICONIFY[iconName];
                    if (!iconId) return null;
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
                        <iconify-icon icon={iconId} width="24" height="24" className="text-warm-gold dark:text-warm-copper" />
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
                    <iconify-icon icon="solar:link-square-bold" width="16" height="16" className="mr-2 inline" />
                    View Live Site
                  </Button>
                </a>
                
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white dark:border-warm-copper dark:text-warm-copper dark:hover:bg-warm-copper dark:hover:text-charcoal"
                    >
                      <iconify-icon icon="mdi:github" width="16" height="16" className="mr-2 inline" />
                      View Code
                    </Button>
                  </a>
                )}
                
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-warm-gold/50 text-warm-gold hover:bg-warm-gold/10 dark:border-warm-copper/50 dark:text-warm-copper dark:hover:bg-warm-copper/10"
                  >
                    <iconify-icon icon="solar:arrow-right-bold" width="16" height="16" className="mr-2 inline" />
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
