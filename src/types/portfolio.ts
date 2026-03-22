export interface SkillCategory {
  category: string
  items: string[]
}

export interface Project {
  id: string
  number: string
  name: string
  description: string
  url: string
}

export interface Socials {
  platform: string
  url: string
  label: string
}

export interface PortfolioData {
  name: string
  role: string
  tagline: string
  location: string
  languages: string
  skills: SkillCategory[]
  projects: Project[]
  socials: Socials[]
}