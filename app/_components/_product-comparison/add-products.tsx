"use client";

import Products from "./compared-products";
import { productList } from "@/app/_data/product";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useComparison } from "@/app/_hooks/app-context";

export default function AddProducts() {
  const { comparison, addToComparison } = useComparison();

  function handleClick(index: number) {
    const newProduct = productList[index];

    addToComparison(newProduct);
  }

  return (
    <>
      <Products />

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
                        ? "₦" + item.newPrice?.toLocaleString()
                        : "₦" + item.originalPrice.toLocaleString()}
                    </p>
                    <p
                      className={`${
                        item.type === "discount" ? "flex" : "hidden"
                      } text-[#B0B0B0] line-through text-xs`}
                    >
                      {"₦" + item.originalPrice.toLocaleString()}
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
