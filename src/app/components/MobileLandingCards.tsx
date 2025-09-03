"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Card = {
  img: string;
  title: string;
  desc: string;
  cta?: string;
};

const CARDS: Card[] = [
  {
    img: "/images/landing-1.png",
    title: "Expanding Horizons in Aerospace",
    desc: "Driving innovation to redefine the possibilities in defence and aerospace industries.",
    cta: "Know More",
  },
  {
    img: "/images/landing-2.png",
    title: "Indigenous Innovations",
    desc: "Proudly delivering homegrown solutions for a self-reliant defence ecosystem.",
    cta: "Know More",
  },
  {
    img: "/images/landing-3.png",
    title: "Precision Maintenance Systems",
    desc: "Ensuring operational superiority with advanced maintenance technologies.",
    cta: "Know More",
  },
];

export default function MobileLandingCards() {
  return (
    <section className="md:hidden py-0">
      <div className="container px-0">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.05}
          spaceBetween={16}
          loop={true}
          grabCursor
          speed={3000} // faster smooth scroll (3s)
          autoplay={{
            delay: 0, // continuous flow
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiper.slideToLoop(0, 0); // always start at first slide
          }}
        >
          {CARDS.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative h-[380px] w-full overflow-hidden rounded bg-cover bg-center shadow-xl"
                style={{ backgroundImage: `url(${card.img})` }}
              >
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center text-white">
                  <h2 className="text-[28px] font-medium leading-tight">
                    {card.title}
                  </h2>
                  <p className="max-w-[22rem] text-base">{card.desc}</p>
                  {card.cta && (
                    <button
                      type="button"
                      className="mt-2 rounded bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary/90 active:scale-[0.98]"
                    >
                      {card.cta}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
