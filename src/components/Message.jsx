import React from 'react';
import ReactMarkdown from 'react-markdown';

function Message({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser
            ? 'bg-indigo-600 text-white'
            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200'
        } transition-colors duration-200`}
      >
        <ReactMarkdown
          className="prose prose-sm dark:prose-invert max-w-none"
          components={{
            p: ({ children }) => <p className="m-0">{children}</p>,
            ul: ({ children }) => <ul className="list-disc ml-4 mt-2">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal ml-4 mt-2">{children}</ol>,
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Message;