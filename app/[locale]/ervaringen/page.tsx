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
    title: t.ervaringen_meta_title,
    description: t.ervaringen_meta_description,
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const airbnbUrl =
    "https://www.airbnb.nl/rooms/1421709322516548820";

  const ervaringen = [
    {
      naam: "Emma",
      land: "Nederland",
      tekst: t.ervaring_1,
    },
    {
      naam: "Michael",
      land: "Duitsland",
      tekst: t.ervaring_2,
    },
    {
      naam: "Sophie",
      land: "België",
      tekst: t.ervaring_3,
    },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Hero */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        /Reviews.JPEG

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.ervaringen_title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        {/* Score kaart */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-10 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-8 w-8 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-2">5.0 / 5</h2>

          <p className="text-gray-600 mb-6">
            {t.ervaringen_score_text}
          </p>

          {airbnbUrl}
            <span>{t.bekijk_airbnb_reviews}</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </section>

        {/* Highlights */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-6">
            {t.waarom_gasten_title}
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>✓ {t.highlight_1}</div>
            <div>✓ {t.highlight_2}</div>
            <div>✓ {t.highlight_3}</div>
            <div>✓ {t.highlight_4}</div>
            <div>✓ {t.highlight_5}</div>
            <div>✓ {t.highlight_6}</div>
          </div>
        </section>

        {/* Ervaringen */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t.gastervaringen_title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ervaringen.map((ervaring, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="italic text-gray-700 mb-6">
                  "{ervaring.tekst}"
                </p>

                <div>
                  <p className="font-semibold">{ervaring.naam}</p>
                  <p className="text-sm text-gray-500">
                    {ervaring.land}
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
