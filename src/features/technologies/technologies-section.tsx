'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { technologies } from '@/data/technologies'
import type { TechCategory } from '@/types'

// Brand colors per technology
const TECH_META: Record<string, { abbr: string; color: string; bg: string }> = {
  'Next.js':      { abbr: 'NX',  color: '#e2e8f0', bg: 'rgba(226,232,240,0.12)' },
  'React':        { abbr: '⚛',   color: '#61DAFB', bg: 'rgba(97,218,251,0.12)'  },
  'React Native': { abbr: 'RN',  color: '#61DAFB', bg: 'rgba(97,218,251,0.12)'  },
  'TypeScript':   { abbr: 'TS',  color: '#3178C6', bg: 'rgba(49,120,198,0.18)'  },
  'Tailwind CSS': { abbr: 'TW',  color: '#06B6D4', bg: 'rgba(6,182,212,0.12)'   },
  'C#':           { abbr: 'C#',  color: '#a78bfa', bg: 'rgba(167,139,250,0.15)' },
  '.NET':         { abbr: '.N',  color: '#7c3aed', bg: 'rgba(124,58,237,0.15)'  },
  'Node.js':      { abbr: 'NJ',  color: '#68A063', bg: 'rgba(104,160,99,0.15)'  },
  'REST APIs':    { abbr: 'API', color: '#22d3ee', bg: 'rgba(34,211,238,0.12)'  },
  'AWS Lambda':   { abbr: 'λ',   color: '#FF9900', bg: 'rgba(255,153,0,0.12)'   },
  'EC2':          { abbr: 'EC2', color: '#FF9900', bg: 'rgba(255,153,0,0.12)'   },
  'S3':           { abbr: 'S3',  color: '#FF9900', bg: 'rgba(255,153,0,0.12)'   },
  'CloudFront':   { abbr: 'CF',  color: '#FF9900', bg: 'rgba(255,153,0,0.12)'   },
  'Route53':      { abbr: 'R53', color: '#FF9900', bg: 'rgba(255,153,0,0.12)'   },
  'SST':          { abbr: 'SST', color: '#E8D44D', bg: 'rgba(232,212,77,0.12)'  },
  'PostgreSQL':   { abbr: 'PG',  color: '#4169E1', bg: 'rgba(65,105,225,0.18)'  },
  'SQL Server':   { abbr: 'SQL', color: '#CC2927', bg: 'rgba(204,41,39,0.15)'   },
  'DynamoDB':     { abbr: 'DDB', color: '#4053D6', bg: 'rgba(64,83,214,0.18)'   },
  'Docker':       { abbr: 'DK',  color: '#2496ED', bg: 'rgba(36,150,237,0.15)'  },
  'CI/CD':        { abbr: 'CI',  color: '#22d3ee', bg: 'rgba(34,211,238,0.12)'  },
  'Linux':        { abbr: 'LX',  color: '#FCC624', bg: 'rgba(252,198,36,0.12)'  },
  'Git':          { abbr: 'GIT', color: '#F05032', bg: 'rgba(240,80,50,0.15)'   },
  'GitHub':       { abbr: 'GH',  color: '#e2e8f0', bg: 'rgba(226,232,240,0.12)' },
}

const LEVEL_LABEL: Record<string, string> = {
  expert: 'Experto',
  advanced: 'Avanzado',
  intermediate: 'Intermedio',
  beginner: 'Básico',
}

const LEVEL_COUNT: Record<string, number> = {
  expert: 4,
  advanced: 3,
  intermediate: 2,
  beginner: 1,
}

const CATEGORIES: { value: 'all' | TechCategory; label: string }[] = [
  { value: 'all',      label: 'Todas' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend',  label: 'Backend' },
  { value: 'cloud',    label: 'Cloud' },
  { value: 'database', label: 'Bases de datos' },
  { value: 'devops',   label: 'DevOps' },
  { value: 'tools',    label: 'Herramientas' },
]

function LevelDots({ level }: { level: string }) {
  const count = LEVEL_COUNT[level] ?? 2
  return (
    <div className="flex gap-0.5" aria-label={LEVEL_LABEL[level]}>
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={cn(
            'h-1 w-4 rounded-full transition-colors',
            i <= count ? 'bg-primary' : 'bg-muted-foreground/20'
          )}
        />
      ))}
    </div>
  )
}

function TechCard({
  tech,
  index,
}: {
  tech: (typeof technologies)[0]
  index: number
}) {
  const meta = TECH_META[tech.name] ?? { abbr: tech.name.slice(0, 2).toUpperCase(), color: '#22d3ee', bg: 'rgba(34,211,238,0.12)' }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: (index % 12) * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Icon badge */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold font-mono transition-transform duration-300 group-hover:scale-110"
        style={{ background: meta.bg, color: meta.color }}
        aria-hidden
      >
        {meta.abbr}
      </div>

      {/* Name */}
      <div>
        <p className="text-sm font-semibold text-foreground leading-tight">{tech.name}</p>
        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground/60">
          {LEVEL_LABEL[tech.level]}
        </p>
      </div>

      {/* Level */}
      <LevelDots level={tech.level} />
    </motion.div>
  )
}

export function TechnologiesSection() {
  const [active, setActive] = useState<'all' | TechCategory>('all')

  const filtered =
    active === 'all' ? technologies : technologies.filter((t) => t.category === active)

  return (
    <SectionWrapper id="technologies" variant="alt">
      <Container>
        <SectionHeading
          eyebrow="Stack tecnológico"
          title="Tecnologías que domino"
          description="Herramientas con las que construyo software moderno, escalable y de alto rendimiento."
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrar por categoría">
          {CATEGORIES.map(({ value, label }) => (
            <button
              key={value}
              role="tab"
              aria-selected={active === value}
              onClick={() => setActive(value)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                active === value
                  ? 'bg-primary text-primary-foreground shadow-sm glow-primary-sm'
                  : 'border border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            role="tabpanel"
          >
            {filtered.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          {Object.entries(LEVEL_LABEL).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={cn(
                      'h-1 w-3 rounded-full',
                      i <= LEVEL_COUNT[key] ? 'bg-primary' : 'bg-muted-foreground/20'
                    )}
                  />
                ))}
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
