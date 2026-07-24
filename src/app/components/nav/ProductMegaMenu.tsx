"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const CATEGORIES = [
  {
    name: "Aviation Equipment",
    link: "/products/aviation-equipment",
    items: [
      {
        title: "Ground Support Equipment",
        image: "/images/Ground Support Equipment.svg",
        link: "/products/aviation-equipment/ground-support-equipment",
      },
      {
        title: "Ground Supply Equipment",
        image: "/images/Ground Supply Equipment.svg",
        link: "/products/aviation-equipment/ground-supply-equipment",
      },
      {
        title: "Ground Test Equipment",
        image: "/images/Ground Test Equipment.svg",
        link: "/products/aviation-equipment/ground-test-equipment",
      },
      {
        title: "Ground Handling Equipment",
        image: "/images/Ground Handling Equipment.svg",
        link: "/products/aviation-equipment/ground-handling-equipment",
      },
    ],
  },
  {
    name: "Runway Spares",
    link: "/products/runway-spares",
    items: [
      {
        title: "Mafi Spares",
        image: "/images/Mafi Spares.svg",
        link: "/products/runway-spares/mafi-spares",
      },
      {
        title: "Runway Lights",
        image: "/images/Runway Lights.svg",
        link: "/products/runway-spares/runway-lights",
      },
      {
        title: "Signboards",
        image: "/images/Signboards.svg",
        link: "/products/runway-spares/signbords",
      },
    ],
  },
  {
    name: "Aircraft Spares & System",
    link: "/products/aircraft-spares-system",
    items: [
      {
        title: "Aircraft Spares",
        image: "/images/Aircraft Spares.svg",
        link: "/products/aviation-equipment/ground-handling-equipment",
      },
      {
        title: "Aircraft Systems",
        image: "/images/Aircraft Systems.svg",
        link: "/products/aviation-equipment/ground-handling-equipment",
      },
      {
        title: "Navy Spares",
        image: "/images/Navy Spares.svg",
        link: "/products/aviation-equipment/ground-handling-equipment",
      },
      {
        title: "Aircraft Hoses",
        image: "/images/Aircraft Hoses.svg",
        link: "/products/aviation-equipment/ground-handling-equipment",
      },
      {
        title: "Engine Parts",
        image: "/images/engine parts.svg",
        link: "/products/aviation-equipment/ground-handling-equipment",
      },
      {
        title: "Fuel System Parts",
        image: "/images/Fuel System Parts.svg",
        link: "/products/aviation-equipment/ground-handling-equipment",
      },
    ],
  },
  {
    name: "airborne-raw-materials",
    link: "/products/airborne-raw-materials",
    items: [
      {
        title: "Steel (low Carbon)",
        image: "/images/Steel (Carbon).svg",
        link: "/products",
      },
      {
        title: "Steel (Carbon)",
        image: "/images/Steel (Carbon).svg",
        link: "/products",
      },
      {
        title: "Fasteners",
        image: "/images/Fasteners.svg",
        link: "/products",
      },
      {
        title: "Airborne Glues",
        image: "/images/Airborne Glues.svg",
        link: "/products",
      },
    ],
  },
];

export default function ProductMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);

  const items = useMemo(() => {
    return (
      CATEGORIES.find((category) => category.name === activeCategory)?.items ??
      []
    );
  }, [activeCategory]);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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

      {open && (
        <div
          className="absolute left-1/2 top-full h-2 w-[600px] -translate-x-1/2"
          onMouseEnter={() => setOpen(true)}
        />
      )}

      {open && (
        <div
          className="absolute left-1/2 top-full z-50 mt-0 w-[600px] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10"
          onMouseEnter={() => setOpen(true)}
        >
          <div className="grid h-[320px] grid-cols-[200px_1fr]">
            <div className="h-full overflow-y-auto bg-primary text-white">
              <ul className="py-2">
                {CATEGORIES.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.link}
                      className={`block w-full px-4 py-3 text-left text-sm transition md:text-base ${
                        activeCategory === category.name
                          ? "bg-white/15"
                          : "hover:bg-white/10"
                      }`}
                      onMouseEnter={() => setActiveCategory(category.name)}
                      onFocus={() => setActiveCategory(category.name)}
                      onClick={() => setOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-full overflow-y-auto p-3 text-black">
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary bg-white px-2 py-2 transition hover:shadow-md"
                    onClick={() => setOpen(false)}
                  >
                    <div className="relative h-10 w-10 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="font-semibold">{item.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
