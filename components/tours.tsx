"use client"
import { useState, useEffect } from 'react'
import { TourCard } from './tour-card'
import { Button } from "@/components/ui/button"

export function Tours() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tours = [
    {
      title: "LUXURY HONEYMOON",
      description: "Indulge in bespoke romantic getaways with exclusive accommodations, private dining, and personalized activities, creating unforgettable memories.",
      imageUrl: "https://wahawonders.com/image/image_pack/pic01.jpg",
      duration: 10,
      travelStyles: ["Featured Tours", "Honeymoon & Romance"],
      href: "/tours/luxury-honeymoon"
    },
    {
      title: "FAMILY PACKAGES",
      description: "Embark on a family adventure with our tailored Family Travel Package, featuring kid-friendly attractions, accommodations, and unforgettable experiences.",
      imageUrl: "https://wahawonders.com/image/image_pack/pic02.jpg",
      duration: 8,
      travelStyles: ["Featured Tours", "Family Travel & GroupDC"],
      href: "/tours/family-packages"
    },
    {
      title: "PRO ADVENTURE TRAVEL",
      description: "Experience thrilling adventures with our Adventure Travel Package, including skydiving, scuba diving, and more adrenaline-pumping activities.",
      imageUrl: "https://wahawonders.com/image/image_pack/pic03.jpg",
      duration: 5,
      travelStyles: ["Active & Adventure", "Featured Tours"],
      href: "/tours/pro-adventure"
    },
    {
      title: "KIDS CELEBRATION",
      description: "Explore our Kids Special Travel Package, designed for unforgettable family fun with child-friendly activities, entertainment, and memorable experiences.",
      imageUrl: "https://wahawonders.com/image/image_pack/pic04.jpeg",
      duration: 5,
      travelStyles: ["Classic & Culture", "Featured Tours"],
      href: "/tours/kids-celebration"
    },
    {
      title: "HOLIDAY GIFT, TO FAMILY",
      description: "Create cherished memories with our Elderly Family Members Travel Package, designed with comfort in mind, featuring suitable activities, accommodations, and personalized care.",
      imageUrl: "https://wahawonders.com/image/image_pack/pic09.jpg",
      duration: 7,
      travelStyles: ["Classic & Culture", "Featured Tours"],
      href: "/tours/holiday-gift"
    },
    {
      title: "LUXURY GETAWAYS, RELAXATION AND WELLNESS",
      description: "Pamper yourself with our Luxury Travel Package, offering exquisite accommodations, VIP and personalized services for an unforgettable journey.",
      imageUrl: "https://wahawonders.com/image/image_pack/pic06.webp",
      duration: 14,
      travelStyles: ["Family Vacations", "Featured Tours"],
      href: "/tours/luxury-getaways"
    }
  ]

  return (
    <section className="py-16 px-4 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-4xl font-bold text-red-600">BEST-SELLING TOURS 2024-2025</h2>
          <p className="text-muted-foreground mt-2">Hand-picked tour packages</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <div
              key={index}
              className={`transition-all duration-800 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <TourCard {...tour} />
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <Button variant="outline" className="bg-red-600 text-white hover:bg-red-700 hover:text-white transition-all duration-300 transform hover:scale-105">
            FOR MORE TRAVEL OPTIONS CONTACT US
          </Button>
        </div>
      </div>
    </section>
  )
}

