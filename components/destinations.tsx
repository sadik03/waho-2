"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface DestinationCardProps {
  name: string
  imageUrl: string
  href: string
  className?: string
}

function DestinationCard({ name, imageUrl, href, className = "" }: DestinationCardProps) {
  return (
    <div className="transition-transform duration-300 hover:scale-103">
      <Link 
        href={href}
        className={`group relative block w-full overflow-hidden rounded-2xl shadow-lg ${className}`}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name} cityscape`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
          {name}
        </h3>
      </Link>
    </div>
  )
}

export function Destinations() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="explore" className="py-16 px-4 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`text-4xl font-bold text-red-600 mb-12 text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          OUR DESTINATIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1 */}
          <DestinationCard
            name="ABU DHABI"
            imageUrl="https://wahawonders.com/image/emirate/abudhabi.jpg"
            href="/emirates/abu-dhabi"
            className="md:col-span-2 lg:col-span-2"
          />
          <DestinationCard
            name="SHARJAH"
            imageUrl="https://wahawonders.com/image/emirate/sharjah.jpg"
            href="/emirates/sharjah"
            className="md:col-span-2 lg:col-span-1"
          />
          
          {/* Row 2 */}
          <DestinationCard
            name="DUBAI"
            imageUrl="https://wahawonders.com/image/emirate/cityscape-aerial-view-burj-al-arab.jpg"
            href="/emirates/dubai"
            className="md:col-span-2 lg:col-span-2"
          />
          <DestinationCard
            name="RAS AL KHAIMAH"
            imageUrl="https://wahawonders.com/image/emirate/Ras%20Al%20Khaimah.jpg"
            href="/emirates/ras-al-khaimah"
            className="md:col-span-2 lg:col-span-1"
          />
          
          {/* Row 3 */}
          <DestinationCard
            name="AJMAN"
            imageUrl="https://wahawonders.com/image/emirate/ajman.webp"
            href="/emirates/ajman"
          />
          <DestinationCard
            name="FUJAIRAH"
            imageUrl="https://wahawonders.com/image/emirate/fujairah3.jpg"
            href="/emirates/fujairah"
          />
          <DestinationCard
            name="UMM AL QUWAIN"
            imageUrl="https://wahawonders.com/image/emirate/Umm%20Al%20Quwain3.jpg"
            href="/emirates/umm-al-quwain"
          />
        </div>
      </div>
    </section>
  )
}

