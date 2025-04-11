"use client"

import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"

interface TrainerCardProps {
  name: string
  role: string
  specialties: string[]
  image: string
  instagram?: string
  facebook?: string
}

export default function TrainerCard({ name, role, specialties, image, instagram, facebook }: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 rounded-lg overflow-hidden group"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex space-x-4">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors"
                aria-label={`${name}'s Instagram`}
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            )}
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-primary transition-colors"
                aria-label={`${name}'s Facebook`}
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-primary mb-2">{role}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {specialties.map((specialty, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
