import StarIcon from "@/components/icons/star-icon";
import { Button } from "@/components/ui/button";
import { useComparison } from "@/app/hooks/app-context";

export default function Products() {
  const { comparison } = useComparison();

  return (
    <>
      {comparison.length > 0 ? (
        comparison.map((product: ProductList, index: number) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <div className="flex items-center justify-center border border-dashed border-[#afafaf] h-[200px] rounded-[10px]">
          <p className="text-myBlack text-sm">Select a product</p>
        </div>
      )}
    </>
  );
}

function ProductCard({ product }: { product: ProductList }) {
  const { removeFromComparison } = useComparison();

  return (
    <div className="relative flex flex-col gap-3 md:col-span-2 lg:col-span-1">
      <p
        className={`${product.type === "normal" ? "hidden" : "flex"} ${
          product.type === "discount"
            ? "p-2 bg-[#E97171]"
            : "py-2 px-3 bg-[#2EC1AC]"
        } text-white text-xs font-medium rounded-full absolute top-5 right-5`}
      >
        {product.type === "discount" ? product.discount : "New"}
      </p>
      <img
        src={product.productImage}
        alt="Product Image"
        className="w-full h-[175px] rounded-[10px]"
      />

      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <p className="text-xl font-medium">{product.name}</p>
            <div className={`flex items-center gap-2`}>
              <p className="text-[#3A3A3A] text-sm font-semibold">
                {product.newPrice
                  ? "₦" + product.newPrice?.toLocaleString()
                  : "₦" + product.originalPrice.toLocaleString()}
              </p>
              <p
                className={`${
                  product.type === "discount" ? "flex" : "hidden"
                } text-[#B0B0B0] text-sm font-medium line-through`}
              >
                {"₦" + product.originalPrice.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <p className="text-sm font-medium mt-0.5">4.2</p>
              <StarIcon className="w-4 h-4 fill-myOrange" />
            </div>

            <p className="text-sm text-[#9F9F9F]">200 reviews</p>
          </div>
        </div>

        <Button
          onClick={() => removeFromComparison(product.id)}
          className="text-[13px] px-2.5 py-2 h-fit bg-myOrange text-white outline-1 outline-myOrange hover:text-myOrange hover:bg-white hover:outline"
        >
          Remove
        </Button>
      </div>
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
}
