"use client"

import Image from "next/image"
import { useEffect } from "react"
import { Truck, Hammer, Home, Thermometer, Paintbrush, Flame, Hexagon, Moon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

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
    text: "Wij zijn Daniëlle en Albert, en wij zijn in 2022 begonnen met de bouw van ons Tinyhouse. Het huisje staat in het mooie Egmond, aan de rand van het Noordhollands Duinreservaat – een plek waar de rust van de natuur en het uitzicht op Schotse hooglanders en paarden die grazen, je meteen doet ontsnappen aan de drukte van de stad. Zelf wonen we in Amsterdam en nu ons huisje af is komen we hier graag om het drukke stadsleven af te wisselen met de natuur.",
  },
  {
    image: "/2.png",
    text: "We zijn begonnen met bouwen op een echte tiny house trailer. Van 3D-tekeningen tot het houtskelet en de afwerking, elke stap was een leerzaam proces. We hebben de materialen zoveel mogelijk tweedehands ingekocht via Marktplaats of zelfs gevonden bij het grofvuil – en je zult zien: dat is absoluut niet te zien aan het eindresultaat! Sinds de zomer 2024 staat het huisje op zijn plek en hebben we er voor het eerst in geslapen.",
  },
  {
    image: "/3.png",
    text: "Het kleine huisje is van alle gemakken voorzien, omdat we het zelf ook vaak gebruiken en weten wat we nodig hebben voor een fijne en comfortabele tijd. De momenten die wij zelf niet in het huisje doorbrengen, delen we graag met jou. We hopen dat het er ook voor jou een fijne plek zal zijn om te ontspannen en tot rust te komen.",
  },
]

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Header met afbeelding */}
      <div className="relative h-96 w-full">
        <Image
          src="/uploads/WhatsApp Image 2025-03-25 at 15.36.17.jpeg"
          alt="Tiny House Header"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-5xl font-bold">Over ons</h1>
        </div>
      </div>

      {/* Tijdlijn */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">Ons Tiny House Avontuur</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-gray-700 text-white p-3 rounded-full">
                  <event.icon className="w-6 h-6" />
                </div>
                <p className="font-medium mt-2">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inhoudssecties */}
      <div className="container mx-auto px-4 space-y-12">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} gap-8 items-center`}>
            <div className="md:w-2/5">
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={section.image}
                    alt={`Afbeelding ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent>
                  <Image
                    src={section.image}
                    alt={`Afbeelding ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <div className="md:w-3/5">
              <Card className="p-6 shadow-md rounded-lg">
                <CardContent>
                  <p className="text-gray-700 text-lg">{section.text}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}



