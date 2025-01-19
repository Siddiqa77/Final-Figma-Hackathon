"use client";

import { IoClose, IoSearch } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSublinks, setShowSublinks] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className=" bg-[#fff] w-[100vw]pt-3">
      <div className="w-full flex items-center justify-center mx-auto bg-[#fff] h-[70px]">
        <div className="w-full flex justify-center px-[15px] md:px-[135px]">
          {/* Content */}
          <div className="w-full md:w-full lg:w-[1170px] flex items-center justify-between h-[50px]">
            <div className="flex items-center">
              {/* Logo */}
              <h1 className="text-3xl font-bold family text-[#0D0E43]">
                Hekto
              </h1>
              <div className="hidden md:block">
                <ul className="flex md:flex-row md:gap-x-2 lg:gap-x-3 text-base ml-20 font-medium text-black">
                  <li className="relative group p-4 hover:underline underline-offset-2">
                    <Link
                      href="/"
                      className="hover:text-[#FB2E86] lato text-[16px] flex items-center font-normal focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                    >
                      Home <IoIosArrowDown className="mt-1 " />
                    </Link>
                    {/* Sublinks */}
                    <ul className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-[#fff] shadow-lg rounded-md p-2 border border-gray-200 z-10">
                      <Link
                        href="/faq"
                        className="hover:text-[rgb(251,46,134)] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                      >
                        <li className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                          FAQ
                        </li>
                      </Link>
                      <Link
                        href="/about"
                        className="hover:text-[#FB2E86] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                      >
                        <li className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                          About Us
                        </li>
                      </Link>
                      <Link
                        href="/myaccount"
                        className="hover:text-[#FB2E86] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                      >
                        <li className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                          My Account
                        </li>
                      </Link>
                      <Link
                        href="/shoppingcart"
                        className="hover:text-[#FB2E86] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                      >
                        <li className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                          CartPage
                        </li>
                      </Link>
                      <Link
                        href="/checkout"
                        className="hover:text-[#FB2E86] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                      >
                        <li className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                          Check Out Page
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <div className="hidden md:flex space-x-6  text-base font-normal lato">
                    <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                      <Link href="/shopleftsidebar">Pages</Link>
                    </li>
                    <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                      <Link href="/griddefault">Product</Link>
                    </li>
                    <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                      <Link href="/shoplist">Shop</Link>
                    </li>
                    <li className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            
            {/* Search and Toggle */}
            <div className="flex gap-x-4 items-center">
              <div className="lg:flex hidden md:block w-[243px] h-[40px] bg-[#fff] rounded-[4px] items-center">
                <input
                  className="w-full p-1 px-3 text-[13px] rounded-md bg-[#fff] outline-none"
                  type="search"
                  placeholder="What are you looking for?"
                />
               
                <div className="hidden md:flex items-center space-x-4 h-10">
                  <div className="relative">
                    <input
                      type="text"
                      className="pr-20 h-10 text-sm text-gray-700 border-2 border-[#e7e6ef]"
                    />
                    <div className="w-[51px] h-10 left-[200px] top-0 absolute bg-[#fb2e86] flex items-center justify-center">
                      <i className="text-white text-lg">
                        <IoSearch />
                      </i>
                    </div>
                  </div>
                </div>
              </div>

          
              <button
                className="text-black block md:hidden text-3xl z-50"
                onClick={toggleMenu}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed right-0 top-[30px] w-[70vw] h-full bg-white z-50 px-4 py-2 duration-500 overflow-y-auto">
          <div className="flex justify-end mt-4 items-center">
            <IoClose className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <ul className="space-y-6 mt-8">
            <li className="relative">
              <div
                className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86] cursor-pointer"
                onClick={() => setShowSublinks(!showSublinks)}
              >
                Home
                <span
                  className={`ml-auto transform ${showSublinks ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </div>

              {/* Sublinks */}
              {showSublinks && (
                <ul className="mt-2 space-y-2 pl-4">
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-[rgb(251,46,134)] block focus:text-[#FB2E86] active:text-[#FB2E86]"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-[rgb(251,46,134)] block focus:text-[#FB2E86] active:text-[#FB2E86]"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/myaccount"
                      className="hover:text-[rgb(251,46,134)] block focus:text-[#FB2E86] active:text-[#FB2E86]"
                    >
                      My Account
                    </Link>
                  </li>
                  <Link
                    href="/shoppingcart"
                    className="hover:text-[#FB2E86] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                  >
                    <li className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                      CartPage
                    </li>
                  </Link>
                  <Link
                    href="/checkout"
                    className="hover:text-[#FB2E86] flex items-center  focus:text-[#FB2E86] active:text-[#FB2E86] hover:stroke-[#FB2E86]"
                  >
                    <li className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
                      Check Out Page
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <li>
              <a
                href="/shopleftsidebar"
                className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="/griddefault"
                className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/shoplist"
                className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[rgb(251,46,134)] flex items-center focus:text-[#FB2E86] active:text-[#FB2E86]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}

export default Header;
