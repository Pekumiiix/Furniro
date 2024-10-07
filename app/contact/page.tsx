import PageHero from "../_components/page-hero";
import GetInTouch from "./sections/get-in-touch";
import Perks from "../_components/perks";

export default function ContactPage() {
  return (
    <>
      <PageHero page="Contact" crumbs="Contact" />

      <GetInTouch />

      <Perks />
    </>
  );
}
