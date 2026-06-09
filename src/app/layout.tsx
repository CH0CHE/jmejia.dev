import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SkipLink } from '@/components/shared/skip-link'
import { StructuredData } from '@/components/shared/structured-data'
import { MotionProvider } from '@/components/shared/motion-provider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#09101f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'Josue Mejia — Full Stack Software Engineer',
    template: '%s | Josue Mejia',
  },
  description:
    'Full Stack Software Engineer especializado en Next.js, React, .NET y arquitecturas cloud en AWS. Construyendo software moderno, escalable y de alto rendimiento desde Ciudad de Guatemala.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    '.NET',
    'C#',
    'AWS',
    'Node.js',
    'Guatemala',
    'Josue Mejia',
    'Josue Francisco Mejia Morales',
  ],
  authors: [{ name: 'Josue Francisco Mejia Morales', url: 'https://jmejia.dev' }],
  creator: 'Josue Francisco Mejia Morales',
  metadataBase: new URL('https://jmejia.dev'),
  alternates: {
    canonical: 'https://jmejia.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'es_GT',
    url: 'https://jmejia.dev',
    title: 'Josue Mejia — Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer especializado en Next.js, React, .NET y arquitecturas cloud en AWS.',
    siteName: 'Josue Mejia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josue Mejia — Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer especializado en Next.js, React, .NET y arquitecturas cloud en AWS.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        <SkipLink />
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
