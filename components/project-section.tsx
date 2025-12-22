"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { Project } from "@/lib/project-types";
import ProjectCard from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

export default function ProjectSection({ limit, showFilters = true }: { limit?: number, showFilters?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProjects = projects;

  const projectCategories = ["All", ...new Set(allProjects.map((project) => project.category))];

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const projectsToDisplay = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-forest dark:text-warm-copper font-bricolage">
            Featured Projects
          </h2>
          <p className="text-slate-grey dark:text-cream/70 max-w-2xl mx-auto">
            Explore my portfolio of projects that showcase my expertise in web development, 
            from responsive websites to complex full-stack applications.
          </p>
        </motion.div>

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {projectCategories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-deep-forest text-cream dark:bg-warm-copper dark:text-charcoal"
                    : "bg-deep-forest/10 text-deep-forest dark:bg-warm-copper/10 dark:text-warm-copper hover:bg-deep-forest/20 dark:hover:bg-warm-copper/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onOpenModal={handleOpenModal} />
            </motion.div>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </section>
  );
}
