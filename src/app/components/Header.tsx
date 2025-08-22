import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="text-white w-full bg-black border-b-2 border-b-secondary">
        <div className=" max-w-7xl mx-auto px-5 py-3 flex flex-wrap  flex-col md:flex-row items-center">
          <Image
            src="/images/jetsys-logo.svg"
            width={150}
            height={50}
            alt="Picture of the author"
          />

          <nav className="md:ml-auto flex flex-wrap items-center text-base font-medium justify-center pr-10 ">
            <Link href="/" className="mr-5">
              ABOUT US
            </Link>
            <Link href="/" className="mr-5">
              PRODUCTS
            </Link>
            <Link href="/" className="mr-5">
              SOLUTIONS
            </Link>
            <Link href="/" className="mr-5">
              COMPANY
            </Link>
          </nav>
          <button className="inline-flex items-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-base font-medium mt-4 md:mt-0">
            Get In Touch
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
