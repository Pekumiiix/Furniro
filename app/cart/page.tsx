import PageHero from "../_components/page-hero";
import CartItems from "../_sections/_cart/cart-item";
import Perks from "../_sections/_shop/perks";

export default function CartPage() {
  return (
    <>
      <PageHero page="Cart" crumbs="Cart" />

      <CartItems />

      <Perks />
    </>
  );
}
