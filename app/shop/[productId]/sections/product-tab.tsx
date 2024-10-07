import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from "./description";
import AdditionalInformation from "./additional-information";
import Reviews from "./reviews";
import { additionalInformation } from "@/app/data/additional-iformation";

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
        {tabLists.map((item: TabList) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="text-[#9F9F9F] text-lg data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none"
          >
            {item.name}
          </TabsTrigger>
        ))}
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

const tabLists: TabList[] = [
  { value: "description", name: "Description" },
  { value: "information", name: "Information" },
  { value: "reviews", name: "Reviews" },
];

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

interface TabList {
  value: "description" | "information" | "reviews";
  name: "Description" | "Information" | "Reviews";
}
