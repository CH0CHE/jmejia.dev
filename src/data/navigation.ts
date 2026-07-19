import type { NavItem, SocialLink } from '@/types'
import { env } from '@/lib/env'

export const navItems: NavItem[] = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'technologies', href: '#technologies' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: env.github, icon: 'github' },
  { label: 'LinkedIn', url: env.linkedin, icon: 'linkedin' },
  { label: 'Email', url: `mailto:${env.email}`, icon: 'mail' },
  { label: 'WhatsApp', url: `https://wa.me/${env.whatsapp}`, icon: 'message-circle' },
]
