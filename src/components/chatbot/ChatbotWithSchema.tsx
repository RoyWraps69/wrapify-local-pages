
import React from 'react';
import ChatbotUI from './ChatbotUI';
import { useChatbot } from './ChatbotProvider';
import { Helmet } from 'react-helmet-async';
import { generateChatbotFAQSchema } from '@/utils/seo/schemas/chatbotFAQSchema';

interface ChatbotWithSchemaProps {
  initialMessage?: string;
}

const ChatbotWithSchema: React.FC<ChatbotWithSchemaProps> = ({ initialMessage }) => {
  const { locationName } = useChatbot();
  
  // Generate the FAQ schema for the chatbot
  const faqSchema = generateChatbotFAQSchema(locationName);
  
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <ChatbotUI initialMessage={initialMessage} locationName={locationName} />
    </>
  );
};

export default ChatbotWithSchema;
