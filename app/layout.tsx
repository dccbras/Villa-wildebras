import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import type React from "react"
import { metadata } from "./metadata" // Importeer metadata

const inter = Inter({ subsets: ["latin"] })
const waterlily = localFont({ src: "./fonts/waterlily.ttf" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <style jsx global>{`
          h1, h2, h3, h4, h5, h6 {
            font-family: ${waterlily.style.fontFamily};
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}

