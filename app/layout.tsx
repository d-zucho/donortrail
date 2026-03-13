import type { Metadata } from "next";
import { DM_Serif_Display, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from '@/components/Header';

const inter = Inter({subsets:['latin'],variable:'--font-inter', display: "swap"});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display"
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue"
});

export const metadata: Metadata = {
  title: "Donor Trail",
  description: "See exactly who funds your representatives, how they vote, and whether those two things are connected. Democracy requires transparency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} ${bebasNeue.variable} antialiased relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
