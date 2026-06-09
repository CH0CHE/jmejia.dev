import { env } from '@/lib/env'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Josue Francisco Mejia Morales',
  givenName: 'Josue',
  familyName: 'Mejia Morales',
  jobTitle: 'Full Stack Software Engineer',
  url: env.siteUrl,
  email: `mailto:${env.email}`,
  image: `${env.siteUrl}/opengraph-image`,
  sameAs: [env.github, env.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: env.location,
    addressCountry: 'GT',
  },
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'C#',
    '.NET',
    'Node.js',
    'AWS',
    'PostgreSQL',
    'Docker',
    'Clean Architecture',
    'Domain Driven Design',
    'Serverless Architecture',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Josue Mejia — Portfolio',
  url: env.siteUrl,
  description:
    'Full Stack Software Engineer especializado en Next.js, React, .NET y arquitecturas cloud en AWS.',
  author: {
    '@type': 'Person',
    name: 'Josue Francisco Mejia Morales',
  },
}

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
