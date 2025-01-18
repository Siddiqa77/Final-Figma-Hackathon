
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { client } from "@/sanity/lib/client";

const ShopgridProduct: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "item"]{
        id, 
        name,
        price,
        description,
       discountPercentage,
        "image": image.asset->url
      }`;
      const products = await client.fetch(query);
      setProducts(products);
    };
    fetchProducts();
  }, []);
  console.log(products);

  if (!products.length) return <p>Loading...</p>;
 
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Product Grid */}
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
        {/* Product Card */}
        {products.map((product: any, index: any) => (
          <div
            key={index}
            className="relative bg-[#ffffff] shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >

            
            {/* Upper Section: Image and Background */}
            <div className="bg-[#F6F7FB] w-[270] h-[236px] flex justify-center items-center relative ">
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
                                alt="heart"
                                width={19}
                                height={19}
                              />
                              <Image
                                src="/featuredsearch.png"
                                alt="search"
                                width={19}
                                height={19}
                              />
                            </div>
                            <div className="w-[13.85px] h-[13.85px] left-[1.98px] top-[2.77px] absolute"></div>
                          </div>
                        )}
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={300}
                className="w-[130px] h-[150px] object-contain"
              />
             
            </div>

          
            <div className="p-4">
            <Link href={`/shopgridproduct/${product.id}`}>
              <h3 className="text-lg font-bold text-[#151875] mb-2 family text-[18px]">
                {product.name}
              </h3>
              </Link>
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
                <p className="text-sm font-semibold text-[#151875] family">
                  {product.price}
                </p>
                <p className="text-sm font-normal  family">
                  {product.discountPercentage}
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
