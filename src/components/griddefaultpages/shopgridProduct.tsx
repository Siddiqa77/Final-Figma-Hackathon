

"use client"
import React, { useEffect, useState } from 'react';
import { sanityClient } from "@/sanity/sanity"
import Link from 'next/link';

const ShopgridProduct: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "shopgridproduct"]{
        name,
        price,
        originalprice,
        "image": image.asset->url
      }`;
      const result = await sanityClient.fetch(query);
      setProducts(result);
    };
    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;

 
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Product Grid */}
    <Link href={"product"}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
        {/* Product Card */}
        {products.map((product: any, index: any) => (
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

          
            <div className="p-4">
             
              <h3 className="text-lg font-bold text-[#151875] mb-2 family  text-[18px]">
                {product.name}
              </h3>
              {/* Color Options */}
              <div className="flex items-center  justify-center mb-3 space-x-2">
              {["#DE9034", "#EC42A2", "#8568FF"].map((color, idx) => (
                  <div
                    key={idx}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
             
              {/* Product Price */}
              <div className="flex justify-evenly items-center">
                <p className="text-sm font-semibold text-[#151875]">
                  {product.price}
                </p>
                <p className="text-sm font-normal text-[#fb2448] line-through">
                  {product.originalprice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
    </div>
  );
};

export default ShopgridProduct;
