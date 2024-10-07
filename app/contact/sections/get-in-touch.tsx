import Image from "next/image";
import { ContactForm } from "../components/contact-fom";

export default function GetInTouch() {
  return (
    <section className="container flex flex-col items-center gap-[60px] py-[60px]">
      <div className="flex flex-col items-center max-w-[644px] gap-2">
        <p className="text-4xl font-semibold text-center">
          Get In Touch With Us
        </p>
        <p className="text-[#9F9F9F] text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center gap-20">
        <div className="flex flex-col gap-5">
          {card.map((item, index) => (
            <DetailsCard
              key={index}
              icon={item.icon}
              name={item.name}
              details={item.details}
            />
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function DetailsCard({ icon, name, details }: Card) {
  return (
    <div className="flex gap-3">
      <div className="mt-1.5">
        <Image src={icon} alt={name} height={20} width={20} />
      </div>

      <div className="flex flex-col max-w-[212px]">
        <p className="text-xl font-medium">{name}</p>
        <div>
          {details.map((item, index) => (
            <p key={index} className="text-sm">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const card: Card[] = [
  {
    icon: "/assets/images/contact/det1.png",
    name: "Address",
    details: ["236 5th SE Avenue, New York NY10000, United States"],
  },
  {
    icon: "/assets/images/contact/det2.png",
    name: "Phone",
    details: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
  },
  {
    icon: "/assets/images/contact/det3.png",
    name: "Work Time",
    details: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
  },
];

interface Card {
  icon: string;
  name: string;
  details: string[];
}
