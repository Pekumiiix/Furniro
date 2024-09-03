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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
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

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-7 w-full mb-[50px]">
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

      <Pagination className="mb-[75px] gap-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="/shop"
              className="py-[20px] px-[24px] h-[60px] rounded-[10px]"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="hidden sm:flex py-[20px] px-[24px] h-[60px] rounded-[10px]"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="hidden sm:flex py-[20px] px-[24px] h-[60px] rounded-[10px]"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="w-[60px] h-[60px] rounded-[10px]" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
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
