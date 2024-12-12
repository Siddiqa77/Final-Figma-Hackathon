import Image from "next/image";
import React from "react";

const FeaturedProduct: React.FC = () => {
  // Product data
  const products = [
    {
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      colors: ["#05e6b7", "#f701a8", "#00009d"],
      image: "/featuredpr1.png",
    },
    {
      name: "Stylish Chair",
      code: "X123456",
      price: "$58.00",
      colors: ["#f701a8", "#00009d", "#05e6b7"],
      image: "/featuredpr2.png",
    },
    {
      name: "Modern Chair",
      code: "M654321",
      price: "$65.00",
      colors: ["#00009d", "#f701a8", "#05e6b7"],
      image: "/featuredpr3.png",
    },
    {
      name: "Elegant Chair",
      code: "E789012",
      price: "$75.00",
      colors: ["#05e6b7", "#00009d", "#f701a8"],
      image: "/featuredpr4.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Heading */}
      <h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-10">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Product Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-[#ffffff] shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Upper Section: Image and Background */}
            <div className="bg-[#F6F7FB] w-[270] h-[236px] flex justify-center items-center relative">
              
              {/* 2nd card icons */}
              {index === 1 && (
                <div className="w-[19px] h-[19px] bottom-[90px] right-7 relative ">
                  <div className="flex gap-4">
                    <Image
                      src="/featuredcart.png"
                      alt="cart"
                      width={19}
                      height={19}
                    />
                    <Image
                      src="/featuredheart.png"
                      alt="cart"
                      width={19}
                      height={19}
                    />
                    <Image
                      src="/featuredsearch.png"
                      alt="cart"
                      width={19}
                      height={19}
                    />
                  </div>
                  <div className="w-[13.85px] h-[13.85px] left-[1.98px] top-[2.77px] absolute"></div>
                </div>
              )}
              
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[130px] h-[150px] object-contain"
              />
              {/* Conditionally Render "View Details" Button for 2nd Card */}
              {index === 1 && (
                <div className="absolute top-[200px] pt-2 text-center w-[94px] h-[29px] left-1/2 transform -translate-x-1/2 bg-[#08d15f] text-[#fff] family text-xs font-medium py-1 px-3 rounded shadow-md">
                  View Details
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              {/* Product Name */}
              <h3 className="text-lg font-bold text-[#fb2e86] mb-2">
                {product.name}
              </h3>
              {/* Color Options */}
              <div className="flex items-center justify-center mb-3 space-x-2">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-3.5 h-1"
                    style={{ backgroundColor: color, borderRadius: "10px" }}
                  ></div>
                ))}
              </div>
              {/* Product Code */}
              <p className="text-sm text-[#151875] mb-1">
                Code - {product.code}
              </p>
              {/* Product Price */}
              <p className="text-sm font-semibold text-[#151875]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
