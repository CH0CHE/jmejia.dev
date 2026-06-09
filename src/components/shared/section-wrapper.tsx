import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'alt'
}

export function SectionWrapper({
  id,
  children,
  className,
  variant = 'default',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-24 md:py-32 scroll-mt-20 section-offset',
        variant === 'alt' && 'bg-gradient-section',
        className
      )}
    >
      {children}
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
