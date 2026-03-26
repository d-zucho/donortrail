import type { Metadata } from "next";
import { DM_Serif_Display, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from '@/components/Header';
import Footer from '@/sections/Footer';
import { ClerkProvider } from "@clerk/nextjs";

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

/**
 * Provides the application's root HTML layout, global font variables, and authentication provider.
 *
 * @param children - The page content to render inside the layout between the header and footer
 * @returns The root HTML element containing the configured <body>, <ClerkProvider>, <Header>, `children`, and <Footer>
 */
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
          <ClerkProvider>
            <Header />
            {/* <HeroHeader /> */}
            {children}
            <Footer />
          </ClerkProvider>
        </body>
      </html>
  );
}
