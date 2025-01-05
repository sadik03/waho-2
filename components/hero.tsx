"use client"
import { useState, useEffect } from 'react'
import { NavBar } from './nav-bar'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-in-out ${isVisible ? 'scale-100' : 'scale-110'}`}
        style={{
          backgroundImage: 'url(https://wahawonders.com/image/emirate/abudhabi.jpg?height=1080&width=1920)',
          backgroundPosition: 'center 60%'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-5xl">
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            NEVER STOP EXPLORING THE WORLD
          </h1>
          <p
            className={`text-xl md:text-2xl text-white/90 font-light transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            This time let's Start with United Arab Emirates
          </p>
          <div
            className={`mt-8 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <a 
              href="#explore"
              className="inline-block px-8 py-4 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start Exploring
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <div
          className="text-white cursor-pointer animate-bounce"
          onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </div>
      </div>
    </div>
  )
}

