"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BinIcon from "@/components/icons/bin-icon";
import { productList } from "@/app/_data/product";
import Link from "next/link";
import EmptyCart from "@/components/icons/empty-cart";
import CountIncrement from "@/app/_components/count-icrement";

export default function CartList() {
  const [cartProduct, setProducts] = useState(
    productList.map((product) => ({
      ...product,
      count: 1, // Add a count property to each product
    }))
  );

  function increaseCount(index: number) {
    setProducts(
      cartProduct.map((product, i) =>
        i === index ? { ...product, count: product.count + 1 } : product
      )
    );
  }

  function decreaseCount(index: number) {
    setProducts(
      cartProduct.map((product, i) =>
        i === index && product.count > 1
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  }

  if (cartProduct.length === 0) {
    return (
      <section className="col-span-4 lg:col-span-3 h-fit flex flex-col items-center justify-center gap-10">
        <EmptyCart />
        <div className="flex flex-col gap-3 items-center">
          <p className="text-2xl text-myBlack font-semibold">
            Your cart is empty!!
          </p>
          <Button
            asChild
            className="font-white bg-myOrange font-medium hover:bg-[#b88e2fcc]"
          >
            <Link href={`/shop`}>Add Items</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="col-span-4 lg:col-span-3 h-fit overflow-y-auto">
      <Table className="min-w-[600px]">
        <TableHeader>
          <TableRow className="bg-[#F9F1E7] hover:bg-[#F9F1E7]">
            <TableHead className="text-myBlack text-center">Product</TableHead>
            <TableHead className="text-myBlack hidden sm:table-cell">
              Price
            </TableHead>
            <TableHead className="text-myBlack">Quantity</TableHead>
            <TableHead className="text-myBlack">Subtotal</TableHead>
            <TableHead className="text-myBlack"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProduct.map((item, index) => (
            <TableRow key={index} className="hover:bg-transparent">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <img
                    src={item.productImage}
                    alt={item.name}
                    className="w-20 h-20 rounded-[7px]"
                  />
                  <div className="flex flex-col">
                    <p className="text-[#9F9F9F]">{item.name}</p>
                    <p className="text-[#9F9F9F] flex sm:hidden">
                      {item.type === "discount"
                        ? "₦" + item.newPrice
                        : "₦" + item.originalPrice}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-[#9F9F9F] hidden sm:table-cell align-middle">
                {item.type === "discount"
                  ? "₦" + item.newPrice
                  : "₦" + item.originalPrice}
              </TableCell>
              <TableCell>
                <CountIncrement
                  increaseFunction={() => increaseCount(index)}
                  decreaseFunction={() => decreaseCount(index)}
                  count={item.count}
                />
              </TableCell>
              <TableCell>
                {item.type === "discount" ? item.newPrice : item.originalPrice}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  className="bg-transparent group hover:bg-transparent"
                  onClick={() =>
                    setProducts(cartProduct.filter((_, i) => i !== index))
                  }
                >
                  <BinIcon className="w-[22px] h-[22px] fill-[#b88e2fcc] group-hover:fill-myOrange transition-all duration-300" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
