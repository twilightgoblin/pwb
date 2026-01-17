"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Menu, X, CheckCircle, Users, Target, Award } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export function AboutUsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.location.href = "/"
    } else if (href.startsWith("/#")) {
      window.location.href = href
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/#hero-services" },
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/#service-areas-section" },
    { name: "Testimonials", href: "/#testimonials-section" },
    { name: "FAQS", href: "/#faq-section" },
    { name: "Contact Us", href: "/#cta-section" }
  ]

  const stats = [
    { value: "5,000+", label: "Curated Products" },
    { value: "800+", label: "Curated Products" },
    { value: "40+", label: "Product Categories" }
  ]

  const services = [
    "Cockroach Control",
    "Mosquito Control", 
    "Termite Control",
    "Bed Bugs Control",
    "Rodent Control",
    "Ant Control"
  ]

  const whyChooseUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Nationwide Coverage",
      description: "With our expanded presence across India, we now offer our comprehensive pest control services to customers in urban and rural areas alike."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Expertise", 
      description: "Our team consists of skilled technicians and pest control experts who undergo rigorous training and stay updated on the latest techniques and technologies in the industry."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Cutting-Edge Solutions",
      description: "We utilize advanced pest control methods and products to ensure effective pest eradication while minimizing environmental impact."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Customer-Centric Approach",
      description: "Customer satisfaction is our top priority. We take the time to understand each customer's unique needs and concerns, providing personalized solutions and ongoing support."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
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
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 ${
                        item.href === "/about" 
                          ? "text-[#c83232]" 
                          : "text-gray-700 hover:text-[#c83232]"
                      }`}
                    >
                      {item.name}
                    </Link>
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
                <div className="space-y-3">
                  {navItems.map((item) => (
                    item.href.startsWith("/") ? (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block w-full text-left text-base font-medium transition-colors duration-200 py-2 ${
                          item.href === "/about" 
                            ? "text-[#c83232]" 
                            : "text-gray-700 hover:text-[#c83232]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
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
                    onClick={() => {
                      scrollToSection("/#cta-section")
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

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-6 block">
                About Us
              </span>
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Nationwide Pest Control
                <br />
                <span className="text-[#c83232]">Solution</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                We Are At All Over India
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                SLMI Pest Control has proudly expanded its services to cater to the pest control needs of customers across India. With a commitment to excellence and a focus on customer satisfaction, we have established ourselves as a trusted name in the pest control industry nationwide.
              </p>

              <Button 
                className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                onClick={() => scrollToSection("/#cta-section")}
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right Image */}
            <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/images/pest-control-main.jpg"
                  alt="SLMI Pest Control - Professional pest management services across India"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Numbers Speak For Themselves!
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-[family-name:var(--font-poppins)] text-5xl lg:text-6xl font-bold text-[#c83232] mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our mission is to provide high-quality pest control services that exceed customer expectations while ensuring the safety and well-being of our clients, their families, and their properties. We strive to deliver effective solutions tailored to the unique needs of each customer, backed by our years of experience and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SLMI Pest Control?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c83232]/10 rounded-xl flex items-center justify-center text-[#c83232]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#c83232]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SLMI Pest Control offers a <span className="text-[#c83232] font-semibold">wide range</span> of pest management solutions to address various pest infestations, including:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-[#c83232]/5 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#c83232]/20">
                <h3 className="text-lg font-semibold text-gray-900 hover:text-[#c83232] transition-colors duration-300">{service}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 font-medium">and <span className="text-[#c83232] font-semibold">more</span>.</p>
          </div>
        </div>
      </section>

      {/* Nationwide Reach Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              <span className="text-[#c83232]">Nationwide</span> Reach
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12">
              With our expanded network of branches and service centers, we are equipped to serve customers in cities, towns, and remote locations across India. Whether you're in a bustling metropolis or a tranquil countryside, <span className="text-[#c83232] font-semibold">SLMI Pest Control</span> is your trusted partner for pest management solutions.
            </p>
            
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let Us <span className="text-[#c83232]">Protect</span> Your Home and Business
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At SLMI Pest Control, we understand the importance of protecting your home, business, and loved ones from pests. With our nationwide presence and unwavering commitment to quality, reliability, and customer satisfaction, we are proud to be your <span className="text-[#c83232] font-semibold">premier pest control solution provider</span> across India.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Join Our <span className="text-[#c83232]">Nationwide Network</span>
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join the thousands of satisfied customers who trust SLMI Pest Control for all their pest management needs. With our nationwide reach and unmatched expertise, we are your <span className="text-[#c83232] font-semibold">reliable partner</span> in pest control, wherever you may be in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-10">
              Experience the difference with SLMI Pest Control. Contact us today to schedule a consultation or service appointment and take the first step towards a pest-free environment, wherever you are in India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                onClick={() => scrollToSection("/#cta-section")}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-semibold">9580574211</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}