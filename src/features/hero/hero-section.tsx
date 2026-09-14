'use client'

import { motion } from 'framer-motion'
import { ArrowDown, FolderKanban, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { GradientText } from '@/components/shared/gradient-text'
import { useLanguage } from '@/lib/i18n/language-provider'
import { ParticleCanvas } from './particle-canvas'
import { TypewriterText } from './typewriter-text'

const SPECIALTIES = [
  'Next.js & React',
  '.NET & Node.js',
  'AWS & Cloud Architecture',
  'Clean Architecture',
  'Serverless & Microservices',
]

// Plain CSS animations (not framer-motion) for the above-the-fold entrance:
// they run from the server-rendered `style` attribute the moment the browser
// paints, with no dependency on JS downloading/hydrating first. The hero
// heading is this page's LCP element, and gating its opacity behind a
// framer-motion `animate` prop — which only fires after React hydrates —
// was pushing both FCP and LCP out by however long hydration took.
const fadeUpStyle = (delaySeconds = 0): React.CSSProperties => ({
  animation: `fade-in-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delaySeconds}s both`,
})

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label={t.hero.sectionAria}
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <ParticleCanvas />
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(34,211,238,0.07), transparent)',
        }}
        aria-hidden
      />

      <Container className="relative z-10 pb-24 pt-36">
        <div className="mx-auto max-w-4xl text-center">

          {/* Available indicator */}
          <div className="hero-fade-in" style={fadeUpStyle(0)}>
            <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t.hero.availableBadge}
            </span>
          </div>

          {/* Name */}
          <h1
            style={fadeUpStyle(0.1)}
            className="hero-fade-in mb-5 mt-6 text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="text-foreground">Josue </span>
            <GradientText variant="primary" className="text-glow-primary">
              Mejia
            </GradientText>
          </h1>

          {/* Role */}
          <p
            style={fadeUpStyle(0.2)}
            className="hero-fade-in mb-4 text-xl font-semibold text-muted-foreground sm:text-2xl lg:text-3xl"
          >
            {t.hero.role}
          </p>

          {/* Typewriter */}
          <div
            style={fadeUpStyle(0.3)}
            className="hero-fade-in mb-12 flex h-8 items-center justify-center gap-2 text-base text-muted-foreground sm:text-lg"
          >
            <span>{t.hero.specializedIn}</span>
            <TypewriterText
              items={SPECIALTIES}
              className="font-semibold text-primary"
            />
          </div>

          {/* CTAs */}
          <div
            style={fadeUpStyle(0.4)}
            className="hero-fade-in flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'min-w-44 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary'
              )}
            >
              <FolderKanban className="h-4 w-4" aria-hidden />
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'min-w-44 gap-2 border-border bg-transparent hover:border-primary/50 hover:bg-primary/10 hover:text-primary'
              )}
            >
              <Mail className="h-4 w-4" aria-hidden />
              {t.hero.ctaContact}
            </a>
          </div>

          {/* Location */}
          <p
            style={{ animation: 'fade-in 0.8s ease 0.65s both' }}
            className="hero-fade-in mt-10 text-sm text-muted-foreground/60"
          >
            {t.hero.location}
          </p>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label={t.hero.nextSectionAria}
          className="flex flex-col items-center gap-2 text-muted-foreground/40 transition-colors hover:text-muted-foreground"
        >
          <span className="text-[10px] uppercase tracking-widest">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" aria-hidden />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
