'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { useScrollPosition, useActiveSection } from '@/hooks/use-scroll'
import { useLanguage } from '@/lib/i18n/language-provider'
import { navItems } from '@/data/navigation'

const SECTION_IDS = navItems.map((i) => i.href.replace('#', ''))

const CV_PATHS = {
  es: '/cv/CV_Josue_Mejia_ES.pdf',
  en: '/cv/CV_Josue_Mejia_EN.pdf',
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  const active = useActiveSection(SECTION_IDS)
  const { language, t } = useLanguage()
  const cvHref = CV_PATHS[language]
  const cvFilename = `Josue-Mejia-CV-${language.toUpperCase()}.pdf`

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-border py-3 shadow-lg shadow-black/20'
          : 'py-5'
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={t.nav.mainNavAria}
      >
        {/* Logo */}
        <Link
          href="#hero"
          className="text-xl font-bold tracking-tight gradient-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={t.nav.logoAria}
        >
          jmejia<span className="text-muted-foreground/60">.</span>dev
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex" role="list">
          {navItems.map(({ href, key }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {t.nav[key]}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-px rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <a
            href={cvHref}
            download={cvFilename}
            aria-label={t.nav.downloadCVAria}
            className={cn(
              buttonVariants({ size: 'sm' }),
              'hidden gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary-sm sm:inline-flex'
            )}
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            {t.nav.downloadCV}
          </a>

          <button
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenuAria : t.nav.openMenuAria}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {open ? (
                  <X className="h-5 w-5" aria-hidden />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="glass border-b border-border lg:hidden"
          >
            <ul className="flex flex-col px-4 pb-4 pt-2" role="list">
              {navItems.map(({ href, key }) => {
                const id = href.replace('#', '')
                const isActive = active === id
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-md px-3 py-3 text-sm font-medium transition-colors',
                        isActive
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {t.nav[key]}
                    </Link>
                  </li>
                )
              })}
              <li className="mt-3 border-t border-border pt-3">
                <a
                  href={cvHref}
                  download={cvFilename}
                  className={cn(
                    buttonVariants({ size: 'sm' }),
                    'w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90'
                  )}
                >
                  <Download className="h-3.5 w-3.5" aria-hidden />
                  {t.nav.downloadCV}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
