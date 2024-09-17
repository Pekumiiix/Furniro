import { Button } from "@/components/ui/button";
import { productList } from "../_data/product";
import { X } from "lucide-react";

export default function CartDialog() {
  return (
    <div className="flex flex-col w-[417px] h-[500px] absolute right-0 bg-white">
      <p className="text-2xl font-semibold pt-2.5 pb-3 mb-7 border-b border-[#D9D9D9] px-3">
        Shopping Cart
      </p>

      <div className="flex flex-col gap-3 px-3">
        <CartItem />
        <CartItem />
      </div>

      <div className="absolute bottom-0 flex flex-col w-full">
        <p className="w-full pb-3 border-b border-[#D9D9D9] text-sm px-3">
          Subtotal: <span className="text-myOrange">₦520,000.00</span>
        </p>

        <div className="flex w-full gap-3 mt-3 pb-3 px-3">
          <Button
            variant={`outline`}
            className="border-myOrange text-xs text-myOrange"
          >
            Cart
          </Button>
          <Button
            variant={`outline`}
            className="border-myOrange text-xs text-myOrange"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={productList[0].productImage}
          alt="Product Image"
          className="w-20 h-20 rounded-[5px]"
        />

        <div className="flex flex-col">
          <p>{productList[0].name}</p>
          <p className="text-sm text-myBlack">
            1 X{" "}
            <span className="text-myOrange">
              {productList[0].type === "discount"
                ? "₦" + productList[0].newPrice
                : "₦" + productList[0].originalPrice}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#9F9F9F] text-white font-semibold leading-none text-sm">
        <X className="w-4 h-4" />
      </div>
    </div>
  );
}
