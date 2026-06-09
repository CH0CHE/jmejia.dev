import { HeroSection } from '@/features/hero/hero-section'
import { AboutSection } from '@/features/about/about-section'
import { TechnologiesSection } from '@/features/technologies/technologies-section'
import { ExperienceSection } from '@/features/experience/experience-section'
import { ProjectsSection } from '@/features/projects/projects-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* Contact — FASE 6 */}
      <div id="contact" className="section-offset" />
    </main>
  )
}
