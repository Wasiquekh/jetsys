import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Jetsys Defence | Defence & Aerospace Company in Navi Mumbai, India",
  description:
    "Jetsys Defence is a defence and aerospace engineering and manufacturing company in Navi Mumbai, India: aviation ground equipment, test systems and spares.",
  alternates: {
    canonical: "https://www.jetsys.co.in/",
  },
};

export default function Page() {
  return <HomeClient />;
}
