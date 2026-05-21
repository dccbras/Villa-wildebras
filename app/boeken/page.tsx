import BookingForm from "@/components/BookingForm";
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/availability`, {
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

          {/* Prijsinformatie */}
<div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-8 bg-gray-50">
  <h3 className="text-xl font-semibold mb-4">Prijzen &amp; reserveren</h3>

  <p className="text-gray-700 mb-4">
    Hieronder vind je onze richtprijzen, en onderaan de pagina de beschikbaarheidskalender. Wil je boeken of een vraag stellen? Vul dan het formulier in. We reageren
    snel.
  </p>

  <div className="text-gray-700 mb-6 space-y-4">
    <div>
      <p className="font-semibold">Hoogseizoen (mei t/m september)</p>
      <ul className="list-disc pl-5">
        <li>Prijs per nacht: <strong>€135</strong></li>
        <li>Prijs per week (6 nachten): <strong>€700</strong></li>
      </ul>
    </div>

    <div>
      <p className="font-semibold">Laagseizoen (oktober t/m april)</p>
      <ul className="list-disc pl-5">
        <li>Prijs per nacht: <strong>€100</strong></li>
        <li>Voor meerdere dagen: <strong>in overleg</strong></li>
      </ul>
    </div>

    <p className="text-sm text-gray-600">
      Alle prijzen zijn inclusief <strong>schoonmaakkosten</strong>, <strong>linnengoed</strong> en{" "}
      <strong>toeristenbelasting</strong>.
    </p>
  </div>

  <BookingForm />
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
