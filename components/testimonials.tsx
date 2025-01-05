'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  location: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    quote: "Our trip to Dubai was absolutely amazing! Waho Wonders took care of every detail, making it a truly unforgettable experience.",
    image: "https://wahawonders.com/image/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Ahmed Al-Mansour",
    location: "Riyadh, Saudi Arabia",
    quote: "The luxury honeymoon package exceeded all our expectations. The personalized service and attention to detail were outstanding.",
    image: "https://wahawonders.com/image/testimonials/ahmed.jpg"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    quote: "Our family adventure in Abu Dhabi was fantastic! The kids loved every moment, and we created memories that will last a lifetime.",
    image: "https://wahawonders.com/image/testimonials/emma.jpg"
  }
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-800 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

