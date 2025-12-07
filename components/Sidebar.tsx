import React from 'react';

interface SidebarProps {
  onOpenDM: () => void;
  socialCredit: number;
}

const Sidebar: React.FC<SidebarProps> = ({ onOpenDM, socialCredit }) => {
  return (
    <div className="text-center p-2">
      <h3>NAVIGATION</h3>
      <ul style={{ listStyleType: 'square', textAlign: 'left', paddingLeft: '20px', fontFamily: 'Arial' }} className="mb-4">
        <li className="mb-1"><a href="#" className="text-blue-800 underline hover:text-red-600">Main Page</a></li>
        <li className="mb-1"><a href="#" onClick={() => alert("You have 14 unread subpoenas.")} className="text-blue-800 underline hover:text-red-600">Summons</a></li>
        <li className="mb-1"><button onClick={onOpenDM} className="text-blue-800 underline hover:text-red-600 bg-transparent border-none p-0 cursor-pointer text-left font-normal">Wiretaps (DMs)</button></li>
        <li className="mb-1"><a href="#" onClick={() => alert("The Guestbook is currently being audited.")} className="text-blue-800 underline hover:text-red-600">Guestbook</a></li>
      </ul>
      
      <hr className="border-gray-500 my-4" />
      
      <div style={{ background: 'yellow', border: '1px dashed black', padding: '5px' }}>
          <p className="blink text-xs font-bold">⚠ STATUS: WATCHED</p>
      </div>

      <div className="mt-6">
        <img 
            src="https://web.archive.org/web/20090830085955/http://geocities.com/Heartland/Bluffs/4157/construct.gif" 
            className="w-full border border-black mb-2" 
            alt="Under Construction"
        />
        <p className="text-[10px]">Democracy is currently<br/>Under Construction</p>
      </div>
      
      <div className="mt-6">
        <p className="text-xs mb-1">Citizens Tracked:</p>
        <div style={{ background: 'black', color: 'red', fontFamily: '"Courier New", monospace', padding: '5px', border: '2px inset white', display: 'inline-block' }}>
            0451929
        </div>
      </div>
    </div>
  );
};

export default Sidebar;