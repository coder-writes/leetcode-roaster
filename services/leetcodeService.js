const API_URL = 'https://leetcode-gfg-codechef-api.vercel.app/leetcode';

export const fetchLeetCodeData = async (username) => {
  if (!username) {
    return Promise.reject(new Error('Username is required.'));
  }
  

  try {
    const response = await fetch(`${API_URL}/userProfile/${username}`);

    if (response.success === false) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to fetch data' }));
      throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }
    
    const data = await response.json();

    return data;
  } catch (error) {
     const profileError = {
        status: 'error',
        message: `Failed to fetch data for ${username}. The user might not exist or the API is down.`,
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        ranking: 'N/A',
        contributionPoints: 0,
        reputation: 0,
        rating: 0,
        attendedContestsCount: 0,
    };
    return profileError;
  }
};
