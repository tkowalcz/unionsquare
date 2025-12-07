import React, { useState, useEffect, useRef } from 'react';
import { Message, User } from '../types';

interface MessagesProps {
    currentUser: User;
    onClose: () => void;
}

const Messages: React.FC<MessagesProps> = ({ currentUser, onClose }) => {
    const [inputText, setInputText] = useState('');
    const [chatLog, setChatLog] = useState<{sender: string, text: string, isSystem?: boolean}[]>([
        { sender: 'System', text: 'Recording started...', isSystem: true }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatLog]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMsg = inputText;
        setChatLog(prev => [...prev, { sender: 'You', text: userMsg }]);
        setInputText('');

        // Bureaucratic delay
        setTimeout(() => {
             setChatLog(prev => [...prev, { sender: 'Agent Smith', text: 'We are watching you.' }]);
        }, 1500);
    };

    return (
        <div className="retro-overlay">
            <div className="retro-modal w-[350px]">
                <div className="retro-modal-header">
                    <span>Europol Instant Messenger (AIM)</span>
                    <button onClick={onClose} className="bg-gray-300 text-black border border-black px-1 font-bold text-xs">X</button>
                </div>
                
                {/* Chat Body */}
                <div 
                    className="bg-white border-2 border-inset border-gray-500 h-[200px] text-left overflow-y-scroll p-2 font-['Comic_Sans_MS',sans-serif] text-sm mb-2" 
                    ref={scrollRef}
                >
                    {chatLog.map((msg, idx) => (
                        <div key={idx} className="mb-1">
                            {msg.isSystem ? (
                                <span className="text-blue-600 font-bold">{msg.sender}: {msg.text}</span>
                            ) : (
                                <>
                                    <b style={{ color: msg.sender === 'You' ? 'blue' : 'red' }}>{msg.sender}:</b> {msg.text}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-2 bg-[#c0c0c0] flex gap-2">
                    <input 
                        type="text" 
                        className="retro-input flex-1" 
                        placeholder="Type here..."
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSend()}
                    />
                    <button className="btn" onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;