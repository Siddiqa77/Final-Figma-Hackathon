"use client";

import { sanityClient } from "@/sanity/sanity";
import Detailpage from "@/components/detailfolder/detailpage";
import Relatedproducts from "@/components/detailfolder/relatedproducts";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useNotifications } from "@/components/context/NotificationContext";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addNotification } = useNotifications();

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
    setIsCartOpen(true);
    addNotification(
      `${quantity} ${product.name}(s) added to the cart!`,
      "success"
    );
    setQuantity(1); 
  };

  const handleProceedToCheckout = () => {
    console.log("Proceeding to checkout with items:", cart);
  };

  const addToWishlist = (product: any) => {
    console.log(`${product.name} added to wishlist`);
    addNotification(`${product.name} added to wishlist!`, "success");
  };

  const handleDeleteFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "item" && id == "${id}"][0]{
        id,
        name,
        price,
        description,
        discountPercentage,
        "image": image.asset->url,
      }`;

      const product = await sanityClient.fetch(query);
      setProduct(product);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Detailpage />
      <div className="flex flex-col justify-between lg:flex-row gap-6 p-4 md:mt-10">
        <div className="md:flex md:flex-col gap-12 flex justify-evenly object-cover">
          <div className="w-20 h-20 flex lg:flex-col gap-6 ml-3 lg:ml-[150px] shadow-lg  transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/armchair1.png"
              alt={product.name}
              width={200}
              height={300}
              className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
            />
          </div>
          <div className="w-20 h-20 flex lg:flex-col gap-6 ml-5 lg:ml-[150px] shadow-lg  transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/armchair2.png"
              alt={product.name}
              width={200}
              height={300}
              className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
            />
          </div>
          <div className="w-20 h-20 flex lg:flex-col gap-6 ml-5 lg:ml-[150px] shadow-lg  transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/armchair3.png"
              alt={product.name}
              width={200}
              height={300}
              className="w-[151px] h-20 md:w-28 md:h-28 object-cover cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center shadow-xl transform transition-transform duration-300 hover:scale-105">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={300}
            className="max-w-full lg:w-[350px] lg:h-[400px] object-contain rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-xl md:text-4xl text-[#0D134E] font-semibold family">
            {product.name}
          </h1>
          <div className="flex items-center gap-2">
            <span>⭐⭐⭐⭐⭐✔ </span>
            <span className=" text-[#151875] text-sm">(22) Reviews</span>
          </div>
          <div className="flex flex-col-2 items-center space-x-4">
            <span className="text-lg md:text-xl font-bold">
              ${product.price}
            </span>
            <span className="text-lg md:text-xl font-bold text-[#19D16F]">
              Available in Stock
            </span>
          </div>
          <p className="text-[16px] font-semibold md:text-[18px] text-[#A9ACC6] leading-[29px] family">
            Our product is designed with quality, innovation, and customer
            satisfaction in mind. Crafted using premium materials and advanced
            technology, it offers a perfect balance of functionality,
            durability, and style. {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              ➖
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              ➕
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="px-4  items-center py-3 sm:py-4 rounded-md inline-block text-[16px] sm:text-[18px] md:text-[20px] ml-2 sm:ml-8 md:ml-16 bg-[#e12570] text-[#fff] hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
            >
              Add to Cart 🤍
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => addToWishlist(product)}
              className="px-4  items-center py-3 sm:py-4 rounded-md inline-block text-[12px] sm:text-[18px] md:text-[20px] ml-2 sm:ml-8 md:ml-16 bg-[#d1a82f] text-[#000] hover:font-bold transition duration-300 ease-in-out transform hover:bg-yellow-500 hover:scale-105"
            >
              Add to Wishlist 💛
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section>
        <Relatedproducts />
      </section>

      {/* Slide Cart */}
      <div
        className={`fixed top-[35px] right-0 h-[85%] w-72  bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4 flex justify-between items-center bg-[#e12570] text-white">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>❌</button>
        </div>
        <div className="p-4 space-y-4 flex flex-col h-full">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty</p>
          ) : (
            <div className="flex-grow space-y-4 overflow-y-auto">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h3 className="text-sm font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ${item.price} x {item.quantity} = $
                      {item.price * item.quantity}
                    </p>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-cover rounded-md"
                  />
                  <button
                    onClick={() => handleDeleteFromCart(index)}
                    className="text-red-500 hover:text-red-700 text-lg transition duration-300"
                    aria-label="Delete item"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
          {cart.length > 0 && (
            <div className="mt-auto">
              <Link href={`/shoppingcart`}>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-[#e12570] text-white py-2 rounded-md mb-2 transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
                >
                  Go to Cart
                </button>
              </Link>
              <Link href={`/checkout`}>
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-[#19D16F] text-white py-2 rounded-md hover:font-bold transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
