import type { Metadata } from "next";
import IndegenizationClient from "./IndegenizationClient";

export const metadata: Metadata = {
  title: "Indigenization Solutions for Aerospace & Defence | Jetsys Defence",
  description:
    "Jetsys Defence indigenization solutions: locally designed and manufactured defence and aerospace equipment that reduces import dependence and builds self-reliance.",
  alternates: {
    canonical: "https://www.jetsys.co.in/solutions/indegenization",
  },
};

export default function Page() {
  return <IndegenizationClient />;
}
