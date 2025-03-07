
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({ isOpen, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
        isOpen ? 'bg-wrap-red rotate-90' : 'bg-wrap-blue hover:bg-blue-700'
      }`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <div className="flex items-center justify-center">
        <MessageCircle className="h-6 w-6 text-white" />
        {!isOpen && (
          <span className="sr-only">How Can We Wrap Your World?</span>
        )}
      </div>
    </Button>
  );
};

export default ChatToggleButton;
