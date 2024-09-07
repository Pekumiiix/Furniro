export default function ProductDescription() {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-5 max-w-[1026px]">
        <p className="text-[#9F9F9F] text-sm font-medium">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9F9F9F] text-sm font-medium">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="min-w-[1240px] h-[348px] grid grid-cols-2 gap-5">
        <img
          src="/assets/images/products/syltherine.png"
          alt="Product"
          className="rounded-[10px] w-full max-h-[348px]"
        />
        <img
          src="/assets/images/products/syltherine.png"
          alt="Product"
          className="rounded-[10px] w-full max-h-[348px]"
        />
      </div>
    </section>
  );
}
