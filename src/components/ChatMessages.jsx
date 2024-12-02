import React, { useEffect, useRef } from 'react';
import { useAI } from '../contexts/AIContext';
import Message from './Message';

function ChatMessages() {
  const { messages, isLoading } = useAI();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {isLoading && (
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce delay-200" />
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;