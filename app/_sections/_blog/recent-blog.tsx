import RecentBlogCard from "@/app/_components/recent-blog-card";

export default function RecentBlog() {
  return (
    <section className="flex flex-col gap-6">
      <p className="text-2xl font-medium">Recent Posts</p>

      <div className="flex flex-col gap-3">
        {recent.map((item, index) => (
          <RecentBlogCard key={index} image={item.image} header={item.header} />
        ))}
      </div>
    </section>
  );
}

const recent: Recent[] = [
  {
    image: "/assets/images/blog/rec1.png",
    header: "Going all-in with millennial design",
  },
  {
    image: "/assets/images/blog/rec2.png",
    header: "Exploring new ways of decorating",
  },
  {
    image: "/assets/images/blog/rec3.png",
    header: "Handmade pieces that took time to make",
  },
  { image: "/assets/images/blog/rec4.png", header: "Modern home in Milan" },
  { image: "/assets/images/blog/rec5.png", header: "Colorful office redesign" },
];

interface Recent {
  image: string;
  header: string;
}
