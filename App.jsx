import React, { useState } from 'react';
// Tooltip messages for GitHub icon
const githubMessages = [
  'Source code',
  'If you liked this repo please star it on GitHub',
];
import HomePage from './components/HomePage.jsx';
import RoastPage from './components/RoastPage.jsx';
import { GitHubIcon } from './components/IconComponents.jsx';

const View = {
  Home: 'Home',
  Roast: 'Roast',
};

const App = () => {
  const [view, setView] = useState(View.Home);
  const [usernames, setUsernames] = useState(['', '']);

  const handleStartRoast = (user1, user2) => {
    setUsernames([user1, user2]);
    setView(View.Roast);
  };

  const handleGoBack = () => {
    setView(View.Home);
    setUsernames(['', '']);
  };

  // Pick a random message for the tooltip (changes on each render)
  const githubTooltip = githubMessages[Math.floor(Math.random() * githubMessages.length)];

  return (
    <div className="bg-gradient-to-br from-violet-100 to-blue-200 text-gray-800 min-h-screen w-full flex flex-col items-center justify-center p-4 font-sans relative">
      {/* GitHub Icon with Arrow Tooltip */}
      <div className="absolute top-6 right-6 flex flex-col items-end z-20">
        {/* Tooltip */}
        <div className="relative mb-2">
          <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-lg animate-bounce">
            {githubTooltip}
            {/* Arrow */}
            <div className="absolute right-2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </div>
        <a href="https://github.com/coder-writes/leetcode-roaster" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="View on GitHub">
          <GitHubIcon className="w-7 h-7" />
        </a>
      </div>

      <main className="w-full max-w-4xl mx-auto flex-grow flex items-center justify-center">
        {view === View.Home && <HomePage onStartRoast={handleStartRoast} />}
        {view === View.Roast && <RoastPage user1Name={usernames[0]} user2Name={usernames[1]} onGoBack={handleGoBack} />}
      </main>

      <footer className="w-full py-4 text-center text-gray-500 text-sm">
        Made with ❤️ by Rishi
      </footer>
    </div>
  );
};

export default App;
