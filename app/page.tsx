import { Hero } from '@/components/hero'
import { Destinations } from '@/components/destinations'
import { Tours } from '@/components/tours'
import { Testimonials } from '@/components/testimonials'
import { NewsletterSubscription } from '@/components/newsletter-subscription'
import { Footer } from '@/components/footer'

import { InteractiveMap } from '@/components/interactive-map'
import { WeatherWidget } from '@/components/weather-widget'
import { Chatbot } from '@/components/chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <Destinations />
      <Tours />
     
      <div className="flex flex-wrap justify-center gap-8">
     
        <WeatherWidget />
      </div>
      <InteractiveMap />
      <Testimonials />
      <NewsletterSubscription />
      <Footer />
      <Chatbot />
    </main>
  )
}

