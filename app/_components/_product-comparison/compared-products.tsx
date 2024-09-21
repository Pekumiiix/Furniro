import StarIcon from "@/components/icons/star-icon";

export default function Products({ item }: { item: ProductList[] }) {
  return (
    <>
      {item.length > 0 ? (
        item.map((product: ProductList, index: number) => (
          <div
            className="relative flex flex-col gap-3 md:col-span-2 lg:col-span-1"
            key={index}
          >
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

            <div className="flex flex-col gap-1">
              <p className="text-xl font-medium">{product.name}</p>
              <div className={`flex items-center gap-2`}>
                <p className="text-[#3A3A3A] text-sm font-semibold">
                  {product.type === "discount"
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
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <p className="text-sm font-medium mt-0.5">4.2</p>
                  <StarIcon className="w-4 h-4 fill-myOrange" />
                </div>

                <p className="text-sm text-[#9F9F9F]">200 reviews</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center border border-dashed border-[#afafaf] h-[200px] rounded-[10px]">
          <p className="text-myBlack text-sm">Select a product</p>
        </div>
      )}
    </>
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
