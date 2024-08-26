import HomeHero from "./_sections/_home/hero-section";
import Inspirations from "./_sections/_home/inspiration";
import Products from "./_sections/_home/products";
import Range from "./_sections/_home/range";

export default function Home() {
  return (
    <>
      <HomeHero />

      <Range />

      <Products />

      <Inspirations />
    </>
  );
}
