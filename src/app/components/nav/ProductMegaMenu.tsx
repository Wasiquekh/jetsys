"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect, useRef } from "react";

const CATEGORIES = [
  {
    name: "Aviation Equipment",
    items: [
      {
        title: "Ground Support Equipment",
        image: "/images/Ground Support Equipment.svg",
      },
      {
        title: "Ground Supply Equipment",
        image: "/images/Ground Supply Equipment.svg",
      },
      {
        title: "Ground Test Equipment",
        image: "/images/Ground Test Equipment.svg",
      },
      {
        title: "Ground Handling Equipment",
        image: "/images/Ground Handling Equipment.svg",
      },
    ],
  },
  {
    name: "Runway Spares",
    items: [
      { title: "Mafi Spares", image: "/images/Mafi Spares.svg" },
      { title: "Runway Lights", image: "/images/Runway Lights.svg" },
      { title: "Signboards", image: "/images/Signboards.svg" },
    ],
  },
  {
    name: "Aircraft Spares & System",
    items: [
      { title: "Aircraft Spares", image: "/images/Aircraft Spares.svg" },
      { title: "Aircraft Systems", image: "/images/Aircraft Systems.svg" },
      { title: "Navy Spares", image: "/images/Navy Spares.svg" },
      { title: "Aircraft Hoses", image: "/images/Aircraft Hoses.svg" },
      { title: "Engine Parts", image: "/images/Engine Parts.svg" },
      { title: "Fuel System Parts", image: "/images/Fuel System Parts.svg" },
    ],
  },
  {
    name: "Airborne Raw Materials",
    items: [
      { title: "Steel (low Carbon)", image: "/images/Steel (Carbon).svg" },
      { title: "Steel (Carbon)", image: "/images/Steel (Carbon).svg" },
      { title: "Fasteners", image: "/images/Fasteners.svg" },
      { title: "Airborne Glues", image: "/images/Airborne Glues.svg" },
    ],
  },
];

export default function ProductMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);

  const items = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.name === activeCategory);
    return cat ? cat.items : [];
  }, [activeCategory]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <div
      className="relative mr-5 inline-block"
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <Link
        ref={triggerRef}
        href="/products"
        className={`uppercase transition-colors ${
          open ? "text-white" : "hover:text-secondary"
        }`}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
      >
        PRODUCTS
      </Link>

      {/* hover bridge */}
      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full h-2 w-[600px]"
          onMouseEnter={() => setOpen(true)}
        />
      )}

      {/* PANEL */}
      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[600px] rounded-xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden z-50"
          onMouseEnter={() => setOpen(true)}
        >
          {/* 👇 Fixed equal height for all categories (fits ~6 rows nicely) */}
          <div className="grid grid-cols-[200px_1fr] h-[320px]">
            {/* LEFT (same height, scroll if long) */}
            <div className="bg-primary text-white h-full overflow-y-auto">
              <ul className="py-2">
                {CATEGORIES.map((cat, i) => (
                  <li key={i}>
                    <button
                      className={`w-full text-left px-4 py-3 text-sm md:text-base transition ${
                        activeCategory === cat.name
                          ? "bg-white/15"
                          : "hover:bg-white/10"
                      }`}
                      onMouseEnter={() => setActiveCategory(cat.name)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT (one item per row, scroll if >6) */}
            <div className="p-3 text-black h-full overflow-y-auto">
              <div className="flex flex-col gap-2">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border border-primary rounded-lg bg-white px-2 py-2 hover:shadow-md transition cursor-pointer"
                  >
                    <div className="relative w-10 h-10 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="font-semibold">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
