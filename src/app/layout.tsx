import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Serenity Hi-Tech",
  description: "Satisfactory solutions for a better tomorrow",
  icons: {
    icon: "/logo.png", // Main icon
    shortcut: "/logo.png", // For older browsers
    apple: "/logo.png", // Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="32x32 48x48 64x64" />

        <link rel="icon" href="/logo.png" type="image/svg+xml" />

        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gradient-to-b from-[#705103] to-[#341c02] text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
