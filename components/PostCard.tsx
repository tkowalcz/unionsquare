import React, { useState } from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onReply?: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onReply }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = (e: React.MouseEvent) => {
      e.preventDefault();
      alert("Permit required to Like. Please submit Form 22-A.");
  };

  const handleReplyClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onReply) onReply(post);
  };

  return (
    <div className="tweet">
        <div style={{ borderBottom: '1px dotted gray', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <b className="text-sm">{post.user.name}</b> 
            <small>{post.user.handle}</small>
            {post.user.id === 'bureaucrat' && (
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" width="15" alt="EU" />
            )}
        </div>
        
        <div style={{ fontFamily: 'Arial' }} className="mb-2">
            {post.isRedacted ? (
                <span className="redacted" title="CENSORED BY DSA ARTICLE 13">████████████████</span>
            ) : (
                post.content
            )}
        </div>

        {post.isRedacted && (
            <div style={{ background: 'red', color: 'white', fontSize: '10px', marginTop: '5px', padding: '2px' }}>
                *** CENSORED BY DSA ARTICLE 13 ***
            </div>
        )}

        <div style={{ marginTop: '10px', fontSize: '11px' }}>
            <a href="#" onClick={handleLike} className="text-blue-800 hover:text-red-500 mr-2">[Like ({likes})]</a> 
            <a href="#" onClick={handleReplyClick} className="text-blue-800 hover:text-red-500">[Reply]</a>
        </div>
    </div>
  );
};

export default PostCard;