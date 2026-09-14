'use client'

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react'
import type { Language } from '@/types'
import { dictionaries } from './dictionaries'

const STORAGE_KEY = 'jmejia-lang'

function isLanguage(value: string | null): value is Language {
  return value === 'es' || value === 'en'
}

// A minimal external store backed by localStorage: useSyncExternalStore reads
// it directly during render (both client-side and for the server snapshot),
// so the persisted preference is picked up without a synchronous setState
// call in an effect, and without a hydration mismatch (the server snapshot
// below matches what the pre-hydration DOM was rendered with).
const listeners = new Set<() => void>()

function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

function getSnapshot(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return isLanguage(stored) ? stored : 'es'
}

function getServerSnapshot(): Language {
  return 'es'
}

function persistLanguage(next: Language) {
  window.localStorage.setItem(STORAGE_KEY, next)
  listeners.forEach((listener) => listener())
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof dictionaries)['es']
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    persistLanguage(next)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
