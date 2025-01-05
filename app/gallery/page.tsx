'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  { src: 'https://wahawonders.com/image/gallery/dubai-1.jpg', alt: 'Dubai Skyline' },
  { src: 'https://wahawonders.com/image/gallery/abudhabi-1.jpg', alt: 'Sheikh Zayed Mosque' },
  { src: 'https://wahawonders.com/image/gallery/sharjah-1.jpg', alt: 'Sharjah Light Festival' },
  { src: 'https://wahawonders.com/image/gallery/ras-al-khaimah-1.jpg', alt: 'Jebel Jais Mountain' },
  { src: 'https://wahawonders.com/image/gallery/fujairah-1.jpg', alt: 'Al Bidyah Mosque' },
  { src: 'https://wahawonders.com/image/gallery/ajman-1.jpg', alt: 'Ajman Beach' },
  { src: 'https://wahawonders.com/image/gallery/umm-al-quwain-1.jpg', alt: 'Umm Al Quwain Fort' },
  { src: 'https://wahawonders.com/image/gallery/desert-safari-1.jpg', alt: 'Desert Safari' },
  { src: 'https://wahawonders.com/image/gallery/luxury-hotel-1.jpg', alt: 'Luxury Hotel' },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
            >
              <Image
                src={selectedImage}
                alt="Selected image"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

