import StarIcon from "@/components/icons/star-icon";

export default function Reviews() {
  return (
    <section className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div className="flex gap-2 px-5 py-4 rounded-[7px] bg-lightOrange">
        <img
          src={`/assets/images/review/human2.jpeg`}
          alt="Display Picture"
          width={30}
          height={30}
          className="rounded-full w-10 h-10"
        />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Anonymous_1</p>
            <p className="text-sm text-[#9F9F9F]">
              Absolutely love this chair! The design is sleek and modern, and it
              fits perfectly in my café. It's not only stylish but also very
              comfortable for my customers. Highly recommend!
            </p>
          </div>

          <div className="flex items-center gap-1">
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
          </div>
        </div>
      </div>

      <div className="flex gap-2 px-5 py-4 rounded-[7px] bg-lightOrange">
        <img
          src={`/assets/images/review/human2.jpeg`}
          alt="Display Picture"
          width={30}
          height={30}
          className="rounded-full w-10 h-10"
        />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Anonymous_1</p>
            <p className="text-sm text-[#9F9F9F]">
              Absolutely love this chair! The design is sleek and modern, and it
              fits perfectly in my café. It's not only stylish but also very
              comfortable for my customers. Highly recommend!
            </p>
          </div>

          <div className="flex items-center gap-1">
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
          </div>
        </div>
      </div>

      <div className="flex gap-2 px-5 py-4 rounded-[7px] bg-lightOrange">
        <img
          src={`/assets/images/review/human2.jpeg`}
          alt="Display Picture"
          width={30}
          height={30}
          className="rounded-full w-10 h-10"
        />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Anonymous_1</p>
            <p className="text-sm text-[#9F9F9F]">
              Absolutely love this chair! The design is sleek and modern, and it
              fits perfectly in my café. It's not only stylish but also very
              comfortable for my customers. Highly recommend!
            </p>
          </div>

          <div className="flex items-center gap-1">
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
            <StarIcon className="w-6 h-6 fill-myOrange" />
          </div>
        </div>
      </div>
    </section>
  );
}
