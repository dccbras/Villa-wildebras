import type { Metadata } from "next";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title:
      locale === "en"
        ? "Guest Experiences | Villa Wildebras"
        : locale === "de"
        ? "Gästeerfahrungen | Villa Wildebras"
        : "Ervaringen | Villa Wildebras",
    description:
      locale === "en"
        ? "Read guest experiences from Villa Wildebras."
        : locale === "de"
        ? "Lesen Sie die Erfahrungen unserer Gäste."
        : "Lees de ervaringen van onze gasten.",
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  const text = {
    title:
      locale === "en"
        ? "Guest Experiences"
        : locale === "de"
        ? "Gästeerfahrungen"
        : "Ervaringen",

    ratingText:
      locale === "en"
        ? "Average Airbnb rating"
        : locale === "de"
        ? "Durchschnittliche Airbnb-Bewertung"
        : "Gemiddelde Airbnb beoordeling",

    airbnbButton:
      locale === "en"
        ? "View on Airbnb"
        : locale === "de"
        ? "Auf Airbnb ansehen"
        : "Bekijk op Airbnb",

    reviewsTitle:
      locale === "en"
        ? "What guests say"
        : locale === "de"
        ? "Was Gäste sagen"
        : "Wat gasten zeggen",
  };

  const airbnbUrl =
    "https://www.airbnb.nl/rooms/1421709322516548820";

  const reviews = [
    {
      name: "Emma",
      country: "Nederland",
      text: "Een prachtige locatie, sfeervol ingericht en van alle gemakken voorzien.",
    },
    {
      name: "Michael",
      country: "Duitsland",
      text: "Geweldige uitvalsbasis voor strand, duinen en uitstapjes in Noord-Holland.",
    },
    {
      name: "Sophie",
      country: "België",
      text: "Alles was perfect verzorgd. We komen graag nog eens terug.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        /Reviews.JPEG

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            {text.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Score */}
        <section className="bg-white rounded-2xl shadow-md p-8 text-center mb-10">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-8 h-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-2">5.0 / 5</h2>

          <p className="text-gray-600 mb-6">{text.ratingText}</p>

          {airbnbUrl}
            {text.airbnbButton}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </section>

        {/* Reviews */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8">
            {text.reviewsTitle}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="italic text-gray-700 mb-6">
                  "{review.text}"
                </p>

                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    {review.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
