"use client"
import { useState, useEffect } from 'react'
import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-black text-white">
      {/* Coming Soon Banner */}
      <div 
        className={`bg-yellow-400 py-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
      >
        <p className="text-black font-semibold">COMING SOON ! - CROSS COUNTRY DRIVE</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div
            className={`transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link href="/booking" className="hover:text-amber-300 transition-colors">Booking Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/faq" className="hover:text-amber-300 transition-colors">FAQ's</Link></li>
            </ul>
          </div>

          {/* Travel Styles */}
          <div
            className={`transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h3 className="text-lg font-semibold mb-4">TRAVEL STYLES</h3>
            <ul className="space-y-2">
              <li><Link href="/travel-styles/classic" className="hover:text-amber-300 transition-colors">Classic & Culture</Link></li>
              <li><Link href="/travel-styles/honeymoon" className="hover:text-amber-300 transition-colors">LUXURY HONEYMOON</Link></li>
              <li><Link href="/travel-styles/family" className="hover:text-amber-300 transition-colors">FAMILY PACKAGES</Link></li>
              <li><Link href="/travel-styles/adventure" className="hover:text-amber-300 transition-colors">PRO ADVENTURE TRAVEL</Link></li>
              <li><Link href="/travel-styles/kids" className="hover:text-amber-300 transition-colors">KIDS CELEBRATION</Link></li>
              <li><Link href="/travel-styles/holiday" className="hover:text-amber-300 transition-colors">HOLIDAY GIFT TO FAMILY</Link></li>
              <li><Link href="/travel-styles/luxury" className="hover:text-amber-300 transition-colors">LUXURY GETAWAYS, RELAXATION AND WELLNESS</Link></li>
            </ul>
          </div>

          {/* Emirates */}
          <div
            className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h3 className="text-lg font-semibold mb-4">EMIRATES</h3>
            <ul className="space-y-2">
              <li><Link href="/emirates/abu-dhabi" className="hover:text-amber-300 transition-colors">Abu Dhabi</Link></li>
              <li><Link href="/emirates/dubai" className="hover:text-amber-300 transition-colors">Dubai</Link></li>
              <li><Link href="/emirates/sharjah" className="hover:text-amber-300 transition-colors">Sharjah</Link></li>
              <li><Link href="/emirates/ajman" className="hover:text-amber-300 transition-colors">Ajman</Link></li>
              <li><Link href="/emirates/fujairah" className="hover:text-amber-300 transition-colors">Fujairah</Link></li>
              <li><Link href="/emirates/umm-al-quwain" className="hover:text-amber-300 transition-colors">Umm Al Quwain</Link></li>
              <li><Link href="/emirates/ras-al-khaimah" className="hover:text-amber-300 transition-colors">Ras Al Khaimah</Link></li>
            </ul>
          </div>

          {/* Head Office */}
          <div
            className={`transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h3 className="text-lg font-semibold mb-4">HEAD OFFICE</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <MapPin className="shrink-0 mt-1" size={16} />
                <span>Block C VLDE-197, Sharjah Research, Technology and Innovation Park, Sharjah, UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+971 58 254 2152</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <Link href="mailto:info@travelwonders.com" className="hover:text-amber-300 transition-colors">
                  info@travelwonders.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`mt-12 pt-8 border-t border-gray-800 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © Copyright Waho Wonders 2024. All Rights Reserved
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-amber-300 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-amber-300 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-amber-300 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      {/* <div
        className={`fixed bottom-6 right-6 transition-all duration-500 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      >
        <Link 
          href="https://wa.me/971582542152"
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </Link>
      </div> */}
    </footer>
  )
}

