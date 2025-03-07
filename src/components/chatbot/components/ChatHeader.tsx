
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface ChatHeaderProps {
  locationName: string;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ locationName, onClose }) => {
  return (
    <div className="bg-wrap-blue text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Avatar className="h-10 w-10 bg-white text-wrap-blue mr-3">
          <span className="text-lg font-bold">WW</span>
        </Avatar>
        <div>
          <h3 className="font-semibold">Wrapping Assistant</h3>
          <p className="text-xs">{locationName} Vehicle Wraps Expert</p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        onClick={onClose}
        className="h-8 w-8 p-0 text-white hover:bg-blue-700 rounded-full"
      >
        <ChevronDown size={20} />
      </Button>
    </div>
  );
};

export default ChatHeader;
