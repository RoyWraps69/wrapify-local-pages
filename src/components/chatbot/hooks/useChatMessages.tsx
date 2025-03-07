
import { useState, useEffect } from 'react';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UseChatMessagesProps {
  initialMessage: string;
}

export const useChatMessages = ({ initialMessage }: UseChatMessagesProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  // Initialize with a welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          content: initialMessage,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [initialMessage, messages.length]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const clearInput = () => {
    setInputMessage('');
  };

  return {
    messages,
    isLoading,
    setIsLoading,
    inputMessage,
    setInputMessage,
    addMessage,
    clearInput,
  };
};
