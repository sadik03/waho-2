'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Cloud, CloudRain } from 'lucide-react'

const cities = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain']

interface WeatherData {
  city: string
  temperature: number
  condition: 'Sunny' | 'Cloudy' | 'Rainy'
}

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  useEffect(() => {
    // Simulating API call to get weather data
    const fetchWeatherData = () => {
      const data = cities.map(city => ({
        city,
        temperature: Math.floor(Math.random() * 15) + 25, // Random temp between 25-40°C
        condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)] as WeatherData['condition']
      }))
      setWeatherData(data)
    }

    fetchWeatherData()
    // In a real application, you would fetch this data from a weather API
  }, [])

  const getWeatherIcon = (condition: WeatherData['condition']) => {
    switch (condition) {
      case 'Sunny':
        return <Sun className="w-6 h-6 text-yellow-400" />
      case 'Cloudy':
        return <Cloud className="w-6 h-6 text-gray-400" />
      case 'Rainy':
        return <CloudRain className="w-6 h-6 text-blue-400" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-8"
    >
      <h2 className="text-2xl font-bold mb-4">Weather in UAE</h2>
      <div className="space-y-4">
        {weatherData.map((data, index) => (
          <motion.div
            key={data.city}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <span className="font-medium">{data.city}</span>
            <div className="flex items-center space-x-2">
              {getWeatherIcon(data.condition)}
              <span>{data.temperature}°C</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

