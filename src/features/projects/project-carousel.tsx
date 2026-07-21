'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { TechBadge } from '@/components/shared/tech-badge'
import { GithubIcon } from '@/components/shared/icons'
import { useLanguage } from '@/lib/i18n/language-provider'
import { ProjectMedia } from './project-card'
import type { Project } from '@/types'

const AUTOPLAY_MS = 7000

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const { language, t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()

  const [[index, direction], setSlide] = useState<[number, number]>([0, 0])
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = projects.length
  const project = projects[index]

  const goTo = useCallback(
    (next: number) => {
      setSlide(([current]) => [
        (next + total) % total,
        next > current ? 1 : -1,
      ])
    },
    [total]
  )

  const goNext = useCallback(() => {
    setSlide(([current, ]) => [(current + 1) % total, 1])
  }, [total])

  const goPrev = useCallback(() => {
    setSlide(([current]) => [(current - 1 + total) % total, -1])
  }, [total])

  // Autoplay — paused on hover/focus, disabled entirely under prefers-reduced-motion.
  useEffect(() => {
    if (!isPlaying || isHovering || prefersReducedMotion) return

    timerRef.current = setInterval(goNext, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, isHovering, prefersReducedMotion, goNext, index])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    }
  }

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : dir > 0 ? 48 : -48,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : dir > 0 ? -48 : 48,
    }),
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={t.projects.carouselAria}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
    >
      {/* Screen-reader status announcement */}
      <p className="sr-only" aria-live="polite">
        {t.projects.slideStatus
          .replace('{current}', String(index + 1))
          .replace('{total}', String(total))
          .replace('{name}', project.name)}
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-surface">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.article
            key={project.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${total}`}
            className="group relative"
          >
            {project.featured && (
              <div className="absolute left-5 top-5 z-10 flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                <Star className="h-3 w-3 fill-current" aria-hidden />
                {t.projects.featuredBadge}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: visual */}
              <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[400px]">
                <ProjectMedia
                  video={project.video}
                  image={project.image}
                  technologies={project.technologies}
                  name={project.name}
                  logoBackground={project.logoBackground}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface opacity-0 transition-opacity duration-300 lg:opacity-30" />

                {/* Prev / next controls — anchored to the media box so they stay
                    correctly centered whether the card is stacked (mobile) or
                    side-by-side (desktop). */}
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={t.projects.previousProjectAria}
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary lg:h-9 lg:w-9"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={t.projects.nextProjectAria}
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary lg:h-9 lg:w-9"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>

              {/* Right: content */}
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {project.year}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                  {project.name}
                </h3>

                <p className="mb-2 line-clamp-3 text-base text-muted-foreground leading-relaxed">
                  {project.description[language]}
                </p>

                {project.longDescription && (
                  <p className="mb-6 line-clamp-4 text-sm text-muted-foreground/80 leading-relaxed">
                    {project.longDescription[language]}
                  </p>
                )}

                {/* Tech stack */}
                <div className="mb-8 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 8).map((techName) => (
                    <TechBadge key={techName} name={techName} variant="primary" />
                  ))}
                  {project.technologies.length > 8 && (
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      +{project.technologies.length - 8}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: 'sm' }),
                        'gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary-sm'
                      )}
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      {t.projects.viewLiveSite}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: 'outline', size: 'sm' }),
                        'gap-2 border-border bg-transparent hover:border-primary/40 hover:bg-primary/10 hover:text-primary'
                      )}
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      {t.projects.viewCode}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Dots + play/pause */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${t.projects.goToProjectAria} ${p.name}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === index ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-primary/40'
              )}
            />
          ))}
        </div>

        {!prefersReducedMotion && (
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? t.projects.pauseCarouselAria : t.projects.playCarouselAria}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {isPlaying ? (
              <Pause className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <Play className="h-3.5 w-3.5" aria-hidden />
            )}
          </button>
        )}
      </div>
    </div>
  )
}
