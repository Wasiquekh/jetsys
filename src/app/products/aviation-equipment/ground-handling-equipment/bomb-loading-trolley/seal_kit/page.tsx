import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Seal Kit for Hydraulic Systems | Jetsys Defence Aviation Parts",
  description:
    "Buy high-quality Seal Kits from Jetsys Defence including hydraulic cylinder seals, O-ring kits, and oil seal kits. Durable, leak-proof solutions for aviation systems.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/bomb-loading-trolley/seal_kit",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Seal Kit for Hydraulic & Aviation Systems | Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Seal Kit from Jetsys Defence is designed for high-performance aviation and industrial applications, ensuring leak-proof operation, durability, and efficiency. Our premium seal pack, oil seal kit, and hydraulic seal kit solutions are engineered to maintain system integrity even under extreme pressure conditions.
              </p>
              <p className="font-medium text-base">
                Whether you need hydraulic cylinder seal kits, oring kit, or hydraulic jack repair kits, Jetsys Defence provides reliable and precision-built sealing solutions.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/gemini2.png"
                  width={500}
                  height={1000}
                  alt="Seal Kit for Hydraulic & Aviation Systems"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Seal Kit? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Seal Kit?
                  </h2>
                  <p className="text-black mb-4">
                    A seal kit (also known as seal pack or seal kit hydraulic) is a collection of sealing components used to prevent leakage in hydraulic and pneumatic systems.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It typically includes:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>O ring seal kit / oring kit</li>
                    <li>Hydraulic piston seal kit</li>
                    <li>Cylinder seal kit</li>
                    <li>Valve oil seal & gear seal</li>
                    <li>Motor seal and oil seal viton</li>
                  </ul>
                  <p className="text-black mt-4">
                    These components are essential for maintaining pressure and ensuring smooth operation in any hydraulic system.
                  </p>
                </div>
              </section>

              {/* Importance of Seal Kits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Importance of Seal Kits in Hydraulic Systems
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Leak Prevention</h3>
                          High-quality oil seal kit and hydraulic cylinder seals prevent fluid leakage and maintain system pressure.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Increased Equipment Life</h3>
                          Using durable hydraulic cylinder seal kits and mechanical seal parts reduces wear and extends machine life.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">High Performance Under Pressure</h3>
                          Our hyd cylinder seal kit and hydraulic piston seal kit are designed to perform under extreme pressure conditions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Seal Kits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Seal Kits Offered by Jetsys Defence
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Hydraulic Cylinder Seal Kits</h3>
                          Includes: Hydraulic cylinder seals, Hyd cylinder seals, Cylinder seal kit<br />
                          Ideal for heavy-duty hydraulic systems and aviation equipment.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">O-Ring & Oil Seal Kits</h3>
                          O ring seal kit / oring kit / oring kit box<br />
                          Oil seal kit / oil seal viton / oil seal kit price options<br />
                          Ensures tight sealing in joints and moving components.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Pneumatic & Air Cylinder Seal Kits</h3>
                          Pneumatic cylinder seal kit<br />
                          Air cylinder seal kit / air cylinder seal<br />
                          Pneumatic cylinder seal<br />
                          Used in air-based systems and hybrid hydraulic applications.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Hydraulic Jack & Repair Kits</h3>
                          Hydraulic jack oil seal kit<br />
                          3 ton hydraulic jack seal kit<br />
                          Hydraulic jack repair kits<br />
                          Essential for maintenance and repair of lifting equipment.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Machinery & Automotive Seal Kits</h3>
                          JCB seal kit<br />
                          Honda Activa oil seal kit price components<br />
                          Motor seal & gear seal<br />
                          Used across industrial machinery and automotive applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Applications of Seal Kits
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence seal kits are widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft hydraulic systems</li>
                    <li>Ground support equipment</li>
                    <li>Hydraulic cylinders and actuators</li>
                    <li>Pneumatic systems</li>
                    <li>Industrial machinery and repair systems</li>
                  </ul>
                  <p className="text-black mt-4">
                    Seal kits play a vital role in hydraulic cylinder reseal processes and system maintenance.
                  </p>
                </div>
              </section>

              {/* Maintenance & Resealing Solutions */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Maintenance & Resealing Solutions
                  </h2>
                  <p className="text-black mb-4">
                    Regular use of:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic seal kit</li>
                    <li>Cylinder seal kit</li>
                    <li>Oil seal kit</li>
                  </ul>
                  <p className="text-black mt-4">
                    ensures effective hydraulic cylinder reseal, reduces downtime, and improves operational efficiency.
                  </p>
                </div>
              </section>

              {/* Price & Cost Factors */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Seal Kit Price & Cost Factors
                  </h2>
                  <p className="text-black mb-4">
                    The seal kit price depends on:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Material quality (e.g., oil seal viton)</li>
                    <li>Type of kit (oring kit, hydraulic seal kit)</li>
                    <li>Application (industrial, aviation, automotive)</li>
                    <li>Kit size and components</li>
                  </ul>
                  <p className="text-black mt-4">
                    Jetsys Defence offers competitive oil seal kit price and premium-quality sealing solutions.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence Seal Kits?
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>High-quality seal pack and seal kit hydraulic solutions</li>
                    <li>Precision manufacturing for aviation-grade performance</li>
                    <li>Long-lasting durability</li>
                    <li>Wide range of seal kits for multiple applications</li>
                    <li>Cost-effective and reliable</li>
                  </ul>
                  <p className="text-black mt-4">
                    Jetsys Defence ensures every seal kit meets the highest standards of performance and reliability.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Conclusion
                  </h2>
                  <p className="text-black mb-4">
                    The Seal Kit from Jetsys Defence is an essential solution for maintaining hydraulic and pneumatic systems. With advanced hydraulic cylinder seal kits, o ring seal kits, and oil seal kits, we deliver unmatched durability, efficiency, and performance for aviation and industrial applications.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;