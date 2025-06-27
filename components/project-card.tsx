"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/project-types";
import { FaReact, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
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

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(project)}
    >
      {/* Project Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-deep-forest/90 to-deep-forest/40 dark:from-warm-copper/90 dark:to-warm-copper/40 flex flex-col justify-end p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-cream mb-2 line-clamp-2">{project.title}</h3>
          <p className="text-cream/80 text-sm mb-4 line-clamp-3">{project.des}</p>
          
          <div className="flex justify-between items-center">
            {/* Tech Icons */}
            <div className="flex space-x-2">
              {project.iconLists.slice(0, 3).map((iconName, index) => {
                const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
                if (!IconComponent) return null;
                return (
                  <div key={index} className="w-6 h-6 bg-cream/10 rounded-full flex items-center justify-center" title={iconName.replace(/^(Si|Fa)/, '')}>
                    <IconComponent className="h-4 w-4 text-cream" />
                  </div>
                );
              })}
              {project.iconLists.length > 3 && (
                <div className="w-6 h-6 bg-cream/10 rounded-full flex items-center justify-center text-xs text-cream">
                  +{project.iconLists.length - 3}
                </div>
              )}
            </div>
            
            {/* Links */}
            <div className="flex space-x-3">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-cream hover:text-warm-copper dark:hover:text-deep-forest transition-colors"
                >
                  <FaGithub size={18} />
                </a>
              )}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-cream hover:text-warm-copper dark:hover:text-deep-forest transition-colors"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-3 right-3 bg-deep-forest/80 dark:bg-warm-copper/80 text-cream text-xs px-2 py-1 rounded-full">
        {project.category}
      </div>
      
      {/* Glowing effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-deep-forest dark:border-warm-copper opacity-0 group-hover:opacity-100"
        animate={{
          boxShadow: isHovered 
            ? [
                "0 0 10px rgba(26, 42, 36, 0.5), 0 0 20px rgba(26, 42, 36, 0.3)",
                "0 0 15px rgba(26, 42, 36, 0.5), 0 0 30px rgba(26, 42, 36, 0.3)",
                "0 0 10px rgba(26, 42, 36, 0.5), 0 0 20px rgba(26, 42, 36, 0.3)"
              ]
            : "none"
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default ProjectCard;
