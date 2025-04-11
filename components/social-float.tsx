"use client"

import { Phone, MessageCircle, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export default function SocialFloat() {
  return (
    <motion.div
      className="fixed right-4 bottom-4 z-40 flex flex-col gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <a
        href="tel:+94 76 737 0688"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover-scale hover-glow"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://wa.me/+94767370688"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover-scale hover-glow"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="https://www.instagram.com/yad_fit_/?fbclid=IwY2xjawJld2dleHRuA2FlbQIxMAABHuQ2iWqCpC6ESzcx1S4vr-3pIS-LU_YsNfHi4SkzL5__Qh5RCRc1SiVZHmbo_aem_X0K8ZTXE1f7cd5F8L6JTow#"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg hover-scale hover-glow"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100092632159593"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover-scale hover-glow"
        aria-label="Like us on Facebook"
      >
        <Facebook size={20} />
      </a>
    </motion.div>
  )
}
