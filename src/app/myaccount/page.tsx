"use client";

import Tags from "@/components/Homepage/Tags";

const grids = [
  {
    title: "My Account",
  },
];

export default function MyAccount() {
  const current = grids[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20 ">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal font-['Lato'] cursor-pointer hover:text-[#fb2448] transition">
              My Account
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <main className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-[#fff] shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
          <h2 className="text-[32px] family font-bold text-center text-[#000]">
            Login
          </h2>
          <p className="text-center text-[#9096B2] font-['Lato'] text-[17px] mb-6">
            Please login using account details below.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#FB2E86] text-[#fff] w-full py-3 rounded-lg font-semibold hover:bg-pink-600"
            >
              Sign In
            </button>
          </form>

          <p className="text-centertext-center text-[#9096B2] font-['Lato'] text-[17px] mt-6">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-[#FB2E86] hover:underline">
              Create account
            </a>
          </p>
        </div>
      </main>
      <Tags />
    </div>
  );
}
