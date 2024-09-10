"use client";

import React, { useState } from "react";
import Products from "./compared-products";
import { toast } from "sonner";
import { productList } from "@/app/_data/product";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function AddProducts() {
  const [comparison, setComparison] =
    useState<comparedProduct[]>(comparedProducts);

  function handleClick(index: number) {
    const newProduct = productList[index];

    setComparison((c) => {
      if (c.some((product) => product.id === newProduct.id)) {
        toast.error("Kindly select another product");
        return c;
      }
      return [...c, newProduct];
    });
  }

  return (
    <>
      <Products item={comparison} />

      <div
        className={`${
          comparison.length === 3 ? "hidden" : "flex"
        } w-full flex-col gap-1`}
      >
        <p className="text-xl font-medium">Add a product</p>

        <DropdownMenu>
          <DropdownMenuTrigger className="w-full bg-myOrange text-sm text-white font-medium h-10 flex items-center justify-start px-3 rounded-[7px]">
            Choose a product
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px] overflow-y-auto">
            {productList.map((item: ProductList, index: number) => (
              <DropdownMenuItem
                key={index}
                className="px-3 flex items-center w-full gap-3"
                onClick={() => handleClick(index)}
              >
                <img
                  src={item.productImage}
                  alt="Product image"
                  className="w-10 h-10 rounded-[3px]"
                />

                <div className="flex flex-col">
                  <p className="text-base font-semibold">{item.name}</p>

                  <div className={`flex items-center gap-2`}>
                    <p className="text-[#3A3A3A] text-xs font-semibold">
                      {item.type === "discount"
                        ? item.newPrice
                        : item.originalPrice}
                    </p>
                    <p
                      className={`${
                        item.type === "discount" ? "flex" : "hidden"
                      } text-[#B0B0B0] line-through text-xs`}
                    >
                      {item.originalPrice}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

const comparedProducts: ProductList[] = [];

interface ProductList {
  id: number;
  type: "normal" | "discount" | "new";
  productImage: string;
  name: string;
  description: string;
  newPrice: string;
  originalPrice: string;
  discount: string;
}

type comparedProduct = ProductList;
