"use client"

import { useState, useEffect } from "react"
import { Phone, Mail } from "lucide-react"

export function CtaSection() {
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

    const element = document.getElementById('cta-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="cta-section"
      className="relative bg-[#121212] py-16 lg:py-20 overflow-hidden"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid pattern */}
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
          {/* Diagonal lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-px h-full bg-white/10 transform rotate-45 origin-bottom"
                style={{ left: `${i * 12.5}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left side - Text */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F7F7F7] leading-tight px-4 lg:px-0">
              Schedule Your Property
              <br />
              Visit Today!
            </h2>
          </div>

          {/* Right side - Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <a 
              href="tel:+919936931555"
              className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-[#F7F7F7] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-300 whitespace-nowrap flex items-center justify-center cursor-pointer gap-2"
            >
              <Phone className="w-5 h-5" />
              (+91)-99369-31555
            </a>
            <a 
              href="mailto:propertywalebabu@gmail.com"
              className="bg-[#E6C87A] hover:bg-[#D4B866] text-[#121212] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-300 whitespace-nowrap flex items-center justify-center cursor-pointer gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Property Info
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}