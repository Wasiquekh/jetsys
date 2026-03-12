import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import Image from "next/image";
import { Metadata } from "next";

import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Braking and Steering Assemblies for Aircraft | Jetsys Defence",
  description:
    "Jetsys Defence develops advanced braking and steering assemblies for aircraft, ensuring precise ground control, reliable braking performance, and safe aircraft taxi operations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/hydraulic-test-rig-htr/braking_and_steering_assemblies",
  },
};

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container">
            <div>
              <h1 className=" text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
                Braking and Steering Assemblies for Aircraft Systems – Jetsys Defence
              </h1>
              <p className=" font-medium text-base">
                Braking and steering assemblies are essential components in aircraft landing gear systems, ensuring safe ground maneuvering, controlled taxi operations, and reliable braking during landing. Jetsys Defence designs high-precision braking and steering assemblies engineered to provide stable aircraft ground control and dependable operational performance.
                <br /><br />
                These systems are integrated with aircraft landing gear assemblies to allow pilots to manage directional control and deceleration during taxi, landing, and runway operations. With advanced engineering and aviation-grade components, Jetsys Defence delivers reliable braking and steering assemblies designed for modern aviation requirements.
              </p>
              <br></br><br></br>
              <div>
                <Image
                  src="/images/braking_and_steering_assemblies.png"
                  width={500}
                  height={1000}
                  alt="Braking and Steering Assemblies for Aircraft by Jetsys Defence"
                  className=" m-auto mb-6"
                />
                <OrderNowContactButton />
              </div>

              {/* Importance of Braking and Steering Assemblies */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Importance of Braking and Steering Assemblies in Aircraft</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p className="text-black">
                        Reliable braking and steering assemblies are critical for maintaining aircraft safety during ground operations. These systems allow pilots to control aircraft direction and braking force after landing and during taxi movements.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Functions */}
              <section>
                <br /><br />
                <div>
                  <h3 className="font-bold text-2xl text-[#5C5649] mb-3">Key Functions of Braking and Steering Assemblies</h3>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong className="text-[#5C5649]">Provide controlled aircraft braking</strong> during landing</li>
                        <li><strong className="text-[#5C5649]">Enable accurate aircraft steering control</strong> systems</li>
                        <li><strong className="text-[#5C5649]">Support safe aircraft ground maneuvering</strong> systems</li>
                        <li><strong className="text-[#5C5649]">Improve stability during taxi and runway operations</strong></li>
                      </ul>
                      <p>Efficient braking and steering assemblies ensure that aircraft can operate safely on runways, taxiways, and airport ground surfaces.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Components */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Components of Aircraft Braking and Steering Assemblies</h2>
                  <p className="mb-4">
                    A complete braking and steering assembly consists of several mechanical and hydraulic components that ensure precise aircraft ground control.
                  </p>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong className="text-[#5C5649]">Aircraft Brake Systems –</strong> The aircraft braking system provides controlled deceleration during landing and taxi operations, ensuring safe aircraft stopping capability.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Nose Wheel Steering Mechanism –</strong> The aircraft nose wheel steering system enables pilots to control aircraft direction during taxiing and maneuvering on the ground.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Hydraulic Actuation Systems –</strong> Hydraulic systems provide the force required to operate aircraft braking assemblies and steering components efficiently.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Advantages */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Advantages of Advanced Braking and Steering Assemblies</h2>
                  <p className="mb-4">
                    Modern braking and steering assemblies improve aircraft safety, reliability, and operational efficiency during ground operations.
                  </p>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong className="text-[#5C5649]">Improved Aircraft Ground Control –</strong> Reliable aircraft steering assemblies allow precise maneuvering on airport taxiways.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Enhanced Landing Safety –</strong> High-performance aircraft braking assemblies ensure safe deceleration after landing.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Reliable Operational Performance –</strong> Durable aircraft ground control systems maintain consistent performance under demanding aviation conditions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Applications of Braking and Steering Assemblies in Aviation</h2>
                  <p className="mb-4">
                    Braking and steering assemblies are widely used across different aircraft platforms to ensure safe ground operations.
                  </p>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong className="text-[#5C5649]">Commercial Aircraft –</strong> Passenger aircraft rely on advanced aircraft braking and steering systems for safe landing and taxiing operations.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Military Aircraft –</strong> Military aviation platforms require durable aircraft steering control systems capable of operating in challenging environments.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Specialized Aviation Equipment –</strong> Specialized aircraft utilize precision aircraft landing gear braking systems designed for unique operational requirements.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Engineering Excellence */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Engineering Excellence by Jetsys Defence</h2>
                  <p className="mb-4">
                    Jetsys Defence develops advanced braking and steering assemblies using precision engineering techniques to ensure reliable aviation performance.
                  </p>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong className="text-[#5C5649]">Precision Manufacturing –</strong> Each braking and steering assembly is produced with strict quality standards to ensure durability and operational reliability.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Aviation-Grade Components –</strong> Jetsys Defence uses high-quality materials to manufacture durable aircraft brake assemblies and steering systems.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Reliable Aircraft Ground Control –</strong> Our aircraft braking and steering systems are designed to provide consistent performance during demanding operational conditions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Jetsys Defence */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Why Choose Jetsys Defence Braking and Steering Assemblies</h2>
                  <p className="mb-4">Jetsys Defence provides advanced aviation equipment designed to support safe and reliable aircraft ground operations.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong className="text-[#5C5649]">Aviation Engineering Expertise –</strong> Our team specializes in designing aircraft braking and steering assemblies for modern aviation platforms.
                        </li>
                        <li>
                          <strong className="text-[#5C5649]">Reliable Aircraft Components –</strong> Each braking and steering assembly is engineered to maintain dependable aircraft performance.
                        </li>
                      </ul>
                    </div>
                    <div className="text-black space-y-4">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong className="text-[#5C5649]">Safety-Focused Design –</strong> Jetsys Defence ensures that aircraft braking systems and steering mechanisms meet strict aviation safety standards.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final Solution Section */}
              <section>
                <br /><br />
                <div>
                  <h2 className="font-bold text-3xl text-[#5C5649] mb-5">Braking and Steering Assemblies by Jetsys Defence</h2>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="text-black space-y-4">
                      <p>
                        A reliable braking and steering assembly is essential for maintaining aircraft safety during ground operations. Jetsys Defence manufactures advanced braking and steering assemblies designed to support modern aircraft braking systems, nose wheel steering mechanisms, and aircraft ground control systems.
                        <br /><br />
                        Through advanced engineering and precision manufacturing, Jetsys Defence continues to deliver high-performance aviation components designed for safe aircraft landing and ground maneuvering.
                      </p>
                    </div>
                  </div>
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

export default Page;