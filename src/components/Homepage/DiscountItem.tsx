import React from "react";

const DiscountItem: React.FC = () => {
  return (
    <div className="wrapper">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#1A0B5B] mt-10">
        Discount Item
      </h2>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="text-[#fb2e86] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          Wood Chair
        </div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          Plastic Chair
        </div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          Sofa Collection
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 gap-12 mb-20">
        {/* Left Side Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-indigo-900 mb-2">
            20% Discount On All Products
          </h1>
          <p className="text-[#FB2E86] font-semibold mb-4">Eams Sofa Compact</p>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="text-gray-500 space-y-2">
            <li>✔ Material expose like metals</li>
            <li>✔ Simple neutral colours</li>
            <li>✔ Clear lines and geometric figures</li>
            <li>✔ Material expose like metals</li>
          </ul>
          <button className="mt-6 bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative flex justify-center">
          {/* Background Circle */}
          <div className="w-72 h-72 md:w-96 md:h-96 bg-pink-100 rounded-full absolute top-1/2 -translate-y-1/2 -z-10"></div>
          {/* Image */}
          <img
            src="/discountitempic.png"
            alt="Discount Sofa"
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
