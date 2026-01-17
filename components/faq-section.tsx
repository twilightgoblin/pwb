"use client"

import { useState, useEffect } from "react"

const faqs = [
  {
    question: "How much do your services cost?",
    answer: "Typical guide rates: Pre-construction ₹5/sqft, Post-construction ₹6/sqft, and Porous Pipe ₹8/sqft. Final pricing depends on layout, access, and infestation. Book a free on-site survey for an exact written quote."
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes. Warranty terms vary by treatment type and site condition. We provide a written certificate covering service quality and specified re-visits within the warranty window. All terms are listed transparently in the approved scope."
  },
  {
    question: "How quickly can you respond?",
    answer: "We operate a 24/7 response desk. In Lucknow city limits, same-day visits are typical. For nearby areas and Noida operations, timelines are shared when you call 9580574211."
  },
  {
    question: "Are your treatments safe?",
    answer: "Yes. We use eco-friendly, BIS-approved formulations and share pre/post-treatment safety instructions. Sensitive areas (nurseries, kitchens, pet zones) are handled with extra precautions and targeted application methods to minimize exposure."
  },
  {
    question: "What pests do you treat?",
    answer: "We offer comprehensive treatments for termites, rodents, cockroaches, mosquitoes, bed bugs, and other common pests with BIS-certified products, SOP-driven service, and 24/7 support."
  }
]

export function FaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('faq-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section 
      id="faq-section"
      className="relative py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-[#c83232] text-sm font-semibold tracking-wider uppercase mb-4">
              FAQ
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Everything You Need to Know
            </h2>
            <button className="text-slate-900 font-medium hover:text-[#c83232] transition-colors duration-300 flex items-center gap-2 group">
              All questions 
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index)
              
              return (
                <div
                  key={index}
                  className={`border-b border-slate-200 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-6 text-left flex items-center justify-between group hover:bg-slate-50/50 transition-colors duration-300 rounded-lg px-4"
                  >
                    <h3 className="font-medium text-slate-900 text-lg pr-8 leading-relaxed group-hover:text-[#c83232] transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}>
                        <div className="relative">
                          <div className="w-4 h-0.5 bg-slate-400 group-hover:bg-[#c83232] transition-colors duration-300" />
                          <div className={`w-0.5 h-4 bg-slate-400 group-hover:bg-[#c83232] transition-colors duration-300 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4">
                      <p className="text-slate-600 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}