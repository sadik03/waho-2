'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const emirates = [
  {
    name: "Abu Dhabi",
    description: "The capital city, known for its cultural landmarks and modern architecture.",
    image: "https://wahawonders.com/image/emirate/abudhabi.jpg",
    attractions: ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Yas Island"]
  },
  {
    name: "Dubai",
    description: "A global city with futuristic skylines and world-class shopping.",
    image: "https://wahawonders.com/image/emirate/cityscape-aerial-view-burj-al-arab.jpg",
    attractions: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"]
  },
  {
    name: "Sharjah",
    description: "The cultural capital of the UAE, rich in museums and heritage sites.",
    image: "https://wahawonders.com/image/emirate/sharjah.jpg",
    attractions: ["Sharjah Museum of Islamic Civilization", "Al Noor Mosque", "Sharjah Art Museum"]
  },
  {
    name: "Ras Al Khaimah",
    description: "Known for its beautiful beaches, mountains, and archaeological sites.",
    image: "https://wahawonders.com/image/emirate/Ras%20Al%20Khaimah.jpg",
    attractions: ["Jebel Jais", "National Museum of Ras Al Khaimah", "Dhayah Fort"]
  },
  {
    name: "Ajman",
    description: "The smallest emirate, offering a peaceful retreat with beautiful beaches.",
    image: "https://wahawonders.com/image/emirate/ajman.webp",
    attractions: ["Ajman Museum", "Ajman Beach", "Al Zorah Nature Reserve"]
  },
  {
    name: "Fujairah",
    description: "The only emirate on the east coast, known for its beaches and mountains.",
    image: "https://wahawonders.com/image/emirate/fujairah3.jpg",
    attractions: ["Al Bidyah Mosque", "Fujairah Fort", "Snoopy Island"]
  },
  {
    name: "Umm Al Quwain",
    description: "A tranquil emirate with a rich maritime heritage and natural beauty.",
    image: "https://wahawonders.com/image/emirate/Umm%20Al%20Quwain3.jpg",
    attractions: ["Umm Al Quwain Fort", "Dreamland Aqua Park", "Ed-Dur Site"]
  }
]

export default function EmiratesPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Explore the Seven Emirates
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emirates.map((emirate, index) => (
            <motion.div
              key={emirate.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={emirate.image}
                      alt={emirate.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>{emirate.name}</CardTitle>
                  <CardDescription className="mt-2">{emirate.description}</CardDescription>
                  <ul className="mt-4 space-y-1">
                    {emirate.attractions.map((attraction) => (
                      <li key={attraction} className="text-sm text-gray-600">• {attraction}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={`/emirates/${emirate.name.toLowerCase().replace(' ', '-')}`} passHref>
                    <Button className="w-full">Explore {emirate.name}</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

