"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
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
    { name: "Properties", href: "/properties" },
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "/#service-areas-section" },
    { name: "Testimonials", href: "/#testimonials-section" },
    { name: "FAQS", href: "/faq" },
    { name: "Contact Us", href: "/contact" }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="backdrop-blur-md bg-white/95 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200" style={{ cursor: 'pointer' }}>
              <Image 
                src="/images/logo_cropp.png" 
                alt="PropertyWaleBabu - Real Estate Services" 
                width={40} 
                height={40} 
                className="h-8 sm:h-10 w-auto cursor-pointer"
                priority
              />
              <span className="font-bold text-lg text-gray-800 hidden sm:block">PropertyWaleBabu</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#7B2CBF] transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Phone Number */}
            <a 
              href="tel:+919936931555"
              className="hidden lg:flex flex-col items-center bg-[#7B2CBF] text-[#F7F7F7] hover:bg-[#6A1FA3] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 flex-shrink-0"
            >
              <span className="text-xs font-medium">Call now</span>
              <span className="text-sm font-semibold">(+91)-99369-31555</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
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
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block w-full text-left text-base font-medium text-gray-700 hover:text-[#7B2CBF] hover:bg-gray-50 transition-colors duration-200 py-3 px-3 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <a 
                  href="tel:+919936931555"
                  className="flex items-center justify-center bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-3 rounded-lg cursor-pointer w-full transition-colors duration-200"
                >
                  <span className="text-sm font-semibold">(+91)-99369-31555</span>
                </a>
                
                <Button 
                  size="default"
                  className="w-full bg-[#7B2CBF] hover:bg-[#6A1FA3] text-[#F7F7F7] rounded-lg h-12 text-base font-semibold"
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
  )
}