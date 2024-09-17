import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { productList } from "@/app/_data/product";
import IndividualProduct from "@/app/_components/indvidual-product";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

export default function ShopProducts() {
  return (
    <>
      <section className="container w-full bg-[#F9F1E7] p-7 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-10">
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

        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-5">
            <p className="text-myBlack text-sm font-medium">Show</p>
            <Input
              type="number"
              value={`16`}
              readOnly
              className="bg-white text-sm p-3 rounded-[2px] w-[45px] pr-0 text-myBlack font-medium focus-visible:ring-0 focus-visible::ring-offset-0"
            />
          </div>
        </div>
      </section>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-7 w-full my-[50px]">
        {productList.map((item: Products, index: number) => (
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

      <Pages />
    </>
  );
}

function Pages() {
  return (
    <Pagination className="mb-[75px]">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="/shop"
            className="py-5 px-6 h-[60px] rounded-[10px] bg-myOrange text-white hover:bg-myOrange mr-10"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex py-5 px-6 h-[60px] rounded-[10px] mr-10"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="px-6" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
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
