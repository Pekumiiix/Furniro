import PageHero from "../_components/page-hero";
import Perks from "../_components/perks";
import CartList from "./sections/cart-list";
import CartTotals from "./sections/cart-totals";

export default function CartPage() {
  return (
    <>
      <PageHero page="Cart" crumbs="Cart" />

      <section className="sm:container w-full grid lg:flex justify-between grid-cols-4 gap-5 lg:gap-10 py-10">
        <CartList />
        <CartTotals />
      </section>

      <Perks />
    </>
  );
}
