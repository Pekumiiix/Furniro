import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeHero() {
  return (
    <>
      <section className="container w-full h-[600px] relative hidden xl:flex items-center justify-center sm:justify-end bg-homeBg bg-contain bg-center">
        <HomeCard />
      </section>

      <section className="w-full flex xl:hidden flex-col">
        <img
          src={`/assets/images/home-hero.png`}
          alt={`Product`}
          className="container px-0 w-full h-auto"
        />
        <HomeCard />
      </section>
    </>
  );
}

function HomeCard() {
  return (
    <div className="flex flex-col bg-lightOrange rounded-[10px] w-full xl:max-w-[643px] p-10">
      <p className="text-myBlack font-semibold">New Arrival</p>
      <p className="text-myOrange text-3xl md:text-5xl lg:text-[52px] font-bold">
        Discover Our New Collection
      </p>
      <p className="text-myBlack text-lg md:text-lg font-medium mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elitellus,
        luctus nec ullamcorper mattis.
      </p>
      <Button
        asChild
        className="bg-myOrange px-[72px] py-[25px] text-white font-bold mt-5 w-fit hover:bg-[#b88e2fcc] transition-all duration-300"
      >
        <Link href={`#`}>Buy Now</Link>
      </Button>
    </div>
  );
}
