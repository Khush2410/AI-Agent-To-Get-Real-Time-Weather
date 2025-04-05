# 🌤️ AI Agent to Get Real-Time Weather

A Node.js command-line chatbot powered by **Gemini AI** that responds to natural language prompts. It can fetch **real-time weather data** using the **OpenWeatherMap API**, and also answer **general knowledge or conversational queries** using **Gemini 1.5 Pro**.

---

## 🚀 Features

- 🤖 Chat with an AI assistant in your terminal  
- 🌍 Fetch live weather updates for any city  
- 🧠 Smart tool-use with Gemini 1.5 Pro  
- 💡 Ask questions about any topic  
- 🔁 Continuous conversation loop  

---

## 🛠️ Tech Stack

- **Node.js**  
- **Google Gemini API** (via `@google/generative-ai`)  
- **OpenWeatherMap API**  
- **dotenv** for secure API key management  

---

## 📦 Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/Khush2410/AI-Agent-To-Get-Real-Time-Weather.git
   cd AI-Agent-To-Get-Real-Time-Weather
2. **Install dependencies : 
   npm install
3. Add your API keys in a .env file (or credentials.env):
   GEMINI_API_KEY=your_google_gemini_api_key
   OPEN_WEATHER_API_KEY=your_open_weather_api_key
4. node index.js


## 💬 Usage
1. 🌦️ Weather Mode (Tool Use)
   - 💬 You: What is the weather in Bikaner?
   - 🤖 Gemini: TOOL:getWeatherDetails(bikaner)
   - 🌤️ Weather in Bikaner: 37°C
  
2. 💡 General Knowledge / Chat Mode
    - 💬 You: Who discovered gravity?
    - 🤖 Gemini: Gravity was discovered by Sir Isaac Newton after observing an apple fall from a tree.
    
    - 💬 You: Can you tell me a joke?
    - 🤖 Gemini: Why don’t scientists trust atoms? Because they make up everything!

## ⏹️ To Exit
   - Type "exit" at any time to quit the conversation.

🔐 API Keys Required
  - Google Gemini API Key
  - OpenWeatherMap API Key

✨ Author
Made with 💙 by Khush
