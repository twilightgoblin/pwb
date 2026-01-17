"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "SLMI Pest Control completely eliminated our termite problem. Their team was professional and the results were immediate.",
    by: "Rajesh Kumar, Homeowner in Lucknow",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "Best pest control service in Noida! They use safe products and their technicians are very knowledgeable.",
    by: "Priya Sharma, Restaurant Owner",
    imgSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "24/7 availability saved us during a major cockroach infestation. Highly recommend SLMI Pest Control!",
    by: "Amit Singh, Office Manager",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "Their eco-friendly approach gives me peace of mind with kids at home. Excellent service quality.",
    by: "Sunita Gupta, Mother of Two",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "Professional, reliable, and effective. SLMI has been our go-to pest control for 3 years now.",
    by: "Vikram Mehta, Property Manager",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "Amazing results! Our bed bug problem was solved in just one treatment. Thank you SLMI team!",
    by: "Neha Agarwal, Hotel Manager",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "BIS-approved products and certified technicians - exactly what we needed for our commercial space.",
    by: "Rohit Jain, Business Owner",
    imgSrc: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "Their follow-up service is exceptional. They ensure the problem is completely resolved.",
    by: "Kavita Rao, Apartment Resident",
    imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "Quick response time and effective treatment. SLMI Pest Control is simply the best!",
    by: "Deepak Verma, Factory Owner",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "Safe for pets and children, yet highly effective against pests. Couldn't ask for more!",
    by: "Anita Chopra, Pet Owner",
    imgSrc: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 10,
    testimonial: "Been using SLMI for years. Their consistency and quality never disappoints us.",
    by: "Manoj Tiwari, Facility Manager",
    imgSrc: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 11,
    testimonial: "Transparent pricing and no hidden costs. Professional service from start to finish.",
    by: "Ritu Saxena, Homeowner",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 12,
    testimonial: "Emergency service on weekends saved our event. SLMI team is truly dedicated!",
    by: "Sanjay Mishra, Event Organizer",
    imgSrc: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 13,
    testimonial: "Their preventive maintenance program keeps our office pest-free year-round.",
    by: "Pooja Bansal, HR Manager",
    imgSrc: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 14,
    testimonial: "Knowledgeable staff who explain everything clearly. Great customer service experience.",
    by: "Ashok Pandey, Senior Citizen",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 15,
    testimonial: "Cost-effective solutions without compromising on quality. Highly satisfied with SLMI.",
    by: "Geeta Sharma, Small Business Owner",
    imgSrc: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 16,
    testimonial: "Modern techniques and equipment. SLMI stays ahead of the competition.",
    by: "Rahul Agrawal, Tech Company CEO",
    imgSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 17,
    testimonial: "Solved our recurring mosquito problem permanently. Excellent long-term results.",
    by: "Meera Joshi, Society Secretary",
    imgSrc: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 18,
    testimonial: "Professional uniforms, proper equipment, and courteous behavior. Top-notch service!",
    by: "Suresh Gupta, Retail Store Owner",
    imgSrc: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 19,
    testimonial: "SLMI's warranty and guarantee policy gives us complete confidence in their service.",
    by: "Nisha Kapoor, Property Developer",
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
          ? "z-10 bg-[#c83232] text-white border-[#c83232] shadow-2xl" 
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-[#c83232]/50 shadow-xl"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.5) * position}px) translateY(${
          isCenter ? -65 : position % 2 ? 15 : -15
        }px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter 
          ? "0px 12px 0px 6px rgba(200, 50, 50, 0.3), 0px 20px 40px rgba(0, 0, 0, 0.3)" 
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
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-white/20 hover:bg-[#c83232] hover:text-white hover:border-[#c83232] text-gray-700",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c83232] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-white/20 hover:bg-[#c83232] hover:text-white hover:border-[#c83232] text-gray-700",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c83232] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};