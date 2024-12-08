"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="white shadow-md wrapper">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-10">
        {/* Logo */}
        <Link href="/about">
        <div className="text-[#0D0E43] text-3xl font-bold family">Hekto</div></Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6  text-base font-normal font-['Lato']">
          <Link href="/" className="text-[#fb2e86]">
            Home
          </Link>

          <Link href="/myaccount">Pages</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Search & Cart */}
        <div className="hidden md:flex items-center space-x-4 h-10">
          <div className="relative">
            <input
              type="text"
              className=" pr-20 h-10 text-sm text-gray-700 border-2 border-[#e7e6ef]"
            />
            <div className="w-[51px] h-10 left-[200px] top-0 absolute bg-[#fb2e86]" />

            {/* <div className="w-[317px] h-10 left-0 top-0 absolute border-2 border-[#e7e6ef]" /> */}
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start space-y-2 px-4 py-2 text-[#0d0e43] font-['Lato'] text-base">
            {/* <li>
              <a href="#home" className="text-[#fb2e86]">
                Home
              </a>
            </li> */}
            <Link href="/" className="text-[#fb2e86]">Home</Link>
           <Link href="/myaccount">Pages</Link>
           <Link href="/products">Products</Link>
           <Link href="/blog">Blog</Link>
           <Link href="/shop">Shop</Link>
           <Link href="/contact">Contact</Link>
           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
