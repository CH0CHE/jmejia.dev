'use client'

import { motion } from 'framer-motion'
import { ArrowDown, FolderKanban, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { GradientText } from '@/components/shared/gradient-text'
import { ParticleCanvas } from './particle-canvas'
import { TypewriterText } from './typewriter-text'

const SPECIALTIES = [
  'Next.js & React',
  '.NET & Node.js',
  'AWS & Cloud Architecture',
  'Clean Architecture',
  'Serverless & Microservices',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Presentación principal"
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
          <motion.div {...fadeUp(0)}>
            <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Disponible para proyectos
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mb-5 mt-6 text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="text-foreground">Josue </span>
            <GradientText variant="primary" className="text-glow-primary">
              Mejia
            </GradientText>
          </motion.h1>

          {/* Role */}
          <motion.p
            {...fadeUp(0.2)}
            className="mb-4 text-xl font-semibold text-muted-foreground sm:text-2xl lg:text-3xl"
          >
            Full Stack Software Engineer
          </motion.p>

          {/* Typewriter */}
          <motion.div
            {...fadeUp(0.3)}
            className="mb-12 flex h-8 items-center justify-center gap-2 text-base text-muted-foreground sm:text-lg"
          >
            <span>Especializado en</span>
            <TypewriterText
              items={SPECIALTIES}
              className="font-semibold text-primary"
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'min-w-44 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary'
              )}
            >
              <FolderKanban className="h-4 w-4" aria-hidden />
              Ver proyectos
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'min-w-44 gap-2 border-border bg-transparent hover:border-primary/50 hover:bg-primary/10 hover:text-primary'
              )}
            >
              <Mail className="h-4 w-4" aria-hidden />
              Hablemos
            </a>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 text-sm text-muted-foreground/60"
          >
            📍 Ciudad de Guatemala, Guatemala
          </motion.p>
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
          aria-label="Ir a la siguiente sección"
          className="flex flex-col items-center gap-2 text-muted-foreground/40 transition-colors hover:text-muted-foreground"
        >
          <span className="text-[10px] uppercase tracking-widest">scroll</span>
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
