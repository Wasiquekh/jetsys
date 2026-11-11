"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import SectionLinks from "./nav/SectionLinks";

const SCROLL_TRIGGER = 120; // px before the sticky header shows

const StickyHeader: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setShow((window.scrollY || 0) > SCROLL_TRIGGER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "fixed top-0 inset-x-0 z-[60]",
        show ? "translate-y-0" : "-translate-y-full",
        "transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none",
      ].join(" ")}
      aria-hidden={!show}
      inert={!show}
    >
      <header className="text-white w-full bg-black border-b-2 border-b-secondary">
        <div className="max-w-[1120px] mx-auto px-5 py-2 flex justify-between items-center">
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/images/jetsys-logo.svg"
                width={140}
                height={140}
                alt="Jetsys logo"
                priority
              />
            </Link>
          </div>

          <nav
            aria-label="Sticky navigation"
            className="hidden items-center whitespace-nowrap text-sm font-medium lg:ml-auto lg:flex xl:text-base"
          >
            <Link href="/about-us" className="mr-5 hover:text-secondary">
              ABOUT US
            </Link>
            <Link href="/products" className="mr-5 hover:text-secondary">
              PRODUCTS
            </Link>
            <Link href="/solutions" className="mr-5 hover:text-secondary">
              SOLUTIONS
            </Link>
            <SectionLinks className="mr-3 uppercase hover:text-secondary xl:mr-5 aria-[current=page]:text-secondary" />
            <Link href="/" className="mr-5 hover:text-secondary xl:mr-10">
              COMPANY
            </Link>
            <Link href="/contact-us">
              <button className="inline-flex items-center bg-primary border border-primary py-2 px-6 rounded text-base font-medium hover:bg-white text-white hover:text-black transition">
                Get In Touch
              </button>
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls={isMobileMenuOpen ? "sticky-mobile-navigation" : undefined}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="sticky-mobile-navigation"
            aria-label="Sticky mobile navigation"
            className="fixed inset-x-0 top-0 z-[70] flex h-dvh flex-col overflow-y-auto bg-white px-5 pb-8 pt-20 lg:hidden"
          >
            <button
              type="button"
              onClick={closeMenu}
              className="absolute right-5 top-6 text-3xl text-black"
              aria-label="Close menu"
            >
              <AiOutlineClose />
            </button>
            <div className="my-auto flex flex-col items-center gap-5">
              <Link href="/" onClick={closeMenu} className="text-xl font-medium text-black">
                HOME
              </Link>
              <Link href="/" onClick={closeMenu} className="text-xl font-medium text-black">
                PRODUCTS
              </Link>
              <Link href="/" onClick={closeMenu} className="text-xl font-medium text-black">
                SOLUTIONS
              </Link>
              <SectionLinks
                className="text-xl font-medium uppercase text-black aria-[current=page]:text-primary"
                onNavigate={closeMenu}
              />
              <Link href="/" onClick={closeMenu} className="text-xl font-medium text-black">
                COMPANY
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default StickyHeader;
