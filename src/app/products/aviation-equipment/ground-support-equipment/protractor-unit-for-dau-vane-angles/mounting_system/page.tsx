import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StickyHeader from "@/app/components/StickyHeader";
import { Metadata } from "next";
import Image from "next/image";
import OrderNowContactButton from "@/app/components/ContactUsModalButton";

export const metadata: Metadata = {
  title: "Mounting System for Solar Panels | Solar Structures – Jetsys Defence",
  description: "Jetsys Defence provides durable mounting system solutions including solar panel structure, ground mount solar structure, roof mounting, and solar panel mounting brackets for reliable installations.",
  alternates: {
    canonical: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/protractor-unit-for-dau-vane-angles/mounting_system",
  },
  openGraph: {
    title: "Mounting System for Solar Panels | Solar Structures – Jetsys Defence",
    description: "Jetsys Defence provides durable mounting system solutions including solar panel structure, ground mount solar structure, roof mounting, and solar panel mounting brackets for reliable installations.",
    url: "https://www.jetsys.co.in/products/aviation-equipment/ground-support-equipment/protractor-unit-for-dau-vane-angles/mounting_system",
    siteName: "Jetsys Defence",
    images: [
      {
        url: "https://www.jetsys.co.in/images/solar-panel-mounting-system-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jetsys Defence Solar Panel Mounting System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mounting System for Solar Panels | Jetsys Defence",
    description: "Jetsys Defence provides durable mounting system solutions including solar panel structure, ground mount solar structure, and solar panel mounting brackets.",
    images: ["https://www.jetsys.co.in/images/solar-panel-mounting-system-twitter.jpg"],
    creator: "@jetsysdefence",
    site: "@jetsysdefence",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Header />
        <StickyHeader />
        <section>
          <div className="container max-w-7xl mx-auto px-1 py-2">
            <h1 className="text-primary text-[26px] md:text-[40px] font-extrabold uppercase mb-5 horizon">
              Mounting System for Solar Panels – Jetsys Defence
            </h1>
            
            <p className="font-medium text-base">
              A reliable Mounting System is essential for ensuring the stability, durability, and efficiency of 
              solar installations. Jetsys Defence manufactures high-quality structural solutions including solar 
              panel structure, solar mounting structure, and mounting structure for solar panels designed for 
              long-term performance in demanding environments.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Our engineered systems support multiple installation methods such as ground mount solar, roof 
              mounting, and solar panel wall mount, ensuring flexibility for residential, commercial, and 
              industrial solar projects.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              With strong structural materials and precision manufacturing, Jetsys Defence delivers dependable 
              solar mounting system solutions that provide secure solar panel installation while maximizing 
              energy efficiency.
            </p>
            
            <br />
            
            <Image
              src="/images/mounting system.png"
              width={500}
              height={1000}
              alt="Jetsys Defence Solar Panel Mounting System"
              className="m-auto mb-6"
            />
            
            <OrderNowContactButton />
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              High-Quality Solar Panel Mounting System Solutions
            </h2>
            
            <p className="font-medium text-base">
              At Jetsys Defence, our solar panel mounting system solutions are designed to support solar modules 
              with maximum stability and durability. Each mounting structure is engineered to withstand 
              environmental conditions while maintaining the correct panel alignment for optimal solar performance.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Features of Our Solar Mounting Systems
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Durable solar panel mounting brackets for secure panel installation</li>
              <li>Strong solar panel rail systems for reliable structural support</li>
              <li>Corrosion-resistant GI structure for solar panels</li>
              <li>Compatible solar panel fitting kit for easy installation</li>
              <li>Long-lasting solar mounting structure designed for outdoor environments</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These features ensure that every mounting solar system provides dependable performance for 
              long-term solar energy generation.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Solar Panel Structure for Ground Mount Installations
            </h2>
            
            <p className="font-medium text-base">
              A ground mount solar structure is widely used for large solar installations where roof mounting 
              is not feasible. Jetsys Defence manufactures durable solar panel ground mount solutions designed 
              for high structural strength and stability.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Ground Mount Solar Structure Applications
            </h3>
            
            <p className="font-medium text-base">
              Our ground mount solar systems are ideal for:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Solar farms and large energy projects</li>
              <li>Commercial solar installations</li>
              <li>Industrial solar power plants</li>
              <li>Utility-scale solar energy systems</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These ground mount systems allow flexible panel positioning, improving sunlight exposure and 
              increasing overall energy production.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Roof Mounting Solutions for Solar Panels
            </h2>
            
            <p className="font-medium text-base">
              Solar panel roof mounts are one of the most common installation methods for residential and 
              commercial solar systems. Jetsys Defence provides durable roof mounting solutions designed for 
              secure and long-lasting panel installation.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Advantages of Roof Mounting Systems
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Efficient use of building space</li>
              <li>Strong solar mounting system compatibility</li>
              <li>Secure solar panel mounting brackets for roof installations</li>
              <li>Reliable solar panel mounting for residential and commercial projects</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              Our solar mounting systems are designed to integrate easily with different roof structures while 
              maintaining panel stability.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Elevated and Pole Mounted Solar Panel Structures
            </h2>
            
            <p className="font-medium text-base">
              Jetsys Defence also offers advanced elevated solar panel structure designs and specialized mounting 
              solutions such as solar panels on a pole for applications requiring higher panel positioning.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Benefits of Elevated Solar Panel Structures
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Improved sunlight exposure</li>
              <li>Reduced shading from nearby structures</li>
              <li>Better airflow around panels</li>
              <li>Flexible installation for uneven terrain</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              These solar module structure designs are widely used in specialized solar energy installations.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Types of Mounting Structures for Solar Panels
            </h2>
            
            <p className="font-medium text-base">
              There are several types of mounting structures for solar panels designed for different installation 
              environments. Jetsys Defence manufactures versatile structural solutions to support multiple solar 
              mounting configurations.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              Common mounting types include:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Ground mount solar structure</li>
              <li>Solar panel roof mounts</li>
              <li>Solar panel wall mount</li>
              <li>Solar panels on a pole</li>
              <li>Elevated solar panel structure</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              Each mounting structure for solar panels is designed to provide reliable support and maximize 
              solar panel efficiency.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Solar Panel Structure Materials and Pricing Factors
            </h2>
            
            <p className="font-medium text-base">
              The solar panel structure price can vary depending on several factors including material quality, 
              structural design, and installation requirements. Jetsys Defence uses high-quality GI structure 
              for solar panels to ensure durability and corrosion resistance.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Factors Affecting Solar Panel Structure Price
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-800 mt-2">
              <li>Type of solar mounting structure</li>
              <li>Size and number of solar panels</li>
              <li>Installation method such as ground mount solar or roof mounting</li>
              <li>Structural materials used in the solar module structure</li>
            </ul>
            
            <br />
            
            <p className="font-medium text-base">
              Choosing the right solar panel mounting system ensures long-term reliability and optimal energy 
              generation.
            </p>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Solar Mounting System Specifications
            </h2>
            
            <div className="overflow-x-auto bg-white rounded-lg">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Feature</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-4 py-2 border-b">Product Type</td><td className="px-4 py-2 border-b">Solar Panel Mounting System</td></tr>
                  <tr><td className="px-4 py-2 border-b">Brand</td><td className="px-4 py-2 border-b">Jetsys Defence</td></tr>
                  <tr><td className="px-4 py-2 border-b">Mounting Types</td><td className="px-4 py-2 border-b">Ground Mount, Roof Mount, Wall Mount, Pole Mount</td></tr>
                  <tr><td className="px-4 py-2 border-b">Material</td><td className="px-4 py-2 border-b">GI Structure (Galvanized Iron)</td></tr>
                  <tr><td className="px-4 py-2 border-b">Finish</td><td className="px-4 py-2 border-b">Corrosion-Resistant Coating</td></tr>
                  <tr><td className="px-4 py-2 border-b">Application</td><td className="px-4 py-2 border-b">Residential, Commercial, Industrial Solar Projects</td></tr>
                  <tr><td className="px-4 py-2 border-b">Components</td><td className="px-4 py-2 border-b">Solar Panel Rails, Brackets, Fitting Kit</td></tr>
                  <tr><td className="px-4 py-2 border-b">Build Quality</td><td className="px-4 py-2 border-b">Heavy-Duty Outdoor Grade</td></tr>
                </tbody>
              </table>
            </div>
            
            <br />
            <br />
            
            <h2 className="font-bold text-3xl text-[#5C5649] mb-5">
              Why Choose Jetsys Defence Mounting Systems
            </h2>
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Precision Engineering
            </h3>
            <p className="font-medium text-base">
              Every mounting system is manufactured using advanced engineering standards.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Strong Structural Materials
            </h3>
            <p className="font-medium text-base">
              Our solar panel structure solutions use durable materials designed for harsh outdoor environments.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Versatile Installation Options
            </h3>
            <p className="font-medium text-base">
              Our solar mounting system solutions support multiple configurations including ground mount solar, 
              roof mounting, and solar panel wall mount.
            </p>
            
            <br />
            
            <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
              Reliable Performance
            </h3>
            <p className="font-medium text-base">
              Jetsys Defence ensures each solar panel mounting system delivers safe and stable support for solar 
              energy installations.
            </p>
            
            <br />
            <br />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Indigenous Design & Manufacturing Excellence
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence prides itself on developing and manufacturing solar mounting equipment that 
                  meets the highest standards of innovation and quality. Our in-house design and production 
                  capabilities ensure tailored solutions for every customer.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  Trusted by Solar EPC Contractors
                </h3>
                <p className="font-medium text-base">
                  We have built a strong reputation for providing reliable and high-performance solar mounting 
                  structures, trusted by solar EPC contractors and renewable energy developers around the world.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  On-site Service and Support Availability
                </h3>
                <p className="font-medium text-base">
                  Jetsys Defence offers comprehensive on-site service and support, ensuring that your mounting 
                  systems are installed correctly and perform optimally. Our team of experts is always available 
                  to assist with installation, maintenance, and troubleshooting.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-2xl text-[#5C5649] mb-5">
                  ISO-certified Production Standards
                </h3>
                <p className="font-medium text-base">
                  Our manufacturing process adheres to ISO-certified standards, guaranteeing that each product is 
                  produced with the utmost precision and reliability, and meets all relevant international quality 
                  benchmarks.
                </p>
              </div>
            </div>
            
            <br />
            
            <p className="font-medium text-base">
              A durable mounting system plays a crucial role in ensuring the stability and efficiency of solar 
              installations. Jetsys Defence provides advanced solar mounting structure, solar panel rail, and 
              solar panel mounting system solutions designed for reliable long-term performance.
            </p>
            
            <br />
            
            <p className="font-medium text-base">
              From ground mount solar structure installations to roof mounting and elevated solar panel structure 
              designs, our systems are engineered to provide strong support for modern solar energy projects.
            </p>
            
            <br />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;