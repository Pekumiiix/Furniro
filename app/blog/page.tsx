import BlogSection from "./sections/blog-section";
import RecentBlog from "./sections/recent-blog";
import PageHero from "../_components/page-hero";

export default function BlogPage() {
  return (
    <>
      <PageHero page="Blog" crumbs="Blog" />

      <section className="container flex flex-col lg:flex-row gap-[60px] py-[60px]">
        <BlogSection />

        <RecentBlog />
      </section>
    </>
  );
}
