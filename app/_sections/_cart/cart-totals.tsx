import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartTotals() {
  return (
    <div className="col-span-4 pr-3 sm:pr-0 lg:col-span-1 flex lg:flex-col items-center justify-between pt-5 pb-7 gap-5 lg:bg-lightOrange rounded-[8px] h-fit">
      <div className="flex flex-col gap-5 items-start lg:items-center">
        <p className="text-xl font-medium">Cart Totals</p>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <p className="text-sm text-myBlack">Subtotal:</p>
            <p className="text-[#9F9F9F] text-sm">₦250,000.00</p>
          </div>
          <div className="flex items-center  gap-3">
            <p className="text-sm text-myBlack">Total:</p>
            <p className="text-myOrange text-sm">₦250,000.00</p>
          </div>
        </div>
      </div>
      <Button
        asChild
        variant={`outline`}
        className="text-sm font-semibold bg-transparent"
      >
        <Link href={`/checkout`}>Checkout</Link>
      </Button>
    </div>
  );
}
