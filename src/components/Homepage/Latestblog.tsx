import React from 'react';

const Latestblog = () => {
  return (
     <div>
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#151875] mb-4">
        Latest Blog
      </h2>
    <div className="wrapper flex flex-wrap gap-12 justify-center">
      {/* First Card */}
      <div className="w-full sm:w-[370px] h-auto relative">
        <div className="relative bg-[#fff] rounded-[5px] ">
          <div className="w-full h-[255px] bg-[#fff] rounded-t-[5px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/latestblog1.png"
              alt="Product Image"
            />
          </div>
          <div className="p-4">
            <div className="text-[#151875] text-lg font-bold">
              Top essential Trends in 2021
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-[#151875]">
              <span>SaberAli</span>
              <span>|</span>
              <span>21 August, 2020</span>
            </div>
            <p className="mt-4 text-[#72718f] text-base leading-[1.8]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a
              href="#"
              className="mt-4 block text-[#151875] underline text-base"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-full sm:w-[370px] h-auto relative">
        <div className="relative bg-[#fff] rounded-[5px] ">
          <div className="w-full h-[255px] bg-[#fff] rounded-t-[5px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/latestblog2.png"
              alt="Product Image"
            />
          </div>
          <div className="p-4">
            
            <div className="text-[#FB2E86] text-lg font-bold">
                
              Top essential Trends in 2021
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-[#151875]">
              <span>Surfauxion</span>
              <span>|</span>
              <span>21 August, 2020</span>
            </div>
            <p className="mt-4 text-[#72718f] text-base leading-[1.8]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a
              href="#"
              className="mt-4 block text-[#FB2E86] underline text-base"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="w-full sm:w-[370px] h-auto relative">
        <div className="relative bg-[#fff] rounded-[5px] ">
          <div className="w-full h-[255px] bg-[#fff] rounded-t-[5px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/latestblog3.png"
              alt="Product Image"
            />
          </div>
          <div className="p-4">
            <div className="text-[#151875] text-lg font-bold">
              Top essential Trends in 2021
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-[#151875]">
              <span>SaberAli</span>
              <span>|</span>
              <span>21 August, 2020</span>
            </div>
            <p className="mt-4 text-[#72718f] text-base leading-[1.8]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a
              href="#"
              className="mt-4 block text-[#151875] underline text-base"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Latestblog;
