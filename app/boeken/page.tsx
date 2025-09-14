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

          {/* Prijsinformatie via Airbnb */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-8 bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">Prijzen & reserveren</h3>
            <p className="text-gray-700 mb-4">
              De actuele prijzen van je verblijf kun je bekijken via onze{" "}
              <a
                href="https://www.airbnb.nl/rooms/1421709322516548820?adults=2&search_mode=regular_search&source_impression_id=p3_1747506249_P31g_VcaNn26DfDl&previous_page_section_name=1000&federated_search_id=20e86a3a-a1b3-46fb-9d64-b51e515e1c13&guests=1&check_in=2025-10-06&check_out=2025-10-12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B84C65] font-medium hover:underline"
              >
                Airbnb-pagina
              </a>.
            </p>
            <p className="text-gray-700 mb-6">
              Boek je daarna direct via ons? Dan krijg je <strong>vanaf 3 nachten minimaal €50 korting</strong> op de totaalprijs. Bij een langer verblijf, ontvang je meer korting.  
              Alle prijzen zijn inclusief schoonmaakkosten, linnengoed en toeristenbelasting.
            </p>

            <a
              href="mailto:villawildebras@gmail.com?subject=Reservering%20Villa%20Wildebras"
              className="inline-block bg-[#B84C65] hover:bg-[#9d3e54] transition-colors text-white font-medium py-2 px-4 rounded-lg shadow"
            >
              Direct boeken via e-mail
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
