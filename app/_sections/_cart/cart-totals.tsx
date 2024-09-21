import LinkOutlineButton from "@/app/_components/link-btn-outline";

export default function CartTotals({ product }: CartTotalsProps) {
  const total = () => {
    return product.reduce((acc: number, item: ProductList) => {
      const price =
        item.type === "discount" && item.newPrice !== undefined
          ? item.newPrice
          : item.originalPrice;

      return acc + price * (item.count || 1);
    }, 0);
  };

  return (
    <div
      className={`col-span-4 px-5 sm:px-0 lg:w-[350px] ${
        product.length === 0 ? "hidden" : "flex"
      } flex-col items-center justify-between pt-5 pb-7 gap-5 lg:bg-lightOrange rounded-[8px] h-fit`}
    >
      <div className="flex flex-col gap-5 items-start lg:items-center w-full lg:w-[90%]">
        <p className="text-xl font-medium">Cart Totals</p>

        <div className="w-full flex flex-col gap-2">
          {product.map((item: ProductList, index: number) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-sm text-myBlack">{item.name}</p>
              <p className="text-[#9F9F9F] font-medium text-sm">
                {item.type === "discount"
                  ? "₦" + item.newPrice?.toLocaleString() + " X " + item.count
                  : "₦" +
                    item.originalPrice.toLocaleString() +
                    " X " +
                    item.count}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between mt-2 pt-3 border-t border-myOrange">
            <p className="text-myBlack">Total:</p>
            <p className="text-myOrange">₦{total().toLocaleString()}</p>
          </div>
        </div>
      </div>
      <LinkOutlineButton
        className={`w-full`}
        text="Checkout"
        link="/checkout"
      />
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

interface CartTotalsProps {
  product: ProductList[];
}
