import PageHero from "../_components/page-hero";
import CheckoutForm from "./sections/checkout-form";
import Perks from "../_components/perks";

export default function CheckoutPage() {
  return (
    <>
      <PageHero page="Checkout" crumbs="Checkout" />

      <CheckoutForm />

      <Perks />
    </>
  );
}
