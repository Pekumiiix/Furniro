import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Products from "../_home/products";
import { productList } from "@/app/_data/product";
import ProductHover from "@/app/_components/product-hover";
import Link from "next/link";

export default function ShopProducts() {
  return (
    <>
      <section className="container w-full bg-[#F9F1E7] p-7 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Select>
            <SelectTrigger className="w-fit gap-3 focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Filter" className="font-normal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Price A - Z">Price A - Z</SelectItem>
              <SelectItem value="Price Z - A">Price Z - A</SelectItem>
              <SelectItem value="New products">New products</SelectItem>
              <SelectItem value="Discount">Discount</SelectItem>
            </SelectContent>
          </Select>

          <div className="w-[2px] h-9 bg-[#9F9F9F]" />

          <p className="text-myBlack text-sm font-medium">
            Showing 1 - 16 of 32 results
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            <p className="text-myBlack text-sm font-medium">Show</p>
            <Input
              type="number"
              value={`16`}
              readOnly
              className="bg-white text-sm p-3 roundedn-[2px] w-10 h-10 text-myBlack font-medium  focus-visible:ring-0 focus-visible::ring-offset-0"
            />
          </div>
        </div>
      </section>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-7 w-full">
        {productList.map((item, index) => (
          <div key={index} className="relative flex flex-col">
            <div className="absolute top-5 right-5 flex items-center gap-2">
              <p
                className={`${
                  item.hasDiscount ? "flex" : "hidden"
                } text-white font-medium p-2 rounded-full bg-[#E97171]`}
              >
                {item.discount}
              </p>
              <p
                className={`${
                  item.isNew ? "flex" : "hidden"
                } text-white font-medium py-2 px-3 rounded-full bg-[#2EC1AC]`}
              >
                New
              </p>
            </div>

            <div className="group">
              <img
                src={item.productImage}
                alt={`${item.description}`}
                className="w-full max-h-[301px]"
              />

              <ProductHover />
            </div>

            <Link
              href={`#`}
              className="flex flex-col gap-3 bg-[#F4F5F7] px-3 pt-3 pb-4"
            >
              <div className="flex flex-col">
                <p className="text-[#3A3A3A] text-2xl font-semibold">
                  {item.name}
                </p>
                <p className="text-[#898989] font-medium">{item.description}</p>
              </div>
              <p
                className={`${
                  item.hasDiscount ? "hidden" : "flex"
                } text-[#3A3A3A] text-xl font-semibold`}
              >
                {item.originalPrice}
              </p>
              <div
                className={`${
                  item.hasDiscount ? "flex flex-wrap" : "hidden"
                } items-center gap-2`}
              >
                <p className="text-[#3A3A3A] text-xl font-semibold">
                  {item.newPrice}
                </p>
                <p className="text-[#B0B0B0] line-through">
                  {item.originalPrice}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
