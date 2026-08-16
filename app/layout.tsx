import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pankaj Dental Clinic | Modern Dental Care in Khopoli",
  description:
    "Pankaj Dental Clinic offers gentle, modern dental care in Khopoli, Maharashtra. Root canals, dental implants, wisdom tooth removal and more. Open daily 10 AM – 8 PM. Book an appointment online.",
  keywords: [
    "dentist Khopoli",
    "dental clinic Khopoli",
    "root canal Khopoli",
    "dental implants",
    "Pankaj Dental Clinic",
  ],
  authors: [{ name: "Pankaj Dental Clinic" }],
  openGraph: {
    title: "Pankaj Dental Clinic | Modern Dental Care in Khopoli",
    description:
      "Gentle, modern dental care in Khopoli. Book your appointment online today.",
    type: "website",
    locale: "en_IN",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} bg-slate-50`}>
      <body className="font-sans text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
