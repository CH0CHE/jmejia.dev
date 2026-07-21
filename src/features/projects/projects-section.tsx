'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { GithubIcon } from '@/components/shared/icons'
import { projects } from '@/data/projects'
import { useLanguage } from '@/lib/i18n/language-provider'
import { ProjectCarousel } from './project-carousel'

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="projects" variant="alt">
      <Container>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mb-16">
          <ProjectCarousel projects={projects} />
        </div>

        {/* "More on GitHub" CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-center gap-4 rounded-xl border border-border bg-surface px-6 py-10 text-center"
        >
          <p className="text-base font-medium text-muted-foreground">
            {t.projects.moreQuestion}
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
              {t.projects.viewGithub}
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'gap-2 border-border bg-transparent hover:border-primary/40 hover:text-primary'
              )}
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              {t.projects.talkAboutProject}
            </a>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
