export default function ProductDescription() {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-5 max-w-[1026px]">
        <p className="text-myBlack text-sm font-medium">
          This stylish café chair is a perfect blend of contemporary design and
          comfort. The seat, crafted from premium wood, features a smooth,
          curved surface that embraces the natural beauty of the grain,
          showcasing a warm, inviting finish. Its clean lines and minimalist
          aesthetic make it an ideal choice for modern interiors, seamlessly
          integrating into various décor styles.
        </p>
        <p className="text-myBlack text-sm font-medium">
          The chair’s structure is supported by slender metal legs, finished in
          a matte black that contrasts elegantly with the wooden seat. The legs,
          though delicate in appearance, are designed for stability and
          durability, ensuring long-lasting use in a bustling café environment.
          The slight taper of the legs adds a subtle touch of sophistication,
          while rubber foot pads provide protection for floors and enhance grip.
          The ergonomic design offers both style and comfort, making it an
          inviting option for patrons to relax in while enjoying their coffee.
          Whether placed in a cozy corner or lined up in a row, this chair
          brings a chic, contemporary vibe to any space.
        </p>
      </div>

      <div className="min-w-full lg:min-w-[1240px] h-fit lg:h-[348px] grid lg:grid-cols-2 gap-5">
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
