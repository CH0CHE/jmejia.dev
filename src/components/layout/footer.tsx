import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/shared/icons'
import { navItems, socialLinks } from '@/data/navigation'
import { env } from '@/lib/env'

type IconKey = 'github' | 'linkedin' | 'mail' | 'message-circle'

const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  github: (p) => <GithubIcon {...p} />,
  linkedin: (p) => <LinkedinIcon {...p} />,
  mail: Mail,
  'message-circle': WhatsAppIcon,
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface" aria-label="Pie de página">
      <Container>
        <div className="py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

            {/* Brand */}
            <div>
              <p className="text-xl font-bold gradient-primary">jmejia.dev</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Full Stack Developer
                <br />
                {env.location}
              </p>
              <div className="mt-5 flex gap-3">
                {socialLinks.map(({ label, url, icon }) => {
                  const Icon = iconMap[icon as IconKey]
                  if (!Icon) return null
                  return (
                    <a
                      key={label}
                      href={url}
                      target={url.startsWith('http') ? '_blank' : undefined}
                      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <nav aria-label="Navegación del footer">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Navegación
              </p>
              <ul className="space-y-2.5" role="list">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Contacto
              </p>
              <ul className="space-y-2.5" role="list">
                {socialLinks.map(({ label, url, icon }) => {
                  const Icon = iconMap[icon as IconKey]
                  if (!Icon) return null
                  return (
                    <li key={label}>
                      <a
                        href={url}
                        target={url.startsWith('http') ? '_blank' : undefined}
                        rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © 2026 Josue Francisco Mejia Morales. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Construido con{' '}
              <span className="text-primary">Next.js</span>,{' '}
              <span className="text-primary">Tailwind CSS</span> y{' '}
              <span className="text-primary">Framer Motion</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
