"use client";

import HeroBelowSection from "@/components/griddefaultpages/HeroBelowSection";
import ShopgridProduct from "@/components/griddefaultpages/shopgridProduct";
import Tags from "@/components/Homepage/Tags";

const grids = [
  {
    title: "Shop Grid Default",
  
  },
];

function GridDefault() {
  const current = grids[0]; 

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 ml-20">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="text-[#000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Wood Chair
            </div>
            <div className="text-[#000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Plastic Chair
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Sofa Collection
            </div>
          </div>
        </div>
      </section>

      {/* Other Components */}
      <HeroBelowSection />
      <ShopgridProduct />
      <Tags />
    </div>
  );
}

export default GridDefault;
