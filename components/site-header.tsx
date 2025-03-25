"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/het huisje",
      label: "Het huisje",
    },
    {
      href: "/over-ons",
      label: "Over ons",
    },
    {
      href: "/boeken",
      label: "Boeken",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-6 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pl-1 pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center">
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
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`block px-5 py-2 text-lg font-medium hover:text-primary ${
                    pathname === route.href ? "text-primary" : ""
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 hidden lg:flex">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Villa%20Wildebras%20logo%20roze-bKwdWt908qyGCNzy2nSn8G4PNIlRGE.png"
            alt="Villa Wildebras"
            width={120}
            height={40}
            className="dark:invert"
          />
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium hover:text-primary ${pathname === route.href ? "text-primary" : ""}`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <Button asChild>
            <Link href="/boeken">Nu Boeken</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

