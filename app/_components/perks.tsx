export default function Perks() {
  return (
    <section className="container w-full h-fit flex flex-col sm:flex-row flex-wrap items-center justify-between bg-[#FAF3EA] py-[50px] gap-y-7">
      {perks.map((item: Perks, index: number) => (
        <div className="w-[70%] sm:w-fit flex items-center gap-2.5" key={index}>
          <img src={item.imgSrc} alt={item.heading} className="w-10 h-10" />

          <div className="flex flex-col gap-0.5">
            <p className="text-[#242424] font-semibold">{item.heading}</p>
            <p className="text-sm text-[#898989] font-medium">{item.caption}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

interface Perks {
  imgSrc: string;
  heading: string;
  caption: string;
}

const perks: Perks[] = [
  {
    imgSrc: "/assets/images/perks/one.png",
    heading: "High quality",
    caption: "Crafted from top materials",
  },
  {
    imgSrc: "/assets/images/perks/two.png",
    heading: "Warranty Protection",
    caption: "Over 2 years",
  },
  {
    imgSrc: "/assets/images/perks/three.png",
    heading: "Free Shipping",
    caption: "Order over 150 $",
  },
  {
    imgSrc: "/assets/images/perks/four.png",
    heading: "24 / 7 Support",
    caption: "Dedicated support",
  },
];
