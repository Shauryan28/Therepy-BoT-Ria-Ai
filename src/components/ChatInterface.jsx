import React from 'react';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';
import Header from './Header';
import { useAI } from '../contexts/AIContext';

function ChatInterface() {
  const { clearChat } = useAI();

  return (
    <div className="max-w-4xl mx-auto h-screen flex flex-col">
      <Header onClear={clearChat} />
      <ChatMessages />
      <MessageInput />
    </div>
  );
}

export default ChatInterface;