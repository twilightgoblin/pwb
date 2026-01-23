"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, ArrowRight, Star, Bed, Square, IndianRupee, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"

const properties = [
  {
    id: 1,
    title: "Modern 1 BHK Apartment",
    location: "Hind Nagar, Lucknow",
    bhk: "1 BHK",
    sqft: "650 sq ft",
    price: "₹28 Lakh",
    image: "/images/14.png",
    features: ["Ready to Move", "Modular Kitchen", "Parking Available", "24/7 Security"],
    description: "Spacious 1 BHK apartment in prime Hind Nagar location with modern amenities and excellent connectivity."
  },
  {
    id: 2,
    title: "Luxury 2 BHK Home",
    location: "Sector J, Aliganj",
    bhk: "2 BHK",
    sqft: "1200 sq ft",
    price: "₹45 Lakh",
    image: "/images/3-8.png",
    features: ["Premium Finishing", "Balcony", "Lift Available", "Gated Community"],
    description: "Beautiful 2 BHK apartment in Sector J with premium amenities and peaceful environment to live."
  },
  {
    id: 3,
    title: "Spacious Family Flat",
    location: "Sector P, Aliganj",
    bhk: "3 BHK",
    sqft: "1450 sq ft",
    price: "₹62 Lakh",
    image: "/images/8.png",
    features: ["Corner Unit", "Cross Ventilation", "Reserved Parking", "Children's Play Area"],
    description: "Perfect family home with spacious rooms and excellent ventilation in well-developed Sector P, Lucknow."
  },
  {
    id: 4,
    title: "Premium Ready-to-Move Flat",
    location: "Central Lucknow",
    bhk: "2 BHK",
    sqft: "1100 sq ft",
    price: "₹52 Lakh",
    image: "/images/17.png",
    features: ["Immediate Possession", "Furnished", "Prime Location", "Metro Connectivity"],
    description: "Ready-to-move 2 BHK flat in central location with immediate possession and modern furnishing."
  },
  {
    id: 5,
    title: "Modern Apartment Complex",
    location: "Gomti Nagar Extension",
    bhk: "3 BHK",
    sqft: "1650 sq ft",
    price: "₹75 Lakh",
    image: "/images/12.png",
    features: ["Swimming Pool", "Gym", "Club House", "Power Backup"],
    description: "Luxurious 3 BHK apartment in modern complex with world-class amenities and facilities."
  },
  {
    id: 6,
    title: "Strategic Location Flat",
    location: "Indira Nagar",
    bhk: "2 BHK",
    sqft: "1050 sq ft",
    price: "₹48 Lakh",
    image: "/images/flat.png",
    features: ["Strategic Location", "Shopping Complex Nearby", "Hospital Proximity", "School Zone"],
    description: "Well-located 2 BHK flat with excellent connectivity to schools, hospitals, and shopping centers."
  }
]

const filterOptions = [
  { label: "All Properties", value: "all" },
  { label: "1 BHK", value: "1" },
  { label: "2 BHK", value: "2" },
  { label: "3 BHK", value: "3" },
  { label: "Ready to Move", value: "ready" }
]

export function PropertiesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProperties, setFilteredProperties] = useState(properties)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProperties(properties)
    } else if (activeFilter === "ready") {
      setFilteredProperties(properties.filter(property => 
        property.features.some(feature => feature.toLowerCase().includes("ready") || feature.toLowerCase().includes("immediate"))
      ))
    } else {
      setFilteredProperties(properties.filter(property => 
        property.bhk.includes(activeFilter)
      ))
    }
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-4 block">
              Premium Properties in Lucknow
            </span>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Find Your <span className="text-[#c83232]">Dream Home</span> Today
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover premium ready-to-move flats and apartments across Lucknow's most sought-after locations. From 1 BHK to 3 BHK, find the perfect home that matches your lifestyle and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule Site Visit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 lg:px-6 py-2.5 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 cursor-pointer ${
                  activeFilter === option.value
                    ? 'bg-[#c83232] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property, index) => (
              <Card 
                key={property.id} 
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white p-0 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Property Image - No padding, starts from top */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c83232] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.bhk}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-[#c83232] text-[#c83232]" />
                      <span className="text-xs font-semibold text-gray-800">Premium</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Property Title */}
                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-gray-900 mb-2 group-hover:text-[#c83232] transition-colors">
                    {property.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 text-[#c83232]" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Bed className="w-5 h-5 text-[#c83232] mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">{property.bhk}</p>
                    </div>
                    <div className="text-center">
                      <Square className="w-5 h-5 text-[#c83232] mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">{property.sqft}</p>
                    </div>
                    <div className="text-center">
                      <IndianRupee className="w-5 h-5 text-[#c83232] mx-auto mb-1" />
                      <p className="text-xs text-gray-600 font-medium">Price</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#c83232] flex items-center">
                      <IndianRupee className="w-5 h-5 mr-1" />
                      {property.price.replace('₹', '')}
                    </p>
                    <p className="text-sm text-gray-600">All inclusive price</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {property.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {property.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-700">
                          <CheckCircle className="w-3 h-3 text-[#c83232] mr-1 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button - Single Contact Us button */}
                  <div className="flex">
                    <Button 
                      className="w-full bg-[#c83232] hover:bg-[#a82828] text-white rounded-lg h-10 text-sm font-semibold cursor-pointer"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Properties Found */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Properties Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more properties.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PropertyWaleBabu?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in finding the perfect home in Lucknow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c83232]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#c83232]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">RERA Registered</h3>
              <p className="text-gray-600">All properties are RERA compliant with complete legal documentation and transparency.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c83232]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-[#c83232]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Move</h3>
              <p className="text-gray-600">Immediate possession available with no waiting period for most of our properties.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c83232]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-[#c83232]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">Professional consultation and market insights to help you make the right investment decision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 lg:py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
              Don't wait! These premium properties are in high demand. Contact us today to schedule a site visit and secure your dream home in Lucknow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule Site Visit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}