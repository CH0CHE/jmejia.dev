'use client'

import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { certifications } from '@/data/certifications'
import { useLanguage } from '@/lib/i18n/language-provider'
import { CertificationCarousel, StaticCertificationRow } from './certification-carousel'

const INSTITUTIONS = Array.from(new Set(certifications.map((c) => c.institution)))

export function CertificationsSection() {
  const { language, t } = useLanguage()
  const [institution, setInstitution] = useState<'all' | string>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return certifications.filter((cert) => {
      const matchesInstitution = institution === 'all' || cert.institution === institution
      if (!matchesInstitution) return false
      if (!normalizedQuery) return true

      return (
        cert.name[language].toLowerCase().includes(normalizedQuery) ||
        cert.institution.toLowerCase().includes(normalizedQuery) ||
        cert.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedQuery))
      )
    })
  }, [institution, query, language])

  const isFiltered = institution !== 'all' || query.trim().length > 0

  return (
    <SectionWrapper id="certifications">
      <Container size="lg">
        <SectionHeading
          eyebrow={t.certifications.eyebrow}
          title={t.certifications.title}
          description={t.certifications.description}
        />

        {/* Filters */}
        <div className="mb-10 flex flex-col items-center gap-4">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label={t.certifications.institutionFilterAria}
          >
            {[{ value: 'all', label: t.certifications.allInstitutions }, ...INSTITUTIONS.map((i) => ({ value: i, label: i }))].map(
              ({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={institution === value}
                  onClick={() => setInstitution(value)}
                  className={cn(
                    'cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    institution === value
                      ? 'bg-primary text-primary-foreground shadow-sm glow-primary-sm'
                      : 'border border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  )}
                >
                  {label}
                </button>
              )
            )}
          </div>

          <div className="relative w-full max-w-sm">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.certifications.searchPlaceholder}
              aria-label={t.certifications.searchAria}
              className="h-10 w-full rounded-full border border-border bg-surface pl-10 pr-9 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/40 [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={t.certifications.clearSearchAria}
                className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="h-3.5 w-3.5" aria-hidden />
              </button>
            )}
          </div>

          <p className="text-xs text-muted-foreground" role="status">
            {t.certifications.resultCount
              .replace('{count}', String(filtered.length))
              .replace('{total}', String(certifications.length))}
          </p>
        </div>

        {isFiltered ? (
          <StaticCertificationRow certifications={filtered} />
        ) : (
          <CertificationCarousel certifications={filtered} />
        )}
      </Container>
    </SectionWrapper>
  )
}
