"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('why-choose-us-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      number: "01",
      title: "Reliable",
      description: "Trusted company with proven track record of delivering quality flats on time with complete transparency.",
      image: "/images/reliable.png",
    },
    {
      number: "02",
      title: "Ready-to-Move",
      description: "All flats are ready for immediate possession with complete documentation and legal clearances.",
      image: "/images/ready-to-move.png",
    },
    {
      number: "03",
      title: "Strategically Located",
      description: "Prime locations with excellent connectivity, nearby amenities, and future growth potential.",
      image: "/images/strategic-location.png",
    },
    {
      number: "04",
      title: "Transparent Pricing",
      description: "First come, first serve allotment with no hidden costs and transparent pricing structure.",
      image: "/images/transparent-pricing.png",
    },
  ]

  return (
    <section 
      id="why-choose-us-section"
      className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Why These Flats Are Ideal for You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reliable, Ready-to-Move, and Strategically Located
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image container */}
                <div className="relative w-full h-48 lg:h-56 bg-gray-50 overflow-hidden">
                  <Image
                    src={reason.image || "/placeholder.svg"}
                    alt={reason.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="text-4xl lg:text-5xl font-bold text-[#c83232]/20 mb-4 font-[family-name:var(--font-poppins)]">
                    {reason.number}
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg lg:text-xl text-gray-900 mb-3 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-1">
                    {reason.description}
                  </p>
                </div>
              </div>

              {index < reasons.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}