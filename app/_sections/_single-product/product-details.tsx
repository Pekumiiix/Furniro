"use client";

import React, { useState } from "react";
import { productList } from "@/app/_data/product";
import { Button } from "@/components/ui/button";

export default function ProductDeatils() {
  const product = productList[0];

  return (
    <section className="container w-full flex gap-[50px] py-[50px]">
      <img
        src={product.productImage}
        alt={product.name}
        className="w-[553px] h-[500px] rounded-[10px]"
      />

      <div className="flex flex-col max-w-[606px] gap-4">
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

        <p className="text-sm">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        <Size />

        <Color />
      </div>
    </section>
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
    <div className="flex flex-col gap-4">
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
    <div className="flex flex-col gap-4">
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
