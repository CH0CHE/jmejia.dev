'use client'

import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n/language-provider'
import { CertificationCard } from './certification-card'
import type { Certification } from '@/types'

interface CertificationCarouselProps {
  certifications: Certification[]
}

// Auto-flowing, seamless loop: the track is the list rendered twice back to
// back, each card spaced with its own trailing margin (not a flex `gap`, which
// would add one extra gap at the seam and break the exact halfway point the
// loop relies on). The duplicate copy is hidden from assistive tech/tabbing
// since it's a purely visual continuation of the same certificates.
export function CertificationCarousel({ certifications }: CertificationCarouselProps) {
  const { t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()

  if (certifications.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border bg-surface/50 px-6 py-10 text-center text-sm text-muted-foreground">
        {t.certifications.noResults}
      </p>
    )
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={t.certifications.carouselAria}
      className="relative overflow-hidden rounded-2xl [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      <div
        className={cn(
          'flex w-max hover:[animation-play-state:paused]',
          !prefersReducedMotion && '[animation:marquee_50s_linear_infinite]'
        )}
      >
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} className="mr-4" />
        ))}
        {certifications.map((certification) => (
          <CertificationCard
            key={`${certification.id}-dup`}
            certification={certification}
            className="mr-4"
            duplicate
          />
        ))}
      </div>
    </div>
  )
}

// Filtered view: a static, fully-visible wrapped row (no scroll/animation) —
// same rationale as the technologies section: once someone has narrowed the
// list down, chasing a moving row to read it is more confusing than helpful.
export function StaticCertificationRow({ certifications }: CertificationCarouselProps) {
  const { t } = useLanguage()

  if (certifications.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border bg-surface/50 px-6 py-10 text-center text-sm text-muted-foreground">
        {t.certifications.noResults}
      </p>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {certifications.map((certification) => (
        <CertificationCard key={certification.id} certification={certification} />
      ))}
    </div>
  )
}
