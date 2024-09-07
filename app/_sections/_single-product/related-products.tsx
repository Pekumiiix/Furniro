import IndividualProduct from "@/app/_components/indvidual-product";
import { productList } from "@/app/_data/product";
import { Button } from "@/components/ui/button";

export default function RelatedProducts() {
  return (
    <section className="container flex flex-col items-center gap-5 py-10 border-t border-[#D9D9D9] mt-20">
      <p className="text-2xl font-medium">Related products</p>

      <div className="grid grid-cols-4 gap-5">
        <IndividualProduct
          productImage={productList[0].productImage}
          discount={productList[0].discount}
          description={productList[0].description}
          name={productList[0].name}
          newPrice={productList[0].newPrice}
          originalPrice={productList[0].originalPrice}
          type={productList[0].type}
        />
        <IndividualProduct
          productImage={productList[1].productImage}
          discount={productList[1].discount}
          description={productList[1].description}
          name={productList[1].name}
          newPrice={productList[1].newPrice}
          originalPrice={productList[1].originalPrice}
          type={productList[1].type}
        />
        <IndividualProduct
          productImage={productList[2].productImage}
          discount={productList[2].discount}
          description={productList[2].description}
          name={productList[2].name}
          newPrice={productList[2].newPrice}
          originalPrice={productList[2].originalPrice}
          type={productList[2].type}
        />
        <IndividualProduct
          productImage={productList[3].productImage}
          discount={productList[3].discount}
          description={productList[3].description}
          name={productList[3].name}
          newPrice={productList[3].newPrice}
          originalPrice={productList[3].originalPrice}
          type={productList[3].type}
        />
      </div>

      <Button
        variant={`outline`}
        className="border-myOrange text-myOrange font-semibold bg-transparent hover:bg-lightOrange"
      >
        Show more
      </Button>
    </section>
  );
}
