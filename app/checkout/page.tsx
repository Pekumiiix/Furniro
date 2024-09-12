import PageHero from "../_components/page-hero";
import CheckoutForm from "../_sections/_checkout/checkout-form";
import Perks from "../_sections/_shop/perks";

export default function CheckoutPage() {
  return (
    <>
      <PageHero page="Checkout" crumbs="Checkout" />

      <CheckoutForm />

      <Perks />
    </>
  );
}
