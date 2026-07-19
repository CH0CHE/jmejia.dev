export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jmejia.dev',
  email: process.env.NEXT_PUBLIC_EMAIL ?? '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? '',
  github: process.env.NEXT_PUBLIC_GITHUB ?? '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? '',
  location: process.env.NEXT_PUBLIC_LOCATION ?? 'Ciudad de Guatemala, Guatemala',
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '',
} as const
