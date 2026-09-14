'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-provider'
import { CertificationCard } from './certification-card'
import type { Certification } from '@/types'

interface CertificationCarouselProps {
  certifications: Certification[]
}

export function CertificationCarousel({ certifications }: CertificationCarouselProps) {
  const { t } = useLanguage()
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollPrev(el.scrollLeft > 4)
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  // Reset scroll position whenever the (filtered) item set changes.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: 0 })
    updateScrollState()

    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [certifications, updateScrollState])

  const scrollByPage = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * 0.9, behavior: 'smooth' })
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollByPage(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollByPage(-1)
    }
  }

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
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {certifications.map((certification, i) => (
          <CertificationCard key={certification.id} certification={certification} index={i} />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          disabled={!canScrollPrev}
          aria-label={t.certifications.previousAria}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          disabled={!canScrollNext}
          aria-label={t.certifications.nextAria}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  )
}
