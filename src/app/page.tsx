import { HeroSection } from '@/features/hero/hero-section'
import { AboutSection } from '@/features/about/about-section'
import { TechnologiesSection } from '@/features/technologies/technologies-section'
import { ExperienceSection } from '@/features/experience/experience-section'
import { EducationSection } from '@/features/education/education-section'
import { CertificationsSection } from '@/features/certifications/certifications-section'
import { ProjectsSection } from '@/features/projects/projects-section'
import { ContactSection } from '@/features/contact/contact-section'

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
