import React from 'react';
import { FiTrash2, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

function Header({ onClear }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Chat with Ria</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Your AI Support Companion</p>
        </div>
        <button
          onClick={onClear}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          title="Clear chat"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
      <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-2">
        Made with ❤️ by Shaurya Nandecha
      </p>
    </header>
  );
}

export default Header;