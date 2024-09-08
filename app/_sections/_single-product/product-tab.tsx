import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from "./_tabs/description";
import AdditionalInformation from "./_tabs/additional-information";
import Reviews from "./_tabs/reviews";

export default function ProductTab() {
  return (
    <Tabs defaultValue="description" className="container w-full">
      <TabsList className="w-full h-fit md:items-center md:justify-center md:gap-10 bg-transparent overflow-y-auto">
        <TabsTrigger
          value="description"
          className="text-[#9F9F9F] text-lg data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none ml-[76px] sm:ml-0"
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
        <AdditionalInformation />
      </TabsContent>
      <TabsContent value="reviews">
        <Reviews />
      </TabsContent>
    </Tabs>
  );
}
