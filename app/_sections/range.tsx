import Image from "next/image";
import Link from "next/link";

export default function Range() {
  return (
    <section className="container flex flex-col items-center py-12 bg-white gap-12">
      <div className="flex flex-col gap-2">
        <p className="text-myBlack text-3xl md:text-[40px] font-bold text-center">
          Browse The Range
        </p>
        <p className="text-[#666666] md:text-xl text-center max-w-[600px]">
          Discover timeless furniture pieces designed to elevate your space with
          comfort and style.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-7 md:gap-5">
        {ranges.map((item, index) => (
          <Link
            href={`/shop`}
            key={index}
            className="flex flex-col gap-3 group"
          >
            <Image
              src={item.imgSrc}
              alt={`${item.name} Picture`}
              height={480}
              width={381}
            />
            <p className="text-myBlack text-lg md:text-2xl font-semibold text-center group-hover:text-myOrange transition-all duration-300">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

interface Ranges {
  imgSrc: string;
  name: string;
}

const ranges: Ranges[] = [
  { imgSrc: "/assets/images/range/dining.png", name: "Dining" },
  { imgSrc: "/assets/images/range/living.png", name: "Living" },
  { imgSrc: "/assets/images/range/bedroom.png", name: "Bedroom" },
];
