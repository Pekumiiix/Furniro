"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/app/hooks/cart-context";
import { CartTotal } from "@/app/functions/cart-totals";

export default function CheckoutDetails() {
  const { cartItems } = useCart();

  return (
    <>
      <div className="w-full md:w-[350px] flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="font-medium text-lg">Products</p>
            <p className="font-medium text-lg">Subtotal</p>
          </div>

          {cartItems.map((item, index) => (
            <div className="flex items-center justify-between" key={index}>
              <p className="font-medium text-sm text-[#9F9F9F]">
                {item.name + " x " + item.count}
              </p>
              <p className="font-light text-sm">
                {item.newPrice
                  ? "₦" + item.newPrice.toLocaleString()
                  : "₦" + item.originalPrice.toLocaleString()}
              </p>
            </div>
          ))}

          <div className="flex items-center justify-between">
            <p className="text-sm">Total:</p>
            <p className="font-medium text-xl text-myOrange">
              ₦{CartTotal().toLocaleString()}
            </p>
          </div>
        </div>

        <RadioBlock />

        <Button
          variant={`outline`}
          type="submit"
          className="border-myOrange text-myOrange"
        >
          Checkout
        </Button>
      </div>
    </>
  );
}

function RadioBlock() {
  return (
    <>
      <div className="flex flex-col gap-2 w-full pt-5 pb-3 border-t border-[#D9D9D9]">
        <RadioGroup defaultValue="bank-transfer">
          <div className="flex space-x-2">
            <div>
              <RadioGroupItem value="bank-transfer" id="option-one" />
            </div>
            <div className="flex flex-col gap-0.5">
              <Label htmlFor="option-one">Direct bank transfer</Label>
              <p className="text-[13px] text-[#9F9F9F]">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cash-on-delivery" id="option-two" />
            <Label htmlFor="option-two">Cash on delivery</Label>
          </div>
        </RadioGroup>
      </div>

      <p className="text-[13px]">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </p>
    </>
  );
}
