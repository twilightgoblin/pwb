"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
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

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about-section"
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-[#E6C87A] text-sm font-semibold tracking-wide uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Trusted Real Estate
              <br />
              <span className="text-[#7B2CBF]">Since 2019</span>
            </h2>
          </div>

          {/* Full Image with Hover Overlay */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 group cursor-pointer">
              <Image
                src="/images/owner.jpeg"
                alt="PropertyWaleBabu - Professional real estate services in Lucknow"
                fill
                className="object-cover object-center-top transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Dark Overlay - Only on Hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content Overlay - Only on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#E6C87A] rounded-full"></div>
                    <span className="text-[#E6C87A] text-xs font-semibold tracking-wide uppercase">
                      FOUNDER & CEO
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-1">
                    Mukhtar Hashmi
                  </h3>
                  <p className="text-[#E6C87A] text-sm font-medium mb-2">
                    RERA Registered Property Consultant
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <div className="w-4 h-4 bg-white/10 rounded flex items-center justify-center">
                      <span className="text-[10px]">🛡️</span>
                    </div>
                    <span>RERA No. - UPRERAAGT21932</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Content */}
          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
              Established in 2019, PropertyWaleBabu specializes in premium real estate solutions across Lucknow. We offer ready-to-move flats from 1 BHK to 4 BHK with immediate possession and legal documentation.
            </p>

            <Button 
              className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-white rounded-full px-8 h-12 font-semibold group cursor-pointer"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <span className="text-[#E6C87A] text-sm font-semibold tracking-wide uppercase mb-6 block">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Trusted Real Estate
              <br />
              <span className="text-[#7B2CBF]">Since 2019</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Established in 2019, PropertyWaleBabu is your trusted partner for premium real estate solutions in Lucknow. We specialize in ready-to-move flats from 1 BHK to 4 BHK across prime locations with immediate possession, complete legal documentation, and world-class amenities that blend elegance with comfort.
            </p>

            <Button 
              className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-white rounded-full px-10 h-14 font-semibold group cursor-pointer"
              onClick={() => window.location.href = '/about'}
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image - Full with Hover Overlay */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 group cursor-pointer">
              <Image
                src="/images/owner.jpeg"
                alt="PropertyWaleBabu - Professional real estate services in Lucknow"
                fill
                className="object-cover object-center-top transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Dark Overlay - Only on Hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content Overlay - Only on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#E6C87A] rounded-full"></div>
                    <span className="text-[#E6C87A] text-sm font-semibold tracking-wide uppercase">
                      FOUNDER & CEO
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-2xl xl:text-3xl font-bold mb-2">
                    Mukhtar Hashmi
                  </h3>
                  <p className="text-[#E6C87A] text-base xl:text-lg font-medium mb-3">
                    RERA Registered Property Consultant
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center">
                      <span className="text-xs">🛡️</span>
                    </div>
                    <span>RERA No. - UPRERAAGT21932</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}