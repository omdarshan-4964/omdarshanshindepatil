import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-omdarshanpatil.vercel.app'),
  title: {
    default: "Omdarshan Shinde Patil — Next.js & AI Engineer",
    template: "%s | Omdarshan Shinde Patil",
  },
  description:
    "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems with 6+ Production Apps and 99.9% Uptime.",
  keywords: ["Next.js 16", "Agentic AI", "Distributed Systems", "Full Stack Developer", "React", "TypeScript", "AI Engineering", "Cloud Architecture", "Scalable Systems", "Software Engineer"],
  authors: [{ name: "Omdarshan Shinde Patil", url: "https://github.com/omdarshan-4964" }],
  creator: "Omdarshan Shinde Patil",
  publisher: "Omdarshan Shinde Patil",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Omdarshan Shinde Patil — Next.js & AI Engineer",
    description: "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems with 6+ Production Apps and 99.9% Uptime.",
    siteName: "Omdarshan Shinde Patil Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omdarshan Shinde Patil — Next.js & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omdarshan Shinde Patil — Next.js & AI Engineer",
    description: "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems with 6+ Production Apps and 99.9% Uptime.",
    creator: "@Omdarshan_jsx",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
