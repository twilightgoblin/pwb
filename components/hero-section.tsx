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
    { name: "About Us", href: "#about-section" },
    { name: "Service Areas", href: "#service-areas-section" },
    { name: "Testimonials", href: "#testimonials-section" },
    { name: "FAQS", href: "#faq-section" },
    { name: "Contact Us", href: "#cta-section" }
  ]

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
          <div className="container mx-auto px-6 py-4">
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
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Desktop Phone Number */}
              <div className="hidden md:flex items-center gap-2 text-gray-900 cursor-pointer hover:text-[#c83232] transition-colors duration-200">
                <Phone className="w-4 h-4 text-[#c83232]" />
                <span className="text-base font-semibold">9580574211</span>
              </div>

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
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-base font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200 py-2 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                
                {/* Mobile Phone Number */}
                <div className="pt-3 border-t border-gray-200/50">
                  <div className="flex items-center gap-3 text-gray-900 cursor-pointer hover:text-[#c83232] transition-colors duration-200">
                    <Phone className="w-5 h-5 text-[#c83232]" />
                    <span className="text-base font-semibold">9580574211</span>
                  </div>
                </div>

                {/* Mobile CTA Button */}
                <div className="pt-3">
                  <Button 
                    size="default"
                    className="w-full bg-[#c83232] hover:bg-[#a82828] text-white rounded-full h-11 text-base font-semibold"
                    onClick={() => {
                      scrollToSection("#cta-section")
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
      <div className="container mx-auto px-6 py-6">
        {/* Black Rounded Container */}
        <div className="bg-[#0a0a0a] rounded-[4rem] lg:rounded-[4rem] overflow-hidden shadow-2xl min-h-[85vh] lg:h-[85vh] lg:min-h-[800px]">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col h-full">
            {/* Image Section */}
            <div className="relative p-6 pt-8 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
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
            <div className="text-white px-8 pb-8 flex flex-col flex-1">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c83232] text-[#c83232]" />
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">500+ ratings</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight tracking-tight mb-4">
                Reliable Pest Control for a Safer Tomorrow
              </h1>

              {/* Description */}
              <p className="text-base text-gray-400 mb-8 leading-relaxed">
                Available 24/7, dedicated to providing effective, eco-friendly pest solutions that protect your family, home, and business from unwanted pests.
              </p>

              {/* CTA Button */}
              <div className="mb-6">
                <Button 
                  size="lg"
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-8 h-[48px] text-base font-semibold group w-full cursor-pointer"
                >
                  Book now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Phone Number - Elegant Style */}
              <div className="flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">9580574211</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-0 h-full">
            {/* Left Content */}
            <div className="text-white px-10 py-12 lg:px-16 lg:py-16 flex flex-col justify-center">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c83232] text-[#c83232]" />
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">500+ ratings</span>
              </div>

              {/* Main Headline - Using Poppins */}
              <h1 className="font-[family-name:var(--font-poppins)] text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Reliable Pest Control
                <br />
                for a Safer Tomorrow
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                Available 24/7, dedicated to providing effective, eco-friendly pest solutions that protect your family, home, and business from unwanted pests.
              </p>

              {/* CTA Button */}
              <div className="mb-16">
                <Button 
                  size="lg"
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-9 h-[52px] text-base font-semibold group cursor-pointer"
                >
                  Book now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h3 className="text-base text-white font-semibold mb-2">Experienced Professionals</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Certified experts delivering reliable results.</p>
                </div>
                <div>
                  <h3 className="text-base text-white font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Always ready for emergency pest control.</p>
                </div>
              </div>
            </div>

            {/* Right Image - With Padding and Rounded Corners */}
            <div className="relative p-6 flex items-center">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
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
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-4 max-w-5xl mx-auto">
          {[
            { value: "3,000+", label: "Sites Treated" },
            { value: "8+", label: "Years Experience" },
            { value: "99.9%", label: "Success Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-[#c83232] mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Marquee */}
      <div className="border-t border-gray-200 py-6 overflow-hidden bg-gray-50 mt-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mx-10">
              {["Termite Control", "Rodent Control", "Cockroach Control", "Bed Bug Control", "Mosquito Control"].map((service) => (
                <span 
                  key={service} 
                  className="text-xl font-bold text-gray-400 hover:text-[#c83232] transition-colors duration-300 cursor-pointer"
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
