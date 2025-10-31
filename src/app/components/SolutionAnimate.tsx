"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Transition } from "framer-motion";

const reveal: Transition = { type: "tween", duration: 0.35, ease: "easeInOut" };

const SolutionAnimate = () => {
  // 0: Indegenization, 1: Testing & Maintenance, 2: Aircraft ROH (no data; never opens)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const expandedRef = useRef<HTMLDivElement | null>(null);

  const toggle = (idx: number) => {
    if (idx === 2) return; // 3rd card never opens
    setActiveIndex((cur) => (cur === idx ? null : idx));
  };

  // Auto-scroll to expanded section
  useEffect(() => {
    if (activeIndex !== null && activeIndex !== 2 && expandedRef.current) {
      expandedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeIndex]);

  return (
    <div>
      {/* ========= EXPANDED AREA (shows exact clicked card) ========= */}
      <AnimatePresence mode="wait">
        {activeIndex !== null && activeIndex !== 2 && (
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
            {/* ---- Card 1 Expanded: Indegenization ---- */}
            {activeIndex === 0 && (
              <section>
                <div className="container !pb-4">
                  <div className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex flex-col md:flex-row justify-between p-5">
                    <div className="  flex flex-col w-full md:w-[30%]">
                      <Image
                        src="/images/Indegenization.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="mb-5 rounded-2xl"
                      />
                      <h2 className="font-bold text-2xl mb-5">
                        Indegenization
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
                        <Link href="/solutions/indegenization/indegenization-equipments">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Equipments.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Equipments
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Airbourne Spares.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Airbourne Spares
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer  border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Non-airbourne Spares.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Non-airbourne Spares
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ---- Card 2 Expanded: Testing & Maintenance ---- */}
            {activeIndex === 1 && (
              <section>
                <div className="container !pb-4">
                  <div className=" shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl  flex flex-col md:flex-row justify-between p-5">
                    <div className="   flex flex-col w-full md:w-[30%]">
                      <Image
                        src="/images/Testing & Maintenance.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="mb-5"
                      />
                      <h2 className="font-bold text-2xl mb-5">
                        Testing & Maintenance
                      </h2>
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
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Aircraft Testers.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              {" "}
                              Aircraft Testers
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Test Stands & Test Rigs.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Test Stands & Test Rigs
                            </p>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className=" bg-[#F0EFE9] hover:bg-[#D1CFC6] cursor-pointer border border-primary rounded-[8px] overflow-hidden p-4 h-full">
                            <Image
                              src="/images/Aircraft Fixtures.svg"
                              width={44}
                              height={45}
                              alt="Picture of the author"
                              className=" bg-[#E9DCB4] p-2 rounded mb-4 w-[50px] h-[50px]"
                            />
                            <p className=" font-medium text-xl mb-4">
                              Aircraft Fixtures
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

      {/* ========= CARDS GRID (clicked card removed from grid while expanded) ========= */}
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
                  src="/images/Indegenization.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="mb-5 rounded-2xl"
                />
                <h2 className="font-bold text-2xl mb-5">Indegenization</h2>
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
                  src="/images/Testing & Maintenance.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="mb-5"
                />
                <h2 className="font-bold text-2xl mb-5">
                  Testing & Maintenance{" "}
                </h2>
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

            {/* Card 3 (no data; always closed/disabled) */}
            <div
              role="button"
              tabIndex={-1}
              aria-disabled="true"
              className="shadow-[0px_4px_11.1px_0px_#00000040] rounded-2xl p-5 h-full flex flex-col"
            >
              <Image
                src="/images/Aircraft ROH.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mb-5"
              />
              <h2 className="font-bold text-2xl mb-5">Aircraft ROH</h2>
              <p className="font-bold text-sm mb-5">
                Keeping Fleets Mission-Ready
              </p>
              <p className="font-normal text-sm mb-5">
                Our aircraft spares and systems are built for reliability and
                precision, ensuring mission readiness and long-term performance
                for every airborne platform.
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

export default SolutionAnimate;
