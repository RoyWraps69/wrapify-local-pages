
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTownData } from '@/utils/townFunctions';
import { normalizeSlug } from '@/utils/towns/slugUtils';

interface ChatbotContextType {
  locationName: string;
  setLocationName: (name: string) => void;
}

const defaultContext: ChatbotContextType = {
  locationName: "Chicago",
  setLocationName: () => {}
};

const ChatbotContext = createContext<ChatbotContextType>(defaultContext);

export const useChatbot = () => useContext(ChatbotContext);

interface ChatbotProviderProps {
  children: React.ReactNode;
  locationName?: string;
}

export const ChatbotProvider: React.FC<ChatbotProviderProps> = ({ 
  children,
  locationName: initialLocationName 
}) => {
  const [locationName, setLocationName] = useState<string>(initialLocationName || "Chicago");
  const location = useLocation();
  
  // Detect location from URL when component mounts or URL changes
  useEffect(() => {
    // Check if we're on a town/location page
    const locationMatch = location.pathname.match(/\/locations\/([\w-]+)/);
    
    if (locationMatch && locationMatch[1]) {
      const townSlug = locationMatch[1];
      const normalizedSlug = normalizeSlug(townSlug);
      
      try {
        const townData = getTownData(normalizedSlug);
        if (townData && townData.name) {
          setLocationName(townData.name);
          return;
        }
      } catch (error) {
        console.error("Error detecting location from URL:", error);
      }
    }
    
    // Don't override if a location was already set
    if (!initialLocationName) {
      setLocationName("Chicago");
    }
  }, [location.pathname, initialLocationName]);
  
  return (
    <ChatbotContext.Provider value={{ locationName, setLocationName }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotProvider;
