
import React from 'react';
import { X } from 'lucide-react';

interface ChatHeaderProps {
  locationName: string;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ locationName, onClose }) => {
  return (
    <div className="bg-wrap-blue text-white p-3 flex items-center justify-between rounded-t-lg">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div>
          <p className="font-medium">Wrapmaster 3000</p>
          <p className="text-xs text-white/80">{locationName} Vehicle Wrap Assistant</p>
        </div>
      </div>
      
      <button 
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Close chat"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default ChatHeader;
