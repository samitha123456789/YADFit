"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative rounded-lg overflow-hidden ${
        popular ? "border-2 border-primary" : "border border-gray-800"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1">Most Popular</div>
      )}

      <div className={`p-6 ${popular ? "bg-gray-900" : "bg-gray-800"}`}>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-extrabold text-white">${price}</span>
          <span className="text-gray-400 ml-2">/{period}</span>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>

        <Button
          className={`w-full ${
            popular ? "bg-primary hover:bg-primary-700 text-white" : "bg-white text-primary hover:bg-gray-100"
          }`}
        >
          {buttonText}
        </Button>
      </div>

      <div className="p-6 bg-gray-900 border-t border-gray-800">
        <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
