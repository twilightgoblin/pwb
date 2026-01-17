"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavVisible(false)
        } else {
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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/#service-areas-section" },
    { name: "Testimonials", href: "/#testimonials-section" },
    { name: "FAQS", href: "/#faq-section" },
    { name: "Contact Us", href: "/#cta-section" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="backdrop-blur-md bg-white/90 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/slmi.png" 
                alt="SLMI Pest Control Services" 
                width={40} 
                height={40} 
                className="h-10 w-auto"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200"
                >
                  {item.name}
                </Link>
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
              className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
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
              <div className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block w-full text-left text-base font-medium text-gray-700 hover:text-[#c83232] transition-colors duration-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-3 border-t border-gray-200/50">
                <div className="flex items-center gap-3 text-gray-900 cursor-pointer hover:text-[#c83232] transition-colors duration-200">
                  <Phone className="w-5 h-5 text-[#c83232]" />
                  <span className="text-base font-semibold">9580574211</span>
                </div>
              </div>

              <div className="pt-3">
                <Button 
                  size="default"
                  className="w-full bg-[#c83232] hover:bg-[#a82828] text-white rounded-full h-11 text-base font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
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
  )
}