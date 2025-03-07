
import React, { KeyboardEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
  locationName: string;
  isOpen: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputMessage,
  setInputMessage,
  onSendMessage,
  isLoading,
  locationName,
  isOpen
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (inputMessage.trim()) {
        onSendMessage();
      }
    }
  };
  
  return (
    <div className="border-t border-gray-200 p-3 bg-white">
      <div className="flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Ask how we can wrap your world in ${locationName}...`}
          className="flex-grow py-2 px-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wrap-blue focus:border-transparent"
          disabled={isLoading}
          aria-label="Chat message"
          autoComplete="off"
          autoFocus={isOpen}
        />
        <Button
          onClick={onSendMessage}
          disabled={!inputMessage.trim() || isLoading}
          className={`rounded-r-md py-2 px-4 ${
            isLoading || !inputMessage.trim() 
              ? 'bg-gray-300' 
              : 'bg-wrap-blue hover:bg-blue-700'
          }`}
          aria-label="Send message"
        >
          <Send className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
