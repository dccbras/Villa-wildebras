"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type React from "react";

// Correcte font-import met bestand in public/fonts:
const inter = Inter({ subsets: ["latin"] });
const waterlily = localFont({ src: "/fonts/Waterlily.woff2" });

export const metadata: Metadata = {
  title: "Villa Wildebras - verblijf in ons unieke tiny house",
  description: "Geniet van een heerlijk verblijf aan de rand van het Noordhollands Duinreservaat",
  generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}

import './globals.css'
