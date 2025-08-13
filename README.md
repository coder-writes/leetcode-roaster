# LeetCode Roaster

> **A fun web app to roast and praise LeetCode users using AI!**

![LeetCode Roaster Screenshot](screenshot.png)

## 🚀 What is LeetCode Roaster?
LeetCode Roaster is a playful web application that lets you compare two LeetCode users and generates a witty, AI-powered roast and praise session based on their coding stats. Enter two usernames, and let the app decide who gets the glory and who gets the burn!

- 🔥 **Savage Roasts**: Hilarious, data-driven, and always playful
- 🏆 **Sweet Praises**: Encouraging and a bit cheesy
- 🤖 **Powered by Google Gemini AI**
- 📊 **Live LeetCode Stats**: Fetches real-time user data

## ✨ Features
- Enter any two LeetCode usernames
- See a side-by-side profile comparison
- Get a unique AI-generated roast and praise every time
- Beautiful, responsive UI with animated effects
- 100% client-side, no account or login needed

## 🖥️ Demo
Try it live: [LeetCode Roaster Demo](https://your-demo-link.com)

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- A [Google Gemini API Key](https://ai.google.dev/) (for AI roasts)

### Installation
1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/leetcode-roaster.git
   cd leetcode-roaster
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up your Gemini API key:**
   - Create a `.env.local` file in the project root:
     ```env
     GEMINI_API_KEY=your_google_gemini_api_key_here
     ```

### Run the app locally
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

## 🧩 Project Structure
```
.
├── components/         # React UI components
├── services/           # API and AI service logic
├── App.jsx             # Main app component
├── index.jsx           # Entry point
├── vite.config.js      # Vite config
├── types.js            # JSDoc type definitions
├── index.html          # HTML template
└── ...
```

## 🤖 How It Works
- Fetches LeetCode stats for both users
- Sends stats to Google Gemini AI for a creative roast & praise
- Displays results with animated typewriter effect

## 🙏 Credits
- [LeetCode Stats API](https://leetcode-stats-api.herokuapp.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 License
MIT

---

> Made with ❤️ by [Your Name](https://github.com/your-username)
