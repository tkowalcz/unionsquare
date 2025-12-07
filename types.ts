export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  socialCredit: number;
  isVerified: boolean; // "Government Verified"
}

export interface Post {
  id: string;
  userId: string;
  user: User;
  content: string;
  timestamp: number;
  likes: number;
  reposts: number;
  replies: number;
  isRedacted?: boolean;
  warningLabel?: string;
  replyToId?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  isRead: boolean;
  isFlagged?: boolean; // For "security reviews"
}

export type View = 'home' | 'messages' | 'notifications' | 'profile';
