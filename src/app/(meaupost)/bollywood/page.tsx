import PostCard from "@/components/blog/PostCard";
import { posts } from "@/constants/data";

const page = () => {
  return (
    <>
      <div className='flex flex-wrap gap-4 p-3'>
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
    </>
  );
};

export default page;
