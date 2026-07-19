import type { Language } from '@/types'

const MONTHS_ES_TO_EN: Record<string, string> = {
  enero: 'January',
  febrero: 'February',
  marzo: 'March',
  abril: 'April',
  mayo: 'May',
  junio: 'June',
  julio: 'July',
  agosto: 'August',
  septiembre: 'September',
  octubre: 'October',
  noviembre: 'November',
  diciembre: 'December',
}

export function localizeDate(date: string, language: Language): string {
  if (language === 'es') return date
  return date.replace(/\p{L}+/gu, (word) => MONTHS_ES_TO_EN[word.toLowerCase()] ?? word)
}
