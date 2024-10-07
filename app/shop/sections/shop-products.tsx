"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { productList } from "@/app/data/product";
import IndividualProduct from "@/app/_components/indvidual-product";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useState } from "react";
import FilterIcon from "@/components/icons/filter-icon";

export default function ShopProducts() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState("");

  let filteredList = productList;

  if (filter === "new") {
    filteredList = filteredList.filter((product) => product.type === "new");
  } else if (filter === "discount") {
    filteredList = filteredList.filter(
      (product) => product.type === "discount"
    );
  }

  filteredList.sort((a, b) => {
    const priceA = a.newPrice || a.originalPrice;
    const priceB = b.newPrice || b.originalPrice;

    return sort === "lowToHigh" ? priceA - priceB : priceB - priceA;
  });

  return (
    <>
      <section
        id="product-list"
        className="container w-full bg-[#F9F1E7] p-7 flex items-center justify-between"
      >
        <div className="flex items-center gap-4 md:gap-10">
          <FilterMenu setFilter={setFilter} setPage={setPage} />

          <SortSelect setSort={setSort} setPage={setPage} />

          <div className="w-[2px] h-9 bg-[#9F9F9F]" />

          <p className="text-myBlack text-sm font-medium">
            {`Showing ${
              page === 1
                ? `1 - ${filteredList.length > 16 ? "16" : filteredList.length}`
                : "17 - 32"
            } of ${filteredList.length}`}
          </p>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <p className="text-myBlack text-sm font-medium">Show</p>
          <p className="bg-white text-sm px-3 py-2 rounded-[2px] text-myBlack font-medium focus-visible:ring-0 focus-visible::ring-offset-0">
            16
          </p>
        </div>
      </section>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-7 w-full my-[50px]">
        {filteredList
          .slice(page === 1 ? 0 : 16, page === 1 ? 16 : 32)
          .map((item: Products, index: number) => (
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

      <Pages
        page={page}
        setPage={setPage}
        listLength={filteredList.length > 16 ? "flex" : "hidden"}
      />
    </>
  );
}

function SortSelect({
  setSort,
  setPage,
}: {
  setSort: (value: string) => void;
  setPage: (page: number) => void;
}) {
  return (
    <Select
      onValueChange={(value) => {
        setSort(value);
        setPage(1);
      }}
    >
      <SelectTrigger className="w-fit gap-3 focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Sort" className="font-normal" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="lowToHigh" className="pl-2">
          Price A - Z
        </SelectItem>
        <SelectItem value="highToLow" className="pl-2 mb-2.5">
          Price Z - A
        </SelectItem>
        <SelectItem
          value="all"
          className="pl-2 outline outline-1 outline-red-600 text-red-900 bg-red-100 justify-center"
        >
          Reset
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

function FilterMenu({
  setFilter,
  setPage,
}: {
  setFilter: (sort: string) => void;
  setPage: (page: number) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <FilterIcon className="w-5 h-[18px] stroke-myBlack" />
        <p className="text-sm">Filter</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            setFilter("new");
            setPage(1);
          }}
        >
          New products
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setFilter("discount");
            setPage(1);
          }}
        >
          Discounted products
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setFilter("")}
          className="justify-center border border-red-500 bg-red-50 hover:bg-red-50 mt-1.5"
        >
          Clear filters
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Pages({
  page,
  setPage,
  listLength,
}: {
  page: number;
  setPage: (page: number) => void;
  listLength: string;
}) {
  return (
    <Pagination className={`mb-[75px] ${listLength}`}>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#product-list"
            className={`py-3 px-[18px] rounded-[10px] ${
              page === 1
                ? "bg-myOrange text-white hover:bg-myOrange"
                : "bg-lightOrange text-myBlack"
            } mr-5`}
            onClick={() => setPage(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#product-list"
            className={`py-3 px-[18px] rounded-[10px] ${
              page === 2
                ? "bg-myOrange text-white hover:bg-myOrange"
                : "bg-lightOrange text-myBlack"
            }`}
            onClick={() => setPage(2)}
          >
            2
          </PaginationLink>
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
