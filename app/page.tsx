import { HeroSection } from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Welkom bij Villa Wildebras</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Villa Wildebras is meer dan een tiny house - het is een unieke ervaring die je dichter bij de natuur en
                jezelf brengt. Met zorgvuldig gekozen materialen en een doordacht ontwerp bieden we je alle comfort in
                een compacte ruimte.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/over-ons">Ontdek Meer</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto lg:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fotocollage%20zonder%20filter%202-aN2ORUU9wYg13yKjFmdsPh1B4GoQMb.png"
                alt="Villa Wildebras interieur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Voorzieningen</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { Bed, ChefHat, Flame, Leaf, ShowerHeadIcon as Shower, Wifi } from "lucide-react"

const features = [
  {
    title: "Volledig Uitgeruste Keuken",
    description: "Kook je eigen maaltijden in onze moderne keuken met alle benodigde apparatuur.",
    icon: ChefHat,
  },
  {
    title: "Comfortabel Slapen",
    description: "Een ruim tweepersoonsbed met hoogwaardige matrassen voor optimaal slaapcomfort.",
    icon: Bed,
  },
  {
    title: "Houtkachel",
    description: "Geniet van de gezellige warmte van een authentieke houtkachel.",
    icon: Flame,
  },
  {
    title: "Moderne Badkamer",
    description: "Een compacte maar complete badkamer met regendouche.",
    icon: Shower,
  },
  {
    title: "Gratis Wifi",
    description: "Blijf verbonden met snel en betrouwbaar internet.",
    icon: Wifi,
  },
  {
    title: "Midden in de Natuur",
    description: "Omringd door groen en perfect voor natuurliefhebbers.",
    icon: Leaf,
  },
]

