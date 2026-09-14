'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterTextProps {
  items: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
}

export function TypewriterText({
  items,
  typingSpeed = 75,
  deletingSpeed = 38,
  pauseTime = 2200,
  className,
}: TypewriterTextProps) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = items[idx]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && text === target) {
      timer = setTimeout(() => setDeleting(true), pauseTime)
    } else if (deleting && text === '') {
      timer = setTimeout(() => {
        setDeleting(false)
        setIdx((i) => (i + 1) % items.length)
      }, 0)
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting
              ? target.slice(0, text.length - 1)
              : target.slice(0, text.length + 1)
          ),
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timer)
  }, [text, deleting, idx, items, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={cn('inline-flex items-center', className)}>
      <span>{text}</span>
      <span
        className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-current align-middle"
        aria-hidden="true"
      />
    </span>
  )
}
