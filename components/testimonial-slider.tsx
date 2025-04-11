"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Samitha kannangara",
    role: "Member for 2 years",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "PowerFit has completely transformed my fitness journey. The trainers are knowledgeable and supportive, and the community keeps me motivated. I've lost 30 pounds and gained so much confidence!",
    rating: 5,
  },
  {
    id: 2,
    name: "Punith Kaveesha",
    role: "Member for 1 year",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As someone who was intimidated by gyms, PowerFit made me feel welcome from day one. The facilities are top-notch, and the 24/7 access fits perfectly with my busy schedule.",
    rating: 5,
  },
  {
    id: 3,
    name: "Pasandi Ayodya",
    role: "Member for 3 years",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The group classes at PowerFit are incredible! High energy, great instructors, and I've made some amazing friends. It's the highlight of my day and keeps me coming back for more.",
    rating: 4,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-8 shadow-xl"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="inline-block h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 text-lg mb-6">"{testimonials[current].content}"</p>
            <Avatar className="h-16 w-16 border-2 border-primary">
              <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
              <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h4 className="mt-4 font-semibold text-white text-lg">{testimonials[current].name}</h4>
            <p className="text-gray-400">{testimonials[current].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-700 transition-colors md:-translate-x-6"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-700 transition-colors md:translate-x-6"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-gray-600"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
