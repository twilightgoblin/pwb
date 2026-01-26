"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Menu, X, CheckCircle, Users, Target, Award, Home, MapPin, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.location.href = "/"
    } else if (href.startsWith("/#")) {
      window.location.href = href
    }
  }

  const stats = [
    { value: "350+", label: "Properties Sold" },
    { value: "500+", label: "Happy Clients" },
    { value: "13+", label: "Locations Covered" }
  ]

  const services = [
    { name: "Property Buying", icon: <Home className="w-6 h-6" /> },
    { name: "Property Selling", icon: <TrendingUp className="w-6 h-6" /> }, 
    { name: "Investment Guidance", icon: <Target className="w-6 h-6" /> },
    { name: "Market Analysis", icon: <Star className="w-6 h-6" /> },
    { name: "Legal Assistance", icon: <Shield className="w-6 h-6" /> },
    { name: "Location Scouting", icon: <MapPin className="w-6 h-6" /> }
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "RERA Registered",
      description: "Led by Mukhtar Hashmi, a RERA-registered property consultant (RERA No. – UPRERAAGT21932), ensuring complete legal compliance and transparency."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guidance", 
      description: "Years of experience in Lucknow's real estate market with deep insights into property trends, pricing, and investment opportunities."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparent Deals",
      description: "We believe in honest advice and transparent transactions. No hidden costs, no false promises - just genuine guidance you can trust."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Service",
      description: "Every client is unique. We take time to understand your specific needs and provide customized solutions for your property requirements."
    }
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/images/about-us-main.jpeg"
                  alt="Mukhtar Hashmi - Founder of PropertyWaleBabu, Your trusted property consultant in Lucknow"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Enhanced Founder Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-8 rounded-b-[3rem]">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-3 h-3 bg-[#E6C87A] rounded-full animate-pulse"></div>
                      <span className="text-[#E6C87A] text-sm font-semibold tracking-wider uppercase">
                        Founder & CEO
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-[family-name:var(--font-poppins)]">
                      Mukhtar Hashmi
                    </h3>
                    <p className="text-sm lg:text-base text-[#E6C87A] font-semibold mb-2">
                      RERA Registered Property Consultant
                    </p>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-white/80" />
                      <p className="text-xs lg:text-sm text-white/90">
                        RERA No. – UPRERAAGT21932
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <span className="text-[#E6C87A] text-sm font-semibold tracking-wide uppercase mb-6 block">
                About PropertyWaleBabu
              </span>
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Helping You Find the <span className="text-[#7B2CBF]">Perfect Home!</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                Your Trusted Property Partner in Lucknow
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At PropertyWaleBabu, we believe finding your dream home should be exciting, not stressful. Led by Mukhtar Hashmi, a RERA-registered property consultant (RERA No. – UPRERAAGT21932), we offer honest advice, transparent deals, and expert insights to help you make confident real estate decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
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
              Our Track Record Speaks!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With years of experience and a passion for trust and transparency, we bring you the best properties in Lucknow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-[family-name:var(--font-poppins)] text-5xl lg:text-6xl font-bold text-[#7B2CBF] mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our <span className="text-[#7B2CBF]">Credentials</span> & Recognition
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Certificate */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/Certificate.jpeg"
                  alt="PropertyWaleBabu RERA Certificate"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">RERA Certification</h3>
              <p className="text-gray-600">Official RERA registration ensuring legal compliance and transparency in all transactions.</p>
            </div>

            {/* Li Image */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/Li.jpeg"
                  alt="PropertyWaleBabu Professional Recognition"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Excellence</h3>
              <p className="text-gray-600">Recognition for outstanding service and professional excellence in real estate consulting.</p>
            </div>

            {/* Prize Receiving */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/images/prize-recieving.jpeg"
                  alt="PropertyWaleBabu Award Recognition"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Award recognition for exceptional service and contribution to the real estate industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our mission is to make real estate transactions transparent, stress-free, and rewarding for every client. We strive to provide honest guidance, market insights, and personalized service that helps you make informed decisions about your property investments. Whether you're buying, selling, or investing — we're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PropertyWaleBabu?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7B2CBF]/10 rounded-xl flex items-center justify-center text-[#7B2CBF]">
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#7B2CBF]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              PropertyWaleBabu offers a <span className="text-[#7B2CBF] font-semibold">comprehensive range</span> of real estate services to meet all your property needs:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#7B2CBF]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#7B2CBF]/10 rounded-xl flex items-center justify-center text-[#7B2CBF] group-hover:bg-[#7B2CBF] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#7B2CBF] transition-colors duration-300">{service.name}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 font-medium">and <span className="text-[#7B2CBF] font-semibold">much more</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              <span className="text-[#7B2CBF]">Experience</span> & Market Insights
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12">
              With years of experience in Lucknow's real estate market, we bring you market trends and smart tips to help you make informed decisions. Our deep understanding of local property dynamics ensures you get the best value for your investment.
            </p>
            
            <div className="bg-gray-50 p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let Us Help You Find Your <span className="text-[#7B2CBF]">Perfect Home</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At PropertyWaleBabu, we understand that buying or selling a property is one of life's biggest decisions. With our commitment to transparency, expert market knowledge, and personalized service, we make your real estate journey smooth and successful.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Join Our <span className="text-[#7B2CBF]">Satisfied Clients</span>
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join hundreds of satisfied clients who have found their dream homes with PropertyWaleBabu. With our expertise in Lucknow's real estate market and commitment to your success, we are your <span className="text-[#7B2CBF] font-semibold">trusted partner</span> in all property matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-10">
              Experience the PropertyWaleBabu difference. Contact us today to schedule a consultation and take the first step towards finding your perfect property in Lucknow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-[#7B2CBF] hover:bg-[#6A1FA3] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}