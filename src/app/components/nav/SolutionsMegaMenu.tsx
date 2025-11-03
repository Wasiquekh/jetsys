"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect, useRef } from "react";

const SOLUTIONS = [
  {
    name: "Indegenization",
    items: [
      {
        title: "Equipments",
        image: "/images/Equipments.svg",
        link: "/solutions/indegenization/indegenization-equipments",
      },
      {
        title: "Airbourne Spares",
        image: "/images/Airbourne Spares.svg",
        
      },
      {
        title: "Non-airbourne Spares",
        image: "/images/Non-airbourne Spares.svg",
      },
    ],
  },
  {
    name: "Testing & Maintenance",
    items: [
      {
        title: "Aircraft Testers",
        image: "/images/Aircraft Testers.svg",
      },
      {
        title: "Test Stands & Test Rigs",
        image: "/images/Test Stands & Test Rigs.svg",
      },
      { title: "Aircraft Fixtures", image: "/images/Aircraft Fixtures.svg" },
    ],
  },
];

export default function SolutionsMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(SOLUTIONS[0].name);
  const triggerRef = useRef<HTMLAnchorElement | null>(null);

  const items = useMemo(() => {
    const cat = SOLUTIONS.find((c) => c.name === active);
    return cat ? cat.items : [];
  }, [active]);

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
      <Link
        ref={triggerRef}
        href="/solutions"
        className={`uppercase transition-colors ${
          open ? "text-white" : "hover:text-secondary"
        }`}
        onMouseEnter={() => setOpen(true)}
      >
        SOLUTIONS
      </Link>

      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full h-2 w-[600px]"
          onMouseEnter={() => setOpen(true)}
        />
      )}

      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] rounded-xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden z-50"
          onMouseEnter={() => setOpen(true)}
        >
          <div className="grid grid-cols-[200px_1fr] min-h-[320px]">
            {/* LEFT */}
            <div className="bg-primary text-white overflow-y-auto">
              <ul className="py-2">
                {SOLUTIONS.map((cat, i) => (
                  <li key={i}>
                    <button
                      className={`w-full text-left px-4 py-3 text-sm md:text-base transition ${
                        active === cat.name
                          ? "bg-white/15"
                          : "hover:bg-white/10"
                      }`}
                      onMouseEnter={() => setActive(cat.name)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="p-3 text-black overflow-y-auto">
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
