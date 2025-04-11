import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YADFit Gym | Strength, Fitness, Community",
  description:
    "Join YADFit Gym for personalized training, state-of-the-art equipment, and a supportive community to help you achieve your fitness goals.",
    icons: {
      icon: "/yadlogos.png", // Reference the favicon explicitly
      // Optional: Add more formats for broader compatibility
      apple: "/yadlogos.png", // For Apple devices (if you have this file)
      shortcut: "/yadlogos.png",
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'