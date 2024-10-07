"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { productList } from "../data/product";

// Create the context
const AppContext = createContext<
  | {
      comparison: ProductList[];
      cartItems: ProductWithCount[];
      addToComparison: (product: ProductList) => void;
      removeFromComparison: (id: number) => void;
      addToCart: (productId: number) => void;
      removeFromCart: (productId: number) => void;
      increaseItemCount: (productId: number) => void;
      decreaseItemCount: (productId: number) => void;
    }
  | undefined
>(undefined);

// Create a provider
export function AppContextProvider({ children }: { children: ReactNode }) {
  const [comparison, setComparison] = useState<ProductList[]>([]);
  const [cartItems, setCartItems] = useState<ProductWithCount[]>([]);

  const allProducts: ProductWithCount[] = productList.map((product) => ({
    ...product,
    count: 1,
  }));

  function addToComparison(product: ProductList) {
    const isProductInComparison = comparison.some((p) => p.id === product.id);

    if (!isProductInComparison) {
      setComparison([product, ...comparison]); // Add product to comparison
    } else {
      toast.error("Kindly select another product");
    }
  }

  function removeFromComparison(id: number) {
    setComparison(comparison.filter((product) => product.id !== id));
  }

  function addToCart(productId: number) {
    const clickedProduct = allProducts.find((p) => p.id === productId);
    const product = cartItems.some((c) => c.id === clickedProduct?.id);

    if (!clickedProduct) {
      toast.error("Couldn't find product");
      return;
    }

    if (!product) {
      setCartItems((c) => [...c, clickedProduct]);
    } else {
      setCartItems((c) =>
        c.map((item) =>
          item.id === clickedProduct.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
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
    <AppContext.Provider
      value={{
        comparison,
        cartItems,
        addToComparison,
        removeFromComparison,
        addToCart,
        removeFromCart,
        increaseItemCount,
        decreaseItemCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the comparison context
export function useComparison() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useComparison must be used within a ComparisonProvider");
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
