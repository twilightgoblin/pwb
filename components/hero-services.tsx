"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Cockroach Control",
    description: "Complete elimination of cockroaches with gel baiting and spray treatments for homes, kitchens, and restaurants.",
    image: "/images/2-1024x256.jpg"
  },
  {
    id: 2,
    title: "Mosquito Control",
    description: "Thermal fogging and larviciding treatments for societies and commercial campuses.",
    image: "/images/3.jpg"
  },
  {
    id: 3,
    title: "Bed Bug Treatment",
    description: "Comprehensive bed bug elimination using heat treatment and targeted spraying for complete eradication.",
    image: "/images/4.jpg"
  }
]

export function HeroServices() {
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

    const element = document.getElementById('hero-services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="hero-services"
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-[#c83232]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-[#c83232]/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header - Centered with better mobile spacing */}
        <div className="text-center mb-8 lg:mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-3 block">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight px-4">
              Comprehensive Pest
              <br />
              <span className="text-[#c83232]">Protection Solutions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
              Our expert team offers customized pest control services, designed to meet the unique challenges of your home or business.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Full Image Card with Better Mobile Layout */}
              <div className="relative h-56 sm:h-64 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 cursor-pointer">
                
                {/* Full Background Image - Better positioning for mobile */}
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional pest control service`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Stronger overlay for better text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 md:from-black/70 md:via-black/30 md:to-transparent group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-500" />
                
                {/* Content Layout */}
                <div className="absolute inset-0 z-10 flex flex-col">
                  {/* Title - Always visible at bottom */}
                  <div className="mt-auto p-4 sm:p-6">
                    <span className="text-[#ff6b6b] text-xs sm:text-sm font-bold tracking-wide uppercase block mb-2 drop-shadow-lg">
                      What we do:
                    </span>
                    <h3 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-3">
                      {service.title}
                    </h3>
                    
                    {/* Mobile Description - Always visible */}
                    <div className="md:hidden">
                      <p className="text-white/95 text-sm sm:text-base leading-relaxed drop-shadow-lg font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Desktop Hover Description */}
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-white text-lg leading-relaxed drop-shadow-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Link - Better Position */}
        <div className={`text-center mt-8 lg:mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link href="/services">
            <Button 
              variant="outline"
              className="border-[#c83232] text-[#c83232] hover:bg-[#c83232] hover:text-white font-semibold px-8 py-3 rounded-xl group cursor-pointer"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}