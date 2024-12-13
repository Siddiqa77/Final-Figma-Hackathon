import Tags from "@/components/Homepage/Tags";
import Armchair from "@/components/productspagefolder/armchair";
import React from "react";

const data = [
  {
    title: "Product Details",
  },
];

const Products = () => {
  const current = data[0];
  return (
    <div>
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 ml-[28px] lg:ml-22">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Product Details
            </div>
          </div>
        </div>
      </section>

      <Armchair />
      <Tags />
    </div>
  );
};

export default Products;
