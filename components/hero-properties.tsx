"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Property Type Icons with round backgrounds
const OneBHKIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* House outline */}
      <path d="M3 12L12 3L21 12V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V12Z" stroke="white" strokeWidth="2" fill="none"/>
      {/* Door */}
      <rect x="9" y="15" width="3" height="6" fill="white"/>
      {/* Window */}
      <rect x="14" y="13" width="3" height="3" stroke="white" strokeWidth="1.5" fill="none"/>
      {/* 1 BHK indicator */}
      <text x="12" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">1</text>
    </svg>
  </div>
)

const TwoBHKIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* House outline */}
      <path d="M3 12L12 3L21 12V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V12Z" stroke="white" strokeWidth="2" fill="none"/>
      {/* Door */}
      <rect x="9" y="15" width="3" height="6" fill="white"/>
      {/* Windows */}
      <rect x="5" y="13" width="2.5" height="2.5" stroke="white" strokeWidth="1" fill="none"/>
      <rect x="15.5" y="13" width="2.5" height="2.5" stroke="white" strokeWidth="1" fill="none"/>
      {/* 2 BHK indicator */}
      <text x="12" y="11" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">2</text>
    </svg>
  </div>
)

const ThreeBHKIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* Building outline */}
      <rect x="4" y="6" width="16" height="15" stroke="white" strokeWidth="2" fill="none"/>
      {/* Roof */}
      <path d="M3 6L12 2L21 6" stroke="white" strokeWidth="2" fill="none"/>
      {/* Door */}
      <rect x="10" y="16" width="4" height="5" fill="white"/>
      {/* Windows */}
      <rect x="6" y="10" width="2" height="2" stroke="white" strokeWidth="1" fill="none"/>
      <rect x="11" y="10" width="2" height="2" stroke="white" strokeWidth="1" fill="none"/>
      <rect x="16" y="10" width="2" height="2" stroke="white" strokeWidth="1" fill="none"/>
      {/* 3 BHK indicator */}
      <text x="12" y="8" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">3</text>
    </svg>
  </div>
)

const LuxuryIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* Luxury building */}
      <rect x="3" y="8" width="18" height="13" stroke="white" strokeWidth="2" fill="none"/>
      {/* Pillars */}
      <rect x="6" y="8" width="1" height="13" fill="white"/>
      <rect x="11.5" y="8" width="1" height="13" fill="white"/>
      <rect x="17" y="8" width="1" height="13" fill="white"/>
      {/* Roof with crown */}
      <path d="M2 8L12 3L22 8" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M10 3L12 1L14 3" stroke="white" strokeWidth="1.5" fill="none"/>
      {/* Entrance */}
      <rect x="9" y="16" width="6" height="5" fill="white"/>
      {/* Luxury indicator */}
      <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="1" fill="none"/>
      <path d="M12 10L12.5 11.5L14 12L12.5 12.5L12 14L11.5 12.5L10 12L11.5 11.5Z" fill="white"/>
    </svg>
  </div>
)

const properties = [
  {
    id: 1,
    title: "1 BHK Apartments",
    description: "Compact and affordable 1 BHK flats perfect for young professionals and small families.",
    image: "/images/1bhk.webp",
    icon: OneBHKIcon
  },
  {
    id: 2,
    title: "2 BHK Homes", 
    description: "Spacious 2 BHK apartments with modern amenities in prime Lucknow locations.",
    image: "/images/2bhk.webp",
    icon: TwoBHKIcon
  },
  {
    id: 3,
    title: "3 BHK Residences",
    description: "Premium 3 BHK flats with excellent connectivity and world-class facilities.",
    image: "/images/hind nagar.png",
    icon: ThreeBHKIcon
  },
  {
    id: 4,
    title: "4 BHK Luxury",
    description: "Ultra-luxury 4 BHK properties with stunning architecture and premium amenities.",
    image: "/images/flat.png",
    icon: LuxuryIcon
  }
]

export function HeroProperties() {
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

    const element = document.getElementById('hero-properties')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="hero-properties"
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-3 block">
              Our Properties
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Buy Lucknow Properties:
              <br />
              <span className="text-[#c83232]">Luxury Property for Sale in UP</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Experience the pinnacle of luxury with buying a property in Lucknow, where stunning architecture meets world-class amenities.
            </p>
          </div>
        </div>

        {/* Property Cards Grid - Using website red color scheme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-200 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Property Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={property.image}
                  alt={`${property.title} - Premium properties in Lucknow`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Property Icon - Left aligned with proper spacing */}
                <div className="flex justify-start mb-6">
                  <property.icon />
                </div>

                {/* Property Title */}
                <h3 className="font-semibold text-lg text-gray-900 mb-4 text-left">
                  {property.title}
                </h3>

                {/* Property Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                  {property.description}
                </p>

                {/* Learn More Link */}
                <div className="text-left">
                  <Link 
                    href="/properties"
                    className="inline-flex items-center text-[#c83232] hover:text-[#a02828] font-medium text-sm transition-colors group"
                  >
                    View Properties
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Properties Link */}
        <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link href="/properties">
            <Button 
              className="bg-[#c83232] hover:bg-[#a02828] text-white font-semibold px-8 py-3 rounded-xl group cursor-pointer"
            >
              View All Properties
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}