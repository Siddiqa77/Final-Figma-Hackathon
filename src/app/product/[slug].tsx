

import React, { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/sanity";
import Link from "next/link";
import Detailpage from "@/components/detailfolder/detailpage";
import Relatedproducts from "@/components/detailfolder/relatedproducts";

const DetailProduct = ({ params: { slug } }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "detailproduct"]{
          name,
          "image": image.asset->url,
          price,
          originalprice,
          rating,
          
          description,
          "slug": slug.current
        }`;
        const result = await sanityClient.fetch(query, { slug });
        setProduct(result);
       console.log(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Detailpage />
      <div className="flex flex-col justify-between lg:flex-row gap-6 p-4">
        {/* Left Section - Image Thumbnails */}
        <div className="w-20 h-20 flex lg:flex-col gap-6 ml-5 lg:ml-[150px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
          />
        </div>

        {/* Middle Section - Main Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full lg:w-[375px] lg:h-[487px] object-contain rounded-lg"
          />
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-xl md:text-2xl text-[#101750] font-semibold">
            {product.name}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">{product.rating}</span>
            <span className="text-sm text-gray-500">(22)</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg md:text-xl font-bold">
              ${product.price}
            </span>
            <span className="line-through text-[#151875]">
              ${product.originalprice}
            </span>
          </div>
          <p className="text-[16px] md:text-[18px] text-[#A9ACC6] leading-[29px]">
            {product.description}
          </p>
          <Link href="/shoppingcart">
            <button className="bg-[#151875] text-white px-6 py-2">
              Add to Cart 🤍
            </button>
          </Link>
        </div>
      </div>

      <section>
        <Relatedproducts />
      </section>
    </div>
  );
};

export default DetailProduct;