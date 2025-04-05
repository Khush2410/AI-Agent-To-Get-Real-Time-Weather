import readline from "readline";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config({ path: './credentials.env' });

import fetch from "node-fetch";
globalThis.fetch = fetch;

// Open weather API Key
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

//Gemini API Key 
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

// Initialize Gemini
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Tool function
async function getWeatherDetails(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    
    console.log("Weather API URL >>>",apiUrl)
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
  
      if (res.ok && data.main) {
        return `${data.main.temp}°C`;
      } else {
        return "Weather data not found";
      }
    } catch (error) {
      console.error("Error fetching weather:", error.message);
      return "Error fetching weather data";
    }
  }

// Create readline interface for CLI interaction
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const model = genAI.getGenerativeModel(
  { model: "gemini-1.5-pro-latest" },
  { apiVersion: 'v1beta' }
);

async function chatAgent(userPrompt) {
  const prompt = `
You are an AI assistant. 
If a question involves weather, reply in the format:
TOOL:getWeatherDetails(cityName)
Else, give a direct answer.

User: ${userPrompt}
`;

  const result = await model.generateContent(prompt);
  console.log("result >>>",JSON.stringify(result));
  const response = await result.response;
  const text = await response.text();

  console.log("\n🤖 Gemini:", text);

  // Handle tool action
  if (text.startsWith("TOOL:")) {
    const match = text.match(/getWeatherDetails\(([^)]+)\)/i);
    if (match) {
      const city = match[1].replace(/['"]/g, '').trim();
      const weather = await getWeatherDetails(city);
      console.log(`🌤️ Weather in ${city}: ${weather}`);
    }
  }
}

// Continuous loop
function promptLoop() {
  rl.question("\n💬 You: ", async (userInput) => {
    if (userInput.toLowerCase() === "exit") {
      console.log("👋 Bye!");
      rl.close();
      return;
    }

    await chatAgent(userInput);
    promptLoop(); // Recursive call
  });
}

// Start the loop
console.log("🔁 Gemini Agent Ready! Type 'exit' to quit.");
promptLoop();
