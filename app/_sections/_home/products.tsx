import ProductHover from "@/app/_components/product-hover";
import Link from "next/link";
import { productList } from "@/app/_data/product";
import { Button } from "@/components/ui/button";
import IndividualProduct from "@/app/_components/indvidual-product";

export default function Products() {
  return (
    <section className="container flex flex-col gap-7 items-center py-12">
      <p className="text-[#3A3A3A] text-[40px] font-bold text-center">
        Our Products
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-7 w-full">
        {productList.map((item: Products, index: number) => (
          <IndividualProduct
            key={index}
            productImage={item.productImage}
            discount={item.discount}
            description={item.description}
            name={item.name}
            newPrice={item.newPrice}
            originalPrice={item.originalPrice}
            type={item.type}
          />
        ))}
      </div>

      <Button
        asChild
        variant={`outline`}
        className="text-myOrange font-semibold outline-myOrange border-myOrange max-w-[245px] max-h-12 hover:text-[rgba(184,142,47,0.8)]"
      >
        <Link href={`/shop`}>Load more</Link>
      </Button>
    </section>
  );
}

type Products = {
  productImage: string;
  discount: string;
  description: string;
  name: string;
  newPrice: string;
  originalPrice: string;
  type: "normal" | "discount" | "new";
};
