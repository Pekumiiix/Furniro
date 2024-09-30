import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from "./_tabs/description";
import AdditionalInformation from "./_tabs/additional-information";
import Reviews from "./_tabs/reviews";
import { additionalInformation } from "@/app/_data/additional-iformation";

export default function ProductTab({ product }: ProductProps) {
  const info = additionalInformation.find((a) => a.id === product.id);

  if (!info) {
    return (
      <section className="flex items-center justify-center">
        <p>Info not found</p>
      </section>
    );
  }

  return (
    <Tabs defaultValue="description" className="container w-full">
      <TabsList className="w-full h-fit justify-start md:justify-center md:gap-10 bg-transparent overflow-y-auto">
        <TabsTrigger
          value="description"
          className="text-[#9F9F9F] text-lg data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="information"
          className="text-[#9F9F9F] text-lg data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none"
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="text-[#9F9F9F] text-lg data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none"
        >
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <ProductDescription />
      </TabsContent>
      <TabsContent value="information">
        <AdditionalInformation info={info} />
      </TabsContent>
      <TabsContent value="reviews">
        <Reviews />
      </TabsContent>
    </Tabs>
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

interface ProductProps {
  product: ProductList;
}
