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

const sections = [
  {
    image: "/1.png",
    text: "Wij zijn Daniëlle en Albert, en wij zijn in 2022 begonnen met de bouw van Villa Wildebras. Het huisje staat in het mooie Egmond, aan de rand van het Noordhollands Duinreservaat – een plek waar de rust van de natuur en het uitzicht op Schotse hooglanders en paarden die grazen, je meteen doet ontsnappen aan de drukte van de stad. We wonen zelf in Amsterdam, maar Daniëlle is opgegroeid in Egmond en het voelt heerlijk om af en toe weer terug te zijn op deze rustige plek.",
  },
  {
    image: "/2.png",
    text: "We zijn begonnen met bouwen op een echte tiny house trailer. Van 3D-tekeningen tot het houtskelet en de afwerking, elke stap was een leerzaam proces. We hebben de materialen zoveel mogelijk tweedehands ingekocht via Marktplaats of zelfs gevonden bij het grofvuil – en je zult zien: dat is absoluut niet te zien aan het eindresultaat! Sinds de zomer 2024 staat het huisje op zijn plek en hebben we er voor het eerst in geslapen.",
  },
  {
    image: "/3.png",
    text: "Het kleine huisje is van alle gemakken voorzien, omdat we het zelf ook vaak gebruiken en weten wat we nodig hebben voor een fijne en comfortabele tijd. In de tussentijd is onze zoon Abel geboren, wat deze nieuwe fase van ons leven nog specialer maakt. We nodigen jou van harte uit om ook van de rust en de natuur rondom ons tiny house te genieten. Of je nu komt voor een weekendje weg of een langere vakantie, we hopen dat ons huisje ook voor jou een fijne plek zal zijn om te ontspannen en tot rust te komen.",
  },
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
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: colors.primary }}>
            Over Ons
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.accent }}></div>
        </div>

        {/* Tijdlijn sectie */}
        <div className="mb-20">
          <h2 className="text-2xl mb-6 font-serif" style={{ color: colors.primary }}>
            Ons Tiny House Avontuur
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center transition-transform duration-200 hover:scale-105">
                <div className="rounded-full p-3 mb-3 shadow-md" style={{ backgroundColor: colors.primary }}>
                  {<event.icon className="w-5 h-5 text-white" />}
                </div>
                <p className="font-medium text-sm" style={{ color: colors.primary }}>
                  {event.date}
                </p>
                <p className="text-sm text-center mt-1" style={{ color: colors.text }}>
                  {event.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              <div className="md:w-2/5">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] max-w-sm mx-auto">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={`Afbeelding ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={`Afbeelding ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="md:w-3/5">
                <Card className="border-0 shadow-lg h-full overflow-hidden" style={{ backgroundColor: colors.cardBg }}>
                  <CardContent className="p-6 md:p-8">
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: colors.text, fontFamily: "'Nunito', sans-serif" }}
                    >
                      {section.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Footer quote */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <blockquote className="italic text-xl" style={{ color: colors.primary }}>
            "Onze droom was om een duurzaam tiny house te bouwen waar we tot rust kunnen komen. We delen deze droom
            graag met jou."
          </blockquote>
          <div className="w-16 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: colors.accent }}></div>
        </div>
      </div>
    </main>
  )
}

