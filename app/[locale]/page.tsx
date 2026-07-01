import { HeroSection } from "@/components/hero-section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Bed,
  ChefHat,
  Flame,
  Leaf,
  ShowerHeadIcon as Shower,
  Wifi,
} from "lucide-react";
import { getTranslations } from "@/lib/getTranslations";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const features = [
    {
      title: t.home_feature_1_title,
      description: t.home_feature_1_description,
      icon: ChefHat,
    },
    {
      title: t.home_feature_2_title,
      description: t.home_feature_2_description,
      icon: Bed,
    },
    {
      title: t.home_feature_3_title,
      description: t.home_feature_3_description,
      icon: Flame,
    },
    {
      title: t.home_feature_4_title,
      description: t.home_feature_4_description,
      icon: Shower,
    },
    {
      title: t.home_feature_5_title,
      description: t.home_feature_5_description,
      icon: Wifi,
    },
    {
      title: t.home_feature_6_title,
      description: t.home_feature_6_description,
      icon: Leaf,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection locale={locale} />

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {t.home_title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t.home_intro}
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href={`/${locale}/het-huisje`}>
                    {t.home_more_about_house}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-auto lg:h-[600px]">
              <Image
                src="Startpagina.JPEG"
                alt={t.home_image_alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.home_features_title}
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
