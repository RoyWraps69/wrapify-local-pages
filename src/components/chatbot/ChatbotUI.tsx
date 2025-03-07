
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useChatMessages } from './hooks/useChatMessages';
import { generateResponse } from './services/chatResponseService';
import ChatToggleButton from './components/ChatToggleButton';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import ConsultationScheduler from './components/ConsultationScheduler';
import { format } from 'date-fns';

interface ChatbotUIProps {
  initialMessage?: string;
  locationName?: string;
}

const ChatbotUI: React.FC<ChatbotUIProps> = ({ 
  initialMessage = "Hello! I'm your virtual assistant at Wrapping The World. How can I help you with vehicle wraps, ceramic coatings, or warranties today?",
  locationName = "Chicago" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  
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
      // Check if the message contains scheduling keywords
      const lowercaseMessage = inputMessage.toLowerCase();
      if (
        lowercaseMessage.includes('schedule') || 
        lowercaseMessage.includes('appointment') || 
        lowercaseMessage.includes('booking') || 
        lowercaseMessage.includes('consult') ||
        lowercaseMessage.includes('meet')
      ) {
        const schedulingResponse = {
          id: (Date.now() + 100).toString(),
          content: `I'd be happy to help you schedule a consultation in ${locationName}. You can select a date and time for your appointment.`,
          sender: 'bot' as const,
          timestamp: new Date(),
        };
        
        setTimeout(() => {
          addMessage(schedulingResponse);
          setIsLoading(false);
          setShowScheduler(true);
        }, 1000);
        return;
      }
      
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
  
  const handleScheduleConsultation = (date: Date, time: string) => {
    // In a real application, this would send the appointment to a CRM or calendar system
    // For now, we'll just simulate a successful booking with a confirmation message
    
    setShowScheduler(false);
    setIsLoading(true);
    
    setTimeout(() => {
      const confirmationMessage = {
        id: Date.now().toString(),
        content: `Great! I've scheduled your consultation for ${format(date, 'EEEE, MMMM d, yyyy')} at ${time} in our ${locationName} location. Our team will contact you to confirm the details. Is there anything specific about vehicle wraps or coatings you'd like to discuss during your consultation?`,
        sender: 'bot' as const,
        timestamp: new Date(),
      };
      
      addMessage(confirmationMessage);
      setIsLoading(false);
      
      // Show a toast notification for extra confirmation
      toast.success('Consultation scheduled!', {
        description: `${format(date, 'MMMM d, yyyy')} at ${time}`,
        duration: 5000,
      });
    }, 1500);
  };
  
  const cancelScheduler = () => {
    setShowScheduler(false);
    
    const cancelMessage = {
      id: Date.now().toString(),
      content: `No problem! If you'd like to schedule a consultation later, just let me know. Is there anything else I can help you with regarding vehicle wraps or coatings in ${locationName}?`,
      sender: 'bot' as const,
      timestamp: new Date(),
    };
    
    addMessage(cancelMessage);
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
            
            {/* Consultation scheduler */}
            {showScheduler && (
              <div className="absolute inset-0 bg-white bg-opacity-95 z-10 flex items-center justify-center p-4">
                <ConsultationScheduler
                  locationName={locationName}
                  onSchedule={handleScheduleConsultation}
                  onCancel={cancelScheduler}
                />
              </div>
            )}

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
