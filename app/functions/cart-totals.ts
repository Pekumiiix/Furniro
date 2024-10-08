"use client";

import { useCart } from "../hooks/cart-context";

export function cartTotal() {
  const { cartItems } = useCart();

  return cartItems.reduce((acc: number, item: ProductList) => {
    const price =
      item.type === "discount" && item.newPrice !== undefined
        ? item.newPrice
        : item.originalPrice;

    return acc + price * (item.count || 1);
  }, 0);
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
  count: number;
}
