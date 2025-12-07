import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <div className="text-center p-2">
       <h3>HOT LINKS</h3>
       <div className="space-y-2 mb-6 font-arial text-sm">
         <p><a href="#" className="text-blue-800 underline">Tax Forms (Mandatory)</a></p>
         <p><a href="#" className="text-blue-800 underline">Ban Lists (Updated)</a></p>
         <p><a href="#" className="text-blue-800 underline">Report Hate Speech</a></p>
       </div>

       <div className="mb-6">
         <img src="https://media.tenor.com/On7KVX2qQWAAAAAM/police-siren.gif" width="50" className="mx-auto" alt="Siren" />
         <small className="block mt-1">Police are <br/>standing by.</small>
       </div>

       <div style={{ border: '1px solid black', padding: '5px', background: 'white', fontSize: '10px', textAlign: 'left' }}>
           <p className="font-bold mb-1">Did you know?</p>
           <p>Using a VPN is considered an act of treason under Article 45.</p>
       </div>
    </div>
  );
};

export default RightPanel;