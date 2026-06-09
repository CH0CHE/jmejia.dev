import type { NavItem, SocialLink } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Tecnologías', href: '#technologies' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/CH0CHE', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/josue-mejia',
    icon: 'linkedin',
  },
  { label: 'Email', url: 'mailto:josue.mejia@digifact.com', icon: 'mail' },
  { label: 'WhatsApp', url: 'https://wa.me/50200000000', icon: 'message-circle' },
]
