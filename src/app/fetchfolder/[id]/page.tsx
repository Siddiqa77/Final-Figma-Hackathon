

import Image from "next/image";

import Link from "next/link";
import { client } from "@/sanity/lib/client";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
};
const DetailedProduct = async () => {
  

const query = `*[_type == "newproduct"] {
  id,
  name,
  description,
  price,
  
  "imageUrl": image.asset->url
}`;


const data: Product[] = await client.fetch(query);
console.log(data)

if (!data) return <p>Product not found</p>;


  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-[#1A0B5B] mb-10">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {data.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Upper Section */}
            <div className="bg-[#F6F7FB] flex justify-center items-center h-[236px]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Product Details */}
           
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#fb2e86] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[#151875] mb-1">
                  {product.description}
                </p>
                <p className="text-sm font-semibold text-[#151875]">
                  ${product.price}
                </p>
                {/* <p className="text-sm font-semibold text-[#151875]">
                  ${product.discountPercentage}
                </p>
                <p className="text-sm font-semibold text-[#151875]">
                  ${product.priceWithoutDiscount}
                </p>
                <p className="text-sm font-semibold text-[#151875]">
                  {product.ratingCount}
                </p>
                <p className="text-sm font-semibold text-[#151875]">
                  {product.tags}
                </p> */}
                <p className="text-sm font-semibold text-[#151875]">
                  {product.id}
                </p>
                <Link href={`/product/${product.id}`}>
                <button className="bg-slate-500 py-3 px-3">
                  View Details
                  
                </button>
                </Link>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedProduct;
