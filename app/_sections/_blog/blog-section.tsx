import BlogCard from "@/app/_components/blog-card";

export default function BlogSection() {
  return (
    <section className="flex flex-col gap-12 w-full lg:w-[820px]">
      {blog.map((item, index) => (
        <BlogCard key={index} image={item.image} header={item.header} />
      ))}
    </section>
  );
}

const blog: Blog[] = [
  {
    image: "/assets/images/blog/blog1.png",
    header: "Going all-in with millennial design",
  },
  {
    image: "/assets/images/blog/blog2.png",
    header: "Exploring new ways of decorating",
  },
  {
    image: "/assets/images/blog/blog3.png",
    header: "Handmade pieces that took time to make",
  },
];

interface Blog {
  image: string;
  header: string;
}
