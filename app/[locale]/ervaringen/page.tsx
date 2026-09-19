import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ervaringen | Villa Wildebras",
  description: "Lees de ervaringen van gasten van Villa Wildebras.",
};

export default function ErvaringenPage() {
  const reviews = [
    {
      naam: "Emma",
      tekst:
        "Fantastische locatie, prachtige inrichting en alles was perfect verzorgd.",
    },
    {
      naam: "Michael",
      tekst:
        "Een heerlijke plek vlak bij strand en duinen. Zeker een aanrader.",
    },
    {
      naam: "Sophie",
      tekst:
        "Rust, ruimte en veel comfort. We hebben enorm genoten van ons verblijf.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative h-[40vh] lg:h-[60vh]">
        /Reviews.JPEG

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Ervaringen
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <section className="bg-white rounded-2xl shadow-md p-8 text-center mb-10">
          <div className="text-yellow-500 text-3xl mb-3">
            ★★★★★
          </div>

          <h2 className="text-3xl font-bold mb-2">
            5,0 / 5
          </h2>

          <p className="text-gray-600 mb-6">
            Gebaseerd op beoordelingen via Airbnb.
          </p>

          https://www.airbnb.nl/rooms/1421709322516548820
            Bekijk op Airbnb
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            Wat gasten zeggen
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.naam}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <div className="text-yellow-500 mb-4">
                  ★★★★★
                </div>

                <p className="italic text-gray-700 mb-4">
                  "{review.tekst}"
                </p>

                <p className="font-semibold">
                  {review.naam}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
