'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const botResponses = [
  "Hello! How can I assist you today?",
  "Our most popular tour is the Dubai City Tour. Would you like more information?",
  "The best time to visit UAE is between November and March when the weather is cooler.",
  "You can book a tour directly on our website or contact our customer service for assistance.",
  "I'm sorry, I didn't understand that. Could you please rephrase your question?",
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, isBot: false }])
      setInput('')
      setTimeout(() => {
        const botReply = botResponses[Math.floor(Math.random() * botResponses.length)]
        setMessages(prev => [...prev, { text: botReply, isBot: true }])
      }, 1000)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-blue-500 hover:bg-blue-600"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Customer Support</h3>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
              ><X className="w-4 h-4" />
              </Button>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.isBot ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  } p-2 rounded-lg`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

