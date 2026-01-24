"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function ContactUsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setIsMounted(true)
  }, [])

  const handlePhoneCall = () => {
    if (isMounted) {
      window.open('tel:+919936931555', '_self')
    }
  }

  const handleEmailClick = () => {
    if (isMounted) {
      window.open('mailto:propertywalebabu@gmail.com', '_self')
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "(+91)-99369-31555",
      description: "Available for property inquiries",
      action: handlePhoneCall
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us", 
      details: "propertywalebabu@gmail.com",
      description: "Get detailed property information",
      action: handleEmailClick
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Ground Floor, Rohtas Plumeria, Flat No, T-001, near New High Court, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
      description: "Visit our office for consultation",
      action: () => {}
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon-Sat: 9 AM - 7 PM",
      description: "Sunday by appointment",
      action: () => {}
    }
  ]

  const whyContactUs = [
    "Free property consultation and site visits",
    "Transparent pricing with no hidden costs",
    "Legal documentation assistance",
    "Ready-to-move properties available",
    "Prime locations in Lucknow",
    "Trusted real estate services since 2019"
  ]

  return (
    <div className="min-h-screen bg-white">
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
              <span className="text-[#E6C87A] text-sm font-semibold tracking-wide uppercase mb-6 block">
                Contact Us
              </span>
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Your Dream
                <br />
                <span className="text-[#7B2CBF]">Property Today</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Ready to find your perfect home in Lucknow? Contact PropertyWaleBabu today for premium real estate solutions with transparent pricing and immediate possession. Our expert team is here to help you secure your dream property.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                  onClick={handlePhoneCall}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white rounded-full px-8 h-14 text-base font-semibold group cursor-pointer"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/images/about-us-main.jpeg"
                  alt="PropertyWaleBabu - Professional real estate consultation and services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="text-[#7B2CBF]">Reach Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our real estate experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                onClick={info.action}
              >
                <div className="w-12 h-12 bg-[#E6C87A]/10 rounded-xl flex items-center justify-center text-[#E6C87A] group-hover:bg-[#E6C87A] group-hover:text-[#121212] transition-all duration-300 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-[#7B2CBF] font-semibold mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <div className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/images/owner.jpeg"
                    alt="PropertyWaleBabu Team - Real Estate Experts"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <span className="text-[#E6C87A] text-sm font-semibold tracking-wide uppercase mb-6 block">
                  Meet Our Team
                </span>
                <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted <span className="text-[#7B2CBF]">Real Estate Partners</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  With over 5 years of experience in Lucknow's real estate market, our dedicated team is committed to helping you find your perfect home. We understand the local market dynamics and provide personalized service to each client.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E6C87A] flex-shrink-0" />
                    <span className="text-gray-700">Expert knowledge of Lucknow real estate market</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E6C87A] flex-shrink-0" />
                    <span className="text-gray-700">Personalized property recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E6C87A] flex-shrink-0" />
                    <span className="text-gray-700">End-to-end support from search to possession</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-white rounded-full px-8 h-12 text-base font-semibold group cursor-pointer"
                    onClick={handlePhoneCall}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-[#7B2CBF]">PropertyWaleBabu?</span>
              </h2>
              <p className="text-lg text-gray-600">
                When you contact us, you're choosing Lucknow's trusted real estate experts
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyContactUs.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E6C87A] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}