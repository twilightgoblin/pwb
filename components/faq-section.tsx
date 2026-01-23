"use client"

import { useState, useEffect } from "react"

const faqs = [
  {
    question: "What is the first step in the home-buying process?",
    answer: "Begin with checking available floor plans, confirming allotment norms, and submitting your application under the FCFS process."
  },
  {
    question: "How long does it take to move in?",
    answer: "These projects are ready to move in, so once documentation is complete, you can shift without major delay."
  },
  {
    question: "What does \"First Come, First Serve\" mean in this context?",
    answer: "Allocation is done on the basis of the order of application/booking – early applicants get priority in the selection of unit type and floor."
  },
  {
    question: "Can we see the flat before booking?",
    answer: "Yes, you may visit and explore the apartment site and sample flats between Monday and Saturday. You can coordinate with the respective site supervisor."
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
                    className="w-full py-6 text-left flex items-center justify-between group hover:bg-slate-50/50 transition-colors duration-300 rounded-lg px-4 cursor-pointer"
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