import type { Metadata } from "next"
import Image from "next/image"
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
            <p className="mb-6">
              Je kunt direct bij ons boeken. Bekijk de beschikbaarheid en stuur ons een e-mail om te reserveren.
            </p>

            <div className="space-y-6">
              {/* Zomertarief */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Zomertarief <span className="font-normal">(mei t/m september)</span></h4>
                <ul className="text-gray-700 list-disc list-inside">
                  <li>€117 per nacht (minimaal 4 nachten)</li>
                  <li>€690 per week (maandag t/m zondag)</li>
                </ul>
              </div>

              {/* Wintertarief */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Wintertarief <span className="font-normal">(oktober t/m april)</span></h4>
                <ul className="text-gray-700 list-disc list-inside">
                  <li>€110 per nacht (minimaal 3 nachten)</li>
                  <li>€600 per week (maandag t/m zondag)</li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-gray-700">
              Alle prijzen zijn inclusief schoonmaakkosten, linnengoed en toeristenbelasting.
            </p>

            <a
              href="mailto:villawildebras@gmail.com?subject=Reservering%20Villa%20Wildebras"
              className="inline-block mt-6 bg-[#B84C65] hover:bg-[#9d3e54] transition-colors text-white font-medium py-2 px-4 rounded-lg shadow"
            >
              Stuur een e-mail
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

