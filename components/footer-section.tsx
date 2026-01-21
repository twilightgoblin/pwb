"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  Mail, 
  MapPin,
  Star,
  ArrowRight
} from "lucide-react"
import Image from "next/image"

export function FooterSection() {
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

    const element = document.getElementById('footer-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const quickLinks = [
    "Home",
    "About Us", 
    "Our Services",
    "Contact Us"
  ]

  const services = [
    "Termite Control",
    "Rodent Control",
    "Bed Bug Control",
    "Mosquito Control"
  ]

  return (
    <footer 
      id="footer-section"
      className="relative bg-white py-8 sm:py-12 lg:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content - Black Rounded Container */}
        <div className={`bg-[#0a0a0a] rounded-2xl sm:rounded-3xl lg:rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Top Section - Company Info & CTA */}
          <div className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 border-b border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left - Company Info */}
              <div className={`text-white transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                {/* Logo & Company Name */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Image 
                    src="/images/slmi.png" 
                    alt="SLMI Pest Control Services" 
                    width={50} 
                    height={50} 
                    className="h-10 sm:h-12 w-auto"
                  />
                  <div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl lg:text-2xl font-bold">
                      SLMI Pest Control
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Protecting Your Space Since 2016</p>
                  </div>
                </div>

                {/* Company Description */}
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                  We provide reliable, eco-friendly pest management with transparent pricing and a customer-first approach.
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-[#c83232] text-[#c83232]" />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">4.9/5</span>
                  <span className="text-gray-400 text-xs sm:text-sm">(500+ reviews)</span>
                </div>
              </div>

              {/* Right - Emergency Contact CTA */}
              <div className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                    Contact Us Now!
                  </h3>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                    Available 24/7 for pest control needs
                  </p>
                  
                  {/* Phone Number - Large */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 text-white mb-4 sm:mb-6 cursor-pointer hover:text-gray-200 transition-colors duration-200">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold break-all sm:break-normal">(+91)-95805-74211</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 text-white/90 mb-4 sm:mb-6 cursor-pointer hover:text-white transition-colors duration-200">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all sm:break-normal">sales@slmi.in</span>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="lg"
                    className="w-full bg-white text-[#c83232] hover:bg-gray-100 rounded-full h-10 sm:h-12 text-sm sm:text-base font-semibold cursor-pointer"
                    onClick={() => window.location.href = "/contact"}
                  >
                    <span className="hidden sm:inline">Book Free Inspection</span>
                    <span className="sm:hidden">Book Inspection</span>
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section - Links & Copyright */}
          <div className="px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              
              {/* Quick Links */}
              <div className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Our Services</h4>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visit Us */}
              <div className={`sm:col-span-2 lg:col-span-1 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Visit Us:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#c83232] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">Lucknow, UP</p>
                      <p className="text-gray-400 text-xs">Serving all areas in Lucknow & Noida</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#c83232] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">9580574211</p>
                      <p className="text-gray-400 text-xs">24/7 Emergency Line</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#c83232] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm break-all sm:break-normal">sales@slmi.in</p>
                      <p className="text-gray-400 text-xs">Business Inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className={`text-center pt-6 sm:pt-8 border-t border-white/10 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2024 SLMI Pest Control Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}