import type { Metadata } from "next";
import Image from "next/image";
import {
  Home,
  MapPin,
  Sparkles,
  Flame,
  Utensils,
  Wifi,
  Instagram,
} from "lucide-react";
import { getTranslations } from "@/lib/getTranslations";

export const metadata: Metadata = {
  title: "Over het huisje | Villa Wildebras",
  description: "Ontdek alles over ons Tiny House Villa Wildebras in Egmond.",
};

export default function OverHetHuisjePage({
  params,
}: {
  params: Promise<{ locale: string }>
const { locale } = await params;
}) {
  const t = getTranslations(params.locale);

  return (
    <main className="min-h-screen relative">
      {/* Hero */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auke-bakker-3Ue6-EXUBTE-unsplash.jpg-5NyLn4ZFwHdvcvrCaAzOCZHTvV7bz0.jpeg"
          alt={t.over_hero_alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.over_title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Intro */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">
              {t.over_intro_title}
            </h2>
            <p className="mb-4">{t.over_intro_1}</p>
            <p>{t.over_intro_2}</p>
          </div>

          {/* Instagram */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-6">
                {t.instagram_title}
              </h2>
              <p className="text-center mb-6">{t.instagram_text}</p>

              <a
                href="https://www.instagram.com/villawildebras"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
                <span>@villawildebras</span>
              </a>
            </div>
          </div>

          {/* Fotocollage 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">
              {t.over_collage_1}
            </h2>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/Fotocollage impressie.jpg"
                alt={t.over_collage_1_alt}
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Voorzieningen */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">
              <span className="flex items-center">
                <Sparkles className="h-6 w-6 text-[#B84C65] mr-3" />
                {t.voorzieningen}
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Home className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.voorziening_1_title}</h3>
                    <p>{t.voorziening_1_text}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Flame className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.voorziening_2_title}</h3>
                    <p>{t.voorziening_2_text}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Utensils className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.voorziening_3_title}</h3>
                    <p>{t.voorziening_3_text}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Wifi className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{t.voorziening_4_title}</h3>
                    <p>{t.voorziening_4_text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fotocollage 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">
              {t.over_collage_2}
            </h2>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/Fotocollage impressie (1).jpg"
                alt={t.over_collage_2_alt}
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Ligging */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">
              <span className="flex items-center">
                <MapPin className="h-6 w-6 text-[#B84C65] mr-3" />
                {t.ligging_title}
              </span>
            </h2>

            <p className="mb-4">{t.ligging_intro}</p>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>{t.ligging_1}</li>
              <li>{t.ligging_2}</li>
              <li>{t.ligging_3}</li>
              <li>{t.ligging_4}</li>
            </ul>

            <p>{t.ligging_text}</p>

            <div className="mt-6">
              <h3 className="font-medium mb-2">{t.adres_title}</h3>
              <p>Herenweg 285</p>
              <p>1934 BC Egmond aan den Hoef</p>
            </div>
          </div>

          {/* Bijzonderheden */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">
              {t.bijzonderheden_title}
            </h2>
            <p className="mb-4">{t.bijzonderheden_1}</p>
            <p className="mb-4">{t.bijzonderheden_2}</p>
            <p>{t.bijzonderheden_3}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

