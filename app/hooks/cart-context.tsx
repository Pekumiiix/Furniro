"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { productList } from "../data/product";

// Cart context
const CartContext = createContext<
  | {
      cartItems: ProductWithCount[];
      addToCart: (productId: number) => void;
      removeFromCart: (productId: number) => void;
      increaseItemCount: (productId: number) => void;
      decreaseItemCount: (productId: number) => void;
    }
  | undefined
>(undefined);

// Cart Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<ProductWithCount[]>([]);

  const allProducts: ProductWithCount[] = productList.map((product) => ({
    ...product,
    count: 1,
  }));

  function addToCart(productId: number) {
    const clickedProduct = allProducts.find((p) => p.id === productId);
    const product = cartItems.some((c) => c.id === clickedProduct?.id);

    if (!clickedProduct) {
      toast.error("Couldn't find product");
      return;
    }

    if (!product) {
      setCartItems((c) => [...c, clickedProduct]);
      toast.success("Product has been added to cart");
    } else {
      setCartItems((c) =>
        c.map((item) =>
          item.id === clickedProduct.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
      toast.success("Increased product count");
    }
  }

  function removeFromCart(productId: number) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function increaseItemCount(productId: number) {
    const clickedProduct = allProducts.find((p) => p.id === productId);

    setCartItems((c) =>
      c.map((item) =>
        item.id === clickedProduct?.id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  }

  function decreaseItemCount(productId: number) {
    const clickedProduct = allProducts.find((p) => p.id === productId);

    setCartItems((c) =>
      c.map((item) =>
        item.id === clickedProduct?.id
          ? { ...item, count: Math.max(1, item.count - 1) }
          : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseItemCount,
        decreaseItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

interface ProductList {
  id: number;
  type: "normal" | "discount" | "new";
  productImage: string;
  name: string;
  description: string;
  newPrice?: number;
  originalPrice: number;
  discount?: string;
}

interface ProductWithCount extends ProductList {
  count: number;
}
