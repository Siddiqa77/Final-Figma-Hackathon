"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/banner3.png", 
    lampImage: "/light.png", 
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/banner3.png", 
    lampImage: "/light.png", 
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/banner3.png", 
    lampImage: "/light.png",
  },
];

function HeroSection() {
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
    <section className="relative bg-[#F2F0FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-350px] left-[-40px] z-10">
          <Image
            src={current.lampImage}
            alt="Lamp"
            width={387} 
            height={387} 
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-[#FB2E86] font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#000] leading-tight mt-2 family tracking-[0.795] ">
          {current.title}
        </h1>
        <p className="text-[#8A8FB9] text-[16px] mt-4 leading-relaxed font-['Lato'] ">
          {current.description}
        </p>
        <Link
          href="/griddefault"
          className="inline-block bg-[#FB2E86] text-[#fff] text-[17px] font-medium py-3 px-6 rounded-md mt-6  transition-all duration-300 w-1/3 text-center"
        >
          {current.buttonText}
        </Link>
      </div>

      {/* Right Side: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-[#ECD2FA59] rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src={current.chairImage}
            alt="Banner Chair"
            width={651}
            height={651}
            className="object-contain w-full h-auto"
          />
        </div>
         {/* Discount tag */}
         <div className="absolute top-8 right-5 w-[125px] h-[130px] bg-[#00C1FE] text-[#fff] text-[30px] family font-semibold py-5 px-7 text-center rounded-full">
        50% Off
        </div> 
        </div> 


      {/* Slider Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-[#FB2E86]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❯
      </button>
    </section>
  );
}

export default HeroSection;