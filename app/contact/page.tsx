import { ContactUsPage } from "@/components/contact-us-page"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - PropertyWaleBabu | Real Estate Services in Lucknow",
  description: "Contact PropertyWaleBabu for premium real estate services in Lucknow. Get your free property consultation today. Call (+91)-99369-31555.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactUsPage />
      <FooterSection />
    </>
  )
}