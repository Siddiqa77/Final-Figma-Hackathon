"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/sanity";
import Link from "next/link";

const LatestProduct: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "latestproducts"]{
       id, 
       name,
        price,
        description,
        originalPrice,
         "image": image.asset->url,


      }`;
      const product = await sanityClient.fetch(query);
      setProducts(product);
    };
    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Heading */}
      <h2 className="text-3xl family font-bold text-center text-[#1A0B5B] mb-4">
        Latest Products
      </h2>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="text-[#fb2e86] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
          New Arrival
        </div>
        <div className="text-[#151875] text-lg font-normal lato cursor-pointer hover:text-[#fb2448] transition">
          Best Seller
        </div>
        <div className="text-[#151875] text-lg font-normal lato cursor-pointer hover:text-[#fb2448] transition">
          Featured
        </div>
        <div className="text-[#151875] text-lg font-normal lato cursor-pointer hover:text-[#fb2448] transition">
          Special Offer
        </div>
      </div>

      {/* Product Grid */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any, index: any) => (
            <div
              key={index}
              className="relative bg-[#fff] shadow-lg rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              <div className="w-full flex justify-center items-center p-4 bg-[#fff]">
                <Image
                  src={product.image}
                  width={223}
                  height={200}
                  alt={product.name}
                  className="w-[223px] h-[200px] sm:h-[260px] object-cover"
                />
              </div>

              {/* Product Details */}
             
              <div className="p-4">
              <Link href={`/product/${product.id}`}>
                {/* Product Name */}
                <h3 className="text-base font-semibold text-[#151875] mb-2">
                  {product.name}
                </h3>
                </Link>
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
