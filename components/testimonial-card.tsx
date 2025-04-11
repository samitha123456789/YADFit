"use client"

import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 rounded-lg p-6 shadow-lg hover-scale"
    >
      <div className="mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="inline-block h-5 w-5 text-yellow-400 fill-current" />
        ))}
        {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
          <Star key={i} className="inline-block h-5 w-5 text-gray-600" />
        ))}
      </div>

      <p className="text-gray-300 mb-6">"{testimonial.content}"</p>

      <div className="flex items-center">
        <Avatar className="h-12 w-12 border-2 border-primary">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h4 className="font-semibold text-white">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}
