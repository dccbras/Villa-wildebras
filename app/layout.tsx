import type React from "react"
import { Nunito, Playfair_Display } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${nunito.variable} ${playfair.variable}`}>
      <head>
        <title>Villa Wildebras - Over Ons</title>
        <meta
          name="description"
          content="Ontdek het verhaal achter Villa Wildebras, ons zelfgebouwde tiny house in Egmond aan de rand van het Noordhollands Duinreservaat."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

