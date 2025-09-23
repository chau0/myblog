import Link from 'next/link';
import { Post } from '@/types/post';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <li className="post-item">
      <div className="post-meta">
        {formatDate(post.date)} • {post.readingTime} min read
      </div>
      
      <h2 className="post-title">
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      
      <p className="post-excerpt">
        {post.excerpt}
      </p>
      
      <div className="post-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
}