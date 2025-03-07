
import React, { useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

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
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="p-3 border-t border-gray-200 bg-white">
      <div className="flex items-end space-x-2">
        <Textarea
          ref={inputRef}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="resize-none min-h-[60px] max-h-[120px]"
          rows={2}
        />
        <Button
          onClick={onSendMessage}
          disabled={isLoading || !inputMessage.trim()}
          className="h-10 w-10 p-0 rounded-full bg-wrap-blue hover:bg-blue-700"
          aria-label="Send message"
        >
          <Send size={18} />
        </Button>
      </div>
      <p className="text-xs text-center mt-2 text-gray-500">
        Powered by AI with local {locationName} expertise
      </p>
    </div>
  );
};

export default ChatInput;
