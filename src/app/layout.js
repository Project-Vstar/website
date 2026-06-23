import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
// import { SpeedInsights } from "@vercel/speed-insights/next"

import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://vstarproject.eu'),
  title: {
    default: 'VSTAR PROJECT — Virtual Entertainment Agency',
    template: '%s | VSTAR PROJECT',
  },
  description: 'VSTAR PROJECT is a virtual entertainment agency home to VINFERNIA and VSTAR — live streaming, 3D events, original manga, and more.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'VSTAR PROJECT',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VSVirtualStar',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
