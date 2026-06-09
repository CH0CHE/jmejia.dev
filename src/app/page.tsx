import { HeroSection } from '@/features/hero/hero-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Placeholder sections — built in FASE 4/5/6 */}
      <div id="about" className="section-offset" />
      <div id="technologies" className="section-offset" />
      <div id="projects" className="section-offset" />
      <div id="experience" className="section-offset" />
      <div id="contact" className="section-offset" />
    </main>
  )
}
