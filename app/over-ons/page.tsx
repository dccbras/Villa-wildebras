import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Hammer, Home, Thermometer, Paintbrush, Flame, Hexagon, Moon } from "lucide-react"

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
  const sections = [
    {
      image: "/1.png",
      text: "Wij zijn Daniëlle en Albert, en wij hebben in 2022 het avontuur van het bouwen van ons eigen tiny house aangegaan. Het huisje staat in het mooie Egmond, aan de rand van het Noordhollands Duinreservaat – een plek waar de rust van de natuur en het uitzicht op Schotse hooglanders en paarden die grazen, je meteen doet ontsnappen aan de drukte van de stad. We wonen zelf in Amsterdam, maar Daniëlle is opgegroeid in Egmond en het voelt heerlijk om af en toe weer terug te zijn op deze rustige plek.",
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

  return (
    <main className="bg-[#F5F5DC] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-[#4A5D23] mb-12">Over ons</h1>

        {/* Tijdlijn sectie */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-start gap-2">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-4">
                <div className="bg-[#4A5D23] rounded-full p-2 mb-1">
                  {<event.icon className="w-4 h-4 text-white" />}
                </div>
                <p className="text-xs font-semibold text-[#4A5D23]">{event.date}</p>
                <p className="text-xs text-center mt-1">{event.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <Card key={index} className="overflow-hidden bg-white shadow-xl">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={`Afbeelding ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex items-center">
                    <p className="text-lg text-[#333333] leading-relaxed">{section.text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
