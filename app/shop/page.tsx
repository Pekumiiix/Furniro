import ShopProducts from "./sections/shop-products";
import Perks from "../_components/perks";
import PageHero from "../_components/page-hero";

export default function Shop() {
  return (
    <>
      <PageHero page="Shop" crumbs="Shop" />

      <ShopProducts />

      <Perks />
    </>
  );
}
