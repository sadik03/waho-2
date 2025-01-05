'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-amber-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div
          className={`text-center mb-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600">Stay updated with our latest tours and exclusive offers!</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
            Subscribe
          </Button>
        </form>
        {isSubmitted && (
          <p
            className={`text-green-600 text-center mt-4 transition-opacity duration-300 ${isSubmitted ? 'opacity-100' : 'opacity-0'}`}
          >
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  )
}

