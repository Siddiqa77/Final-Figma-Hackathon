import React from "react";

const HeroBelowSection = () => {
  return (
    <div className="w-full bg-[#fff] px-4 py-4">
      {/* Section Container */}
      <div className="max-w-[1170px] mx-auto mt-20">
        {/* Title */}
        <div className="text-[#151875] text-2xl md:text-3xl font-bold">
          Ecommerce Accessories & Fashion Item
        </div>

        {/* Results Info */}
        <div className="text-[#8a8fb9] text-xs mt-2 mb-4">
          About 9,620 results (0.62 seconds)
        </div>

        {/* Controls Container */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side Options */}
          <div className="flex items-center gap-4">
            <div className="text-[#3f509e] text-sm md:text-base font-medium">
              Per Page:
            </div>
            <select className="w-20 h-8 border border-[#e7e6ef] text-[#8a8fb9] text-sm rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>

          {/* Middle Options */}
          <div className="flex items-center gap-4">
            <div className="text-[#3f509e] text-sm md:text-base font-medium">
              Sort By:
            </div>
            <select className="w-28 h-8 border border-[#e7e6ef] text-[#8a8fb9] text-sm rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="best-match">Best Match</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Right Side Options */}
          <div className="flex items-center gap-4">
            <div className="text-[#3f509e] text-sm md:text-base font-medium">
              View:
            </div>
            <div className="flex items-center gap-2">
              {/* Grid View Icon */}
              <button className="w-8 h-8 border border-[#e7e6ef] flex items-center justify-center rounded hover:bg-gray-200">
                <span className="material-icons text-[#8a8fb9]">grid_view</span>
              </button>

              {/* List View Icon */}
              <button className="w-8 h-8 border border-[#e7e6ef] flex items-center justify-center rounded hover:bg-gray-200">
                <span className="material-icons text-[#8a8fb9]">list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBelowSection;
