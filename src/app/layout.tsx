import type { Metadata } from "next";
import localFont from "next/font/local"; //
import "./globals.css";
import { Montserrat } from "next/font/google";

// Montserrat (Google font)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Horizon font
const horizon = localFont({
  src: [
    {
      path: "/fonts/Horizon.woff2", // ✅ correct
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-horizon",
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
        className={`${montserrat.variable} ${horizon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
