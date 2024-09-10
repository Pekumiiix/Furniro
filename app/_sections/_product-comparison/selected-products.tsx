import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductTable from "./product-table";
import AddProducts from "@/app/_components/_product-comparison/add-products";

export default function SelectedProducts() {
  return (
    <>
      <section className="container w-full grid md:grid-cols-4 gap-5 h-fit pt-10 pb-16">
        <div className="flex w-full flex-col gap-1 md:col-span-4 lg:col-span-1">
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

        <AddProducts />
      </section>

      <ProductTable />
    </>
  );
}
