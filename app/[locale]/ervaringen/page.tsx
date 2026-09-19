import type { Metadata } from "next";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { getTranslations } from "@/lib/getTranslations";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: t.reviews_meta_title,
    description: t.reviews_meta_description,
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const airbnbUrl =
    "https://www.airbnb.nl/rooms/1421709322516548820";

  const reviews = [
    {
      name: "Emma",
      country: "Nederland",
      text: t.review_1,
    },
    {
      name: "Michael",
      country: "Duitsland",
      text: t.review_2,
    },
    {
      name: "Sophie",
      country: "België",
      text: t.review_3,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="relative *-[40vh] lg:h-[60vh] w-full">
        /Reviews.JPEG

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.reviews_title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Score blok */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-10 text-center">

          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-8 w-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-2">
            5.0 / 5
          </h2>

          <p className="text-gray-600 mb-6">
            {t.reviews_score_text}
          </p>

          {airbnbUrl}
            {t.view_airbnb_reviews}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>

        </section>

        {/* Reviews */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">
                "{review.text}"
              </p>

              <div>
                <p className="font-semibold">
                  {review.name}
                </p>

                <p className="text-sm text-gray-500">
                  {review.country}
                </p>
              </div>

            </div>
          ))}

        </section>

      </div>
    </main>
  );
}
