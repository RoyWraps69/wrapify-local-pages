
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Avatar } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotUIProps {
  initialMessage?: string;
  locationName?: string;
}

const ChatbotUI: React.FC<ChatbotUIProps> = ({ 
  initialMessage = "Hello! I'm your virtual assistant at Wrapping The World. How can I help you with vehicle wraps, ceramic coatings, or warranties today?",
  locationName = "Chicago" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Here we'll simulate a response, but in production this would be a call to an AI service
      const botResponse = await generateResponse(inputMessage, locationName);
      
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 100).toString(),
          content: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        };
        
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000); // Simulate network delay
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Sorry, I encountered an error. Please try again.');
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full w-14 h-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-wrap-blue hover:bg-blue-700'}`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

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
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-blue-700 rounded-full"
              >
                <ChevronDown size={20} />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-wrap-blue text-white rounded-tr-none'
                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 p-3 rounded-lg rounded-tl-none border border-gray-200">
                    <div className="flex space-x-2 items-center">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
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
                  onClick={handleSendMessage}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// This function would be replaced with a call to your AI service in production
const generateResponse = async (message: string, locationName: string): Promise<string> => {
  // Simple keyword-based response system for demo
  const lowercaseMessage = message.toLowerCase();
  
  // Create location-aware responses
  if (lowercaseMessage.includes('warranty') || lowercaseMessage.includes('guarantee')) {
    return `Our comprehensive 5-year warranty covers all professional vehicle wraps and ceramic coatings performed by our certified ${locationName} technicians. It includes protection against peeling, cracking, and excessive fading under normal conditions.`;
  }
  
  if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost') || lowercaseMessage.includes('how much')) {
    return `The cost of vehicle wraps in ${locationName} depends on your vehicle size and project needs. Full wraps typically range from $2,500-$6,000, while partial wraps start around $1,000. We're very competitive for the ${locationName} area and offer free consultations!`;
  }
  
  if (lowercaseMessage.includes('address') || lowercaseMessage.includes('location') || lowercaseMessage.includes('where')) {
    return `Our ${locationName} installation center is located at 4711 N. Lamon Ave, Chicago. We're just 5 minutes from the Kennedy Expressway and serve all ${locationName} and surrounding areas!`;
  }
  
  if (lowercaseMessage.includes('time') || lowercaseMessage.includes('how long') || lowercaseMessage.includes('duration')) {
    return `In our ${locationName} facility, a complete vehicle wrap typically takes 3-5 business days to install. Partial wraps may be completed in 1-2 days. Ceramic coating applications usually require 2-3 days, as we need time for proper curing in our climate-controlled environment.`;
  }
  
  if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('phone') || lowercaseMessage.includes('email')) {
    return `You can reach our ${locationName} team at (312) 597-1286 or by email at info@wrappingtheworld.com. Our business hours are Monday-Friday 8am-6pm and Saturday 9am-3pm.`;
  }

  if (lowercaseMessage.includes('ceramic') || lowercaseMessage.includes('coating')) {
    return `Our ceramic coating services in ${locationName} provide exceptional protection against weather elements, road salt, and UV damage. We use premium nano-ceramic formulations that last up to 5 years and maintain your vehicle's shine in all ${locationName} weather conditions.`;
  }
  
  // Default response
  return `Thank you for your message! Our ${locationName} team specializes in vehicle wraps, ceramic coatings, and paint protection film. If you have specific questions about our services, warranty coverage, or would like to schedule a consultation, please let me know how I can assist you further.`;
};

export default ChatbotUI;
