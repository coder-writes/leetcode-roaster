import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <div>
                <img
                    src="https://c.tenor.com/HRp_CB_lzAoAAAAd/tenor.gif"
                    alt="Chef is cooking"
                />
            </div>
            <div className="w-8 h-8 border-4 border-yellow-200 border-t-yellow-600 rounded-full animate-spin"></div>
            <p className="text-xl font-semibold text-yellow-700">
                Let Me Cook... <span role="img" aria-label="chef">👨‍🍳</span>
            </p>
            <p className="text-md text-gray-500">
                Whipping up some spicy roasts! <span role="img" aria-label="fire">🔥</span>
            </p>
            <p className="text-sm text-gray-400 italic">
                (If it takes too long, blame the sous-chef.)
            </p>
        </div>
    );
};

export default Loader;
