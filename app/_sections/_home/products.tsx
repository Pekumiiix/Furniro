import ProductHover from "@/app/_components/product-hover";
import Link from "next/link";
import { productList } from "@/app/_data/product";
import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <section className="cotainer flex flex-col gap-7 items-center py-12">
      <p className="text-[#3A3A3A] text-[40px] font-bold text-center">
        Our Products
      </p>
      <div className="grid grid-cols-4 gap-x-8 gap-y-7">
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
              <p className={`${item.hasDiscount ? "hidden" : "flex"}`}>
                {item.originalPrice}
              </p>
              <div
                className={`${
                  item.hasDiscount ? "flex" : "hidden"
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

      <Button
        asChild
        variant={`outline`}
        className="text-myOrange font-semibold outline-myOrange border-myOrange max-w-[245px] max-h-12 hover:text-myBlack"
      >
        <Link href={`/shop`}>Load more</Link>
      </Button>
    </section>
  );
}
