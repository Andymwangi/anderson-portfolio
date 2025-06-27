import { useState, useCallback, useMemo } from 'react'
import { Project } from '@/lib/project-types'

// Import projects data from a central location
import { projects as projectsData } from '@/lib/data/projects'

type ProjectCategory = string
type ProjectFilter = {
  category?: ProjectCategory | null
  technology?: string | null
  status?: string | null
  search?: string | null
}

export function useProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filters, setFilters] = useState<ProjectFilter>({
    category: null,
    technology: null,
    status: null,
    search: null,
  })

  // Get all projects
  const projects = useMemo(() => projectsData, [])

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>()
    projects.forEach((project) => uniqueCategories.add(project.category))
    return Array.from(uniqueCategories)
  }, [projects])

  // Get unique technologies
  const technologies = useMemo(() => {
    const uniqueTechnologies = new Set<string>()
    projects.forEach((project) => {
      project.technologies.forEach((tech) => uniqueTechnologies.add(tech))
    })
    return Array.from(uniqueTechnologies)
  }, [projects])

  // Get unique statuses
  const statuses = useMemo(() => {
    const uniqueStatuses = new Set<string>()
    projects.forEach((project) => uniqueStatuses.add(project.status))
    return Array.from(uniqueStatuses)
  }, [projects])

  // Filter projects based on current filters
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by category
      if (filters.category && project.category !== filters.category) {
        return false
      }

      // Filter by technology
      if (filters.technology && !project.technologies.includes(filters.technology)) {
        return false
      }

      // Filter by status
      if (filters.status && project.status !== filters.status) {
        return false
      }

      // Filter by search term
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        return (
          project.title.toLowerCase().includes(searchTerm) ||
          project.des.toLowerCase().includes(searchTerm) ||
          project.client.toLowerCase().includes(searchTerm) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm))
        )
      }

      return true
    })
  }, [projects, filters])

  // Modal handlers
  const openModal = useCallback((project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300) // Clear after animation
  }, [])

  // Filter handlers
  const setFilter = useCallback((key: keyof ProjectFilter, value: string | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }, [])

  const clearFilters = useCallback(() => {
    setFilters({
      category: null,
      technology: null,
      status: null,
      search: null,
    })
  }, [])

  return {
    projects,
    filteredProjects,
    categories,
    technologies,
    statuses,
    selectedProject,
    isModalOpen,
    filters,
    openModal,
    closeModal,
    setFilter,
    clearFilters,
  }
}
