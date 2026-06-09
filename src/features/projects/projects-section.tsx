'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { GithubIcon } from '@/components/shared/icons'
import { projects } from '@/data/projects'
import { FeaturedProjectCard, ProjectCard } from './project-card'

const featured = projects.filter((p) => p.featured)
const rest = projects.filter((p) => !p.featured)

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" variant="alt">
      <Container>
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos que construí"
          description="Software real, en producción, resolviendo problemas reales."
        />

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="mb-12 space-y-8">
            {featured.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Rest of projects grid */}
        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-6 text-lg font-semibold text-muted-foreground"
              >
                Otros proyectos
              </motion.h3>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </>
        )}

        {/* "More on GitHub" CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-center gap-4 rounded-xl border border-border bg-surface px-6 py-10 text-center"
        >
          <p className="text-base font-medium text-muted-foreground">
            ¿Quieres ver más proyectos y contribuciones?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/CH0CHE"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'sm' }),
                'gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary-sm'
              )}
            >
              <GithubIcon className="h-4 w-4" />
              Ver GitHub
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'gap-2 border-border bg-transparent hover:border-primary/40 hover:text-primary'
              )}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Hablemos de tu proyecto
            </a>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
