'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { TechBadge } from '@/components/shared/tech-badge'
import { education } from '@/data/education'
import { useLanguage } from '@/lib/i18n/language-provider'
import { localizeDate } from '@/lib/i18n/format-date'

export function EducationSection() {
  const { language, t } = useLanguage()

  return (
    <SectionWrapper id="education">
      <Container size="lg">
        <SectionHeading
          eyebrow={t.education.eyebrow}
          title={t.education.title}
          description={t.education.description}
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-12 md:pl-0"
              >
                {/* Mobile dot */}
                <div
                  className={cn(
                    'absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 md:hidden',
                    edu.current
                      ? 'border-primary bg-primary/20 glow-primary-sm'
                      : 'border-border bg-surface'
                  )}
                  aria-hidden
                >
                  <GraduationCap
                    className={cn(
                      'h-3.5 w-3.5',
                      edu.current ? 'text-primary' : 'text-muted-foreground'
                    )}
                  />
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8">
                  {/* Date column (desktop) */}
                  <div
                    className={cn(
                      'hidden md:flex md:items-start md:gap-4',
                      i % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:order-2 md:justify-start md:pl-12'
                    )}
                  >
                    <div className="hidden md:flex md:flex-col md:items-center">
                      <div
                        className={cn(
                          'absolute left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2',
                          edu.current
                            ? 'border-primary bg-background glow-primary-sm'
                            : 'border-border bg-surface'
                        )}
                        aria-hidden
                      >
                        <GraduationCap
                          className={cn(
                            'h-4 w-4',
                            edu.current ? 'text-primary' : 'text-muted-foreground'
                          )}
                        />
                        {edu.current && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-20" />
                        )}
                      </div>
                    </div>

                    <div className={cn(i % 2 === 0 ? 'text-right' : 'text-left')}>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" aria-hidden />
                        <span>
                          {localizeDate(edu.startDate, language)}
                          {edu.endDate
                            ? ` — ${localizeDate(edu.endDate, language)}`
                            : ` — ${t.common.present}`}
                        </span>
                      </div>
                      {edu.current && (
                        <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {t.common.inProgress}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card column */}
                  <div className={cn(i % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12')}>
                    {/* Mobile date */}
                    <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground md:hidden">
                      <Calendar className="h-3 w-3" aria-hidden />
                      {localizeDate(edu.startDate, language)}
                      {edu.endDate
                        ? ` — ${localizeDate(edu.endDate, language)}`
                        : ` — ${t.common.present}`}
                      {edu.current && (
                        <span className="ml-1 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                          {t.common.inProgress}
                        </span>
                      )}
                    </div>

                    <div
                      className={cn(
                        'rounded-xl border bg-surface p-6 transition-all duration-300 hover:shadow-xl',
                        edu.current
                          ? 'border-primary/30 hover:shadow-primary/10'
                          : 'border-border hover:border-primary/20'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {edu.icon && (
                          <Image
                            src={edu.icon}
                            alt={edu.institution}
                            width={40}
                            height={40}
                            className="h-10 w-10 shrink-0 rounded-full object-contain"
                          />
                        )}
                        <div>
                          {edu.institution && (
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                              {edu.institution}
                            </p>
                          )}
                          <h3 className="mt-0.5 text-base font-bold text-foreground sm:text-lg">
                            {edu.degree[language]}
                          </h3>
                        </div>
                      </div>

                      {edu.note && (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {edu.note[language]}
                        </p>
                      )}

                      {edu.description && (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {edu.description[language]}
                        </p>
                      )}

                      {edu.highlights && (
                        <ul className="mt-4 space-y-1.5" role="list">
                          {edu.highlights.map((h) => (
                            <li
                              key={h.es}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <ChevronRight
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                                aria-hidden
                              />
                              {h[language]}
                            </li>
                          ))}
                        </ul>
                      )}

                      {edu.technologies && (
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {edu.technologies.map((t) => (
                            <TechBadge key={t} name={t} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
