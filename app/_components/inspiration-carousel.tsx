"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-fit"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselInner.map((item, index) => (
          <CarouselItem
            key={index}
            className="relative h-[500px] md:basis-1/2 lg:basis-1/3"
          >
            <img
              src={`${item.imgSrc}`}
              alt="Carousel"
              className="w-full h-full"
            />
            <div className="absolute left-6 bottom-5 flex flex-col px-4 py-4 bg-[#FFFFFFB8] rounded-[3px]">
              <p className="text-[#616161] font-medium text-sm">{item.name}</p>
              <p className="text-[28px] text-lg font-semibold text-[#3A3A3A]">
                {item.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

interface CarouselInner {
  imgSrc?: string;
  name?: string;
  description?: string;
}

const carouselInner: CarouselInner[] = [
  {
    imgSrc: "/assets/images/carousel/c-1.png",
    name: "01 Bedroom",
    description: "Inner Peace",
  },
  {
    imgSrc: "/assets/images/carousel/c-2.png",
    name: "02 Mini-workspace",
    description: "Inner Peace",
  },
  {
    imgSrc: "/assets/images/carousel/c-3.jpeg",
    name: "03 Bedroom",
    description: "Calm",
  },
  {
    imgSrc: "/assets/images/carousel/c-4.webp",
    name: "04 Living room",
    description: "Minimalist",
  },
  {
    imgSrc: "/assets/images/carousel/c-5.webp",
    name: "05 Living room",
    description: "Innerpeace",
  },
];
