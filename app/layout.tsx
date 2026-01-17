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
  title: "SLMI Pest Control - Complete Pest Protection System",
  description:
    "Eco-safe, certified, and guaranteed pest control services. Professional termite, rodent, and cockroach treatments in Lucknow.",
  icons: {
    icon: [
      { url: "/images/slmi.png", sizes: "32x32", type: "image/png" },
      { url: "/images/slmi.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/slmi.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/slmi.png",
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
