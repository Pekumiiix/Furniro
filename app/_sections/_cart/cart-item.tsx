import CartList from "./cart-list";
import CartTotals from "./cart-totals";

export default function CartItems() {
  return (
    <>
      <section className="pl-3 sm:container w-full grid grid-cols-4 gap-5 py-10">
        <CartList />
        <CartTotals />
      </section>
    </>
  );
}
