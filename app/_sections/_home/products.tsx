import { productList } from "@/app/_data/product";
import IndividualProduct from "@/app/_components/indvidual-product";
import LinkOutlineButton from "@/app/_components/link-btn-outline";

export default function Products() {
  return (
    <section className="container flex flex-col gap-7 items-center py-12">
      <p className="text-[#3A3A3A] text-3xl md:text-[40px] leading-[48px] font-bold text-center">
        Our Products
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-7 w-full">
        {productList.slice(0, 8).map((item: Products, index: number) => (
          <IndividualProduct
            key={index}
            id={item.id}
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

      <LinkOutlineButton
        text="Load more"
        link="/shop"
        className="max-w-[245px] max-h-12"
      />
    </section>
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
