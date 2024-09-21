import Link from "next/link";
import ProductHover from "./product-hover";

export default function IndividualProduct({
  productImage,
  discount,
  description,
  name,
  newPrice,
  originalPrice,
  type,
  id,
}: Products) {
  return (
    <div className="relative flex flex-col">
      <p
        className={`${type === "normal" ? "hidden" : "flex"} ${
          type === "discount" ? "p-2 bg-[#E97171]" : "py-2 px-3 bg-[#2EC1AC]"
        } text-white font-medium rounded-full absolute top-5 right-5 text-xs`}
      >
        {type === "discount" ? discount : "New"}
      </p>

      <div className="group">
        <img
          src={productImage}
          alt={`${description}`}
          className="w-full max-h-[301px]"
        />

        <ProductHover />
      </div>

      <Link
        href={`/shop/${id}`}
        className="flex flex-col gap-1 bg-[#F4F5F7] px-3 pt-3 pb-4"
      >
        <div className="flex flex-col">
          <p className="text-[#3A3A3A] text-xl font-semibold">{name}</p>
          <p className="text-[#898989] text-sm font-medium">{description}</p>
        </div>
        <div className={`flex items-center gap-2`}>
          <p className="text-[#3A3A3A] text-sm font-semibold">
            {type === "discount"
              ? "₦" + newPrice?.toLocaleString()
              : "₦" + originalPrice.toLocaleString()}
          </p>
          <p
            className={`${
              type === "discount" ? "flex" : "hidden"
            } text-[#B0B0B0] line-through text-xs`}
          >
            {"₦" + originalPrice.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
}

type Products = {
  productImage: string;
  discount?: string;
  description: string;
  name: string;
  newPrice?: number;
  originalPrice: number;
  type: "normal" | "discount" | "new";
  id: number;
};
