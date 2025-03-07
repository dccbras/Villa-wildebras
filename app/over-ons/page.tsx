"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Hammer, Home, Thermometer, Paintbrush, Flame, Hexagon, Moon } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Natural, warm color palette
const colors = {
  background: "#F8F5F0", // Soft cream background
  primary: "#5C7D54", // Moss green
  secondary: "#A4B494", // Sage green
  accent: "#D8B38C", // Warm wood tone
  text: "#3A3A3A", // Dark charcoal for text
  textLight: "#6B6B6B", // Lighter text color
  cardBg: "#FFFAF2", // Warm off-white for cards
}

const timelineEvents = [
  { date: "Mei 2022", title: "Tiny house trailer gekocht", icon: Truck },
  { date: "Juni 2022", title: "Start bouw Tiny house", icon: Hammer },
  { date: "December 2022", title: "Houtskelet gereed", icon: Home },
  { date: "Februari 2023", title: "Wanden voorzien van isolatie", icon: Thermometer },
  { date: "Juni 2023", title: "Schilderen en timmeren", icon: Paintbrush },
  { date: "December 2023", title: "Houtkachel aangeschaft", icon: Flame },
  { date: "April 2024", title: "Gevelbekleding aangebracht", icon: Hexagon },
  { date: "Augustus 2024", title: "Verhuizen uit de loods en eerste keer overnachten", icon: Moon },
]

export default function Page() {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <main style={{ backgroundColor: colors.background }} className="min-h-screen pt-12 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header image */}
        <div className="relative w-full h-96 mb-16">
          <Image
            src="/zoe-gayah-jonker-Lit4A7dKruo-unsplash.jpg"
            alt="Schotse Hooglander in de natuur"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
            priority
          />
        </div>

        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: colors.primary }}>
            Over Ons
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.accent }}></div>
        </div>
      </div>
    </main>
  )
}
