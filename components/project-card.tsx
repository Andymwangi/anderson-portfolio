"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/project-types";
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

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-xl hover:border-orange/50 hover:shadow-2xl hover:shadow-orange/10 cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
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

        {/* Always-visible title bar: solid dark strip so title is readable on any image */}
        <div
          className="absolute bottom-0 left-0 right-0 pt-16 pb-5 px-5 bg-gradient-to-t from-black via-black/95 to-transparent"
          aria-hidden
        >
          <h3
            className="text-lg font-bold text-white line-clamp-2 font-bricolage"
            style={{
              textShadow: "0 0 12px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,1), 0 2px 8px rgba(0,0,0,0.9)",
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/98 via-slate-900/90 to-slate-900/70 flex flex-col justify-end p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 font-bricolage drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">{project.title}</h3>
          <p className="text-slate-200 text-sm mb-4 line-clamp-3 font-inter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">{project.des}</p>

          <div className="flex justify-between items-center">
            {/* Tech Icons */}
            <div className="flex space-x-2">
              {project.iconLists.slice(0, 3).map((iconName, index) => {
                const iconId = ICON_LIST_TO_ICONIFY[iconName];
                if (!iconId) return null;
                return (
                  <div key={index} className="w-6 h-6 bg-orange/20 rounded-full flex items-center justify-center" title={iconName.replace(/^(Si|Fa)/, '')}>
                    <iconify-icon icon={iconId} width="16" height="16" className="text-orange" />
                  </div>
                );
              })}
              {project.iconLists.length > 3 && (
                <div className="w-6 h-6 bg-orange/20 rounded-full flex items-center justify-center text-xs text-orange font-semibold">
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
                  className="text-white hover:text-orange transition-colors"
                >
                  <iconify-icon icon="mdi:github" width="18" height="18" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-white hover:text-orange transition-colors"
                >
                  <iconify-icon icon="solar:link-square-bold" width="16" height="16" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 right-3 bg-orange/90 text-white text-xs px-3 py-1 rounded-full font-poppins font-medium shadow-lg">
        {project.category}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
