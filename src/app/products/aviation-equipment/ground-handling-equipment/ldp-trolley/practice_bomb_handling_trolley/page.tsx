import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Practice Bomb Handling Trolley | Jetsys Defence Aviation Equipment",
  description:
    "Explore practice bomb handling trolley by Jetsys Defence including training bomb transport and aircraft loading systems for safe and efficient aviation training operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-handling-equipment/ldp-trolley/practice_bomb_handling_trolley",
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
                Practice Bomb Handling Trolley – Aviation Equipment by Jetsys Defence
              </h1>
              <p className="font-medium text-base">
                The Practice Bomb Handling Trolley by Jetsys Defence is a precision-engineered aviation ground support solution designed for safe, efficient, and controlled handling of practice bombs during training operations. Built with durable materials and advanced design, this trolley ensures smooth transportation, positioning, and loading of training munitions.
              </p>
              <p className="font-medium text-base">
                Our practice bomb handling trolley is ideal for defence aviation training environments where safety, accuracy, and operational efficiency are critical.
              </p>
              <br />
              <br />
              <div>
                <Image
                  src="/images/missile.png"
                  width={500}
                  height={1000}
                  alt="Practice Bomb Handling Trolley Aviation Equipment"
                  className="m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* What is a Practice Bomb Handling Trolley? */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    What is a Practice Bomb Handling Trolley?
                  </h2>
                  <p className="text-black mb-4">
                    A practice bomb handling trolley is specialized aviation equipment used to transport, lift, and position practice bombs for training and simulation exercises. It helps ensure safe handling of non-combat munitions during aircraft loading and unloading.
                  </p>
                  <p className="text-black font-semibold mb-2">
                    It is commonly referred to as:
                  </p>
                  <ul className="list-disc pl-5 text-black space-y-2">
                    <li>Practice bomb trolley</li>
                    <li>Training bomb handling trolley</li>
                    <li>Aircraft practice bomb loader</li>
                    <li>Practice bomb transport trolley</li>
                  </ul>
                </div>
              </section>

              {/* Types of Practice Bomb Handling Trolleys */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Types of Practice Bomb Handling Trolleys
                  </h2>
                  <p className="text-black mb-4">
                    Jetsys Defence offers various configurations based on training requirements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">1. Aircraft Practice Bomb Handling Trolley</h3>
                          Designed for accurate positioning and safe loading of practice bombs onto aircraft.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">2. Hydraulic Practice Bomb Trolley</h3>
                          A hydraulic practice bomb handling trolley provides controlled lifting and precise alignment.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <h3 className="font-bold text-[#5C5649]">3. Training Bomb Transport Trolley</h3>
                          Used for smooth transportation of practice bombs across airbases and training facilities.
                        </li>
                        <li>
                          <h3 className="font-bold text-[#5C5649]">4. Aviation Ground Support Trolley</h3>
                          Multi-purpose aviation ground support equipment used for handling training payloads.
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
                    Applications of Practice Bomb Handling Trolley
                  </h2>
                  <p className="text-black mb-4">
                    The practice bomb handling trolley from Jetsys Defence is widely used in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Defence aviation training operations</li>
                    <li>Military airbases and training facilities</li>
                    <li>Aircraft practice bomb loading and unloading</li>
                    <li>Aviation ground handling systems</li>
                    <li>Simulation and safety drills</li>
                  </ul>
                  <p className="text-black mt-4">
                    Our training bomb handling trolley ensures safe and efficient operations during training exercises.
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Key Features of Jetsys Defence Practice Bomb Handling Trolley
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>High load capacity for training payloads</li>
                        <li>Precision lifting and positioning system</li>
                        <li>Durable and rugged construction</li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-4">
                        <li>Easy maneuverability and control</li>
                        <li>Designed for aviation safety standards</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-black mt-4">
                    Our practice bomb trolley is engineered for reliability and consistent performance in training environments.
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
                  <p className="text-black mb-4">
                    Jetsys Defence is a trusted provider of aviation and defence equipment, delivering reliable solutions for both operational and training needs.
                  </p>
                  <p className="text-black mb-4">
                    We offer:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Advanced practice bomb handling trolley systems</li>
                    <li>High-quality training bomb transport trolley solutions</li>
                    <li>Durable and field-tested equipment</li>
                    <li>Custom-built designs for defence aviation</li>
                  </ul>
                </div>
              </section>

              {/* Price & Availability */}
              <section>
                <br />
                <br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
                    Practice Bomb Handling Trolley Price & Availability
                  </h2>
                  <p className="text-black mb-4">
                    The price of a practice bomb handling trolley depends on load capacity, hydraulic features, and customization. Jetsys Defence offers a wide range of options including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Hydraulic practice bomb handling trolley</li>
                    <li>Training bomb transport trolley</li>
                    <li>Aircraft practice bomb loader systems</li>
                  </ul>
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
                    The Practice Bomb Handling Trolley by Jetsys Defence is an essential tool for defence aviation training operations. With features like precision handling systems, durable construction, and smooth maneuverability, our equipment ensures safe, efficient, and reliable handling of practice bombs.
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