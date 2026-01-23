import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "PropertyWaleBabu - Ready-to-Move Flats in Lucknow | Luxury Properties for Sale",
  description:
    "Explore high-quality apartments from 1 BHK to 4 BHK across prime Lucknow locations. Ready-to-move flats with immediate allotment, no waiting. Buy luxury properties in UP.",
  icons: {
    icon: [
      { url: "/images/logo_cropp.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo_cropp.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo_cropp.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo_cropp.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable} ${poppins.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
