'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, Youtube, Menu, X, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://wahawonders.com/image/Logo/finalwahsa-02.png" 
              alt="Waho Wonders Logo" 
              className="h-12 w-auto"
            />
            <span className="text-white text-xl font-semibold">Waho Wonders</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/emirates" isActive={pathname === '/emirates'}>EMIRATES</NavLink>
            <NavLink href="/travel-styles" isActive={pathname === '/travel-styles'}>TRAVEL STYLES</NavLink>
            <NavLink href="/gallery" isActive={pathname === '/gallery'}>GALLERY</NavLink>
            <NavLink href="/about" isActive={pathname === '/about'}>ABOUT US</NavLink>
          </div>

          {/* Search and Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-amber-300 transition-colors"
              aria-label="Toggle search"
            >
              <Search size={20} />
            </button>
            <SocialIcon href="https://facebook.com" Icon={Facebook} />
            <SocialIcon href="https://instagram.com" Icon={Instagram} />
            <SocialIcon href="https://youtube.com" Icon={Youtube} />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Search tours..."
                  className="flex-grow"
                />
                <Button type="submit">Search</Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-black/80 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="/emirates" isActive={pathname === '/emirates'}>EMIRATES</MobileNavLink>
                <MobileNavLink href="/travel-styles" isActive={pathname === '/travel-styles'}>TRAVEL STYLES</MobileNavLink>
                <MobileNavLink href="/gallery" isActive={pathname === '/gallery'}>GALLERY</MobileNavLink>
                <MobileNavLink href="/about" isActive={pathname === '/about'}>ABOUT US</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link 
      href={href}
      className={`text-white text-sm font-medium hover:text-amber-300 transition-colors relative group ${isActive ? 'text-amber-300' : ''}`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all group-hover:w-full ${isActive ? 'w-full' : ''}`} />
    </Link>
  )
}

function MobileNavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link 
      href={href}
      className={`text-white text-sm font-medium block px-2 py-1 hover:text-amber-300 transition-colors ${isActive ? 'text-amber-300' : ''}`}
    >
      {children}
    </Link>
  )
}

function SocialIcon({ href, Icon }: { href: string; Icon: any }) {
  return (
    <Link 
      href={href}
      className="text-white hover:text-amber-300 transition-colors p-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} />
    </Link>
  )
}

