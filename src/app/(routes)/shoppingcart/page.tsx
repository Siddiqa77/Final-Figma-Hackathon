"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: 32,
      quantity: 1,
      image: "/cart1.png",
    },
    {
      id: 2,
      name: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: 32,
      quantity: 1,
      image: "/cart2.png",
    },
    {
      id: 3,
      name: "Ac vitae vestibulum",
      color: "Brown",
      size: "XL",
      price: 32,
      quantity: 1,
      image: "/cart3.png",
    },
    {
      id: 4,
      name: "Elit massa diam",
      color: "Brown",
      size: "XL",
      price: 32,
      quantity: 1,
      image: "/cart4.png",
    },
    {
      id: 5,
      name: "Proin pharetra elementum",
      color: "Brown",
      size: "XL",
      price: 32,
      quantity: 1,
      image: "/cart5.png",
    },
  ]);

  // Update Quantity
  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Calculate Subtotals
  const calculateSubtotals = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <section className="h-[286px] w-full bg-[#F6F5FF]">
        <div className="wrapper flex flex-col justify-center h-full">
          <p className="text-[36px] text-[#101750] font-bold">Shopping Cart</p>
          <span className="text-[16px] font-medium">
            Home . Pages <span className="text-[#FB2E86]">. cart</span>
          </span>
        </div>
      </section>

      <section className="wrapper my-[100px] flex flex-col lg:flex-row">
        {/* Cart Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-grow gap-10 xl:gap-0">
          {/* Product Section */}
          <div className="flex flex-col col-span-2">
            <p className="text-[#1D3178] text-[20px] font-semibold">Product</p>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex h-[87px] relative mt-[50px] gap-5"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={83}
                  height={87}
                />
                <div className="h-full flex flex-col gap-2">
                  <h2 className="text-[14px]">{item.name}</h2>
                  <p className="text-[12px] text-[#A1A8C1] font-medium">
                    Color: {item.color}
                  </p>
                  <p className="text-[12px] text-[#A1A8C1] font-medium">
                    Size: {item.size}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price Section */}
          <div className="flex flex-col text-[#1D3178]">
            <p className="text-[20px] font-semibold">Price</p>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex h-[87px] items-center mt-[50px]"
              >
                <p className="text-[14px] font-medium">${item.price}</p>
              </div>
            ))}
          </div>

          {/* Quantity Section */}
          <div className="flex flex-col text-[#1D3178]">
            <p className="text-[20px] font-semibold">Quantity</p>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex h-[87px] items-center mt-[50px]"
              >
                <div className="flex w-[120px] h-[40px] bg-[#F0EFF2] rounded-md items-center">
                  <button
                    className="h-full w-[40px] bg-[#E7E7EF] flex justify-center items-center rounded-l-md"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="h-full flex-grow flex justify-center items-center text-[#1D3178] font-medium">
                    {item.quantity}
                  </span>
                  <button
                    className="h-full w-[40px] bg-[#E7E7EF] flex justify-center items-center rounded-r-md"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="flex flex-col text-[#1D3178] items-start">
            <p className="text-[20px] font-semibold">Total</p>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex h-[87px] items-center mt-[50px]"
              >
                <p className="text-[14px] font-medium">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="col-span-2 gap-5 lg:gap-0 sm:col-span-3 sm:flex-row md:col-span-4 xl:col-span-5 flex flex-col md:flex-row justify-between mt-[50px]">
            <button
              className="rounded-[3px] text-[#ffffff] bg-[#FB2E86] w-[179px] h-[41px] font-medium  hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="w-full md:max-w-[371px] md:mx-auto mt-[60px] lg:mx-0 lg:mt-0">
          <div className="w-full flex flex-col items-center text-[#1D3178]"> 
            <p className="text-[20px] font-bold">Cart Totals</p>
            <div className="w-full h-[284px] flex flex-col p-7 bg-[#E8E6F1] rounded-[3px] mt-[45px] gap-[22px]">
              <div className="w-full flex justify-between items-end p-2 border-[3px] border-b-gray-300 rounded-[5px]">
                <p className="text-[18px] font-medium">Subtotals</p>
                <span className="text-[16px] font-medium">
                  ${calculateSubtotals()}
                </span>
              </div>
              <Link href="/checkout">
                <button className="rounded-[3px] text-[#ffffff] bg-[#19D16F] w-full h-[40px] font-medium hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
