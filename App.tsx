import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Feed from './components/Feed';
import Compose from './components/Compose';
import Messages from './components/Messages';
import { Post, User } from './types';

// Mock current user
const CURRENT_USER: User = {
  id: 'user_1',
  name: 'Citizen_8421',
  handle: 'citizen_8421',
  avatar: 'https://picsum.photos/200',
  socialCredit: 100,
  isVerified: true
};

const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'bureaucrat',
    user: { id: 'bureaucrat', name: 'Bureaucrat_01', handle: 'EU_Official', avatar: '', socialCredit: 1000, isVerified: true },
    content: 'Don\'t forget to fax your lunch permits by 12:00 PM.',
    timestamp: Date.now() - 3600000,
    likes: 5400,
    reposts: 12000,
    replies: 0,
  },
  {
    id: 'p2',
    userId: 'rebel',
    user: { id: 'rebel', name: 'Anon', handle: 'freedom_lover', avatar: '', socialCredit: 300, isVerified: false },
    content: '[REDACTED] ... and that is why taxes are too high.',
    timestamp: Date.now() - 7200000,
    likes: 0,
    reposts: 0,
    replies: 0,
    isRedacted: true,
    warningLabel: "Unauthorized economic opinion",
  }
];

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [showDmModal, setShowDmModal] = useState(false);
  const [showPoliceModal, setShowPoliceModal] = useState(false);
  const [policeMessage, setPoliceMessage] = useState('');
  const [socialCredit, setSocialCredit] = useState(100);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handlePostCreated = (post: Post) => {
    setPosts(prev => [post, ...prev]);
    if (post.warningLabel || post.isRedacted) {
        setSocialCredit(prev => prev - 50);
        setPoliceMessage(post.warningLabel || "ILLEGAL THOUGHT DETECTED");
        setShowPoliceModal(true);
    } else {
        setSocialCredit(prev => prev + 1);
    }
  };

  const handleReply = (post: Post) => {
      alert(`Error: Form 34B is required to reply to ${post.user.handle}. Please visit your local post office.`);
  };

  return (
    <div className="min-h-screen">
      
      {/* Marquee */}
      <div style={{ background: 'black', color: 'lime', fontFamily: '"Courier New", monospace', borderBottom: '2px solid white', padding: '2px 0' }}>
         {React.createElement('marquee', { scrollamount: 6, scrolldelay: 100 } as any, 
            "+++ BREAKING: MEMES ARE NOW A CLASS 1 FELONY +++ DIGITAL SERVICES ACT UPDATED: SMILING BANNED +++ OBEY +++ REPORT YOUR NEIGHBOR +++"
         )}
      </div>

      {/* Header */}
      <header style={{ background: '#003399', color: 'white', padding: '10px', borderBottom: '4px ridge #FFCC00', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '24px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img src="https://media.tenor.com/ImC5pG7eW4AAAAAM/spinning-globe-earth.gif" width="30" alt="" />
            <span>🇪🇺 Euro<b>X</b></span>
            <span style={{ fontSize: '12px', fontStyle: 'italic' }}>(Beta v0.9)</span>
        </div>
        <div style={{ border: '2px inset gray', background: 'white', color: 'black', padding: '2px 5px', fontFamily: 'monospace' }}>
            CREDIT: <span style={{ color: socialCredit < 50 ? 'red' : 'black', fontWeight: 'bold' }}>{socialCredit}</span>
        </div>
      </header>

      {/* Main Container */}
      <div className="retro-container">
        
        {/* Sidebar */}
        <div className="w-[220px] shrink-0 hidden md:block border-r-2 border-white border-inset pr-2">
            <Sidebar 
                onOpenDM={() => setShowDmModal(true)} 
                socialCredit={socialCredit}
            />
        </div>

        {/* Feed */}
        <div className="flex-1 bg-white border-2 border-gray-400 border-inset p-4 overflow-y-auto h-[80vh]">
            <div className="text-center mb-4">
                <h2 className="font-bold text-xl">Welcome to The Platform</h2>
                <small>Best viewed in Netscape Navigator 4.0</small>
                <hr className="my-2 border-t border-gray-400" />
            </div>

            <Compose currentUser={CURRENT_USER} onPostCreated={handlePostCreated} />
            <Feed posts={posts} onReply={handleReply} />
        </div>

        {/* Right Panel */}
        <div className="w-[220px] shrink-0 hidden lg:block border-l-2 border-white border-inset pl-2">
            <RightPanel />
        </div>
      </div>

      {/* Cookie Banner */}
      {showCookieBanner && (
          <div style={{ position: 'fixed', bottom: 0, width: '100%', background: 'lightgrey', borderTop: '2px outset white', padding: '5px', textAlign: 'center', fontFamily: 'sans-serif', fontSize: '12px', zIndex: 100 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png" width="15" className="inline mr-2" alt=""/>
            We use cookies to follow you home. 
            <button className="btn ml-4" onClick={() => setShowCookieBanner(false)}>[ACCEPT]</button>
        </div>
      )}

      {/* Police Modal */}
      {showPoliceModal && (
        <div className="retro-overlay">
            <div className="retro-modal w-[400px]">
                <div className="retro-modal-header">
                    <span>SYSTEM ERROR: ILLEGAL THOUGHT</span>
                    <button onClick={() => setShowPoliceModal(false)} className="bg-red-600 text-white w-5 h-5 flex items-center justify-center border border-white">X</button>
                </div>
                <div className="p-8 text-center bg-[#c0c0c0]">
                    <img src="https://media.tenor.com/Si7KmqsQJ7IAAAAM/siren-red.gif" width="50" className="mx-auto mb-4" alt=""/>
                    <h2 className="text-red-600 font-bold font-mono text-xl mb-2">VIOLATION DETECTED</h2>
                    <p className="font-bold mb-4">{policeMessage}</p>
                    <p className="mb-6">A fine of €500 has been deducted from your bank account.</p>
                    <button className="btn" onClick={() => setShowPoliceModal(false)}>I APOLOGIZE TO THE STATE</button>
                </div>
            </div>
        </div>
      )}

      {/* DM Modal */}
      {showDmModal && (
          <Messages currentUser={CURRENT_USER} onClose={() => setShowDmModal(false)} />
      )}

    </div>
  );
};

export default App;