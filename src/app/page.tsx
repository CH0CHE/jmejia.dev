import { HeroSection } from '@/features/hero/hero-section'
import { AboutSection } from '@/features/about/about-section'
import { TechnologiesSection } from '@/features/technologies/technologies-section'
import { ExperienceSection } from '@/features/experience/experience-section'
import { ProjectsSection } from '@/features/projects/projects-section'
import { ContactSection } from '@/features/contact/contact-section'

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
