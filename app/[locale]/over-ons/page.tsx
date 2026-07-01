import Image from "next/image";
import {
  Truck,
  Hammer,
  Home,
  Thermometer,
  Paintbrush,
  Flame,
  Hexagon,
  Moon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getTranslations } from "@/lib/getTranslations";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const timelineEvents = [
    { date: t.overons_timeline_date_1, title: t.overons_timeline_title_1, icon: Truck },
    { date: t.overons_timeline_date_2, title: t.overons_timeline_title_2, icon: Hammer },
    { date: t.overons_timeline_date_3, title: t.overons_timeline_title_3, icon: Home },
    { date: t.overons_timeline_date_4, title: t.overons_timeline_title_4, icon: Thermometer },
    { date: t.overons_timeline_date_5, title: t.overons_timeline_title_5, icon: Paintbrush },
    { date: t.overons_timeline_date_6, title: t.overons_timeline_title_6, icon: Flame },
    { date: t.overons_timeline_date_7, title: t.overons_timeline_title_7, icon: Hexagon },
    { date: t.overons_timeline_date_8, title: t.overons_timeline_title_8, icon: Moon },
  ];

  const sections = [
    {
      image: "/1.png",
      text: t.overons_section_1,
    },
    {
      image: "/2.png",
      text: t.overons_section_2,
    },
    {
      image: "/3.png",
      text: t.overons_section_3,
    },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Hero sectie */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <Image
          src="/Over-ons.JPEG"
          alt={t.overons_hero_alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.overons_title}
          </h1>
        </div>
      </div>

      {/* Tijdlijn */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            {t.overons_timeline_heading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-gray-700 text-white p-3 rounded-full">
                  <event.icon className="w-6 h-6" />
                </div>
                <p className="font-medium mt-2">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inhoudssecties */}
      <div className="container mx-auto px-4 space-y-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-8 items-center`}
          >
            <div className="md:w-2/5">
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={section.image}
                    alt={`${t.overons_image_alt} ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent>
                  <Image
                    src={section.image}
                    alt={`${t.overons_image_alt} ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <div className="md:w-3/5">
              <Card className="p-6 shadow-md rounded-lg">
                <CardContent>
                  <p className="text-gray-700 text-lg">{section.text}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
