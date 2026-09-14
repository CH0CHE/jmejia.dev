'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/shared/icons'
import { navItems, socialLinks } from '@/data/navigation'
import { useLanguage } from '@/lib/i18n/language-provider'

type IconKey = 'github' | 'linkedin' | 'mail' | 'message-circle'

const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  github: (p) => <GithubIcon {...p} />,
  linkedin: (p) => <LinkedinIcon {...p} />,
  mail: Mail,
  'message-circle': WhatsAppIcon,
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-surface" aria-label={t.footer.footerAria}>
      <Container>
        <div className="py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

            {/* Brand */}
            <div>
              <p className="text-xl font-bold gradient-primary">jmejia.dev</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.hero.role}
                <br />
                {t.common.location}
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
            <nav aria-label={t.footer.footerNavAria}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t.footer.navigationLabel}
              </p>
              <ul className="space-y-2.5" role="list">
                {navItems.map(({ href, key }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {t.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t.footer.contactLabel}
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
              {t.footer.copyright}
            </p>
            <p className="text-xs text-muted-foreground">
              {t.footer.builtWith}{' '}
              <span className="text-primary">Next.js</span>,{' '}
              <span className="text-primary">Tailwind CSS</span> {t.footer.and}{' '}
              <span className="text-primary">Framer Motion</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
