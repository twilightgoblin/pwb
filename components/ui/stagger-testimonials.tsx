"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "PropertyWaleBabu helped us find our dream 3 BHK in Gomti Nagar. Immediate possession and all legal documents were perfect!",
    by: "Rajesh Kumar, Software Engineer",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "Best property consultant in Lucknow! They showed us multiple options and helped us get the best deal.",
    by: "Priya Sharma, Doctor",
    imgSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "24/7 availability and instant property visits. PropertyWaleBabu made home buying so easy!",
    by: "Amit Singh, Business Owner",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "Transparent pricing and no hidden charges. Found our perfect 2 BHK in Indira Nagar within budget.",
    by: "Sunita Gupta, Teacher",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "Professional service and genuine properties. PropertyWaleBabu has been our trusted partner for 2 years.",
    by: "Vikram Mehta, CA",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "Amazing 4 BHK luxury apartment in Ashiyana! The amenities and location exceeded our expectations.",
    by: "Neha Agarwal, Architect",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "Legal verification and proper documentation - exactly what we needed for our investment property.",
    by: "Rohit Jain, Investor",
    imgSrc: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "Their follow-up service is exceptional. They helped us even after possession with all formalities.",
    by: "Kavita Rao, Banker",
    imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "Quick property visits and immediate possession. PropertyWaleBabu delivers what they promise!",
    by: "Deepak Verma, Engineer",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "Family-friendly locations with great connectivity. Perfect 1 BHK for our young family!",
    by: "Anita Chopra, Marketing Manager",
    imgSrc: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 10,
    testimonial: "Been working with PropertyWaleBabu for multiple properties. Their consistency never disappoints.",
    by: "Manoj Tiwari, Consultant",
    imgSrc: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 11,
    testimonial: "No brokerage hassles and transparent pricing. Professional service from start to finish.",
    by: "Ritu Saxena, HR Manager",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 12,
    testimonial: "Weekend property visits and flexible timings. PropertyWaleBabu team is truly dedicated!",
    by: "Sanjay Mishra, Sales Manager",
    imgSrc: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 13,
    testimonial: "Their property portfolio covers all prime locations in Lucknow. Found exactly what we wanted.",
    by: "Pooja Bansal, IT Professional",
    imgSrc: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 14,
    testimonial: "Knowledgeable team who explain all property details clearly. Great customer service experience.",
    by: "Ashok Pandey, Retired Officer",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 15,
    testimonial: "Value for money properties without compromising on quality. Highly satisfied with PropertyWaleBabu.",
    by: "Geeta Sharma, Entrepreneur",
    imgSrc: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 16,
    testimonial: "Modern amenities and prime locations. PropertyWaleBabu offers the best properties in Lucknow.",
    by: "Rahul Agrawal, Tech CEO",
    imgSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 17,
    testimonial: "Solved our housing needs permanently with a beautiful 3 BHK. Excellent long-term investment.",
    by: "Meera Joshi, Lawyer",
    imgSrc: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 18,
    testimonial: "Professional approach, proper documentation, and courteous behavior. Top-notch real estate service!",
    by: "Suresh Gupta, Businessman",
    imgSrc: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 19,
    testimonial: "PropertyWaleBabu's guarantee and legal support gives us complete confidence in our property purchase.",
    by: "Nisha Kapoor, Interior Designer",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#7B2CBF] text-white border-[#7B2CBF] shadow-2xl" 
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-[#7B2CBF]/50 shadow-xl"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${
          isCenter ? -65 : position % 2 ? 15 : -15
        }px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter 
          ? "0px 12px 0px 6px rgba(123, 44, 191, 0.3), 0px 20px 40px rgba(0, 0, 0, 0.3)" 
          : "0px 8px 30px rgba(0, 0, 0, 0.2)"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-white/20" : "bg-gray-200"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 object-cover object-top rounded-sm"
        style={{
          boxShadow: isCenter 
            ? "3px 3px 0px rgba(255, 255, 255, 0.2)" 
            : "3px 3px 0px rgba(0, 0, 0, 0.1)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium leading-tight",
        isCenter ? "text-white" : "text-gray-900"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic font-medium",
        isCenter ? "text-white/90" : "text-gray-600"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(320);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 320 : 260);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 480 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;

        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
            "bg-white border-2 border-white/20 hover:bg-[#7B2CBF] hover:text-white hover:border-[#7B2CBF] text-gray-700",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2CBF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
            "bg-white border-2 border-white/20 hover:bg-[#7B2CBF] hover:text-white hover:border-[#7B2CBF] text-gray-700",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2CBF] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};