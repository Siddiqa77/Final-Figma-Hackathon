import React from "react";
import Demosidebar from "@/components/Demosidebar";

const grids = [
  {
    title: "Checkout",
  },
];

const Checkout = () => {
  const current = grids[0];
  return (
    <div>
      {/* Hero Section */}

      <section className="relative bg-[#F8F8FD] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20 ">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            .
            <div className="text-[#000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            .
            <div className="text-[#FB2E86] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Checkout
            </div>
          </div>
        </div>
      </section>


{/* left section */}

      <div className="left-[300px] top-[400px] absolute text-[#1d3178] text-3xl font-bold family">
        CheckOut
      </div>
      <div className="left-[300px] top-[440px] absolute text-[#1d3178] text-xs font-normal lato">
        Cart/ Information/ Shipping/ Payment
      </div>
      <div className="wrapper md:flex px-4 sm:px-6 lg:px-8">
        {/* Information Section */}
        <div className="flex flex-col items-center md:flex-row md:items-start w-full md:w-[800px] mt-[200px]">
          <div className="flex-grow bg-[ghostwhite] rounded-[3px] py-8 px-4 sm:px-8 md:px-12">
            <div className="flex flex-wrap md:flex-nowrap items-start justify-between gap-2">
              <div className="text-[#1D3178] family text-lg font-bold">
                Contact Information
              </div>
              <div className="flex items-center gap-2 lato text-sm text-[#C1C8E1] font-medium">
                <span>Already have an account?</span>
                <span>Log in</span>
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm text-[lightsteelblue] font-semibold">
                Email or mobile phone number
              </label>
              <input
                type="text"
                className="w-full mt-2 border-b-2 p-2 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex items-center">
              <input type="checkbox" className="h-4 w-4 rounded-sm" />
              <label className="ml-2 text-xs text-slate-400">
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <div className="mt-12">
              <div className="text-[#1D3178] family text-lg font-bold">
                Shipping Address
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full border-b-2 p-3"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border-b-2 p-3"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="col-span-full border-b-2 p-3"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="col-span-full border-b-2 p-3"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border-b-2 p-3"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border-b-2 p-3"
                />
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-[#FB2E86] text-[#fff] rounded-sm py-3 px-6 w-full sm:w-auto transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105 hover:font-bold  text-center">
                Continue Shipping
              </button>
            </div>
          </div>
        </div>
        <Demosidebar />
      </div>
    </div>
  );
};

export default Checkout;
