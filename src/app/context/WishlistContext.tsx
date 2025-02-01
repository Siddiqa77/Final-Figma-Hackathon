"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface Wishlist {
  id: string;
  image: string;
  name: string;
  color?: string;
  size?: string;
  price: number;
  quantity: number;
}
// Context type define karna
interface WishlistContextType {
  wishlist: Wishlist[];
  addToWishlist: (item: any) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<Wishlist[]>(() => {
    const savedWishlistItems = localStorage.getItem("wishlist");
    return savedWishlistItems ? JSON.parse(savedWishlistItems) : [];
  });

  // LocalStorage se data load karna
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Wishlist update hone par localStorage save karna
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Product Add karne ka function
  const addToWishlist = (item: any) => {
    setWishlist((prev) => {
      const exists = prev.some((prod) => prod.id === item.id);
      if (!exists) {
        return [...prev, item]; // Agar product exist nahi karta to add karna
      }
      return prev; // Agar already exist hai to return prev
    });
  };

  // ✅ Product Remove karne ka function
  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((prod) => prod.id !== id));
    
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// ✅ Hook banane ka tareeqa
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
