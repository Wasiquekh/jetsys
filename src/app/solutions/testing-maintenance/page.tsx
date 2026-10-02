import type { Metadata } from "next";
import TestingMaintenanceClient from "./TestingMaintenanceClient";

export const metadata: Metadata = {
  title: "Testing & Maintenance Solutions for Aerospace & Defence | Jetsys Defence",
  description:
    "Testing and maintenance solutions from Jetsys Defence that keep aircraft, ground equipment and airfield systems operational and mission-ready.",
  alternates: {
    canonical: "https://www.jetsys.co.in/solutions/testing-maintenance",
  },
};

export default function Page() {
  return <TestingMaintenanceClient />;
}
