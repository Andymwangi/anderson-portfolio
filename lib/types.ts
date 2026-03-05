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
  icon: string
  gradient: string
}
