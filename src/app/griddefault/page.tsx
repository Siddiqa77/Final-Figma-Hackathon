"use client";

import HeroBelowSection from "@/components/griddefaultpages/HeroBelowSection";
import ShopgridProduct from "@/components/griddefaultpages/shopgridProduct";
import Tags from "@/components/Homepage/Tags";
import { useState } from "react";


const slides = [
  {
    title: "Shop Grid Default",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
];

function GridDefault() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <div>
    <section className="relative bg-gray-100 py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        {/* <p className="text-sm text-pink-500 font-medium">
         Shop Grid Default
        </p> */}
        <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 ml-16">
          {current.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="text-[#000] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
            Wood Chair
          </div>
          <div className="text-[#000] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
            Plastic Chair
          </div>
          <div className="text-[#FB2E86] text-lg font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
            Sofa Collection
          </div>
        </div>
      </div>

    
    </section>
   
<HeroBelowSection/>
<ShopgridProduct/>
<Tags/> 
    </div>
  );
}

export default GridDefault;
