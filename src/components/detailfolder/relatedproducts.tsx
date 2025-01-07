import React from 'react'

const Relatedproducts = () => {
  return (
    <div>

<section className="wrapper mt-28 px-4">
        <div className="grid sm:grid-cols-2 md:flex md:justify-between gap-6">
          <div className="text-[#151875] text-xl sm:text-2xl font-semibold underline">Description</div>
          <div className="text-[#151875] text-xl sm:text-2xl font-semibold">Additional Info</div>
          <div className="text-[#151875] text-xl sm:text-2xl font-semibold">Reviews</div>
          <div className="text-[#151875] text-xl sm:text-2xl font-semibold">Video</div>
        </div>
      
        <div className="mt-8">
          <div className="text-[#151875] text-lg sm:text-xl font-semibold">Varius tempor.</div>
          <p className="text-[#a9acc6] text-sm sm:text-base leading-relaxed mt-4">
            Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, 
            mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius 
            proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. 
            Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
          </p>
        </div>
      
        <div className="mt-8">
          <div className="text-[#151875] text-lg sm:text-xl font-semibold">More details</div>
          <ul className="list-disc text-[#a9acc6] text-sm sm:text-base leading-relaxed ml-6 mt-4">
            <li>Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.</li>
            <li>Montes, mauris varius ac est bibendum.</li>
            <li>Velit consectetur neque, elit, aliquet.</li>
            <li>Non varius proin sed urna, egestas consequat laoreet diam tincidunt.</li>
          </ul>
        </div>
      
        <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold mt-12">Related Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {["detailpic1.png", "detailpic2.png", "detailpic3.png", "detailpic4.png"].map((src, idx) => (
            <div key={idx} className="text-center">
              <img className="w-full max-w-[270px] h-auto rounded-md mx-auto"
               src={`/${src}} alt={Product ${idx + 1}`} />
              <div className="text-[#151875] text-sm font-normal mt-2">$43.00</div>
              <div className="text-[#151875] text-base font-semibold">Mens Fashion Wear</div>
            </div>
          ))}
        </div>
      </section>
        
          
    </div>
  )
}

export default Relatedproducts