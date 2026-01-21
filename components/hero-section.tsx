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
    { name: "Our Services", href: "#hero-services" },
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "#service-areas-section" },
    { name: "Testimonials", href: "#testimonials-section" },
    { name: "FAQS", href: "#faq-section" },
    { name: "Contact Us", href: "/contact" }
  ]

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/slmi.png" 
                  alt="SLMI Pest Control Services" 
                  width={40} 
                  height={40} 
                  className="h-10 w-auto"
                  priority
                />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  item.href.startsWith("/") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </div>

              {/* Desktop Phone Number */}
              <a 
                href="tel:+919580574211"
                className="hidden md:flex items-center gap-2 bg-[#c83232] text-white hover:text-[#0a0a0a] px-5 py-2.5 rounded-lg cursor-pointer transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">(+91)-95805-74211</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? 'max-h-80 opacity-100 mt-5' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="backdrop-blur-sm bg-white/90 rounded-xl p-5 space-y-4 border border-white/30">
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {navItems.map((item) => (
                    item.href.startsWith("/") ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block w-full text-left text-base font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200 py-2 cursor-pointer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left text-base font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200 py-2 cursor-pointer"
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                </div>
                
                {/* Mobile Phone Number */}
                <div className="pt-3 border-t border-gray-200/50">
                  <a 
                    href="tel:+919580574211"
                    className="flex items-center justify-center gap-2 bg-[#c83232] text-white hover:text-[#0a0a0a] px-5 py-3.5 rounded-lg cursor-pointer w-full transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-semibold">(+91)-95805-74211</span>
                  </a>
                </div>

                {/* Mobile CTA Button */}
                <div className="pt-3">
                  <Button 
                    size="default"
                    className="w-full bg-[#c83232] hover:bg-[#a82828] text-white rounded-full h-11 text-base font-semibold"
                    onClick={() => {
                      window.location.href = "/contact"
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6">
        {/* Black Rounded Container */}
        <div className="bg-[#0a0a0a] rounded-[4rem] lg:rounded-[4rem] overflow-hidden shadow-2xl h-[82vh] lg:h-[85vh] min-h-[600px] sm:min-h-[650px]">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col h-full">
            {/* Image Section */}
            <div className="relative p-4 sm:p-6 pt-6 sm:pt-8 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                <Image
                  src="/professional-pest-control-technician-in-white-prot.jpg"
                  alt="Professional pest control technician in protective gear treating a property"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="text-white px-4 sm:px-8 pb-6 sm:pb-8 flex flex-col flex-1">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#c83232] text-[#c83232]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-400 font-medium">500+ ratings</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-3 sm:mb-4">
                Reliable
                <br />
                Pest Control
                <br />
                for a Safer Tomorrow
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Available 24/7, dedicated to providing effective, eco-friendly pest solutions that protect your family, home, and business from unwanted pests.
              </p>

              {/* CTA Button */}
              <div className="mb-4 sm:mb-6">
                <Button 
                  size="lg"
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-6 sm:px-8 h-[44px] sm:h-[48px] text-sm sm:text-base font-semibold group w-full cursor-pointer"
                  onClick={() => window.location.href = "/contact"}
                >
                  Book now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Phone Number - Elegant Style */}
              <a 
                href="tel:+919580574211"
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer py-1"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base font-medium">(+91)-95805-74211</span>
              </a>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-0 h-full">
            {/* Left Content */}
            <div className="text-white px-8 py-8 lg:px-12 lg:py-12 flex flex-col justify-center">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c83232] text-[#c83232]" />
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">500+ ratings</span>
              </div>

              {/* Main Headline - Using Poppins */}
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl xl:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
                Reliable
                <br />
                Pest Control
                <br />
                for a Safer Tomorrow
              </h1>

              {/* Description */}
              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
                Available 24/7, dedicated to providing effective, eco-friendly pest solutions that protect your family, home, and business from unwanted pests.
              </p>

              {/* CTA Button */}
              <div className="mb-10">
                <Button 
                  size="lg"
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-8 h-[48px] text-base font-semibold group cursor-pointer"
                  onClick={() => window.location.href = "/contact"}
                >
                  Book now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h3 className="text-sm text-white font-semibold mb-1">Experienced Professionals</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Certified experts delivering reliable results.</p>
                </div>
                <div>
                  <h3 className="text-sm text-white font-semibold mb-1">24/7 Availability</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Always ready for emergency pest control.</p>
                </div>
              </div>
            </div>

            {/* Right Image - With Padding and Rounded Corners */}
            <div className="relative p-4 lg:p-5 flex items-center">
              <div className="relative w-full h-full rounded-[2rem] lg:rounded-[2.2rem] overflow-hidden">
                <Image
                  src="/professional-pest-control-technician-in-white-prot.jpg"
                  alt="Professional pest control technician in protective gear treating a property"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-4 max-w-5xl mx-auto">
          {[
            { value: "3,000+", label: "Sites Treated" },
            { value: "8+", label: "Years Experience" },
            { value: "99.9%", label: "Success Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#c83232] mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Marquee */}
      <div className="border-t border-gray-200 py-4 overflow-hidden bg-gray-50 mt-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {["Termite Control", "Rodent Control", "Cockroach Control", "Bed Bug Control", "Mosquito Control"].map((service, index) => (
                <span 
                  key={`${service}-${i}`}
                  className="text-xl font-bold text-gray-400 hover:text-[#c83232] transition-colors duration-300 cursor-pointer mx-5"
                >
                  {service} •
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
