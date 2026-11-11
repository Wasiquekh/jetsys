"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import ProductMegaMenu from "./nav/ProductMegaMenu";
import SectionLinks from "./nav/SectionLinks";
import SolutionsMegaMenu from "./nav/SolutionsMegaMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div>
      <header className="text-white w-full bg-black border-b-2 border-b-secondary">
        <div className=" max-w-[1120px] mx-auto px-5 py-3 flex justify-between md:flex-row items-center">
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/images/jetsys-logo.svg"
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </Link>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden items-center whitespace-nowrap text-sm font-medium lg:ml-auto lg:flex xl:text-base"
          >
            <Link href="/about-us" className="mr-5 hover:text-secondary">
              ABOUT US
            </Link>
            {/* <Link href="/products" className="mr-5 hover:text-secondary">
              PRODUCTS
            </Link> */}
            {/* ✅ PRODUCTS with submenu */}
            <ProductMegaMenu />
            {/* SOLUTIONS WITH SUBMENU */}
            <SolutionsMegaMenu />
            <SectionLinks className="mr-3 uppercase hover:text-secondary xl:mr-5 aria-[current=page]:text-secondary" />
            <Link href="/" className="mr-5 hover:text-secondary xl:mr-10">
              COMPANY
            </Link>
            <Link href="/contact-us">
              <button className="inline-flex items-center bg-primary border border-primary py-2 px-6 focus:outline-none rounded text-base font-medium hover:bg-white text-white hover:text-black transition">
                Get In Touch
              </button>
            </Link>
          </nav>
          <button
            type="button"
            className="lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls={isMobileMenuOpen ? "mobile-navigation" : undefined}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>
        {/* MOBILE  MENU LIST */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-0 z-50 flex h-dvh flex-col overflow-y-auto bg-white px-5 pb-8 pt-20 lg:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="absolute right-5 top-6 text-3xl text-black"
            >
              <AiOutlineClose />
            </button>
            <div className="my-auto flex flex-col items-center gap-5">
              <Link href="/" onClick={closeMenu} className="text-xl font-medium text-black">
                HOME
              </Link>
              <Link href="/about-us" onClick={closeMenu} className="text-xl font-medium text-black">
                ABOUT US
              </Link>
              <Link href="/products" onClick={closeMenu} className="text-xl font-medium text-black">
                PRODUCTS
              </Link>
              <Link href="/solutions" onClick={closeMenu} className="text-xl font-medium text-black">
                SOLUTIONS
              </Link>
              <SectionLinks
                className="text-xl font-medium uppercase text-black aria-[current=page]:text-primary"
                onNavigate={closeMenu}
              />
              <Link href="/" onClick={closeMenu} className="text-xl font-medium text-black">
                COMPANY
              </Link>
              <Link href="/contact-us" onClick={closeMenu} className="text-xl font-medium text-black">
                GET IN TOUCH
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
