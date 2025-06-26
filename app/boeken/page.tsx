import type { Metadata } from "next"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import AvailabilityCalendar from "@/components/AvailabilityCalendar"

export const metadata: Metadata = {
  title: "Boeken | Villa Wildebras",
  description: "Boek jouw verblijf bij Villa Wildebras in Egmond",
}

type Availability = {
  [date: string]: "available" | "unavailable";
};

export default async function BoekenPage() {
  const res = await fetch(`${process.env.BASE_URL}/api/availability`, {
    next: { revalidate: 60 },
  });
  const availability: Availability = await res.json();

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

      {/* Boekingsinformatie */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">Boek jouw verblijf bij Villa Wildebras</h2>

          {/* Direct boeken */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">Direct boeken bij ons</h3>
            <p className="mb-4">
              Je kunt direct bij ons boeken. Bekijk de beschikbaarheid en stuur ons een e-mail om te reserveren.
            </p>
            <ul className="mb-4 text-gray-700">
              <li>• €117 per nacht (minimaal 4 nachten)</li>
              <li>• €690,- voor 1 week (van maandag tot zondag)
              Prijzen zijn incl. schoonmaakkosten, linnengoed en toeristenbelasting.</li>              
            </ul>
            <a
              href="mailto:villawildebras@gmail.com?subject=Reservering%20Villa%20Wildebras"
              className="inline-block bg-[#B84C65] hover:bg-[#9d3e54] transition-colors text-white font-medium py-2 px-4 rounded-lg shadow"
            >
              Stuur een e-mail
            </a>
          </div>
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
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
                  <div className="relative z-10 transition-transform group-hover:-translate-y-1">
                    <div className="w-16 h-10 bg-black rounded-full relative overflow-hidden">
                      <div className="absolute top-1 left-0 w-full h-2 bg-yellow-300"></div>
                      <div className="absolute top-5 left-0 w-full h-2 bg-yellow-300"></div>
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-6 bg-white rounded-full rotate-[30deg]"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-6 bg-white rounded-full -rotate-[30deg]"></div>
                    <div className="absolute -top-3 left-5 w-1 h-3 bg-black"></div>
                    <div className="absolute -top-3 right-5 w-1 h-3 bg-black"></div>
                    <div className="absolute -top-4 left-5 w-2 h-2 bg-yellow-300 rounded-full"></div>
                  </div>
                </div>
                </div>
              </div>
            </a>
          </div>

          {/* Beschikbaarheid tonen */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Beschikbaarheid</h3>
            <AvailabilityCalendar availability={availability} />
          </div>
        </div>
      </div>
    </main>
  )
}

