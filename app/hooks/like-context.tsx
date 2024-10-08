"use client";

import { createContext, useContext, useState, ReactNode } from "react";
//import { productList } from "../data/product";
import { toast } from "sonner";
import { productList } from "../data/product";

const LikeContext = createContext<
  | {
      likedItems: ProductWithLiked[];
      toggleLikedItems: (productId: number) => void;
    }
  | undefined
>(undefined);

export function LikeProvider({ children }: { children: ReactNode }) {
  const [likedItems, setLikedItems] = useState<ProductWithLiked[]>([]);

  const allProducts: ProductWithLiked[] = productList.map((product) => ({
    ...product,
    isLiked: false,
  }));

  function toggleLikedItems(productId: number) {
    const clickedProduct = allProducts.find((p) => p.id === productId);

    if (!clickedProduct) {
      toast.error("Couldn't find product");
      return;
    }

    const isProductLiked = likedItems.some(
      (item) => item.id === clickedProduct.id && item.isLiked
    );

    if (isProductLiked) {
      // If the product is already liked, set 'isLiked' to false and remove from the list
      setLikedItems((currentLikedItems) =>
        currentLikedItems
          .map((item) =>
            item.id === clickedProduct.id ? { ...item, isLiked: false } : item
          )
          .filter((item) => item.id !== clickedProduct.id)
      );
    } else {
      // If the product is not liked, set 'isLiked' to true and add to the likedItems list
      setLikedItems((currentLikedItems) => [
        ...currentLikedItems,
        { ...clickedProduct, isLiked: true },
      ]);
    }
  }

  return (
    <LikeContext.Provider value={{ likedItems, toggleLikedItems }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLikedContext() {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLikedContext must be used within a CartProvider");
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
  count?: number;
}

interface ProductWithLiked extends ProductList {
  isLiked: boolean;
}
