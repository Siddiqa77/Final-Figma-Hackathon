import { sanityClient } from "@/sanity/sanity";

import Detailpage from "@/components/detailfolder/detailpage";
import Relatedproducts from "@/components/detailfolder/relatedproducts";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch the product

  const query = `*[_type == "product" && id == "${id}"][0]{
    id,
    name,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category->{
      title,
      value, 
    },
     "imageUrl": image.asset->url,
    
  }`;
  

  const product = await sanityClient.fetch(query);

  console.log(product);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Detailpage />
      <div className="flex flex-col justify-between lg:flex-row gap-6 p-4 md:mt-10">
        {/* Left Section small  Images */}
        <div className="md:flex md:flex-col gap-12 flex justify-evenly object-cover">
          <div className="w-20 h-20 flex lg:flex-col gap-6 ml-3 lg:ml-[150px] shadow-lg  transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/armchair1.png"
              alt={product.name}
              width={200}
              height={300}
              className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
            />
          </div>
          <div className="w-20 h-20 flex lg:flex-col gap-6 ml-5 lg:ml-[150px] shadow-lg  transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/armchair2.png"
              alt={product.name}
              width={200}
              height={300}
              className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
            />
          </div>
          <div className="w-20 h-20 flex lg:flex-col gap-6 ml-5 lg:ml-[150px] shadow-lg  transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/armchair3.png"
              alt={product.name}
              width={200}
              height={300}
              className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
            />
          </div>
        </div>

        {/* Middle Section - Main Image */}
        <div className="flex-1 flex justify-center shadow-xl transform transition-transform duration-300 hover:scale-105 ">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={300}
            className="max-w-full lg:w-[350px] lg:h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-xl md:text-4xl text-[#0D134E] font-semibold  family">
            {product.name}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐✔ </span>
            <span className=" text-[#151875] text-sm ">(22) Reviews</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg md:text-xl font-bold">
              {product.price}
            </span>
            <span className="line-through text-[#FB2E86]">
              {product.stockLevel}
            </span>
          </div>
          <p className="text-[16px] font-semibold md:text-[18px] text-[#A9ACC6] leading-[29px] family">
            {product.description}
          </p>
          
          <button
  className="snipcart-add-item px-1 py-4 md:px-3 rounded-md md:py-4 inline-block text-[18px] family font-bold ml-20 mt-8 bg-[#e12570] text-[#fff] transition-all duration-300 ease-in-out w-1/2 sm:w-1/2 text-center"
  data-item-id={product.id}
  data-item-name={product.name}
  data-item-price={product.price}
  data-item-description={product.description}
  data-item-dicountPercentage={product.dicountPercentage}
  data-item-isFeaturedProduct={product.isFeaturedProduct}
  data-item-stockLevel={product.stockLevel}
  data-item-category={
    Array.isArray(product.category)
      ? product.category.map((category: any) => category.value).join(", ")
      : product.category?.value || product.category || ""
  }
  data-item-url={`/product/${product.id}`}
  data-item-image={product.image}
>
  Add to Cart 🤍
</button>
          
          
        </div>
        
        
      </div>
     

      <section>
        <Relatedproducts />
      </section>
    </div>
  );
}
