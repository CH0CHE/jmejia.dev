import { cn } from '@/lib/utils'

interface TechBadgeProps {
  name: string
  className?: string
  variant?: 'default' | 'outline' | 'primary'
}

export function TechBadge({ name, className, variant = 'default' }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200',
        variant === 'default' &&
          'border border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-primary',
        variant === 'outline' &&
          'border border-primary/30 text-primary hover:border-primary hover:bg-primary/10',
        variant === 'primary' && 'bg-primary/15 text-primary border border-primary/25',
        className
      )}
    >
      {name}
    </span>
  )
}
