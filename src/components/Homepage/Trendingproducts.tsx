import Image from "next/image";
import React from "react";

const Trendingproducts: React.FC = () => {
  // Product data
  const products = [
    {
      name: "Cantilever Chair",
      price: "$26.00",
      originalPrice: "$42.00",
      image: "/trendingpropic1.png",
    },
    {
      name: "Cantilever Chair",
      price: "$26.00",
      originalPrice: "$42.00",
      image: "/trendingpropic2.png",
    },
    {
      name: "Cantilever Chair",
      price: "$26.00",
      originalPrice: "$42.00",
      image: "/trendingpropic3.png",
    },
    {
      name: "Cantilever Chair",
      price: "$26.00",
      originalPrice: "$42.00",
      image: "/trendingpropic4.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Heading */}
      <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-center text-[#1A0B5B] mb-10">
        Trending Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-[#ffffff] shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="bg-[#F6F7FB] w-full h-[236px] flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[130px] h-[150px] object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="text-base sm:text-sm md:text-lg font-semibold text-[#151875] mb-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-evenly">
                <p className="text-sm md:text-base font-bold text-[#151875]">
                  {product.price}
                </p>
                <p className="text-sm md:text-base font-normal text-[#151875]/30 line-through">
                  {product.originalPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Below Section */}
      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        {/* Clock Div */}
        <div className="w-full lg:w-[420px] h-auto bg-[#FFF6FB] p-4 flex flex-col lg:flex-row justify-between items-center">
          <div>
            <div className="text-[#151875] family text-lg md:text-xl font-semibold whitespace-nowrap">
              23% off in all products
            </div>
            <button className="text-[#FB2E86]  text-base lg:mb-40 font-semibold underline font-['Lato']">
              Shop Now
            </button>
          </div>
          <Image
            src="/trendingpropic5.png"
            alt="Clock"
            width={220}
            height={207}
            className="mt-4 lg:mt-10 object-contain"
          />
        </div>

        {/* Cabinet Div */}
        <div className="w-full lg:w-[420px] h-auto bg-[#EEEFFB] p-4 flex flex-col lg:flex-row justify-between items-center">
          <div>
            <div className="text-[#151875] family text-lg md:text-xl font-semibold whitespace-nowrap">
              23% off in all products
            </div>
            <button className="text-[#FB2E86] text-base lg:mb-40 font-semibold underline font-['Lato']">
              Shop Now
            </button>
          </div>
          <div className="w-[312px] h-[173px]">
            <Image
              src="/trendingpropic6.png"
              alt="Cabinet"
              width={312}
              height={173}
              className="mt-4 lg:mt-10 object-contain"
            />
          </div>
        </div>

        {/* Three Chairs */}
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          {[
            { name: "Executive Seat Chair", image: "/trendingpropic7.png" },
            { name: "Executive Seat Chair", image: "/trendingpropic8.png" },
            { name: "Executive Seat Chair", image: "/trendingpropic9.png" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#F5F6F8] p-2 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[64px] h-[74px] object-contain"
              />
              <div>
                <h4 className="text-sm md:text-base font-semibold text-[#151875]">
                  {item.name}
                </h4>
                <p className="text-xs md:text-sm font-normal text-[#151875]/30 line-through">
                  $32.00
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendingproducts;
