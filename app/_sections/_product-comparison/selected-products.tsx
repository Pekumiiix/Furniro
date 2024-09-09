import { Button } from "@/components/ui/button";
import Link from "next/link";
import StarIcon from "@/components/icons/star-icon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productList } from "@/app/_data/product";
import ProductTable from "./product-table";

export default function SelectedProducts() {
  return (
    <>
      <section className="container w-full grid grid-cols-4 gap-5 h-fit pt-10 pb-16">
        <div className="flex w-full flex-col gap-1">
          <p className="text-xl font-medium">
            Go to Product page for more Products
          </p>

          <Button
            asChild
            variant={`link`}
            className="text-sm text-[#727272] font-medium underline w-fit bg-transparent hover:bg-transparent pl-0"
          >
            <Link href={`/shop`}>View more</Link>
          </Button>
        </div>

        <Products />

        <AddProducts />
      </section>

      <ProductTable />
    </>
  );
}

function Products() {
  return (
    <div className="flex flex-col gap-3">
      <img
        src="/assets/images/products/syltherine.png"
        alt="Product Image"
        className="w-full h-[175px] rounded-[10px]"
      />

      <div className="flex flex-col gap-1">
        <p className="text-xl font-medium">Asgaard Sofa</p>
        <p className="text-sm font-medium">Rs. 250,000.00</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium mt-0.5">4.2</p>

            <div className="flex items-center">
              <StarIcon className="w-6 h-6 fill-myOrange" />
              <StarIcon className="w-6 h-6 fill-myOrange" />
              <StarIcon className="w-6 h-6 fill-myOrange" />
              <StarIcon className="w-6 h-6 fill-myOrange" />
              <StarIcon className="w-6 h-6 fill-myOrange" />
            </div>
          </div>

          <p className="text-sm text-[#9F9F9F]">200 reviews</p>
        </div>
      </div>
    </div>
  );
}

function AddProducts() {
  return (
    <div className="w-full flex flex-col gap-3">
      <p className="text-xl font-medium">Add a product</p>

      <Select>
        <SelectTrigger className="w-full bg-myOrange text-white font-semibold">
          <SelectValue placeholder="Choose a product" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {productList.map((item, index) => (
              <SelectItem value={item.name} key={index} className="px-3">
                <div className="flex items-center w-full gap-3">
                  <img
                    src={item.productImage}
                    alt="Product image"
                    className="w-10 h-10 rounded-[3px]"
                  />

                  <div className="flex flex-col">
                    <p className="text-base font-semibold">{item.name}</p>

                    <div className={`flex items-center gap-2`}>
                      <p className="text-[#3A3A3A] text-xs font-semibold">
                        {item.type === "discount"
                          ? item.newPrice
                          : item.originalPrice}
                      </p>
                      <p
                        className={`${
                          item.type === "discount" ? "flex" : "hidden"
                        } text-[#B0B0B0] line-through text-xs`}
                      >
                        {item.originalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
