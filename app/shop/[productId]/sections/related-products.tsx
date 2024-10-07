import IndividualProduct from "@/app/_components/indvidual-product";
import LinkOutlineButton from "@/app/_components/link-btn-outline";
import { productList } from "@/app/data/product";

export default function RelatedProducts() {
  return (
    <section className="container flex flex-col items-center gap-5 py-10 border-t border-[#D9D9D9] mt-20">
      <p className="text-2xl font-medium">Related products</p>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {productList.slice(0, 4).map((item) => (
          <IndividualProduct
            key={item.id}
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

      <LinkOutlineButton text="Show more" link="/shop" />
    </section>
  );
}
