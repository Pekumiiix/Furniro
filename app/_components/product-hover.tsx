import CompareIcon from "@/components/icons/compare-icon";
import HeartIcon from "@/components/icons/heart-icon";
import ShareIcon from "@/components/icons/share-icon";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

export default function ProductHover() {
  return (
    <div className="absolute top-0 w-full h-full hidden group-hover:flex flex-col items-center justify-center gap-6 bg-[rgba(58,58,58,0.5)]">
      <Button
        variant={`default`}
        className="bg-white text-myOrange hover:bg-lightOrange font-semibold rounded-none px-6 transition-all duration-300"
      >
        Add to cart
      </Button>

      <div className="w-[95%] flex items-center justify-between">
        <Button className="flex items-center gap-0.5 z-[0] group/item p-1 bg-transparent hover:bg-transparent">
          {actions[0].icon}
          <p className="text-white font-semibold group-hover/item:text-myOrange transition-all duration-300">
            {actions[0].name}
          </p>
        </Button>
        <Button className="flex items-center gap-0.5 group/compare p-1 bg-transparent hover:bg-transparent">
          {actions[1].icon}
          <p className="text-white font-semibold group-hover/compare:text-myOrange transition-all duration-300">
            {actions[1].name}
          </p>
        </Button>
        <Button className="flex items-center gap-0.5 group/like p-1 bg-transparent hover:bg-transparent">
          {actions[2].icon}
          <p className="text-white font-semibold group-hover/like:text-myOrange transition-all duration-300">
            {actions[2].name}
          </p>
        </Button>
      </div>
    </div>
  );
}

interface Actions {
  icon?: ReactElement;
  name?: string;
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
