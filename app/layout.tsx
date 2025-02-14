// layout.tsx
"use client";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });
const waterlily = localFont({
  src: "/fonts/waterlily.ttf",
  variable: "--font-waterlily"
});

// Verplaats metadata naar een apart bestand of verwijder voor 'use client'
// Hier is metadata apart gelaten voor server compatibility

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={waterlily.variable}>
      <body className={`${inter.className}`}>
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

