export type Language = 'es' | 'en'

export interface Localized {
  es: string
  en: string
}

export interface Project {
  id: string
  name: string
  description: Localized
  longDescription?: Localized
  technologies: string[]
  url?: string
  github?: string
  image?: string
  /** Background for the small logo tile in the placeholder; defaults to the primary-tinted box. */
  logoBackground?: 'light'
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
  role: Localized
  startDate: string
  endDate?: string
  description: Localized
  technologies: string[]
  highlights: Localized[]
  icon?: string
}

export interface Education {
  id: string
  institution: string
  degree: Localized
  startDate: string
  endDate?: string
  note?: Localized
  description?: Localized
  technologies?: string[]
  highlights?: Localized[]
  icon?: string
  current?: boolean
}

export interface Certification {
  id: string
  name: Localized
  institution: string
  url: string
  keywords: string[]
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface NavItem {
  key:
    | 'home'
    | 'about'
    | 'technologies'
    | 'projects'
    | 'experience'
    | 'education'
    | 'certifications'
    | 'contact'
  href: string
}
