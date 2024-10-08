"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

// Comparison context
const ComparisonContext = createContext<
  | {
      comparison: ProductList[];
      addToComparison: (product: ProductList) => void;
      removeFromComparison: (id: number) => void;
    }
  | undefined
>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [comparison, setComparison] = useState<ProductList[]>([]);

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

  return (
    <ComparisonContext.Provider
      value={{
        comparison,
        addToComparison,
        removeFromComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
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
