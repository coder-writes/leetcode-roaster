import React, { useState, useEffect } from 'react';
import { fetchLeetCodeData } from '../services/leetcodeService.js';
import { generateRoast } from '../services/geminiService.js';
import Loader from './Loader.jsx';
import { BackIcon } from './IconComponents.jsx';
import ProfileCard from './ProfileCard.jsx';

const useTypewriter = (text, speed = 30) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (!text) return;
        setDisplayText('');
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return displayText;
};

const RoastPage = ({ user1Name, user2Name, onGoBack }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [roast, setRoast] = useState('');
    const [user1Data, setUser1Data] = useState(null);
    const [user2Data, setUser2Data] = useState(null);

    const displayedRoast = useTypewriter(roast, 22);

    useEffect(() => {
        const fetchAndRoast = async () => {
            try {
                setLoading(true);
                setError(null);

                const [data1, data2] = await Promise.all([
                    fetchLeetCodeData(user1Name),
                    fetchLeetCodeData(user2Name)
                ]);

                if (data1.success === false || data2.success === false) {
                    throw new Error('Could not fetch one or both LeetCode profiles. Please check the usernames and try again.');
                }
                setUser1Data(data1.data);
                setUser2Data(data2.data);

                const roastText = await generateRoast(data1.data, data2.data, user1Name, user2Name);
                setRoast(roastText);

            } catch (err) {
                setError(err.message || 'An unknown error occurred. Please try again.');
                setRoast('');
            } finally {
                setLoading(false);
            }
        };

        fetchAndRoast();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user1Name, user2Name]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="animate-fade-in w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-white via-slate-100 to-slate-200">
            <button
                onClick={onGoBack}
                className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-gray-900 font-medium transition-colors z-10 bg-white/70 rounded-full px-3 py-1 shadow-sm border border-gray-200"
            >
                <BackIcon className="w-5 h-5" />
                <span>Back</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 mt-16 w-full max-w-4xl">
                <ProfileCard username={user1Name} data={user1Data} />
                <ProfileCard username={user2Name} data={user2Data} />
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-center shadow-sm mt-8 max-w-xl w-full">
                    <strong className="font-semibold">Error: </strong>
                    <span>{error}</span>
                </div>
            )}

            {!error && roast && (
                <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-slate-100 min-h-[180px] mt-8 max-w-2xl w-full flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-slate-700 mb-4 tracking-tight">The Verdict</h2>
                    <p className="text-lg text-slate-800 font-normal whitespace-pre-wrap leading-relaxed text-center font-mono">
                        {displayedRoast}
                        <span className="inline-block w-2 h-5 bg-slate-700 animate-pulse align-middle ml-1 rounded"></span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default RoastPage;
