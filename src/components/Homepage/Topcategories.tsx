"use client";

import React, { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/sanity";
import Link from "next/link";
import Image from "next/image";

const Topcategories: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "topcategories"]{
         name,
         price,
         "image": image.asset->url
       }`;
      const result = await sanityClient.fetch(query);
      setProducts(result);
    };
    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;


  return (
    <div className="container mx-auto px-4 py-10 mb-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#151875] mb-20">
        Top Categories
      </h2>

      {/* Wrapper for Cards */}
     <Link href="/products">
     <div className="flex flex-wrap justify-center gap-6">
      {products.map((product: any, index: any) => (
          <div
            key={index}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-[269px] h-[269px] bg-[#f6f7fb] rounded-full shadow-md flex items-center justify-center transition-shadow duration-300 hover:shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-[#151875] text-xl font-semibold">
                {product.name}
              </h3>
              <p className="text-[#151875] text-base font-normal">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
     </Link>

      {/* SVG Section */}
      <div className="flex justify-center mt-8">
        <svg
          className="w-[67px] h-[15px] transition-transform duration-300 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 15"
          fill="none"
        >
          <rect
            y="7.07129"
            width="10"
            height="9.8913"
            rx="4.94565"
            transform="rotate(-45 0 7.07129)"
            fill="#FB2E86"
          />
          <rect
            x="26.7071"
            y="7.60645"
            width="9"
            height="8.8913"
            rx="4.44565"
            transform="rotate(-45 26.7071 7.60645)"
            stroke="#FB2E86"
          />
          <rect
            x="52.7071"
            y="7.60645"
            width="9"
            height="8.8913"
            rx="4.44565"
            transform="rotate(-45 52.7071 7.60645)"
            stroke="#FB2E86"
          />
        </svg>
      </div>
    </div>
  );
};


export default Topcategories;
