import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold">Over ons</h1>
        <p className="text-lg text-center max-w-2xl">
Wij zijn Daniëlle en Albert, en wij hebben in 2022 het avontuur van het bouwen van ons eigen tiny house aangegaan.
Het huisje staat in het mooie Egmond, aan de rand van het Noordhollands Duinreservaat – een plek waar de rust van de natuur en het uitzicht op Schotse hooglanders en paarden die grazen, je meteen doet ontsnappen aan de drukte van de stad.

We wonen zelf in Amsterdam, maar Daniëlle is opgegroeid in Egmond en het voelt heerlijk om af en toe weer terug te zijn op deze rustige plek.
We zijn begonnen met bouwen op een echte tiny house trailer.

Van 3D-tekeningen tot het houtskelet en de afwerking, elke stap was een leerzaam proces. We hebben de materialen zoveel mogelijk tweedehands ingekocht via Marktplaats of zelfs gevonden bij het grofvuil – en je zult zien: dat is absoluut niet te zien aan het eindresultaat!

Sinds de zomer 2024 staat het huisje op zijn plek en hebben we er voor het eerst in geslapen. Het kleine huisje is van alle gemakken voorzien, omdat we het zelf ook vaak gebruiken en weten wat we nodig hebben voor een fijne en comfortabele tijd. 
In de tussentijd is onze zoon Abel geboren, wat deze nieuwe fase van ons leven nog specialer maakt.
We nodigen jou van harte uit om ook van de rust en de natuur rondom ons tiny house te genieten. Of je nu komt voor een weekendje weg of een langere vakantie, we hopen dat ons huisje ook voor jou een fijne plek zal zijn om te ontspannen en tot rust te komen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(num => (
            <Card key={num}>
              <CardContent className="p-4">
                <Image
                  src={`/${num}.png`}
                  alt={`Afbeelding ${num}`}
                  width={400}
                  height={600}
                  className="rounded-2xl shadow-lg"
                  priority
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
