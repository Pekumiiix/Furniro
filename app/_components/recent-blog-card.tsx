import Image from "next/image";
import Link from "next/link";

export default function RecentBlogCard({ image, header }: Recent) {
  return (
    <Link href={`/`} className="flex  gap-2.5">
      <Image
        src={image}
        alt=""
        height={80}
        width={80}
        className="rounded-[10px]"
      />

      <div className="flex flex-col justify-center">
        <p className="text-sm">{header}</p>
        <p className="text-xs text-[#9F9F9F]">17 Sept, 2024</p>
      </div>
    </Link>
  );
}

interface Recent {
  image: string;
  header: string;
}
