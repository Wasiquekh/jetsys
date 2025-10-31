"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Transition } from "framer-motion";

const reveal: Transition = { type: "tween", duration: 0.35, ease: "easeInOut" };

const ProductAnimate = () => {
  // 0: Aviation Equipment, 1: Runway Spares, 2: Aircraft Spares & System, 3: Airborne Raw Materials, 4: Other Offerings (no data)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const expandedRef = useRef<HTMLDivElement | null>(null);

  const toggle = (idx: number) => {
    if (idx === 4) return; // 5th card never opens
    setActiveIndex((cur) => (cur === idx ? null : idx));
  };

  // Auto-scroll to the expanded section when it appears/changes
  useEffect(() => {
    if (activeIndex !== null && activeIndex !== 4 && expandedRef.current) {
      expandedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeIndex]);

  return (
    <div>
      {/* ---------- EXPANDED AREA (exact clicked card; left→right reveal) ---------- */}
      <AnimatePresence mode="wait">
        {activeIndex !== null && activeIndex !== 4 && (
          <motion.section
            ref={expandedRef}
            key={`expanded-${activeIndex}`}
            initial={{
              clipPath: "inset(0 100% 0 0 round 16px)",
              opacity: 0.0001,
            }}
            animate={{ clipPath: "inset(0 0% 0 0 round 16px)", opacity: 1 }}
            exit={{ clipPath: "inset(0 100% 0 0 round 16px)", opacity: 0 }}
            transition={reveal}
            style={{ overflow: "hidden" }}
          >
            {/* ---- 1: Aviation Equipment ---- */}
            {activeIndex === 0 && (
              <section>
                <div className="container !pb-4">
                  <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex flex-col md:flex-row justify-between p-5">
                    <div className="   flex flex-col w-full md:w-[30%]">
                      <Image
                        src="/images/Aviation Equipment.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="mb-5 rounded-2xl"
                      />
                      <h2 className="font-bold text-2xl mb-5">
                        Aviation Equipment
                      </h2>
                      <p className="font-bold text-sm mb-5">
                        Precision Beyond Expectations
                      </p>
                      <p className="font-normal text-sm mb-5">
                        Our aviation equipment portfolio is engineered to
                        deliver high performance, meeting rigorous industry
                        standards. Explore how our products optimize operational
                        excellence in aviation.
                      </p>
                      <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base  transition ">
                        Explore Now
                      </button>
                    </div>
                    <div className="w-full md:w-[50%]">
                      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-4 md:mt-0">
                        <Link href="/products/aviation-equipment/ground-support-equipment">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Ground Support Equipment.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Ground Support Equipment
                            </p>
                          </div>
                        </Link>
                        <Link href="/products/aviation-equipment/ground-supply-equipment">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Ground Supply Equipment.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Ground Supply Equipment{" "}
                            </p>
                          </div>
                        </Link>
                        <Link href="/products/aviation-equipment/ground-test-equipment">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Ground Test Equipment.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Ground Test Equipment{" "}
                            </p>
                          </div>
                        </Link>
                        <Link href="/products/aviation-equipment/ground-handling-equipment">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Ground Handling Equipment.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Ground Handling Equipment{" "}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ---- 2: Runway Spares ---- */}
            {activeIndex === 1 && (
              <section>
                <div className="container !pb-4">
                  <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex flex-col md:flex-row justify-between p-5">
                    <div className="  flex flex-col w-full md:w-[30%]">
                      <Image
                        src="/images/Runway Spares.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="mb-5"
                      />
                      <h2 className="font-bold text-2xl mb-5">Runway Spares</h2>
                      <p className="font-bold text-sm mb-5">
                        Ensuring Operational Continuity
                      </p>
                      <p className="font-normal text-sm mb-5">
                        Our comprehensive range of runway spares ensures
                        seamless operations, enabling uninterrupted performance
                        for your fleet.
                      </p>
                      <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base  transition ">
                        Explore Now
                      </button>
                    </div>
                    <div className="w-full md:w-[50%]">
                      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-4 md:mt-0">
                        <Link href="/products/runway-spares/mafi-spares">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Mafi Spares.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Mafi Spares
                            </p>
                          </div>
                        </Link>
                        <Link href="/products/runway-spares/runway-lights">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Runway Lights.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Runway Lights
                            </p>
                          </div>
                        </Link>
                        <Link href="/products/runway-spares/signbords">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Signboards.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Signboards
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ---- 3: Aircraft Spares & System ---- */}
            {activeIndex === 2 && (
              <section>
                <div className="container !pb-4">
                  <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex flex-col md:flex-row justify-between p-5">
                    <div className="  flex flex-col w-full md:w-[30%]">
                      <Image
                        src="/images/Aircraft Spares & System.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="mb-5 rounded-2xl"
                      />
                      <h2 className="font-bold text-2xl mb-5">
                        Aircraft Spares & System
                      </h2>
                      <p className="font-bold text-sm mb-5">
                        Keeping Fleets Mission-Ready
                      </p>
                      <p className="font-normal text-sm mb-5">
                        Our aircraft spares and systems are built for
                        reliability and precision, ensuring mission readiness
                        and long-term performance for every airborne platform.
                      </p>
                      <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base  transition ">
                        Explore Now
                      </button>
                    </div>
                    <div className="w-full md:w-[50%]">
                      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-4 md:mt-0">
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Aircraft Spares.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Aircraft Spares
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Aircraft Systems.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Aircraft Systems
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Navy Spares.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Navy Spares
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Aircraft Hoses.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Aircraft Hoses
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/engine parts.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Engine Parts
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Fuel System Parts.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Fuel System Parts
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ---- 4: Airborne Raw Materials ---- */}
            {activeIndex === 3 && (
              <section>
                <div className="container !pb-4">
                  <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex flex-col md:flex-row justify-between p-5">
                    <div className="   flex flex-col w-full md:w-[30%]">
                      <Image
                        src="/images/Airborne Raw Materials.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="mb-5"
                      />
                      <h2 className="font-bold text-2xl mb-5">
                        Airborne Raw Materials
                      </h2>
                      <p className="font-bold text-sm mb-5">
                        Strength That Takes Flight
                      </p>
                      <p className="font-normal text-sm mb-5">
                        We provide high-grade raw materials designed for
                        aerospace durability, innovation, and efficiency — the
                        foundation of next-gen aviation systems.
                      </p>
                      <button className="bg-primary px-8 py-3 rounded mb-0 hover:bg-[#5f5b00] text-[#E9DCB4] font-semibold text-base  transition ">
                        Explore Now
                      </button>
                    </div>
                    <div className="w-full md:w-[50%]">
                      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-4 md:mt-0">
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Steel (Carbon).svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Steel (low Carbon)
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Steel (Carbon).svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Steel (Carbon)
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Fasteners.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Fasteners
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Airborne Glues.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Airborne Glues
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      {/* ---------- CARDS GRID (clicked card removed from grid while expanded) ---------- */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* Card 1 */}
            {activeIndex !== 0 && (
              <div
                onClick={() => toggle(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && toggle(0)
                }
                className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col"
              >
                <Image
                  src="/images/Aviation Equipment.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="mb-5 rounded-2xl"
                />
                <h2 className="font-bold text-2xl mb-5">Aviation Equipment</h2>
                <p className="font-bold text-sm mb-5">
                  Precision Beyond Expectations
                </p>
                <p className="font-normal text-sm mb-5">
                  Our aviation equipment portfolio is engineered to deliver high
                  performance, meeting rigorous industry standards. Explore how
                  our products optimize operational excellence in aviation.
                </p>
                <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                  <span className="text-[#E9DCB4] font-semibold text-base">
                    Explore Now
                  </span>
                </button>
              </div>
            )}

            {/* Card 2 */}
            {activeIndex !== 1 && (
              <div
                onClick={() => toggle(1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && toggle(1)
                }
                className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col"
              >
                <Image
                  src="/images/Runway Spares.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="mb-5"
                />
                <h2 className="font-bold text-2xl mb-5">Runway Spares</h2>
                <p className="font-bold text-sm mb-5">
                  Ensuring Operational Continuity
                </p>
                <p className="font-normal text-sm mb-5">
                  Our comprehensive range of runway spares ensures seamless
                  operations, enabling uninterrupted performance for your fleet.
                </p>
                <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                  <span className="text-[#E9DCB4] font-semibold text-base">
                    Explore Now
                  </span>
                </button>
              </div>
            )}

            {/* Card 3 */}
            {activeIndex !== 2 && (
              <div
                onClick={() => toggle(2)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && toggle(2)
                }
                className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col"
              >
                <Image
                  src="/images/Aircraft Spares & System.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="mb-5"
                />
                <h2 className="font-bold text-2xl mb-5">
                  Aircraft Spares & System{" "}
                </h2>
                <p className="font-bold text-sm mb-5">
                  Keeping Fleets Mission-Ready
                </p>
                <p className="font-normal text-sm mb-5">
                  Our aircraft spares and systems are built for reliability and
                  precision, ensuring mission readiness and long-term
                  performance for every airborne platform.
                </p>
                <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                  <span className="text-[#E9DCB4] font-semibold text-base">
                    Explore Now
                  </span>
                </button>
              </div>
            )}

            {/* Card 4 */}
            {activeIndex !== 3 && (
              <div
                onClick={() => toggle(3)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && toggle(3)
                }
                className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col"
              >
                <Image
                  src="/images/Airborne Raw Materials.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="mb-5"
                />
                <h2 className="font-bold text-2xl mb-5">
                  Airborne Raw Materials
                </h2>
                <p className="font-bold text-sm mb-5">
                  Strength That Takes Flight
                </p>
                <p className="font-normal text-sm mb-5">
                  We provide high-grade raw materials designed for aerospace
                  durability, innovation, and efficiency — the foundation of
                  next-gen aviation systems.
                </p>
                <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                  <span className="text-[#E9DCB4] font-semibold text-base">
                    Explore Now
                  </span>
                </button>
              </div>
            )}

            {/* Card 5 (always closed; stays in grid) */}
            <div
              role="button"
              tabIndex={-1}
              aria-disabled="true"
              className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col"
            >
              <Image
                src="/images/Other Offerings.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">Other Offerings</h2>
              <p className="font-bold text-sm mb-5">
                Expanding Horizons with Unmatched Versatility.
              </p>
              <p className="font-normal text-sm mb-5">
                Beyond aviation, our offerings include customizable solutions
                for defense and aerospace, ensuring every need is met with
                precision.
              </p>
              <button className="bg-primary px-8 py-3 rounded mb-5 mt-auto hover:bg-[#5f5b00] transition">
                <span className="text-[#E9DCB4] font-semibold text-base">
                  Explore Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductAnimate;
