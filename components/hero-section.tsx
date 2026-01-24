"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Menu, X, MapPin, Home, Building } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsNavVisible(false)
        } else {
          // Scrolling up
          setIsNavVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href === "/about") {
      window.location.href = "/about"
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Properties", href: "/properties" },
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "#service-areas-section" },
    { name: "Testimonials", href: "#testimonials-section" },
    { name: "FAQS", href: "#faq-section" },
    { name: "Contact Us", href: "/contact" }
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="backdrop-blur-md bg-white/95 border-b border-gray-200/50 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button 
                onClick={() => scrollToSection("#")}
                className="flex items-center gap-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                style={{ cursor: 'pointer' }}
              >
                <Image 
                  src="/images/logo_cropp.png" 
                  alt="PropertyWaleBabu - Real Estate Services" 
                  width={40} 
                  height={40} 
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                  priority
                />
                <span className="font-bold text-lg text-gray-800 hidden sm:block">PropertyWaleBabu</span>
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  item.href.startsWith("/") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-[#7B2CBF] transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm font-medium text-gray-700 hover:text-[#7B2CBF] transition-colors duration-200 cursor-pointer whitespace-nowrap"
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </div>

              {/* Desktop Phone Number */}
              <a 
                href="tel:+919936931555"
                className="hidden lg:flex items-center gap-2 bg-[#7B2CBF] text-[#F7F7F7] hover:bg-[#6A1FA3] px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-200 flex-shrink-0 shadow-sm hover:shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">(+91)-99369-31555</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer flex-shrink-0"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-2 overflow-hidden'
          }`}>
            <div className="bg-white border-t border-gray-200 shadow-lg">
              <div className="container mx-auto px-4 sm:px-6 py-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    item.href.startsWith("/") ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block w-full text-left text-base font-medium text-gray-700 hover:text-[#7B2CBF] hover:bg-gray-50 transition-all duration-200 py-3 px-3 rounded-lg cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left text-base font-medium text-gray-700 hover:text-[#7B2CBF] hover:bg-gray-50 transition-all duration-200 py-3 px-3 rounded-lg cursor-pointer"
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                </div>
                
                {/* Mobile Actions */}
                <div className="mt-6 space-y-3">
                  <a 
                    href="tel:+919936931555"
                    className="flex items-center justify-center gap-2 bg-[#7B2CBF] text-[#F7F7F7] hover:bg-[#6A1FA3] px-4 py-3 rounded-lg cursor-pointer w-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-semibold">(+91)-99369-31555</span>
                  </a>

                  <Button 
                    size="default"
                    className="w-full bg-[#7B2CBF] hover:bg-[#6A1FA3] text-[#F7F7F7] rounded-lg h-12 text-base font-semibold shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    onClick={() => {
                      window.location.href = "/properties"
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    View Properties
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding top to account for fixed navbar */}
      <div className="pt-16 sm:pt-20"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-2 lg:py-6">
        {/* Black Rounded Container - Optimized for mobile viewport */}
        <div className="bg-[#121212] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-2xl">
          {/* Mobile Layout - Left-aligned with proper image positioning */}
          <div className="lg:hidden">
            {/* Rating Badge - At the top, left-aligned */}
            <div className="text-white px-5 sm:px-6 pt-6 sm:pt-8 pb-4">
              <div className="flex items-center justify-start gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E6C87A] text-[#E6C87A]" />
                  ))}
                </div>
                <span className="text-sm text-[#9CA3AF] font-medium">500+ happy customers</span>
              </div>
            </div>

            {/* Image Section - Below ratings, positioned to show property */}
            <div className="relative px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="relative w-full h-[200px] sm:h-[240px] rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden shadow-lg">
                <Image
                  src="/images/hero.gif"
                  alt="Luxury properties and apartments in Lucknow - PropertyWaleBabu"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Content Section - Below image, left-aligned */}
            <div className="text-white px-5 sm:px-6 pb-4">
              {/* Main Headline - Left-aligned */}
              <h1 className="font-[family-name:var(--font-poppins)] text-xl sm:text-2xl font-bold leading-tight tracking-tight mb-3 text-left">
                Ready-to-Move
                <br />
                Flats in Lucknow
                <br />
                <span className="text-[#7B2CBF]">PropertyWaleBabu</span>
              </h1>

              {/* Description - Left-aligned */}
              <p className="text-sm text-[#9CA3AF] mb-4 leading-relaxed text-left">
                Explore high-quality apartments from 1 BHK to 4 BHK across prime Lucknow locations — immediate allotment, no waiting.
              </p>

              {/* CTA Button - Left-aligned */}
              <div className="flex justify-start mb-4">
                <Button 
                  size="default"
                  className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-[#F7F7F7] rounded-full px-6 h-10 text-sm font-semibold group cursor-pointer"
                  onClick={() => window.location.href = "/properties"}
                >
                  View Properties
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Features Section - Standardized mobile version */}
            <div className="text-white px-5 sm:px-6 pb-6">
              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E6C87A] rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left flex-1">
                    <h3 className="text-sm text-white font-semibold mb-1">Prime Locations</h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">Properties in Lucknow's best neighborhoods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E6C87A] rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left flex-1">
                    <h3 className="text-sm text-white font-semibold mb-1">Immediate Possession</h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">Ready-to-move flats with instant allotment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-0 min-h-[75vh]">
            {/* Left Content */}
            <div className="text-white px-6 py-6 lg:px-8 lg:py-8 xl:px-12 xl:py-12 flex flex-col justify-center">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-4 lg:mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-[#E6C87A] text-[#E6C87A]" />
                  ))}
                </div>
                <span className="text-xs lg:text-sm text-[#9CA3AF] font-medium">500+ happy customers</span>
              </div>

              {/* Main Headline - Using Poppins */}
              <h1 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.1] tracking-tight mb-4 lg:mb-5">
                Ready-to-Move
                <br />
                Flats in Lucknow
                <br />
                <span className="text-[#7B2CBF]">PropertyWaleBabu</span>
              </h1>

              {/* Description */}
              <p className="text-sm lg:text-base xl:text-lg text-[#9CA3AF] mb-6 lg:mb-8 leading-relaxed max-w-xl">
                Explore high-quality apartments from 1 BHK to 4 BHK across prime Lucknow locations — immediate allotment, no waiting.
              </p>

              {/* CTA Button */}
              <div className="mb-8 lg:mb-10">
                <Button 
                  size="lg"
                  className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-[#F7F7F7] rounded-full px-6 lg:px-8 h-[44px] lg:h-[48px] text-sm lg:text-base font-semibold group cursor-pointer"
                  onClick={() => window.location.href = "/properties"}
                >
                  View Properties
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-4 lg:pt-6 border-t border-white/10">
                <div>
                  <h3 className="text-xs lg:text-sm text-white font-semibold mb-1">Prime Locations</h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">Properties in Lucknow's best neighborhoods.</p>
                </div>
                <div>
                  <h3 className="text-xs lg:text-sm text-white font-semibold mb-1">Immediate Possession</h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">Ready-to-move flats with instant allotment.</p>
                </div>
              </div>
            </div>

            {/* Right Image - With Padding and Rounded Corners */}
            <div className="relative p-3 lg:p-4 xl:p-5 flex items-center">
              <div className="relative w-full h-full rounded-[1.5rem] lg:rounded-[2rem] xl:rounded-[2.2rem] overflow-hidden">
                <Image
                  src="/images/hero.gif"
                  alt="Luxury properties and apartments in Lucknow - PropertyWaleBabu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats Section - Outside black container */}
        <div className="lg:hidden mt-4 mb-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#7B2CBF] mb-1">500+</p>
                <p className="text-xs text-gray-600 font-medium">Properties Sold</p>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#7B2CBF] mb-1">5+</p>
                <p className="text-xs text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#7B2CBF] mb-1">100%</p>
                <p className="text-xs text-gray-600 font-medium">Legal Properties</p>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#7B2CBF] mb-1">24/7</p>
                <p className="text-xs text-gray-600 font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-6 lg:mt-8 mb-4 max-w-5xl mx-auto">
          {[
            { value: "500+", label: "Properties Sold" },
            { value: "5+", label: "Years Experience" },
            { value: "100%", label: "Legal Properties" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl xl:text-4xl font-bold text-[#7B2CBF] mb-1 lg:mb-2">{stat.value}</p>
              <p className="text-xs lg:text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Property Types Marquee */}
      <div className="border-t border-gray-200 py-3 lg:py-4 overflow-hidden bg-gray-50 mt-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {["1 BHK Flats", "2 BHK Apartments", "3 BHK Homes", "4 BHK Luxury", "Ready-to-Move"].map((propertyType) => (
                <span 
                  key={`${propertyType}-${i}`}
                  className="text-lg lg:text-xl font-bold text-gray-400 hover:text-[#7B2CBF] transition-colors duration-300 cursor-pointer mx-4 lg:mx-5"
                >
                  {propertyType} •
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
