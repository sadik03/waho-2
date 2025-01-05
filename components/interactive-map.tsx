'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const emiratesData = [
  { name: 'Abu Dhabi', coordinates: { x: 30, y: 70 } },
  { name: 'Dubai', coordinates: { x: 60, y: 40 } },
  { name: 'Sharjah', coordinates: { x: 70, y: 30 } },
  { name: 'Ajman', coordinates: { x: 75, y: 25 } },
  { name: 'Umm Al Quwain', coordinates: { x: 80, y: 20 } },
  { name: 'Ras Al Khaimah', coordinates: { x: 85, y: 10 } },
  { name: 'Fujairah', coordinates: { x: 90, y: 40 } },
]

export function InteractiveMap() {
  const [selectedEmirate, setSelectedEmirate] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto my-8"
    >
      <h2 className="text-2xl font-bold mb-4">Explore UAE</h2>
      <div className="relative w-full h-[400px]">
        <Image
          src="/uae-map.svg"
          alt="Map of UAE"
          layout="fill"
          objectFit="contain"
        />
        {emiratesData.map((emirate) => (
          <motion.div
            key={emirate.name}
            className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer"
            style={{ left: `${emirate.coordinates.x}%`, top: `${emirate.coordinates.y}%` }}
            whileHover={{ scale: 1.5 }}
            onClick={() => setSelectedEmirate(emirate.name)}
          />
        ))}
      </div>
      {selectedEmirate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4"
        >
          <h3 className="text-xl font-semibold">{selectedEmirate}</h3>
          <p>Click on a point to learn more about each emirate.</p>
        </motion.div>
      )}
    </motion.div>
  )
}

