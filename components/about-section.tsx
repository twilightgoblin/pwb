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
            <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Trusted Pest Control
              <br />
              <span className="text-[#c83232]">Since 2017</span>
            </h2>
          </div>

          {/* Full Image */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src="/images/pest-control-main.jpg"
                alt="SLMI Pest Control - Professional pest management services"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Simple Content */}
          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
              Established in 2017, SLMI Pest Control provides residential, commercial, and industrial pest management across Lucknow, Noida, and other major Indian cities using BIS-approved products.
            </p>

            <Button 
              className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-8 h-12 text-base font-semibold group cursor-pointer"
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
            <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-6 block">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Trusted Pest Control
              <br />
              <span className="text-[#c83232]">Since 2017</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Established in 2017, SLMI Pest Control (a division of SLMI Services Private Limited) provides residential, commercial, and industrial pest management across Lucknow, Noida, and other major Indian cities. Our certified technicians follow SOP-driven, child- and pet-safe methods using only BIS-approved products.
            </p>

            <Button 
              className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image - Full */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src="/images/pest-control-main.jpg"
                alt="SLMI Pest Control - Professional pest management services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}