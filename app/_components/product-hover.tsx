"use client";

import CompareIcon from "@/components/icons/compare-icon";
import HeartIcon from "@/components/icons/heart-icon";
import ShareIcon from "@/components/icons/share-icon";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";
import { handleShare } from "../_functions/share-product";
import { useRouter } from "next/navigation";
import { productList } from "../_data/product";
import { useComparison } from "@/app/_hooks/app-context";

export default function ProductHover({
  id,
  description,
}: {
  id: number;
  description: string;
}) {
  const { addToComparison } = useComparison();
  const router = useRouter();
  const product = productList.find((p) => p.id === id);

  const handleCompare = () => {
    if (product) {
      addToComparison(product);
      router.push(`/product-comparison`);
    }
  };

  return (
    <div className="absolute top-0 w-full h-full hidden group-hover:flex flex-col items-center justify-center gap-6 bg-[rgba(58,58,58,0.5)]">
      <Button
        variant={`default`}
        className="bg-white text-myOrange hover:bg-lightOrange font-semibold px-6 transition-all duration-300 rounded-[3px]"
      >
        Add to cart
      </Button>

      <div className="w-[95%] flex items-center justify-between">
        <Button
          onClick={() =>
            handleShare({
              description: description,
              id: id,
            })
          }
          className="flex items-center gap-1.5 z-[0] group/item p-1 bg-transparent hover:bg-transparent"
        >
          {actions[0].icon}
          <p className="text-white font-semibold group-hover/item:text-myOrange transition-all duration-300">
            {actions[0].name}
          </p>
        </Button>
        <Button
          onClick={handleCompare}
          className="flex items-center gap-1.5 group/compare p-1 bg-transparent hover:bg-transparent"
        >
          {actions[1].icon}
          <p className="text-white font-semibold group-hover/compare:text-myOrange transition-all duration-300">
            {actions[1].name}
          </p>
        </Button>
        <Button className="flex items-center gap-1.5 group/like p-1 bg-transparent hover:bg-transparent">
          {actions[2].icon}
          <p className="text-white font-semibold group-hover/like:text-myOrange transition-all duration-300">
            {actions[2].name}
          </p>
        </Button>
      </div>
    </div>
  );
}

const actions: Actions[] = [
  {
    icon: (
      <ShareIcon className="w-4 h-4 fill-white group-hover/item:fill-myOrange transition-all duration-300" />
    ),
    name: "Share",
  },
  {
    icon: (
      <CompareIcon className="w-4 h-4 fill-white group-hover/compare:fill-myOrange transition-all duration-300" />
    ),
    name: "Compare",
  },
  {
    icon: (
      <HeartIcon className="w-4 h-4 stroke-white group-hover/like:stroke-myOrange transition-all duration-300" />
    ),
    name: "Like",
  },
];

interface Actions {
  icon: ReactElement;
  name: string;
}
