
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({ isOpen, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`rounded-full w-14 h-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-wrap-blue hover:bg-blue-700'}`}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
    </Button>
  );
};

export default ChatToggleButton;
