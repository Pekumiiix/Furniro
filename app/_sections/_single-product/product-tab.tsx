import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from "./_tabs/description";

export default function ProductTab() {
  return (
    <Tabs defaultValue="description" className="container w-full">
      <TabsList className="w-full h-fit items-center justify-center gap-10 bg-transparent">
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
      <TabsContent value="information">Change your password here.</TabsContent>
      <TabsContent value="reviews">Change your password here.</TabsContent>
    </Tabs>
  );
}
