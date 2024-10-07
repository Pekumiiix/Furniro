import { CarouselPlugin } from "@/app/_components/inspiration-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Inspirations() {
  return (
    <section className="w-full flex justify-end py-12 bg-[#FCF8F3]">
      <div className="container w-full flex flex-col xl:flex-row items-center justify-end gap-7 xl:pr-0">
        <div className="flex flex-col gap-5 w-full xl:max-w-[422px]">
          <div className="flex flex-col gap-1">
            <p className="text-3xl md:text-[40px] md:leading-[42px] font-bold text-[#3A3A3A]">
              35+ Beautiful rooms inspiration
            </p>
            <p className="font-medium text-[#616161]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>

          <Button
            variant={`default`}
            asChild
            className="text-myOrange font-semibold bg-transparent rounded-sm w-fit border border-myOrange hover:border-transparent hover:bg-myOrange hover:text-white transition-all duration-300"
          >
            <Link
              href={`https://www.mydomaine.com/white-interior-decorating-ideas-4767847`}
              target="_blank"
            >
              Explore more
            </Link>
          </Button>
        </div>

        <div className="max-h-[582px] w-full xl:w-[66%]">
          <CarouselPlugin />
        </div>
      </div>
    </section>
  );
}
