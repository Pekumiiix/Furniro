import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductDetails from "./sections/product-details";
import { productList } from "@/app/data/product";

export default function SingleProduct({ params }: any) {
  const product = productList.find(
    (p) => p.id === Number.parseInt(params.productId)
  );

  if (!product) {
    return (
      <section className="w-full">
        <p className="text-center py-10">Product not found.</p>
      </section>
    );
  }

  return (
    <section className="w-full">
      <Breadcrumb className="w-full h-[100px] container flex items-center bg-[#F9F1E7]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[#9F9F9F]">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop" className="text-[#9F9F9F]">
              Shop
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ProductDetails product={product} />
    </section>
  );
}
