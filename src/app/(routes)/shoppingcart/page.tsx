"use client";

import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  const {
    cartItems,
    setCartItems,
    removeFromCart,
    incrementItem,
    decrementItem,
  } = useCart();

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
    toast.success("Cart cleared successfully!");
  };

  const handleRemoveItem = (id: string) => {
      removeFromCart(id);
      toast.success("Item removed from cart!");
    };

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <Toaster position="top-right" reverseOrder={false} />
      <main className="max-w-7xl mx-auto mt-16 space-y-8">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Your cart is empty
            </h2>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="w-full min-w-[600px]">
              <div className="grid grid-cols-12 gap-2 border-b pb-4 text-sm md:text-base font-bold text-[#1D3178]">
                <p className="col-span-6">Product</p>
                <p className="col-span-2 text-center">Price</p>
                <p className="col-span-2 text-center">Quantity</p>
                <p className="col-span-2 text-center">Total</p>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 items-center gap-2 border-b py-4"
                >
                  <div className="col-span-6 flex items-center gap-4 relative">
                    <Image
                      className="w-16 h-16 md:w-24 md:h-24 rounded-md"
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                    />
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="absolute top-0 left-0 bg-red-600 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs"
                    >
                      ×
                    </button>
                    <div>
                      <h4 className="font-semibold text-sm md:text-base text-[#000]">
                        {item.name}
                      </h4>
                      {item.color && (
                        <p className="text-xs text-gray-500">
                          Color: {item.color}
                        </p>
                      )}
                      {item.size && (
                        <p className="text-xs text-gray-500">
                          Size: {item.size}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="col-span-2 text-center">${item.price}</p>
                  <div className="col-span-2 flex justify-center items-center gap-2">
                    <button
                      onClick={() => incrementItem(item.id)}
                      className="w-6 h-6 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="w-6 h-6 bg-gray-200 rounded"
                    >
                      -
                    </button>
                  </div>
                  <p className="col-span-2 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              className="bg-[#FB2E86] text-white py-2 px-4 rounded hover:bg-pink-700 transition"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="bg-gray-100 p-4 rounded-lg text-center w-full md:w-1/3">
              <h3 className="text-lg font-semibold text-[#1D3178]">
                Cart Totals
              </h3>
              <p className="mt-2 text-xl font-bold text-[#15245E]">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <button className="mt-4 bg-[#19D16F] text-white py-2 px-4 rounded hover:bg-green-700 transition">
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
