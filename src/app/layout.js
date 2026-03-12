/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


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
  title: "VINFERNIA/VSTAR",
  description: "Coming soon!",
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
