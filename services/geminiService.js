
import { GoogleGenAI } from "@google/genai";

// Use Vite's environment variable system for frontend

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    'Google Gemini API key is missing! Please create a .env file in your project root with VITE_GEMINI_API_KEY=your_key and restart the dev server.'
  );
}
const ai = new GoogleGenAI({ apiKey });

export const generateRoast = async (
  user1Data,
  user2Data,
  user1Name,
  user2Name
) => {
console.log((user1Data.solvedStats.totalSolved)/2);
console.log((user2Data.solvedStats.totalSolved)/2);
console.log(user1Data.profile.ranking);
console.log(user2Data.profile.ranking);
console.log(user1Data.solvedStats.easySolved);
console.log(user2Data.solvedStats.easySolved);
console.log(user1Data.solvedStats.mediumSolved);
console.log(user2Data.solvedStats.mediumSolved);
console.log(user1Data.solvedStats.hardSolved);
console.log(user2Data.solvedStats.hardSolved);
  const prompt = `
    You are a witty and brutally funny AI that roasts LeetCode profiles. You will be given the stats of two users. Your task is to randomly choose one user to praise and one user to roast. 
    The praise should be discouraging, and a bit cheesy.
    if any of the users is a girl you got identified by name then if you roast her then you should be flirty and playful, but not mean.
    The roast should be hilarious, over-the-top, and savage, be brutal as much as you can.
    Use the provided stats to make your points specific and data-driven.
    The entire output must be a single block of text in Hinglish i.e. Whatsapp Language most of Indians use. Do not use markdown. 
    Start by Starting line "To chaliye Suru karte hain " and start from praising  one user which has better coding stats then move to the other user by roasting very brutally.
    Prioritize the roast over the praise, make sure the roast is more detailed and funny.


    Here are the users:
    User 1: ${user1Name}
    - Total Problems Solved: ${(user1Data.solvedStats.totalSolved)/2}
    - Easy: ${user1Data.solvedStats.easySolved}
    - Medium: ${user1Data.solvedStats.mediumSolved}
    - Hard: ${user1Data.solvedStats.hardSolved}
    - LeetCode Ranking: ${user1Data.profile.ranking}
    - Contribution Points: ${user1Data.contributionPoints}
    - Contest Rating: ${user1Data.contestInfo.rating ? Math.round(user1Data.contestInfo.rating) : 'N/A'}
    - Contests Attended: ${user1Data.contestInfo.attendedContestsCount}

    User 2: ${user2Name}
    - Total Problems Solved: ${(user2Data.solvedStats.totalSolved)/2}
    - Easy: ${user2Data.solvedStats.easySolved}
    - Medium: ${user2Data.solvedStats.mediumSolved}
    - Hard: ${user2Data.solvedStats.hardSolved}
    - LeetCode Ranking: ${user2Data.profile.ranking}
    - Contribution Points: ${user2Data.contributionPoints}
    - Contest Rating: ${user2Data.contestInfo.rating ? Math.round(user2Data.contestInfo.rating) : 'N/A'}
    - Contests Attended: ${user2Data.contestInfo.
attendedContestsCount}

    Now, generate the praise and roast session. Be creative and funny! 
    For example, if someone has many easy problems but few hard, you can call them the "King of Kindergarten Coding". 
    If someone has a low ranking, say their rank is hidden somewhere in the browser's scrollbar.
    If someone has few solved problems, joke that their keyboard must be collecting dust.
    If a user has a low contest rating, you could say their rating is lower than the room temperature.
    If they have attended many contests but their rating is still low, joke that they're a professional tourist of the LeetCode contest scene.
    If they have attended zero contests, mock them for being scared of a little competition.
    Be savage, be funny, and make it memorable.

    And  At last leave a line consolation for both users, like "Keep coding, you both are awesome in your own ways Please Keep it Up and Never Give Up!".
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        temperature: 0.9, // More creative
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating roast with Gemini:", error);
    return "The Gemini roaster is feeling a bit shy right now. Please try again later.";
  }
};
