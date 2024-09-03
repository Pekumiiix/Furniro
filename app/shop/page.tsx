import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ShopProducts from "../_sections/_shop/shop-products";
import Perks from "../_sections/_shop/perks";

export default function Shop() {
  return (
    <>
      <section className="container w-full h-[310px] relative flex flex-col gap-3 items-center justify-center bg-shopBg bg-contain bg-center">
        <p className="text-5xl font-medium">Shop</p>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-medium opacity-100 text-black"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-500 font-light">
                Shop
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <ShopProducts />

      <Perks />
    </>
  );
}
