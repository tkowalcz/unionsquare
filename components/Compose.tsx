import React, { useState } from 'react';
import { User, Post } from '../types';

interface ComposeProps {
  currentUser: User;
  onPostCreated: (post: Post) => void;
}

const Compose: React.FC<ComposeProps> = ({ currentUser, onPostCreated }) => {
  const [content, setContent] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;

    setIsChecking(true);

    // Simulate "processing" delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newPost: Post = {
      id: Math.random().toString(36).substr(2, 9),
      userId: currentUser.id,
      user: currentUser,
      content: content,
      timestamp: Date.now(),
      likes: 0,
      reposts: 0,
      replies: 0,
    };

    onPostCreated(newPost);
    setContent('');
    setIsChecking(false);
  };

  return (
    <div className="compose-box">
        <label className="font-bold text-xs mb-1 block">Submit Thought for Review:</label>
        <textarea
            className="w-[95%] h-20 mb-2 retro-input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isChecking}
        />
        <div>
            <button className="btn" onClick={handleSubmit} disabled={!content.trim() || isChecking}>
                {isChecking ? 'AUDITING...' : 'SUBMITT'}
            </button>
            <button className="btn" onClick={() => setContent('')} disabled={isChecking}>
                RESET FORM
            </button>
        </div>
    </div>
  );
};

export default Compose;