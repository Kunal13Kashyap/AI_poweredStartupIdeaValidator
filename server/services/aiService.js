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
      model: "models/gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    if (!text) {
      throw new Error("Empty AI response");
    }

    text = text.replace(/```json|```/g, "").trim();

    text = text.replace(/,\s*([\]}])/g, "$1");

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("Invalid JSON format");

      let cleaned = match[0].replace(/,\s*([\]}])/g, "$1");
      parsed = JSON.parse(cleaned);
    }

    
    if (!parsed.problem || !parsed.customer) {
      throw new Error("Incomplete AI response");
    }

    return parsed;

  } catch (err) {
    console.error("AI Service Error:", err.message);

    throw new Error("Failed to generate AI report");
  }
};