import * as React from "react";

const grids = [
  {
    title: "Contact Us",
    description: "We're here to help you with anything you need. Contact us today to find the perfect solution.",
  },
];

function InformationSection() {
  const current = grids[0];
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Contact Us
            </div>
          </div>
        </div>
      </section>
      <main className="self-center mt-32 max-w-full w-full max-md:mt-10 wrapper">
        <div className="flex gap-5 max-md:flex-col">
          {/* Information Section */}
          <section className="flex flex-col w-full max-md:ml-0">
            <div className="flex flex-col items-start w-full max-md:mt-10">
              <h1 className="text-4xl font-bold leading-none text-violet-950 family">
                Information About us
              </h1>
              <p className="self-stretch mt-7 text-base font-semibold leading-7 text-[#8A8FB9]">
                {current.description}
              </p>
              <div className="flex gap-3.5 mt-14 max-md:mt-10" role="presentation">
                <div className="flex shrink-0 bg-violet-700 rounded-full h-[25px] w-[25px]" />
                <div className="flex shrink-0 bg-pink-500 rounded-full h-[25px] w-[25px]" />
                <div className="flex shrink-0 bg-cyan-400 rounded-full h-[25px] w-[25px]" />
              </div>
            </div>
          </section>

          {/* Contact and Support Section */}
          <section className="flex flex-col w-full max-md:ml-0">
            <div className="grow max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col">
                {/* Contact Way */}
                <div className="flex flex-col w-full max-md:ml-0">
                  <div className="flex flex-col w-full text-base font-semibold leading-relaxed text-slate-400 max-md:mt-8">
                    <h2 className="text-4xl font-bold leading-none text-violet-950 max-md:mr-2.5 family">
                      Contact Way
                    </h2>
                    <div role="list" aria-label="Contact information">
                      <div className="text-base text-[#8a8fb9]">Tel: 877-67-88-99</div>
                      <div className="text-base text-[#8a8fb9]">E-Mail: shop@store.com</div>
                    </div>
                  </div>
                </div>

                {/* Support Information */}
                <div className="flex flex-col w-full max-md:ml-0">
                  <div className="flex flex-col mt-10 w-full text-base font-semibold leading-relaxed text-slate-400 max-md:mt-10">
                    <div role="list" aria-label="Additional services">
                      <div className="text-base text-[#8a8fb9]">Support Forum</div>
                      <div className="text-base text-[#8a8fb9]">For over 24hr</div>
                      <div className="text-base text-[#8a8fb9]">20 Margaret st, London</div>
                      <div className="text-base text-[#8a8fb9]">Great britain, 3NM98-LK</div>
                      <div className="text-base text-[#8a8fb9]">Free standard shipping on all orders.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Right side */}
      <section className="relative flex flex-col md:flex-row md:justify-between mt-32 max-w-full">
        <div className="w-full md:w-1/2 p-5">
          {/* Contact Form */}
          <div className="w-full bg-white shadow-md rounded-md p-5">
            <div className="flex flex-col space-y-4">
              <input className="border border-gray-300 p-2 rounded-md" placeholder="Your Name*" />
              <input className="border border-gray-300 p-2 rounded-md" placeholder="Your E-mail" />
              <input className="border border-gray-300 p-2 rounded-md" placeholder="Subject*" />
              <textarea className="border border-gray-300 p-2 rounded-md" placeholder="Type Your Message*"></textarea>
            </div>
            <button className="bg-[#fb2e86] text-white py-2 px-4 rounded-md mt-4">Send Mail</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-5 mt-10 md:mt-0">
          {/* Additional Information */}
          <div className="w-full bg-white shadow-md rounded-md p-5">
            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
            <p className="text-gray-600">Feel free to reach out to us anytime. We are here to assist you 24/7.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InformationSection;
