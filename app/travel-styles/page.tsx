'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const travelStyles = [
  {
    name: "Luxury Honeymoon",
    description: "Indulge in bespoke romantic getaways with exclusive accommodations and personalized experiences.",
    image: "https://wahawonders.com/image/image_pack/pic01.jpg",
    features: ["Private dining experiences", "Couples spa treatments", "Romantic excursions"]
  },
  {
    name: "Family Adventures",
    description: "Create unforgettable memories with our family-friendly tours and activities.",
    image: "https://wahawonders.com/image/image_pack/pic02.jpg",
    features: ["Kid-friendly attractions", "Family accommodations", "Educational experiences"]
  },
  {
    name: "Adventure Travel",
    description: "Experience thrilling adventures and push your limits in stunning natural settings.",
    image: "https://wahawonders.com/image/image_pack/pic03.jpg",
    features: ["Skydiving", "Desert safaris", "Mountain trekking"]
  },
  {
    name: "Cultural Immersion",
    description: "Dive deep into the rich history and traditions of the United Arab Emirates.",
    image: "https://wahawonders.com/image/gallery/sharjah-1.jpg",
    features: ["Historical tours", "Traditional cuisine experiences", "Local artisan workshops"]
  },
  {
    name: "Wellness Retreats",
    description: "Rejuvenate your mind, body, and soul with our curated wellness packages.",
    image: "https://wahawonders.com/image/image_pack/pic06.webp",
    features: ["Yoga and meditation sessions", "Spa treatments", "Healthy cuisine"]
  },
  {
    name: "Business Travel",
    description: "Combine work and leisure with our tailored business travel packages.",
    image: "https://wahawonders.com/image/gallery/dubai-1.jpg",
    features: ["Conference facilities", "Networking events", "City tours"]
  }
]

export default function TravelStylesPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Travel Styles
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelStyles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>{style.name}</CardTitle>
                  <CardDescription className="mt-2">{style.description}</CardDescription>
                  <ul className="mt-4 space-y-1">
                    {style.features.map((feature) => (
                      <li key={feature} className="text-sm text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={`/travel-styles/${style.name.toLowerCase().replace(' ', '-')}`} passHref>
                    <Button className="w-full">Explore {style.name}</Button>
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

