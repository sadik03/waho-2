'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  AED: 3.67,
  // Add more currencies as needed
}

export function CurrencyConverter() {
  const [amount, setAmount] = useState('1')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('AED')
  const [result, setResult] = useState('')

  useEffect(() => {
    const fromRate = exchangeRates[fromCurrency as keyof typeof exchangeRates]
    const toRate = exchangeRates[toCurrency as keyof typeof exchangeRates]
    const convertedAmount = (parseFloat(amount) / fromRate * toRate).toFixed(2)
    setResult(convertedAmount)
  }, [amount, fromCurrency, toCurrency])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto my-8"
    >
      <h2 className="text-2xl font-bold mb-4">Currency Converter</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="fromCurrency">From</Label>
            <Select onValueChange={setFromCurrency} defaultValue={fromCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(exchangeRates).map(currency => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Label htmlFor="toCurrency">To</Label>
            <Select onValueChange={setToCurrency} defaultValue={toCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(exchangeRates).map(currency => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label>Result</Label>
          <p className="text-2xl font-bold">{result} {toCurrency}</p>
        </div>
      </div>
    </motion.div>
  )
}

