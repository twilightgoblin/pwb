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
      className="relative py-20 lg:py-32 bg-white overflow-hidden min-h-screen"
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

          {/* Full Image */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src="/images/owner.jpeg"
                alt="PropertyWaleBabu - Professional real estate services in Lucknow"
                fill
                className="object-cover object-center-top"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Gradient Overlay with Founder Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-1 text-white">
                  Mukhtar Hashmi
                </h3>
                <p className="text-[#E6C87A] font-semibold text-lg mb-3">
                  Founder & CEO
                </p>
                {/* Full Width Single Color Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7B2CBF] to-transparent"></div>
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

          {/* Right Image - Full */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src="/images/owner.jpeg"
                alt="PropertyWaleBabu - Professional real estate services in Lucknow"
                fill
                className="object-cover object-center-top"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Gradient Overlay with Founder Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="font-[family-name:var(--font-poppins)] text-3xl font-bold mb-2 text-white">
                  Mukhtar Hashmi
                </h3>
                <p className="text-[#E6C87A] font-semibold text-xl mb-4">
                  Founder and CEO
                </p>
                {/* Full Width Single Color Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#7B2CBF] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}