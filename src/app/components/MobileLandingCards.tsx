"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Card = {
  img: string;
  title: string;
  desc: string;
  cta?: string;
  link: string;
};

const CARDS: Card[] = [
  {
    img: "/images/landing-1.png",
    title: "Expanding Horizons in Aerospace",
    desc: "Driving innovation to redefine the possibilities in defence and aerospace industries.",
    cta: "Know More",
    link: "/products/aviation-equipment",
  },
  {
    img: "/images/landing-2.png",
    title: "Indigenous Innovations",
    desc: "Proudly delivering homegrown solutions for a self-reliant defence ecosystem.",
    cta: "Know More",
    link: "/solutions/indegenization",
  },
  {
    img: "/images/landing-3.png",
    title: "Precision Maintenance Systems",
    desc: "Ensuring operational superiority with advanced maintenance technologies.",
    cta: "Know More",
    link: "/solutions/testing-maintenance",
  },
  {
    img: "/images/landing-4.png",
    title: "Trusted Spares, Seamless Systems",
    desc: "Aircraft spares and systems designed for flawless performance.",
    cta: "Know More",
    link: "/products/aircraft-spares-system",
  },
  {
    img: "/images/landing-5.png",
    title: "Airborne Innovation at the Core",
    desc: "High-grade airborne materials built for resilience and reliability.",
    cta: "Know More",
    link: "/products/airborne-raw-materials",
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
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiper.slideToLoop(0, 0);
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
                    <Link
                      href={card.link}
                      className="mt-2 inline-block rounded bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary/90 active:scale-[0.98]"
                    >
                      {card.cta}
                    </Link>
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
