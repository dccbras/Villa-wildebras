import BookingForm from "@/components/BookingForm";
import type { Metadata } from "next";
import Image from "next/image";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import { getTranslations } from "@/lib/getTranslations";

export const metadata: Metadata = {
  title: "Boeken | Villa Wildebras",
  description: "Boek jouw verblijf bij Villa Wildebras in Egmond",
};

type Availability = {
  [date: string]: "available" | "unavailable";
};

export default async function BoekenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/availability`,
    {
      next: { revalidate: 60 },
    }
  );

  const availability: Availability = await res.json();
  const t = getTranslations(locale);

  return (
    <main className="min-h-screen relative">
      {/* Hero */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.boeken_title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t.boeken_intro}
          </h2>

          {/* Boekingsblok */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-8 bg-gray-50">
            <p className="text-gray-700 mb-6 text-center">
              {t.boeken_calculator_verwijzing}
            </p>

            <BookingForm locale={locale} />
          </div>

          {/* Kalender */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">
              {t.beschikbaarheid}
            </h3>
            <AvailabilityCalendar availability={availability} />
          </div>
        </div>
      </div>
    </main>
  );
}
``
