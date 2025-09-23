import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <>
      {posts.length > 0 ? (
        <ul className="post-list">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>
      ) : (
        <div className="no-posts">
          <h2>No posts yet</h2>
          <p>
            Create your first post in the <code>/posts</code> directory
          </p>
        </div>
      )}
    </>
  );
}
