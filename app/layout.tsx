// layout.tsx
"use client";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });
const waterlily = localFont({
  src: "../public/fonts/waterlily.ttf", // Pad aangepast voor juiste resolutie
  variable: "--font-waterlily"
});

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
