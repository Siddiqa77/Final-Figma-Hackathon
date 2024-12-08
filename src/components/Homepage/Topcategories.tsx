import React from 'react';

const Topcategories = () => {
  return (
    <div className="container mx-auto px-4 py-10 mb-5 wrapper">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#151875] mb-10">
        Top Categories
      </h2>

      {/* Wrapper for Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card Component - First */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto relative flex flex-col items-center">
          <div className="w-[269px] h-[269px] aspect-square bg-[#f6f7fb] rounded-full shadow-md flex items-center justify-center">
            <img
              src="/topcategoriespic1.png"
              alt="Category 1"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-[#151875] text-xl font-semibold">Mini LCW Chair</h3>
            <p className="text-[#151875] text-base font-normal">$56.00</p>
          </div>
        </div>

        {/* Card Component - Second */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto relative flex flex-col items-center">
          <div className="w-[269px] h-[269px] aspect-square bg-[#f6f7fb] rounded-full shadow-md flex items-center justify-center">
            <img
              src="/topcategoriespic2.png"
              alt="Category 2"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-[#151875] text-xl font-semibold">Modern Chair</h3>
            <p className="text-[#151875] text-base font-normal">$72.00</p>
          </div>
        </div>

        {/* Card Component - Third */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto relative flex flex-col items-center">
          <div className="w-[269px] h-[269px] aspect-square bg-[#f6f7fb] rounded-full shadow-md flex items-center justify-center">
            <img
              src="/topcategoriespic3.png"
              alt="Category 3"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-[#151875] text-xl font-semibold">Luxury Armchair</h3>
            <p className="text-[#151875] text-base font-normal">$89.00</p>
          </div>
        </div>

        {/* Card Component - Fourth */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-auto relative flex flex-col items-center">
          <div className="w-[269px] h-[269px] aspect-square bg-[#f6f7fb] rounded-full shadow-md flex items-center justify-center">
            <img
              src="/topcategoriespic4.png"
              alt="Category 4"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-[#151875] text-xl font-semibold">Comfy Sofa</h3>
            <p className="text-[#151875] text-base font-normal">$102.00</p>
          </div>
        </div>
      </div>
      <div className="w-[66.07px] h-[14.60px] relative">
     
      <svg  className="ml-[600px]"xmlns="http://www.w3.org/2000/svg" width="67" height="15" viewBox="0 0 67 15" fill="none">
<rect y="7.07129" width="10" height="9.8913" rx="4.94565" transform="rotate(-45 0 7.07129)" fill="#FB2E86"/>
<rect x="26.7071" y="7.60645" width="9" height="8.8913" rx="4.44565" transform="rotate(-45 26.7071 7.60645)" stroke="#FB2E86"/>
<rect x="52.7071" y="7.60645" width="9" height="8.8913" rx="4.44565" transform="rotate(-45 52.7071 7.60645)" stroke="#FB2E86"/>
</svg> 
 
</div>
    </div>
  );
};

export default Topcategories;
