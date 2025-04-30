import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Boeken | Villa Wildebras",
  description: "Boek jouw verblijf bij Villa Wildebras in Egmond",
}

export default function BoekenPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero sectie met bosfoto */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wim-van-t-einde-Unb2Eh1HDOE-unsplash.jpg-s8ekArjg7nOFokR0SflXfX4EvD2h0d.jpeg"
          alt="Bos met dennenbomen en zonlicht"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Boeken</h1>
        </div>
      </div>

      {/* Boekingsinformatie sectie */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6 text-center">Boek jouw verblijf bij Villa Wildebras</h2>

            <p className="text-center mb-8">
              Je kunt bij ons boeken via Natuurhuisje. Je kunt ook (met korting) direct bij ons boeken, neem contact met ons op voor een uitgebreide beschikbaarheidslijst.
            </p>

            {/* Cartoon bij-knop */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.natuurhuisje.nl/vakantiehuisje/83614"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group relative"
              >
                <div className="flex flex-col items-center">
                  {/* Cartoon bij met vluchtpad */}
                  <div className="relative mb-4">
                    {/* Vluchtpad (gestippelde lijn) */}
                    <svg
                      className="absolute w-48 h-24 -left-16 -top-8"
                      viewBox="0 0 200 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10,50 Q50,10 100,50 T190,50"
                        stroke="black"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Bij lichaam */}
                    <div className="relative z-10 transition-transform group-hover:-translate-y-1">
                      {/* Lichaam (ovaal) */}
                      <div className="w-16 h-10 bg-black rounded-full relative overflow-hidden">
                        {/* Gele strepen */}
                        <div className="absolute top-1 left-0 w-full h-2 bg-yellow-300"></div>
                        <div className="absolute top-5 left-0 w-full h-2 bg-yellow-300"></div>
                      </div>

                      {/* Vleugels */}
                      <div className="absolute -top-2 -left-2 w-8 h-6 bg-white rounded-full rotate-[30deg]"></div>
                      <div className="absolute -top-2 -right-2 w-8 h-6 bg-white rounded-full -rotate-[30deg]"></div>

                      {/* Antennes */}
                      <div className="absolute -top-3 left-5 w-1 h-3 bg-black"></div>
                      <div className="absolute -top-3 right-5 w-1 h-3 bg-black"></div>
                      <div className="absolute -top-4 left-5 w-2 h-2 bg-yellow-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Knop */}
                  <div className="bg-[#B84C65] hover:bg-[#9d3e54] transition-colors px-8 py-4 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-medium text-lg">Boeken via Natuurhuisje</span>

                    <ExternalLink className="ml-2 h-5 w-5 text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

