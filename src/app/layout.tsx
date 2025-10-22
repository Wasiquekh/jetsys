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
const horizonFont = localFont({
  src: [
    {
      path: "/fonts/Horizon-Regular.woff2", // Adjust the path to your file
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Horizon-Bold.woff2", // Add other weights as needed
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-horizon", // This creates the CSS variable
  display: "swap",
});

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
      <body
        className={`${montserrat.variable} ${horizonFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
