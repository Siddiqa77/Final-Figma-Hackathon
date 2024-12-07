"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow-sm wrapper">
      <div className="mx-auto flex justify-between items-center px-4 py-3 lg:px-8">
        {/* Hamburger Menu and Logo Section */}
        <div className="flex items-center justify-between w-full">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl opacity-6"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-black ml-4">
            Exclusive
          </div>

          {/* Navigation Links (Hidden on Mobile) */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <div className="relative group">
              <Link
                href="/"
                className="text-black font-normal text-sm sm:text-base font-['Poppins']"
              >
                Home
              </Link>
              <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
            <Link
              href="/contact"
              className="text-black font-normal text-sm sm:text-base font-['Poppins']"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-black font-normal text-sm sm:text-base font-['Poppins']"
            >
              About
            </Link>
            <Link
              href="/signup"
              className="text-black font-normal text-sm sm:text-base font-['Poppins']"
            >
              Sign Up
            </Link>
          </nav>

          {/* Search and Icons Section */}
          <div className="hidden lg:flex items-center space-x-4 sm:space-x-6">
            {/* Search Box */}
            <div className="hidden lg:flex items-center border rounded-full px-4 py-2 bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 text-black text-sm placeholder-gray-500 outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2"
              >
                <path
                  d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full" />

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex flex-col items-center text-[#ffffff] bg-[#1a1618] py-4 space-y-4 md:hidden uppercase text-sm font-normal tracking-widest font-['poppins']">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className=""
          >
            Home
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className=""
          >
            Contact
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className=""
          >
            About
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsMenuOpen(false)}
            className=""
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
