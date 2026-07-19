'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Star, Play, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { TechBadge } from '@/components/shared/tech-badge'
import { GithubIcon } from '@/components/shared/icons'
import { ProjectPlaceholder } from './project-placeholder'
import type { Project } from '@/types'

function ProjectMedia({
  video,
  technologies,
  name,
}: {
  video?: string
  technologies: string[]
  name: string
}) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        {showVideo && video ? (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Cerrar preview"
              className="absolute right-3 top-3 z-10 flex items-center justify-center rounded-full border border-white/20 bg-black/60 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <ProjectPlaceholder name={name} technologies={technologies} />
            {video && (
              <button
                onClick={() => setShowVideo(true)}
                aria-label="Ver preview en video"
                className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm transition-all duration-200 hover:border-primary/70 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
              >
                <Play className="h-3 w-3 fill-current" aria-hidden />
                Ver preview
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Featured card (large, full-width) ────────────────────────────────────────

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-primary/25 bg-surface transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Featured badge */}
      <div className="absolute left-5 top-5 z-10 flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
        <Star className="h-3 w-3 fill-current" aria-hidden />
        Proyecto Destacado
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: visual */}
        <div className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[400px]">
          <ProjectMedia
            video={project.video}
            technologies={project.technologies}
            name={project.name}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface opacity-0 transition-opacity duration-300 lg:opacity-30" />
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

          <p className="mb-2 text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {project.longDescription && (
            <p className="mb-6 text-sm text-muted-foreground/80 leading-relaxed">
              {project.longDescription}
            </p>
          )}

          {/* Tech stack */}
          <div className="mb-8 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <TechBadge key={t} name={t} variant="primary" />
            ))}
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
                Ver sitio en vivo
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
                Ver código
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Regular card (grid) ───────────────────────────────────────────────────────

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Media */}
      <div className="relative h-48 overflow-hidden bg-surface-elevated">
        <ProjectMedia
          video={project.video}
          technologies={project.technologies}
          name={project.name}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
          <span className="shrink-0 rounded-full bg-surface-elevated px-2 py-0.5 text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t) => (
            <TechBadge key={t} name={t} />
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'sm' }),
                'flex-1 gap-1.5 bg-primary/15 text-primary hover:bg-primary/25'
              )}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Sitio
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'flex-1 gap-1.5 border-border bg-transparent hover:border-primary/40 hover:text-primary'
              )}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
