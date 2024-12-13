import React from "react";

const ShopgridProduct: React.FC = () => {
  // Product data
  const products = [
    {
      name: "Vel elit euismod",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid1.png",
    },
    {
      name: "Ultricies condimentum ",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid2.png",
    },
    {
      name: "Vitae suspendisse sed",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid3.png",
    },
    {
      name: "Sed at fermentum",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid4.png",
    },

    {
      name: "Fusce pellentesque at",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid5.png",
    },
    {
      name: "Vestibulum magna laoreet",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid6.png",
    },
    {
      name: "Sollicitudin amet orci",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid7.png",
    },
    {
      name: "Ultrices mauris sit",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid8.png",
    },

    {
      name: "Pellentesque condimentum ",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid9.png",
    },
    {
      name: "Cras scelerisque velit",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid10.png",
    },
    {
      name: "Lectus vulputate faucibus",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid11.png",
    },
    {
      name: "Purus risus, ut",
      price: "$26.00",
      originalPrice: "$42.00",
      colors: ["#de9034", "#ec42a2", "#8568ff"],
      image: "/shopgrid12.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
        {/* Product Card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-[#ffffff] shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Upper Section: Image and Background */}
            <div className="bg-[#F6F7FB] w-[270] h-[236px] flex justify-center items-center relative ">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-[130px] h-[150px] object-contain"
              />
              {/* Conditionally Render "View Details" Button for 2nd Card */}
              {index === 1 && (
                <div className="absolute top-[200px] pt-2 text-center  w-[94px] h-[29px] left-1/2 transform -translate-x-1/2  family text-xs font-medium py-1 px-3"></div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              {/* Product Name */}
              <h3 className="text-lg font-bold text-[#151875] mb-2 family  text-[18px]">
                {product.name}
              </h3>
              {/* Color Options */}
              <div className="flex items-center  justify-center mb-3 space-x-2">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              {/* Product Code */}

              {/* Product Price */}
              <div className="flex justify-evenly items-center">
                <p className="text-sm font-semibold text-[#151875]">
                  {product.price}
                </p>
                <p className="text-sm font-normal text-[#fb2448] line-through">
                  {product.originalPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopgridProduct;
