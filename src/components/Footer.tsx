

import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import { RxInstagramLogo } from "react-icons/rx";
import {FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-[#E7E4F8]">
  <div className="container px-5 py-24 mx-auto mt-[40px]">
    <div className="flex flex-wrap md:text-left text-center order-first">


    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-[38px] font-bold text-black tracking-widest family text-lg mb-3">
        Hekto
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
            </label>
            <input
              type="text"
              id="footer-field"
              placeholder='Enter Email Address'
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-[#EEEFFB] font-medium text-[16px] bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded font-['Roboto]">
            Sign-Up
          </button>
        </div>
        <p className="text-[#8A8FB9] text-sm mt-2 md:text-left text-center text-[16px] font-['Lato']">
        Contact Info
          <br className="lg:block hidden font-['Lato'] text-[16px]" />
          17 Princess Road, London, Greater London NW1 8JR,UK
        </p>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-[22px] font-semibold text-black tracking-normal text-lg mb-3 ml-6 family">
          Catogories
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Laptops & Computers</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Cameras & Photography</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Smart Phones & Tablets</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Video Games & Consoles</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Waterproof Headphones</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-[22px] font-semibold text-black tracking-normal text-lg mb-3 ml-6 family">
        Customer Care
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800 ml-6">My Account</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Discount</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Returns</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Orders History</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6">Order Tracking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="text-[22px] font-semibold text-black tracking-normal text-lg mb-3 ml-6 family">
        Pages
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6 ">Blog</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6 ">Browse the Shop</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6 ">Category</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6 ">Pre-Built Pages</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6 ">Visual Composer Elements</a>
          </li>
          <li>
            <a className="text-[#8A8FB9] font-normal text-[16px] font-['Lato'] hover:text-gray-800  ml-6 ">WooCommerce Pages</a>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-[#E7E4F8]">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-base text-[#8A8FB9] sm:ml-6 sm:mt-0 mt-4 font-['Lato] font-normal">
    
        <a
          href="https://twitter.com/knyttnev"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          ©Webecy - All Rights Reserved
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     <div className='text-2xl text-gray-900  '><FaFacebook  /></div> 
      <div className='text-2xl ml-3 text-gray-900'><RxInstagramLogo /></div>
        <div className='text-2xl ml-3 text-gray-900'><FaLinkedin  /></div>

    </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer