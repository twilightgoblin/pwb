"use client"

import { useState, useEffect } from "react"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"

export function TestimonialsSection() {
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

    const element = document.getElementById('testimonials-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="testimonials-section"
      className="relative py-12 lg:py-16 bg-white overflow-hidden"
    >
      {/* White padding/corners around the black area */}
      <div className="container mx-auto px-6 relative">
        {/* Black rounded container for testimonials */}
        <div className="bg-[#121212] rounded-[3rem] lg:rounded-[3rem] overflow-hidden shadow-2xl py-12 lg:py-16">
          {/* Header inside black area */}
          <div className={`text-center mb-12 px-6 lg:px-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-[#E6C87A] text-sm font-semibold tracking-wide uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
              What Our Customers
              <br />
              <span className="text-[#7B2CBF]">Say About Us</span>
            </h2>
            <p className="text-base text-[#9CA3AF] leading-relaxed max-w-xl mx-auto">
              Here's what our satisfied customers across Lucknow and other prime locations have to say about our property services.
            </p>
          </div>

          {/* Testimonials Component */}
          <div className={`px-6 lg:px-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <StaggerTestimonials />
          </div>
        </div>
      </div>
    </section>
  )
}