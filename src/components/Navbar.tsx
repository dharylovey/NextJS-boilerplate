"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: <FaRegMessage />, href: "/message" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <header className="max-w-screen-2xl mx-auto">
      <nav className="flex justify-between p-4 sm:px-12 lg:px-16">
        <Link href="/">
          <IoCodeSlashSharp className="text-5xl" />
        </Link>
        {/* Desktop */}

        <ul className="hidden sm:flex  gap-4 justify-center items-center">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={
                pathname === link.href ? "text-primary text-2xl" : "text-2xl"
              }
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button onClick={handleClick} className="sm:hidden">
          {nav ? (
            <RxCross1 className="dark:text-white h-[30px] w-[30px]" />
          ) : (
            <RxHamburgerMenu className="dark:text-white h-[30px] w-[30px]" />
          )}

          <div
            className={`${
              nav ? "flex" : "hidden"
            } absolute top-20 inset-x-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="flex flex-col sm:hidden gap-4 justify-center items-center mx-auto bg-muted w-full rounded-sm p-4">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={
                    pathname === link.href
                      ? "text-primary text-2xl"
                      : "text-2xl"
                  }
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </button>
      </nav>
    </header>
  );
}
