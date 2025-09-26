import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tydalai.com'),
  title: {
    default: "Tydal AI - Transform Your Business",
    template: "%s | Tydal AI"
  },
  description: "From automated workflows to data-driven decisions, Tydal AI helps small and mid-sized companies unlock real value from AI—fast, safe, and scalable.",
  keywords: [
    "AI consulting",
    "business automation",
    "AI transformation",
    "AI workflows",
    "small business AI",
    "AI implementation",
    "process automation",
    "AI integration services"
  ],
  authors: [{ name: "Tydal AI" }],
  creator: "Tydal AI",
  publisher: "Tydal AI",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tydalai.com',
    siteName: 'Tydal AI',
    title: 'Tydal AI - Transform Your Business with AI',
    description: 'From automated workflows to data-driven decisions, Tydal AI helps small and mid-sized companies unlock real value from AI—fast, safe, and scalable.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tydal AI - Transform Your Business with AI',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tydal AI - Transform Your Business with AI',
    description: 'From automated workflows to data-driven decisions, Tydal AI helps small and mid-sized companies unlock real value from AI—fast, safe, and scalable.',
    images: ['/og-image.png'],
    creator: '@TydalAI',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://tydalai.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#10b981' }
    ]
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
