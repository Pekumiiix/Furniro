import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SelectedProducts from "../_sections/_product-comparison/selected-products";
import Perks from "../_sections/_shop/perks";

export default function ComparisonPage() {
  return (
    <>
      <section className="container w-full h-[310px] relative flex flex-col gap-3 items-center justify-center bg-shopBg bg-contain bg-center">
        <p className="text-5xl font-medium">Product Comaprison</p>

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
                Comparison
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <SelectedProducts />

      <Perks />
    </>
  );
}
