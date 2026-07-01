import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, ExternalLink } from "lucide-react";
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
    title: t.contact_meta_title,
    description: t.contact_meta_description,
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const mapsUrl =
    "https://www.google.com/maps/place/Villa+Wildebras/@52.632601,4.6536082,660m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47cf598de24d3d23:0xf5307af7bcbe5895!8m2!3d52.6325978!4d4.6561831!16s%2Fg%2F11x93lsr0l?entry=ttu";

  /**
   * Werkt zonder extra API key.
   * Wil je later de exact door Google gegenereerde embed gebruiken?
   * Dan kun je deze URL vervangen door de src uit:
   * Google Maps > Delen > Kaart insluiten
   */
  const mapsEmbedUrl =
    "https://www.google.com/maps?q=Villa%20Wildebras%2C%20Egmond%20aan%20den%20Hoef&z=15&output=embed";

  const emailAddress = "villawildebras@gmail.com";

  return (
    <main className="min-h-screen relative">
      {/* Hero sectie */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="Contact.JPEG"
          alt={t.contact_hero_alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.contact_title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[420px,1fr] items-start">
          {/* Contactgegevens */}
          <section className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              {t.contactgegevens_title}
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">{t.adres_title}</h3>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block text-gray-800 hover:text-[#B84C65] transition-colors"
                    aria-label={`${t.bekijk_google_maps} - Villa Wildebras`}
                  >
                    <p className="group-hover:underline">Herenweg 285</p>
                    <p className="group-hover:underline">
                      1934 BC Egmond aan den Hoef
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">{t.email_title}</h3>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-[#B84C65] hover:underline break-all"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#B84C65] text-white font-medium rounded-md hover:bg-[#9d3e54] transition-colors"
              >
                <span>{t.bekijk_google_maps}</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Locatie / kaart */}
          <section className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">{t.locatie_title}</h2>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
              <div className="aspect-video relative">
                <iframe
                  src={mapsEmbedUrl}
                  title={`${t.locatie_title} - Villa Wildebras`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-gray-700">
                <p className="font-medium">Villa Wildebras</p>
                <p>Herenweg 285, 1934 BC Egmond aan den Hoef</p>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#B84C65] text-white font-medium rounded-md hover:bg-[#9d3e54] transition-colors"
              >
                <span>{t.bekijk_google_maps}</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
