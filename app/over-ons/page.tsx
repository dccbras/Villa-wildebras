import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Over Ons | Villa Wildebras",
  description: "Leer meer over Villa Wildebras en het verhaal erachter.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero sectie met afbeelding */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="/WhatsApp Image 2025-03-25 at 15.36.17.jpeg" // Zorg dat deze afbeelding in de juiste map staat
          alt="Villa Wildebras Tiny House"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Over Ons</h1>
        </div>
      </div>

      {/* Over Ons Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-6">Ons Verhaal</h2>
          <p className="text-gray-700 leading-relaxed">
            Villa Wildebras is een tiny house dat staat voor rust, natuur en eenvoud. Op deze prachtige plek
            midden in het groen bieden we een unieke ervaring voor onze gasten.
          </p>
        </div>
      </div>
    </main>
  )
}
