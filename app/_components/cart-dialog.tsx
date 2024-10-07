"use client";

import { X } from "lucide-react";
import LinkOutlineButton from "./link-btn-outline";
import { useComparison } from "../hooks/app-context";
import { cartTotal } from "../functions/cart-totals";

export default function CartDialog() {
  const { cartItems, removeFromCart } = useComparison();

  return (
    <div className="flex flex-col w-[417px] h-[500px] absolute right-0 bg-white overflow-y-auto">
      <p className="text-2xl font-semibold pt-2.5 pb-3 border-b border-[#D9D9D9] px-3">
        Shopping Cart
      </p>

      {cartItems.length === 0 ? (
        <div className="flex flex-col w-full h-full items-center justify-center gap-2">
          <p className="text-sm text-myBlack">Cart is currently empty.</p>
          <LinkOutlineButton text="Add items" link={`/shop`} />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 px-3 mt-7">
            {cartItems.map((item: ProductList, index: number) => (
              <CartItem
                key={index}
                item={item}
                removeFunction={() => removeFromCart(item.id)}
              />
            ))}
          </div>

          <p className="w-full py-3 text-sm px-3">
            Total:{" "}
            <span className="text-myOrange">
              ₦{cartTotal().toLocaleString()}
            </span>
          </p>

          <div className="flex w-full gap-3 mt-3 pb-3 px-3 border-t border-[#D9D9D9] bg-white absolute bottom-0 pt-2">
            <LinkOutlineButton text="Cart" link={`/cart`} />
            <LinkOutlineButton text="Checkout" link={`/checkout`} />
          </div>
        </>
      )}
    </div>
  );
}

function CartItem({ item, removeFunction }: itemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={item.productImage}
          alt="Product Image"
          className="w-16 h-16 rounded-[5px]"
        />

        <div className="flex flex-col">
          <p className="text-sm">{item.name}</p>
          <p className="text-xs text-myBlack">
            {item.count} X{" "}
            <span className="text-myOrange">
              {item.type === "discount"
                ? "₦" + item.newPrice?.toLocaleString()
                : "₦" + item.originalPrice.toLocaleString()}
            </span>
          </p>
        </div>
      </div>

      <div
        onClick={removeFunction}
        className="flex items-center justify-center h-5 w-5 rounded-full bg-[#9F9F9F] text-white font-semibold leading-none text-sm"
      >
        <X className="w-4 h-4" />
      </div>
    </div>
  );
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

interface itemProps {
  item: ProductList;
  removeFunction: () => void;
}
