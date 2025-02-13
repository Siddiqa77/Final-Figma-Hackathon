"use client";
import Tags from "@/components/Homepage/Tags";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4">
      <div className="mt-10 md:mt-[100px] flex flex-col items-center">
        {/* Success Icon */}
        <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mb-6">
          <Image src="/success.png" alt="Success" width={100} height={100} />
        </div>

        {/* Payment Successful Message */}
        <h1 className="text-[#101750] text-2xl sm:text-4xl font-bold text-center mb-4">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="text-[#8d92a7] max-w-xl text-sm sm:text-base font-medium leading-6 sm:leading-[30px] mb-6 text-center px-2">
          Thank you for your purchase! Your payment has been successfully processed.
        </p>

        {/* Button */}
        <Link
          href="/shipping"
          className="px-6 py-2 bg-[#FB2E86] text-white text-sm sm:text-base font-semibold hover:bg-pink-700 transition-transform duration-300 hover:scale-105 rounded-md flex items-center"
        >
          Shipping Detail
        </Link>

        {/* Decorative Element */}
        <div className="w-[50px] sm:w-[65px] h-[50px] sm:h-[65px] bg-white rounded-full mt-6"></div>
      </div>

      <Tags />
    </div>
  );
};

export default PaymentSuccess;
