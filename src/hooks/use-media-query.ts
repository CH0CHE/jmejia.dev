'use client'

import { useCallback, useSyncExternalStore } from 'react'

// useSyncExternalStore (rather than useState+useEffect) reads matchMedia's
// current value directly during render, both on the client and for the SSR
// snapshot below — no synchronous setState-on-mount render cascade, and no
// hydration mismatch since the server snapshot matches the pre-hydration DOM.
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', callback)
      return () => media.removeEventListener('change', callback)
    },
    [query]
  )
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])
  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 639px)')
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isWide = useMediaQuery('(min-width: 1536px)')

  return { isMobile, isTablet, isDesktop, isWide }
}
