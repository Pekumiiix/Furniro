import ShopProducts from "../_sections/_shop/shop-products";
import Perks from "../_sections/_shop/perks";
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
