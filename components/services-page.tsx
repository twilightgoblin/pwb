"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield, CheckCircle, Phone, Globe, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

const generalServices = [
  {
    id: 1,
    title: "Cockroach Control",
    description: "Complete elimination of cockroaches with gel baiting and spray treatments for homes, kitchens, and restaurants. Our advanced gel baiting system targets cockroaches at their source, while our safe spray treatments ensure complete coverage without compromising food safety.",
    image: "/images/2-1024x256.jpg",
    features: ["Gel Baiting Treatment", "Spray Applications", "Kitchen Safe Methods", "Restaurant Solutions"],
    details: "Our cockroach control service uses a multi-pronged approach combining gel baits that cockroaches carry back to their nests, eliminating entire colonies. Safe for use in kitchens and food preparation areas."
  },
  {
    id: 2,
    title: "Mosquito Control", 
    description: "Thermal fogging and larviciding treatments for societies and commercial campuses. Our comprehensive mosquito management includes breeding site elimination, adult mosquito control, and long-term prevention strategies.",
    image: "/images/3.jpg",
    features: ["Thermal Fogging", "Larviciding Treatment", "Society Coverage", "Commercial Solutions"],
    details: "Advanced thermal fogging technology creates fine mist that reaches all mosquito hiding spots. Larviciding treatments target breeding sites to prevent future infestations."
  },
  {
    id: 3,
    title: "Bed Bug Treatment",
    description: "Comprehensive bed bug elimination using heat treatment and targeted spraying for complete eradication. Our proven methods ensure 100% elimination with follow-up treatments and monitoring.",
    image: "/images/4.jpg",
    features: ["Heat Treatment", "Targeted Spraying", "Complete Eradication", "Safe Methods"],
    details: "Heat treatment raises room temperature to levels lethal to bed bugs at all life stages. Combined with targeted chemical applications for comprehensive elimination."
  },
  {
    id: 4,
    title: "Rodent Control",
    description: "Effective rodent management using safe baiting systems and exclusion methods. Our integrated approach includes population control, entry point sealing, and ongoing monitoring for long-term protection.",
    image: "/images/5-1024x256.jpg",
    features: ["Safe Baiting Systems", "Exclusion Methods", "Monitoring", "Prevention"],
    details: "Strategic placement of tamper-resistant bait stations combined with physical exclusion methods. Regular monitoring ensures continued protection against rodent intrusion."
  },
  {
    id: 5,
    title: "Termite Control",
    description: "Advanced termite protection using modern treatment methods and monitoring systems. Our comprehensive approach includes soil treatment, wood treatment, and ongoing monitoring for complete protection.",
    image: "/images/Termite-Control-in-Lucknow-7.jpg",
    features: ["Advanced Protection", "Modern Methods", "Monitoring Systems", "Long-term Solutions"],
    details: "State-of-the-art termite detection and treatment using liquid termiticides, baiting systems, and continuous monitoring to protect your property investment."
  }
]

const antiTermiteFeatures = [
  "Long-term protection for your property",
  "Precise chemical application", 
  "Easy maintenance and refilling",
  "Eco-friendly and safe for the environment"
]

const pipingSystemFeatures = [
  "Seamless integration during construction",
  "Durable and long-lasting materials",
  "Tailored solutions for every property type"
]

const preConstructionBenefits = [
  "Prevents termite infestation from the start",
  "Compliant with building codes",
  "Cost-effective long-term protection"
]

const soilTreatmentFeatures = [
  "High-quality, BIS-certified chemicals",
  "Safe for your family and pets", 
  "Long-lasting results"
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Experienced Technicians",
    description: "With years of expertise, our team delivers reliable solutions tailored to your needs."
  },
  {
    icon: Shield,
    title: "Eco-Friendly Methods", 
    description: "We use BIS-certified, non-toxic chemicals that are safe for everyone."
  },
  {
    icon: Globe,
    title: "Pan India Service",
    description: "We provide termite and pest control services nationwide."
  },
  {
    icon: CheckCircle,
    title: "Licensed and Certified",
    description: "Fully licensed by local and central government authorities for your peace of mind."
  },
  {
    icon: Clock,
    title: "24/7 Availability", 
    description: "Pests don't take a break, and neither do we."
  },
  {
    icon: Phone,
    title: "Free Inspection",
    description: "Get a comprehensive property assessment at no cost with expert recommendations."
  }
]

export function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20"></div>

      {/* Anti-Termite Reticulation System - Main Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Main Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-4 block">
                Advanced Protection
              </span>
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Protect Your Property with Advanced
                <br />
                <span className="text-[#c83232]">Anti Termite Reticulation System</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At SLMI Pest Control, we specialize in anti termite reticulation system and innovative pest management solutions to ensure your home or business remains pest-free. Our commitment to excellence, eco-friendly practices, and cutting-edge technology make us the go-to choice for termite and pest control in Lucknow and beyond.
              </p>
              <Button className="bg-[#c83232] hover:bg-[#a02828] text-white px-8 py-3 rounded-xl font-semibold group">
                Get Free Inspection
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Sunil-Groups-1.jpg"
                  alt="Anti Termite Reticulation System"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* What is Anti-Termite System */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              What is an Anti Termite Reticulation System?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              An anti termite reticulation system is a modern solution for safeguarding your property against termites. This system uses a network of pipes installed around the foundation of your building, allowing for consistent and effective termite treatment with minimal disruption.
            </p>
            
            <h4 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-gray-900 mb-4">
              Advantages of Anti Termite Reticulation System:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {antiTermiteFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#c83232] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {["/images/960-x-600-px-1.jpg", "/images/960-x-600-px-2.jpg", "/images/Sunil-Groups-1.jpg"].map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Anti Termite System ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti Termite Piping Systems */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Anti Termite Piping Systems: <span className="text-[#c83232]">The Future of Termite Protection</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our anti termite piping systems are designed to offer robust and efficient termite management solutions. Whether it's a pre-construction anti termite treatment or post-construction termite control, SLMI Pest Control ensures maximum protection.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Anti Termite Piping System?
              </h3>
              <div className="space-y-4">
                {pipingSystemFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#c83232] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Construction Treatment */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pre-Construction Anti Termite Treatment: <span className="text-[#c83232]">A Smart Investment</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Did you know that termites can cause extensive structural damage if not addressed early? Our pre-construction anti termite treatment ensures your property is termite-free from the ground up.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900 mb-6">
                Key Benefits:
              </h3>
              <div className="space-y-4">
                {preConstructionBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#c83232] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti Termite Soil Treatment */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Anti Termite Soil Treatment: <span className="text-[#c83232]">Protecting the Foundation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For properties that require comprehensive protection, we offer anti termite soil treatment. This involves treating the soil beneath and around your structure to create an effective termite barrier.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900 mb-6">
                Features:
              </h3>
              <div className="space-y-4">
                {soilTreatmentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#c83232] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Services Section - Now After Anti-Termite */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Other <span className="text-[#c83232]">Pest Control Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your pest control needs
            </p>
          </div>

          <div className="space-y-8">
            {generalServices.map((service, index) => (
              <Card key={service.id} className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 100}ms` }}>
                {/* Image Section - Always on Top */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Title Overlay on Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section - Always Below Image */}
                <CardContent className="p-8 lg:p-12">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#c83232] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong>How it works:</strong> {service.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SLMI */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why SLMI Pest Control is Your <span className="text-[#c83232]">Trusted Partner</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Established in 2017, SLMI Pest Control has become a leader in pest management across India. Here's why thousands trust us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className={`text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-[#c83232]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#c83232]" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Porous Pipe System */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Cutting-Edge Solutions
              </h2>
              <h3 className="text-2xl font-bold text-[#c83232] mb-6">
                Porous Pipe System for Termite Treatment
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our porous pipe system offers an innovative way to protect your property. This advanced piping system ensures even distribution of anti-termite chemicals, providing complete coverage for your foundation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h4 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900 mb-6">
                Why Choose Porous Pipe Systems?
              </h4>
              <div className="space-y-4">
                {["Hassle-free installation", "Long-term protection", "Minimal maintenance requirements"].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#c83232] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}