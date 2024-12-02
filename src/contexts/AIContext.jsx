import React, { createContext, useContext, useState, useCallback } from 'react';
import { aiService } from '../services/ai-service';

const AIContext = createContext();

export function AIProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasShownDisclaimer, setHasShownDisclaimer] = useState(false);

  const sendMessage = useCallback(async (content) => {
    if (!content.trim()) return;

    const newMessage = { role: 'user', content, timestamp: new Date() };
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
      if (!hasShownDisclaimer) {
        setHasShownDisclaimer(true);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Please note: I'm an AI assistant, not a licensed therapist. While I'm here to listen and support you, I cannot provide medical advice or replace professional mental health care.",
          timestamp: new Date()
        }]);
      }

      const response = await aiService.generateResponse(content);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble responding right now. Could you please try again?",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [hasShownDisclaimer]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setHasShownDisclaimer(false);
  }, []);

  return (
    <AIContext.Provider value={{ messages, isLoading, sendMessage, clearChat }}>
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
}