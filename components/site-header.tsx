"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getTranslations } from "@/lib/getTranslations";

export function SiteHeader() {
  const pathname = usePathname();

  const locales = ["nl", "en", "de"];

  const currentLocale =
    locales.find(
      (locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    ) || "nl";

  const t = getTranslations(currentLocale);

  const pathWithoutLocale =
    pathname.replace(/^\/(nl|en|de)(?=\/|$)/, "") || "/";

  const routes = [
    {
      href: "/",
      label: t.nav_home,
    },
    {
      href: "/het-huisje",
      label: t.nav_house,
    },
    {
      href: "/over-ons",
      label: t.nav_about,
    },
    {
      href: "/boeken",
      label: t.nav_booking,
    },
    {
      href: "/contact",
      label: t.nav_contact,
    },
  ];

  const localizedRoutes = routes.map((route) => ({
    ...route,
    href: route.href === "/" ? `/${currentLocale}` : `/${currentLocale}${route.href}`,
  }));

  const isActiveRoute = (href: string) => {
    if (href === `/${currentLocale}`) {
      return pathname === `/${currentLocale}`;
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Mobiel menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-6 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">{t.nav_toggle_menu}</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="pl-1 pr-0">
            <div className="px-7">
              <Link href={`/${currentLocale}`} className="flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Villa%20Wildebras%20logo%20roze-bKwdWt908qyGCNzy2nSn8G4PNIlRGE.png"
                  alt="Villa Wildebras"
                  width={120}
                  height={40}
                  className="dark:invert"
                />
              </Link>
            </div>

            <nav className="flex flex-col gap-4 px-2 pt-8">
              {localizedRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`block px-5 py-2 text-lg font-medium hover:text-primary ${
                    isActiveRoute(route.href) ? "text-primary" : ""
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>

            <div className="flex gap-3 px-7 pt-6">
              <Link href={`/nl${pathWithoutLocale}`} className="text-base font-medium hover:text-primary">
                NL
              </Link>
              <Link href={`/en${pathWithoutLocale}`} className="text-base font-medium hover:text-primary">
                GB
              </Link>
              <Link href={`/de${pathWithoutLocale}`} className="text-base font-medium hover:text-primary">
                DE
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo desktop */}
        <Link href={`/${currentLocale}`} className="mr-6 hidden lg:flex">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Villa%20Wildebras%20logo%20roze-bKwdWt908qyGCNzy2nSn8G4PNIlRGE.png"
            alt="Villa Wildebras"
            width={120}
            height={40}
            className="dark:invert"
          />
        </Link>

        {/* Desktop navigatie */}
        <nav className="hidden gap-6 lg:flex">
          {localizedRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium hover:text-primary ${
                isActiveRoute(route.href) ? "text-primary" : ""
              }`}
            >
