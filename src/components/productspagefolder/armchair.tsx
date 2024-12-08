import React from "react";

const Armchair: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Left Section - Image Thumbnails */}
      <div className="flex md:flex-col gap-3 ml-[200px]">
        <img
          src="/armchair1.png"
          alt="Thumbnail 1"
          className="w-20 h-20 md:w-24 md:h-24 object-cover cursor-pointer"
        />
        <img
          src="/armchair2.png"
          alt="Thumbnail 2"
          className="w-20 h-20 md:w-24 md:h-24 object-cover cursor-pointer"
        />
        <img
          src="/armchair3.png"
          alt="Thumbnail 3"
          className="w-20 h-20 md:w-24 md:h-24 object-cover cursor-pointer"
        />
      </div>

      {/* Middle Section - Main Image */}
      <div className="flex-1">
        <img
          src="/armchair4.png"
          alt="Main Product"
          className="w-[375px] h-[487px] object-contain rounded-lg"
        />
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-semibold family">Playwood Arm Chair</h1>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm family text-gray-500">(22)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold family">$32.00</span>
          <span className="text-gray-400 line-through">$39.00</span>
        </div>
        <span className="family text-[#0D134E] text-[16px]">Color</span>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
          porttitor purus, et volutpat sit.
        </p>
        <button className=" text-[#000] px-6 py-2 rounded">
          Add to Cart
        </button>
        <div className="flex items-center gap-2 ">
<div className="flex-col flex -tracking-wide">
    
<span>Categories:</span>
          <span>Tags:</span>
          <span>Share:</span>
</div>
          <div className="flex gap-2">
            <a href="#" className="text-blue-500 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Armchair;
