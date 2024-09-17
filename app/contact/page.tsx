import PageHero from "../_components/page-hero";
import GetInTouch from "../_sections/_contact/get-in-touch";
import Perks from "../_sections/_shop/perks";

export default function ContactPage() {
  return (
    <>
      <PageHero page="Contact" crumbs="Contact" />

      <GetInTouch />

      <Perks />
    </>
  );
}
