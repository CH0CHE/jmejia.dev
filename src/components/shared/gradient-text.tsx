import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'mixed' | 'shimmer'
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}

const gradients = {
  primary: 'gradient-primary',
  secondary: 'gradient-secondary',
  mixed: 'gradient-primary',
  shimmer: 'gradient-shimmer animate-shimmer',
}

export function GradientText({
  children,
  className,
  variant = 'primary',
  as: Tag = 'span',
}: GradientTextProps) {
  return (
    <Tag className={cn(gradients[variant], className)}>
      {children}
    </Tag>
  )
}
