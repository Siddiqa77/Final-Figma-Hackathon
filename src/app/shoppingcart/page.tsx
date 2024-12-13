import Image from "next/image";
import React from "react";

const ShoppingCart = () => {
  return (
    <>
      <section className="h-[286px] w-full bg-[#F6F5FF]">
        <div className="wrapper flex flex-col justify-center h-full">
          <p className="text-[36px] text-[#101750] font-bold">Shopping Cart</p>
          <span
            className="text-[16px
] font-medium"
          >
            Home . Pages <span className="text-[#FB2E86]">. cart</span>
          </span>
        </div>
      </section>
      <section className="wrapper my-[100px] flex flex-col lg:flex-row">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-grow gap-10 xl:gap-0">
          <div className="flex flex-col col-span-2 ">
            <p className="text-[#1D3178] text-[20px] font-semibold">Product</p>
            <div className="flex h-[87px] relative mt-[50px] gap-5">
              <Image src={"/cart1.png"} alt="p1" width={83} height={87} />
              <div className="h-full flex flex-col gap-2 ">
                <h2 className="text-[14px]">Ut diam consequat</h2>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Color:Brown
                </p>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Size:XL
                </p>
              </div>
            </div>
            <div className="flex h-[87px] relative mt-[50px] gap-5">
              <Image src={"/cart2.png"} alt="p1" width={83} height={87} />
              <div className="h-full flex flex-col gap-2 ">
                <h2 className="text-[14px]">Vel faucibus posuere</h2>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Color:Brown
                </p>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Size:XL
                </p>
              </div>
            </div>
            <div className="flex h-[87px] relative mt-[50px] gap-5">
              <Image src={"/cart3.png"} alt="p1" width={83} height={87} />
              <div className="h-full flex flex-col gap-2 ">
                <h2 className="text-[14px]">Ac vitae vestibulum</h2>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Color:Brown
                </p>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Size:XL
                </p>
              </div>
            </div>
            <div className="flex h-[87px] relative mt-[50px] gap-5">
              <Image src={"/cart4.png"} alt="p1" width={83} height={87} />
              <div className="h-full flex flex-col gap-2 ">
                <h2 className="text-[14px]">Elit massa diam</h2>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Color:Brown
                </p>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Size:XL
                </p>
              </div>
            </div>
            <div className="flex h-[87px] relative mt-[50px] gap-5">
              <Image src={"/cart5.png"} alt="p1" width={83} height={87} />
              <div className="h-full flex flex-col gap-2 ">
                <h2 className="text-[14px]">Proin pharetra elementum</h2>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Color:Brown
                </p>
                <p className="text-[12px] text-[#A1A8C1] font-medium">
                  Size:XL
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[#1D3178]">
            <p className="text-[20px] font-semibold">Price</p>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">32$</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">32$</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">32$</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">32$</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">32$</p>
            </div>
          </div>
          <div className="flex flex-col w-fit items-center">
            <p className="text-[#1D3178] text-[20px] font-semibold">Quantity</p>
            <div className="flex h-[87px] items-center mt-[50px] ">
              <div className="flex w-[51px] h-[15px] bg-[#F0EFF2] text-[#BEBFC2] ">
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  -
                </span>
                <span className="h-full flex-grow flex justify-center items-center">
                  1
                </span>
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  +
                </span>
              </div>
            </div>
            <div className="flex h-[87px] items-center mt-[50px] ">
              <div className="flex w-[51px] h-[15px] bg-[#F0EFF2] text-[#BEBFC2] ">
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  -
                </span>
                <span className="h-full flex-grow flex justify-center items-center">
                  1
                </span>
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  +
                </span>
              </div>
            </div>
            <div className="flex h-[87px] items-center mt-[50px] ">
              <div className="flex w-[51px] h-[15px] bg-[#F0EFF2] text-[#BEBFC2] ">
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  -
                </span>
                <span className="h-full flex-grow flex justify-center items-center">
                  1
                </span>
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  +
                </span>
              </div>
            </div>
            <div className="flex h-[87px] items-center mt-[50px] ">
              <div className="flex w-[51px] h-[15px] bg-[#F0EFF2] text-[#BEBFC2] ">
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  -
                </span>
                <span className="h-full flex-grow flex justify-center items-center">
                  1
                </span>
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  +
                </span>
              </div>
            </div>
            <div className="flex h-[87px] items-center mt-[50px] ">
              <div className="flex w-[51px] h-[15px] bg-[#F0EFF2] text-[#BEBFC2] ">
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  -
                </span>
                <span className="h-full flex-grow flex justify-center items-center">
                  1
                </span>
                <span className="h-full w-[12px] bg-[#E7E7EF] flex justify-center items-center">
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[#1D3178] items-start ">
            <p className=" text-[20px] font-semibold">Total</p>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">£219.00</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">£219.00</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">£219.00</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">£219.00</p>
            </div>
            <div className="flex h-[87px] items-center mt-[50px]">
              <p className="text-[14px] font-medium">£219.00</p>
            </div>
          </div>
          <div className="col-span-2 gap-5 lg:gap-0 sm:col-span-3 sm:flex-row md:col-span-4 xl:col-span-5 flex flex-col md:flex-row justify-between mt-[50px]">
            <button className="rounded-[3px] text-[#ffffff] bg-[#FB2E86] w-[179px] h-[41px] font-medium ">
              Update Cart
            </button>
            <button className="rounded-[3px] text-[#ffffff] bg-[#FB2E86] w-[179px] h-[41px] font-medium ">
              Clear cart
            </button>
          </div>
        </div>
        <div className="w-full md:max-w-[371px] md:mx-auto mt-[60px] lg:mx-0 lg:mt-0">
          <div className="w-full flex flex-col items-center text-[#1D3178]">
            <p className="text-[20px] font-bold">Cart Totals</p>
            <div className="w-full h-[284px] flex flex-col p-7 bg-[#E8E6F1] rounded-[3px] mt-[45px] gap-[22px]">
              <div className="w-full flex justify-between items-end p-2 border-[3px] border-b-gray-300 rounded-[5px]">
                <p className="text-[18px] font-medium">Subtotals</p>
                <span className="text-[16px] font-medium">£219.00</span>
              </div>
              <div className="w-full flex justify-between items-end p-2 border-[3px] border-b-gray-300 rounded-[5px]">
                <p className="text-[18px] font-medium">Totals</p>
                <span className="text-[16px] font-medium">£325.00</span>
              </div>
              <p className="text-[12px] text-[#8A91AB] font-medium">
                ✅ Shipping & taxes calculated at checkout
              </p>
              <button className="rounded-[3px] text-[#ffffff] bg-[#19D16F] w-full h-[40px] font-medium">
                Proceed to checkout
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center text-[#1D3178] mt-[35px]">
            <p className="text-[20px] font-bold">Calculate Shopping</p>
            <div className="w-full h-[284px] flex flex-col p-7 bg-[#E8E6F1] rounded-[3px] mt-[35px] gap-[20px]">
              <input
                className="text-[#C5CBE3] border-2 border-b-[#C5CBE3] ring-0 focus:outline-none p-2 bg-[#E8E6F1]"
                placeholder="Bangladesh"
              />
              <input
                className="text-[#C5CBE3] border-2 border-b-[#C5CBE3] ring-0 focus:outline-none p-2 bg-[#E8E6F1]"
                placeholder="Mirpur Dhaka - 1200"
              />
              <input
                className="text-[#C5CBE3] border-2 border-b-[#C5CBE3] ring-0 focus:outline-none p-2 bg-[#E8E6F1]"
                placeholder="Postal Code"
              />
              <button className="rounded-[3px] text-[#ffffff] bg-[#FB2E86] w-[179px] h-[41px] font-medium ">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
