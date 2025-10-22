import type { Metadata } from "next";
import localFont from "next/font/local"; //
import "./globals.css";
import { Montserrat } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StickyHeader from "./components/StickyHeader";



// Montserrat (Google font)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// 1. Define the font object
export const metadata: Metadata = {
  title: "JETSYS DEFENCE",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}  antialiased`}>{children}</body>
    </html>
  );
}
