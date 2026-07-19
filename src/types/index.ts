export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  technologies: string[]
  url?: string
  github?: string
  image?: string
  video?: string
  year: number
  featured?: boolean
}

export interface Technology {
  name: string
  icon: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: TechCategory
}

export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'cloud'
  | 'database'
  | 'devops'
  | 'tools'

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  highlights: string[]
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}
