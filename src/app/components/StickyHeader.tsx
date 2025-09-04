"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const SCROLL_TRIGGER = 120; // px before the sticky header shows

const StickyHeader: React.FC = () => {
  const [show, setShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        "-translate-y-full", // start hidden (valid Tailwind)
        show ? "translate-y-0" : "",
        "transition-transform duration-300 ease-out will-change-transform",
      ].join(" ")}
      aria-hidden={!show}
    >
      <header className="text-white w-full bg-black border-b-2 border-b-secondary">
        <div className="max-w-[1120px] mx-auto px-5 py-2 flex justify-between items-center">
          <div>
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

          <nav className="hidden md:ml-auto md:flex items-center text-base font-medium">
            <Link href="/" className="mr-5 hover:text-secondary">
              ABOUT US
            </Link>
            <Link href="/" className="mr-5 hover:text-secondary">
              PRODUCTS
            </Link>
            <Link href="/" className="mr-5 hover:text-secondary">
              SOLUTIONS
            </Link>
            <Link href="/" className="mr-10 hover:text-secondary">
              COMPANY
            </Link>
            <button className="hidden md:inline-flex items-center bg-primary border border-primary py-2 px-6 rounded text-base font-medium hover:bg-white text-white hover:text-black transition">
              Get In Touch
            </button>
          </nav>

          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 bg-white w-full h-screen z-[70] flex flex-col gap-6 justify-center items-center">
            <AiOutlineClose
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-5 text-3xl text-black cursor-pointer"
              aria-label="Close menu"
            />
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-black"
            >
              HOME
            </Link>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-black"
            >
              PRODUCTS
            </Link>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-black"
            >
              SOLUTIONS
            </Link>
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-black"
            >
              COMPANY
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default StickyHeader;
