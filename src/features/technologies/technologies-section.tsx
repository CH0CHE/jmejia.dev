'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { technologies } from '@/data/technologies'
import { useLanguage } from '@/lib/i18n/language-provider'
import type { Dictionary } from '@/lib/i18n/dictionaries'
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
  'Vercel':       { abbr: '▲',   color: '#e2e8f0', bg: 'rgba(226,232,240,0.12)' },
  'Claude':       { abbr: '✦',   color: '#D97757', bg: 'rgba(217,119,87,0.14)'  },
  'Playwright':   { abbr: 'PW',  color: '#2EAD33', bg: 'rgba(46,173,51,0.12)'   },
}

const LEVEL_COUNT: Record<string, number> = {
  expert: 4,
  advanced: 3,
  intermediate: 2,
  beginner: 1,
}

function getCategories(t: Dictionary): { value: 'all' | TechCategory; label: string }[] {
  return [
    { value: 'all', label: t.technologies.categories.all },
    { value: 'frontend', label: t.technologies.categories.frontend },
    { value: 'backend', label: t.technologies.categories.backend },
    { value: 'cloud', label: t.technologies.categories.cloud },
    { value: 'database', label: t.technologies.categories.database },
    { value: 'devops', label: t.technologies.categories.devops },
    { value: 'tools', label: t.technologies.categories.tools },
  ]
}

function LevelDots({ level }: { level: string }) {
  const { t } = useLanguage()
  const count = LEVEL_COUNT[level] ?? 2
  return (
    <div className="flex gap-0.5" aria-label={t.technologies.levels[level as keyof Dictionary['technologies']['levels']]}>
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
  className,
}: {
  tech: (typeof technologies)[0]
  className?: string
}) {
  const { t } = useLanguage()
  const meta = TECH_META[tech.name] ?? { abbr: tech.name.slice(0, 2).toUpperCase(), color: '#22d3ee', bg: 'rgba(34,211,238,0.12)' }

  return (
    <div
      className={cn(
        'group flex w-52 shrink-0 flex-col items-center gap-3 rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
        className
      )}
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
          {t.technologies.levels[tech.level]}
        </p>
      </div>

      {/* Level */}
      <LevelDots level={tech.level} />
    </div>
  )
}

// Spacing lives on each card (margin) rather than a flex `gap` on the track,
// so the duplicated list's halfway point lands exactly on the seam between
// the two copies — a perfectly seamless loop instead of a half-gap jump.
function MarqueeRow({ items }: { items: (typeof technologies)[0][] }) {
  if (items.length === 0) return null

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max animate-marquee [animation-duration:80s] hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} tech={tech} className="mr-4" />
        ))}
      </div>
    </div>
  )
}

// Filtered view: a static, fully-visible wrapped row (no scroll/animation)
// so a chosen category is easy to read without chasing moving cards.
function StaticTechRow({ items }: { items: (typeof technologies)[0][] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </div>
  )
}

export function TechnologiesSection() {
  const [active, setActive] = useState<'all' | TechCategory>('all')
  const { t } = useLanguage()
  const categories = getCategories(t)

  const filtered =
    active === 'all' ? technologies : technologies.filter((t2) => t2.category === active)
  const sorted = [...filtered].sort((a, b) => LEVEL_COUNT[b.level] - LEVEL_COUNT[a.level])

  return (
    <SectionWrapper id="technologies" variant="alt">
      <Container>
        <SectionHeading
          eyebrow={t.technologies.eyebrow}
          title={t.technologies.title}
          description={t.technologies.description}
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label={t.technologies.filterAria}>
          {categories.map(({ value, label }) => (
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

        {/* All: a continuously flowing marquee. Filtered: a static, fully-readable row. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="tabpanel"
          >
            {active === 'all' ? <MarqueeRow items={sorted} /> : <StaticTechRow items={sorted} />}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          {(Object.entries(t.technologies.levels) as [keyof Dictionary['technologies']['levels'], string][]).map(([key, label]) => (
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
