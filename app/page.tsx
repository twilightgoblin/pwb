import { HeroSection } from "@/components/hero-section"
import { HeroProperties } from "@/components/hero-properties"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { AboutSection } from "@/components/about-section"
import { ServiceAreasSection } from "@/components/service-areas-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroProperties />
      <WhyChooseUsSection />
      <AboutSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
