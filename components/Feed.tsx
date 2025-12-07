import React from 'react';
import { Post } from '../types';
import PostCard from './PostCard';

interface FeedProps {
  posts: Post[];
  onReply: (post: Post) => void;
}

const Feed: React.FC<FeedProps> = ({ posts, onReply }) => {
  return (
    <div id="feedContainer">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onReply={onReply} />
      ))}
      
      <div className="text-center mt-4 p-4 border border-dashed border-gray-400">
          <p className="text-xs text-gray-500">End of approved content.</p>
      </div>
    </div>
  );
};

export default Feed;