"use client"

import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Over ons | Villa Wildebras",
  description: "Leer meer over Villa Wildebras en ons verhaal",
}

export default function OverOnsPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero sectie met achtergrondafbeelding */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zoe-gayah-jonker-Lit4A7dKruo-unsplash.jpg"
          alt="Villa Wildebras omgeving"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Over ons</h1>
        </div>
      </div>

      {/* De rest van de originele 'Over ons' pagina blijft behouden */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Jouw originele content blijft hier staan */}
      </div>
    </main>
  )
}


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
              className={flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center}
            >
              <div className="md:w-2/5">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] max-w-sm mx-auto">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={Afbeelding ${index + 1}}
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
                      alt={Afbeelding ${index + 1}}
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
