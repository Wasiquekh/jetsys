import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Dummy Pod Trolley | Jetsys Defence Aviation Equipment",
  description:
    "Buy Dummy Pod Trolley from Jetsys Defence. Durable aviation ground support equipment for safe handling, transport, and maintenance of aircraft dummy pods.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/ldp-trolley/dummy_pod_trolley",
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
                Dummy Pod Trolley – Jetsys Defence Aviation Equipment
              </h1>
              <p className="font-medium text-base">
                The Dummy Pod Trolley from Jetsys Defence is a high-performance aviation ground support solution designed for safe handling, movement, and positioning of aircraft dummy pods. Built with precision engineering, this aircraft dummy pod trolley ensures reliability, durability, and operational efficiency in defence and aerospace environments.
              </p>
              <p className="font-medium text-base">
                Our dummy pod handling trolley is ideal for airbases, aircraft maintenance facilities, and defence operations requiring secure and smooth transport of dummy pods.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/dummy_trolley.png"
                  width={500}
                  height={1000}
                  alt="Dummy Pod Trolley Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Dummy Pod Trolley? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Dummy Pod Trolley?
                  </h2>
                  <p className="text-black mb-4">
                    A Dummy Pod Trolley is a specialized aircraft pod transport trolley used to move, store, and position dummy pods safely during testing, maintenance, and training operations.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It is commonly used in:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Aircraft maintenance and servicing</li>
                    <li>Defence training operations</li>
                    <li>Weapon system testing environments</li>
                    <li>Aviation ground support applications</li>
                  </ul>
                  <p className="text-black mt-4">
                    This military pod trolley helps in handling sensitive equipment without damage.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Dummy Pod Trolley
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Heavy-Duty Construction</h3>
                          Manufactured using robust materials, this defence ground support equipment ensures long-term durability in demanding aviation environments.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Smooth Mobility</h3>
                          Fitted with high-quality wheels, the pod carrier trolley allows easy and controlled movement across hangars and airfields.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Precision Handling</h3>
                          Designed for accurate positioning of dummy pods during installation or maintenance.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Safety & Stability</h3>
                          Strong base structure with locking mechanisms ensures safe transport of equipment.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Ergonomic Design</h3>
                          Operator-friendly design enhances efficiency and reduces manual effort in aircraft servicing trolley operations.
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
                    Applications of Dummy Pod Trolley
                  </h2>
                  <p className="text-black mb-4">
                    The Dummy Pod Trolley is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Aircraft maintenance and inspection</li>
                    <li>Defence aviation training operations</li>
                    <li>Dummy pod transport and storage</li>
                    <li>Weapon system simulation handling</li>
                    <li>Aerospace logistics and ground support</li>
                  </ul>
                  <p className="text-black mt-4">
                    This aviation ground support trolley plays a crucial role in safe and efficient aircraft operations.
                  </p>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Why Choose Jetsys Defence?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Trusted Aviation Equipment Brand</h3>
                          Jetsys Defence delivers reliable and high-quality aviation support equipment for defence sectors.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Precision Engineering</h3>
                          Our dummy pod trolley is designed to meet strict aerospace standards and operational requirements.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Durable & Reliable</h3>
                          Built for long-lasting performance under harsh working conditions.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Custom Design Options</h3>
                          We offer tailored aircraft ground equipment solutions based on client requirements.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Benefits of Using Dummy Pod Trolley
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Safe handling of aircraft dummy pods</li>
                    <li>Reduced risk of equipment damage</li>
                    <li>Improved operational efficiency</li>
                    <li>Easy maneuverability in hangars</li>
                    <li>Enhanced safety in defence environments</li>
                  </ul>
                </div>
              </section>

              {/* Technical Specifications */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Technical Specifications (Typical)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Structure</h3>
                          High-strength steel frame with protective coating
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Mobility</h3>
                          Heavy-duty wheels with braking system
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Load Capacity</h3>
                          Suitable for heavy aviation dummy pods
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">Application</h3>
                          Compatible with multiple aircraft dummy pod types
                        </li>
                      </ul>
                    </div>
                  </div>
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
                    The Dummy Pod Trolley by Jetsys Defence is an essential aviation support equipment solution for defence and aerospace industries. It ensures safe transport, precise handling, and efficient operations for aircraft dummy pods.
                  </p>
                  <p className="text-black">
                    Choose Jetsys Defence for durable, reliable, and high-performance aircraft logistics trolley solutions built for modern aviation needs.
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