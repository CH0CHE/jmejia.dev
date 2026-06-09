import type { Technology } from '@/types'

export const technologies: Technology[] = [
  // Frontend
  { name: 'Next.js', icon: 'nextjs', level: 'expert', category: 'frontend' },
  { name: 'React', icon: 'react', level: 'expert', category: 'frontend' },
  { name: 'React Native', icon: 'react', level: 'advanced', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 'expert', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 'expert', category: 'frontend' },

  // Backend
  { name: 'C#', icon: 'csharp', level: 'advanced', category: 'backend' },
  { name: '.NET', icon: 'dotnet', level: 'advanced', category: 'backend' },
  { name: 'Node.js', icon: 'nodejs', level: 'expert', category: 'backend' },
  { name: 'REST APIs', icon: 'api', level: 'expert', category: 'backend' },

  // Cloud
  { name: 'AWS Lambda', icon: 'aws', level: 'advanced', category: 'cloud' },
  { name: 'EC2', icon: 'aws', level: 'advanced', category: 'cloud' },
  { name: 'S3', icon: 'aws', level: 'advanced', category: 'cloud' },
  { name: 'CloudFront', icon: 'aws', level: 'intermediate', category: 'cloud' },
  { name: 'Route53', icon: 'aws', level: 'intermediate', category: 'cloud' },
  { name: 'SST', icon: 'sst', level: 'advanced', category: 'cloud' },

  // Database
  { name: 'PostgreSQL', icon: 'postgresql', level: 'advanced', category: 'database' },
  { name: 'SQL Server', icon: 'mssql', level: 'advanced', category: 'database' },
  { name: 'DynamoDB', icon: 'dynamodb', level: 'intermediate', category: 'database' },

  // DevOps
  { name: 'Docker', icon: 'docker', level: 'intermediate', category: 'devops' },
  { name: 'CI/CD', icon: 'cicd', level: 'intermediate', category: 'devops' },
  { name: 'Linux', icon: 'linux', level: 'advanced', category: 'devops' },

  // Tools
  { name: 'Git', icon: 'git', level: 'expert', category: 'tools' },
  { name: 'GitHub', icon: 'github', level: 'expert', category: 'tools' },
]
