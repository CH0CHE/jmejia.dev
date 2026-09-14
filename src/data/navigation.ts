import type { NavItem, SocialLink } from '@/types'
import { env } from '@/lib/env'

// Hash hrefs are path-absolute (`/#id`, not bare `#id`) — Next.js's <Link>
// resolves a bare hash relative to the current URL, which (as documented at
// node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md)
// concatenates onto an existing hash instead of replacing it, producing URLs
// like `/#technologies#certifications` after a couple of in-page nav clicks.
export const navItems: NavItem[] = [
  { key: 'home', href: '/#hero' },
  { key: 'about', href: '/#about' },
  { key: 'technologies', href: '/#technologies' },
  { key: 'experience', href: '/#experience' },
  { key: 'education', href: '/#education' },
  { key: 'certifications', href: '/#certifications' },
  { key: 'projects', href: '/#projects' },
  { key: 'contact', href: '/#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: env.github, icon: 'github' },
  { label: 'LinkedIn', url: env.linkedin, icon: 'linkedin' },
  { label: 'Email', url: `mailto:${env.email}`, icon: 'mail' },
  { label: 'WhatsApp', url: `https://wa.me/${env.whatsapp}`, icon: 'message-circle' },
]
