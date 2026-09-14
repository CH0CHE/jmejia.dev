'use client'

import Image from 'next/image'
import { Award, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TechBadge } from '@/components/shared/tech-badge'
import { useLanguage } from '@/lib/i18n/language-provider'
import type { Certification } from '@/types'

const VISIBLE_KEYWORDS = 3

const INSTITUTION_LOGOS: Record<string, { src: string; whiteBg?: boolean }> = {
  INTECAP: { src: '/logos/intecap.webp' },
  HACKMETRIX: { src: '/logos/hackmetrix.webp', whiteBg: true },
}

interface CertificationCardProps {
  certification: Certification
  className?: string
  /** Marks a visually-duplicated copy (used to loop the marquee seamlessly) as hidden from assistive tech and keyboard tabbing. */
  duplicate?: boolean
}

export function CertificationCard({ certification, className, duplicate }: CertificationCardProps) {
  const { language, t } = useLanguage()
  const name = certification.name[language]
  const visibleKeywords = certification.keywords.slice(0, VISIBLE_KEYWORDS)
  const extraCount = certification.keywords.length - visibleKeywords.length
  const logo = INSTITUTION_LOGOS[certification.institution]

  return (
    <article
      aria-hidden={duplicate || undefined}
      className={cn(
        'group flex h-80 w-[280px] shrink-0 flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:w-[320px]',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110',
            logo ? (logo.whiteBg ? 'bg-white p-1.5' : 'bg-surface-elevated') : 'bg-primary/12 text-primary'
          )}
          aria-hidden
        >
          {logo ? (
            <Image
              src={logo.src}
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          ) : (
            <Award className="h-5 w-5" />
          )}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {certification.institution}
          </p>
          <h3 className="mt-0.5 line-clamp-3 text-sm font-bold leading-snug text-foreground sm:text-base">
            {name}
          </h3>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-wrap items-start gap-1.5">
        {visibleKeywords.map((keyword) => (
          <TechBadge key={keyword} name={keyword} />
        ))}
        {extraCount > 0 && (
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
            +{extraCount}
          </span>
        )}
      </div>

      <a
        href={certification.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={t.certifications.viewCertificateAria.replace('{name}', name)}
        className="mt-5 inline-flex cursor-pointer items-center gap-1.5 self-start text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        {t.certifications.viewCertificate}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
      </a>
    </article>
  )
}
