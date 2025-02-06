"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      <header className="flex justify-between items-center w-full h-fit">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="w-[200px] h-[50px]"
            width={500}
            height={500}
          />
        </div>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:relative md:flex md:items-center md:justify-center md:flex-1 ${isOpen ? "block bg-white mt-56 w-full" : "hidden"
            }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-[75px] text-[16px] font-medium p-4 md:p-0">
            <li>
              <Link href="/" className="block py-2 md:py-0 hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Shop" className="block py-2 md:py-0 hover:text-gray-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="block py-2 md:py-0 hover:text-gray-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="block py-2 md:py-0 hover:text-gray-500">
                Contact
              </Link>
            </li>
            {isOpen && <div className="flex gap-6">
              <li>
                <Link href="/Products">
                  <Icon
                    icon="mdi:account-alert-outline"
                    className="w-7 h-7 text-black"
                  />
                </Link>
              </li>
              <li>
                <Link href="/Asgaard">
                  <Icon icon="si:search-line" className="w-7 h-7 text-black" />
                </Link>
              </li>
              <li>
                <Link href="/CheckOut">
                  <Icon icon="solar:heart-linear" className="w-7 h-7 text-black" />
                </Link>
              </li>
              <li>
                <Link href="/Cart">
                  <Icon
                    icon="streamline:shopping-cart-2"
                    className="w-7 h-7 text-black"
                  />
                </Link></li>
            </div>}
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-[35px] pr-10">
          <Link href="/Products">
            <Icon
              icon="mdi:account-alert-outline"
              className="w-7 h-7 text-black"
            />
          </Link>
          <Link href="/Asgaard">
            <Icon icon="si:search-line" className="w-7 h-7 text-black" />
          </Link>
          <Link href="/CheckOut">
            <Icon icon="solar:heart-linear" className="w-7 h-7 text-black" />
          </Link>
          <Link href="/Cart">
            <Icon
              icon="streamline:shopping-cart-2"
              className="w-7 h-7 text-black"
            />
          </Link>
        </div>

        {/* Burger Icon */}
        <div
          className="flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <span
            style={{
              transform: isOpen ? "rotate(45deg) translate(10px, 5px)" : "",
            }}
            className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
          ></span>
          <span
            style={{ opacity: isOpen ? 0 : 1 }}
            className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
          ></span>
          <span
            style={{
              transform: isOpen ? "rotate(-45deg) translate(10px, -5px)" : "",
            }}
            className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
          ></span>
        </div>
      </header>
    </div>
  );
}
