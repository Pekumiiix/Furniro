import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PageHero({ page, crumbs }: any) {
  return (
    <section className="container w-full h-[310px] relative flex flex-col gap-3 items-center justify-center bg-shopBg bg-cover bg-center bg-no-repeat">
      <p className="text-3xl md:text-5xl font-medium text-center">{page}</p>

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
              {crumbs}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
