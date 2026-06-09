import type { NavItem, SocialLink } from '@/types'
import { env } from '@/lib/env'

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Tecnologías', href: '#technologies' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: env.github, icon: 'github' },
  { label: 'LinkedIn', url: env.linkedin, icon: 'linkedin' },
  { label: 'Email', url: `mailto:${env.email}`, icon: 'mail' },
  { label: 'WhatsApp', url: `https://wa.me/${env.whatsapp}`, icon: 'message-circle' },
]
