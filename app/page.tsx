import { HeroSection } from "@/components/hero-section"
import { HeroServices } from "@/components/hero-services"
import { AboutSection } from "@/components/about-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroServices />
      <AboutSection />
      <ServiceAreasSection />
      <TestimonialsSection />
    </main>
  )
}
