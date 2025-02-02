"use client";
import { createContext, useContext, useState, useEffect } from "react";


interface CartItem {
  id: string;
  image: string;
  name: string;
  color?: string;
  size?: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  setCartItems: (items: CartItem[]) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Load cart from localStorage 
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev: CartItem[]) => {
      const existingItem = prev.find((i) => i.id === item.id);
    
      let updatedCart;

      if (existingItem) {
        // Update the quantity of the existing item
        updatedCart = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add a new item to the cart
        updatedCart = [...prev, { ...item, quantity: 1 }];
      }

      // Update localStorage immediately with the updated cart
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev: CartItem[]) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart)); 
     
      return updatedCart;
      
      
      
    });
  };

  const clearCart = () => {
    setCartItems([]); // Clear cart state
    localStorage.removeItem("cartItems");
     
  };

  const incrementItem = (id: string) => {
    setCartItems((prev: CartItem[]) =>
      prev.map((item: CartItem) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (id: string) => {
    setCartItems((prev: CartItem[]) =>
      prev.map((item: CartItem) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        incrementItem,
        decrementItem,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use Cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
