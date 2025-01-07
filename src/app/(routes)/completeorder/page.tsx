import Tags from "@/components/Homepage/Tags";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const grids = [
  {
    title: "Order Completed",
  },
];

const Completeorder = () => {
  const current = grids[0];
  return (
    <div>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          {/* Center Column: Content (Title, Description, Button) */}
          <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20 ">
              {current.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
              <div className="text-[#000000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
                Home
              </div>
              <div className="text-[#000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
                Pages
              </div>
              <button className="text-[#FB2E86] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
                Order Completed
              </button>
            </div>
          </div>
        </section>

        {/* // Main Section */}
        <div className="mt-10 md:mt-[100px] flex flex-col items-center">
        {/* Clock Icon */}
        <div className="w-[100px] h-[100px] mb-6"> 
          <Image src="/clock.png" alt="clock" width={100} height={100} />
        </div>

        {/* Order Completion Messages */}
        <div className="w-full max-w-lg text-center text-[#101750] text-4xl font-bold mb-6">
          Your Order Is Completed!
        </div>

        <div className="text-[#8d92a7] md:w-[850px] text-base font-semibold leading-[30px] mb-4 px-5 text-center">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will  receive an email confirmation when your order is completed.
        </div>

        {/* Continue Shopping Button */}
        <div className="w-full flex justify-center">
          <div className="w-52 h-[59px] bg-[#ff1788] rounded-[3px] flex justify-center items-center">
            <Link href="/">
              <button className="text-center text-white text-base font-semibold leading-[30px]">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="w-[65px] h-[65px] bg-white rounded-full mt-4"></div>
      </div>

      </div>

      <Tags />
    </div>
  );
};

export default Completeorder;
