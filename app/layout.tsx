import { Inter } from "next/font/google"
import type React from "react" // Import React

import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Villa Wildebras - verblijf in ons unieke tiny house",
  description: "Geniet van een heerlijk verblijf aan de rand van het Noordhollands Duinreservaat",
    generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico",
}
    
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'
