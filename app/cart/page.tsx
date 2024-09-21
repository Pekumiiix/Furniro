"use client";

import PageHero from "../_components/page-hero";
import Perks from "../_sections/_shop/perks";
import CartList from "../_sections/_cart/cart-list";
import CartTotals from "../_sections/_cart/cart-totals";
import { productList } from "../_data/product";
import { useState } from "react";

export default function CartPage() {
  const [cartProduct, setProducts] = useState(
    productList.map((product) => ({
      ...product,
      count: 1,
    }))
  );

  return (
    <>
      <PageHero page="Cart" crumbs="Cart" />

      <section className="sm:container w-full grid lg:flex justify-between grid-cols-4 gap-5 lg:gap-10 py-10">
        <CartList product={cartProduct} setProduct={setProducts} />
        <CartTotals product={cartProduct} />
      </section>

      <Perks />
    </>
  );
}
