'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Sarah Al-Mansoori",
    role: "Founder & CEO",
    image: "https://wahawonders.com/image/team/sarah.jpg",
    bio: "With over 15 years of experience in the travel industry, Sarah founded Waho Wonders to share her passion for the UAE with the world."
  },
  {
    name: "Ahmed Hassan",
    role: "Head of Operations",
    image: "https://wahawonders.com/image/team/ahmed.jpg",
    bio: "Ahmed ensures that every Waho Wonders tour runs smoothly, providing unforgettable experiences for our clients."
  },
  {
    name: "Fatima Al-Suwaidi",
    role: "Customer Experience Manager",
    image: "https://wahawonders.com/image/team/fatima.jpg",
    bio: "Fatima's dedication to customer satisfaction has helped Waho Wonders maintain its reputation for excellence."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Waho Wonders
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010, Waho Wonders has been at the forefront of providing exceptional travel experiences across the United Arab Emirates. Our passion for showcasing the beauty, culture, and modernity of the UAE has driven us to create unforgettable journeys for thousands of travelers from around the world.
          </p>
          <p className="text-gray-700">
            We believe in responsible tourism that respects local cultures and environments while providing our clients with authentic and luxurious experiences. From the bustling streets of Dubai to the serene deserts of Abu Dhabi, we curate each trip with care and attention to detail.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card>
                  <CardHeader className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                    <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-gray-700 mb-4">
            At Waho Wonders, we are committed to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Providing exceptional customer service and personalized experiences</li>
            <li>Promoting sustainable and responsible tourism practices</li>
            <li>Showcasing the rich cultural heritage and modern marvels of the UAE</li>
            <li>Continuously improving and innovating our tour offerings</li>
            <li>Supporting local communities and businesses in the destinations we visit</li>
          </ul>
        </motion.section>
      </div>
    </div>
  )
}

