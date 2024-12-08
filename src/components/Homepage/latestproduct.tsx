import React from "react";

const LatestProduct: React.FC = () => {
  // Dynamic product data
  const products = [
    {
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/latestpr1.png",
    },
    {
      name: "Elegant Wooden Chair",
      price: "$58.00",
      originalPrice: "$75.00",
      image: "/latestpr2.png",
    },
    {
      name: "Modern Desk Lamp",
      price: "$34.00",
      originalPrice: "$49.00",
      image: "/latestpr3.png",
    },
    {
      name: "Stylish Sofa Set",
      price: "$150.00",
      originalPrice: "$200.00",
      image: "/latestpr4.png",
    },
    {
      name: "Classic Dining Set",
      price: "$120.00",
      originalPrice: "$180.00",
      image: "/latestpr5.png",
    },
    {
      name: "Modern Sofa Set",
      price: "$175.00",
      originalPrice: "$250.00",
      image: "/latestpr6.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#151875] mb-6">
        Latest Products
      </h2>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="text-[#fb2e86] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          New Arrival
        </div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          Best Seller
        </div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          Featured
        </div>
        <div className="text-[#151875] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          Special Offer
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-[#fff] rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Product Image */}
            <div className="w-full flex justify-center items-center p-4 bg-[#fff]">
              <img
                src={product.image}
                alt={product.name}
                className="w-[223px] h-[200px] sm:h-[260px] object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              {/* Product Name */}
              <h3 className="text-base font-semibold text-[#151875] mb-2">
                {product.name}
              </h3>

              {/* Price Section */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-[#151875]">
                  {product.price}
                </p>
                <p className="text-sm font-normal text-[#fb2448] line-through">
                  {product.originalPrice}
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="h-[2px] bg-[#eeeffb] w-full mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
