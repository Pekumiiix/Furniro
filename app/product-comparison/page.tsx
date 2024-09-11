import SelectedProducts from "../_sections/_product-comparison/selected-products";
import Perks from "../_sections/_shop/perks";
import PageHero from "../_components/page-hero";

export default function ComparisonPage() {
  return (
    <>
      <PageHero page="Product Comaprison" crumbs="Comparison" />

      <SelectedProducts />

      <Perks />
    </>
  );
}
