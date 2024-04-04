import ArticleSearch from "@/components/blog/ArticleSearch";
import PostCard from "@/components/blog/PostCard";
import { posts } from "@/constants/data";

const homePage = () => {
  return (
    <>
      <main>
        <section className='flex justify-center items-center p-4'>
          <ArticleSearch />
        </section>
        <div className='flex flex-wrap gap-4 p-2'>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              imageUrl={post.imageUrl}
              category={post.category}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default homePage;
