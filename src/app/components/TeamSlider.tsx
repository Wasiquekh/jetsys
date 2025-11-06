"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function TeamSlider({ slides }: { slides: string[] }) {
  return (
    <section className="bg-[#F0EFE9]">
      <div className="container !pb-0">
        <h1 className="text-center text-[#5c5649] text-[26px] md:text-[40px] font-extrabold uppercase mb-7 horizon">
          Our team
        </h1>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            spaceBetween={30}
          >
            {slides.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative left-0  md:left-[63px] w-full h-[150px] md:h-[380px]  flex items-center justify-center -mb-4">
                  <Image
                    src={img}
                    alt={`Team member ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
