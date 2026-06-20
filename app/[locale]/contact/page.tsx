import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Mail, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Villa Wildebras",
  description: "Neem contact op met Villa Wildebras in Egmond aan den Hoef",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero sectie met duinenfoto */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chris-de-tempe-eTewIFLlyhA-unsplash.jpg-GwkWvnkvEcs6KSR2Q6U5FF2VCwRXDQ.jpeg"
          alt="Duinpad in het Noordhollands Duinreservaat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Contact</h1>
        </div>
      </div>

      {/* Contactgegevens sectie */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Contactgegevens</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <p>Herenweg 285</p>
                  <p>1934 BC Egmond aan den Hoef</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">E-mail</h3>
                  <a href="mailto:Villawildebras@gmail.com" className="text-[#B84C65] hover:underline">
                    Villawildebras@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Herenweg+285+1934+BC+Egmond+aan+den+Hoef"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#B84C65] text-white font-medium rounded-md hover:bg-[#9d3e54] transition-colors"
              >
                <span>Bekijk op Google Maps</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Locatie</h2>
            <div className="aspect-video relative rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="mb-4">Herenweg 285, 1934 BC Egmond aan den Hoef</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Herenweg+285+1934+BC+Egmond+aan+den+Hoef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#B84C65] text-white font-medium rounded-md hover:bg-[#9d3e54] transition-colors"
                >
                  <span>Bekijk op Google Maps</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
