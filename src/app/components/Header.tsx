"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <div>
      {/* MOBILE  MENU LIST */}
      {isMobileMenuOpen && (
        <div className=" fixed top-0 left-0 bg-white w-full h-screen z-50 flex  gap-6 flex-col justify-center items-center">
          <AiOutlineClose
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=" absolute top-6 right-5 text-3xl text-black"
          />
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=" text-xl font-medium text-black"
          >
            HOME
          </Link>
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=" text-xl font-medium text-black"
          >
            PRODUCTS
          </Link>
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=" text-xl font-medium text-black"
          >
            SOLUTIONS
          </Link>
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=" text-xl font-medium text-black"
          >
            COMPANY
          </Link>
        </div>
      )}

      <header className="text-white w-full bg-black border-b-2 border-b-secondary">
        <div className=" max-w-7xl mx-auto px-5 py-3 flex justify-between md:flex-row items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/jetsys-footer.svg"
                width={85}
                height={85}
                alt="Picture of the author"
              />
            </Link>
          </div>

          <nav className=" hidden  md:ml-auto md:flex flex-wrap items-center text-base font-medium justify-center pr-0  ">
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
            <button className=" hidden md:inline-flex items-center bg-primary border border-primary py-2 px-6 focus:outline-none  rounded text-base font-medium mt-4 md:mt-0 hover:bg-white text-white hover:text-black transition">
              Get In Touch
            </button>
          </nav>
          <div>
            <RxHamburgerMenu
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className=" md:hidden text-3xl"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
