import React from "react";
import Image from "next/image";
import { FaLinkedin, FaStopwatch, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoFacebook, IoMdMail, IoMdStopwatch } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[url('/images/footer-bg-image.png')] bg-cover bg-center">
        <div className="container flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/* Left brand / summary */}
          <div className="w-full md:w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/">
              <Image
                src="/images/footer-logo.svg"
                width={150}
                height={50}
                alt="Jetsys logo"
                className="mb-6 mx-auto md:mx-0"
              />
            </Link>
            <p className="mt-2 text-base font-medium text-white mb-6">
              In the context of fast-changing defense technologies, the
              resultant gap needs to be constantly filled essentially by the
              import of hi-tech defense equipment.
            </p>

            <ul
              className="flex gap-8 justify-center md:justify-start mb-6"
              aria-label="Social links"
            >
              <li>
                <Link
                  href="/"
                  aria-label="Twitter"
                  className=" hover:text-secondary"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Instagram"
                  className=" hover:text-secondary"
                >
                  <GrInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Facebook"
                  className=" hover:text-secondary"
                >
                  <IoLogoFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="LinkedIn"
                  className=" hover:text-secondary"
                >
                  <ImLinkedin />
                </Link>
              </li>
            </ul>
          </div>

          {/* Right columns */}
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt:10 md:text-left text-center">
            {/* Column 1 */}
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-xl tracking-widest mb-3 uppercase border-b-2 border-b-secondary inline-block pb-1">
                Aviation Equipment
              </h2>
              <ul className="list-none mb-5 text-base font-medium text-white space-y-1">
                <li className=" hover:text-secondary">
                  <Link href="/">Ground Support Equipment</Link>
                </li>
                <li className=" hover:text-secondary">
                  <Link href="/">Ground Supply Equipment</Link>
                </li>
                <li className=" hover:text-secondary">
                  <Link href="/">Ground Handling Equipment</Link>
                </li>
                <li className=" hover:text-secondary">
                  <Link href="/">Ground Test Equipment</Link>
                </li>
              </ul>

              <h2 className="font-bold text-white text-xl tracking-widest mb-3 uppercase border-b-2 border-b-secondary inline-block pb-1">
                Runway Spares
              </h2>
              <ul className="list-none mb-5 text-base font-medium text-white space-y-1">
                <li className=" hover:text-secondary">
                  <Link href="/">Mafi Spares</Link>
                </li>
                <li className=" hover:text-secondary">
                  <Link href="/">Runway Lights</Link>
                </li>
                <li className=" hover:text-secondary">
                  <Link href="/">Others</Link>
                </li>
              </ul>

              <h2 className="font-bold text-white text-xl tracking-widest mb-3 uppercase border-b-2 border-b-secondary inline-block pb-1">
                Solutions
              </h2>
              <ul className="list-none mb-5 text-base font-medium text-white space-y-1">
                <li>
                  <Link className=" hover:text-secondary" href="/">
                    Indigenization
                  </Link>
                </li>
                <li>
                  <Link className=" hover:text-secondary" href="/">
                    Testing &amp; Maintenance
                  </Link>
                </li>
              </ul>

              <h2 className="font-bold text-white text-xl tracking-widest mb-3 uppercase border-b-2 border-b-secondary inline-block pb-1">
                Other Offerings
              </h2>
              <ul className="list-none mb-0 text-base font-medium text-white space-y-1">
                <li>
                  <Link className=" hover:text-secondary" href="/">
                    Aircraft ROH
                  </Link>
                </li>
                <li>
                  <Link className=" hover:text-secondary" href="/">
                    Aircraft Spares
                  </Link>
                </li>
                <li>
                  <Link className=" hover:text-secondary" href="/">
                    Raw Materials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 className="font-bold text-white text-xl tracking-widest mb-3 uppercase border-b-2 border-b-secondary inline-block pb-1">
                Headquarters
              </h2>
              <ul className="list-none mb-5 text-base font-medium text-white space-y-3">
                <li>
                  G07, C-Wing, Salman CHS, Vashi, Sector 9A, Navi Mumbai, India
                  400703
                </li>
                <li>
                  Plot no. 34A, Rangara Complex, Dahisar Mori, Taloja,
                  Maharashtra, India 410208
                </li>
              </ul>
              <h2 className="font-bold text-white text-xl tracking-widest mb-3 uppercase border-b-2 border-b-secondary inline-block pb-1">
                Office Hours
              </h2>
              <ul className="list-none mb-5 text-base font-medium text-white space-y-3">
                <li>
                  <div className=" flex gap-2">
                    <div>
                      <FaStopwatch className=" text-primary text-2xl" />
                    </div>
                    <div>Mon-Sat: 10am - 7pm Weekends by appointment</div>
                  </div>
                </li>
              </ul>
              <h2 className="font-bold text-white text-xl tracking-widest mb-3 uppercase border-b-2 border-b-secondary inline-block pb-1">
                Office Hours
              </h2>
              <ul className="list-none mb-5 text-base font-medium text-white space-y-3">
                <li>
                  <div className=" flex gap-2 justify-center  md:justify-start">
                    <div>
                      <IoCallSharp className=" text-primary text-2xl" />
                    </div>
                    <div className=" hover:text-secondary">+91 90046 45224</div>
                  </div>
                </li>
                <li>
                  <div className=" flex gap-2 justify-center  md:justify-start">
                    <div>
                      <IoMdMail className=" text-primary text-2xl" />
                    </div>
                    <div className=" hover:text-secondary">
                      info@jetsys.co.in
                    </div>
                  </div>
                </li>
                <li>
                  <div className=" flex gap-2 justify-center  md:justify-start">
                    <div>
                      <FaLinkedin className=" text-primary text-2xl" />
                    </div>
                    <div className=" hover:text-secondary">
                      linkedin.com/jetsysdefence
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section className=" bg-[#2B2908]">
        <div className="container !py-5 ">
          <div className=" flex flex-col-reverse md:flex-row items-center justify-between gap-1 text-white font-medium text-xs md:text-sm">
            <Link target="_blank" href="https://www.dynsimulation.com/">
              <p className=" hover:text-secondary text-center">
                Powered by Dynsimulation Technologies pvt ltd
              </p>
            </Link>

            <p>© Jetsys Defence</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
