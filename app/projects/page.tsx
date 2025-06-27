"use client"

import { motion } from "framer-motion"
import { FolderOpen } from "lucide-react"
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
            <motion.div
              className="inline-block mb-6"
            >
              <FolderOpen className="h-20 w-20 text-orange-500 mx-auto glow-orange" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 rainbow-gradient bg-clip-text text-transparent">
              My Project Portfolio
            </h1>
            <motion.p

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
                      ? "border-2 border-green-400 shadow-lg shadow-green-400/30 dark:border-green-500 dark:shadow-green-500/30"
                      : "border-2 border-transparent hover:border-green-400/50 hover:shadow-md hover:shadow-green-400/20 dark:hover:border-green-500/50 dark:hover:shadow-green-500/20"
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
                <Card className="h-full bg-cream/90 backdrop-blur-sm border-border/50 border-2 border-warm-copper/20 hover:border-warm-copper/60 transition-all duration-300 flex flex-col overflow-hidden relative shadow-lg shadow-warm-copper/10 hover:shadow-warm-copper/30">
                  <CardHeader className="relative p-0 h-48 overflow-hidden">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Translucent/Glossy Deep Forest Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-deep-forest/50 via-deep-forest/30 to-deep-forest/50 backdrop-blur-[2px] group-hover:opacity-0 transition-all duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(26, 42, 36, 0.6) 0%, rgba(26, 42, 36, 0.3) 50%, rgba(26, 42, 36, 0.6) 100%)',
                        backdropFilter: 'blur(2px) saturate(1.2)',
                        WebkitBackdropFilter: 'blur(2px) saturate(1.2)',
                      }}
                    />
                    
                    {/* Glossy shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 70%)',
                      }}
                    />
                    
                    <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-4 relative">
                    {/* Content overlay for translucent effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-deep-forest/25 via-deep-forest/15 to-deep-forest/25 backdrop-blur-[1px] group-hover:opacity-0 transition-all duration-500 rounded-b-lg"
                      style={{
                        backdropFilter: 'blur(1px) saturate(1.1)',
                        WebkitBackdropFilter: 'blur(1px) saturate(1.1)',
                      }}
                    />
                    
                    <div className="relative z-10 opacity-30 group-hover:opacity-100 transition-opacity duration-500 flex flex-col h-full">
                      <p className="text-gray-700 mb-4 flex-grow font-medium">
                        {project.des}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-deep-forest/20">
                        {project.iconLists.slice(0, 7).map((iconName, index) => {
                          const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
                          if (!IconComponent) return null;
                          return (
                            <div key={index} className="w-8 h-8 bg-deep-forest/10 rounded-full flex items-center justify-center" title={iconName.replace(/^(Si|Fa)/, '')}>
                              <IconComponent className="h-5 w-5 text-deep-forest" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Warm Gold Glowing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-warm-copper opacity-20 group-hover:opacity-60 pointer-events-none"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(184, 134, 11, 0.3), 0 0 20px rgba(184, 134, 11, 0.2)",
                        "0 0 15px rgba(184, 134, 11, 0.4), 0 0 30px rgba(184, 134, 11, 0.3)",
                        "0 0 10px rgba(184, 134, 11, 0.3), 0 0 20px rgba(184, 134, 11, 0.2)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
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
