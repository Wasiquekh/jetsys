import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Montserrat } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Aerospace Innovation & Defence R&D in India | Jetsys Defence",
  description:
    "Pioneering R&D in aerospace and defence, Jetsys Defence develops indigenous technologies for avionics, AI-based control, and tactical applications.",
  alternates: {
    canonical: "https://www.jetsys.co.in/",
  },
};


// Montserrat (Google font)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P0Q4E9M3TL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P0Q4E9M3TL');
          `}
        </Script>
      </head>

      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
