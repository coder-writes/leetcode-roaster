import React from 'react';
import { BackIcon, ProblemIcon, RankIcon, ContributionIcon, TrophyIcon, CalendarIcon } from './IconComponents.jsx';
const ProfileCard = ({ username, data }) => {
  const baseClasses = "w-full bg-white/40 backdrop-blur-sm border border-white/20 p-6 rounded-xl flex flex-col shadow-md";

  if (!data || data.success === false) {
    return (
      <div className={`${baseClasses} items-center justify-center bg-red-100/50`}>
        <h3 className="text-xl font-bold text-red-900">{username}</h3>
        <p className="mt-4 text-red-700 font-medium">Could not fetch profile data.</p>
      </div>
    );
  }

  const accentColor = `text-slate-600`;

return (
    <div className={`${baseClasses} relative overflow-hidden group`}>
        {/* Subtle background gradient blob */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 via-purple-100 to-transparent rounded-full opacity-40 blur-2xl pointer-events-none transition-all duration-700 group-hover:scale-110" />
        <div className="flex flex-col items-center z-10 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-300 flex items-center justify-center shadow-lg mb-3 border-4 border-white/60">
                <span className="text-2xl font-bold text-white select-none">{username[0]?.toUpperCase()}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 text-center tracking-wide">{username}</h3>
            <div className="mt-4 w-full space-y-3 text-base text-slate-700">
                <div className="flex items-center gap-2 justify-center">
                    <RankIcon className={`w-5 h-5 ${accentColor}`} />
                    <span className="font-medium">Ranking</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-slate-100 text-slate-900 font-semibold text-sm">{data.profile.ranking}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <ProblemIcon className={`w-5 h-5 ${accentColor}`} />
                    <span className="font-medium">Solved</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-green-100 text-green-800 font-semibold text-sm">{data.solvedStats.totalSolved}</span>
                    <span className="ml-2 text-xs text-slate-500">(E:{data.solvedStats.easySolved}, M:{data.solvedStats.mediumSolved}, H:{data.solvedStats.hardSolved})</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <ContributionIcon className={`w-5 h-5 ${accentColor}`} />
                    <span className="font-medium">Contrib</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 font-semibold text-sm">{data.contributionPoints}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <TrophyIcon className={`w-5 h-5 ${accentColor}`} />
                    <span className="font-medium">Rating</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold text-sm">{data.contestInfo.rating ? Math.round(data.contestInfo.rating) : 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                    <CalendarIcon className={`w-5 h-5 ${accentColor}`} />
                    <span className="font-medium">Contests</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-pink-100 text-pink-800 font-semibold text-sm">{data.contestInfo.attendedContestsCount ?? 'N/A'}</span>
                </div>
            </div>
        </div>
    </div>
);
};

export default ProfileCard;