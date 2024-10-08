"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import BinIcon from "@/components/icons/bin-icon";
import CountIncrement from "@/app/_components/count-icrement";
import { useCart } from "@/app/hooks/cart-context";
import EmptyCartState from "@/app/_components/empty-cart-state";

export default function CartList() {
  const { cartItems, removeFromCart, increaseItemCount, decreaseItemCount } =
    useCart();

  if (cartItems.length === 0) {
    return <EmptyCartState />;
  }

  return (
    <section className="col-span-4 lg:w-[750px] h-fit overflow-y-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-[#F9F1E7] hover:bg-[#F9F1E7]">
            <TableHead className="text-myBlack text-center">Product</TableHead>
            <TableHead className="text-myBlack hidden sm:table-cell">
              Price
            </TableHead>
            <TableHead className="text-myBlack">Quantity</TableHead>
            <TableHead className="text-myBlack"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item: ProductList, index: number) => (
            <TableRow key={index} className="hover:bg-transparent">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <img
                    src={item.productImage}
                    alt={item.name}
                    className="w-16 h-16 rounded-[7px]"
                  />
                  <div className="flex flex-col">
                    <p>{item.name}</p>
                    <p className="text-[#9F9F9F] flex sm:hidden">
                      {item.newPrice
                        ? "₦" + (item.count * item.newPrice).toLocaleString()
                        : "₦" +
                          (item.count * item.originalPrice).toLocaleString()}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-myBlack hidden sm:table-cell align-middle">
                {item.type === "discount"
                  ? "₦" + item.newPrice?.toLocaleString()
                  : "₦" + item.originalPrice.toLocaleString()}
              </TableCell>
              <TableCell>
                <CountIncrement
                  increaseFunction={() => increaseItemCount(item.id)}
                  decreaseFunction={() => decreaseItemCount(item.id)}
                  count={item.count}
                />
              </TableCell>
              <TableCell className="text-center">
                <Button
                  className="bg-transparent group hover:bg-transparent"
                  onClick={() => removeFromCart(item.id)}
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
