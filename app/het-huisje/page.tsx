import type { Metadata } from "next"
import Image from "next/image"
import { Home, MapPin, Sparkles, Flame, Utensils, Wifi, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Over het huisje | Villa Wildebras",
  description: "Ontdek alles over ons Tiny House Villa Wildebras in Egmond.",
}

export default function OverHetHuisjePage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero sectie met duinenfoto */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auke-bakker-3Ue6-EXUBTE-unsplash.jpg-5NyLn4ZFwHdvcvrCaAzOCZHTvV7bz0.jpeg"
          alt="Duinen bij Egmond aan den Hoef"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">Over het huisje</h1>
        </div>
      </div>

      {/* Informatie sectie */}
      <div className="container mx-auto px-4 py-12 max-w-6xl -mt-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introductie */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Bekijk het Tiny House van binnen</h2>
            <p className="mb-4">
              Villa Wildebras is een charmant Tiny House gelegen in het prachtige Egmond aan den Hoef. Het huisje staat
              aan de duinrand op het erf van een oude bloembollenkwekerij. Wij bieden een unieke en comfortabele
              verblijfservaring, perfect voor wie op zoek is naar rust en natuur, maar toch dicht bij alle voorzieningen
              wil zijn.
            </p>
            <p>
              Het Tiny House is met zorg ingericht en biedt alles wat je nodig hebt voor een ontspannen verblijf. Geniet
              van de rust, de prachtige omgeving en de gezellige sfeer die ons huisje te bieden heeft.
            </p>
            <p>
            </p>
          </div>

          {/* Instagram sectie */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-6">Volg ons op Instagram</h2>
              <p className="text-center mb-6">
                Bekijk meer foto's en blijf op de hoogte van de laatste updates over Villa Wildebras op onze Instagram
                pagina.
              </p>
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
            <h2 className="text-2xl font-semibold mb-6">Ons Tiny House</h2>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fotocollege%20zonder%20filter%201-mCoyuZGi5lPaAMBrpQ7qrCI1EbJU05.png"
                alt="Fotocollage van Villa Wildebras"
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
                Voorzieningen
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Home className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Comfortabel verblijf</h3>
                    <p>
                      Ondanks de compacte afmetingen biedt ons Tiny House alle comfort die je nodig hebt. Met een
                      gezellige woonruimte, volledig uitgeruste keuken, comfortabele slaapvide en een moderne badkamer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Flame className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Houtkachel</h3>
                    <p>
                      Voor extra sfeer en warmte is het huisje voorzien van een houtkachel, perfect voor gezellige
                      avonden, zelfs in de koudere maanden.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Utensils className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Volledig uitgeruste keuken</h3>
                    <p>
                      De keuken is voorzien van alle benodigdheden om zelf te kunnen koken, inclusief kookplaat,
                      koelkast, koffiezetapparaat en alle keukengerei (geen oven of magnetron).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Wifi className="h-6 w-6 text-[#B84C65] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Modern comfort</h3>
                    <p>
                      Geniet van moderne voorzieningen zoals gratis WiFi, verwarming en warme douche voor een
                      comfortabel verblijf.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fotocollage 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Interieur impressie</h2>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fotocollage%20zonder%20filter%202-0xJzitG054PS8Wjgk935FZdNtVLmEQ.png"
                alt="Interieur fotocollage van Villa Wildebras"
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
                Ligging
              </span>
            </h2>
            <p className="mb-4">
              Villa Wildebras is ideaal gelegen in Egmond aan den Hoef, op slechts een korte afstand van:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>5 minuten rijden naar het strand van Egmond aan Zee.</li>
              <li>Directe toegang tot prachtige wandel- en fietsroutes door de duinen.</li>
              <li>15 minuten rijden naar de historische stad Alkmaar</li>
              <li>Nabij diverse restaurants en winkels in Egmond.</li>
            </ul>
            <p>
              De locatie biedt een perfecte uitvalsbasis om de omgeving te verkennen. Vanuit de grote ramen van het huisje heb je zicht op de duinrand waar wilde paarden en schotse hooglanders grazen. Daarnaast zijn alle voorzieningen binnen handbereik.
              Laat het vooral weten wanneer je meer vragen hebt over ons geweldige huisje!
            </p>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Adres</h3>
              <p>Herenweg 285</p>
              <p>1934 BC Egmond aan den Hoef</p>
            </div>
          </div>

          {/* Bijzonderheden */}
          <div className="bg-white p-8 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Bijzonderheden</h2>
            <p className="mb-4">
              Ons tiny house is met zorg ontworpen en gebouwd met aandacht voor detail en duurzaamheid. De unieke
              indeling maakt optimaal gebruik van de beschikbare ruimte, waardoor het huisje verrassend ruim aanvoelt.
            </p>
            <p className="mb-4">
              De grote ramen zorgen voor veel natuurlijk licht en bieden een prachtig uitzicht op de omgeving. De warme
              kleuren en natuurlijke materialen creëren een gezellige en huiselijke sfeer.
            </p>
            <p>
              Villa Wildebras is het hele jaar door te huur, elk seizoen heeft zijn eigen charme in deze prachtige
              omgeving.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}


