import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VStar Shop",
  description: "Coming soon!",
};

export default function Shop() {
  return (
    <html lang="en">
      <head>
        <title>VStar Shop</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
          <img src="/vstar.png" alt="VSTAR Logo" className="w-32 h-32 mb-4" />
          <h1 className="text-4xl font-bold">VStar Shop</h1>
          <p className="text-lg" style={{ color: "#9ca3af" }}>Coming soon!</p>
        </div>
      </body>
    </html>
  );
}