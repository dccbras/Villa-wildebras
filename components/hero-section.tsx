import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fotocollege%20zonder%20filter%201-SNLAeTpLfZ6lgpdMNYmoh4pirfOwE1.png"
        alt="Villa Wildebras exterieur"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative flex h-full flex-col items-center justify-center text-center">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Ervaar tiny living in
          <span className="text-primary"> Villa Wildebras</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white">
          Geniet van een heerlijk verblijf aan de rand van het Noordhollands Duinreservaat
        </p>
        <div className="mt-10 flex gap-4">
          <Button size="lg" asChild>
            <Link href="/boeken">Nu Boeken</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white" asChild>
            <Link href="/over-ons">Meer Info</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

