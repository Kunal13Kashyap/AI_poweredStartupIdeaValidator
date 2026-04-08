import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateReport = async (title, description) => {
  const prompt = `
    You are an expert startup consultant.

    Return STRICTLY valid JSON only.

    {
      "problem": "...",
      "customer": "...",
      "market": "...",
      "competitor": [
        "Competitor 1 - differentiation",
        "Competitor 2 - differentiation",
        "Competitor 3 - differentiation"
      ],
      "tech_stack": ["tech1", "tech2", "tech3", "tech4"],
      "risk_level": "Low | Medium | High",
      "profitability_score": 0,
      "justification": "..."
    }

    Rules:
    - No explanation
    - No markdown
    - Exactly 3 competitors
    - Tech stack 4-6 items
    - Score must be integer (0-100)

    Input:
    title: ${title}
    description: ${description}
    `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const text = response.text;

    const start = text.indexOf("{");
    const end = text.lastIndexOf("}") + 1;

    if (start === -1 || end === -1) {
      throw new Error("Invalid JSON response");
    }

    const jsonString = text.slice(start, end);
    const parsed = JSON.parse(jsonString);

    return parsed;
  } catch (err) {
    console.error("AI Error:", err.message);

    return {
      problem: "Analysis unavailable",
      customer: "N/A",
      market: "N/A",
      competitor: ["N/A", "N/A", "N/A"],
      tech_stack: ["N/A"],
      risk_level: "Medium",
      profitability_score: 50,
      justification: "Fallback due to AI error",
    };
  }
};