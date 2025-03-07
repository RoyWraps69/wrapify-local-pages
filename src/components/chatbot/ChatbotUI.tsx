
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useChatMessages } from './hooks/useChatMessages';
import { generateResponse } from './services/chatResponseService';
import ChatToggleButton from './components/ChatToggleButton';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

interface ChatbotUIProps {
  initialMessage?: string;
  locationName?: string;
}

const ChatbotUI: React.FC<ChatbotUIProps> = ({ 
  initialMessage = "Hello! I'm your virtual assistant at Wrapping The World. How can I help you with vehicle wraps, ceramic coatings, or warranties today?",
  locationName = "Chicago" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    messages,
    isLoading,
    setIsLoading,
    inputMessage,
    setInputMessage,
    addMessage,
    clearInput
  } = useChatMessages({ initialMessage });

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    addMessage(userMessage);
    clearInput();
    setIsLoading(true);

    try {
      // Generate response based on the user's message
      const botResponse = await generateResponse(inputMessage, locationName);
      
      setTimeout(() => {
        const botMessage = {
          id: (Date.now() + 100).toString(),
          content: botResponse,
          sender: 'bot' as const,
          timestamp: new Date(),
        };
        
        addMessage(botMessage);
        setIsLoading(false);
      }, 1000); // Simulate network delay
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Sorry, I encountered an error. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <ChatToggleButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Chat header */}
            <ChatHeader 
              locationName={locationName} 
              onClose={() => setIsOpen(false)} 
            />

            {/* Chat messages */}
            <ChatMessages 
              messages={messages} 
              isLoading={isLoading} 
            />

            {/* Chat input */}
            <ChatInput 
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              locationName={locationName}
              isOpen={isOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotUI;
