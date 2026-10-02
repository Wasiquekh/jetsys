import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Aerospace Innovation & Defence R&D in India | Jetsys Defence",
  description:
    "Pioneering R&D in aerospace and defence, Jetsys Defence develops indigenous technologies for avionics, AI-based control, and tactical applications.",
  alternates: {
    canonical: "https://www.jetsys.co.in/",
  },
};

export default function Page() {
  return <HomeClient />;
}
