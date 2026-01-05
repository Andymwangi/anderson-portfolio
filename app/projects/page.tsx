"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageTransition } from "@/components/page-transition";
import { ProjectModal } from "@/components/project-modal";
import { useProjects } from "@/hooks";
import Footer from "@/components/footer";
import { FaReact } from 'react-icons/fa';
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
} from 'react-icons/si';
import { PORTFOLIO_SUMMARY } from "@/lib/constants";

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

export default function Projects() {
  const {
    filteredProjects,
    selectedProject,
    isModalOpen,
    openModal,
    closeModal,
    categories,
    filters,
    setFilter,
  } = useProjects();

  const displayCategories = ["All", ...categories];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* GLOBAL BACKDROP */}
        <div className="fixed inset-0 bg-[#050403] -z-50"></div>

        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] w-full flex items-center justify-center py-32 px-6">
          {/* Radial Pulse Animation */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="absolute w-[400px] h-[400px] rounded-full border border-accent/15 animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-accent/10 animate-ping" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">Portfolio</span>
              </div>
              <h1 className="font-serif italic text-5xl md:text-7xl text-black dark:text-white mb-6 leading-tight">
                Selected <span className="text-accent not-italic font-bold">Works</span>
              </h1>
              <p className="text-gray-800 dark:text-gray-400 text-lg max-w-2xl mx-auto font-sans">
                A showcase of my best projects and technical implementations
              </p>
            </motion.div>
          </div>
        </section>

        {/* FILTERS SECTION */}
        <section className="py-12 px-6 border-y border-accent/10 bg-[#0a0806]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {displayCategories.map((category) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setFilter('category', category === "All" ? null : category)}
                  className={`px-6 py-2 font-mono text-xs tracking-widest uppercase transition-all btn-magnetic ${
                    (filters.category === category) || (category === "All" && !filters.category)
                      ? "bg-accent text-black border-accent"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS BENTO GRID */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6">
              {filteredProjects.map((project, index) => {
                // Determine grid spanning for bento layout
                const isFeatured = index === 0 || index === 3 || index === 6;
                const gridClass = isFeatured
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-2";

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`glass-panel spotlight-card rounded-2xl overflow-hidden relative group cursor-pointer ${gridClass}`}
                    onClick={() => openModal(project)}
                  >
                    <div className="scan-line"></div>

                    {/* Project Image */}
                    <div className={`relative w-full ${isFeatured ? "h-full min-h-[400px]" : "h-64"}`}>
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-6 right-6 border border-accent/20 bg-black/50 px-3 py-1 rounded text-[10px] font-mono text-accent backdrop-blur-sm">
                        {project.category}
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                        <h3 className="font-serif font-medium italic text-2xl text-black dark:text-white mb-2">{project.title}</h3>
                        <p className="text-gray-900 dark:text-gray-300 text-sm max-w-md font-sans mb-4">{project.des}</p>

                        {/* Tech Stack Icons */}
                        <div className="flex flex-wrap gap-2">
                          {project.iconLists.slice(0, 5).map((iconName, idx) => {
                            const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
                            if (!IconComponent) return null;
                            return (
                              <div key={idx} className="p-2 bg-white/10 rounded border border-white/10 backdrop-blur-sm hover:bg-accent/20 transition-colors">
                                <IconComponent className="h-4 w-4 text-white" />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SUMMARY */}
        <section className="py-32 px-6 bg-[#0a0806] border-y border-accent/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent font-mono text-xs tracking-widest block mb-4">/// STATISTICS</span>
              <h2 className="font-serif italic text-4xl text-black dark:text-white mb-4">Portfolio Overview</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PORTFOLIO_SUMMARY.map((stat: { number: string; label: string }, index: number) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel spotlight-card rounded-2xl p-8 text-center group hover:bg-white/5 transition-colors"
                >
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-serif italic transition-transform group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-mono uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <span className="absolute -top-2 -right-2 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </PageTransition>
  );
}
