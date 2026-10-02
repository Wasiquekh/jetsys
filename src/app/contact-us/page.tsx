import type { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Jetsys Defence | Enquiries & Quotes",
  description:
    "Contact Jetsys Defence for product enquiries, quotes and support on aviation ground equipment, runway spares, aircraft spares and indigenization projects.",
  alternates: {
    canonical: "https://www.jetsys.co.in/contact-us",
  },
};

export default function Page() {
  return <ContactUsClient />;
}
