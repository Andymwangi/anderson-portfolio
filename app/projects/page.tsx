"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { ProjectModal } from "@/components/project-modal"
import { FloatingParticles } from "@/components/floating-particles"
import { useProjects, useMotionVariants } from "@/hooks"

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
import { PORTFOLIO_SUMMARY } from "@/lib/constants"

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
  } = useProjects()

  const { getVariant, createStaggerContainer } = useMotionVariants()

  const displayCategories = ["All", ...categories];

  return (
    <PageTransition>
      <div className="min-h-screen cyber-vibrant-gradient p-6 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            variants={getVariant("fadeInDown")}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 rainbow-gradient bg-clip-text text-transparent">
              My Project Portfolio
            </h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={getVariant("fadeIn", 1)}
            >
              A showcase of my skills in action
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={createStaggerContainer(0.05)}
            initial="hidden"
            animate="visible"
          >
            {displayCategories.map((category) => (
              <motion.div key={category} variants={getVariant("fadeInUp")}>
                <Button
                  variant={
                    (filters.category === category) || (category === "All" && !filters.category) 
                    ? "default" 
                    : "outline"
                  }
                  className={`rounded-full transition-all duration-300 ${
                    (filters.category === category) || (category === "All" && !filters.category)
                      ? "border-2 border-warm-gold shadow-lg shadow-warm-gold/30 bg-warm-gold text-white dark:border-warm-gold dark:shadow-warm-gold/30 dark:bg-warm-gold dark:text-charcoal"
                      : "border-2 border-transparent hover:border-warm-gold/50 hover:shadow-md hover:shadow-warm-gold/20 text-foreground hover:text-warm-gold dark:hover:border-warm-gold/50 dark:hover:shadow-warm-gold/20 dark:hover:text-warm-gold"
                  }`}
                  onClick={() => setFilter('category', category === "All" ? null : category)}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={createStaggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={getVariant("fadeInUp")}
                className="cursor-pointer h-full group"
                onClick={() => openModal(project)}
              >
                <Card className="h-full bg-cream/90 dark:bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 glow-warm-gold glow-hover animated-border flex flex-col overflow-hidden shadow-lg">
                  <CardHeader className="relative p-0 h-48 overflow-hidden">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Hover reveal overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-warm-gold/80 via-warm-gold/60 to-warm-gold/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-4"
                      initial={false}
                    >
                      <Badge variant="secondary" className="mb-2 bg-orange-500/20 text-orange-500 border-orange-500/30">{project.category}</Badge>
                      <CardTitle className="text-white text-xl mb-4">{project.title}</CardTitle>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.iconLists.slice(0, 4).map((iconName, index) => {
                          const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
                          if (!IconComponent) return null;
                          return (
                            <div key={index} className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                    
                    {/* Original content that fades out on hover */}
                    <div className="absolute bottom-0 left-0 p-4 group-hover:opacity-0 transition-opacity duration-500">
                      <Badge variant="secondary" className="mb-2 bg-warm-gold/20 text-warm-gold border-warm-gold/30">{project.category}</Badge>
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-6">
                    <div className="flex flex-col h-full">
                      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow font-medium">
                        {project.des}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                        {project.iconLists.slice(0, 7).map((iconName, index) => {
                          const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
                          if (!IconComponent) return null;
                          return (
                            <div key={index} className="p-2 bg-background/50 dark:bg-background/30 rounded-full hover:bg-warm-gold/20 transition-colors">
                              <IconComponent className="h-4 w-4 text-warm-gold" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={getVariant("fadeInUp", 1)}
            initial="hidden"
            animate="visible"
            className="mt-16"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-pink glow-hover">
              <CardHeader>
                <CardTitle className="text-center text-charcoal dark:text-cream text-2xl">Project Portfolio Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {PORTFOLIO_SUMMARY.map((stat: { number: string; label: string; color: string; glow: string }, index: number) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      variants={getVariant("fadeInUp", index * 0.2)}
                      className={`p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 ${stat.glow} glow-hover`}
                    >
                      <motion.div
                        className={`text-3xl font-bold mb-2 ${stat.color}`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {stat.number}
                      </motion.div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </PageTransition>
  )
}
