"use client";

import React, { useState } from "react";
import { productList } from "@/app/_data/product";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import ProductTab from "./product-tab";
import RelatedProducts from "./related-products";
import StarIcon from "@/components/icons/star-icon";
import { Toaster, toast } from "sonner";

export default function ProductDeatils() {
  const product = productList[0];
  const [isCopied, setIsCopied] = useState<boolean | null>(null);

  function copyUrl() {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;

      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          toast.success("Successfully copied link");
          setIsCopied(true);
        })
        .catch(() => {
          toast.error("Failed to copy");
          setIsCopied(false);
        });
    }
  }

  return (
    <>
      <section className="container w-full flex flex-col lg:flex-row gap-[50px] py-[50px]">
        <img
          src={product.productImage}
          alt={product.name}
          className="lg:w-[500px] h-[447px] xl:w-[553px] xl:h-[500px] rounded-[10px]"
        />

        <div className="flex flex-col max-w-full lg:max-w-[606px] gap-4 h-fit">
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-medium">{product.name}</p>
            <div className="flex items-center gap-2">
              <p className="text-xl text-myBlack">
                {product.type === "discount"
                  ? product.newPrice
                  : product.originalPrice}
              </p>
              <p
                className={`${
                  product.type === "discount" ? "flex" : "hidden"
                } text-xl text-[#9F9F9F] line-through`}
              >
                {product.originalPrice}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <StarIcon className="w-4 h-4 fill-myOrange" />
              <StarIcon className="w-4 h-4 fill-myOrange" />
              <StarIcon className="w-4 h-4 fill-myOrange" />
              <StarIcon className="w-4 h-4 fill-myOrange" />
              <StarIcon className="w-4 h-4 fill-myOrange" />
            </div>

            <p className="text-sm text-[#9F9F9F]">3 Customer Review</p>
          </div>

          <p className="text-sm">
            This stylish café chair boasts a sleek, minimalist design, featuring
            a smooth, curved wooden seat with a natural finish that highlights
            the grain. The chair's slender, matte black metal legs provide a
            modern contrast, ensuring stability while adding a touch of
            industrial chic. Comfortable yet elegant, it seamlessly complements
            any café setting, offering both aesthetic appeal and functional
            durability.
          </p>

          <Size />

          <Color />

          <div className="flex items-center gap-5 border-b border-[#D9D9D9] pb-10">
            <CountIncrement />

            <Button className="px-4 py-5 font-medium border border-myOrange text-myOrange bg-transparent hover:border-transparent hover:bg-myOrange hover:text-white transition-all duration-300">
              Add to cart
            </Button>

            <Button className="px-4 py-5 font-medium border border-myOrange text-myOrange bg-transparent hover:border-transparent hover:bg-myOrange hover:text-white transition-all duration-300">
              + Compare
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[#9F9F9F] text-sm font-medium">Share:</p>

            <Button
              className="gap-1 py-1 px-2 bg-transparent hover:bg-transparent text-black"
              onClick={copyUrl}
            >
              Link <Link2 />
            </Button>
          </div>
        </div>
      </section>

      <ProductTab />

      <RelatedProducts />
    </>
  );
}

function Size() {
  const [size, setSize] = useState(productSizes);

  const handleSize = (index: number) => {
    const updatedList = size.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setSize(updatedList);
  };
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm text-[#9F9F9F]">Size</p>

      <div className="flex gap-3">
        {size.map((item, index) => (
          <Button
            onClick={() => handleSize(index)}
            className={`h-[30px] w-[30px] rounded-[5px] text-[13px] ${
              item.isActive
                ? "text-white bg-myOrange hover:bg-myOrange"
                : "text-black bg-lightOrange hover:bg-lightOrange"
            } transition-all duration-300`}
            key={index}
          >
            {item.size}
          </Button>
        ))}
      </div>
    </div>
  );
}

function Color() {
  const [chosenColor, setChosenColor] = useState(colors);

  const handleColor = (index: number) => {
    const updatedList = chosenColor.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setChosenColor(updatedList);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm text-[#9F9F9F]">Color</p>

      <div className="flex gap-3">
        {chosenColor.map((item, index) => {
          const baseClasses =
            "flex h-[30px] w-[30px] rounded-full outline outline-2 outline-offset-2 transition-all duration-300";
          const colorClass =
            item.color === "blue"
              ? "bg-blue-800 outline-blue-600"
              : item.color === "black"
              ? "bg-black outline-black"
              : item.color === "yellow"
              ? "bg-yellow-800 outline-yellow-600"
              : "";
          const activeClass = item.isActive ? "" : "outline-transparent";

          return (
            <div
              onClick={() => handleColor(index)}
              className={`${baseClasses} ${colorClass} ${activeClass}`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

function CountIncrement() {
  const [count, setCount] = useState<number>(1);

  return (
    <div className="flex items-center gap-3 px-3 py-2 border border-[#9F9F9F] rounded-[10px]">
      <Button
        className="py-1 px-2 h-fit bg-transparent hover:bg-lightOrange transition-all duration-300 text-black"
        onClick={() => setCount((c) => c - 1)}
        disabled={count === 1 ? true : false}
      >
        -
      </Button>
      <p className="font-medium">{count}</p>
      <Button
        onClick={() => setCount((c) => c + 1)}
        className="py-1 px-2 h-fit bg-transparent hover:bg-lightOrange transition-all duration-300 text-black"
      >
        +
      </Button>
    </div>
  );
}

const productSizes = [
  { size: "XS", isActive: true },
  { size: "L", isActive: false },
  { size: "XL", isActive: false },
];

const colors = [
  { color: "blue", isActive: true },
  { color: "black", isActive: false },
  { color: "yellow", isActive: false },
];
