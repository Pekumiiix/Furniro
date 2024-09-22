import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ image, header }: Blog) {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={image}
        alt="Blog"
        height={817}
        width={500}
        className="rounded-[10px]"
      />

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <Image
                src={`/assets/images/blog/admin.png`}
                alt=""
                height={20}
                width={20}
              />

              <p className="text-xs md:text-base text-[#9F9F9F]">Admin</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={`/assets/images/blog/date.png`}
                alt=""
                height={16}
                width={16}
              />

              <p className="text-xs md:text-base text-[#9F9F9F]">
                17 Sept, 2024
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="text-xl md:text-[30px] font-medium">{header}</p>
            <p className="text-[13px] md:text-[15px] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
          </div>
        </div>

        <Button
          asChild
          variant={`link`}
          className="text-[13px] md:text-base w-fit underline pl-0"
        >
          <Link href={`/`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
}

interface Blog {
  image: string;
  header: string;
}
