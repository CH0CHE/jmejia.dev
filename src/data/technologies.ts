import type { Technology } from '@/types'

export const technologies: Technology[] = [
  // Frontend
  { name: 'Next.js', icon: 'nextjs', level: 'advanced', category: 'frontend' },
  { name: 'React', icon: 'react', level: 'advanced', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 'advanced', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 'advanced', category: 'frontend' },
  { name: 'React Native', icon: 'react', level: 'advanced', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'nodejs', level: 'intermediate', category: 'backend' },
  { name: 'REST APIs', icon: 'api', level: 'intermediate', category: 'backend' },
  { name: 'C#', icon: 'csharp', level: 'intermediate', category: 'backend' },
  { name: '.NET', icon: 'dotnet', level: 'intermediate', category: 'backend' },

  // Cloud
  { name: 'AWS Lambda', icon: 'aws', level: 'beginner', category: 'cloud' },
  { name: 'EC2', icon: 'aws', level: 'beginner', category: 'cloud' },
  { name: 'S3', icon: 'aws', level: 'beginner', category: 'cloud' },
  { name: 'SST', icon: 'sst', level: 'beginner', category: 'cloud' },

  // Database
  { name: 'PostgreSQL', icon: 'postgresql', level: 'beginner', category: 'database' },
  { name: 'SQL Server', icon: 'mssql', level: 'intermediate', category: 'database' },
  { name: 'DynamoDB', icon: 'dynamodb', level: 'intermediate', category: 'database' },

  // DevOps
  { name: 'Git', icon: 'git', level: 'advanced', category: 'devops' },
  { name: 'GitHub', icon: 'github', level: 'advanced', category: 'devops' },
  { name: 'Linux', icon: 'linux', level: 'beginner', category: 'devops' },
  { name: 'Docker', icon: 'docker', level: 'beginner', category: 'devops' },
]
