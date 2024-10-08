"use client";

import { X } from "lucide-react";
import LinkOutlineButton from "./link-btn-outline";
import { useCart } from "../hooks/cart-context";
import { CartTotal } from "../functions/cart-totals";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeartIcon from "@/components/icons/heart-icon";
import { useLikedContext } from "../hooks/like-context";

export default function CartDialog({ type, data }: DialogProp) {
  const { removeFromCart } = useCart();
  const { toggleLikedItems } = useLikedContext();

  return (
    <div className="flex flex-col w-[417px] h-fit max-h-[500px] absolute right-0 bg-white overflow-y-auto">
      <p className="text-2xl font-semibold pt-2.5 pb-3 border-b border-[#D9D9D9] px-3">
        {type === "Shopping Cart" ? "Shopping Cart" : "Favourites"}
      </p>

      {data.length === 0 ? (
        <div className="flex flex-col w-full h-full items-center justify-center gap-2 py-20">
          <p className="text-sm text-myBlack">
            {type === "Shopping Cart"
              ? "Cart is currently empty."
              : "You have not liked any products"}
          </p>
          <LinkOutlineButton text="Add items" link={`/shop`} />
        </div>
      ) : (
        <>
          <div
            className={`flex flex-col gap-3 px-3 mt-7 ${
              type === "Shopping Cart" ? "pb-0" : "pb-5"
            }`}
          >
            {data.map((item: ProductList, index: number) => (
              <CartItem
                key={index}
                type={type}
                item={item}
                removeFunction={() =>
                  type === "Shopping Cart"
                    ? removeFromCart(item.id)
                    : toggleLikedItems(item.id)
                }
              />
            ))}
          </div>

          <p
            className={`${
              type === "Shopping Cart" ? "flex" : "hidden"
            } w-full py-3 text-sm px-3 gap-2`}
          >
            <span>Total:</span>
            <span className="text-myOrange">
              ₦{CartTotal().toLocaleString()}
            </span>
          </p>

          <div
            className={`${
              type === "Shopping Cart" ? "flex" : "hidden"
            } w-full gap-3 mt-3 pb-3 px-3 border-t border-[#D9D9D9] bg-white sticky bottom-0 pt-2`}
          >
            <LinkOutlineButton text="Cart" link={`/cart`} />
            <LinkOutlineButton text="Checkout" link={`/checkout`} />
          </div>
        </>
      )}
    </div>
  );
}

function CartItem({ type, item, removeFunction }: itemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={item.productImage}
          alt="Product Image"
          className="w-16 h-16 rounded-[5px]"
        />

        <div className="flex flex-col">
          <p
            className={`${
              type === "Shopping Cart" ? "flex" : "hidden"
            } text-sm`}
          >
            {item.name}
          </p>
          <Button asChild variant={`link`} className="w-fit h-fit p-1 pl-0">
            <Link
              href={`/shop/${item.id}`}
              className={`${type === "Favourites" ? "flex" : "hidden"} text-sm`}
            >
              {item.name}
            </Link>
          </Button>
          <p
            className={`${
              type === "Shopping Cart" ? "flex" : "hidden"
            } text-xs text-myBlack gap-1`}
          >
            <span>{item.count} X</span>
            <span className="text-myOrange">
              {item.type === "discount"
                ? " ₦" + item.newPrice?.toLocaleString()
                : " ₦" + item.originalPrice.toLocaleString()}
            </span>
          </p>
          <p
            className={`${
              type === "Favourites" ? "flex" : "hidden"
            } text-xs text-gray-500`}
          >
            {item.type === "discount"
              ? "₦" + item.newPrice?.toLocaleString()
              : "₦" + item.originalPrice.toLocaleString()}
          </p>
        </div>
      </div>

      <div
        onClick={removeFunction}
        className={`flex items-center justify-center h-5 w-5 rounded-full ${
          type === "Shopping Cart" ? "bg-[#9F9F9F]" : "bg-white"
        } text-white font-semibold leading-none text-sm`}
      >
        <X
          className={`${type === "Shopping Cart" ? "flex" : "hidden"} w-4 h-4`}
        />
        <HeartIcon
          className={`${
            type === "Favourites" ? "flex" : "hidden"
          } w-6 h-6 hover:stroke-myOrange transition-all duration-300 ${
            item.isLiked
              ? "fill-myOrange stroke-myOrange"
              : "fill-none stroke-black"
          }`}
        />
      </div>
    </div>
  );
}

interface DialogProp {
  type: "Shopping Cart" | "Favourites";
  data: ProductList[];
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
  isLiked?: boolean;
}

interface itemProps {
  type: "Shopping Cart" | "Favourites";
  item: ProductList;
  removeFunction: () => void;
}
