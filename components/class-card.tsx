"use client"

import Image from "next/image"
import { Clock, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ClassCardProps {
  title: string
  description: string
  image: string
  duration: string
  intensity: string
}

export default function ClassCard({ title, description, image, duration, intensity }: ClassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 rounded-lg overflow-hidden group hover-scale"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center text-gray-400 mb-2">
          <Clock className="h-4 w-4 mr-2 text-primary" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <Activity className="h-4 w-4 mr-2 text-primary" />
          <span>Intensity: {intensity}</span>
        </div>
        <Button className="w-full bg-primary hover:bg-primary-700 text-white">Book Now</Button>
      </div>
    </motion.div>
  )
}
