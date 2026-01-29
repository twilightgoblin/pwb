"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Menu, X } from "lucide-react"
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
                  src="/images/logo.jpg" 
                  alt="PropertyWaleBabu - Real Estate Services" 
                  width={40} 
                  height={40} 
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                  priority
                />
                <span className="font-bold text-base sm:text-lg text-gray-800 hover:text-[#7B2CBF] transition-colors duration-200">PropertyWaleBabu</span>
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
      <div className="pt-12 sm:pt-16"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 lg:py-4 xl:py-6">
        {/* Black Rounded Container - Optimized for all screen sizes */}
        <div className="bg-[#121212] rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2.5rem] xl:rounded-[4rem] overflow-hidden shadow-2xl">
          {/* Mobile Layout - Improved spacing and typography */}
          <div className="lg:hidden">
            {/* Rating Badge - Compact mobile version */}
            <div className="text-white px-4 sm:px-5 pt-5 sm:pt-6 pb-3">
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E6C87A] text-[#E6C87A]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-[#9CA3AF] font-medium">500+ happy customers</span>
              </div>
            </div>

            {/* Image Section - Extended height for mobile to reach top-rated section */}
            <div className="relative px-4 sm:px-5 pb-4 sm:pb-5">
              <div className="relative w-full h-[300px] sm:h-[360px] rounded-[0.8rem] sm:rounded-[1rem] overflow-hidden shadow-lg">
                <Image
                  src="/images/5.png"
                  alt="Luxury properties and apartments in Lucknow - PropertyWaleBabu"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Content Section - Improved mobile typography */}
            <div className="text-white px-4 sm:px-5 pb-4 sm:pb-5">
              {/* Main Headline - Improved mobile sizing to match reference */}
              <h1 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl font-bold leading-[1.1] tracking-tight mb-3 text-left">
                Ready-to-Move
                <br />
                Flats in Lucknow
                <br />
                <span className="text-[#7B2CBF]">PropertyWaleBabu</span>
              </h1>

              {/* Description - More readable on mobile */}
              <p className="text-xs sm:text-sm text-[#9CA3AF] mb-4 leading-relaxed text-left max-w-[280px] sm:max-w-none">
                Explore high-quality apartments from 1 BHK to 4 BHK across prime Lucknow locations — immediate allotment, no waiting.
              </p>

              {/* CTA Button - Better mobile sizing */}
              <div className="flex justify-start mb-4">
                <Button 
                  size="default"
                  className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-[#F7F7F7] rounded-full px-5 sm:px-6 h-9 sm:h-10 text-xs sm:text-sm font-semibold group cursor-pointer shadow-lg"
                  onClick={() => window.location.href = "/properties"}
                >
                  View Properties
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Features Section - Compact mobile version */}
            <div className="text-white px-4 sm:px-5 pb-6 sm:pb-8">
              <div className="grid grid-cols-1 gap-3 pt-3 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#E6C87A] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="text-left flex-1">
                    <h3 className="text-xs sm:text-sm text-white font-semibold mb-0.5">Prime Locations</h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">Properties in Lucknow's best neighborhoods</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#E6C87A] rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="text-left flex-1">
                    <h3 className="text-xs sm:text-sm text-white font-semibold mb-0.5">Immediate Possession</h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">Ready-to-move flats with<br />instant allotment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-0 min-h-[65vh] xl:min-h-[75vh] 2xl:min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white px-6 py-8 lg:px-10 lg:py-10 xl:px-14 xl:py-12 2xl:py-16 flex flex-col justify-center">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-4 lg:mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-[#E6C87A] text-[#E6C87A]" />
                  ))}
                </div>
                <span className="text-xs lg:text-sm text-[#9CA3AF] font-medium">500+ happy customers</span>
              </div>

              {/* Main Headline - Larger sizing to match reference image */}
              <h1 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.1] tracking-tight mb-4 lg:mb-5 xl:mb-6">
                Ready-to-Move
                <br />
                Flats in Lucknow
                <br />
                <span className="text-[#7B2CBF]">PropertyWaleBabu</span>
              </h1>

              {/* Description */}
              <p className="text-sm lg:text-base xl:text-lg text-[#9CA3AF] mb-4 lg:mb-6 xl:mb-8 leading-relaxed max-w-xl">
                Explore high-quality apartments from 1 BHK to 4 BHK across prime Lucknow locations — immediate allotment, no waiting.
              </p>

              {/* CTA Button */}
              <div className="mb-6 lg:mb-8 xl:mb-10">
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
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">Ready-to-move flats with<br />instant allotment.</p>
                </div>
              </div>
            </div>

            {/* Right Image - With Responsive Padding */}
            <div className="relative p-2 lg:p-3 xl:p-4 2xl:p-5 flex items-center">
              <div className="relative w-full h-full rounded-[1rem] lg:rounded-[1.5rem] xl:rounded-[2rem] 2xl:rounded-[2.2rem] overflow-hidden">
                <Image
                  src="/images/5.png"
                  alt="Luxury properties and apartments in Lucknow - PropertyWaleBabu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats Section - Compact and better spaced */}
        <div className="lg:hidden mt-3 mb-3">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl font-bold text-[#7B2CBF] mb-0.5">500+</p>
                <p className="text-xs text-gray-600 font-medium leading-tight">Properties Sold</p>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl font-bold text-[#7B2CBF] mb-0.5">5+</p>
                <p className="text-xs text-gray-600 font-medium leading-tight">Years Experience</p>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl font-bold text-[#7B2CBF] mb-0.5">100%</p>
                <p className="text-xs text-gray-600 font-medium leading-tight">Legal Properties</p>
              </div>
              <div className="text-left">
                <p className="font-[family-name:var(--font-poppins)] text-lg sm:text-xl font-bold text-[#7B2CBF] mb-0.5">24/7</p>
                <p className="text-xs text-gray-600 font-medium leading-tight">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-3 lg:mt-4 mb-4 max-w-5xl mx-auto">
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

      {/* Property Types Marquee - Better mobile spacing */}
      <div className="border-t border-gray-200 py-2.5 sm:py-3 lg:py-4 overflow-hidden bg-gray-50 mt-1 sm:mt-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {["1 BHK Flats", "2 BHK Apartments", "3 BHK Homes", "4 BHK Luxury", "Ready-to-Move"].map((propertyType) => (
                <span 
                  key={`${propertyType}-${i}`}
                  className="text-base sm:text-lg lg:text-xl font-bold text-gray-400 hover:text-[#7B2CBF] transition-colors duration-300 cursor-pointer mx-3 sm:mx-4 lg:mx-5"
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
