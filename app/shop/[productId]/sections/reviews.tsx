import StarIcon from "@/components/icons/star-icon";

export default function Reviews() {
  return (
    <section className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      {reviews.map((item, index) => (
        <ReviewCard
          key={index}
          image={item.image}
          name={item.name}
          comment={item.comment}
          ratings={item.ratings}
        />
      ))}
    </section>
  );
}

function ReviewCard({ image, name, comment, ratings }: Review) {
  return (
    <div className="flex gap-2 px-5 py-4 rounded-[7px] bg-lightOrange">
      <img
        src={image}
        alt="Display Picture"
        width={30}
        height={30}
        className="rounded-full w-10 h-10"
      />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-sm text-[#9F9F9F]">{comment}</p>
        </div>

        <div className="flex items-center">
          <p>{ratings}</p>
          <StarIcon className="w-4 h-4 fill-myOrange" />
        </div>
      </div>
    </div>
  );
}

const reviews: Review[] = [
  {
    image: "/assets/images/review/human2.jpeg",
    name: "Anonymous_1",
    comment: `Absolutely love this chair! The design is sleek and modern, and it
              fits perfectly in my café. It&apos;s not only stylish but also
              very comfortable for my customers. Highly recommend!`,
    ratings: 5,
  },
  {
    image: "/assets/images/review/human2.jpeg",
    name: "Anonymous_2",
    comment: `Absolutely love this chair! The design is sleek and modern, and it
              fits perfectly in my café. It&apos;s not only stylish but also
              very comfortable for my customers. Highly recommend!`,
    ratings: 5,
  },
  {
    image: "/assets/images/review/human2.jpeg",
    name: "Anonymous_3",
    comment: `Absolutely love this chair! The design is sleek and modern, and it
              fits perfectly in my café. It&apos;s not only stylish but also
              very comfortable for my customers. Highly recommend!`,
    ratings: 5,
  },
];

interface Review {
  image: string;
  name: string;
  comment: string;
  ratings: number;
}
