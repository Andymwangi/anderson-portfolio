import type { LucideIcon } from "lucide-react"

export interface Project {
  title: string
  organization: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  metrics: Record<string, string | undefined>
  status: string
  category: string
  icon: LucideIcon
  gradient: string
}
