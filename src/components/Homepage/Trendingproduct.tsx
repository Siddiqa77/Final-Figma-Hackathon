import React from 'react'

const Trendingproduct = () => {
  return (
    <div>
{/* Heading */}
<h2 className="text-3xl font-bold text-center text-[#151875] mt-16">
        Trending Products
      </h2>


    <div className="container mx-auto px-4 py-10 space-y-10 mt-10">
      {/* Top Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Single Product */}
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 text-center flex flex-col items-center"
            >
              <img
                src={`/trendingpropic${index + 1}.png`} 
                alt={`Chair ${index + 1}`}
                className="w-full max-w-[150px] mb-4"
              />
              <h3 className="text-[#151875] font-semibold text-base mb-2">
                Cantilever chair
              </h3>
              <p className="text-sm text-[#7E81A2]">
                <span className="text-[#151875]">$26.00</span>{' '}
                <span className="line-through">$42.00</span>
              </p>
            </div>
          ))}
      </div>

      {/* Offers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Offer */}
        <div className="relative bg-[#f8f9fd] rounded-md p-6 flex items-center justify-between">
          <div>
            <h2 className="text-[#1A0B5B] font-bold text-xl md:text-2xl mb-2">
              23% off in all products
            </h2>
            <a href="#" className="text-pink-500 text-sm font-semibold">
              Shop Now
            </a>
          </div>
          <img
            src="/trendingpropic5.png"
            alt="Clock"
            className="w-[100px] md:w-[150px]"
          />
        </div>

        {/* Second Offer */}
        <div className="relative bg-[#f8f9fd] rounded-md p-6 flex items-center justify-between">
          <div>
            <h2 className="text-[#1A0B5B] font-bold text-xl md:text-2xl mb-2">
              23% off in all products
            </h2>
            <a href="#" className="text-pink-500 text-sm font-semibold">
              View Collection
            </a>
          </div>
          <img
            src="/trendingpropic6.png" 
            alt="Cabinet"
            className="w-[100px] md:w-[150px]"
          />
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-3"></div>
        <div className="col-span-1 space-y-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 flex items-center justify-between"
              >
                <img
                  src={`/smallchair1${index + 1}.png`} 
                  alt={`Seat ${index + 1}`}
                  className="w-[50px] h-[50px] object-cover"
                />
                <div>
                  <h3 className="text-[#151875] font-semibold text-sm">
                    Executive Seat chair
                  </h3>
                  <p className="text-[#7E81A2] text-sm">$32.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
 

    </div>
  )
}

export default Trendingproduct