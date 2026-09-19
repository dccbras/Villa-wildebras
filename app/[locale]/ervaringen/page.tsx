import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ervaringen | Villa Wildebras",
  description: "Lees de ervaringen van gasten van Villa Wildebras.",
};

export default function ErvaringenPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="/Reviews.JPEG"
          alt="Ervaringenck/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Ervaringen
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <section className="bg-white rounded-2xl shadow-md p-8 mb-10 text-center">
          <div className="text-4xl text-yellow-500 mb-4">
            ★★★★★
          </div>

          <h2 className="text-3xl font-bold mb-2">
            5,0 / 5
          </h2>

          <p className="text-gray-600 mb-6">
            Gebaseerd op beoordelingen via Airbnb
          </p>

          <a
            href="https://www.airbnb.nl/rooms/1421709322516548820"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#B84C65] text-white rounded-md hover:bg-[#9d3e54]"
          >
            Bekijk op Airbnb
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Wat gasten zeggen
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-yellow-500 mb-4">★★★★★</div>

              <p className="italic text-gray-700 mb-4">
                "Fantastische locatie, prachtig ingericht en van alle gemakken voorzien."
              </p>

              <p className="font-semibold">Emma</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-yellow-500 mb-4">★★★★★</div>

              <p className="italic text-gray-700 mb-4">
                "Een geweldige uitvalsbasis voor strand, duinen en ontspanning."
              </p>

              <p className="font-semibold">Michael</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="text-yellow-500 mb-4">★★★★★</div>

              <p className="italic text-gray-700 mb-4">
                "We hebben enorm genoten en komen graag nog eens terug."
              </p>

              <p className="font-semibold">Sophie</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
