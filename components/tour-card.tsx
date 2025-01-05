
"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

interface TourCardProps {
  title: string
  description: string
  imageUrl: string
  duration: number
  travelStyles: string[]
  href: string
}

export function TourCard({ 
  title, 
  description, 
  imageUrl, 
  duration, 
  travelStyles,
  href 
}: TourCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">{title}</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-wrap gap-2">
            {travelStyles.map((style, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                {style}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="font-medium">{duration} DAYS</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link href={href} className="w-full">
            <Button variant="default" className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
              VIEW DETAIL
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

