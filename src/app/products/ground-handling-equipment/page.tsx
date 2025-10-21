import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <section className=" relative">
        <div className="container  !py-30">
          <h1 className=" font-extrabold text-6xl text-center mb-5">
            Ground Handling Equipment
          </h1>
          <p className=" font-medium text-base text-center ">
            Jetsys handling systems simplify complex logistics with safety,
            speed, and precision. From arming to movement, our tools optimize
            on-ground efficiency. Engineered to move missions forward — reliably
            and securely.
          </p>
        </div>

        <Image
          src="/images/desgin-top-left.svg"
          width={200}
          height={200}
          alt="Picture of the author"
          className=" absolute top-0 left-0"
        />

        <Image
          src="/images/design-bottm-right.svg"
          width={500}
          height={500}
          alt="Picture of the author"
          className=" absolute bottom-0 right-0"
        />
      </section>
      <section>
        <div className="container">
          <div className=" border border-primary rounded-3xl flex items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Ground Power Unit.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Spreader & Cutter With Petrol Engine
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A portable rescue tool
                powered by a petrol engine, combining hydraulic spreading and
                cutting functions.
              </p>
              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Widely used in aircraft crash rescue operations to cut fuselage
                structures and spread openings for evacuation.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl flex items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Pneumatic Control Panel.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">
                Bomb Loading Troley
              </h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description </strong> <br />A ground support troley
                designed to safely transport and position aircraft bombs and
                heavy stores.
              </p>

              <p className="font-medium text-base mb-4">
                <strong>Usage </strong> <br />
                Used to load/unload armament onto aircraft with precision and
                minimal manual handling.
              </p>

              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
          <div className=" border border-primary rounded-3xl flex items-center gap-16 p-9 mb-16">
            <div>
              <Image
                src="/images/Nitrogen Trolley.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h2 className=" font-extrabold text-3xl mb-4">LDP Trolley</h2>
              <p className=" font-medium text-base mb-4">
                <strong> Description</strong> <br />A specialized troley for
                carrying, storing, and handling missile launchers, rocket pods,
                or pylons.
              </p>

              <p className="font-medium text-base mb-4">
                <strong> Usage</strong> <br />
                Ensures safe movement and efficient mounting of load-carrying
                equipment onto aircraft.
              </p>
              <button className=" bg-primary text-[#E9DCB4] py-3 px-8 text-base font-semibold rounded hover:bg-[#5f5b00] transition ">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
