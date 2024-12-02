import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { useAI } from '../contexts/AIContext';

function MessageInput() {
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useAI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 transition-colors duration-200"
    >
      <div className="flex space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors duration-200"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="rounded-lg bg-indigo-600 dark:bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:bg-gray-400 dark:disabled:bg-gray-600"
        >
          <FiSend size={20} />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;