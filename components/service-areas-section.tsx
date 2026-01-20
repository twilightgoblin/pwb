"use client"

import { useState, useEffect } from "react"
import { MapPin, CheckCircle } from "lucide-react"

export function ServiceAreasSection() {
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

    const element = document.getElementById('service-areas-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const areas = [
    "Gomti Nagar",
    "Indira Nagar", 
    "Aliganj",
    "Hazratganj",
    "Ashiyana",
    "Alambagh",
    "Jankipuram",
    "Vikas Nagar"
  ]

  return (
    <section 
      id="service-areas-section"
      className="relative py-12 lg:py-16 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Header - Better mobile spacing */}
        <div className={`text-center mb-8 lg:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-3 block">
            Service Areas
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 leading-tight px-4">
            We Proudly Serve All of
            <br />
            <span className="text-[#c83232]">Lucknow & Beyond</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            Professional pest control services across Lucknow and its surrounding regions. 
            No matter where you are, we're here to protect your home and business.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Areas - Better mobile grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {areas.map((area, index) => (
              <div 
                key={area}
                className={`bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-[#c83232]/20 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#c83232] flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{area}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Areas & Noida Highlight */}
          <div className="text-center space-y-6">
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">...and all other localities in Lucknow</span>
              </p>
            </div>

            {/* Noida Expansion Highlight - Better mobile layout */}
            <div className={`bg-gradient-to-r from-[#c83232] to-[#a02828] rounded-2xl p-4 sm:p-6 text-white transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg font-bold">Now Expanding!</span>
              </div>
              <p className="text-base sm:text-lg font-semibold">
                We are now also open for Pest Control in <span className="text-black">Noida!</span>
              </p>
              <p className="text-xs sm:text-sm opacity-90 mt-2">
                Bringing our trusted pest control services to more cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}