import { ServicesPage } from "@/components/services-page"
import { FooterSection } from "@/components/footer-section"

export const metadata = {
  title: "Professional Pest Control Services - SLMI Pest Control",
  description: "Comprehensive pest control services including anti-termite reticulation systems, cockroach control, mosquito treatment, and more. Serving Lucknow and Pan India.",
}

export default function Services() {
  return (
    <main>
      <ServicesPage />
      <FooterSection />
    </main>
  )
}