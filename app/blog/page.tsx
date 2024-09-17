import BlogSection from "../_sections/_blog/blog-section";
import RecentBlog from "../_sections/_blog/recent-blog";
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
