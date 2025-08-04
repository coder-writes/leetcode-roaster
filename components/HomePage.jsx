import React, { useState } from 'react';
import { UserIcon } from './IconComponents.jsx';

const HomePage = ({ onStartRoast }) => {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user1.trim() && user2.trim()) {
      onStartRoast(user1.trim(), user2.trim());
    }
  };

  const isDisabled = !user1.trim() || !user2.trim();

  return (
    <div className="animate-fade-in text-center flex flex-col items-center py-10 w-full">
      
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
        LeetCode Roaster
      </h1>
      
      <p className="mt-4 mb-10 text-lg text-gray-600 max-w-xl mx-auto">
        Enter two LeetCode usernames to see who gets praised and who gets roasted.
      </p>

      <form onSubmit={handleSubmit} className="p-4 rounded-lg max-w-md mx-auto w-full">
        <div className="space-y-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <UserIcon className="w-5 h-5"/>
            </span>
            <input
              type="text"
              value={user1}
              onChange={(e) => setUser1(e.target.value)}
              placeholder="First LeetCode Username"
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
              aria-label="LeetCode Username 1"
            />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <UserIcon className="w-5 h-5"/>
            </span>
            <input
              type="text"
              value={user2}
              onChange={(e) => setUser2(e.target.value)}
              placeholder="Second LeetCode Username"
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
              aria-label="LeetCode Username 2"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className="w-full mt-6 py-3 px-6 bg-gray-900 text-white font-bold text-lg rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Start Roast
        </button>
      </form>
    </div>
  );
};

export default HomePage;
