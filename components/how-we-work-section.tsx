"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Wrench, Shield } from "lucide-react"
import Image from "next/image"

const workSteps = [
  {
    id: "01",
    title: "Free Inspection",
    description: "Our experts assess your space and identify pest problems with a detailed inspection report.",
    image: "/images/insp.png",
    icon: Search
  },
  {
    id: "02", 
    title: "Custom Treatment Plan",
    description: "We create a tailored solution using eco-friendly methods safe for your family and pets.",
    image: "/images/custom.png",
    icon: FileText
  },
  {
    id: "03",
    title: "Professional Treatment", 
    description: "Our certified technicians execute the treatment with precision and care.",
    image: "/images/professional.png",
    icon: Wrench
  },
  {
    id: "04",
    title: "Follow-Up Support",
    description: "Regular check-ins and follow-up treatments ensure long-term protection and peace of mind.",
    image: "/images/follow-up-support.png",
    icon: Shield
  }
]

export function HowWeWorkSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="how-we-work-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step process ensures effective pest elimination and lasting results
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {workSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card 
                key={step.id} 
                className={`group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white rounded-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} 
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Section - Full coverage to edges */}
                <div className="relative h-48 sm:h-56 lg:h-48 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-[#c83232]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}