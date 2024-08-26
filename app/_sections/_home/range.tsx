import Link from "next/link";

export default function Range() {
  return (
    <section className="container flex flex-col py-12 bg-white gap-12">
      <div className="flex flex-col">
        <p className="text-myBlack text-[32px] font-bold text-center">
          Browse The Range
        </p>
        <p className="text-[#666666] text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {ranges.map((item, index) => (
          <Link href={`#`} key={index} className="flex flex-col gap-3 group">
            <img
              src={item.imgSrc}
              alt={`${item.name} Picture`}
              className="w-full max-h-[480px]"
            />
            <p className="text-myBlack text-2xl font-semibold text-center group-hover:text-myOrange transition-all duration-300">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

interface Ranges {
  imgSrc?: string;
  name?: string;
}

const ranges: Ranges[] = [
  { imgSrc: "/assets/images/range/dining.png", name: "Dining" },
  { imgSrc: "/assets/images/range/living.png", name: "Living" },
  { imgSrc: "/assets/images/range/bedroom.png", name: "Bedroom" },
];
