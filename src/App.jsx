import React from 'react';
import ChatInterface from './components/ChatInterface';
import { AIProvider } from './contexts/AIContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AIProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <ChatInterface />
        </div>
      </AIProvider>
    </ThemeProvider>
  );
}

export default App;