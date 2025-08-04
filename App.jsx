import React, { useState } from 'react';
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

  return (
    <div className="bg-gradient-to-br from-violet-100 to-blue-200 text-gray-800 min-h-screen w-full flex flex-col items-center justify-center p-4 font-sans relative">
      <a href="https://github.com/coder-writes" target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition-colors z-10" aria-label="View on GitHub">
        <GitHubIcon className="w-7 h-7" />
      </a>

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
