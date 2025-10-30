
import { GoogleGenAI } from "@google/genai";
import { Technique } from '../types';

let aiInstance: GoogleGenAI | null = null;

const getAiInstance = () => {
    if (!aiInstance) {
        if (!process.env.API_KEY) {
            // In a real app, you might want to handle this more gracefully.
            // For this context, we assume the key is always present.
            throw new Error("API_KEY environment variable not set.");
        }
        aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return aiInstance;
};

export const getGuidedScript = async (technique: Technique, languageName: string): Promise<string> => {
  const ai = getAiInstance();
  const prompt = `
    You are a world-class mindfulness and relaxation coach. Your voice is calm, soothing, and deeply reassuring.
    Your task is to generate a guided script for a user who wants to relax.

    **Technique:** ${technique.title}
    **Technique Description:** ${technique.description}
    **Target Language:** ${languageName}

    **Instructions:**
    1. Start with a gentle and welcoming introduction. Prepare the user for the practice.
    2. Provide clear, step-by-step instructions for the "${technique.title}" technique. Use the description as a guide.
    3. Use simple, accessible language. The tone should be encouraging and non-judgmental.
    4. Pace the instructions with pauses. Indicate pauses with "(...)" or by putting each major step on a new line.
    5. The entire script must be written in ${languageName}. Do not include any English unless it's part of the language itself (e.g., loanwords).
    6. End with a gentle conclusion, helping the user transition back from the exercise and carry the feeling of calm into their day.
    7. Format the response for easy reading with paragraphs. Do not use markdown like headers, lists, or bolding. Just plain text with line breaks.
    `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating guided script:", error);
    throw new Error("Failed to generate the guidance. Please check your connection or API key and try again.");
  }
};
